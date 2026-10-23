// "drive" loads photos from the shared Google Drive folder; "local" lets the viewer pick photos from their device.
const SOURCE = window.ALBUM_SOURCE || "drive";

// Photos in the shared Google Drive folder (duplicate "(1)" copies left out).
const DRIVE_PHOTOS = [
  { id: "10TVxKWf_cwoB2v_Ef5vKZL-CB1O3Ocf5", name: "_S1A5859" },
  { id: "1xHMiDf75xLNcPXhDbKd9Ztfl8xhhTA7F", name: "_S1A5860" },
  { id: "1TpeeFoTJQZxdS2BvPHYSJ9mTKvPTDUg5", name: "_S1A5863" },
  { id: "1quxxKLCJeIzykN8ocXhiQhhV6NVyzWiW", name: "_S1A5864" },
  { id: "1EufGWOliR4J55HTIdW8SRJRoGMKpkQ5K", name: "_S1A5865" },
  { id: "1w8FEUpZQgkOxoOaPwNzUQJH2yJrMD2Ii", name: "_S1A5866" },
  { id: "1ggXZ1aIp4EAI882V-d2PeFewKmdpHsHx", name: "_S1A5867" },
  { id: "1XaK7XL1Ij1hPQxImV2ayAXlMCH--xNNI", name: "_S1A5868" },
  { id: "1d4vj4anbQGzfZGgKuvJ8f8KlJg67ZhCz", name: "_S1A6138" },
  { id: "16R6HZIbm9rvVmFo5VNsZEeMaDXyyaI9Y", name: "_S1A6139" },
  { id: "1sd58oy5uR1STEYT3xRsYXhVF3sQqYfna", name: "_S1A6418" },
  { id: "1NqskGZeRhB9LqQxCvGonPIK0nUwMkA_G", name: "_S1A6419" },
  { id: "1Tg_lR1hzH4ek9I7LqFEl34ZQCxIURDUY", name: "_S1A6420" },
  { id: "1AMsvaTZtfJg7_NBvrSFCgb00KBREYR3_", name: "_S1A6421" },
];

let photos = DRIVE_PHOTOS.map((p) => ({ ...p }));

// Primary and fallback image URLs for a photo; Drive URLs work for "anyone with the link" files.
function photoSources(photo, width) {
  if (photo.url) return [photo.url];
  if (SOURCE === "drive") {
    return [
      `https://lh3.googleusercontent.com/d/${photo.id}=w${width}`,
      `https://drive.google.com/thumbnail?id=${photo.id}&sz=w${width}`,
    ];
  }
  return [];
}

const book = document.getElementById("book");
const bookWrap = document.getElementById("bookWrap");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const statusEl = document.getElementById("status");
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");

// ---------- ornaments ----------

const CORNER = `<svg viewBox="0 0 60 60" aria-hidden="true">
  <path d="M3 57V22C3 11 11 3 22 3h35" />
  <path d="M9 57V25c0-9 7-16 16-16h32" stroke-width="0.8" />
  <path d="M22 3c-6 6-3 13 3 13s7-7 2-9" stroke-width="0.9" />
  <circle cx="26" cy="26" r="2.2" />
</svg>`;

const corners = () =>
  ["tl", "tr", "bl", "br"].map((c) => `<span class="corner ${c}">${CORNER}</span>`).join("");

function mandala(cls = "") {
  let s = "";
  const ring = (n, r, rx, ry) => {
    for (let i = 0; i < n; i++) {
      s += `<ellipse cx="0" cy="${-r}" rx="${rx}" ry="${ry}" transform="rotate(${(360 / n) * i})" />`;
    }
  };
  ring(8, 8.5, 2.8, 6.5);
  ring(16, 19.5, 3, 7.5);
  ring(24, 32.5, 2.4, 8.5);
  for (let i = 0; i < 48; i++) {
    const a = (Math.PI * 2 * i) / 48;
    s += `<circle class="dot" cx="${(44 * Math.cos(a)).toFixed(2)}" cy="${(44 * Math.sin(a)).toFixed(2)}" r="0.9" />`;
  }
  s += `<circle class="dot" r="3" /><circle r="13.5" /><circle r="26" /><circle r="41" /><circle r="47" />`;
  return `<svg class="mandala ${cls}" viewBox="-50 -50 100 100" aria-hidden="true">${s}</svg>`;
}

