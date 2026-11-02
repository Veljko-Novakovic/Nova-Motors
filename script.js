const cars = [
  {
    id: "golf-5-gti",
    make: "Volkswagen",
    model: "Golf 5 GTI",
    trim: "GTI",
    year: 2005,
    price: 10350,
    mileage: 178000,
    fuel: "Benzin",
    engine: "2,0-litarski benzinski redni četvorocilindarski motor",
    power: "330 KS",
    body: "Hečbek",
    tag: "GTI",
    color: "#8b302e",
    images: [
      "assets/golf-5-gti/IMG-5a2aec55595eb8626be42c5cde529043-V.jpg",
      "assets/golf-5-gti/IMG-6289564a2c98536eb9ea578d1b559d3f-V.jpg",
      "assets/golf-5-gti/IMG-6ee16128473a11f47738e6b75a396f9f-V.jpg",
      "assets/golf-5-gti/IMG-8d5f6d8aad1acf980e6302db7e0161dc-V.jpg",
      "assets/golf-5-gti/IMG-6bd0ae1a9542ac5d46d3386cc8ab290d-V.jpg",
      "assets/golf-5-gti/IMG-e7d158c77696d4ebc83df10e66d6af5c-V.jpg",
      "assets/golf-5-gti/20250207_114144.jpg",
      "assets/golf-5-gti/20250207_114225.jpg",
      "assets/golf-5-gti/20250207_114108.jpg",
      "assets/golf-5-gti/IMG-c408bb6a21c74b4907fadccb743b2079-V.jpg",
      "assets/golf-5-gti/IMG-bdbaf8e73302cdea7318ad7239b7a5c7-V.jpg",
      "assets/golf-5-gti/IMG-6d55b197adf43a035419384ef60c2e0b-V.jpg",
      "assets/golf-5-gti/IMG-85e99eda21476c9113b3f8c648cf3371-V.jpg",
      "assets/golf-5-gti/IMG-b674b14a02277efc8686047a769161b4-V.jpg",
      "assets/golf-5-gti/IMG-b960e4b052db16995ae437f0051ec0f6-V.jpg",
      "assets/golf-5-gti/IMG-df854823e24047aca25a08d5c8103fff-V.jpg"
    ],
    description: "Automobil je u odličnom stanju, sa čistom dokumentacijom, kočnicama sa Audi TT-RS modela, RS5 felnama, kompletnim Gorilla Performance sistemom, kompletnim Bull-X izduvnim sistemom i još nekim prepravkama."
  },
  {
    id: "audi-a8-l",
    make: "Audi",
    model: "A8 L",
    trim: "",
    year: 2010,
    price: 24900,
    mileage: 240000,
    fuel: "Dizel",
    engine: "3.0 V6",
    power: "245 KS",
    gearbox: "Automatik",
    drive: "4X4",
    package: "Chauffeur",
    body: "Limuzina",
    tag: "A8 L",
    color: "#56544e",
    images: [
      "assets/audi-a8-l/IMG-20261101-WA0010.jpg",
      "assets/audi-a8-l/IMG-20261101-WA0013.jpg",
      "assets/audi-a8-l/IMG-20261101-WA0011.jpg",
      "assets/audi-a8-l/IMG-20261101-WA0012.jpg",
      "assets/audi-a8-l/IMG-20261101-WA0014.jpg",
      "assets/audi-a8-l/IMG-20260928-WA0004.jpg",
      "assets/audi-a8-l/IMG-20260928-WA0001.jpg",
      "assets/audi-a8-l/IMG-20261101-WA0016.jpg",
      "assets/audi-a8-l/IMG-20261101-WA0015.jpg",
      "assets/audi-a8-l/IMG-20261101-WA0017.jpg"
    ],
    description: [
      "Puna koža",
      "Četiri električna sjedišta sa memorijom, grijanjem, hlađenjem i masažerima",
      "Dupli panoramski krov i nebo od alkantare",
      "Fond entertainment system",
      "High End 3D Bang & Olufsen sound system",
      "Električno podesiv volan sa grijanjem",
      "Kožna instrument tabla",
      "Kamera za vožnju unazad",
      "Night Vision",
      "Sistem za nadzor mrtvog ugla",
      "LED farovi i stop-svjetla",
      "Ambijentalno osvjetljenje",
      "Električne zavjesice",
      "Električno otvaranje i zatvaranje prtljažnika",
      "Četvorozonska automatska klima",
      "Webasto",
      "Bluetooth",
      "Soft-Close zatvaranje vrata",
      "Vazdušni jastuci",
      "MMI",
      "Režimi vožnje: Individual, Dynamic i Comfort",
      "Urađen veliki servis: lanci, zatezači, vodena pumpa i kompletno predihtovan motor",
      "Servisiran mjenjač",
      "Nove kočione pločice",
      "Sve dizne servisirane i pod garancijom"
    ]
  }
];

