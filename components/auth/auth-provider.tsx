"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"

interface AuthContextType {
  isAuthenticated: boolean
  username: string | null
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  username: null,
  logout: () => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState<string | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // 检查登录状态
    const auth = localStorage.getItem("isAuthenticated")
    const user = localStorage.getItem("username")

    if (auth === "true" && user) {
      setIsAuthenticated(true)
      setUsername(user)
    } else if (pathname !== "/login") {
      // 未登录且不在登录页面，跳转到登录页
      router.push("/login")
    }
  }, [pathname, router])

  const logout = () => {
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("username")
    localStorage.removeItem("loginTime")
    setIsAuthenticated(false)
    setUsername(null)
    router.push("/login")
  }

  return <AuthContext.Provider value={{ isAuthenticated, username, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
