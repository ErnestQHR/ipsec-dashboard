"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Save, RefreshCw } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

interface IPSecConfig {
  localAddress: string
  remoteAddress: string
  localSubnet: string
  remoteSubnet: string
  encryptionAlgo: string
  authAlgo: string
  dhGroup: string
  ikeVersion: string
  useQuantumKey: boolean
  qkdDeviceIP: string
  keyPoolThreshold: number
  autoSync: boolean
  rekeyTime: number
  dpdDelay: number
  dpdTimeout: number
  hardwareAccel: boolean
}

export default function ConfigPage() {
  const { toast } = useToast()
  const [config, setConfig] = useState<IPSecConfig>({
    localAddress: "192.168.1.100",
    remoteAddress: "192.168.2.100",
    localSubnet: "10.0.1.0/24",
    remoteSubnet: "10.0.2.0/24",
    encryptionAlgo: "SM4-CBC",
    authAlgo: "HMAC-SM3",
    dhGroup: "modp2048",
    ikeVersion: "IKEv2",
    useQuantumKey: true,
    qkdDeviceIP: "192.168.1.50",
    keyPoolThreshold: 20,
    autoSync: true,
    rekeyTime: 3600,
    dpdDelay: 30,
    dpdTimeout: 120,
    hardwareAccel: true,
  })

  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast({
        title: "配置已保存",
        description: "IPSec 配置已成功更新。",
      })
    } catch (error) {
      toast({
        title: "错误",
        description: "保存配置失败。",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  const handleReset = () => {
    setConfig({
      localAddress: "192.168.1.100",
      remoteAddress: "192.168.2.100",
      localSubnet: "10.0.1.0/24",
      remoteSubnet: "10.0.2.0/24",
      encryptionAlgo: "SM4-CBC",
      authAlgo: "HMAC-SM3",
      dhGroup: "modp2048",
      ikeVersion: "IKEv2",
      useQuantumKey: true,
      qkdDeviceIP: "192.168.1.50",
      keyPoolThreshold: 20,
      autoSync: true,
      rekeyTime: 3600,
      dpdDelay: 30,
      dpdTimeout: 120,
      hardwareAccel: true,
    })
    toast({
      title: "配置已重置",
      description: "所有设置已重置为默认值。",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-6">
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" size="sm" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回仪表盘
          </Button>
        </Link>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">IPSec 连接配置</h1>
            <p className="mt-1 text-sm text-gray-600">配置 IPSec 隧道、加密算法和量子密钥设置</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleReset}>
              <RefreshCw className="mr-2 h-4 w-4" />
              重置
            </Button>
            <Button onClick={handleSave} disabled={isSaving} className="bg-blue-600 hover:bg-blue-700">
              <Save className="mr-2 h-4 w-4" />
              {isSaving ? "保存中..." : "保存配置"}
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* 网络配置 */}
        <Card className="border-blue-200 bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900">网络配置</CardTitle>
            <CardDescription>配置本地和远端网络端点</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="localAddress">本地网关地址</Label>
                <Input
                  id="localAddress"
                  value={config.localAddress}
                  onChange={(e) => setConfig({ ...config, localAddress: e.target.value })}
                  placeholder="192.168.1.100"
                  className="font-mono"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="remoteAddress">远端网关地址</Label>
                <Input
                  id="remoteAddress"
                  value={config.remoteAddress}
                  onChange={(e) => setConfig({ ...config, remoteAddress: e.target.value })}
                  placeholder="192.168.2.100"
                  className="font-mono"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="localSubnet">本地子网</Label>
                <Input
                  id="localSubnet"
                  value={config.localSubnet}
                  onChange={(e) => setConfig({ ...config, localSubnet: e.target.value })}
                  placeholder="10.0.1.0/24"
                  className="font-mono"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="remoteSubnet">远端子网</Label>
                <Input
                  id="remoteSubnet"
                  value={config.remoteSubnet}
                  onChange={(e) => setConfig({ ...config, remoteSubnet: e.target.value })}
                  placeholder="10.0.2.0/24"
                  className="font-mono"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="ikeVersion">IKE 版本</Label>
              <Select value={config.ikeVersion} onValueChange={(value) => setConfig({ ...config, ikeVersion: value })}>
                <SelectTrigger id="ikeVersion" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="IKEv2">IKEv2（推荐）</SelectItem>
                  <SelectItem value="IKEv1">IKEv1</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* 密码算法 */}
        <Card className="border-blue-200 bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900">密码算法</CardTitle>
            <CardDescription>配置加密和认证算法（仅支持国密算法）</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="encryptionAlgo">加密算法</Label>
              <Select
                value={config.encryptionAlgo}
                onValueChange={(value) => setConfig({ ...config, encryptionAlgo: value })}
              >
                <SelectTrigger id="encryptionAlgo" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="SM4-CBC">SM4-CBC（国密推荐）</SelectItem>
                  <SelectItem value="SM4-GCM">SM4-GCM（国密）</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex gap-2 mt-2">
                <Badge className="bg-blue-100 text-blue-700 border-blue-200">国密算法</Badge>
                <Badge className="bg-green-100 text-green-700 border-green-200">硬件加速</Badge>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="authAlgo">认证算法</Label>
              <Select value={config.authAlgo} onValueChange={(value) => setConfig({ ...config, authAlgo: value })}>
                <SelectTrigger id="authAlgo" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="HMAC-SM3">HMAC-SM3（国密推荐）</SelectItem>
                </SelectContent>
              </Select>
              <Badge className="bg-blue-100 text-blue-700 border-blue-200 mt-2">国密算法</Badge>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dhGroup">Diffie-Hellman 组</Label>
              <Select value={config.dhGroup} onValueChange={(value) => setConfig({ ...config, dhGroup: value })}>
                <SelectTrigger id="dhGroup" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="modp1536">MODP-1536（组 5）</SelectItem>
                  <SelectItem value="modp2048">MODP-2048（组 14，推荐）</SelectItem>
                  <SelectItem value="modp3072">MODP-3072（组 15）</SelectItem>
                  <SelectItem value="modp4096">MODP-4096（组 16）</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between rounded-lg border border-blue-200 bg-blue-50 p-4">
              <div className="space-y-0.5">
                <Label htmlFor="hardwareAccel" className="text-base text-gray-900">
                  硬件加速
                </Label>
                <div className="text-sm text-gray-600">使用硬件加密卡进行 SM4 运算</div>
              </div>
              <Switch
                id="hardwareAccel"
                checked={config.hardwareAccel}
                onCheckedChange={(checked) => setConfig({ ...config, hardwareAccel: checked })}
              />
            </div>
          </CardContent>
        </Card>

        {/* 量子密钥分发 */}
        <Card className="border-blue-200 bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900">量子密钥分发</CardTitle>
            <CardDescription>配置 QKD 设备集成和密钥管理</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between rounded-lg border border-blue-200 bg-blue-50 p-4">
              <div className="space-y-0.5">
                <Label htmlFor="useQuantumKey" className="text-base text-gray-900">
                  启用量子密钥分发
                </Label>
                <div className="text-sm text-gray-600">使用量子密钥进行 IPSec 加密</div>
              </div>
              <Switch
                id="useQuantumKey"
                checked={config.useQuantumKey}
                onCheckedChange={(checked) => setConfig({ ...config, useQuantumKey: checked })}
              />
            </div>

            {config.useQuantumKey && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="qkdDeviceIP">QKD 设备 IP 地址</Label>
                  <Input
                    id="qkdDeviceIP"
                    value={config.qkdDeviceIP}
                    onChange={(e) => setConfig({ ...config, qkdDeviceIP: e.target.value })}
                    placeholder="192.168.1.50"
                    className="font-mono"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="keyPoolThreshold">密钥池阈值</Label>
                  <Input
                    id="keyPoolThreshold"
                    type="number"
                    value={config.keyPoolThreshold}
                    onChange={(e) => setConfig({ ...config, keyPoolThreshold: Number.parseInt(e.target.value) || 20 })}
                    min="10"
                    max="50"
                  />
                  <p className="text-xs text-gray-600">当密钥池低于此值时触发密钥同步</p>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-blue-200 bg-blue-50 p-4">
                  <div className="space-y-0.5">
                    <Label htmlFor="autoSync" className="text-base text-gray-900">
                      自动密钥同步
                    </Label>
                    <div className="text-sm text-gray-600">达到阈值时自动同步密钥</div>
                  </div>
                  <Switch
                    id="autoSync"
                    checked={config.autoSync}
                    onCheckedChange={(checked) => setConfig({ ...config, autoSync: checked })}
                  />
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* 高级设置 */}
        <Card className="border-blue-200 bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900">高级 IPSec 设置</CardTitle>
            <CardDescription>配置密钥更新间隔和死亡对等体检测</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="rekeyTime">密钥更新时间（秒）</Label>
              <Input
                id="rekeyTime"
                type="number"
                value={config.rekeyTime}
                onChange={(e) => setConfig({ ...config, rekeyTime: Number.parseInt(e.target.value) || 3600 })}
                min="300"
                max="86400"
              />
              <p className="text-xs text-gray-600">重新协商 IPSec 密钥的频率（默认：3600秒）</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dpdDelay">DPD 延迟（秒）</Label>
              <Input
                id="dpdDelay"
                type="number"
                value={config.dpdDelay}
                onChange={(e) => setConfig({ ...config, dpdDelay: Number.parseInt(e.target.value) || 30 })}
                min="10"
                max="300"
              />
              <p className="text-xs text-gray-600">死亡对等体检测检查间隔（默认：30秒）</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dpdTimeout">DPD 超时（秒）</Label>
              <Input
                id="dpdTimeout"
                type="number"
                value={config.dpdTimeout}
                onChange={(e) => setConfig({ ...config, dpdTimeout: Number.parseInt(e.target.value) || 120 })}
                min="30"
                max="600"
              />
              <p className="text-xs text-gray-600">声明对等体死亡前的等待时间（默认：120秒）</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
