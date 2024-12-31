const allowedHosts = [
  '*.placehold.co',
  '*.googleapis.com',
  '*.github.com',
  '*.githubusercontent.com',
  '*.vectorlogo.zone',
  '*.wikimedia.org',
  "*.fbcdn.net",
  '*.topcv.vn',
  '*.licdn.com',
  '*.amazonaws.com'
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: allowedHosts.map((hostname) => ({
      protocol: 'https',
      hostname,
      pathname: '**',
    })),
    dangerouslyAllowSVG: true,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
