import { NextResponse } from "next/server"

// 模拟实时数据 API
export async function GET() {
  // 模拟从后端获取的实时数据
  const data = {
    tunnelStatus: Math.random() > 0.1 ? "ESTABLISHED" : "DISCONNECTED",
    throughput: 1.28 + (Math.random() - 0.5) * 0.1, // 1.23 - 1.33 Gbps
    cpuUsage: 14.5 + (Math.random() - 0.5) * 2, // 13.5% - 15.5%
    quantumKeyPool: Math.floor(86 + (Math.random() - 0.5) * 10), // 81 - 91 组
    hardwareTemp: 45 + Math.random() * 5, // 45-50°C
    powerConsumption: 8.5 + Math.random() * 1.5, // 8.5-10W
    encryptionOps: Math.floor(125000 + Math.random() * 10000), // 加密操作次数
    decryptionOps: Math.floor(123000 + Math.random() * 10000), // 解密操作次数
  }

  return NextResponse.json(data)
}