function formatPrice(price) {
  return new Intl.NumberFormat("sr-Latn-ME", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0
  }).format(price);
}

function formatMileage(mileage) {
  return `${new Intl.NumberFormat("sr-Latn-ME").format(mileage)} km`;
}

function carIllustration(car) {
  return `<svg class="car-art" viewBox="0 0 440 210" role="img" aria-label="Ilustracija automobila ${car.make} ${car.model}">
    <path class="car-body" d="M61 139c7-4 18-8 31-10l43-8 42-38c12-11 25-16 42-16h63c17 0 29 6 42 17l30 29 27 7c14 3 22 12 22 25v15H57v-11c0-5 1-8 4-10Z"/>
    <path class="car-window" d="m188 84-37 34 68-1V75h-2c-11 0-20 3-29 9Zm43-9v42l81-1-26-27c-8-9-16-14-29-14h-26Z"/>
    <path class="car-highlight" d="m80 139 60-10m181-2 42 3"/>
    <path class="car-body" d="M84 128h37l13 22H89Zm200 1h45l17 21h-65Z"/>
    <circle class="car-wheel" cx="118" cy="151" r="24"/><circle class="car-wheel-core" cx="118" cy="151" r="9"/>
    <circle class="car-wheel" cx="335" cy="151" r="24"/><circle class="car-wheel-core" cx="335" cy="151" r="9"/>
    <path d="m388 125 15 4 3 8h-18Z" fill="#ead7ae"/><path d="m66 128 9-2 3 9H62Z" fill="#d77c5e"/>
  </svg>`;
}

function loadSavedCars() {
  try {
    const stored = JSON.parse(localStorage.getItem("velvet-motors-saved") || "[]");
    return new Set(Array.isArray(stored) ? stored.filter((id) => cars.some((car) => car.id === id)) : []);
  } catch (error) {
    console.warn("Sačuvani automobili nijesu učitani iz pregledača.", error);
    return new Set();
  }
}

function saveCars(savedCars) {
  try {
    localStorage.setItem("velvet-motors-saved", JSON.stringify([...savedCars]));
  } catch (error) {
    console.warn("Sačuvani automobili nijesu sačuvani u pregledaču.", error);
  }
}

