// 模拟数据生成器
export interface DashboardData {
  tunnelStatus: "ESTABLISHED" | "DISCONNECTED"
  throughput: number
  cpuUsage: number
  quantumKeyPool: number
  encryptionAlgo: string
  authAlgo: string
  lastSync: string
  hardwareTemp: number
  powerConsumption: number
  encryptionOps: number
  decryptionOps: number
}

export interface HistoryData {
  time: string
  throughput: number
  cpuUsage: number
}

export interface KeyLog {
  id: string
  timestamp: Date
  event: "SYNC" | "CONSUME" | "EXPIRE" | "ERROR"
  keyId: string
  source: string
  destination: string
  poolSize: number
  status: "success" | "warning" | "error"
  details: string
}

export interface Alert {
  id: string
  level: "critical" | "warning" | "info" | "success"
  title: string
  message: string
  source: string
  timestamp: string
  resolved: boolean
}

// 生成模拟仪表盘数据
export function generateDashboardData(): DashboardData {
  return {
    tunnelStatus: Math.random() > 0.1 ? "ESTABLISHED" : "DISCONNECTED",
    throughput: 1.28 + (Math.random() - 0.5) * 0.1,
    cpuUsage: 14.5 + (Math.random() - 0.5) * 2,
    quantumKeyPool: Math.floor(86 + (Math.random() - 0.5) * 10),
    encryptionAlgo: "SM4-CBC",
    authAlgo: "HMAC-SM3",
    lastSync: new Date().toISOString(),
    hardwareTemp: 45 + Math.random() * 5,
    powerConsumption: 8.5 + Math.random() * 1.5,
    encryptionOps: Math.floor(125000 + Math.random() * 10000),
    decryptionOps: Math.floor(123000 + Math.random() * 10000),
  }
}

// 生成历史数据
export function generateHistoryData(count: number = 20): HistoryData[] {
  const data: HistoryData[] = []
  const now = new Date()
  
  for (let i = count - 1; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 5000) // 每5秒一个数据点
    data.push({
      time: time.toLocaleTimeString("zh-CN", { 
        hour: "2-digit", 
        minute: "2-digit", 
        second: "2-digit" 
      }),
      throughput: 1.28 + (Math.random() - 0.5) * 0.1,
      cpuUsage: 14.5 + (Math.random() - 0.5) * 2,
    })
  }
  
  return data
}

// 生成密钥日志
export function generateKeyLogs(count: number = 50): KeyLog[] {
  const events: Array<"SYNC" | "CONSUME" | "EXPIRE" | "ERROR"> = ["SYNC", "CONSUME", "CONSUME", "CONSUME", "SYNC"]
  const logs: KeyLog[] = []

  for (let i = 0; i < count; i++) {
    const event = events[Math.floor(Math.random() * events.length)]
    const timestamp = new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000)

    logs.push({
      id: `LOG-${String(i + 1).padStart(5, "0")}`,
      timestamp,
      event,
      keyId: `QK-${Math.random().toString(36).substring(2, 10).toUpperCase()}`,
      source: "QKD-192.168.1.50",
      destination: "IPSec-网关",
      poolSize: Math.floor(Math.random() * 50) + 50,
      status: event === "ERROR" ? "error" : event === "EXPIRE" ? "warning" : "success",
      details:
        event === "SYNC"
          ? "从 QKD 设备同步量子密钥"
          : event === "CONSUME"
            ? "密钥用于 IPSec SA 建立"
            : event === "EXPIRE"
              ? "密钥过期并从池中移除"
              : "从 QKD 设备获取密钥失败",
    })
  }

  return logs.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
}

// 生成告警数据
export function generateAlerts(): Alert[] {
  return [
    {
      id: "1",
      level: "warning",
      title: "量子密钥池低于阈值",
      message: "当前密钥池剩余 18 组，低于 20 组阈值，已触发自动同步",
      source: "量子密钥管理模块",
      timestamp: new Date(Date.now() - 300000).toISOString(),
      resolved: false,
    },
    {
      id: "2",
      level: "info",
      title: "IPSec 隧道重新协商",
      message: "隧道 tunnel-001 完成密钥重协商，使用新的量子密钥",
      source: "IPSec 管理模块",
      timestamp: new Date(Date.now() - 600000).toISOString(),
      resolved: true,
    },
    {
      id: "3",
      level: "success",
      title: "硬件加密卡自检通过",
      message: "USB 加密卡设备 /dev/uacce/0 自检完成，所有功能正常",
      source: "硬件监控模块",
      timestamp: new Date(Date.now() - 900000).toISOString(),
      resolved: true,
    },
    {
      id: "4",
      level: "critical",
      title: "QKD 设备连接异常",
      message: "量子密钥分发设备响应超时，请检查网络连接",
      source: "QKD 接口模块",
      timestamp: new Date(Date.now() - 1200000).toISOString(),
      resolved: false,
    },
    {
      id: "5",
      level: "warning",
      title: "CPU 占用率偏高",
      message: "当前 CPU 占用率达到 45%，建议检查系统负载",
      source: "性能监控模块",
      timestamp: new Date(Date.now() - 1500000).toISOString(),
      resolved: true,
    },
  ]
}
