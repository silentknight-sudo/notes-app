// "drive" loads photos from the shared Google Drive folder; "local" lets the viewer pick photos from their device;
// "assets" shows the photos listed in window.ALBUM_PHOTOS ({ name, url }), e.g. copies uploaded alongside the page.
const SOURCE = window.ALBUM_SOURCE || "drive";

// Photos of Shivam and Swati together from the shared Google Drive folder, one or two per burst of similar shots.
const DRIVE_PHOTOS = [
  { id: "1epeBAM6FaPW2LVHMcavazkDuWiHk-3Tz", name: "_S1A5887" },
  { id: "11JGKCRic2UF3iLzgCBrOnHOo2S1xA4U8", name: "_S1A5890" },
  { id: "1bzYq_vEJ9qFUPpsdI0kOpsFAlmyCS2M8", name: "_S1A5892" },
  { id: "1QorFSue_0DFyzXuZINJjavYhdYS_QRhl", name: "_S1A5897" },
  { id: "1CUGJFkUQXoqBzMdQCk5q5VG0dmLFgTBC", name: "_S1A5901" },
  { id: "1qmBPOqpAo9ES0qoWSGnJA-stN2IJg5PV", name: "_S1A5903" },
  { id: "1lW09OA95PFdqaAJK2jNZAStDjcaBk7RZ", name: "_S1A5906" },
  { id: "1XwzDeXzuPL0RFV5evyPxUeE62n5PQ56K", name: "_S1A5917" },
  { id: "1L04djpa0idsQ-fYW9iyJnuMCHZ0ws8tQ", name: "_S1A5919" },
  { id: "1c1omWdjnsTp4TTXcicRcVssCjO62qlne", name: "_S1A6252" },
  { id: "1dpoYiFsFqMahigq7_cbQZgERuGywp9nt", name: "_S1A6291" },
  { id: "1SVsI9qbICpZ6TRPnZsU2jdlEMplETPbn", name: "_S1A6293" },
  { id: "1gsgLmHZZfkejSvTdZIrzh3H6NCo2HLNd", name: "_S1A6294" },
  { id: "1mdUyTdqloahqQMUnqmeaErFNvMRRstFb", name: "_S1A6298" },
  { id: "1U6qCj80SWQXeiTpyPIXjYfLMJRza9lW5", name: "_S1A6302" },
  { id: "1RgI5wbiUbmHxk0xrPEpkASBXU61-MmXA", name: "_S1A6305" },
  { id: "128WAmQsW5IIll81-m3jpz4yRaIq1J0XX", name: "_S1A6308" },
  { id: "17We3C9Z9aUn_IAq38UVaiLYqmprr7-fW", name: "_S1A6310" },
  { id: "1vLS-KuJxJuIpvNG4qie5-OHloKxvuZHg", name: "_S1A6313" },
  { id: "1FONXVDdZRzVnFkXPSRj98cNVhvm3_MYD", name: "_S1A6315" },
  { id: "10ZhBXvSU9pbX0g_3FcGHsJXmmiKZLVED", name: "_S1A6318" },
  { id: "13p7LWzzAF3xGGikvaC5KuvrihMG5Nu2H", name: "_S1A6320" },
  { id: "1aMSh_TJC59C5X8qkXuOKfshOHb-ssE7g", name: "_S1A6321" },
  { id: "1NsWJqP4wYE2U00PzWCe7wiH5Tg7d_4Tm", name: "_S1A6324" },
  { id: "1gL82BF9mQx0FWinuX-CTtvvgVHQ8qYdV", name: "_S1A6329" },
  { id: "1sZQdy4k4m_1cUzOxFhuZKHPnVT3a5Np_", name: "_S1A6332" },
  { id: "1DbhNxtubLG39D1RHmHCJMkaHY5wCQexg", name: "_S1A6334" },
  { id: "1-4wLHc4GUvvdXGfUeKF0JGfpXI90sJQ_", name: "_S1A6336" },
  { id: "1debbUMNZ-GM0H9fnRi3D_h_BZQbR8Oc0", name: "_S1A6337" },
  { id: "1Noes3VkFRO1AixxyZsmP4fM3CqPc-mAj", name: "_S1A6342" },
  { id: "1mWRSgma0h3RdEQOztMCBZZzycnjsb5zV", name: "_S1A6354" },
  { id: "1Jq4yhahJNO5GcaxcDrY1H7WXdtzDAT2R", name: "_S1A6357" },
  { id: "1WAtC05vRhypVPGKw9fS3vbrymKmrDPTR", name: "_S1A6360" },
  { id: "142XNwYScar-U3srYjhuSxU847tWn3EXW", name: "_S1A6363" },
  { id: "1nC_ZdfQFiPVV2f0j9BtoxlpIJhcNvHhN", name: "_S1A6364" },
  { id: "1QNk1dueWP8abRujtfRzw0t6AZDgRscRo", name: "_S1A6367" },
  { id: "1DU5645SqWvfoj9JVRJi1jBoVss7yyS5l", name: "_S1A6371" },
  { id: "1Rcu99pRsciDOmtlghV6_Y8pH95tCvQrH", name: "_S1A6374" },
  { id: "1msJkLyvBXCKwp61lA4D5CZysWxJvn2Zr", name: "_S1A6376" },
  { id: "1VvIY406rMFFeIZmBuMOX4zrbjdQXccZw", name: "_S1A6378" },
  { id: "1RavVy-GffX9IIpnvob_hzojESqVvA3IB", name: "_S1A6384" },
  { id: "1nce40wzdM5W-GIw98vFRfg44bdA9OG6X", name: "_S1A6388" },
  { id: "163MqvnxtKNuKtAZdrFv7ilckLhnzMPjx", name: "_S1A6390" },
  { id: "1ge1L426rL-HioUl2Jm0tgLX6Cix8kmIL", name: "_S1A6393" },
  { id: "1dABfQSe4fUC61iMw5z0c9td5YQZyV9ka", name: "_S1A6396" },
  { id: "1B3O49gxyj3G75Fyy9NJhhBUk2DcKaVp5", name: "_S1A6400" },
  { id: "1uzXFgiylVT1Cqsv5tm09jerT1iiWKGKs", name: "_S1A6402" },
  { id: "1hMe_y5Zl5S0m3gx-l2dqmb1GIQV0k3oe", name: "_S1A6405" },
  { id: "1TTi-60x7sXhguZDI8PK-RFz8zf-OBnzj", name: "_S1A6410" },
  { id: "1JHAzZz9OjVnwegUAA7VjubTHOBa9p3DF", name: "_S1A6414" },
  { id: "1sd58oy5uR1STEYT3xRsYXhVF3sQqYfna", name: "_S1A6418" },
  { id: "1exceaZCnifbCwPGlPVlpsj3fGRvvSyhr", name: "_S1A6423" },
  { id: "1IqAY5zRipNldDtI0EB5oe3B5YbFqqxY3", name: "_S1A6425" },
  { id: "1sXZ74-VlA7fHYhb-9u67joNvKrmJifFO", name: "_S1A6431" },
  { id: "1TLGfI_317vCw5OpRDZDsPeGK_dOKRhqX", name: "_S1A6437" },
  { id: "12gqp38h1r7SLrYLo0ZZUw53Hd53w2zgh", name: "_S1A6439" },
  { id: "1SyJxsCYFuOhYPUT9JWGnzQiBaHa8SULQ", name: "_S1A6440" },
  { id: "15zvKrOqm0194Dkqu6QAlHYayqrmQyF4_", name: "_S1A6451" },
  { id: "1qyxyLhWLGQbdAfGBhI-v99ksHJsHKkKj", name: "_S1A6453" },
  { id: "1wfOu7C-4NgflczZYb8RNc9-f3cZYoXeM", name: "_S1A6456" },
  { id: "1bMTj5sI8TgjGorLFVzEChN6ikySJ4tPz", name: "_S1A6467" },
  { id: "1H6Z1mpwcLW7OWMlpMLwRLqIDHEXBj3Zz", name: "_S1A6469" },
  { id: "1f9FM1zEm41FJ-3F9f4iXGRlYjQoZQihB", name: "_S1A6481" },
  { id: "1pxHA-JLeYeMrCEjEVPOZAtUSBERTYhgA", name: "_S1A6483" },
  { id: "12XFRlKniarmH84cx_NCEfyDxzVgfcwKt", name: "_S1A6486" },
  { id: "1Dg8hXzP4Uvbcb4L8-_pAp28r9BVH_2Gw", name: "_S1A6488" },
  { id: "17OR5BxOebW2aSP9YtKLF9PN7HYwxtSoj", name: "_S1A6499" },
  { id: "1EzhuXER-3Bbqef_M2SUGwq-DdZH4OEiI", name: "_S1A6502" },
  { id: "1VxAVpkliSG9BBJUijdMcCHHHO2JEGrB2", name: "_S1A6505" },
  { id: "10rA3Ttn9rm-tEgNSFNfrBp2qY1ThPIhw", name: "_S1A6507" },
  { id: "1JR3oDe_DH2Fg8_bHHG457QcLK_Fewoaj", name: "_S1A6510" },
  { id: "1C0gMWkjSaS0Vfs5LUe68rJ-RxIClwh94", name: "_S1A6513" },
  { id: "1MFNrDLlItTixmGx-_caJRqfgtb8Q0pUU", name: "_S1A6517" },
  { id: "1VY1lTF-Cgrq5nZzR-PfU0yQkqDk1EVnN", name: "_S1A6523" },
  { id: "1zMLIKk7AoKgrVVo9GwWohQQY6czZPcuF", name: "_S1A6525" },
  { id: "1_dOK4Zx1Y3LiOojUZsHlL2QD_BQ53Ouk", name: "_S1A6529" },
  { id: "19Sk0H6PM3veFc2YhxS12dYN8D7ADin81", name: "_S1A6530" },
  { id: "1tVPWWziwQYNYIXW6lztW2Efiy-IF88hQ", name: "_S1A6533" },
  { id: "1OQk5mZDQFoC16jzh2VMjAqFyAh7YNd7J", name: "_S1A6534" },
  { id: "1PGm-Y05SB4FRWBOey-b3hgoVAPz3SaWk", name: "_S1A6537" },
  { id: "1kRwhXfZ8rsnl0JwAqYyE7IfJmbEr_yv4", name: "_S1A6539" },
  { id: "1muV9PF69O8MjlUpRiw_fMhx1ScV4LWeL", name: "_S1A6542" },
  { id: "14wq-Oen3QLC5T_EnsfERlVUUtpffY7_i", name: "_S1A6545" },
  { id: "10h_qz-14l74KyaHPycFPw6hMc-iZpLsy", name: "_S1A6548" },
  { id: "1Nx4oy8peAuuHYHpMsTchfsi5v0X9ij9L", name: "_S1A6557" },
  { id: "1KUYOySq3vyaHHqCIJa6_uEpo6rPyeSDF", name: "_S1A6560" },
  { id: "1Xzih-6_QxGhsEcZkcl_Uw6ipSm2881Qo", name: "_S1A6565" },
  { id: "1gJnkNu16L5C45kK2bnjgTmD54PBX69bX", name: "_S1A6567" },
  { id: "1N_01tYJrFlbXEKYZ0hnl44kxkc978EZm", name: "_S1A6570" },
];

let photos = (SOURCE === "assets" ? window.ALBUM_PHOTOS || [] : DRIVE_PHOTOS).map((p) => ({ ...p }));

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
  // Only leaves near the open spread are rendered; hundreds of 3D layers overwhelm the browser.
  leaves.forEach((leaf, i) => leaf.classList.toggle("far", Math.abs(i - current) > 3));
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