function renderInventory() {
  const carGrid = document.querySelector("#car-grid");
  if (!carGrid) return;

  const search = document.querySelector("#search");
  const bodyStyle = document.querySelector("#body-style");
  const maxPrice = document.querySelector("#max-price");
  const sortOrder = document.querySelector("#sort-order");
  const resultsCount = document.querySelector("#results-count");
  const emptyState = document.querySelector("#empty-state");
  const savedToggle = document.querySelector("#saved-toggle");
  const savedCount = document.querySelector("#saved-count");
  const filters = document.querySelector("#filters");
  const savedCars = loadSavedCars();
  let showingSaved = false;

  function getVisibleCars() {
    const query = search.value.trim().toLowerCase();
    const selectedBody = bodyStyle.value;
    const budget = Number(maxPrice.value);
    const matchingCars = cars.filter((car) => {
      const searchable = `${car.make} ${car.model} ${car.trim} ${car.body}`.toLowerCase();
      return searchable.includes(query)
        && (!selectedBody || car.body === selectedBody)
        && (!budget || (car.price != null && car.price <= budget))
        && (!showingSaved || savedCars.has(car.id));
    });

    if (sortOrder.value === "price-low") matchingCars.sort((a, b) => a.price == null ? (b.price == null ? 0 : 1) : b.price == null ? -1 : a.price - b.price);
    if (sortOrder.value === "price-high") matchingCars.sort((a, b) => a.price == null ? (b.price == null ? 0 : 1) : b.price == null ? -1 : b.price - a.price);
    if (sortOrder.value === "year-new") matchingCars.sort((a, b) => a.year == null ? (b.year == null ? 0 : 1) : b.year == null ? -1 : b.year - a.year);
    return matchingCars;
  }

  function renderCar(car) {
    const image = car.images[0]
      ? `<img src="${car.images[0]}" alt="${car.make} ${car.model}">`
      : carIllustration(car);
    const photoCount = car.images.length > 1 ? `<span class="photo-count">${car.images.length} fotografija</span>` : "";
    const specifications = [
      car.mileage != null ? formatMileage(car.mileage) : "",
      car.fuel,
      car.power
    ].filter(Boolean);
    return `<article class="car-card">
      <a class="car-visual" href="car.html?id=${encodeURIComponent(car.id)}" style="--card-background:linear-gradient(135deg,${car.color},#252620);--car-color:${car.color}" aria-label="Pogledaj detalje: ${car.make} ${car.model}">
        ${image}<span class="car-tag">${car.tag}</span>${photoCount}
      </a>
      <button class="favorite-button${savedCars.has(car.id) ? " is-saved" : ""}" type="button" data-favorite="${car.id}" aria-label="${savedCars.has(car.id) ? "Ukloni" : "Sačuvaj"} ${car.make} ${car.model}" aria-pressed="${savedCars.has(car.id)}">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/></svg>
      </button>
      <div class="car-info">
        <div class="car-meta"><span>${car.year ?? "Godište nije navedeno"} · ${car.body}</span><span>${car.trim || car.tag}</span></div>
        <h2><a href="car.html?id=${encodeURIComponent(car.id)}">${car.make} ${car.model}</a></h2>
        <div class="car-specs">${specifications.length ? specifications.map((specification) => `<span>${specification}</span>`).join("") : "<span>Specifikacije u pripremi</span>"}</div>
        <div class="car-divider"></div>
        <div class="car-bottom"><span class="car-price">${car.price != null ? formatPrice(car.price) : "Cijena na upit"}</span>
          <a class="view-car" href="car.html?id=${encodeURIComponent(car.id)}">Detalji <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </article>`;
  }

  function render() {
    const visibleCars = getVisibleCars();
    carGrid.innerHTML = visibleCars.map(renderCar).join("");
    const vehicleCount = visibleCars.length === 1
      ? "1 automobil"
      : `${new Intl.NumberFormat("sr-Latn-ME").format(visibleCars.length)} automobila`;
    resultsCount.innerHTML = showingSaved
      ? `Sačuvano: <strong>${vehicleCount}</strong>`
      : `U ponudi: <strong>${vehicleCount}</strong>`;
    emptyState.hidden = visibleCars.length !== 0;
    carGrid.hidden = visibleCars.length === 0;
    savedCount.textContent = String(savedCars.size);
    savedToggle.classList.toggle("is-active", showingSaved);
    savedToggle.setAttribute("aria-pressed", String(showingSaved));
  }

  filters.addEventListener("input", render);
  filters.addEventListener("change", render);
  filters.addEventListener("reset", () => {
    showingSaved = false;
    requestAnimationFrame(render);
  });
  sortOrder.addEventListener("change", render);
  document.querySelector("#empty-reset").addEventListener("click", () => filters.reset());
  savedToggle.addEventListener("click", () => {
    showingSaved = !showingSaved;
    render();
  });
  carGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-favorite]");
    if (!button) return;
    const id = button.dataset.favorite;
    if (savedCars.has(id)) savedCars.delete(id);
    else savedCars.add(id);
    saveCars(savedCars);
    render();
  });
  render();
}

