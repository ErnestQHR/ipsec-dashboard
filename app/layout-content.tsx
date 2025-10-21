"use client"

import type React from "react"
import { usePathname } from "next/navigation"
import { Sidebar } from "@/components/layout/sidebar"
import { AuthProvider } from "@/components/auth/auth-provider"

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLoginPage = pathname === "/login"

  return (
    <AuthProvider>
      {isLoginPage ? (
        <main className="w-full">{children}</main>
      ) : (
        <div className="flex">
          <Sidebar />
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      )}
    </AuthProvider>
  )
}
