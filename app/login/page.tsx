"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, User } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    // 模拟登录验证（实际项目中应该调用后端 API）
    setTimeout(() => {
      if (username === "admin" && password === "admin123") {
        // 保存登录状态到 localStorage
        localStorage.setItem("isAuthenticated", "true")
        localStorage.setItem("username", username)
        localStorage.setItem("loginTime", new Date().toISOString())
        router.push("/")
      } else {
        setError("用户名或密码错误")
        setLoading(false)
      }
    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-4">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl" />
      </div>

      <Card className="w-full max-w-md relative z-10 shadow-xl border-blue-100">
        <CardHeader className="space-y-4 text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              天工密阵
            </CardTitle>
            <CardDescription className="text-base mt-2">IPSec 安全通信监控系统</CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm font-medium">
                用户名
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="username"
                  type="text"
                  placeholder="请输入用户名"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-10 h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                密码
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="请输入密码"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              className="w-full h-11 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium shadow-lg"
              disabled={loading}
            >
              {loading ? "登录中..." : "登录"}
            </Button>

            <div className="pt-4 border-t border-gray-100">
              <p className="text-xs text-center text-gray-500">默认账号：admin / admin123</p>
              <p className="text-xs text-center text-gray-400 mt-1">基于量子密钥与国产密码的安全通信系统</p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