function renderListing() {
  const container = document.querySelector("#listing-content");
  if (!container) return;

  const requestedId = new URLSearchParams(window.location.search).get("id");
  const car = cars.find((item) => item.id === requestedId);
  if (!car) {
    document.title = "Automobil nije pronađen — Nova Motors";
    container.innerHTML = `<section class="listing-missing"><h1>Ovaj automobil nije u ponudi</h1><p>Izaberite automobil iz naše ponude.</p><a class="button button-dark" href="inventory.html">Pogledajte ponudu <span aria-hidden="true">↗</span></a></section>`;
    return;
  }

  document.title = `${car.make} ${car.model} — Nova Motors`;
  const specs = [
    ["Godište", car.year != null ? String(car.year) : ""],
    ["Kilometraža", car.mileage != null ? formatMileage(car.mileage) : ""],
    ["Motor", car.engine],
    ["Snaga", car.power],
    ["Gorivo", car.fuel],
    ["Mjenjač", car.gearbox],
    ["Pogon", car.drive],
    ["Paket opreme", car.package],
    ["Karoserija", car.body]
  ].filter(([, value]) => value);
  const descriptionContent = Array.isArray(car.description)
    ? `<ul>${car.description.map((item) => `<li>${item}</li>`).join("")}</ul>`
    : `<p>${car.description}</p>`;
  let selectedPhoto = 0;

  container.innerHTML = `<article class="listing-detail">
    <div class="listing-heading">
      <div><p class="eyebrow eyebrow-dark"><span></span> ${car.tag}</p><h1>${car.make} <em>${car.model}</em></h1></div>
      <p class="listing-price">${car.price != null ? formatPrice(car.price) : "Cijena na upit"}</p>
    </div>
    <section class="detail-gallery" aria-label="Galerija fotografija: ${car.make} ${car.model}">
      <div class="gallery-stage" id="gallery-stage" style="--card-background:linear-gradient(135deg,${car.color},#252620);--car-color:${car.color}"></div>
      <div class="gallery-controls" id="gallery-controls"></div>
    </section>
    <section class="specification-section" aria-labelledby="specifications-title">
      <p class="eyebrow eyebrow-dark"><span></span> Detalji</p>
      <h2 id="specifications-title">Specifikacije</h2>
      <dl class="specification-grid">${specs.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join("")}</dl>
    </section>
    <section class="description-section" aria-labelledby="description-title">
      <p class="eyebrow eyebrow-dark"><span></span> Više o automobilu</p>
      <h2 id="description-title">Opis</h2>
      ${descriptionContent}
    </section>
    <a class="button button-dark listing-enquire" href="contact.html">Kontaktirajte nas za ovaj automobil <span aria-hidden="true">↗</span></a>
  </article>`;

  const stage = document.querySelector("#gallery-stage");
  const controls = document.querySelector("#gallery-controls");
  function renderGallery() {
    if (!car.images.length) {
      stage.innerHTML = `${carIllustration(car)}<p class="gallery-placeholder">Fotografije ovog automobila biće prikazane ovdje.</p>`;
      controls.hidden = true;
      return;
    }

    const imagePath = car.images[selectedPhoto];
    stage.innerHTML = `<img src="${imagePath}" alt="Fotografija ${selectedPhoto + 1} od ${car.images.length}: ${car.make} ${car.model}">`;
    controls.hidden = car.images.length < 2;
    controls.innerHTML = `<button type="button" class="gallery-arrow" data-step="-1" aria-label="Prethodna fotografija" ${selectedPhoto === 0 ? "disabled" : ""}>←</button>
      <div class="gallery-thumbnails">${car.images.map((path, index) => `<button type="button" class="gallery-thumb${index === selectedPhoto ? " is-active" : ""}" data-photo="${index}" aria-label="Prikaži fotografiju ${index + 1}" aria-pressed="${index === selectedPhoto}"><img src="${path}" alt="" loading="lazy"></button>`).join("")}</div>
      <span class="gallery-position">${selectedPhoto + 1} / ${car.images.length}</span>
      <button type="button" class="gallery-arrow" data-step="1" aria-label="Sljedeća fotografija" ${selectedPhoto === car.images.length - 1 ? "disabled" : ""}>→</button>`;
  }

  controls.addEventListener("click", (event) => {
    const thumbnail = event.target.closest("[data-photo]");
    if (thumbnail) selectedPhoto = Number(thumbnail.dataset.photo);
    const arrow = event.target.closest("[data-step]");
    if (arrow) selectedPhoto = Math.max(0, Math.min(car.images.length - 1, selectedPhoto + Number(arrow.dataset.step)));
    renderGallery();
  });
  renderGallery();
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
renderInventory();
renderListing();
