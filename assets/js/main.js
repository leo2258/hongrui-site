/* =========================================================
   弘锐 HONGRUI 站点主脚本
   页头 / 页脚组件、轮播、列表渲染、详情页、表单
   ========================================================= */

/* 资源版本号：换图/改样式后改这里，强制浏览器拉取新文件 */
const ASSET_V = "20261117a";

const SITE = {
  brandCN: "弘锐",
  brandEN: "HONGRUI",
  logoCN: "弘锐模具配件有限公司",
  company: "弘锐模具配件有限公司",
  slogan: "模具导柱 · 氮气弹簧 · 冲针",
  tel: "0577-62382858",
  mobile: "13626567810",
  email: "sales@hongrui-precision.com",
  address: "浙江省温州市乐清市淡溪镇富康东路 58 号消防队后",
  hours: "周一至周六 08:30 – 17:30",
  icp: "浙ICP备XXXXXXXX号-1",
  copyright: "弘锐模具配件有限公司"
};

const NAV = [
  { href: "index.html",    label: "首页" },
  { href: "about.html",    label: "关于我们" },
  { href: "products.html", label: "产品展示" },
  { href: "news.html",     label: "新闻中心" },
  { href: "contact.html",  label: "联系我们" }
];

/* ---------------- 图标库（内联 SVG） ---------------- */
const ICONS = {
  phone: '<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.8"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="1"/><path d="m2 6 10 7 10-7"/></svg>',
  pin: '<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.8"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  clock: '<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l4 2"/></svg>',
  truck: '<svg viewBox="0 0 24 24"><path d="M1 3h11v11H1z"/><path d="M12 7h5l3 4v3h-8z"/><circle cx="5.5" cy="17.5" r="2"/><circle cx="16.5" cy="17.5" r="2"/></svg>',
  refresh: '<svg viewBox="0 0 24 24"><path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 3v6h-6"/><path d="M9 12h6"/></svg>',
  headset: '<svg viewBox="0 0 24 24"><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="1" y="13" width="4" height="7" rx="1"/><rect x="19" y="13" width="4" height="7" rx="1"/><path d="M20 20v1a3 3 0 0 1-3 3h-4"/></svg>',
  wallet: '<svg viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M2 10h20"/><circle cx="17" cy="15" r="1.4"/></svg>',
  chat: '<svg viewBox="0 0 24 24"><path d="M21 12a8 8 0 0 1-8 8H8l-5 3 1.5-4.5A8 8 0 1 1 21 12z"/></svg>',
  up: '<svg viewBox="0 0 24 24"><path d="m12 5 7 8h-14z"/></svg>'
};

