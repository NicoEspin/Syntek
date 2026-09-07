import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  skipProxyUrlNormalize: true,
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/en/servicios",
        destination: "/en/services",
        permanent: true,
      },
      {
        source: "/en/servicios/:slug",
        destination: "/en/services/:slug",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/es/projects",
        permanent: true,
      },
      {
        source: "/projects/:id",
        destination: "/es/projects/:id",
        permanent: true,
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