// A marigold garland (toran) hung across the top of the cover.
function toran() {
  const flower = (x, y, r, i) =>
    `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="url(#${i % 3 === 1 ? "mgY" : "mgO"})" stroke="#b5560c" stroke-width="0.6" stroke-dasharray="1.2 1" />`;
  let s = "";
  let i = 0;
  for (let x = 4; x <= 296; x += 7.3) {
    const y = 5 + 20 * Math.sin(Math.PI * ((x % 100) / 100));
    s += flower(x, y, 4.6, i++);
  }
  for (const x of [100, 200]) {
    for (let k = 0; k < 4; k++) s += flower(x, 10 + k * 8.5, 4.2, i++);
    s += `<path d="M${x} 42 q-4 6 0 12 q4 -6 0 -12z" fill="#3f7a2e" />`;
  }
  return `<svg viewBox="0 0 300 60" aria-hidden="true">
    <defs>
      <radialGradient id="mgO"><stop offset="0" stop-color="#c2410c"/><stop offset=".55" stop-color="#f28c18"/><stop offset="1" stop-color="#f7a531"/></radialGradient>
      <radialGradient id="mgY"><stop offset="0" stop-color="#e08a00"/><stop offset=".55" stop-color="#f8c21c"/><stop offset="1" stop-color="#fcd54a"/></radialGradient>
    </defs>${s}</svg>`;
}

// ---------- page content ----------

const coverPage = () => `
  <div class="cover">
    <div class="toran">${toran()}</div>
    ${mandala("bg-mandala")}
    <div class="cover-text">
      <div class="kicker">॥ शुभ रोका ॥</div>
      <h2 class="names">Shivam<span>&amp;</span>Swati</h2>
      <div class="rule"></div>
      <div class="label">The Roka Ceremony</div>
    </div>
  </div>`;

const introPage = () => `
  <div class="text-page">
    ${corners()}
    <div class="kicker">रोका</div>
    <h2>Roka</h2>
    <p>Two hearts, two families,<br />one beautiful beginning.</p>
    <div class="mini">${mandala()}</div>
    <p>With the blessings of our elders,<br />Shivam &amp; Swati begin<br />their journey together.</p>
  </div>`;

const closingPage = () => `
  <div class="text-page">
    ${corners()}
    <div class="kicker">शुभ आरंभ</div>
    <h2>Shubh Aarambh</h2>
    <p>Here's to a lifetime of love,<br />laughter and togetherness.</p>
    <div class="mini">${mandala()}</div>
    <p>With love &amp; blessings</p>
  </div>`;

const blankPage = () => `<div class="text-page">${corners()}</div>`;

const backCoverPage = () => `
  <div class="cover back-cover">
    ${mandala("bg-mandala")}
    <div class="cover-text">
      <h2 class="names">S <span style="display:inline">&amp;</span> S</h2>
      <div class="rule"></div>
      <div class="label">Forever begins here</div>
    </div>
  </div>`;

const photoPage = (photo, index) => `
  <div class="photo-page">
    ${corners()}
    <figure class="photo-frame" data-index="${index}">
      <img class="blur" alt="" aria-hidden="true" />
      <div class="placeholder">${
        SOURCE === "local" && !photo.url ? `Photo ${index + 1}<small>${photo.name}</small>` : "Loading…"
      }</div>
      <img class="main" alt="Roka ceremony photo ${index + 1}" />
      <button class="zoom" data-index="${index}" aria-label="View photo ${index + 1} full size">&#9906;</button>
    </figure>
    <div class="page-no">${index + 1}</div>
  </div>`;

function makeFaces() {
  const faces = [coverPage(), introPage(), ...photos.map(photoPage), closingPage()];
  // In the two-page view the back cover must land on the back of a leaf.
  if (faces.length % 2 === 0) faces.push(blankPage());
  faces.push(backCoverPage());
  return faces;
}

// ---------- book ----------

let faces = makeFaces();
let mode = null; // "spread" (two pages) or "single" (one page at a time)
let leaves = [];
let current = 0; // number of turned leaves

