# Review Notes — 2026-02-22 晚

## 電腦白癡 v5 結論（Gemini Flash）
評分：7.5/10（三個遺留問題都還沒修）

未解決：
1. 所有指令框沒有「記得按 Enter」提示
2. VPS 頁「控制台」沒說清楚「就是你買 VPS 的那個網站」
3. 首頁 npm install 指令框沒有「在終端機輸入」說明

## QA 專業審查結論（Sonnet 4.6）
評分：6.5/10（工程師標準）

### 🔴 必修
1. **手機漢堡選單無效** — hamburger JS toggle 缺失，手機主導覽壞了
2. **OG meta tags 缺失** — 分享到 LINE/FB 無預覽，傳播打折
3. **下拉選單 JS bug** — 點連結後選單不關閉

### 🟡 應修
4. 首頁指令框缺「在終端機輸入」說明（與白癡 reviewer 一致）
5. 缺 sitemap.xml + robots.txt（SEO）
6. 缺 canonical URL
7. 缺自訂 404 頁面
8. 導覽列缺 active state 高亮
9. discord.astro 內容需確認是否完整

### 🟢 可選
- JSON-LD schema for use-cases
- sitemap plugin (@astrojs/sitemap)
