"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Cpu, HardDrive, Zap, Activity, AlertTriangle, CheckCircle2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HardwareStatus {
  deviceName: string
  status: "connected" | "disconnected" | "error"
  interface: "USB" | "PCI-E"
  driver: string
  firmware: string
  temperature: number
  powerConsumption: number
  uptime: number
  encryptionOps: number
  decryptionOps: number
  errorCount: number
}

export default function HardwareStatusPage() {
  const [hardware, setHardware] = useState<HardwareStatus>({
    deviceName: "华为鲲鹏 920 加密卡",
    status: "connected",
    interface: "PCI-E",
    driver: "UADK v2.6",
    firmware: "v3.2.1",
    temperature: 52,
    powerConsumption: 18.5,
    uptime: 1728000,
    encryptionOps: 1280000,
    decryptionOps: 1275000,
    errorCount: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setHardware((prev) => ({
        ...prev,
        temperature: 50 + Math.random() * 5,
        powerConsumption: 17 + Math.random() * 3,
        encryptionOps: prev.encryptionOps + Math.floor(Math.random() * 1000),
        decryptionOps: prev.decryptionOps + Math.floor(Math.random() * 1000),
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const formatUptime = (seconds: number) => {
    const days = Math.floor(seconds / 86400)
    const hours = Math.floor((seconds % 86400) / 3600)
    return `${days} 天 ${hours} 小时`
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "connected":
        return "bg-green-500 text-white hover:bg-green-600"
      case "disconnected":
        return "bg-gray-400 text-white"
      case "error":
        return "bg-red-500 text-white"
      default:
        return "bg-gray-300 text-gray-700"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "connected":
        return "已连接"
      case "disconnected":
        return "未连接"
      case "error":
        return "错误"
      default:
        return "未知"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-8">
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" size="sm" className="mb-4 hover:bg-blue-100">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回仪表盘
          </Button>
        </Link>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          硬件加密卡状态
        </h1>
        <p className="mt-2 text-lg text-gray-600">硬件加速设备实时监控</p>
      </div>

      <div className="mb-6 grid gap-6 lg:grid-cols-3">
        <Card className="border-blue-200 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg text-gray-800">
              <Cpu className="h-5 w-5 text-blue-500" />
              设备信息
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <div className="text-sm text-gray-600">设备名称</div>
              <div className="font-semibold text-base text-gray-800">{hardware.deviceName}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">接口类型</div>
              <Badge className="font-mono bg-blue-100 text-blue-700 hover:bg-blue-200">{hardware.interface}</Badge>
            </div>
            <div>
              <div className="text-sm text-gray-600">连接状态</div>
              <Badge className={getStatusColor(hardware.status)}>{getStatusText(hardware.status)}</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg text-gray-800">
              <HardDrive className="h-5 w-5 text-green-500" />
              软件栈
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <div className="text-sm text-gray-600">驱动版本</div>
              <div className="font-mono text-base font-semibold text-gray-800">{hardware.driver}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">固件版本</div>
              <div className="font-mono text-base font-semibold text-gray-800">{hardware.firmware}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">运行时间</div>
              <div className="font-mono text-base font-semibold text-gray-800">{formatUptime(hardware.uptime)}</div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-cyan-200 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg text-gray-800">
              <Activity className="h-5 w-5 text-cyan-500" />
              健康状态
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2">
              {hardware.errorCount === 0 ? (
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              ) : (
                <AlertTriangle className="h-5 w-5 text-red-500" />
              )}
              <div>
                <div className="text-base font-semibold text-gray-800">
                  {hardware.errorCount === 0 ? "健康" : "检测到错误"}
                </div>
                <div className="text-xs text-gray-600">过去 24 小时 {hardware.errorCount} 个错误</div>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">整体健康度</span>
                <span className="font-semibold text-green-600">100%</span>
              </div>
              <Progress value={100} className="h-2" indicatorClassName="bg-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-6 grid gap-6 lg:grid-cols-2">
        <Card className="border-orange-200 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl text-gray-800">
              <Zap className="h-5 w-5 text-orange-500" />
              温度与功耗
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">温度</span>
                <span className="font-mono font-semibold text-orange-600">{hardware.temperature.toFixed(1)}°C</span>
              </div>
              <Progress
                value={(hardware.temperature / 85) * 100}
                className="h-2"
                indicatorClassName={hardware.temperature > 70 ? "bg-red-500" : "bg-orange-500"}
              />
              <div className="text-xs text-gray-600">工作范围：0-85°C</div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">功耗</span>
                <span className="font-mono font-semibold text-green-600">{hardware.powerConsumption.toFixed(1)}W</span>
              </div>
              <Progress
                value={(hardware.powerConsumption / 25) * 100}
                className="h-2"
                indicatorClassName="bg-green-500"
              />
              <div className="text-xs text-gray-600">最大 TDP：25W</div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-200 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl text-gray-800">
              <Activity className="h-5 w-5 text-purple-500" />
              密码运算
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
              <div className="text-sm text-gray-600">加密操作</div>
              <div className="mt-1 text-2xl font-bold font-mono text-blue-600">
                {hardware.encryptionOps.toLocaleString()}
              </div>
              <div className="mt-1 text-xs text-gray-600">自启动以来总计</div>
            </div>

            <div className="rounded-lg border border-cyan-200 bg-cyan-50 p-4">
              <div className="text-sm text-gray-600">解密操作</div>
              <div className="mt-1 text-2xl font-bold font-mono text-cyan-600">
                {hardware.decryptionOps.toLocaleString()}
              </div>
              <div className="mt-1 text-xs text-gray-600">自启动以来总计</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-blue-200 bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-gray-800">支持的密码算法</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
              <div className="font-semibold text-gray-800">加密算法</div>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge className="font-mono text-xs bg-blue-500 text-white hover:bg-blue-600">SM4-CBC</Badge>
                <Badge className="font-mono text-xs bg-blue-500 text-white hover:bg-blue-600">SM4-GCM</Badge>
              </div>
            </div>

            <div className="rounded-lg border border-green-200 bg-green-50 p-4">
              <div className="font-semibold text-gray-800">认证算法</div>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge className="font-mono text-xs bg-green-500 text-white hover:bg-green-600">HMAC-SM3</Badge>
              </div>
            </div>

            <div className="rounded-lg border border-purple-200 bg-purple-50 p-4">
              <div className="font-semibold text-gray-800">密钥交换</div>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge className="font-mono text-xs bg-purple-500 text-white hover:bg-purple-600">SM2</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
