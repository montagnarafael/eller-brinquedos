// ===== PRODUCTS DATA =====
// Para adicionar mais fotos a um produto, adicione mais itens no array "images":
// images: ["./img/foto1.jpg", "./img/foto2.jpg", "./img/foto3.jpg"]
const products = [
  {
    id: 1,
    category: "tobogan",
    name: "Tobogã Premium",
    badge: "Mais Vendido",
    images: [
      "./img/tobogapremium.jpg",
      "./img/tobogapremium2.jpg", 
      
    ],
    desc: "O clássico tobogã inflável para festas e eventos. Alta resistência, diversão garantida para as crianças!",
    color: "#e0f5ff",
    specs: [
      { icon: "👶", label: "Faixa Etária", value: "3 a 12 anos", color: "blue-card" },
      { icon: "📐", label: "Comprimento", value: "5 metros", color: "pink-card" },
      { icon: "📏", label: "Largura", value: "2.80 metros", color: "yellow-card" },
      { icon: "📏", label: "Altura", value: "4.20 metros", color: "yellow-card" },
      { icon: "🧵", label: "Material", value: "Lonas kp1000", color: "green-card" },
      { icon: "⚡", label: "Motor", value: "Incluso", color: "blue-card" },
      { icon: "🏋️", label: "Cap. Peso", value: "até 150 kg", color: "pink-card" },
    ],
    wpp: "Olá! Tenho interesse no Tobogã Premium!. Podem me enviar o preço?"
  },
  {
    id: 2,
    category: "futebol",
    name: "Futebol de Sabão",
    badge: "Novidade",
    images: [
      "./img/futeboldesabao.jpg",
      // "./img/futeboldesabao2.jpg",
    ],
    desc: "Diversão garantida com o Futebol de Sabão! Arena inflável para jogar futebol em superfície escorregadia.",
    color: "#ffe0f0",
    specs: [
      { icon: "👶", label: "Faixa Etária", value: "5 a 14 anos", color: "blue-card" },
      { icon: "📐", label: "Comprimento", value: "8 metros", color: "pink-card" },
      { icon: "📏", label: "Largura", value: "4 metros", color: "yellow-card" },
      { icon: "📏", label: "Altura Parede", value: "70cm", color: "yellow-card" },
      { icon: "🧵", label: "Material", value: "Lona kp1000", color: "green-card" },
      { icon: "👥", label: "Capacidade", value: "10 jogadores", color: "blue-card" },
      { icon: "⚡", label: "Motor", value: "Incluso", color: "pink-card" },
    ],
    wpp: "Olá! Quero saber o preço do Futebol de Sabão!"
  },
  {
    id: 3,
    category: "piscina",
    name: "Piscina de Bolinhas",
    badge: "Infantil",
    images: [
      "./img/piscinadebolinhas.jpg",
      // "./img/piscinadebolinhas2.jpg",
    ],
    desc: "Piscina inflável de bolinhas coloridas, perfeita para os pequenos se divertirem em festas e eventos.",
    color: "#fff9d6",
    specs: [
      { icon: "👶", label: "Faixa Etária", value: "1 a 6 anos", color: "blue-card" },
      { icon: "📐", label: "Comprimento", value: "2.80 metros", color: "pink-card" },
      { icon: "📏", label: "Largura", value: "2.80 metros", color: "yellow-card" },
      { icon: "📏", label: "Altura", value: "2.20 metros", color: "yellow-card" },
      { icon: "🧵", label: "Material", value: "Lonas kp1000", color: "green-card" },
      { icon: "🏋️", label: "Cap. Peso", value: "até 80 kg", color: "pink-card" },
    ],
    wpp: "Olá! Quero um orçamento da Piscina de Bolinhas!"
  },
  {
    id: 5,
    category: "castelo",
    name: "Guerra de Cotonete",
    badge: "Clássico",
    images: [
      "./img/guerradecotonete.jpg",
      // "./img/guerradecotonete2.jpg",
    ],
    desc: "O clássico castelo inflável! Perfeito para festas infantis. Colorido e super divertido para as crianças.",
    color: "#f0e0ff",
    specs: [
      { icon: "👶", label: "Faixa Etária", value: "2 a 10 anos", color: "blue-card" },
      { icon: "📐", label: "Comprimento", value: "4.15 metros", color: "pink-card" },
      { icon: "📏", label: "Largura", value: "4.15 metros", color: "yellow-card" },
      { icon: "🧵", label: "Material", value: "Lona Sansuy BI", color: "green-card" },
      { icon: "⚡", label: "Motor", value: "550 Watts Incluso", color: "blue-card" },
      { icon: "🏋️", label: "Cap. Peso", value: "até 100 kg", color: "pink-card" },
      { icon: "⚡", label: "Vulcanizado", value: "100%", color: "blue-card" },
    ],
    wpp: "Olá! Quero um orçamento do Guerra de Cotonete!"
  },
];

// ===== CAROUSEL STATE =====
const carouselState = {};

function getImages(p) {
  if (p.images && p.images.length > 0) return p.images;
  if (p.image) return [p.image];
  return [];
}

