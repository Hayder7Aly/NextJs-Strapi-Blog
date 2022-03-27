module.exports = {
  reactStrictMode: true,
  images: {
    default: "loader",
    domains: ["strapi-mind-blogs.herokuapp.com"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};