const maxPos = () => (mode === "spread" ? leaves.length : leaves.length - 1);

function build(newMode, focusFace) {
  if (focusFace === undefined) focusFace = mode === "spread" ? Math.max(0, current * 2 - 1) : current;
  mode = newMode;
  book.className = `book ${mode}`;
  book.innerHTML = "";
  leaves = [];

  const step = mode === "spread" ? 2 : 1;
  for (let i = 0; i < faces.length; i += step) {
    const leaf = document.createElement("div");
    leaf.className = "leaf";
    leaf.innerHTML = `
      <div class="face front">${faces[i]}</div>
      <div class="face back">${mode === "spread" ? faces[i + 1] : ""}</div>`;
    const index = leaves.length;
    leaf.addEventListener("click", (e) => {
      if (e.target.closest(".zoom")) return;
      if (index < current) prev();
      else next();
    });
    book.appendChild(leaf);
    leaves.push(leaf);
  }

  current = Math.min(mode === "spread" ? Math.ceil(focusFace / 2) : focusFace, maxPos());
  layer();
}

// Load photos only for pages near the open spread, so large albums stay quick.
function loadNear() {
  leaves.forEach((leaf, i) => {
    if (Math.abs(i - current) > 2) return;
    leaf.querySelectorAll(".photo-frame").forEach((frame) => {
      if (frame.dataset.loaded) return;
      const photo = photos[Number(frame.dataset.index)];
      const [main, fallback] = photoSources(photo, 1600);
      if (!main) return;
      frame.dataset.loaded = "1";
      const [blurSrc] = photoSources(photo, 200);
      const blur = frame.querySelector(".blur");
      const img = frame.querySelector(".main");
      img.addEventListener("load", () => {
        img.classList.add("loaded");
        frame.classList.add("ready");
      });
      img.addEventListener("error", () => {
        if (fallback && img.src !== fallback) img.src = fallback;
      });
      blur.addEventListener("load", () => blur.classList.add("loaded"));
      img.src = main;
      blur.src = blurSrc;
    });
  });
}

function chrome() {
  const max = maxPos();
  book.classList.toggle("at-start", mode === "spread" && current === 0);
  book.classList.toggle("at-end", mode === "spread" && current === leaves.length);
  book.classList.toggle("has-left", mode === "spread" && current > 0 && current < leaves.length);
  book.classList.toggle("has-right", current < max && !(mode === "spread" && current === 0));
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === max;

  const pages = faces.length - 2;
  if (current === 0) statusEl.textContent = "Cover";
  else if (current === max) statusEl.textContent = "Back cover";
  else if (mode === "spread") statusEl.textContent = `${current * 2 - 1}–${Math.min(current * 2, pages)} of ${pages}`;
  else statusEl.textContent = `${current} of ${pages}`;
  loadNear();
}

function layer() {
  leaves.forEach((leaf, i) => {
    const flipped = i < current;
    leaf.classList.toggle("flipped", flipped);
    leaf.classList.toggle("top", i === current || (mode === "spread" && i === current - 1));
    leaf.style.zIndex = flipped ? i + 1 : leaves.length - i;
  });
  chrome();
}

function turn(leaf) {
  // Keep the turning leaf above the others for the duration of the animation.
  leaf.style.zIndex = leaves.length + 10;
  leaf.classList.remove("turning");
  void leaf.offsetWidth;
  leaf.classList.add("turning");
  setTimeout(() => leaf.classList.remove("turning"), 1100);
  setTimeout(layer, 550);
  chrome();
}

function next() {
  if (current >= maxPos()) return;
  const leaf = leaves[current];
  current++;
  leaf.classList.add("flipped");
  turn(leaf);
}

function prev() {
  if (current <= 0) return;
  current--;
  const leaf = leaves[current];
  leaf.classList.remove("flipped");
  turn(leaf);
}

prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);

document.addEventListener("keydown", (e) => {
  if (!lightbox.hidden) {
    if (e.key === "Escape") closeLightbox();
    return;
  }
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") prev();
});

