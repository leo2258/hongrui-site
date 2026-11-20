---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 04597cfe299dd5377128115842ee0fe9_0c5fb9d4df2e11f19919525400638852
    ReservedCode1: VL5a37dFYkvu574zwu5pCDrngmPC7PNjri2ZL81VHYutCK2t08G33C8EA9npZ3YEAsf1EBQz+/qXp51zg06tRrUgP0nuxOw4bc5U8mtfqeSwkzpmTH2bNKzUmm8vK9LWDfCXn2qkEWFwIYVKoEFIid3PRFRbIrd4n/HGnKL6QO7gzBP7NsH4/HHpT2w=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 04597cfe299dd5377128115842ee0fe9_0c5fb9d4df2e11f19919525400638852
    ReservedCode2: VL5a37dFYkvu574zwu5pCDrngmPC7PNjri2ZL81VHYutCK2t08G33C8EA9npZ3YEAsf1EBQz+/qXp51zg06tRrUgP0nuxOw4bc5U8mtfqeSwkzpmTH2bNKzUmm8vK9LWDfCXn2qkEWFwIYVKoEFIid3PRFRbIrd4n/HGnKL6QO7gzBP7NsH4/HHpT2w=
---



# 弘锐 HONGRUI 官网（静态站点）

对标 `teruibao.cn` 结构复刻的企业站，品牌已替换为「弘锐」，含 5 个一级栏目与全套二级页面。
纯静态（HTML + CSS + 原生 JS），无框架、无构建步骤，双击 `index.html` 即可打开。

---

## 1. 目录结构

```
hongrui-site/
├── index.html            首页（Banner 轮播 + 关于 + 数据 + 工厂 + 优势 + 产品 + 新闻 + 分类入口）
├── about.html            关于我们（公司简介 / 工厂环境 / 服务优势）
├── products.html         产品展示（分类 Tab + 产品网格）
├── product-detail.html   产品详情（图集 + 规格参数 / 产品特点 / 选型说明 三个 Tab）
├── news.html             新闻中心（列表 + 分页）
├── news-detail.html      新闻详情（正文 + 上下篇）
├── contact.html          联系我们（联系方式 + 在线询价表单 + 地图占位）
├── README.md             本说明
└── assets/
    ├── css/style.css     全站样式（主色 #CC0000，思源黑体）
    ├── js/data.js        【数据层】产品、分类、新闻、服务优势、工厂图片
    ├── js/main.js        【逻辑层】页头页脚组件、轮播、列表渲染、详情页、表单
    └── img/              全部图片素材（.web.jpg，已压缩，总约 2.6 MB）
```

---

## 2. 需要修改的内容在哪里

| 想改什么 | 打开哪个文件 | 找什么 |
|---|---|---|
| 公司名、电话、邮箱、地址、备案号 | `assets/js/main.js` | 顶部 `const SITE = {...}`，改一次全站生效（页头/页脚/浮动咨询） |
| Banner 三张图与文案 | `assets/js/main.js` | `const HERO_SLIDES`（img 写 `assets/img/` 下的文件名） |
| 产品（名称、简介、图集、参数表） | `assets/js/data.js` | `const PRODUCTS`，每个产品一个对象 |
| 产品分类 | `assets/js/data.js` | `const CATEGORIES`（key 需与产品的 `cat` 对应；`empty` 字段用于无素材品类的空态文案） |
| 新闻列表与正文 | `assets/js/data.js` | `const NEWS`（`body` 为段落数组） |
| 服务优势四条 | `assets/js/data.js` | `const FEATURES`（icon 可选 truck / refresh / headset / wallet） |
| 工厂环境图与说明 | `assets/js/data.js` | `const FACTORY` |

> 产品对象若加 `homeHide: true`，该产品只出现在产品展示页，不进入首页产品区块（当前 `TRP 导柱` 即如此，首页保持原有 8 款展示）。
> 产品可选用 `featureTail`（"产品特点"面板收尾句）与 `notes`（"选型与使用说明"四段文案）覆盖默认通用文案。

---

## 3. 图片如何替换（你说后续自己补图）

所有图片放在 `assets/img/`，统一 `xxx.web.jpg` 命名，页面里只引用文件名，**只要文件名不变，换图不用改代码**。

