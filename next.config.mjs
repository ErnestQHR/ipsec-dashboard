/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // 支持静态导出
  output: 'export',
  trailingSlash: true,
  // 禁用服务器端功能
  distDir: 'out',
}

export default nextConfig