/* ---------------- 页头 ---------------- */
function renderHeader(active) {
  const el = document.getElementById("site-header");
  if (!el) return;
  el.className = "site-header";
  el.innerHTML = `
    <div class="header-inner">
      <a class="logo" href="index.html" aria-label="${SITE.brandCN}">
        <img class="logo-mark" src="assets/img/logo.png?v=${ASSET_V}" alt="${SITE.logoCN}">
        <span class="logo-text">
          <span class="logo-cn">${SITE.logoCN}</span>
          <span class="logo-en">HONGRUI PRECISION</span>
        </span>
      </a>
      <nav class="nav" id="main-nav">
        ${NAV.map(n => `<a href="${n.href}" class="${n.href === active ? "active" : ""}">${n.label}</a>`).join("")}
      </nav>
      <div class="header-tel">
        ${ICONS.phone}
        <span class="num">${SITE.tel}</span>
      </div>
      <button class="nav-toggle" id="nav-toggle" aria-label="菜单">
        <span></span><span></span><span></span>
      </button>
    </div>`;

  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav");
  toggle.addEventListener("click", () => nav.classList.toggle("open"));

  const onScroll = () => {
    el.classList.toggle("scrolled", window.scrollY > 10);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------------- 页脚 ---------------- */
function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  el.className = "site-footer";
  el.innerHTML = `
    <div class="wrap">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="logo">
            <img class="logo-mark" src="assets/img/logo.png?v=${ASSET_V}" alt="${SITE.logoCN}">
            <span class="logo-text">
              <span class="logo-cn">${SITE.logoCN}</span>
              <span class="logo-en">HONGRUI PRECISION</span>
            </span>
          </div>
          <p class="footer-about">
            弘锐模具配件有限公司是一家充满活力、成长迅速的精密模具配件生产厂家，以导柱生产为主线，
            主流产品为 TRP、SRP 与锥度导柱，另有氮气弹簧产线与冲针生产车间，为冲压、注塑与拉伸模具提供稳定可复现的导向与弹压方案。
          </p>
        </div>
        <div>
          <h4 class="footer-title">快速导航</h4>
          <ul class="footer-links">
            ${NAV.map(n => `<li><a href="${n.href}">${n.label}</a></li>`).join("")}
          </ul>
        </div>
        <div>
          <h4 class="footer-title">联系我们</h4>
          <ul class="footer-contact">
            <li>${ICONS.pin}<span>${SITE.address}</span></li>
            <li>${ICONS.phone}<span class="num">${SITE.tel} ／ ${SITE.mobile}</span></li>
            <li>${ICONS.mail}<span>${SITE.email}</span></li>
            <li>${ICONS.clock}<span>${SITE.hours}</span></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="wrap">
        <span>版权所有 © ${SITE.copyright}</span>
        <span><a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">${SITE.icp}</a></span>
      </div>
    </div>`;
}

/* ---------------- 浮动咨询 ---------------- */
function renderFloatCta() {
  const a = document.createElement("div");
  a.className = "float-cta";
  a.innerHTML = `
    <a href="contact.html#inquiry" title="在线咨询" aria-label="在线咨询">${ICONS.chat}</a>
    <a href="#" id="back-top" title="返回顶部" aria-label="返回顶部">${ICONS.up}</a>`;
  document.body.appendChild(a);
  document.getElementById("back-top").addEventListener("click", e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ---------------- 首页 Banner 轮播 ---------------- */
const HERO_SLIDES = [
  {
    img: "hero-01.web.jpg",
    kicker: "GUIDE POST MANUFACTURER",
    title: "模具导柱制造商",
    sub: "以导柱生产为主线，主流产品覆盖 TRP、SRP 与锥度导柱，另有氮气弹簧产线与冲针生产车间，导向与弹压方案一站配齐。",
    btn: { text: "查看更多", href: "products.html" }
  },
  {
    img: "61020592.web.jpg",
    kicker: "PRECISION MACHINING",
    title: "精密加工 · 自研自产",
    sub: "缸体内孔研磨、镜面抛光、充气装配、全检出货，关键工序全部自制，品质可稳定复现。",
    btn: { text: "工厂环境", href: "about.html#factory" }
  },
  {
    img: "61087876.web.jpg",
    kicker: "CUSTOM TOOLING",
    title: "非标定制 · 来图加工",
    sub: "钨钢焊接冲、异形冲头与特殊行程氮气弹簧，按图纸定制，常规交期 7–15 个工作日。",
    btn: { text: "获取报价", href: "contact.html#inquiry" }
  }
];

function initHero() {
  const hero = document.getElementById("hero");
  if (!hero) return;
  hero.innerHTML = `
    ${HERO_SLIDES.map((s, i) => `
      <div class="hero-slide ${i === 0 ? "on" : ""}">
        <div class="hero-bg" style="background-image:url('assets/img/${s.img}?v=${ASSET_V}')"></div>
        <div class="hero-content">
          <span class="hero-kicker">${s.kicker}</span>
          <h1 class="hero-title">${s.title}</h1>
          <p class="hero-sub">${s.sub}</p>
          <a class="btn" href="${s.btn.href}">${s.btn.text}<span class="plus">+</span></a>
        </div>
      </div>`).join("")}
    <button class="hero-arrow prev" aria-label="上一张">‹</button>
    <button class="hero-arrow next" aria-label="下一张">›</button>
    <div class="hero-dots">
      ${HERO_SLIDES.map((_, i) => `<button class="${i === 0 ? "on" : ""}" aria-label="第 ${i + 1} 张"></button>`).join("")}
    </div>`;

  const slides = [...hero.querySelectorAll(".hero-slide")];
  const dots = [...hero.querySelectorAll(".hero-dots button")];
  let cur = 0, timer = null;

  function go(n) {
    cur = (n + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle("on", i === cur));
    dots.forEach((d, i) => d.classList.toggle("on", i === cur));
  }
  function play() { stop(); timer = setInterval(() => go(cur + 1), 10000); }
  function stop() { if (timer) clearInterval(timer); }

  hero.querySelector(".prev").addEventListener("click", () => { go(cur - 1); play(); });
  hero.querySelector(".next").addEventListener("click", () => { go(cur + 1); play(); });
  dots.forEach((d, i) => d.addEventListener("click", () => { go(i); play(); }));
  hero.addEventListener("mouseenter", stop);
  hero.addEventListener("mouseleave", play);
  play();
}

/* ---------------- 产品卡片 ---------------- */
function productCard(p) {
  return `
    <a class="product-card" href="product-detail.html?id=${p.id}">
      <div class="product-thumb">
        <span class="product-badge">${p.badge}</span>
        <img src="assets/img/${p.cover}?v=${ASSET_V}" alt="${p.name}" loading="lazy">
      </div>
      <div class="product-body">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
        <div class="product-foot">
          <span class="product-price">询价<small>按规格报价</small></span>
          <span class="product-buy">现在咨询</span>
        </div>
      </div>
    </a>`;
}

/* ---------------- 新闻卡片 ---------------- */
function newsCard(n) {
  return `
    <a class="news-card" href="news-detail.html?id=${n.id}">
      <div class="news-thumb"><img src="assets/img/${n.thumb}?v=${ASSET_V}" alt="${n.title}" loading="lazy"></div>
      <div class="news-body">
        <div class="news-date">${n.date} · ${n.cat}</div>
        <h3 class="news-title">${n.title}</h3>
        <p class="news-excerpt">${n.excerpt}</p>
        <span class="news-more">查看详情 ›</span>
      </div>
    </a>`;
}

/* ---------------- 通用渲染入口 ---------------- */
function renderHomeProducts() {
  const el = document.getElementById("home-products");
  if (el) el.innerHTML = PRODUCTS.slice(0, 6).map(productCard).join("");
}
function renderHomeNews() {
  const el = document.getElementById("home-news");
  if (el) el.innerHTML = NEWS.slice(0, 3).map(newsCard).join("");
}
function renderFactory() {
  const el = document.getElementById("factory-gallery");
  if (!el) return;
  el.innerHTML = FACTORY.map(f => `
    <div class="gallery-item">
      <img src="assets/img/${f.img}?v=${ASSET_V}" alt="${f.cap}" loading="lazy">
      <div class="gallery-cap">${f.cap}</div>
    </div>`).join("");
}
function renderFeatures() {
  const el = document.getElementById("feature-list");
  if (!el) return;
  el.innerHTML = FEATURES.map(f => `
    <div class="feature">
      ${ICONS[f.icon]}
      <h3>${f.title}</h3>
      <p>${f.desc}</p>
    </div>`).join("");
}

/* ---------------- 分类空态（暂无素材的品类） ---------------- */
function emptyState(cat) {
  const e = cat.empty || {};
  return `
    <div class="empty-state">
      <div class="empty-mark"><span>${cat.name}</span><em>${cat.en || ""}</em></div>
      <h3>${e.title || cat.name + " · 资料整理中"}</h3>
      <p>${e.desc || "该品类资料整理中，欢迎联系我们索取规格书。"}</p>
      <div class="empty-actions">
        <a class="btn" href="contact.html#inquiry">咨询${cat.name}规格<span class="plus">+</span></a>
        <a class="btn btn-line" href="tel:${SITE.tel}">致电 ${SITE.tel}</a>
      </div>
      <span class="empty-note">${cat.en ? cat.en + " · " : ""}支持来图定制，提供图纸与工况参数后 1 个工作日内回复</span>
    </div>`;
}

/* ---------------- 产品列表页 ---------------- */
function initProductList() {
  const tabs = document.getElementById("product-tabs");
  const grid = document.getElementById("product-list");
  if (!tabs || !grid) return;

  tabs.innerHTML = CATEGORIES.map((c, i) =>
    `<button class="${i === 0 ? "on" : ""}" data-cat="${c.key}">${c.name}</button>`).join("");

  function paint(cat) {
    const list = cat === "all" ? PRODUCTS : PRODUCTS.filter(p => p.cat === cat);
    const c = CATEGORIES.find(x => x.key === cat) || { key: cat, name: cat };
    grid.innerHTML = list.length ? list.map(productCard).join("") : emptyState(c);
  }
  tabs.addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    [...tabs.children].forEach(x => x.classList.toggle("on", x === b));
    paint(b.dataset.cat);
  });
  paint("all");
}

/* ---------------- 产品详情页 ---------------- */
/* 选型与使用说明：产品未单独配置 notes 时使用以下默认文案（氮气弹簧/监视器/焊接冲通用） */
const DEFAULT_NOTES = [
  ["安装", "安装孔与活塞杆需保证同轴度，建议导向长度不小于行程的 1/3；多支并联使用时，尽量选用同批次产品，避免压力输出不均。"],
  ["使用", "严禁超出额定行程压缩，超行程会使密封件承受额外剪切力，导致早期泄压。模具调试阶段建议先低压试打，确认成形后再补压至工艺值。"],
  ["维护", "按周期检查初始弹压力，压降超过 10% 时建议复检密封状态。长期停机时建议将弹簧置于自由状态存放，避免密封件长期受压变形。"],
  ["定制", "非标缸径、特殊行程、法兰或螺纹安装方式均可按图定制，请提供图纸、所需弹压力与工作频率。"]
];

function initProductDetail() {
  const root = document.getElementById("product-detail");
  if (!root) return;
  const id = new URLSearchParams(location.search).get("id") || PRODUCTS[0].id;
  const p = PRODUCTS.find(x => x.id === id) || PRODUCTS[0];

  document.title = `${p.name} - 弘锐 HONGRUI`;

  const gallery = p.gallery && p.gallery.length ? p.gallery : [p.cover];
  root.innerHTML = `
    <div class="detail-grid">
      <div>
        <div class="detail-main"><img id="detail-img" src="assets/img/${gallery[0]}?v=${ASSET_V}" alt="${p.name}"></div>
        ${gallery.length > 1 ? `
        <div class="detail-thumbs" id="detail-thumbs">
          ${gallery.map((g, i) => `<button class="${i === 0 ? "on" : ""}" data-src="${g}"><img src="assets/img/${g}?v=${ASSET_V}" alt="${p.name} 图 ${i + 1}"></button>`).join("")}
        </div>` : ""}
      </div>
      <div class="detail-info">
        <h1>${p.name}</h1>
        <p class="detail-tagline">${p.tagline}</p>
        <dl class="detail-meta">
          <div><dt>产品分类</dt><dd>${p.catName}</dd></div>
          <div><dt>产品特点</dt><dd>${p.badge}</dd></div>
          <div><dt>供货方式</dt><dd>标准规格现货 / 非标按图定制</dd></div>
          <div><dt>报价方式</dt><dd>提供规格与数量后 1 个工作日内回复</dd></div>
        </dl>
        <div class="detail-actions">
          <a class="btn" href="contact.html#inquiry">获取报价<span class="plus">+</span></a>
          <a class="btn btn-line" href="products.html">返回产品列表</a>
        </div>
      </div>
    </div>

    <div style="margin-top:72px">
      <div class="subtabs" id="detail-tabs">
        <button class="on" data-panel="panel-spec">规格参数</button>
        <button data-panel="panel-feature">产品特点</button>
        <button data-panel="panel-note">选型与使用说明</button>
      </div>

      <div class="tab-panel on" id="panel-spec">
        <table class="spec-table">
          <tbody>
            ${p.params.map(([k, v]) => `<tr><th>${k}</th><td>${v}</td></tr>`).join("")}
          </tbody>
        </table>
        <p class="spec-note">* 上表为常规选型参考区间，具体尺寸与压力以订单确认图纸为准；非标规格可按图定制。</p>
      </div>

      <div class="tab-panel" id="panel-feature">
        <ul class="hl-list">
          ${p.features.map(f => `<li><b>${f}</b></li>`).join("")}
          <li><b>${p.featureTail || "核心密封件采用美国 / 德国进口配件，设计标准可与 DADCO、KALLER 互换。"}</b></li>
        </ul>
      </div>

      <div class="tab-panel" id="panel-note">
        <div class="article-body" style="max-width:880px">
          ${(p.notes || DEFAULT_NOTES).map(([k, v]) => `<p><strong>${k}：</strong>${v}</p>`).join("")}
        </div>
      </div>
    </div>`;

  const mainImg = document.getElementById("detail-img");
  const thumbs = document.getElementById("detail-thumbs");
  if (thumbs) {
    thumbs.addEventListener("click", e => {
      const b = e.target.closest("button");
      if (!b) return;
      mainImg.src = "assets/img/" + b.dataset.src + "?v=" + ASSET_V;
      [...thumbs.children].forEach(x => x.classList.toggle("on", x === b));
    });
  }

  const tabs = document.getElementById("detail-tabs");
  tabs.addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    [...tabs.children].forEach(x => x.classList.toggle("on", x === b));
    document.querySelectorAll(".tab-panel").forEach(pn =>
      pn.classList.toggle("on", pn.id === b.dataset.panel));
  });
}

