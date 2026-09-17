# SEO + GEO Suite for Codex

一个可发布的 Codex skill，把本地 SEO 与 GEO 能力整理为一个通用入口：传统 SEO 审计、AI 搜索可见性、技术 GEO、结构化数据、内容权威、程序化 SEO、本地/电商 SEO、数据分析、竞品研究和报告测量。

## 包含的通用能力

- `seo-audit-suite`：整站/页面审计、技术 SEO、索引、内容质量、路线图
- `ai-search-geo`：AI 引用、可引用性、实体清晰度、平台可见性
- `geo-technical-reporting`：AI crawler、`robots.txt`、`llms.txt`、服务端渲染和 GEO 报告
- `seo-technical-assets`：JSON-LD、schema、sitemap、hreflang、canonical、图片和社交元数据
- `seo-content-authority`：SERP 意图、E-E-A-T、主题集群、内容 brief 和内部链接
- `programmatic-seo`：数据驱动页面、模板质量门槛、规模化索引控制
- `local-commerce-seo`：本地、地图、GBP、评论、电商和商品可见性
- `seo-intelligence-tooling`：GSC、GA4、PageSpeed、CrUX、Firecrawl、反链和 drift
- `competitor-intelligence`：竞品、替代方案、对比页和 battlecard

## 本地 skill 的整理结果

本地的 `seo-*`、`ai-seo`、`seo-geo`、`geo-*` 等短名称多数是向后兼容别名，已在新 skill 中通过 mode router 合并，不需要重复打包。TopFind、AON、PingPlus 专用的 weekly report、BigQuery、Cloudflare 和三平台 citation benchmark 属于项目适配器；本包保留了它们的通用方法，但移除了本地路径、内部项目标识、固定云盘地址和产品专属数据规则。

## 安装

将本目录复制到 Codex skills 目录，或在 Codex 中显式使用 `$seo-geo-suite`。发布到 GitHub 后，可按团队的 skill 安装方式安装该目录。

## 设计原则

这个 skill 不承诺排名、AI 引用或 rich result；它要求每个结论都有证据、范围和验证方式，并明确区分传统 SEO、GEO 内容优化、技术 GEO 和数据测量。
