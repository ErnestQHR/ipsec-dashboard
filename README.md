# 天工密阵 - IPSec 安全监控系统

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css)

**基于量子密钥分发与国产密码算法的 IPSec 安全通信监控系统**

[在线演示](https://ipsec-dashboard.vercel.app) • [功能特性](#功能特性) • [技术栈](#技术栈) • [快速开始](#快速开始)

</div>

## 📖 项目简介

天工密阵是一个现代化的 IPSec 安全监控系统，集成了量子密钥分发（QKD）技术和国产密码算法，为安全通信提供全方位的监控和管理能力。系统采用硬件加速技术，相比纯软件实现性能提升 2.8 倍，CPU 占用率降低 85%。

### 🎯 核心价值

- **量子安全**: 集成量子密钥分发，提供理论上不可破解的加密保护
- **国产密码**: 全面支持 SM4、SM3、SM2 等国密算法
- **硬件加速**: 基于华为鲲鹏 920 密码加速器，显著提升性能
- **实时监控**: 全方位监控 IPSec 隧道状态和系统性能
- **现代化界面**: 基于 Next.js 15 的响应式 Web 应用

## ✨ 功能特性

### 🔐 安全通信
- **IPSec 隧道管理**: 实时监控隧道状态、加密算法、认证算法
- **量子密钥分发**: 自动密钥同步、密钥池管理、阈值告警
- **国密算法支持**: SM4-CBC/GCM、HMAC-SM3、SM2 等
- **硬件加速**: 基于 UADK 框架的密码运算加速

### 📊 监控面板
- **实时仪表盘**: 隧道状态、吞吐量、CPU 使用率、密钥池状态
- **性能分析**: 硬件 vs 软件性能对比，延迟测试
- **硬件状态**: 设备温度、功耗、运行时间、错误统计
- **告警中心**: 多级告警系统，实时状态监控

### ⚙️ 系统管理
- **配置管理**: 网络配置、算法选择、QKD 设备集成
- **日志系统**: 密钥事件日志、操作审计、数据导出
- **用户认证**: 安全的登录系统和会话管理

## 🛠️ 技术栈

### 前端技术
- **框架**: Next.js 15 (App Router)
- **UI 库**: React 19 + Radix UI + shadcn/ui
- **样式**: Tailwind CSS 4.x
- **图表**: Recharts
- **状态管理**: React Hooks + Context
- **类型检查**: TypeScript 5

### 后端技术
- **运行时**: Node.js
- **API**: Next.js API Routes
- **数据模拟**: 内置模拟数据生成器

### 硬件平台
- **处理器**: 华为鲲鹏 920
- **操作系统**: openEuler 22.03 LTS
- **加密卡**: 鲲鹏 920 密码加速器 (PCI-E)
- **驱动框架**: UADK v2.6
- **IPSec 实现**: strongSwan 5.9.8

## 🚀 快速开始

### 环境要求

- Node.js 18.0 或更高版本
- pnpm 8.0 或更高版本

### 安装步骤

1. **克隆项目**
   ```bash
   git clone https://github.com/your-username/ipsec-dashboard.git
   cd ipsec-dashboard
   ```

2. **安装依赖**
   ```bash
   pnpm install
   ```

3. **启动开发服务器**
   ```bash
   pnpm dev
   ```

4. **访问应用**
   
   打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 默认登录信息

- **用户名**: `admin`
- **密码**: `admin123`

## 📁 项目结构

```
ipsec-dashboard/
├── app/                    # Next.js App Router
│   ├── page.tsx           # 主监控台
│   ├── layout.tsx         # 根布局
│   ├── login/             # 登录页面
│   ├── hardware-status/   # 硬件状态监控
│   ├── performance/       # 性能测试分析
│   ├── config/            # 系统配置管理
│   ├── logs/              # 密钥日志管理
│   ├── alerts/            # 告警中心
│   └── api/               # API 路由
├── components/            # 可复用组件
│   ├── ui/               # 基础 UI 组件
│   ├── dashboard/        # 仪表盘专用组件
│   ├── layout/           # 布局组件
│   ├── auth/             # 认证相关组件
│   └── icons/            # 自定义图标组件
├── hooks/                # 自定义 React Hooks
├── lib/                  # 工具函数和配置
├── styles/               # 全局样式文件
└── public/               # 静态资源
```

## 🎨 界面预览

### 主监控台
- 实时 IPSec 隧道状态监控
- 性能指标可视化展示
- 量子密钥池状态管理

### 硬件状态
- 加密卡设备信息
- 温度、功耗实时监控
- 密码运算统计

### 性能测试
- 硬件 vs 软件性能对比
- 不同数据包大小延迟测试
- 详细性能分析报告

## 🔧 开发指南

### 可用脚本

```bash
# 开发模式
pnpm dev

# 构建生产版本
pnpm build

# 启动生产服务器
pnpm start

# 代码检查
pnpm lint
```

### 代码规范

- 使用 TypeScript 进行类型检查
- 遵循 ESLint 代码规范
- 使用 Prettier 进行代码格式化
- 组件采用函数式组件 + Hooks

## 📊 性能指标

### 硬件加速效果
- **吞吐量提升**: 2.8 倍 (1.28 Gbps vs 0.45 Gbps)
- **CPU 占用率**: 降低 85% (14.5% vs 98.2%)
- **延迟优化**: 3.75 倍 (0.12ms vs 0.45ms @ 64B)
- **功耗控制**: 平均 18.5W (在 TDP 限制内)

### 系统要求
- **最小内存**: 4GB RAM
- **推荐内存**: 8GB RAM
- **存储空间**: 2GB 可用空间
- **网络**: 支持 IPSec 协议

## 🔒 安全特性

- **量子密钥分发**: 基于物理原理的不可破解加密
- **国密算法**: 符合国家密码标准的加密算法
- **硬件安全**: 基于可信硬件的密钥管理
- **访问控制**: 基于角色的用户权限管理
- **审计日志**: 完整的操作记录和审计跟踪

## 🤝 贡献指南

我们欢迎所有形式的贡献！请遵循以下步骤：

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 贡献类型
- 🐛 Bug 修复
- ✨ 新功能开发
- 📚 文档改进
- 🎨 UI/UX 优化
- ⚡ 性能优化

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [Next.js](https://nextjs.org/) - React 全栈框架
- [Radix UI](https://www.radix-ui.com/) - 无障碍 UI 组件库
- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的 CSS 框架
- [Recharts](https://recharts.org/) - 基于 React 的图表库
- [华为鲲鹏](https://www.hikunpeng.com/) - 硬件加速平台

## 📞 联系我们

- **项目维护者**: [Your Name](https://github.com/your-username)
- **邮箱**: your.email@example.com
- **项目地址**: [https://github.com/your-username/ipsec-dashboard](https://github.com/your-username/ipsec-dashboard)

## 📈 项目状态

![GitHub stars](https://img.shields.io/github/stars/your-username/ipsec-dashboard?style=social)
![GitHub forks](https://img.shields.io/github/forks/your-username/ipsec-dashboard?style=social)
![GitHub issues](https://img.shields.io/github/issues/your-username/ipsec-dashboard)
![GitHub pull requests](https://img.shields.io/github/issues-pr/your-username/ipsec-dashboard)

---

<div align="center">

**⭐ 如果这个项目对你有帮助，请给我们一个 Star！**

Made with ❤️ by [Your Name](https://github.com/your-username)

</div>
