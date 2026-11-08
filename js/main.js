/* main.js ― 言語 / テーマ / 描画 / スクロール演出（外部ライブラリなし） */
(function () {
  "use strict";
  var D = window.SITE_DATA;
  if (!D) return;
  var root = document.documentElement;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  var lang = store.get("lang") === "en" ? "en" : "ja";
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- helpers ---------- */
  function t(key) { return (D.ui[lang] && D.ui[lang][key]) || key; }
  function pick(o) { return o && typeof o === "object" ? (o[lang] || "") : (o || ""); }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function textOrPlaceholder(parent, value) {
    if (value) parent.textContent = value;
    else { parent.textContent = t("p.notset"); parent.classList.add("ph"); }
  }
  function safeUrl(u) { return /^https?:\/\//i.test(u || "") ? u : ""; }

  /* ---------- render ---------- */
  var delayStep = 0.08;
  function reveal(node, i) { node.classList.add("reveal"); node.style.setProperty("--d", (Math.min(i, 5) * delayStep) + "s"); return node; }

  function renderAbout() {
    var p = D.profile, av = $("#avatar"), dl = $("#profile");
    av.textContent = "";
    if (p.image) {
      var img = el("img"); img.src = p.image; img.alt = pick(p.imageAlt); img.loading = "lazy";
      img.onerror = function () { av.textContent = "無"; };
      av.appendChild(img);
    } else { av.textContent = "無"; av.setAttribute("aria-hidden", "true"); }
    dl.textContent = "";
    [["p.name", p.name], ["p.intro", pick(p.intro)], ["p.activities", pick(p.activities)],
     ["p.interests", pick(p.interests)]].forEach(function (r) {
      var row = el("div"), dt = el("dt", null, t(r[0])), dd = el("dd");
      textOrPlaceholder(dd, r[1]);
      row.appendChild(dt); row.appendChild(dd); dl.appendChild(row);
    });
  }

  function thumb(src, alt) {
    var w = el("div", "thumb");
    if (src) {
      var img = el("img"); img.src = src; img.alt = alt || ""; img.loading = "lazy";
      img.onerror = function () { w.textContent = "無"; w.setAttribute("aria-hidden", "true"); };
      w.appendChild(img);
    } else { w.textContent = "無"; w.setAttribute("aria-hidden", "true"); }
    return w;
  }

  function renderWorks() {
    var box = $("#worksList"); box.textContent = "";
    D.works.forEach(function (w, i) {
      var li = el("li", "work");
      li.appendChild(el("span", "work__n", String(i + 1).padStart(2, "0")));
      var b = el("div", "work__b");
      b.appendChild(el("h3", null, pick(w.title)));
      if (pick(w.desc)) b.appendChild(el("p", null, pick(w.desc)));
      if (w.tech && w.tech.length) {
        var tg = el("div", "meta"); tg.setAttribute("aria-label", t("w.tech"));
        w.tech.forEach(function (x) { tg.appendChild(el("span", "tag", x)); });
        b.appendChild(tg);
      }
      var url = safeUrl(w.url);
      if (url) {
        var a = el("a", "btn", t("w.visit")); a.href = url; a.target = "_blank"; a.rel = "noopener noreferrer";
        a.setAttribute("aria-label", pick(w.title) + " " + t("opens")); b.appendChild(a);
      }
      li.appendChild(b); box.appendChild(reveal(li, 0));
    });
    box.appendChild(reveal(el("li", "work-more", t("w.more")), 0));
  }

  function renderInterests() {
    var box = $("#interestsList"); box.textContent = "";
    D.interests.forEach(function (c, i) {
      var s = el("section", "int");
      s.appendChild(el("h3", null, pick(c.category)));
      var ul = el("ul");
      c.items.forEach(function (it) { ul.appendChild(el("li", null, pick(it))); });
      s.appendChild(ul); box.appendChild(reveal(s, i % 3));
    });
  }

  function renderHistory() {
    var box = $("#historyList"); box.textContent = "";
    var list = (D.history || []).slice().sort(function (a, b) { return String(a.date).localeCompare(String(b.date)); });
    if (!list.length) { box.appendChild(reveal(el("li", "empty", t("h.empty")), 0)); return; }
    list.forEach(function (h) {
      var li = el("li", "station"), node = el("span", "station__node");
      node.setAttribute("aria-hidden", "true"); li.appendChild(node);
      var tm = el("time", null, pick(h.dateLabel) || h.date); tm.dateTime = h.date;
      li.appendChild(tm);
      li.appendChild(el("h3", null, pick(h.title)));
      if (pick(h.body)) li.appendChild(el("p", null, pick(h.body)));
      box.appendChild(reveal(li, 0));
    });
  }

  function renderSkills() {
    var box = $("#skillsList"); box.textContent = "";
    D.skills.forEach(function (g, i) {
      var s = el("div"); s.appendChild(el("h3", null, g.group));
      g.items.forEach(function (it) {
        var r = el("div", "skill"), d = el("span");
        r.appendChild(el("b", null, it.name));
        d.textContent = pick(it.desc) || t("s.nodesc");
        if (pick(it.level)) d.textContent += "（" + pick(it.level) + "）";
        r.appendChild(d); s.appendChild(r);
      });
      box.appendChild(reveal(s, i % 2));
    });
  }

  function renderActivity() {
    var box = $("#activityList"); box.textContent = "";
    var list = (D.activity || []).slice().sort(function (a, b) { return String(b.date).localeCompare(String(a.date)); });
    if (!list.length) { box.style.border = "0"; box.appendChild(reveal(el("li", "empty", t("a.empty")), 0)); return; }
    box.style.border = "";
    list.forEach(function (a, i) {
      var li = el("li"), tm = el("time", null, a.date); tm.dateTime = a.date;
      li.appendChild(tm);
      li.appendChild(el("h3", null, pick(a.title)));
      if (pick(a.category)) { var m = el("div", "meta"); m.appendChild(el("span", "tag", pick(a.category))); li.appendChild(m); }
      if (pick(a.body)) li.appendChild(el("p", null, pick(a.body)));
      if (safeUrl(a.url)) { var l = el("a", null, t("a.more")); l.href = a.url; l.target = "_blank"; l.rel = "noopener noreferrer"; li.appendChild(l); }
      box.appendChild(reveal(li, i));
    });
  }

  function renderLinks() {
    var box = $("#linksList"); box.textContent = "";
    D.links.forEach(function (x, i) {
      var url = safeUrl(x.url), li = el("li"), a = el(url ? "a" : "div", "link");
      if (url) { a.href = url; a.target = "_blank"; a.rel = "noopener noreferrer"; }
      else a.setAttribute("aria-disabled", "true");
      var ico = el("span", "link__ico"); ico.setAttribute("aria-hidden", "true");
      if (x.icon) { var im = el("img"); im.src = x.icon; im.alt = ""; ico.appendChild(im); } else ico.textContent = x.name.charAt(0);
      var tx = el("span"); tx.appendChild(el("b", null, x.name));
      tx.appendChild(el("small", null, x.account || ""));
      tx.appendChild(el("small", null, url ? pick(x.desc) : t("l.soon")));
      a.appendChild(ico); a.appendChild(tx); li.appendChild(a); box.appendChild(reveal(li, i % 3));
    });
  }

  /* ---------- contact（メールは data.js の CONTACT_EMAIL で一元管理） ---------- */
  function renderContact() {
    var e = D.CONTACT_EMAIL || "", a = $("#mailLink");
    a.textContent = e; a.href = "mailto:" + e;
  }

  /* ---------- language ---------- */
  function applyStatic() {
    document.querySelectorAll("[data-i18n]").forEach(function (n) { n.textContent = t(n.getAttribute("data-i18n")); });
    root.lang = lang;
    document.title = pick(D.meta.title);
    var set = function (sel, v) { var m = $(sel); if (m) m.setAttribute("content", v); };
    set('meta[name="description"]', pick(D.meta.description));
    set('meta[property="og:title"]', pick(D.meta.title));
    set('meta[property="og:description"]', pick(D.meta.description));
    set('meta[property="og:locale"]', lang === "ja" ? "ja_JP" : "en_US");
    $("#langBtn").setAttribute("aria-label", t("lang.to"));
    $("#menuBtn").setAttribute("aria-label", t("menu"));
    $("#toTop").setAttribute("aria-label", t("top"));
    $("#langBtn").setAttribute("aria-pressed", String(lang === "en"));
    updateThemeLabel();
  }
  function renderAll() {
    renderAbout(); renderWorks(); renderInterests(); renderSkills(); renderHistory(); renderActivity(); renderLinks(); renderContact();
    applyStatic(); observeReveal(); routeUpdate();
  }
  $("#langBtn").addEventListener("click", function () {
    lang = lang === "ja" ? "en" : "ja"; store.set("lang", lang);
    renderAll();
  });

  /* ---------- theme ---------- */
  function updateThemeLabel() {
    var dark = root.dataset.theme === "dark";
    $("#themeLabel").textContent = dark ? t("theme.dark") : t("theme.light");
    $("#themeBtn").setAttribute("aria-label", t("theme.to"));
    $("#themeBtn").setAttribute("aria-pressed", String(dark));
  }
  $("#themeBtn").addEventListener("click", function () {
    var next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next; store.set("theme", next); updateThemeLabel();
  });

  /* ---------- mobile menu ---------- */
  var menuBtn = $("#menuBtn"), nav = $("#nav");
  function setMenu(open) { nav.classList.toggle("open", open); menuBtn.setAttribute("aria-expanded", String(open)); document.body.style.overflow = open ? "hidden" : ""; }
  menuBtn.addEventListener("click", function () { setMenu(!nav.classList.contains("open")); });
  nav.querySelectorAll("ul a").forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && nav.classList.contains("open")) { setMenu(false); menuBtn.focus(); } });
  matchMedia("(min-width: 992px)").addEventListener("change", function (m) { if (m.matches) setMenu(false); });

  /* ---------- scroll effects (IntersectionObserver only) ---------- */
  var revealIO = null;
  function observeReveal() {
    var nodes = document.querySelectorAll(".reveal:not(.in)");
    if (reduce || !("IntersectionObserver" in window)) { nodes.forEach(function (n) { n.classList.add("in"); }); return; }
    if (!revealIO) {
      revealIO = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); revealIO.unobserve(e.target); } });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    }
    nodes.forEach(function (n) { revealIO.observe(n); });
  }
  function setupScrollSpy() {
    if (!("IntersectionObserver" in window)) return;
    var links = {};
    nav.querySelectorAll("ul a").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
    var spy = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        Object.keys(links).forEach(function (k) { links[k].classList.remove("is-active"); links[k].removeAttribute("aria-current"); });
        var a = links[e.target.id]; if (a) { a.classList.add("is-active"); a.setAttribute("aria-current", "true"); }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (s) { spy.observe(s); });
    var top = $("#toTop"), hero = $("#top");
    top.hidden = false;
    new IntersectionObserver(function (es) { top.classList.toggle("show", !es[0].isIntersecting); }, { threshold: 0 }).observe(hero);
  }

  /* ---------- route line：画面内にあるときだけスクロールを監視 ---------- */
  var routeEl = $("#route"), fill = $(".route__fill"), raf = 0;
  function routeUpdate() {
    if (!routeEl || !fill) return;
    var p = 1;
    if (!reduce) { var r = routeEl.getBoundingClientRect(); p = Math.max(0, Math.min(1, (innerHeight * 0.65 - r.top) / r.height)); }
    fill.style.transform = "scaleY(" + p + ")";
  }
  function onScroll() { if (!raf) raf = requestAnimationFrame(function () { raf = 0; routeUpdate(); }); }
  function setupRoute() {
    if (!routeEl) return;
    if (reduce || !("IntersectionObserver" in window)) { routeUpdate(); return; }
    new IntersectionObserver(function (es) {
      if (es[0].isIntersecting) { addEventListener("scroll", onScroll, { passive: true }); addEventListener("resize", onScroll); routeUpdate(); }
      else { removeEventListener("scroll", onScroll); removeEventListener("resize", onScroll); }
    }).observe(routeEl);
  }

  /* ---------- init ---------- */
  $("#year").textContent = new Date().getFullYear();
  renderAll();
  setupScrollSpy();
  setupRoute();
  root.classList.add("js");
  observeReveal();
})();
