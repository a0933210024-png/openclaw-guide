# MiniBot 品牌重塑部署報告

**日期：** 2026-02-23
**任務：** OpenClaw Guide → MiniBot（迷你兵）品牌重塑 + 部署

---

## Part 1：替換的檔案

| 檔案 | 修改內容 |
|------|---------|
| `src/layouts/Layout.astro` | 預設 description → MiniBot、title 格式 `{title} — MiniBot`、og:site_name → MiniBot、nav logo → MiniBot、footer brand → MiniBot、footer copyright → MiniBot、footer desc 雙語更新 |
| `src/pages/index.astro` | Hero title 加入 `MiniBot \| 迷你兵`、中文副標題「你的第一個 AI 助理，從這裡開始」、meta description 更新 |
| `src/pages/zh/index.astro` | Hero title 加入 `MiniBot \| 迷你兵`、中文副標題「從這裡開始，手把手教你在手機上使用 AI」、meta description 更新 |
| `src/pages/404.astro` | title 中移除「— OpenClaw Guide」後綴（Layout 統一加 — MiniBot） |
| `src/pages/starter-kit.astro` | title 中移除「OpenClaw Starter Kit」前綴改為「Starter Kit」避免雙重品牌 |
| `src/pages/zh/starter-kit.astro` | 同上（中文版） |

**未修改（正確保留 OpenClaw 軟體名稱）：**
- 所有技術指令（`openclaw install`、`openclaw gateway` 等）
- 頁面內文中「OpenClaw」作為軟體/產品名稱的用法
- 外部連結（docs.openclaw.ai 等）

---

## Part 2：QA 檢查結果

### 殘留 "OpenClaw Guide" 品牌名
```bash
grep -r "OpenClaw Guide" src/ --include="*.astro" -l
# 結果：無輸出（Exit code 1）✅ 無殘留
```

### AFFILIATE_ 連結
```bash
grep -r "AFFILIATE_" src/ --include="*.astro"
# 結果：無輸出 ✅ 無 affiliate 佔位符
```

---

## Part 3：Build 結果

```
08:52:44 [build] 29 page(s) built in 4.66s
08:52:44 [build] Complete!
```
✅ **0 errors, 0 warnings** — 29 頁面全部成功建置

---

## Part 4：部署結果

### Git Push
```
[master 20427f5] Rebrand: OpenClaw Guide → MiniBot（迷你兵）
7 files changed, 63 insertions(+), 21 deletions(-)
```
✅ 已推送到 GitHub `master` 分支

### Vercel Production
```
Production: https://openclaw-guide-ccwp1cu6c-a0933210024-8812s-projects.vercel.app
Aliased:    https://openclaw-guide-red.vercel.app
```

🚀 **正式 URL：https://openclaw-guide-red.vercel.app**
