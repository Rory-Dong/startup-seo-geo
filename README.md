# Startup SEO Starter for Codex

一个面向初创企业和小团队的 Codex skill，用于从 0 到 1 建立 SEO-ready 网站、AI 搜索可见性和早期自然增长基础。

它把产品定位、网站信息架构、Landing Page、技术 SEO、初始内容、GEO 和早期测量放进同一条工作流，但不会把成熟企业 SEO 运营、付费投放或一般产品后台设计混进来。

## 适用对象

- 刚上线的 SaaS、AI 产品和开发者工具
- 独立开发者和小型创业团队
- 正在制作第一版官网或营销站的 B2B 公司
- 需要验证自然流量机会的新品牌
- 想同时兼顾用户转化、Google 搜索和 AI 搜索理解的网站

## 能力范围

- 产品定位到网站页面的映射
- ICP、客户语言、首批关键词和页面机会发现
- Homepage 和 Landing Page 结构
- 网站信息架构、URL 和内部链接
- 技术 SEO 基础：索引、Schema、sitemap、canonical、hreflang
- 上线前后 SEO 检查和 30/60/90 天启动计划
- 首批关键词、搜索意图、主题集群和内容路线图
- GEO 基础：可引用性、实体清晰度、权威和 llms.txt
- GSC/GA4、CTA、注册、Demo、激活和收入事件的测量框架
- 创始人分发、客户案例、目录、合作伙伴、评论和早期权威建设
- 本地 SEO 或电商 SEO 的可选分支
- GSC、分析、性能和爬虫数据的早期基线
- 可选的 GSC/GA4 MCP 连接器，输出统一 JSON 数据
- 可选的 SEO/GEO 周报和迭代节奏

## 周报能力

包含通用的周报方法和数据口径，位于 `references/weekly-reporting.md`。它可以指导 Codex 生成周度 SEO/GEO operating report，但不包含任何特定公司的产品名、内部数据源、固定云盘地址或项目专用脚本。

## 不包含的内容

- 特定公司或产品的内部规则
- 固定的 BigQuery 表、API 密钥或云盘配置
- 某个团队专属的周报模板
- 自动保证排名、收录、AI 引用或转化结果
- 默认依赖外部 API；数据连接器应作为可选适配器接入

## 使用方式

复制本目录到 Codex skills 目录，或显式使用 `$startup-seo-starter`。

推荐从这些请求开始：

```text
Use $startup-seo-starter to plan the first SEO-ready website for this startup.
Use $startup-seo-starter to audit this homepage for positioning, conversion, SEO, and AI-search readiness.
Use $startup-seo-starter to create a 90-day organic-growth plan with a weekly measurement cadence.
```

## 当前状态

这是一个通用的 `0.3.0` 基础版本。它提供高质量的工作流、决策标准和参考文档，并包含一个可选的 GSC/GA4 MCP CLI 包装器；其他抓取、AI citation benchmark 和报告执行能力应根据团队环境以可选连接器或脚本接入。
