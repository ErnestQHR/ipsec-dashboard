"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle, AlertTriangle, Info, CheckCircle, Search, Filter } from "lucide-react"
import { generateAlerts, type Alert } from "@/lib/mock-data"

// 类型定义已移至 lib/mock-data.ts

export default function AlertsPage() {
  const [alerts, setAlerts] = useState<Alert[]>([])
  const [filter, setFilter] = useState<string>("all")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const mockAlerts = generateAlerts()
    setAlerts(mockAlerts)
  }, [])

  const getAlertIcon = (level: string) => {
    switch (level) {
      case "critical":
        return <AlertCircle className="h-5 w-5 text-red-500" />
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-amber-500" />
      case "info":
        return <Info className="h-5 w-5 text-blue-500" />
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      default:
        return <Info className="h-5 w-5 text-gray-500" />
    }
  }

  const getAlertBadge = (level: string) => {
    const styles = {
      critical: "bg-red-100 text-red-700 border-red-300",
      warning: "bg-amber-100 text-amber-700 border-amber-300",
      info: "bg-blue-100 text-blue-700 border-blue-300",
      success: "bg-green-100 text-green-700 border-green-300",
    }
    const labels = {
      critical: "严重",
      warning: "警告",
      info: "信息",
      success: "成功",
    }
    return (
      <Badge className={`${styles[level as keyof typeof styles]} border`}>{labels[level as keyof typeof labels]}</Badge>
    )
  }

  const filteredAlerts = alerts.filter((alert) => {
    const matchesFilter = filter === "all" || alert.level === filter || (filter === "unresolved" && !alert.resolved)
    const matchesSearch =
      searchTerm === "" ||
      alert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.message.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const stats = {
    total: alerts.length,
    critical: alerts.filter((a) => a.level === "critical" && !a.resolved).length,
    warning: alerts.filter((a) => a.level === "warning" && !a.resolved).length,
    resolved: alerts.filter((a) => a.resolved).length,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-8">
      <div className="mb-8">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          告警中心
        </h1>
        <p className="mt-3 text-lg text-gray-600">系统告警监控与管理</p>
      </div>

      {/* 统计卡片 */}
      <div className="grid gap-6 md:grid-cols-4 mb-8">
        <Card className="border-blue-200 bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="text-sm text-gray-600">总告警数</div>
            <div className="mt-2 text-3xl font-bold text-gray-800">{stats.total}</div>
          </CardContent>
        </Card>
        <Card className="border-red-200 bg-red-50 shadow-sm">
          <CardContent className="p-6">
            <div className="text-sm text-red-600">严重告警</div>
            <div className="mt-2 text-3xl font-bold text-red-600">{stats.critical}</div>
          </CardContent>
        </Card>
        <Card className="border-amber-200 bg-amber-50 shadow-sm">
          <CardContent className="p-6">
            <div className="text-sm text-amber-600">警告告警</div>
            <div className="mt-2 text-3xl font-bold text-amber-600">{stats.warning}</div>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50 shadow-sm">
          <CardContent className="p-6">
            <div className="text-sm text-green-600">已解决</div>
            <div className="mt-2 text-3xl font-bold text-green-600">{stats.resolved}</div>
          </CardContent>
        </Card>
      </div>

      {/* 过滤和搜索 */}
      <Card className="border-blue-200 bg-white shadow-lg mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="搜索告警标题或内容..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-gray-300"
              />
            </div>
            <div className="flex gap-2">
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-[180px] border-gray-300">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="筛选级别" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">全部告警</SelectItem>
                  <SelectItem value="unresolved">未解决</SelectItem>
                  <SelectItem value="critical">严重</SelectItem>
                  <SelectItem value="warning">警告</SelectItem>
                  <SelectItem value="info">信息</SelectItem>
                  <SelectItem value="success">成功</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 告警列表 */}
      <div className="space-y-4">
        {filteredAlerts.map((alert) => (
          <Card
            key={alert.id}
            className={`border-2 shadow-md transition-all hover:shadow-lg ${
              alert.resolved ? "bg-gray-50 border-gray-200 opacity-75" : "bg-white border-blue-200"
            }`}
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="mt-1">{getAlertIcon(alert.level)}</div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{alert.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
                    </div>
                    {getAlertBadge(alert.level)}
                  </div>
                  <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <span className="font-medium">来源：</span>
                      {alert.source}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="font-medium">时间：</span>
                      {new Date(alert.timestamp).toLocaleString("zh-CN")}
                    </span>
                    {alert.resolved && (
                      <Badge className="bg-gray-200 text-gray-700 border-gray-300 border">已解决</Badge>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredAlerts.length === 0 && (
        <Card className="border-blue-200 bg-white shadow-lg">
          <CardContent className="p-12 text-center">
            <Info className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">没有找到匹配的告警记录</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
