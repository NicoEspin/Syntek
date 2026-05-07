import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  htmlLimitedBots: /.*/,
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
