# 项目管理平台｜项目结构与开发流程

## 1. 正式运行文件

浏览器打开：

项目运营管理系统.html

这是当前最终运行文件，不要随意移动、删除或直接破坏其中的 JSON 结构。

## 2. 后台源码文件

后台管理系统源码现在已经抽取到：

src-admin/admin.html

以后修改后台管理系统功能，优先修改这个文件，不要直接手动修改 项目运营管理系统.html 里的 adminDocJson。

## 3. 常用命令

检查 wrapper 是否正常：

npm run inspect:docs

抽取后台源码：

npm run extract:admin

回写后台源码：

npm run inject:admin

## 4. 标准开发流程

后台功能修改流程：

1. 执行 npm run extract:admin
2. 修改 src-admin/admin.html
3. 执行 npm run inject:admin
4. 执行 npm run inspect:docs
5. 打开 项目运营管理系统.html 测试

## 5. 核心目录

根目录核心内容：

- 项目运营管理系统.html：正式运行文件
- src-admin/：后台源码
- scripts/：抽取、回写、检查脚本
- package.json：npm 命令
- AGENTS.md：项目规则
- codex-workflows/：AI 工作流模板
- assets/：资源文件
- backup/：备份文件
- archive/：历史截图、旧 HTML、debug 文件归档

## 6. AI 工具规则

Codex / Copilot / Gemini CLI 后续进入项目时必须遵守：

1. 后台功能修改优先改 src-admin/admin.html
2. 修改完成后执行 npm run inject:admin
3. 回写后执行 npm run inspect:docs
4. 不要直接手动编辑 adminDocJson
5. 不要修改 cockpitDocJson，除非任务明确要求修改驾驶舱
6. 不要删除 backup/ 和 archive/
7. 合同、财务、收款、押金、抵扣等高风险功能必须小步修改
8. 每轮修改后必须输出影响范围和自测结果

## 7. 当前关键业务功能

当前后台源码中已有：

- receivableItems：自动应收明细
- collectionRecords：收款申请记录
- confirmCollectionRecord：财务确认到账
- rejectCollectionRecord：财务驳回申请
- collectionRecordsForReceivable：按应收项查询收款记录
- calculateReceivablePlan：合同应收计算

下一步推荐继续开发：

阶段2-C-2：收款确认历史与操作追溯优化