/* ---------------- 新闻列表页 ---------------- */
function initNewsList() {
  const list = document.getElementById("news-list");
  const pager = document.getElementById("news-pager");
  if (!list) return;

  const PER = 5;
  let page = 1;
  const total = Math.ceil(NEWS.length / PER);

  function row(n) {
    return `
      <a class="news-row" href="news-detail.html?id=${n.id}">
        <div class="news-row-thumb"><img src="assets/img/${n.thumb}?v=${ASSET_V}" alt="${n.title}" loading="lazy"></div>
        <div>
          <h3 class="news-row-title">${n.title}</h3>
          <p class="news-row-excerpt">${n.excerpt}</p>
          <div class="news-meta"><span>${n.date}</span><span>${n.cat}</span><span>阅读 ${n.views}</span></div>
        </div>
      </a>`;
  }
  function paint() {
    const start = (page - 1) * PER;
    list.innerHTML = NEWS.slice(start, start + PER).map(row).join("");
    if (!pager) return;
    pager.innerHTML = `
      <button ${page === 1 ? "disabled" : ""} data-p="${page - 1}">上一页</button>
      ${Array.from({ length: total }, (_, i) =>
        `<button class="${i + 1 === page ? "on" : ""}" data-p="${i + 1}">${i + 1}</button>`).join("")}
      <button ${page === total ? "disabled" : ""} data-p="${page + 1}">下一页</button>`;
  }
  if (pager) {
    pager.addEventListener("click", e => {
      const b = e.target.closest("button");
      if (!b || b.disabled) return;
      page = Number(b.dataset.p);
      paint();
      window.scrollTo({ top: 240, behavior: "smooth" });
    });
  }
  paint();
}

