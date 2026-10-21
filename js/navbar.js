/* StoneCraft Paving — Navbar (single source of truth) */
(function () {
  function currentPage() {
    var p = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    if (p === "" || p === "/") return "index.html";
    return p.split("?")[0].split("#")[0];
  }
  function isActive(href) {
    return currentPage() === href.toLowerCase();
  }
  function isHomeActive() {
    var c = currentPage();
    return c === "index.html" || c === "home2.html";
  }
  function themeIcon(theme) {
    if (theme === "dark") {
      return '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36 6.36l-1.42-1.42M7.05 7.05L5.64 5.64m12.72 0l-1.41 1.41M7.05 16.95l-1.41 1.41M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>';
    }
    return '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>';
  }
  function dirIcon() {
    return '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7h13m0 0l-3-3m3 3l-3 3M16 17H3m0 0l3-3m-3 3l3 3"/></svg>';
  }
  function logoSVG() {
    return '<span class="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#D97706] shrink-0" aria-hidden="true">'
      + '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'
      + '<path d="M5.5 20.5 9.6 4.5h4.8l4.1 16"/>'
      + '<path d="M12 6.4v2.1M12 10.5v2.1M12 14.6v2.1M12 18.7v1.8"/>'
      + '<path d="M4 21.4h16" stroke-width="2.2"/></svg></span>';
  }

  var savedTheme = "light";
  try { savedTheme = localStorage.getItem("site-theme") || "light"; } catch (e) {}

  function desktopHomeDropdown() {
    var parentActive = isHomeActive();
    var a1 = isActive("index.html") ? ' aria-current="page"' : "";
    var a2 = isActive("home2.html") ? ' aria-current="page"' : "";
    var btnCls = parentActive ? "nav-link active" : "nav-link";
    return '<div class="nav-dropdown relative" id="homeDropdown">'
      + '<button id="homeDropBtn" type="button" class="' + btnCls + ' px-1 py-2 text-[15px] text-gray-200 hover:text-[#D97706] inline-flex items-center gap-1.5" aria-haspopup="true" aria-expanded="false" aria-controls="homeDropMenu">'
      + "Home"
      + '<svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 transition-transform" id="homeDropChevron" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>'
      + "</button>"
      + '<div id="homeDropMenu" role="menu" aria-label="Home versions" class="nav-dropdown-menu">'
      + '<a href="index.html" role="menuitem" class="nav-drop-item' + (isActive("index.html") ? " active" : "") + '"' + a1 + '><span class="drop-dot" aria-hidden="true"></span><span class="font-bold">Home 1</span></a>'
      + '<a href="home2.html" role="menuitem" class="nav-drop-item' + (isActive("home2.html") ? " active" : "") + '"' + a2 + '><span class="drop-dot" aria-hidden="true"></span><span class="font-bold">Home 2</span></a>'
      + "</div></div>";
  }

  function desktopSimple(href, label) {
    var a = isActive(href) ? "nav-link active" : "nav-link";
    var aria = isActive(href) ? ' aria-current="page"' : "";
    return '<a href="' + href + '" class="' + a + ' px-1 py-2 text-[15px] text-gray-200 hover:text-[#D97706]"' + aria + ">" + label + "</a>";
  }

  function desktopLinks() {
    return desktopHomeDropdown()
      + desktopSimple("about.html", "About")
      + desktopSimple("services.html", "Services")
      + desktopSimple("pricing.html", "Pricing")
      + desktopSimple("gallery.html", "Gallery")
      + desktopSimple("contact.html", "Contact");
  }

  function mobileSubLink(href, label) {
    var active = isActive(href);
    var cls = active
      ? "block w-full text-start ps-11 pe-4 py-3 rounded-lg bg-[#D97706] text-white font-semibold text-[15px]"
      : "block w-full text-start ps-11 pe-4 py-3 rounded-lg text-gray-200 hover:bg-white/10 font-medium text-[15px]";
    var aria = active ? ' aria-current="page"' : "";
    return '<a href="' + href + '" class="' + cls + '" data-mobile-link' + aria + ">" + label + "</a>";
  }
  function mobileSimple(href, label) {
    var active = isActive(href);
    var cls = active
      ? "block w-full text-start px-4 py-3 rounded-lg bg-[#D97706] text-white font-semibold"
      : "block w-full text-start px-4 py-3 rounded-lg text-gray-100 hover:bg-white/10 font-semibold";
    var aria = active ? ' aria-current="page"' : "";
    return '<a href="' + href + '" class="' + cls + '" data-mobile-link' + aria + ">" + label + "</a>";
  }
  function mobileLinks() {
    var homeOpen = isHomeActive();
    return '<div class="rounded-lg overflow-hidden">'
      + '<button id="mobileHomeBtn" type="button" class="w-full flex items-center justify-between px-4 py-3 rounded-lg font-semibold '
      + (isHomeActive() ? "bg-white/10 text-[#D97706]" : "text-gray-100 hover:bg-white/10")
      + '" aria-expanded="' + (homeOpen ? "true" : "false") + '" aria-controls="mobileHomeSub">'
      + "<span>Home</span>"
      + '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform" id="mobileHomeChevron" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>'
      + "</button>"
      + '<div id="mobileHomeSub" class="mobile-sub' + (homeOpen ? " open" : "") + ' space-y-1 mt-1">'
      + mobileSubLink("index.html", "Home 1")
      + mobileSubLink("home2.html", "Home 2")
      + "</div></div>"
      + mobileSimple("about.html", "About")
      + mobileSimple("services.html", "Services")
      + mobileSimple("pricing.html", "Pricing")
      + mobileSimple("gallery.html", "Gallery")
      + mobileSimple("contact.html", "Contact");
  }

  var html = ''
  + '<header class="site-nav fixed top-0 inset-x-0 z-50 bg-[#374151]/95 backdrop-blur shadow-lg border-0 w-full">'
  + '<nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">'
  + '<div class="relative flex items-center justify-between h-16 md:h-20 gap-2">'
  + '<a href="index.html" class="relative z-10 flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1 xl:flex-none" aria-label="StoneCraft Paving — home">'
  + logoSVG()
  + '<span class="leading-tight min-w-0"><span class="block truncate text-white font-extrabold text-base sm:text-lg lg:text-xl tracking-tight">StoneCraft <span class="text-[#D97706]">Paving</span></span>'
  + '<span class="block text-[9px] sm:text-[11px] lg:text-xs text-gray-300 tracking-widest uppercase truncate">Built Strong. Paved Right.</span></span>'
  + "</a>"
  + '<div class="hidden xl:flex items-center justify-center gap-5 2xl:gap-7 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap" role="menubar">' + desktopLinks() + "</div>"
  + '<div class="relative z-10 flex items-center justify-end gap-1 sm:gap-2 shrink-0 ml-auto xl:ml-0">'
  + '<button id="themeToggle" type="button" class="hidden xl:block p-2.5 rounded-lg text-gray-200 hover:bg-white/10 hover:text-[#D97706] focus:outline-none" aria-label="Switch to dark mode" title="Toggle theme"><span id="themeIcon">' + themeIcon(savedTheme) + "</span></button>"
  + '<button id="rtlToggle" type="button" class="hidden xl:block p-2.5 rounded-lg text-gray-200 hover:bg-white/10 hover:text-[#D97706] focus:outline-none" aria-label="Switch to right-to-left layout" title="Toggle direction"><span id="rtlIcon">' + dirIcon() + '</span><span id="rtlLabel" class="sr-only">LTR</span></button>'
  + '<a href="contact.html" class="btn btn-amber hidden xl:inline-flex items-center gap-2 font-bold px-5 py-2.5 rounded-lg text-sm">Free Estimate'
  + '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 rtl-flip" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>'
  + '<button id="menuBtn" type="button" class="xl:hidden shrink-0 p-2.5 rounded-lg text-gray-100 hover:bg-white/10" aria-label="Open menu" aria-expanded="false" aria-controls="mobileMenu">'
  + '<svg id="iconOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" d="M4 6h16M4 12h16M4 18h16"/></svg>'
  + '<svg id="iconClose" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" d="M6 18L18 6M6 6l12 12"/></svg>'
  + "</button>"
  + "</div></div>"
  + '<div id="mobileMenu" class="xl:hidden">'
  + '<div class="px-2 pb-4 pt-1 space-y-1 mt-1 border-0">'
  + '<div class="grid grid-cols-2 gap-2 pb-2" role="group" aria-label="Display settings">'
  + '<button id="themeToggleM" type="button" class="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white/10 text-gray-100 hover:bg-white/15 font-semibold text-sm" aria-label="Switch to dark mode"><span id="themeIconM">' + themeIcon(savedTheme) + '</span><span id="themeLabelM">Dark mode</span></button>'
  + '<button id="rtlToggleM" type="button" class="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white/10 text-gray-100 hover:bg-white/15 font-semibold text-sm" aria-label="Switch to right-to-left layout"><span id="rtlIconM">' + dirIcon() + '</span><span id="rtlLabelM">RTL: Off</span></button>'
  + "</div>" + mobileLinks()
  + '<a href="contact.html" data-mobile-link class="btn btn-amber flex items-center justify-center gap-2 font-bold px-4 py-3.5 rounded-lg mt-2 text-base">Free Estimate</a>'
  + '<p class="text-center text-xs text-gray-400 pt-2">Mon–Sat · 8:00 AM – 6:00 PM · (555) 123-4567</p>'
  + "</div></div>"
  + "</nav></header>";

  function mount() {
    var el = document.getElementById("navbar");
    if (!el) return;
    el.innerHTML = html;
    wire();
    syncThemeUI();
    syncRtlUI();
  }

  function setDrop(open) {
    var menu = document.getElementById("homeDropMenu");
    var btn = document.getElementById("homeDropBtn");
    var chev = document.getElementById("homeDropChevron");
    if (!menu || !btn) return;
    menu.classList.toggle("show", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    if (chev) chev.style.transform = open ? "rotate(180deg)" : "";
  }
  function isDropOpen() {
    var m = document.getElementById("homeDropMenu");
    return !!(m && m.classList.contains("show"));
  }

  function wire() {
    var menuBtn = document.getElementById("menuBtn");
    var mobileMenu = document.getElementById("mobileMenu");
    var iconOpen = document.getElementById("iconOpen");
    var iconClose = document.getElementById("iconClose");

    function setMenu(open) {
      if (!mobileMenu || !menuBtn) return;
      mobileMenu.classList.toggle("open", open);
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      if (iconOpen) iconOpen.classList.toggle("hidden", open);
      if (iconClose) iconClose.classList.toggle("hidden", !open);
    }
    function isOpen() { return mobileMenu && mobileMenu.classList.contains("open"); }

    if (menuBtn) {
      menuBtn.addEventListener("click", function (e) { e.stopPropagation(); setMenu(!isOpen()); });
    }

    /* Desktop Home dropdown */
    var dropBtn = document.getElementById("homeDropBtn");
    var dropWrap = document.getElementById("homeDropdown");
    if (dropBtn) {
      dropBtn.addEventListener("click", function (e) { e.stopPropagation(); setDrop(!isDropOpen()); });
      dropBtn.addEventListener("keydown", function (e) {
        if (e.key === "ArrowDown") { e.preventDefault(); setDrop(true); var f = document.querySelector("#homeDropMenu a"); if (f) f.focus(); }
      });
    }
    if (dropWrap) {
      dropWrap.addEventListener("mouseenter", function () { if (window.matchMedia("(hover:hover)").matches) setDrop(true); });
      dropWrap.addEventListener("mouseleave", function () { if (window.matchMedia("(hover:hover)").matches) setDrop(false); });
    }

    /* Mobile Home submenu */
    var mHomeBtn = document.getElementById("mobileHomeBtn");
    var mHomeSub = document.getElementById("mobileHomeSub");
    var mChev = document.getElementById("mobileHomeChevron");
    if (mHomeBtn && mHomeSub) {
      mHomeBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        var open = mHomeSub.classList.toggle("open");
        mHomeBtn.setAttribute("aria-expanded", open ? "true" : "false");
        if (mChev) mChev.style.transform = open ? "rotate(180deg)" : "";
      });
    }

    document.querySelectorAll("[data-mobile-link]").forEach(function (a) {
      a.addEventListener("click", function () { setMenu(false); });
    });
    document.addEventListener("click", function (e) {
      var header = document.querySelector(".site-nav");
      if (isDropOpen()) {
        var dw = document.getElementById("homeDropdown");
        if (dw && !dw.contains(e.target)) setDrop(false);
      }
      if (!isOpen()) return;
      if (header && !header.contains(e.target)) setMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        if (isDropOpen()) { setDrop(false); if (dropBtn) dropBtn.focus(); }
        if (isOpen()) { setMenu(false); if (menuBtn) menuBtn.focus(); }
      }
    });
    document.addEventListener("focusin", function (e) {
      var dw = document.getElementById("homeDropdown");
      if (isDropOpen() && dw && !dw.contains(e.target)) setDrop(false);
    });

    function toggleTheme() {
      var cur = document.documentElement.classList.contains("dark") ? "dark" : "light";
      applyTheme(cur === "dark" ? "light" : "dark");
    }
    function toggleDir() {
      var cur = document.documentElement.dir === "rtl" ? "rtl" : "ltr";
      applyDir(cur === "rtl" ? "ltr" : "rtl");
    }
    ["themeToggle", "themeToggleM"].forEach(function (id) {
      var b = document.getElementById(id);
      if (b) b.addEventListener("click", function (e) { e.stopPropagation(); toggleTheme(); });
    });
    ["rtlToggle", "rtlToggleM"].forEach(function (id) {
      var b = document.getElementById(id);
      if (b) b.addEventListener("click", function (e) { e.stopPropagation(); toggleDir(); });
    });
  }

  function applyTheme(theme) {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    try { localStorage.setItem("site-theme", theme); } catch (e) {}
    syncThemeUI();
  }
  function applyDir(dir) {
    document.documentElement.dir = dir;
    try { localStorage.setItem("site-direction", dir); } catch (e) {}
    syncRtlUI();
  }
  function syncThemeUI() {
    var dark = document.documentElement.classList.contains("dark");
    var icon = document.getElementById("themeIcon");
    var btn = document.getElementById("themeToggle");
    var iconM = document.getElementById("themeIconM");
    var btnM = document.getElementById("themeToggleM");
    var labelM = document.getElementById("themeLabelM");
    if (icon) icon.innerHTML = themeIcon(dark ? "dark" : "light");
    if (iconM) iconM.innerHTML = themeIcon(dark ? "dark" : "light");
    if (btn) {
      btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
      btn.setAttribute("title", dark ? "Switch to light mode" : "Switch to dark mode");
    }
    if (btnM) btnM.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    if (labelM) labelM.textContent = dark ? "Light mode" : "Dark mode";
  }
  function syncRtlUI() {
    var rtl = document.documentElement.dir === "rtl";
    var btn = document.getElementById("rtlToggle");
    var label = document.getElementById("rtlLabel");
    var btnM = document.getElementById("rtlToggleM");
    var labelM = document.getElementById("rtlLabelM");
    if (btn) {
      btn.setAttribute("aria-label", rtl ? "Switch to left-to-right layout" : "Switch to right-to-left layout");
      btn.setAttribute("title", rtl ? "Switch to LTR" : "Switch to RTL");
      btn.classList.toggle("bg-[#D97706]", rtl);
      btn.classList.toggle("text-white", rtl);
    }
    if (label) label.textContent = rtl ? "RTL" : "LTR";
    if (btnM) {
      btnM.setAttribute("aria-label", rtl ? "Switch to left-to-right layout" : "Switch to right-to-left layout");
      btnM.classList.toggle("bg-[#D97706]", rtl);
      btnM.classList.toggle("text-white", rtl);
    }
    if (labelM) labelM.textContent = rtl ? "RTL: On" : "RTL: Off";
  }

  try {
    var th = localStorage.getItem("site-theme") || "light";
    if (th === "dark") document.documentElement.classList.add("dark");
    document.documentElement.dir = localStorage.getItem("site-direction") || "ltr";
  } catch (e) {}

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();

  window.__scApplyTheme = applyTheme;
  window.__scApplyDir = applyDir;
})();
