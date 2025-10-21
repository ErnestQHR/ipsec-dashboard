"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, TrendingUp, Zap, Cpu, Activity } from "lucide-react"
import Link from "next/link"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Legend, Line, LineChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const throughputData = [
  {
    scenario: "硬件 SM4",
    throughput: 1.28,
    cpuUsage: 14.5,
  },
  {
    scenario: "软件 SM4",
    throughput: 0.45,
    cpuUsage: 98.2,
  },
  {
    scenario: "硬件 AES",
    throughput: 1.35,
    cpuUsage: 12.8,
  },
  {
    scenario: "软件 AES",
    throughput: 0.52,
    cpuUsage: 95.6,
  },
]

const latencyData = [
  {
    packetSize: "64B",
    hardware: 0.12,
    software: 0.45,
  },
  {
    packetSize: "512B",
    hardware: 0.28,
    software: 0.89,
  },
  {
    packetSize: "1KB",
    hardware: 0.42,
    software: 1.52,
  },
  {
    packetSize: "4KB",
    hardware: 1.15,
    software: 4.28,
  },
  {
    packetSize: "16KB",
    hardware: 3.82,
    software: 15.67,
  },
]

const chartConfig = {
  throughput: {
    label: "吞吐量 (Gbps)",
    color: "#1890ff", // 明亮科技蓝
  },
  cpuUsage: {
    label: "CPU 占用率 (%)",
    color: "#52c41a", // 绿色
  },
  hardware: {
    label: "硬件加速",
    color: "#1890ff", // 明亮科技蓝
  },
  software: {
    label: "纯软件",
    color: "#ff7a45", // 橙色
  },
}

