import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { ReactNode } from "react"

interface MetricCardProps {
  title: string
  value: string | number
  unit?: string
  icon?: ReactNode
  status?: "normal" | "warning" | "error" | "success"
  subtitle?: string
  children?: ReactNode
}

export function MetricCard({ title, value, unit, icon, status = "normal", subtitle, children }: MetricCardProps) {
  const statusColors = {
    normal: "text-blue-600",
    warning: "text-amber-600",
    error: "text-red-600",
    success: "text-green-600",
  }

  const cardBorderColors = {
    normal: "border-blue-200",
    warning: "border-amber-200",
    error: "border-red-200",
    success: "border-green-200",
  }

  return (
    <Card className={`${cardBorderColors[status]} bg-white shadow-lg hover:shadow-xl transition-shadow`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
        {icon && <div className="text-blue-500">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2">
          <div className={`text-3xl font-bold ${statusColors[status]}`}>{value}</div>
          {unit && <div className="text-lg font-medium text-gray-500">{unit}</div>}
        </div>
        {subtitle && <p className="mt-2 text-xs text-gray-600">{subtitle}</p>}
        {children && <div className="mt-4">{children}</div>}
      </CardContent>
    </Card>
  )
}
