import { ImageResponse } from "next/og";
import { getBlogPostBySlug } from "@/data/blogPosts";

// Google's CSS2 endpoint serves woff2 to modern UAs (which Satori can't render) and an
// older format to legacy ones — this UA string is the standard workaround to get a
// Satori-compatible font file from Google Fonts at request time. Satori has no built-in
// default font, so this MUST succeed or no text can render at all.
const LEGACY_UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36";

async function loadGeistBold() {
  try {
    const cssRes = await fetch("https://fonts.googleapis.com/css2?family=Geist:wght@900", {
      headers: { "User-Agent": LEGACY_UA },
    });
    if (!cssRes.ok) return null;

    const css = await cssRes.text();

    // Google splits the response into several @font-face blocks by unicode-range
    // (cyrillic, vietnamese, latin-ext, latin, ...). We need the plain "latin" block —
    // it covers basic ASCII (U+0000-00FF), i.e. every character our titles use.
    // Grabbing the first url() in the whole response picks an arbitrary block instead
    // (e.g. cyrillic-ext) and silently drops glyphs, like a capital letter rendering as
    // a missing-glyph box.
    const latinBlock = css.match(/\/\* latin \*\/[^]*?\}/);
    const urlMatch = (latinBlock?.[0] ?? css).match(/url\(([^)]+)\)/);
    if (!urlMatch) return null;

    const fontRes = await fetch(urlMatch[1]);
    if (!fontRes.ok) return null;

    return await fontRes.arrayBuffer();
  } catch {
    return null;
  }
}

export async function GET(_request, { params }) {
  const { locale, slug } = await params;
  const post = getBlogPostBySlug(slug, locale);

  if (!post) {
    return new Response("Not found", { status: 404 });
  }

  const fontData = await loadGeistBold();
  if (!fontData) {
    return new Response("Font unavailable", { status: 503 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#0A0A0A",
          fontFamily: "Geist",
        }}
      >
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: -180,
            left: -260,
            width: 1150,
            height: 1150,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(161,226,51,0.18) 0%, rgba(161,226,51,0) 68%)",
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 480,
            right: -320,
            width: 1050,
            height: 1050,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(134,79,254,0.16) 0%, rgba(134,79,254,0) 68%)",
          }}
        />

        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 64,
            left: 64,
            fontSize: 30,
            fontWeight: 900,
            color: "#EDEDED",
            letterSpacing: "-0.03em",
          }}
        >
          SYNTTEK
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            gap: 28,
            padding: "0 72px 180px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              alignItems: "center",
              padding: "10px 22px",
              borderRadius: 999,
              border: "2px solid rgba(161,226,51,0.45)",
              background: "rgba(161,226,51,0.1)",
              color: "#A1E233",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: "0.02em",
            }}
          >
            {post.category}
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 58,
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#EDEDED",
            }}
          >
            {post.title}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 8 }}>
            <div style={{ display: "flex", width: 48, height: 2, background: "#A1E233" }} />
            <div style={{ display: "flex", fontSize: 28, color: "#A1E233", fontWeight: 700, letterSpacing: "0.04em" }}>
              synttek.com/blog
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1080,
      height: 1920,
      fonts: [{ name: "Geist", data: fontData, weight: 900, style: "normal" }],
      headers: {
        "Cache-Control": "public, max-age=3600",
      },
    },
  );
}
