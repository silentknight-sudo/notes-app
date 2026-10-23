// Photos from the shared Google Drive folder (duplicate "(1)" copies left out).
const PHOTOS = [
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

// Primary and fallback Drive image URLs (both work for "anyone with the link" files).
const imageUrls = (id, width) => [
  `https://lh3.googleusercontent.com/d/${id}=w${width}`,
  `https://drive.google.com/thumbnail?id=${id}&sz=w${width}`,
];

const book = document.getElementById("book");
const bookWrap = document.getElementById("bookWrap");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const statusEl = document.getElementById("status");
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");

// ---------- page content ----------

const coverPage = () => `
  <div class="cover">
    <div class="small">The Roka Ceremony</div>
    <div class="orn">&#10087;</div>
    <h2 class="names">Shivam<span>&amp;</span>Swati</h2>
    <div class="orn">&#10087;</div>
    <div class="devanagari">शिवम् &amp; स्वाति</div>
  </div>`;

const introPage = () => `
  <div class="text-page">
    <h2>Roka</h2>
    <p>Two hearts, two families,</p>
    <p>one beautiful beginning.</p>
    <div class="orn">&#10086;</div>
    <p>With the blessings of our elders,</p>
    <p>Shivam &amp; Swati begin their journey together.</p>
  </div>`;

const closingPage = () => `
  <div class="text-page">
    <h2>Shubh Aarambh</h2>
    <p>Here's to a lifetime of love,</p>
    <p>laughter and togetherness.</p>
    <div class="orn">&#10086;</div>
    <p>With love &amp; blessings</p>
  </div>`;

const backCoverPage = () => `
  <div class="cover">
    <div class="orn">&#10087;</div>
    <h2 class="names" style="font-size: calc(var(--page-w) * 0.11)">S <span style="display:inline">&amp;</span> S</h2>
    <div class="small">Forever begins here</div>
  </div>`;

const photoPage = (photo, number) => {
  const [src] = imageUrls(photo.id, 1600);
  return `
    <div class="photo-page">
      <div class="photo-frame">
        <img class="blur" src="${imageUrls(photo.id, 200)[0]}" data-id="${photo.id}" alt="" aria-hidden="true" />
        <div class="loading">Loading…</div>
        <img class="main" src="${src}" data-id="${photo.id}" alt="Roka ceremony photo ${number}" />
        <button class="zoom" data-id="${photo.id}" aria-label="View photo ${number} full size">&#9906;</button>
      </div>
    </div>
    <div class="page-no">— ${number} —</div>`;
};

const faces = [
  coverPage(),
  introPage(),
  ...PHOTOS.map((p, i) => photoPage(p, i + 1)),
  closingPage(),
];
// Every leaf has two sides; pad with a blank page if needed so the back cover lands on a back side.
if (faces.length % 2 === 0) faces.push(`<div class="text-page"></div>`);
faces.push(backCoverPage());

// ---------- build leaves ----------

const leaves = [];
for (let i = 0; i < faces.length; i += 2) {
  const leaf = document.createElement("div");
  leaf.className = "leaf";
  leaf.innerHTML = `
    <div class="face front">${faces[i]}</div>
    <div class="face back">${faces[i + 1]}</div>`;
  const index = leaves.length;
  leaf.addEventListener("click", (e) => {
    if (e.target.closest(".zoom")) return;
    if (index < current) prev();
    else next();
  });
  book.appendChild(leaf);
  leaves.push(leaf);
}

// Fall back to the second Drive URL if the first fails, and fade images in once loaded.
book.querySelectorAll("img").forEach((img) => {
  const id = img.dataset.id;
  img.addEventListener("load", () => {
    img.classList.add("loaded");
    img.parentElement.querySelector(".loading")?.remove();
  });
  img.addEventListener("error", () => {
    const width = img.classList.contains("blur") ? 200 : 1600;
    const fallback = imageUrls(id, width)[1];
    if (img.src !== fallback) img.src = fallback;
  });
});

// ---------- navigation ----------

let current = 0; // number of flipped leaves

function render() {
  leaves.forEach((leaf, i) => {
    const flipped = i < current;
    leaf.classList.toggle("flipped", flipped);
    leaf.style.zIndex = flipped ? i + 1 : leaves.length - i;
  });
  book.classList.toggle("at-start", current === 0);
  book.classList.toggle("at-end", current === leaves.length);
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === leaves.length;

  if (current === 0) statusEl.textContent = "Cover";
  else if (current === leaves.length) statusEl.textContent = "Back cover";
  else statusEl.textContent = `Pages ${current * 2 - 1}–${current * 2} of ${faces.length - 2}`;
}

function turn(leaf) {
  // Keep the turning leaf above the others for the duration of the animation.
  leaf.style.zIndex = leaves.length + 10;
  setTimeout(render, 500);
}

function next() {
  if (current >= leaves.length) return;
  const leaf = leaves[current];
  current++;
  leaf.classList.add("flipped");
  turn(leaf);
  book.classList.remove("at-start");
  book.classList.toggle("at-end", current === leaves.length);
}

function prev() {
  if (current <= 0) return;
  current--;
  const leaf = leaves[current];
  leaf.classList.remove("flipped");
  turn(leaf);
  book.classList.remove("at-end");
  book.classList.toggle("at-start", current === 0);
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

function openLightbox(id) {
  const [src, fallback] = imageUrls(id, 2400);
  lbImg.onerror = () => {
    if (lbImg.src !== fallback) lbImg.src = fallback;
  };
  lbImg.src = src;
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
    openLightbox(zoom.dataset.id);
  }
});
lightbox.addEventListener("click", (e) => {
  if (e.target !== lbImg) closeLightbox();
});

// ---------- sizing ----------

function resize() {
  const narrow = window.innerWidth <= 640;
  const availW = window.innerWidth - (narrow ? 24 : 140);
  const availH = window.innerHeight - document.querySelector(".top").offsetHeight - document.querySelector(".bottom").offsetHeight - 24;
  const pageW = Math.max(120, Math.floor(Math.min(availW / 2, availH * 0.75)));
  document.documentElement.style.setProperty("--page-w", `${pageW}px`);
  document.documentElement.style.setProperty("--page-h", `${Math.round(pageW / 0.75)}px`);
}

window.addEventListener("resize", resize);
resize();
render();
