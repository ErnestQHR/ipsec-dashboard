# 贡献指南

感谢您对天工密阵 IPSec 安全监控系统的关注！我们欢迎所有形式的贡献。

## 🚀 如何贡献

### 1. Fork 项目
点击项目页面右上角的 "Fork" 按钮，将项目复制到您的 GitHub 账户。

### 2. 克隆项目
```bash
git clone https://github.com/your-username/ipsec-dashboard.git
cd ipsec-dashboard
```

### 3. 创建分支
```bash
git checkout -b feature/your-feature-name
# 或者
git checkout -b fix/your-bug-fix
```

### 4. 安装依赖
```bash
pnpm install
```

### 5. 启动开发服务器
```bash
pnpm dev
```

### 6. 进行开发
- 遵循现有的代码风格
- 添加必要的测试
- 更新相关文档

### 7. 提交更改
```bash
git add .
git commit -m "feat: 添加新功能描述"
# 或者
git commit -m "fix: 修复问题描述"
```

### 8. 推送更改
```bash
git push origin feature/your-feature-name
```

### 9. 创建 Pull Request
在 GitHub 上创建 Pull Request，详细描述您的更改。

## 📝 提交规范

我们使用约定式提交规范：

- `feat:` 新功能
- `fix:` 修复问题
- `docs:` 文档更新
- `style:` 代码格式调整
- `refactor:` 代码重构
- `test:` 测试相关
- `chore:` 构建过程或辅助工具的变动

示例：
```bash
git commit -m "feat: 添加量子密钥池监控功能"
git commit -m "fix: 修复硬件状态页面显示问题"
git commit -m "docs: 更新 API 文档"
```

## 🎯 贡献类型

### 🐛 Bug 修复
- 修复现有功能的问题
- 提高系统稳定性
- 优化错误处理

### ✨ 新功能
- 添加新的监控功能
- 实现新的配置选项
- 增强用户体验

### 📚 文档改进
- 完善 README 文档
- 添加代码注释
- 更新 API 文档

### 🎨 UI/UX 优化
- 改进界面设计
- 优化用户体验
- 提升响应式设计

### ⚡ 性能优化
- 优化渲染性能
- 减少内存占用
- 提升加载速度

## 🔍 代码规范

### TypeScript
- 使用严格的类型检查
- 为所有函数和组件添加类型注解
- 避免使用 `any` 类型

### React
- 使用函数式组件和 Hooks
- 遵循 React 最佳实践
- 合理使用 `useMemo` 和 `useCallback`

### 样式
- 使用 Tailwind CSS 类名
- 保持一致的间距和颜色
- 确保响应式设计

### 组件结构
```tsx
// 导入顺序：React -> 第三方库 -> 本地组件 -> 类型定义
import React from 'react'
import { Card } from '@/components/ui/card'
import { MetricCard } from '@/components/dashboard/metric-card'
import type { DashboardData } from '@/types/dashboard'

interface ComponentProps {
  // 类型定义
}

export function Component({ prop1, prop2 }: ComponentProps) {
  // 组件逻辑
  return (
    // JSX
  )
}
```

## 🧪 测试

### 运行测试
```bash
# 运行所有测试
pnpm test

# 运行特定测试
pnpm test ComponentName

# 运行测试并生成覆盖率报告
pnpm test:coverage
```

### 测试规范
- 为新功能编写单元测试
- 确保测试覆盖率 > 80%
- 使用描述性的测试名称

## 📋 问题报告

### 报告 Bug
使用 GitHub Issues 报告问题，请包含：

1. **问题描述**: 清晰描述遇到的问题
2. **重现步骤**: 详细的重现步骤
3. **预期行为**: 描述您期望的行为
4. **实际行为**: 描述实际发生的情况
5. **环境信息**: 浏览器版本、操作系统等
6. **截图**: 如果适用，提供截图

### 功能请求
1. **功能描述**: 详细描述您想要的功能
2. **使用场景**: 说明为什么需要这个功能
3. **实现建议**: 如果有的话，提供实现建议

## 🔄 代码审查

### 审查清单
- [ ] 代码符合项目规范
- [ ] 功能按预期工作
- [ ] 测试通过
- [ ] 文档已更新
- [ ] 没有控制台错误
- [ ] 响应式设计正常

### 审查流程
1. 自动检查：CI/CD 自动运行测试和代码检查
2. 人工审查：维护者审查代码
3. 反馈处理：根据反馈修改代码
4. 合并：审查通过后合并到主分支

## 📞 获取帮助

如果您在贡献过程中遇到问题：

1. 查看 [GitHub Issues](https://github.com/your-username/ipsec-dashboard/issues)
2. 查看 [GitHub Discussions](https://github.com/your-username/ipsec-dashboard/discussions)
3. 发送邮件到：your.email@example.com

## 🏆 贡献者

感谢所有为项目做出贡献的开发者！

<!-- 这里会自动生成贡献者列表 -->

## 📄 许可证

通过贡献代码，您同意您的贡献将在 MIT 许可证下发布。

---

再次感谢您的贡献！🎉
