# 天工密阵 - IPSec 安全监控系统

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css)

**基于量子密钥分发与国产密码算法的 IPSec 安全通信监控系统**

[🌐 在线演示](https://ernestqhr.github.io/ipsec-dashboard) • [📋 功能特性](#功能特性) • [🛠️ 技术栈](#技术栈) • [🚀 快速开始](#快速开始)

</div>

## 📖 项目简介

天工密阵是一个现代化的 IPSec 安全监控系统，集成了量子密钥分发（QKD）技术和国产密码算法，为安全通信提供全方位的监控和管理能力。系统采用硬件加速技术，相比纯软件实现性能提升 2.8 倍，CPU 占用率降低 85%。

### 🎯 核心价值

- **量子安全**: 集成量子密钥分发，提供理论上不可破解的加密保护
- **国产密码**: 全面支持 SM4、SM3、SM2 等国密算法
- **硬件加速**: 基于华为鲲鹏 920 密码加速器，显著提升性能
- **实时监控**: 全方位监控 IPSec 隧道状态和系统性能
- **现代化界面**: 基于 Next.js 15 的响应式 Web 应用

## 🌐 在线演示

### 🚀 立即体验
**访问地址**: [https://ernestqhr.github.io/ipsec-dashboard](https://ernestqhr.github.io/ipsec-dashboard)

### 🔑 演示账号
- **用户名**: `admin`
- **密码**: `admin123`

### 📱 演示功能
- ✅ **实时监控台**: 查看 IPSec 隧道状态、性能指标
- ✅ **硬件状态**: 监控加密卡设备状态和健康度
- ✅ **性能测试**: 硬件加速 vs 软件性能对比
- ✅ **配置管理**: IPSec 连接和量子密钥配置
- ✅ **日志系统**: 量子密钥事件日志和审计
- ✅ **告警中心**: 系统告警监控和管理

### 🎯 演示特色
- 🔄 **实时数据更新**: 每5秒自动刷新监控数据
- 📊 **交互式图表**: 支持缩放、悬停查看详细数据
- 📱 **响应式设计**: 完美适配桌面和移动设备
- 🎨 **现代化 UI**: 渐变色彩和流畅动画效果
- 🔒 **安全登录**: 模拟真实的安全认证流程

### 💡 使用提示
1. 使用演示账号登录系统
2. 浏览各个功能模块，体验完整工作流程
3. 查看实时数据更新和图表交互
4. 测试配置管理和日志查看功能

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

### 部署技术
- **静态托管**: GitHub Pages
- **CI/CD**: GitHub Actions
- **构建工具**: Next.js Static Export
- **CDN**: GitHub Pages CDN
- **域名**: ernestqhr.github.io

## 🚀 快速开始

### 🌐 在线体验（推荐）

**无需安装，立即体验**：
1. 访问 [在线演示](https://ernestqhr.github.io/ipsec-dashboard)
2. 使用账号 `admin` / `admin123` 登录
3. 浏览各个功能模块，体验完整功能

### 💻 本地开发

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

> 💡 **提示**: 访问 [在线演示](https://ernestqhr.github.io/ipsec-dashboard) 查看完整的交互式界面

### 🖥️ 主监控台
- **实时数据**: IPSec 隧道状态、吞吐量、CPU 使用率
- **可视化图表**: 性能趋势图、实时数据更新
- **量子密钥池**: 密钥数量、同步状态、阈值告警
- **系统架构**: 组件状态展示、健康度监控

### 🔧 硬件状态
- **设备信息**: 华为鲲鹏 920 加密卡详情
- **环境监控**: 温度、功耗、运行时间
- **性能统计**: 加密/解密操作计数
- **算法支持**: 国密算法列表和状态

### 📊 性能测试
- **对比分析**: 硬件加速 vs 纯软件实现
- **延迟测试**: 不同数据包大小的处理时间
- **吞吐量测试**: 峰值性能基准测试
- **环境信息**: 测试平台和配置详情

### ⚙️ 配置管理
- **网络配置**: 本地/远端网关设置
- **算法选择**: 国密算法配置
- **QKD 集成**: 量子密钥分发设置
- **高级选项**: 密钥更新、DPD 检测

### 📋 日志系统
- **事件监控**: 密钥同步、消耗、过期事件
- **数据筛选**: 按类型、状态、时间筛选
- **导出功能**: CSV 格式数据导出
- **统计分析**: 事件统计和趋势分析

### 🚨 告警中心
- **多级告警**: 严重、警告、信息、成功
- **实时监控**: 系统健康状态监控
- **告警管理**: 搜索、筛选、状态跟踪
- **历史记录**: 告警历史和解决状态

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

- **项目维护者**: [ErnestQIU](https://github.com/ErnestQHR)
- **邮箱**: haoranqiu66@gmail.com
- **项目地址**: [https://github.com/ErnestQHR/ipsec-dashboard](https://github.com/ErnestQHR/ipsec-dashboard)
- **在线演示**: [https://ernestqhr.github.io/ipsec-dashboard](https://ernestqhr.github.io/ipsec-dashboard)

## 📈 项目状态

### 🚀 部署状态
[![Deploy to GitHub Pages](https://github.com/ErnestQHR/ipsec-dashboard/actions/workflows/deploy.yml/badge.svg)](https://github.com/ErnestQHR/ipsec-dashboard/actions/workflows/deploy.yml)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://ernestqhr.github.io/ipsec-dashboard)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fernestqhr.github.io%2Fipsec-dashboard)](https://ernestqhr.github.io/ipsec-dashboard)

### 📊 项目统计
![GitHub stars](https://img.shields.io/github/stars/ErnestQHR/ipsec-dashboard?style=social)
![GitHub forks](https://img.shields.io/github/forks/ErnestQHR/ipsec-dashboard?style=social)
![GitHub issues](https://img.shields.io/github/issues/ErnestQHR/ipsec-dashboard)
![GitHub pull requests](https://img.shields.io/github/issues-pr/ErnestQHR/ipsec-dashboard)

### 🔧 技术状态
![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?logo=tailwind-css)

---

<div align="center">

**⭐ 如果这个项目对你有帮助，请给我们一个 Star！**

Made with ❤️ by [ErnestQIU](https://github.com/ErnestQHR)

</div>
