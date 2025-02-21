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

## 📦 包发布指南

### 准备工作

1. 配置 AWS CodeArtifact 认证
```bash
# 登录 AWS CodeArtifact
aws codeartifact login --tool npm --repository arco-dev --domain arco-dev --domain-owner 257394489443 --region us-west-2
```

### 发布流程

1. 检查包内容
```bash
# 在对应包目录下执行，预览将要发布的文件
npm pack --dry-run
```

2. 版本管理
```bash
# 更新所有包版本（在根目录执行）
pnpm version <新版本号> -r    # 例如: pnpm version 0.0.1-beta.1 -r

# 更新单个包版本（在包目录下执行）
pnpm version <新版本号>       # 例如: pnpm version 0.0.1-beta.1
```

3. 发布包
```bash
# 发布所有包（在根目录执行）
pnpm publish -r

# 发布单个包（在包目录下执行）
pnpm publish
```

4. 撤回发布（如需要）
```bash
# 撤回特定版本
npm unpublish <包名>@<版本号>    # 例如: npm unpublish arco-cubes-basic@0.0.1

# 标记版本为废弃（推荐）
npm deprecate <包名>@<版本号> "<废弃原因>"
```

### 使用说明

其他项目要使用这些私有包，需要：

1. 在项目的 `.npmrc` 中添加以下配置：
```
registry=https://arco-dev-257394489443.d.codeartifact.us-west-2.amazonaws.com/npm/npm-store/
//arco-dev-257394489443.d.codeartifact.us-west-2.amazonaws.com/npm/npm-store/:always-auth=true
//arco-dev-257394489443.d.codeartifact.us-west-2.amazonaws.com/npm/npm-store/:_authToken=${CODEARTIFACT_AUTH_TOKEN}
```

2. 登录 AWS CodeArtifact（同上述准备工作）

3. 安装依赖：
```bash
pnpm add <包名>    # 例如: pnpm add arco-cubes-basic
```

### 注意事项

- 发布前请确保所有代码已经提交并且通过测试
- 建议首次发布使用 beta 版本进行测试
- 遵循语义化版本规范：
  - 主版本号：不兼容的 API 修改
  - 次版本号：向下兼容的功能性新增
  - 修订号：向下兼容的问题修正
  - 预发布版本：例如 1.0.0-beta.1