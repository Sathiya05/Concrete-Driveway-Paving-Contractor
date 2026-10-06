/* StoneCraft Paving — Main interactions */
(function () {
  "use strict";

  /* ---------- Toast ---------- */
  function ensureToast() {
    var t = document.getElementById("toast");
    if (t) return t;
    t = document.createElement("div");
    t.id = "toast";
    t.setAttribute("role", "status");
    t.setAttribute("aria-live", "polite");
    t.className = "fixed bottom-6 start-4 end-4 sm:start-auto sm:end-6 sm:max-w-sm z-[90] translate-y-4 opacity-0 pointer-events-none";
    t.innerHTML = '<div class="flex items-start gap-3 bg-[#1F2937] text-white rounded-xl shadow-2xl border-s-4 border-[#D97706] px-4 py-3"><div id="toastMsg" class="text-sm font-medium"></div></div>';
    document.body.appendChild(t);
    return t;
  }
  var toastTimer = null;
  function toast(msg) {
    var t = ensureToast();
    var m = document.getElementById("toastMsg");
    if (m) m.textContent = msg;
    t.classList.remove("translate-y-4", "opacity-0", "pointer-events-none");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      t.classList.add("translate-y-4", "opacity-0", "pointer-events-none");
    }, 3200);
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || !els.length) {
      els.forEach(function (e) { e.classList.add("visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- Back to top + smooth scroll ---------- */
  function initBackToTop() {
    var btn = document.getElementById("backToTop");
    if (!btn) {
      btn = document.createElement("button");
      btn.id = "backToTop";
      btn.type = "button";
      btn.setAttribute("aria-label", "Back to top");
      btn.setAttribute("title", "Back to top");
      btn.className = "fixed bottom-6 end-6 z-[80] w-12 h-12 rounded-full bg-[#D97706] text-white shadow-xl flex items-center justify-center font-bold";
      btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"/></svg>';
      document.body.appendChild(btn);
    }
    btn.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
    window.addEventListener("scroll", function () {
      btn.classList.toggle("show", window.scrollY > 500);
    }, { passive: true });
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var id = a.getAttribute("href");
        var target = document.querySelector(id);
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: "smooth", block: "start" }); }
      });
    });
  }

  /* ---------- Before / After slider ---------- */
  function initBeforeAfter() {
    document.querySelectorAll("[data-ba]").forEach(function (wrap) {
      var after = wrap.querySelector(".ba-after");
      var handle = wrap.querySelector(".ba-handle");
      if (!after || !handle) return;
      var pos = 50;
      function setPos(p) {
        pos = Math.max(2, Math.min(98, p));
        after.style.width = pos + "%";
        handle.style.insetInlineStart = pos + "%";
      }
      setPos(pos);
      var dragging = false;
      function pctFromEvent(e) {
        var r = wrap.getBoundingClientRect();
        var x = (e.touches && e.touches[0]) ? e.touches[0].clientX : e.clientX;
        var p = ((x - r.left) / r.width) * 100;
        if (document.documentElement.dir === "rtl") p = 100 - p;
        return p;
      }
      handle.addEventListener("pointerdown", function (e) { dragging = true; handle.setPointerCapture(e.pointerId); });
      window.addEventListener("pointerup", function () { dragging = false; });
      wrap.addEventListener("pointermove", function (e) { if (dragging) setPos(pctFromEvent(e)); });
      wrap.addEventListener("pointerdown", function (e) {
        if (e.target.closest(".ba-knob") || e.target.closest(".ba-handle")) return;
        setPos(pctFromEvent(e));
      });
      wrap.setAttribute("tabindex", "0");
      wrap.setAttribute("role", "slider");
      wrap.setAttribute("aria-label", "Before and after comparison slider");
      wrap.setAttribute("aria-valuenow", "50");
      wrap.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") { setPos(pos - 4); e.preventDefault(); }
        if (e.key === "ArrowRight") { setPos(pos + 4); e.preventDefault(); }
      });
      // range input fallback for a11y
      var range = wrap.parentElement ? wrap.parentElement.querySelector("[data-ba-range]") : null;
      if (range) range.addEventListener("input", function () { setPos(parseFloat(range.value)); });
    });
  }

  /* ---------- Gallery filter + lightbox ---------- */
  var galleryData = [];
  function initGallery() {
    var grid = document.getElementById("galleryGrid");
    if (!grid) return;
    var items = Array.prototype.slice.call(grid.querySelectorAll(".gallery-item"));
    galleryData = items.map(function (it) {
      return {
        el: it,
        src: it.getAttribute("data-full") || (it.querySelector("img") && it.querySelector("img").src),
        title: it.getAttribute("data-title") || "",
        cat: it.getAttribute("data-category") || "",
        desc: it.getAttribute("data-desc") || ""
      };
    });

    document.querySelectorAll("[data-filter]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        document.querySelectorAll("[data-filter]").forEach(function (b) { b.classList.remove("active"); b.setAttribute("aria-pressed", "false"); });
        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");
        var f = btn.getAttribute("data-filter");
        items.forEach(function (it) {
          var show = f === "all" || it.getAttribute("data-category") === f;
          it.classList.toggle("hidden-item", !show);
        });
        var count = document.getElementById("galleryCount");
        if (count) {
          var n = items.filter(function (i) { return !i.classList.contains("hidden-item"); }).length;
          count.textContent = n + " project" + (n === 1 ? "" : "s");
        }
      });
    });

    // Lightbox
    var lb = document.getElementById("lightbox");
    if (!lb) {
      lb = document.createElement("div");
      lb.id = "lightbox";
      lb.className = "hidden fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-4";
      lb.setAttribute("role", "dialog");
      lb.setAttribute("aria-modal", "true");
      lb.setAttribute("aria-label", "Project image viewer");
      lb.innerHTML = ''
        + '<button id="lbClose" class="absolute top-4 end-4 p-3 rounded-full bg-white/10 text-white hover:bg-[#D97706]" aria-label="Close viewer">✕</button>'
        + '<button id="lbPrev" class="absolute start-2 sm:start-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-[#D97706]" aria-label="Previous image">←</button>'
        + '<button id="lbNext" class="absolute end-2 sm:end-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-[#D97706]" aria-label="Next image">→</button>'
        + '<figure class="max-w-4xl w-full text-center"><img id="lbImg" class="mx-auto rounded-xl max-w-full object-contain" alt=""><figcaption class="mt-4"><p id="lbTitle" class="text-white font-extrabold text-lg"></p><p id="lbMeta" class="text-[#D97706] text-sm font-bold uppercase tracking-widest"></p><p id="lbDesc" class="text-gray-300 text-sm mt-1"></p></figcaption></figure>';
      document.body.appendChild(lb);
    }
    var img = lb.querySelector("#lbImg"), t = lb.querySelector("#lbTitle"),
        meta = lb.querySelector("#lbMeta"), desc = lb.querySelector("#lbDesc");
    var idx = 0;
    function visibleItems() { return galleryData.filter(function (g) { return !g.el.classList.contains("hidden-item"); }); }
    function show(i) {
      var vis = visibleItems();
      if (!vis.length) return;
      idx = (i + vis.length) % vis.length;
      var g = vis[idx];
      img.src = g.src; img.alt = g.title;
      t.textContent = g.title; meta.textContent = g.cat; desc.textContent = g.desc;
    }
    function open(g) {
      var vis = visibleItems();
      var i = vis.indexOf(g);
      lb.classList.remove("hidden");
      document.body.style.overflow = "hidden";
      show(i < 0 ? 0 : i);
      lb.querySelector("#lbClose").focus();
    }
    function close() { lb.classList.add("hidden"); document.body.style.overflow = ""; }
    galleryData.forEach(function (g) {
      var btn = g.el.querySelector("[data-zoom]");
      (btn || g.el).addEventListener("click", function () { open(g); });
      g.el.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(g); } });
    });
    lb.querySelector("#lbClose").addEventListener("click", close);
    lb.querySelector("#lbPrev").addEventListener("click", function () { show(idx - 1); });
    lb.querySelector("#lbNext").addEventListener("click", function () { show(idx + 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
    document.addEventListener("keydown", function (e) {
      if (lb.classList.contains("hidden")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(document.documentElement.dir === "rtl" ? idx + 1 : idx - 1);
      if (e.key === "ArrowRight") show(document.documentElement.dir === "rtl" ? idx - 1 : idx + 1);
    });
  }

  /* ---------- FAQ accordion ---------- */
  function initFaq() {
    document.querySelectorAll(".faq-item").forEach(function (item) {
      var btn = item.querySelector(".faq-q");
      if (!btn) return;
      btn.addEventListener("click", function () {
        var open = item.classList.contains("open");
        document.querySelectorAll(".faq-item.open").forEach(function (o) {
          o.classList.remove("open");
          var b = o.querySelector(".faq-q");
          if (b) b.setAttribute("aria-expanded", "false");
        });
        if (!open) { item.classList.add("open"); btn.setAttribute("aria-expanded", "true"); }
      });
    });
  }

  /* ---------- Contact form ---------- */
  function initForm() {
    var form = document.getElementById("estimateForm");
    if (!form) return;
    function setErr(id, msg) {
      var input = document.getElementById(id);
      var err = document.getElementById(id + "Error");
      if (!input) return true;
      var bad = !!msg;
      input.classList.toggle("field-error", bad);
      input.setAttribute("aria-invalid", bad ? "true" : "false");
      if (err) { err.textContent = msg || ""; err.classList.toggle("show", bad); }
      return !bad;
    }
    ["fullName", "phone", "email", "projectType"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.addEventListener("input", function () { setErr(id, ""); });
    });
    // file label
    var photos = document.getElementById("photos");
    var fileLabel = document.getElementById("fileLabel");
    if (photos) photos.addEventListener("change", function () {
      if (fileLabel) fileLabel.textContent = photos.files.length ? photos.files.length + " file(s) selected" : "Choose photos (JPG, PNG, WEBP)";
      var err = document.getElementById("photosError");
      if (err) err.classList.remove("show");
      if (photos.files.length) {
        var okTypes = ["image/jpeg", "image/png", "image/webp"];
        for (var i = 0; i < photos.files.length; i++) {
          if (okTypes.indexOf(photos.files[i].type) < 0 && photos.files[i].type !== "") {
            if (err) { err.textContent = "Only JPG, PNG or WEBP files are allowed."; err.classList.add("show"); }
            break;
          }
        }
      }
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      var name = (document.getElementById("fullName").value || "").trim();
      var phone = (document.getElementById("phone").value || "").trim();
      var email = (document.getElementById("email").value || "").trim();
      var ptype = (document.getElementById("projectType").value || "").trim();
      if (name.length < 2) { setErr("fullName", "Please enter your full name."); ok = false; } else setErr("fullName", "");
      var digits = phone.replace(/\D/g, "");
      if (digits.length < 7 || digits.length > 15) { setErr("phone", "Please enter a valid phone number."); ok = false; } else setErr("phone", "");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setErr("email", "Please enter a valid email address."); ok = false; } else setErr("email", "");
      if (!ptype) { setErr("projectType", "Please select a project type."); ok = false; } else setErr("projectType", "");
      if (!ok) {
        toast("Please fix the highlighted fields and try again.");
        var first = form.querySelector(".field-error");
        if (first) first.focus();
        return;
      }
      var success = document.getElementById("formSuccess");
      if (success) {
        success.classList.remove("hidden");
        success.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      toast("Thank you! Your estimate request has been submitted.");
      form.reset();
      if (fileLabel) fileLabel.textContent = "Choose photos (JPG, PNG, WEBP)";
    });
  }

  /* ---------- Counters ---------- */
  function initCounters() {
    var els = document.querySelectorAll("[data-count]");
    if (!els.length) return;
    function animate(el) {
      var target = parseFloat(el.getAttribute("data-count"));
      var suffix = el.getAttribute("data-suffix") || "";
      var dur = 1400, start = null;
      function step(ts) {
        if (!start) start = ts;
        var p = Math.min(1, (ts - start) / dur);
        var v = Math.round(target * (1 - Math.pow(1 - p, 3)));
        el.textContent = v + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    if (!("IntersectionObserver" in window)) { els.forEach(animate); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { animate(en.target); io.unobserve(en.target); }
      });
    }, { threshold: 0.4 });
    els.forEach(function (e) { io.observe(e); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initReveal();
    initBackToTop();
    initBeforeAfter();
    initGallery();
    initFaq();
    initForm();
    initCounters();
  });
  window.__scToast = toast;
})();
