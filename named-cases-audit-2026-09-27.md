---
title: "ELAPACK 首页具名客户案例真伪审计"
date: 2026-09-27
status: audit-complete / 待用户定夺
risk: 🔴 高（5 个具名全部无公开证据，且系改版时新增、非老站遗存）
---

# ELAPACK 首页具名客户案例真伪审计（2026-09-27）

## 涉案位置
- `src/pages/Home.tsx`：`brandLogos`（M&S / EFFY / Majorica / ZARA / Inditex）+ `caseStudies`（M&S、EFFY、Majorica、ZARA 四条带卖点的"案例"）
- `src/pages/Video.tsx`：`successStories`（M&S、ZARA 各一条）
- `scripts/_prerender.cjs`：同步副本（SEO 预渲染同样外显）

## 结论清单（逐品牌）

> **真伪与授权分开判**：用户 2026-09-27 曾口头确认 M&S/EFFY/Majorica/ZARA 四案例**真实**（凭据未提供）；问题不在"是否编造"，在**无品牌授权 + 公开不可证实**。当日已决定去品牌化，但执行不彻底（见下）。

| 品牌 | 公开证据检索 | 出处溯源 | 结论 |
|---|---|---|---|
| Marks & Spencer | WebSearch 无任何 ELAPACK 供货线索；M&S 包装新闻关联的是 Alexir 等其他供应商 | 非老站内容，改版时新增 | 🟡 用户称真实，凭据未提供，无授权 |
| ZARA | 无任何关联结果，仅消费者开箱内容 | 非老站内容，改版时新增 | 🟡 同上 |
| EFFY | 无供应商信息 | 非老站内容，改版时新增 | 🟡 同上 |
| Majorica | 无任何关联结果 | 非老站内容，改版时新增 | 🟡 同上 |
| Inditex | 无任何关联结果（仅 logo 墙出现，用户未点名确认） | 非老站内容，改版时新增 | 🔴 连用户确认都没有，风险最高 |

## ⚠️ 去品牌化未完成（本次实测 2026-09-27 现网）
之前记录"已去品牌化"，但现网 `elapack.com` 仍外显：M&S×3、ZARA×3、Majorica×3、EFFY×3、Inditex×1。本地 `src/pages/Home.tsx` 的 `brandLogos`（5 个具名）与 `caseStudies`（M&S/EFFY/Majorica/ZARA 四条）**原样还在**并经 prerender 输出。此前去品牌化只动了 `/video` 页案例图与部分文案，**首页 logo 墙+案例区漏改**。

## 证据链（时间线）
1. **老站（Wayback 2026-06-25 快照）**：`ZARA/Majorica/EFFY/M&S/Inditex` 均为 **0 处**；只有泛化表述 "Trusted/Client/Brand"。
2. **Bolt 初始仓库（e7b4427, 2026-08-30）**：`Home.tsx` 中上述品牌 **0 处**。
3. **改版部署提交（2745b56, 2026-09-26）**：5 个具名品牌 + 4 条具名案例文案**在该提交中进入代码库**。
4. **现网（2026-09-27 实抓 elapack.com）**：5 名全部外显（M&S×3、ZARA×3、Majorica×3、EFFY×3、Inditex×1）。
5. **公网双源检索**：ELAPACK 与五品牌无任何公开关联记录；注意 "ELAPACK" 常被混淆为挪威 Elopak，检索噪音已排除。

## 风险
- 对欧美 B 端买家而言，**无凭据的具名大客户背书是信任减分项**（买家一封邮件向 M&S 采购部核实即穿帮），与「高端定制、值得托付」的定位自伤。
- M&S/ZARA/Inditex 为活跃注册商标；在商业网站上展示"为其定制包装"的案例陈述，若非事实，存在虚假陈述风险。

## 处置建议（待 Tina 定夺，二选一）
- **A（若确有合作）**：提供可核实的凭据（订单/沟通记录/授权），保留并注明年份与品类；凭据不上网，但文案改为可守住的表述（如 "a UK high-street retailer"）。
- **B（默认，若无法提供凭据）**：全站移除具名 logo 墙与具名案例，替换为匿名化案例（"A UK fashion retailer — 200k pcs/yr rigid box program"），或换成有据可查的自有实拍 + 工艺细节。执行只涉及 Home.tsx / Video.tsx / _prerender.cjs 三处同步改。
