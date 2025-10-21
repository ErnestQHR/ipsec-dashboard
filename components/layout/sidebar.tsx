"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Cpu, Settings, BarChart3, FileText, Shield, LogOut, User, Bell } from "lucide-react"
import { useAuth } from "@/components/auth/auth-provider"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "监控台", href: "/", icon: LayoutDashboard },
  { name: "硬件状态", href: "/hardware-status", icon: Cpu },
  { name: "性能测试", href: "/performance", icon: BarChart3 },
  { name: "连接配置", href: "/config", icon: Settings },
  { name: "密钥日志", href: "/logs", icon: FileText },
  { name: "告警中心", href: "/alerts", icon: Bell },
]

export function Sidebar() {
  const pathname = usePathname()
  const { username, logout } = useAuth()

  return (
    <div className="flex h-screen w-64 flex-col border-r border-blue-200 bg-gradient-to-b from-blue-50 to-white shadow-lg">
      {/* Logo */}
      <div className="flex h-16 items-center gap-3 border-b border-blue-200 px-6 bg-white">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 shadow-md">
          <Shield className="h-6 w-6 text-white" />
        </div>
        <div>
          <div className="text-lg font-bold text-gray-800">天工密阵</div>
          <div className="text-xs text-gray-600">IPSec 安全通信</div>
        </div>
      </div>

      {username && (
        <div className="mx-4 mt-4 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 border border-blue-200 p-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
              <User className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-gray-800 truncate">{username}</div>
              <div className="text-xs text-gray-600">系统管理员</div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
                isActive
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md"
                  : "text-gray-700 hover:bg-blue-100 hover:text-blue-700",
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-blue-200 p-4 bg-white space-y-3">
        <Button
          onClick={logout}
          variant="outline"
          className="w-full justify-start gap-2 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 hover:border-red-300 bg-transparent"
        >
          <LogOut className="h-4 w-4" />
          退出登录
        </Button>

        <div className="rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 p-3">
          <div className="text-xs font-semibold text-blue-700">系统版本</div>
          <div className="mt-1 text-xs text-gray-600">v1.0.0 (openEuler)</div>
          <div className="mt-2 text-xs text-gray-600">量子密钥 + 国产密码</div>
        </div>
      </div>
    </div>
  )
}
