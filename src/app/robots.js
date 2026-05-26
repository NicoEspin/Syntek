import { getAbsoluteUrl } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
    ],
    sitemap: getAbsoluteUrl("/sitemap.xml"),
    host: SITE_URL,
  };
}
