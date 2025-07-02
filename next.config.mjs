/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'learnwithsumit.com',
      'avatars.githubusercontent.com'
    ],
    unoptimized: true,
  },
}

export default nextConfig