let touchX = null;
bookWrap.addEventListener("touchstart", (e) => (touchX = e.touches[0].clientX), { passive: true });
bookWrap.addEventListener("touchend", (e) => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 40) dx < 0 ? next() : prev();
  touchX = null;
});

// ---------- lightbox ----------

function openLightbox(index) {
  const [src, fallback] = photoSources(photos[index], 2400);
  if (!src) return;
  lbImg.onerror = () => {
    if (fallback && lbImg.src !== fallback) lbImg.src = fallback;
  };
  lbImg.src = src;
  lbImg.alt = `Roka ceremony photo ${index + 1}`;
  lightbox.hidden = false;
}

function closeLightbox() {
  lightbox.hidden = true;
  lbImg.removeAttribute("src");
}

book.addEventListener("click", (e) => {
  const zoom = e.target.closest(".zoom");
  if (zoom) {
    e.stopPropagation();
    openLightbox(Number(zoom.dataset.index));
  }
});
lightbox.addEventListener("click", (e) => {
  if (e.target !== lbImg) closeLightbox();
});

// ---------- photos from the viewer's device ----------

if (SOURCE === "local") {
  const wrap = document.createElement("div");
  wrap.className = "add-photos";
  wrap.innerHTML = `<label for="photoInput">Add photos from your device</label>
    <input type="file" id="photoInput" accept="image/*" multiple />`;
  document.getElementById("bottom").appendChild(wrap);

  // Every picked photo gets its own page, in file-name order; nothing leaves the browser.
  wrap.querySelector("input").addEventListener("change", (e) => {
    const files = [...e.target.files]
      .filter((f) => f.type.startsWith("image/"))
      .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
    if (!files.length) return;
    photos.forEach((p) => p.url && URL.revokeObjectURL(p.url));
    photos = files.map((f) => ({ name: f.name, url: URL.createObjectURL(f) }));
    faces = makeFaces();
    build(mode, 1);
    resize();
  });
}

// ---------- sizing ----------

const PAGE_RATIO = 0.72; // width / height of one page

function resize() {
  const top = document.getElementById("top").offsetHeight;
  const bottom = document.getElementById("bottom").offsetHeight;
  const availH = window.innerHeight - top - bottom - 24;
  const availW = document.body.clientWidth - 40;
  const spread = window.innerWidth >= 760 && window.innerWidth > window.innerHeight * 1.05;
  const pageW = Math.max(140, Math.floor(Math.min(spread ? availW / 2 : availW, availH * PAGE_RATIO)));
  document.documentElement.style.setProperty("--page-w", `${pageW}px`);
  document.documentElement.style.setProperty("--page-h", `${Math.round(pageW / PAGE_RATIO)}px`);
  const newMode = spread ? "spread" : "single";
  if (newMode !== mode) build(newMode);
}

window.addEventListener("resize", resize);
resize();

// ---------- falling marigold petals ----------

(function petals() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const canvas = document.getElementById("petals");
  const ctx = canvas.getContext("2d");
  const colors = ["#f29a1f", "#f8c21c", "#e2552b", "#f7b733"];
  let w = 0;
  let h = 0;

  function size() {
    const dpr = window.devicePixelRatio || 1;
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  const spawn = (anywhere) => ({
    x: Math.random() * w,
    y: anywhere ? Math.random() * h : -20,
    r: 3.5 + Math.random() * 4.5,
    vy: 0.35 + Math.random() * 0.6,
    sway: Math.random() * Math.PI * 2,
    a: Math.random() * Math.PI * 2,
    va: (Math.random() - 0.5) * 0.04,
    color: colors[Math.floor(Math.random() * colors.length)],
  });

  size();
  window.addEventListener("resize", size);
  const list = Array.from({ length: 26 }, () => spawn(true));

  (function frame() {
    if (!document.hidden) {
      ctx.clearRect(0, 0, w, h);
      for (const p of list) {
        p.sway += 0.012;
        p.x += Math.sin(p.sway) * 0.5;
        p.y += p.vy;
        p.a += p.va;
        if (p.y > h + 20) Object.assign(p, spawn(false));
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.a);
        ctx.globalAlpha = 0.7;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.r, p.r * 0.55, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }
    requestAnimationFrame(frame);
  })();
})();