export default function PerformancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" size="sm" className="mb-4 hover:bg-blue-100">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回仪表盘
          </Button>
        </Link>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          性能测试结果
        </h1>
        <p className="mt-2 text-base text-gray-600">硬件加速与纯软件实现性能对比分析</p>
      </div>

      {/* Key Metrics */}
      <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-blue-200 bg-white shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <Zap className="h-4 w-4 text-blue-500" />
              峰值吞吐量
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">1.28 Gbps</div>
            <p className="mt-1 text-xs text-gray-500">硬件 SM4-CBC 加密</p>
            <div className="mt-3 flex items-center gap-1 text-sm text-green-600 font-medium">
              <TrendingUp className="h-4 w-4" />
              <span>比软件快 2.8 倍</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-white shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <Cpu className="h-4 w-4 text-green-500" />
              CPU 效率
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">14.5%</div>
            <p className="mt-1 text-xs text-gray-500">峰值负载时的 CPU 占用</p>
            <div className="mt-3 flex items-center gap-1 text-sm text-green-600 font-medium">
              <TrendingUp className="h-4 w-4" />
              <span>相比软件降低 85%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-cyan-200 bg-white shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <Activity className="h-4 w-4 text-cyan-500" />
              最低延迟
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-cyan-600">0.12 ms</div>
            <p className="mt-1 text-xs text-gray-500">64 字节数据包加密</p>
            <div className="mt-3 flex items-center gap-1 text-sm text-green-600 font-medium">
              <TrendingUp className="h-4 w-4" />
              <span>比软件快 3.75 倍</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-200 bg-white shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <Zap className="h-4 w-4 text-purple-500" />
              功耗效率
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-600">18.5 W</div>
            <p className="mt-1 text-xs text-gray-500">平均功耗</p>
            <Badge className="mt-3 bg-purple-100 text-purple-700 hover:bg-purple-200 border-purple-300">
              在 TDP 限制内
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Throughput Comparison */}
      <div className="mb-8 space-y-6">
        <Card className="border-blue-200 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">加密吞吐量对比</CardTitle>
            <CardDescription className="text-gray-600">硬件加速与软件实现对比（Gbps）</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[450px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={throughputData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
                  <XAxis
                    dataKey="scenario"
                    tick={{ fill: "#4b5563", fontSize: 14 }}
                    axisLine={{ stroke: "#cbd5e1" }}
                    angle={0}
                    textAnchor="middle"
                    height={60}
                  />
                  <YAxis
                    domain={[0, 1.5]}
                    tick={{ fill: "#4b5563", fontSize: 12 }}
                    axisLine={{ stroke: "#cbd5e1" }}
                    label={{ value: "吞吐量 (Gbps)", angle: -90, position: "insideLeft", fill: "#4b5563" }}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} cursor={{ fill: "rgba(59, 130, 246, 0.1)" }} />
                  <Legend wrapperStyle={{ fontSize: "14px", color: "#4b5563" }} />
                  <Bar dataKey="throughput" fill="#1890ff" name="吞吐量 (Gbps)" radius={[8, 8, 0, 0]} maxBarSize={80} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">CPU 占用率对比</CardTitle>
            <CardDescription className="text-gray-600">峰值吞吐量时的资源利用率（%）</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[450px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={throughputData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
                  <XAxis
                    dataKey="scenario"
                    tick={{ fill: "#4b5563", fontSize: 14 }}
                    axisLine={{ stroke: "#cbd5e1" }}
                    angle={0}
                    textAnchor="middle"
                    height={60}
                  />
                  <YAxis
                    domain={[0, 105]}
                    tick={{ fill: "#4b5563", fontSize: 12 }}
                    axisLine={{ stroke: "#cbd5e1" }}
                    label={{ value: "CPU 占用率 (%)", angle: -90, position: "insideLeft", fill: "#4b5563" }}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} cursor={{ fill: "rgba(34, 197, 94, 0.1)" }} />
                  <Legend wrapperStyle={{ fontSize: "14px", color: "#4b5563" }} />
                  <Bar dataKey="cpuUsage" fill="#52c41a" name="CPU 占用率 (%)" radius={[8, 8, 0, 0]} maxBarSize={80} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Latency Analysis */}
      <Card className="mb-8 border-cyan-200 bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-gray-800">不同数据包大小的加密延迟</CardTitle>
          <CardDescription className="text-gray-600">不同数据包大小的处理时间对比（毫秒）</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[380px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={latencyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
                <XAxis
                  dataKey="packetSize"
                  tick={{ fill: "#4b5563", fontSize: 12 }}
                  axisLine={{ stroke: "#cbd5e1" }}
                  label={{ value: "数据包大小", position: "insideBottom", offset: -5, fill: "#4b5563" }}
                />
                <YAxis
                  tick={{ fill: "#4b5563", fontSize: 12 }}
                  axisLine={{ stroke: "#cbd5e1" }}
                  label={{ value: "延迟 (ms)", angle: -90, position: "insideLeft", fill: "#4b5563" }}
                />
                <ChartTooltip content={<ChartTooltipContent />} cursor={{ stroke: "#cbd5e1", strokeWidth: 1 }} />
                <Legend wrapperStyle={{ fontSize: "13px", color: "#4b5563" }} />
                <Line
                  type="monotone"
                  dataKey="hardware"
                  stroke="#1890ff"
                  strokeWidth={3}
                  name="硬件加速"
                  dot={{ fill: "#1890ff", r: 5 }}
                  activeDot={{ r: 7 }}
                />
                <Line
                  type="monotone"
                  dataKey="software"
                  stroke="#ff7a45"
                  strokeWidth={3}
                  name="纯软件"
                  dot={{ fill: "#ff7a45", r: 5 }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Test Environment */}
      <Card className="mb-8 border-blue-200 bg-gradient-to-br from-blue-50 to-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-gray-800">测试环境</CardTitle>
          <CardDescription className="text-gray-600">用于基准测试的硬件和软件配置</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg border border-blue-200 bg-white p-4">
                <div className="text-sm font-semibold text-blue-600">硬件平台</div>
                <div className="mt-2 text-base text-gray-700">华为鲲鹏 920 服务器</div>
              </div>
              <div className="rounded-lg border border-blue-200 bg-white p-4">
                <div className="text-sm font-semibold text-blue-600">加密卡</div>
                <div className="mt-2 text-base text-gray-700">鲲鹏 920 密码加速器（PCI-E）</div>
              </div>
              <div className="rounded-lg border border-blue-200 bg-white p-4">
                <div className="text-sm font-semibold text-blue-600">操作系统</div>
                <div className="mt-2 text-base text-gray-700">openEuler 22.03 LTS</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg border border-green-200 bg-white p-4">
                <div className="text-sm font-semibold text-green-600">IPSec 实现</div>
                <div className="mt-2 text-base text-gray-700">strongSwan 5.9.8</div>
              </div>
              <div className="rounded-lg border border-green-200 bg-white p-4">
                <div className="text-sm font-semibold text-green-600">硬件驱动</div>
                <div className="mt-2 text-base text-gray-700">UADK v2.6 框架</div>
              </div>
              <div className="rounded-lg border border-green-200 bg-white p-4">
                <div className="text-sm font-semibold text-green-600">测试工具</div>
                <div className="mt-2 text-base text-gray-700">iperf3 + 自定义 IPSec 基准测试</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
