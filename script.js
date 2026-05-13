const PRODUCTS = [
  {
    id: "tongueCleaner",
    name: "Tongue Cleaner",
    brand: "Perfora Stainless Steel Tongue Cleaner",
    category: "oral",
    status: "available",
    instruction: "Scrape gently front to back 3 to 5 times.",
    fallbackIds: []
  },
  {
    id: "toothBrushKit",
    name: "Brush Teeth Kit",
    brand: "Oral-B Cross Action Electric Toothbrush + Dabur Meswak Toothpaste",
    category: "oral",
    status: "available",
    instruction: "Put toothpaste on brush, place on teeth, then switch on.",
    fallbackIds: []
  },
  {
    id: "floss",
    name: "Dental Floss",
    brand: "Oral-B Essential Floss",
    category: "oral",
    status: "available",
    instruction: "Move gently between teeth. Do not snap hard on gums.",
    fallbackIds: []
  },
  {
    id: "bodyWash",
    name: "Body Wash",
    brand: "Dove Deep Moisture Body Wash",
    category: "bath",
    status: "available",
    instruction: "Use a small amount on wet skin, rub, then rinse.",
    fallbackIds: ["charcoalSoap"]
  },
  {
    id: "siliconeScrubber",
    name: "Silicone Body Scrubber",
    brand: "Feel Good Club Silicone Body Scrubber",
    category: "bathTool",
    status: "arriving",
    arrivalDate: "2026-05-15",
    instruction: "Use gently on arms, chest, and body with body wash.",
    fallbackIds: ["backBrush"]
  },
  {
    id: "backBrush",
    name: "Back Cleaning Brush",
    brand: "Bronson Professional Back Cleaning Brush",
    category: "bathTool",
    status: "arriving",
    arrivalDate: "2026-05-13",
    instruction: "Use for back only with light pressure.",
    fallbackIds: ["siliconeScrubber"]
  },
  {
    id: "shampoo",
    name: "Shampoo + Conditioner",
    brand: "Dove Men+Care Anti Dandruff 2-in-1",
    category: "hairWash",
    status: "available",
    instruction: "Apply on scalp, massage, leave briefly, then rinse.",
    fallbackIds: []
  },
  {
    id: "faceWashBombay",
    name: "Face Wash",
    brand: "Bombay Shaving Company Charcoal + Coffee Face Wash Combo",
    category: "faceWash",
    status: "available",
    instruction: "Massage on wet face for 15 to 20 seconds, then rinse.",
    fallbackIds: []
  },
  {
    id: "faceScrub",
    name: "Face Scrub",
    brand: "Bombay Shaving Company Charcoal Face Scrub",
    category: "faceScrub",
    status: "available",
    instruction: "Use gently 2 to 3 times a week, not daily.",
    fallbackIds: []
  },
  {
    id: "moisturiser",
    name: "Moisturiser",
    brand: "Re'equil Oil Free Moisturiser",
    category: "moisturiser",
    status: "available",
    instruction: "Apply a thin layer on clean face.",
    fallbackIds: ["bodyLotion"]
  },
  {
    id: "sunscreen",
    name: "Sunscreen",
    brand: "Personal Touch Sunstalker Korea Aqua Gel SPF",
    category: "sunscreen",
    status: "arriving",
    arrivalDate: "2026-05-15",
    instruction: "Apply well on face and neck before going out.",
    fallbackIds: []
  },
  {
    id: "lipBalm",
    name: "Lip Balm SPF 30",
    brand: "Minimalist SPF 30 Lip Balm",
    category: "lipCare",
    status: "available",
    instruction: "Apply a thin layer on lips.",
    fallbackIds: []
  },
  {
    id: "eyeSerum",
    name: "Eye Serum",
    brand: "The Ordinary Caffeine Solution 5% + EGCG",
    category: "eyeCare",
    status: "available",
    instruction: "Use one small drop and tap gently under eyes.",
    fallbackIds: []
  },
  {
    id: "retinol",
    name: "Retinol 0.3%",
    brand: "Minimalist Retinol 0.3% Face Serum",
    category: "nightCare",
    status: "available",
    instruction: "Use only at night. Apply a small amount on dry face.",
    fallbackIds: []
  },
  {
    id: "hairOil",
    name: "Hair Oil",
    brand: "Biotique Advanced Organics Argan Oil",
    category: "hairCare",
    status: "available",
    instruction: "Use a few drops only on hair lengths or dry areas.",
    fallbackIds: []
  },
  {
    id: "leaveIn",
    name: "Leave-In Cream",
    brand: "L'Oreal Paris Hyaluron Moisture Anti-Frizz",
    category: "hairCare",
    status: "available",
    instruction: "Apply a little on damp hair after towel drying.",
    fallbackIds: ["hairOil"]
  },
  {
    id: "deo",
    name: "Deodorant",
    brand: "Nivea Men Deodorant Fresh Active 48h",
    category: "deo",
    status: "available",
    instruction: "Use 2 to 4 swipes or sprays on clean underarms/body.",
    fallbackIds: ["cairo", "gotham", "milan"]
  },
  {
    id: "cairo",
    name: "Perfume",
    brand: "Bombay Shaving Company Cairo 30 ml",
    category: "fragrance",
    status: "available",
    instruction: "Use 2 to 4 sprays on neck and chest.",
    fallbackIds: ["gotham", "milan"]
  },
  {
    id: "gotham",
    name: "Perfume",
    brand: "Bombay Shaving Company Gotham 100 ml",
    category: "fragrance",
    status: "available",
    instruction: "Use 2 to 4 sprays on neck and chest.",
    fallbackIds: ["milan", "cairo"]
  },
  {
    id: "milan",
    name: "Perfume",
    brand: "Bombay Shaving Company Milan 100 ml",
    category: "fragrance",
    status: "available",
    instruction: "Use 2 to 4 sprays on neck and chest.",
    fallbackIds: ["gotham", "cairo"]
  },
  {
    id: "bodyLotion",
    name: "Body Lotion",
    brand: "Bombay Shaving Company Shea Butter Body Lotion",
    category: "bodyCare",
    status: "available",
    instruction: "Apply on dry skin after bath if needed.",
    fallbackIds: []
  },
  {
    id: "charcoalSoap",
    name: "Charcoal Massage Soap",
    brand: "Bombay Shaving Company Charcoal Massage Soap (Pack of 3)",
    category: "bath",
    status: "unavailable",
    instruction: "Massage on wet skin and rinse.",
    fallbackIds: ["bodyWash"]
  }
];

