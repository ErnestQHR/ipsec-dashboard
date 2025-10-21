import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import LayoutContent from "./layout-content"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "天工密阵 - IPSec 安全监控系统",
  description: "基于量子密钥与国产密码的 IPSec 安全通信系统",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className={`font-sans antialiased`}>
        <LayoutContent>{children}</LayoutContent>
        <Analytics />
      </body>
    </html>
  )
}
