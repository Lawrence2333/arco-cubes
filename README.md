# Arco Cubes

Arco Cubes 是一个基于 React 的 UI 组件和工具库集合，采用 monorepo 架构设计，提供了一系列可复用的组件和工具。

## 📦 包结构

项目包含以下核心包：

- `@arco-cubes/components` - UI 组件库
- `@arco-cubes/basic` - 基础工具和函数
- `@arco-cubes/mock` - 模拟数据工具
- `@arco-cubes/themes` - 主题相关工具
- `@arco-cubes/types` - TypeScript 类型定义
- `@arco-cubes/cubes` - 核心功能包

## 🚀 快速开始

### 环境要求

- Node.js >= 16
- pnpm >= 8

### 安装

```bash
# 安装 pnpm
npm install -g pnpm

# 安装依赖
pnpm install
```

### 开发

```bash
# 开发模式
pnpm dev

# 构建所有包
pnpm build:all

# 只构建 packages 目录下的包
pnpm build:packages

# 代码检查
pnpm lint
```

## 🔨 构建命令说明

- `build:all`: 构建所有工作区的包（包括 examples）
- `build:packages`: 只构建 packages 目录下的包
- `dev`: 以开发模式运行（支持热重载）
- `lint`: 运行代码检查