function buildCarousel(p, context) {
  const imgs = getImages(p);
  if (!carouselState[p.id]) carouselState[p.id] = { card: 0, modal: 0 };
  const idx = carouselState[p.id][context];
  const hasMany = imgs.length > 1;

  const dots = hasMany
    ? `<div class="carousel-dots">
        ${imgs.map((_, i) => `<span class="carousel-dot ${i === idx ? 'active' : ''}"
          onclick="event.stopPropagation(); goToSlide(${p.id}, '${context}', ${i})"></span>`).join('')}
       </div>`
    : '';

  const prevBtn = hasMany
    ? `<button class="carousel-btn carousel-prev" onclick="event.stopPropagation(); changeSlide(${p.id}, '${context}', -1)">&#8249;</button>`
    : '';
  const nextBtn = hasMany
    ? `<button class="carousel-btn carousel-next" onclick="event.stopPropagation(); changeSlide(${p.id}, '${context}', 1)">&#8250;</button>`
    : '';

  return `
    <div class="carousel-wrap" id="carousel-${context}-${p.id}">
      <div class="carousel-track" style="transform: translateX(-${idx * 100}%)">
        ${imgs.map(src => `<div class="carousel-slide"><img src="${src}" alt="${p.name}"></div>`).join('')}
      </div>
      ${prevBtn}
      ${nextBtn}
      ${dots}
    </div>
  `;
}

function changeSlide(productId, context, dir) {
  const p = products.find(x => x.id === productId);
  if (!p) return;
  const imgs = getImages(p);
  if (!carouselState[productId]) carouselState[productId] = { card: 0, modal: 0 };
  carouselState[productId][context] = (carouselState[productId][context] + dir + imgs.length) % imgs.length;
  updateCarousel(productId, context);
}

function goToSlide(productId, context, idx) {
  if (!carouselState[productId]) carouselState[productId] = { card: 0, modal: 0 };
  carouselState[productId][context] = idx;
  updateCarousel(productId, context);
}

function updateCarousel(productId, context) {
  const p = products.find(x => x.id === productId);
  if (!p) return;
  const idx = carouselState[productId][context];
  const wrap = document.getElementById(`carousel-${context}-${productId}`);
  if (!wrap) return;

  const track = wrap.querySelector('.carousel-track');
  if (track) track.style.transform = `translateX(-${idx * 100}%)`;

  wrap.querySelectorAll('.carousel-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === idx);
  });
}

// ===== BUILD CATALOG =====
const grid = document.getElementById('catalogGrid');

function buildCatalog(filter = 'all') {
  grid.innerHTML = '';
  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card fade-up visible';
    card.onclick = () => openModal(p.id);
    card.innerHTML = `
      <span class="product-card-badge">${p.badge}</span>
      <div class="product-img-wrap">
        ${buildCarousel(p, 'card')}
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-specs">
          ${p.specs.slice(0,3).map(s => `
            <div class="spec-item">
              <div class="spec-icon ${s.color.replace('-card','')}">${s.icon}</div>
              <span><strong>${s.label}:</strong> ${s.value}</span>
            </div>
          `).join('')}
        </div>
        <a class="btn-wpp-card"
           href="https://wa.me/5547991671813?text=${encodeURIComponent(p.wpp)}"
           target="_blank"
           onclick="event.stopPropagation()">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Chamar no WhatsApp
        </a>
      </div>
    `;
    grid.appendChild(card);
  });

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="no-products">Nenhum produto encontrado nesta categoria.</div>';
  }
}

buildCatalog();

// ===== CATEGORY FILTERS =====
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    buildCatalog(btn.dataset.category);
  });
});

// ===== MODAL =====
function openModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  if (!carouselState[p.id]) carouselState[p.id] = { card: 0, modal: 0 };
  carouselState[p.id].modal = 0;

  const modalImg = document.getElementById('modalImg');
  modalImg.style.background = p.color;
  modalImg.innerHTML = buildCarousel(p, 'modal');

  document.getElementById('modalBadge').textContent = p.badge;
  document.getElementById('modalTitle').textContent = p.name;
  document.getElementById('modalDesc').textContent = p.desc;

  const specsHtml = p.specs.map(s => `
    <div class="modal-spec-card ${s.color}">
      <span class="spec-ico">${s.icon}</span>
      <span class="spec-label">${s.label}</span>
      <span class="spec-value">${s.value}</span>
    </div>
  `).join('');
  document.getElementById('modalSpecs').innerHTML = specsHtml;

  document.getElementById('modalWppBtn').href = `https://wa.me/5547991671813?text=${encodeURIComponent(p.wpp)}`;

  document.getElementById('productModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('productModal').classList.remove('active');
  document.body.style.overflow = '';
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('productModal')) closeModal();
}

// Privacy modal
function openPrivacy() {
  document.getElementById('privacyModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePrivacy() {
  document.getElementById('privacyModal').classList.remove('active');
  document.body.style.overflow = '';
}

function closePrivacyOutside(e) {
  if (e.target === document.getElementById('privacyModal')) closePrivacy();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closePrivacy(); }
});

// ===== MOBILE MENU =====
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
