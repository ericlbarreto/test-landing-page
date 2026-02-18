import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tractian.com",
      },
      {
        protocol: "https",
        hostname: "**.tractian.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