/* ---------------- 新闻详情页 ---------------- */
function initNewsDetail() {
  const root = document.getElementById("news-detail");
  if (!root) return;
  const id = new URLSearchParams(location.search).get("id") || NEWS[0].id;
  const idx = NEWS.findIndex(n => n.id === id);
  const n = idx >= 0 ? NEWS[idx] : NEWS[0];
  const prev = idx > 0 ? NEWS[idx - 1] : null;
  const next = idx >= 0 && idx < NEWS.length - 1 ? NEWS[idx + 1] : null;

  document.title = `${n.title} - 弘锐 HONGRUI`;

  root.innerHTML = `
    <article class="article">
      <h1>${n.title}</h1>
      <div class="article-meta">
        <span>发布日期：${n.date}</span>
        <span>分类：${n.cat}</span>
        <span>阅读：${n.views}</span>
      </div>
      <div class="article-body">
        ${n.body.map(p => `<p>${p}</p>`).join("")}
      </div>
      <div class="article-nav">
        <div>${prev ? `<a href="news-detail.html?id=${prev.id}"><span>上一篇：</span>${prev.title}</a>` : `<span style="color:#bbb">已是第一篇</span>`}</div>
        <div>${next ? `<a href="news-detail.html?id=${next.id}"><span>下一篇：</span>${next.title}</a>` : `<span style="color:#bbb">已是最后一篇</span>`}</div>
      </div>
    </article>`;
}

/* ---------------- 询价表单 ---------------- */
function initForm() {
  const form = document.getElementById("inquiry-form");
  if (!form) return;

  const sel = form.querySelector("select[name=product]");
  if (sel) {
    sel.innerHTML = `<option value="">请选择产品（选填）</option>` +
      PRODUCTS.map(p => `<option>${p.name}</option>`).join("") +
      `<option>其他 / 非标定制</option>`;
  }

  form.addEventListener("submit", e => {
    e.preventDefault();
    const msg = document.getElementById("form-msg");
    msg.classList.add("show");
    msg.textContent = "已记录您的询价信息。当前为静态演示站点，提交内容仅在本页提示，未发送到服务器——正式上线需接入后端或表单服务。";
    form.reset();
  });
}

/* ---------------- 统一初始化 ---------------- */
function initSite(active) {
  renderHeader(active);
  renderFooter();
  renderFloatCta();
  initHero();
  renderHomeProducts();
  renderHomeNews();
  renderFactory();
  renderFeatures();
  initProductList();
  initProductDetail();
  initNewsList();
  initNewsDetail();
  initForm();
}