| 位置 | 当前文件名 | 建议尺寸 |
|---|---|---|
| Banner 轮播 | `hero-01`（原 `60989516` 已换新图） / `61020592` / `61087876`（.web.jpg） | 1920×820（`61020592` 现为 1920×793 宽幅 2.42:1） |
| 首页「关于我们」配图 | `61020486.web.jpg` | 900×700 |
| 工厂环境 4 张 | `61020591` / `61020592` / `61020593` / `61020486` | 1600×1200（卡片 4:3，宽幅图居中裁切） |
| 产品图（9 个） | 见 `data.js` 中每个产品的 `cover` 与 `gallery`；TRP 导柱为 `trp-guide-01` ~ `trp-guide-05`（.web.jpg） | 卡片封面 1100×617（16:10），详情图 900×900 |
| 新闻缩略图 | 见 `data.js` 中每条新闻的 `thumb` | 800×560 |
| 各内页顶部大图 | `about.html` / `products.html` / `news.html` / `contact.html` 中的 `.page-hero` | 1920×700 |

- 想换新闻配图/产品图：改 `data.js` 里对应文件名即可；也可直接上传同名新文件覆盖。
- **换图后浏览器看不到变化**：图片引用统一带版本参数（`assets/js/main.js` 顶部 `const ASSET_V = "20261113b"`），换图后把该值改成新日期（如 `20261114a`）即可让浏览器重新拉取全部图片与样式；HTML 顶部引用 css/js 也带同一版本号，改完记得同步（或用 Cmd+Shift+R 强制刷新）。
- 图片压缩建议：宽 1600 以内、JPG 质量 80，单张控制 200 KB 内，首屏加载更快。

---

## 4. 新闻栏目（先留结构，等你补内容）

- 目前预填 8 条示例新闻（`data.js` → `NEWS`），含日期、分类、阅读数、正文段落。
- 新增一条：复制一个 `{ id, title, date, views, cat, thumb, excerpt, body }` 对象，`id` 保持唯一（详情页靠 `news-detail.html?id=xxx` 定位）。
- 删掉不需要的示例：直接删除对应对象，列表页分页会自动重算（每页 5 条）。
- 新闻详情页的"上下篇"按数组顺序自动生成。

---

## 5. 已复刻的功能清单

- 顶部导航：吸顶、滚动变色、当前栏目高亮、移动端折叠菜单、右侧电话常显
- 首页 Banner：三张自动轮播（6 秒）、左右箭头、圆点指示、悬停暂停
- 产品展示：分类 Tab 切换筛选（导柱 / 氮气弹簧 / 钨钢焊接冲 / 冲针 / 拉伸模）、卡片悬停效果、角标（标准型 / 高压型 / 非标定制）；暂无素材的品类展示空态提示（资料整理中 + 咨询入口），不留白屏
- 产品详情：主图 + 缩略图切换、规格参数表、产品特点、选型与使用说明（Tab 切换）
- 新闻中心：图文列表、每页 5 条分页、详情页正文与上下篇导航
- 关于我们：公司简介、创立年份浮标、4 项定位图标、工厂环境网格、服务优势
- 联系我们：4 个联系方式卡片、完整询价表单（姓名/公司/电话/邮箱/产品/数量/说明/勾选确认）、表单校验与提示、地图占位区
- 全站：响应式（手机 / 平板 / 桌面）、返回顶部按钮、页脚三栏 + 备案号、语义化 title/description/keywords

---

## 6. 上线前还需要补的几件事

1. **询价表单**：目前为纯前端演示，提交只在本页提示，不发送数据。需接后端接口，或换成第三方表单服务（如企业微信表单、金数据、Formspree）。
2. **地图**：`contact.html` 底部为占位块，可嵌入高德或百度地图组件（需申请 key）。
3. **备案与主体信息**：页脚 `浙ICP备XXXXXXXX号-1` 为占位，需替换为真实备案号并链接工信部。
4. **联系方式**：已按客户提供信息填写——公司名「弘锐模具配件有限公司」、电话 `0577-62382858`、业务直线 `13626567810`、邮箱 `sales@hongrui-precision.com`、地址「浙江省温州市乐清市淡溪镇富康东路 58 号消防队后」、工作时间周一至周六 08:30 — 17:30。如需再改，统一改 `main.js` 顶部 `SITE` 与 `contact.html` 联系信息区两处。
5. **法务**：产品参数为选型参考区间，涉及对外宣传时建议由公司技术负责人复核；原站文案中误用的外部品牌名（如"特瑞堡 / Trelleborg"）已全部清理，仅保留 DADCO、KALLER 作为"可互换"的技术对标表述。

---

## 7. 本地预览

直接双击 `index.html`；或在本目录执行：

```bash
python3 -m http.server 8942
# 浏览器访问 http://127.0.0.1:8942/index.html
```
*（内容由AI生成，仅供参考）*
*（内容由AI生成，仅供参考）*