const ST = {
  curTab: "routine",
  selDate: "",
  isBath: false,
  atHome: true,
  checks: {},
  pSearch: "",
  pFilt: "all"
};

function todayStr() {
  const d = new Date();
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

function toDateOnly(v) {
  return new Date(v + "T00:00:00");
}

function getEffectiveStatus(product) {
  if (product.status === "arriving") {
    if (!ST.selDate || !product.arrivalDate) return "arriving";
    return toDateOnly(ST.selDate) >= toDateOnly(product.arrivalDate) ? "available" : "arriving";
  }
  return product.status;
}

function getStatusLabel(product) {
  const s = getEffectiveStatus(product);
  if (s === "available") return "Available";
  if (s === "arriving") return "Arriving";
  return "Unavailable";
}

function getProduct(id) {
  return PRODUCTS.find(p => p.id === id);
}

function getAvailableFallback(product) {
  if (!product || !product.fallbackIds) return null;
  for (const id of product.fallbackIds) {
    const alt = getProduct(id);
    if (alt && getEffectiveStatus(alt) === "available") return alt;
  }
  return null;
}

function fragranceSuggestion() {
  const available = ["cairo", "gotham", "milan"]
    .map(getProduct)
    .filter(p => p && getEffectiveStatus(p) === "available");

  if (!available.length) return [];
  const index = toDateOnly(ST.selDate || todayStr()).getDate() % available.length;
  return [available[index], ...available.filter((_, i) => i !== index)];
}

function setTab(tab) {
  ST.curTab = tab;
  render();
}

function setLocation(atHome) {
  ST.atHome = atHome;
  render();
}

function setDate(v) {
  ST.selDate = v;
  render();
}

function toggleStep(key) {
  ST.checks[key] = !ST.checks[key];
  render();
}

function setPSearch(v) {
  ST.pSearch = v;
  render();
}

function setPFilt(f) {
  ST.pFilt = f;
  render();
}

function setPA(id, status) {
  const p = getProduct(id);
  if (p) {
    p.status = status;
    if (status !== "arriving") delete p.arrivalDate;
  }
  render();
}

function setAD(id, d) {
  const p = getProduct(id);
  if (p) {
    p.status = "arriving";
    p.arrivalDate = d;
  }
  render();
}

function productCard(product, opts = {}) {
  const status = getEffectiveStatus(product);
  const cardClass =
    status === "available" ? "prod-ok" :
    status === "arriving" ? "prod-arriving" :
    "prod-unavailable";

  const fallback = opts.showFallback ? getAvailableFallback(product) : null;

  return `
    <div class="prod-card ${cardClass}">
      <div class="prod-name">${product.name}</div>
      <div class="prod-brand">${product.brand}</div>
      <div class="prod-meta">${getStatusLabel(product)}</div>
      ${status === "arriving" && product.arrivalDate ? `<div class="prod-arr">Expected: ${product.arrivalDate}</div>` : ""}
      ${fallback ? `<div class="prod-fallback">Use instead: ${fallback.brand}</div>` : ""}
    </div>
  `;
}

function stepBlock(sec, step, i) {
  const key = `${sec}_${i}_${step.title}`;
  const checked = ST.checks[key] || false;

  let html = `
    <div class="step-row">
      <div class="step-head">
        <input type="checkbox" ${checked ? "checked" : ""} onclick="toggleStep('${key.replace(/'/g, "\\'")}')">
        <div>
          <div class="step-title" style="${checked ? "text-decoration:line-through;opacity:.6" : ""}">${step.title}</div>
          <div class="step-mini">${step.instruction}</div>
          <div class="step-type">${step.type || "Required"}</div>
        </div>
      </div>
      <div class="step-products">
  `;

  (step.productIds || []).forEach(id => {
    const p = getProduct(id);
    if (p) html += productCard(p, { showFallback: true });
  });

  if (step.dynamic === "fragrance") {
    const picks = fragranceSuggestion();
    if (picks.length) {
      html += `
        <div class="prod-fallback">Suggested today: ${picks[0].brand}</div>
        <div class="small-note">Other available options: ${picks.slice(1).map(x => x.brand).join(" • ") || "None"}</div>
      `;
    } else {
      html += `<div class="prod-fallback">No fragrance available today.</div>`;
    }
  }

  html += `</div></div>`;
  return html;
}

function getRoutineSections() {
  const sections = [];

  if (ST.isBath) {
    sections.push({
      name: "BEFORE BATH",
      steps: [
        {
          title: "Tongue clean",
          instruction: "Scrape gently front to back 3 to 5 times.",
          type: "Required",
          productIds: ["tongueCleaner"]
        },
        {
          title: "Brush teeth",
          instruction: "Put toothpaste on brush, place on teeth, then switch on.",
          type: "Required",
          productIds: ["toothBrushKit"]
        },
        {
          title: "Floss",
          instruction: "Use gently between teeth if food is stuck or at night.",
          type: "Optional",
          productIds: ["floss"]
        }
      ]
    });

    sections.push({
      name: "BATH",
      steps: [
        {
          title: "Wash body",
          instruction: "Use body wash on wet skin and rinse properly.",
          type: "Required",
          productIds: ["bodyWash"]
        },
        {
          title: "Use body tool",
          instruction: "Use silicone scrubber or back brush gently only.",
          type: "Optional",
          productIds: ["siliconeScrubber", "backBrush"]
        },
        {
          title: "Wash hair",
          instruction: "Massage shampoo on scalp, then rinse well.",
          type: "Required",
          productIds: ["shampoo"]
        },
        {
          title: "Wash face",
          instruction: "Clean face gently for 15 to 20 seconds, then rinse.",
          type: "Required",
          productIds: ["faceWashBombay"]
        },
        {
          title: "Face scrub",
          instruction: "Use only 2 to 3 times a week, very gently.",
          type: "Optional",
          productIds: ["faceScrub"]
        }
      ]
    });
  } else {
    sections.push({
      name: "MORNING",
      steps: [
        {
          title: "Tongue clean",
          instruction: "Scrape gently front to back 3 to 5 times.",
          type: "Required",
          productIds: ["tongueCleaner"]
        },
        {
          title: "Brush teeth",
          instruction: "Put toothpaste on brush, place on teeth, then switch on.",
          type: "Required",
          productIds: ["toothBrushKit"]
        },
        {
          title: "Floss",
          instruction: "Use gently between teeth if needed.",
          type: "Optional",
          productIds: ["floss"]
        }
      ]
    });
  }

  sections.push({
    name: ST.isBath ? "AFTER BATH / MORNING" : "MORNING CARE",
    steps: [
      {
        title: "Apply moisturiser",
        instruction: "Use a thin layer on face after cleaning.",
        type: "Required",
        productIds: ["moisturiser"]
      },
      ...(!ST.atHome ? [{
        title: "Apply sunscreen",
        instruction: "Apply on face and neck before going out.",
        type: "Required",
        productIds: ["sunscreen"]
      }] : []),
      {
        title: "Apply lip balm",
        instruction: "Use a small layer on lips.",
        type: "Required",
        productIds: ["lipBalm"]
      },
      {
        title: "Apply deodorant",
        instruction: "Use on clean underarms or body.",
        type: "Required",
        productIds: ["deo"]
      },
      {
        title: "Apply fragrance",
        instruction: "Use 2 to 4 sprays on neck and chest.",
        type: "Rotating",
        dynamic: "fragrance",
        productIds: []
      }
    ]
  });

  sections.push({
    name: "NIGHT",
    steps: [
      {
        title: "Brush teeth",
        instruction: "Put toothpaste on brush, place on teeth, then switch on.",
        type: "Required",
        productIds: ["toothBrushKit"]
      },
      {
        title: "Floss",
        instruction: "Use gently between teeth before sleeping.",
        type: "Optional",
        productIds: ["floss"]
      },
      {
        title: "Apply eye serum",
        instruction: "Use one small drop and tap gently.",
        type: "Required",
        productIds: ["eyeSerum"]
      },
      {
        title: "Apply retinol",
        instruction: "Use only on dry face at night. Skip if skin is irritated.",
        type: "Required",
        productIds: ["retinol"]
      },
      {
        title: "Apply hair oil or leave-in",
        instruction: "Use only a small amount, not too much.",
        type: "Optional",
        productIds: ["hairOil", "leaveIn"]
      },
      {
        title: "Body lotion if needed",
        instruction: "Use on dry body areas after bath or at night.",
        type: "Optional",
        productIds: ["bodyLotion"]
      }
    ]
  });

  return sections;
}

function renderRoutine() {
  let html = `
    <div class="view-wrap">
      <button class="reset-btn" onclick="ST.checks={};render()">🔄 Reset Today's Checks</button>

      <div class="notice">
        <div class="notice-title">How this works</div>
        <div class="notice-text">
          Products marked arriving are treated as not available until their date.
          If a main item is missing, the app tries to show a valid backup from the same type.
        </div>
      </div>
  `;

  getRoutineSections().forEach(sec => {
    html += `<div class="routine-sec"><div class="sec-title">${sec.name}</div>`;
    sec.steps.forEach((step, i) => {
      html += stepBlock(sec.name, step, i);
    });
    html += `</div>`;
  });

  html += `</div>`;
  return html;
}

function renderProds() {
  const q = ST.pSearch.toLowerCase();
  const f = ST.pFilt;

  const list = PRODUCTS.filter(p => {
    const effective = getEffectiveStatus(p);
    if (f === "available" && effective !== "available") return false;
    if (f === "arriving" && effective !== "arriving") return false;
    if (f === "unavailable" && effective !== "unavailable") return false;
    if (q && !(`${p.name} ${p.brand} ${p.category}`.toLowerCase().includes(q))) return false;
    return true;
  });

  let html = `
    <div class="prod-hdr">
      <input type="text" placeholder="🔍 Search products..." value="${ST.pSearch}" oninput="setPSearch(this.value)">
    </div>

    <div class="prod-filters">
      <button class="${f === "all" ? "active" : ""}" onclick="setPFilt('all')">All</button>
      <button class="${f === "available" ? "active" : ""}" onclick="setPFilt('available')">Available</button>
      <button class="${f === "arriving" ? "active" : ""}" onclick="setPFilt('arriving')">Arriving</button>
      <button class="${f === "unavailable" ? "active" : ""}" onclick="setPFilt('unavailable')">Unavailable</button>
    </div>

    <div class="prod-list">
  `;

  if (!list.length) {
    html += `<div class="empty">No products found</div></div>`;
    return html;
  }

  list.forEach(p => {
    const effective = getEffectiveStatus(p);
    const badgeClass =
      effective === "available" ? "badge-ok" :
      effective === "arriving" ? "badge-arr" :
      "badge-un";

    html += `
      <div class="prod-section">
        <div class="prod-sec-hdr">${p.name}</div>
        <div class="prod-cat">Category: ${p.category}</div>
        <div style="margin-bottom:8px"><span class="badge ${badgeClass}">${getStatusLabel(p)}</span></div>
        <div style="margin-bottom:8px"><strong>Brand:</strong> ${p.brand}</div>
        <div class="small-note"><strong>How to use:</strong> ${p.instruction}</div>
        ${p.arrivalDate ? `<div class="small-note"><strong>Arrival date:</strong> ${p.arrivalDate}</div>` : ""}
        ${
          getAvailableFallback(p)
            ? `<div class="small-note"><strong>Best alternative now:</strong> ${getAvailableFallback(p).brand}</div>`
            : ""
        }

        <div class="small-note" style="margin-top:10px">
          <label><input type="radio" name="av_${p.id}" ${p.status === "available" ? "checked" : ""} onchange="setPA('${p.id}','available')"> Available</label>
          <label style="margin-left:10px"><input type="radio" name="av_${p.id}" ${p.status === "arriving" ? "checked" : ""} onchange="setPA('${p.id}','arriving')"> Arriving</label>
          <label style="margin-left:10px"><input type="radio" name="av_${p.id}" ${p.status === "unavailable" ? "checked" : ""} onchange="setPA('${p.id}','unavailable')"> Unavailable</label>
        </div>

        ${p.status === "arriving" ? `<div class="small-note" style="margin-top:8px"><input type="date" value="${p.arrivalDate || ""}" onchange="setAD('${p.id}', this.value)" style="border:1px solid #cbd5e1;border-radius:6px;padding:6px;font-size:12px"></div>` : ""}
      </div>
    `;
  });

  html += `</div>`;
  return html;
}

function updateTabs() {
  const tabs = document.querySelectorAll(".tab");
  if (tabs[0]) tabs[0].className = ST.curTab === "routine" ? "tab active" : "tab";
  if (tabs[1]) tabs[1].className = ST.curTab === "products" ? "tab active" : "tab";
}

function updateLocButtons() {
  const homeBtn = document.getElementById("homeBtn");
  const outBtn = document.getElementById("outBtn");
  if (homeBtn) homeBtn.className = ST.atHome ? "loc-btn active" : "loc-btn";
  if (outBtn) outBtn.className = !ST.atHome ? "loc-btn active" : "loc-btn";
}

function render() {
  const app = document.getElementById("app");
  if (!app) return;
  app.innerHTML = ST.curTab === "routine" ? renderRoutine() : renderProds();
  updateTabs();
  updateLocButtons();
}

(function init() {
  ST.selDate = todayStr();
  const el = document.getElementById("selDate");
  if (el) el.value = ST.selDate;
  render();
})();