// Lester & Winnie Bradford — progressive enhancement only. The page reads fine without JS.
(() => {
  "use strict";
  const doc = document.documentElement;
  doc.classList.add("js");
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const saveData = navigator.connection && navigator.connection.saveData;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* ---- Reveal on scroll ---- */
  const revealIO = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) { e.target.classList.add("in"); revealIO.unobserve(e.target); }
  }, { rootMargin: "0px 0px -8% 0px" });
  $$(".reveal").forEach((el) => revealIO.observe(el));

  /* ---- Nav: show after hero, highlight current chapter, progress bar ---- */
  const nav = $(".nav");
  const hero = $(".hero");
  const links = $$(".nav ol a");
  const sections = links.map((a) => $(a.getAttribute("href"))).filter(Boolean);
  if (nav && hero) {
    new IntersectionObserver(([e]) => nav.classList.toggle("is-visible", !e.isIntersecting), { threshold: 0.05 }).observe(hero);
  }
  const current = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      links.forEach((a) => a.setAttribute("aria-current", String(a.getAttribute("href") === "#" + e.target.id)));
      const active = links.find((a) => a.getAttribute("aria-current") === "true");
      active && active.scrollIntoView({ block: "nearest", inline: "nearest" });
    }
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => current.observe(s));
  let ticking = false;
  addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const max = doc.scrollHeight - innerHeight;
      nav && nav.style.setProperty("--p", max > 0 ? (scrollY / max).toFixed(4) : 0);
      ticking = false;
    });
  }, { passive: true });

  /* ---- Ambient video: play only while visible; never autoplay with reduced motion / save-data ---- */
  const ambient = $$("video[data-ambient]");
  const canAutoplay = !reduceMotion && !saveData;
  const loadVideo = (v) => {
    if (v.dataset.loaded) return;
    $$("source[data-src]", v).forEach((s) => (s.src = s.dataset.src));
    v.load();
    v.dataset.loaded = "1";
  };
  if (canAutoplay) {
    const vio = new IntersectionObserver((entries) => {
      for (const e of entries) {
        const v = e.target;
        if (e.isIntersecting) { loadVideo(v); v.play().catch(() => {}); }
        else v.pause();
      }
    }, { threshold: 0.25 });
    ambient.forEach((v) => vio.observe(v));
  }

  /* ---- Reel tiles: preview on hover/visibility, open in lightbox on click ---- */
  const lightbox = $("#lightbox");
  const lbBody = lightbox && $(".lb-body", lightbox);
  const lbCaption = lightbox && $(".lb-caption", lightbox);
  const openLightbox = (node, caption) => {
    if (!lightbox) return;
    lbBody.replaceChildren(node);
    lbCaption.textContent = caption || "";
    lightbox.showModal();
    node.focus && node.tagName === "VIDEO" && node.play().catch(() => {});
  };
  if (lightbox) {
    lightbox.addEventListener("close", () => { const v = $("video", lbBody); v && v.pause(); lbBody.replaceChildren(); });
    lightbox.addEventListener("click", (e) => { if (e.target === lightbox) lightbox.close(); });
    $(".close", lightbox).addEventListener("click", () => lightbox.close());
  }

  $$(".reel").forEach((fig) => {
    const btn = $("button", fig);
    const src = fig.dataset.src;
    const title = fig.dataset.title || "";
    let preview;
    const start = () => {
      if (!canAutoplay) return;
      if (!preview) {
        preview = document.createElement("video");
        Object.assign(preview, { muted: true, loop: true, playsInline: true, preload: "auto", src });
        preview.setAttribute("aria-hidden", "true");
        preview.setAttribute("tabindex", "-1");
        btn.prepend(preview);
      }
      preview.play().then(() => fig.classList.add("playing")).catch(() => {});
    };
    const stop = () => { if (preview) { preview.pause(); fig.classList.remove("playing"); } };
    // On touch devices there is no hover — play tiles while they sit in the middle of the screen.
    if (matchMedia("(hover: hover)").matches) {
      btn.addEventListener("pointerenter", start);
      btn.addEventListener("pointerleave", stop);
      btn.addEventListener("focus", start);
      btn.addEventListener("blur", stop);
    } else {
      new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()), { rootMargin: "-30% 0px -30% 0px" }).observe(fig);
    }
    btn.addEventListener("click", () => {
      stop();
      const v = document.createElement("video");
      Object.assign(v, { src, controls: true, playsInline: true, loop: true, muted: true, poster: fig.dataset.poster || "" });
      v.setAttribute("aria-label", title);
      openLightbox(v, fig.dataset.caption || title);
    });
  });

  /* ---- Photo zoom ---- */
  $$("button.zoom").forEach((b) => {
    b.addEventListener("click", () => {
      const img = $("img", b);
      const big = new Image();
      big.src = b.dataset.full || img.currentSrc || img.src;
      big.alt = img.alt;
      openLightbox(big, b.closest("figure")?.querySelector("figcaption")?.firstChild?.textContent?.trim() || img.alt);
    });
  });

  /* ---- Journey map ---- */
  const holder = $("#map-holder");
  const chapterButtons = $$(".map-chapters button");
  const caption = $("#map-caption");
  const order = chapterButtons.map((b) => b.dataset.chapter);
  let autoplayTimer = null;
  let mapReady = null;

  const showChapter = (chapter, { user = false } = {}) => {
    const svg = $("svg", holder);
    if (!svg) return;
    const idx = order.indexOf(chapter);
    $$(".jmap-route, .jmap-place", svg).forEach((el) => {
      const i = order.indexOf(el.dataset.chapter);
      el.classList.toggle("on", i === idx);
      el.classList.toggle("seen", i < idx);
    });
    // Mount Vernon is the hub for the later chapters; keep it lit.
    const hub = { home: true, abroad: true, service: true }[chapter];
    const mv = $('[data-id="mountvernon"]', svg);
    mv && hub && mv.classList.add("on");
    chapterButtons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.chapter === chapter)));
    const btn = chapterButtons[idx];
    if (caption && btn) caption.innerHTML = btn.dataset.caption;
    // On narrow screens the map pans sideways: bring the active chapter's places into view.
    const box = holder.closest(".map-box");
    if (box && box.scrollWidth > box.clientWidth + 4) {
      const lit = $$(".jmap-place.on", svg);
      if (lit.length) {
        const b0 = box.getBoundingClientRect();
        const xs = lit.map((el) => { const r = el.getBoundingClientRect(); return r.left + r.width / 2 - b0.left + box.scrollLeft; });
        const mid = (Math.min(...xs) + Math.max(...xs)) / 2;
        box.scrollTo({ left: mid - box.clientWidth / 2, behavior: reduceMotion ? "auto" : "smooth" });
      }
    }
    if (user) stopAutoplay();
  };
  const stopAutoplay = () => { clearInterval(autoplayTimer); autoplayTimer = null; };
  const autoplay = () => {
    if (autoplayTimer || reduceMotion) return;
    let i = Math.max(0, order.indexOf(chapterButtons.find((b) => b.getAttribute("aria-pressed") === "true")?.dataset.chapter));
    showChapter(order[i]);
    autoplayTimer = setInterval(() => {
      i += 1;
      if (i >= order.length) { stopAutoplay(); return; }
      showChapter(order[i]);
    }, 4200);
  };
  if (holder) {
    const loadMap = () =>
      (mapReady ||= fetch(holder.dataset.src)
        .then((r) => (r.ok ? r.text() : Promise.reject(r.status)))
        .then((t) => {
          const tpl = document.createElement("template");
          tpl.innerHTML = t.trim();
          const svg = tpl.content.querySelector("svg");
          if (!svg) throw new Error("no svg");
          holder.replaceChildren(svg);
        })
        .catch(() => { holder.innerHTML = '<p class="map-caption">The map could not be loaded.</p>'; }));
    new IntersectionObserver(([e], io) => {
      if (!e.isIntersecting) return;
      loadMap().then(() => (reduceMotion ? showChapter(order[order.length - 1]) : autoplay()));
      io.disconnect();
    }, { rootMargin: "200px 0px" }).observe(holder);
    chapterButtons.forEach((b) => b.addEventListener("click", () => loadMap().then(() => showChapter(b.dataset.chapter, { user: true }))));
  }

  /* ---- Share button (Web Share API where available) ---- */
  $$("[data-share]").forEach((b) => {
    b.addEventListener("click", async () => {
      const data = { title: document.title, text: "A memorial to Lester and Winnie Bradford — a forester and a physician who served around the world.", url: location.href.split("#")[0] };
      try {
        if (navigator.share) await navigator.share(data);
        else { await navigator.clipboard.writeText(data.url); b.textContent = "Link copied"; }
      } catch { /* dismissed */ }
    });
  });
})();
