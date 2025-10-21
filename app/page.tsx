"use client"

import { useEffect, useState } from "react"
import { MetricCard } from "@/components/dashboard/metric-card"
import QuantumKeyIcon from "@/components/icons/quantum-key-icon"
import SM4Icon from "@/components/icons/sm4-icon"
import HardwareAccelIcon from "@/components/icons/hardware-accel-icon"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Activity, BarChart3, AlertCircle, TrendingUp } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

interface DashboardData {
  tunnelStatus: "ESTABLISHED" | "DISCONNECTED"
  throughput: number
  cpuUsage: number
  quantumKeyPool: number
  encryptionAlgo: string
  authAlgo: string
  lastSync: string
}

interface HistoryData {
  time: string
  throughput: number
  cpuUsage: number
}

export default function IPSecDashboard() {
  const [data, setData] = useState<DashboardData>({
    tunnelStatus: "ESTABLISHED",
    throughput: 1.28,
    cpuUsage: 14.5,
    quantumKeyPool: 86,
    encryptionAlgo: "SM4-CBC",
    authAlgo: "HMAC-SM3",
    lastSync: new Date().toISOString(),
  })
  const [loading, setLoading] = useState(false)
  const [historyData, setHistoryData] = useState<HistoryData[]>([])

  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true)
      try {
        await new Promise((resolve) => setTimeout(resolve, 500))
        const newData = {
          tunnelStatus: "ESTABLISHED" as const,
          throughput: 1.28 + (Math.random() - 0.5) * 0.1,
          cpuUsage: 14.5 + (Math.random() - 0.5) * 2,
          quantumKeyPool: Math.floor(Math.random() * 20) + 80,
          encryptionAlgo: "SM4-CBC",
          authAlgo: "HMAC-SM3",
          lastSync: new Date().toISOString(),
        }
        setData(newData)

        setHistoryData((prev) => {
          const newHistory = [
            ...prev,
            {
              time: new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
              throughput: Number(newData.throughput.toFixed(2)),
              cpuUsage: Number(newData.cpuUsage.toFixed(1)),
            },
          ]
          return newHistory.slice(-20) // 保留最近20个数据点
        })
      } catch (error) {
        console.error("[v0] 仪表盘数据获取错误:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchDashboardData()
    const interval = setInterval(fetchDashboardData, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-8">
      <div className="mb-8">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          实时监控台
        </h1>
        <p className="mt-3 text-lg text-gray-600">量子密钥分发 + 国产密码算法安全系统</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* IPSec 隧道状态 - DOC 3.2 */}
        <MetricCard
          title="IPSec 隧道状态"
          value={data.tunnelStatus === "ESTABLISHED" ? "已建立" : "未连接"}
          icon={<HardwareAccelIcon className="h-5 w-5" />}
          status={data.tunnelStatus === "ESTABLISHED" ? "success" : "error"}
          subtitle={`加密算法：${data.encryptionAlgo}（硬件加速）`}
        >
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-500">认证算法：</span>
              <span className="font-mono text-gray-700">{data.authAlgo}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">工作模式：</span>
              <span className="font-mono text-gray-700">隧道模式</span>
            </div>
          </div>
        </MetricCard>

        {/* 加密吞吐量 - DOC 3.3 */}
        <MetricCard
          title="加密吞吐量"
          value={Number(data.throughput.toFixed(2))}
          unit="Gbps"
          icon={<SM4Icon className="h-5 w-5" />}
          status="success"
          subtitle="比纯软件 SM4 快 2.8 倍"
        >
          <Progress value={(data.throughput / 1.5) * 100} className="h-2" />
          <p className="mt-2 text-xs text-gray-500">硬件上限：1.5 Gbps</p>
        </MetricCard>

        {/* CPU 占用率 - DOC 3.3 */}
        <MetricCard
          title="CPU 占用率"
          value={Number(data.cpuUsage.toFixed(1))}
          unit="%"
          status={data.cpuUsage > 50 ? "warning" : "normal"}
          subtitle="硬件卸载降低 CPU 负载"
        >
          <Progress
            value={data.cpuUsage}
            className="h-2"
            indicatorClassName={data.cpuUsage > 80 ? "bg-red-500" : "bg-green-500"}
          />
          <p className="mt-2 text-xs text-gray-500">对比纯软件：98.2%</p>
        </MetricCard>

        {/* 量子密钥池 - DOC 2.2.1 */}
        <MetricCard
          title="量子密钥池"
          value={data.quantumKeyPool}
          unit="组"
          icon={<QuantumKeyIcon className="h-5 w-5" />}
          status={data.quantumKeyPool < 20 ? "warning" : "success"}
          subtitle="低于 20 组自动同步"
        >
          <Progress value={(data.quantumKeyPool / 100) * 100} className="h-2" indicatorClassName="bg-purple-500" />
          <p className="mt-2 text-xs text-gray-500">上次同步：{new Date(data.lastSync).toLocaleTimeString("zh-CN")}</p>
        </MetricCard>
      </div>

      <div className="mt-8">
        <Card className="border-blue-200 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl text-gray-800">
              <TrendingUp className="h-5 w-5 text-blue-500" />
              实时性能趋势
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={historyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="time" stroke="#666" style={{ fontSize: "12px" }} />
                <YAxis yAxisId="left" stroke="#3b82f6" style={{ fontSize: "12px" }} />
                <YAxis yAxisId="right" orientation="right" stroke="#10b981" style={{ fontSize: "12px" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e0e0e0",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
                <Legend wrapperStyle={{ fontSize: "14px" }} />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="throughput"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  name="吞吐量 (Gbps)"
                  dot={false}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="cpuUsage"
                  stroke="#10b981"
                  strokeWidth={2}
                  name="CPU 占用率 (%)"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* 系统架构 */}
        <Card className="border-blue-200 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl text-gray-800">
              <Activity className="h-5 w-5 text-blue-500" />
              系统架构
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border border-purple-200 bg-purple-50 p-4">
              <div>
                <div className="font-semibold text-gray-800">量子密钥分发</div>
                <div className="text-xs text-gray-600">QKD 设备集成</div>
              </div>
              <Badge className="bg-purple-500 text-white hover:bg-purple-600">运行中</Badge>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-green-200 bg-green-50 p-4">
              <div>
                <div className="font-semibold text-gray-800">硬件加密卡</div>
                <div className="text-xs text-gray-600">USB/PCI-E UADK 框架</div>
              </div>
              <Badge className="bg-green-500 text-white hover:bg-green-600">已连接</Badge>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-blue-200 bg-blue-50 p-4">
              <div>
                <div className="font-semibold text-gray-800">strongSwan IPSec</div>
                <div className="text-xs text-gray-600">openEuler 内核集成</div>
              </div>
              <Badge className="bg-blue-500 text-white hover:bg-blue-600">运行中</Badge>
            </div>
          </CardContent>
        </Card>

        {/* 性能亮点 */}
        <Card className="border-blue-200 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl text-gray-800">
              <BarChart3 className="h-5 w-5 text-blue-500" />
              性能亮点
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">硬件 SM4 吞吐量</span>
                <span className="font-mono font-semibold text-blue-600">1.28 Gbps</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">软件 SM4 吞吐量</span>
                <span className="font-mono font-semibold text-orange-600">0.45 Gbps</span>
              </div>
              <Progress value={30} className="h-2" indicatorClassName="bg-orange-500" />
            </div>
            <div className="mt-4 rounded-lg border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-cyan-50 p-5">
              <div className="text-sm font-semibold text-blue-600">性能提升</div>
              <div className="mt-2 text-4xl font-bold text-blue-600">2.8 倍</div>
              <div className="mt-1 text-sm text-gray-600">硬件加速 vs 纯软件实现</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {data.quantumKeyPool < 20 && (
        <Card className="mt-6 border-amber-300 bg-amber-50 shadow-lg">
          <CardContent className="flex items-center gap-3 p-5">
            <AlertCircle className="h-6 w-6 text-amber-600" />
            <div>
              <div className="font-semibold text-amber-700 text-base">量子密钥池告警</div>
              <div className="text-sm text-amber-600">密钥池剩余量低于阈值，系统将自动触发 QKD 密钥同步</div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
