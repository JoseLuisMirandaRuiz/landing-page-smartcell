/**
 * ==============================================================================
 * SMARTCELL COMMERCE PLATFORM - JAVASCRIPT PRINCIPAL (VANILLA JS)
 * Funcionalidades interactivas:
 * 1. Menú Móvil Hamburguesa (Open / Close / Focus Trap)
 * 2. Sticky Navbar & Scroll Spy (Active Links)
 * 3. Contadores Numéricos Animados con IntersectionObserver (Métricas Clave)
 * 4. Switcher Interactivo de Mockup Hero (Tienda vs Backoffice ERP)
 * 5. Simulador Interactivo de Catálogo de Celulares con Filtros y Búsqueda
 * 6. Simulador de Precios y Toggle Facturación Mensual / Anual (-20% Off)
 * 7. Modales Interactivos (Ficha Técnica IMEI y Acceso a Demo)
 * 8. Formulario de Captura / Demo con Notificaciones Toast
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initStickyNavbar();
  initScrollSpy();
  initMetricCounters();
  initHeroMockupTabs();
  initCatalogSimulator();
  initPricingToggle();
  initLeadFormAndToast();
  initModals();
});

/* ==============================================================================
 * 1. NAVEGACIÓN MÓVIL (MENÚ HAMBURGUESA)
 * ============================================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !mobileMenu) return;

  function toggleMenu(isOpen) {
    const active = isOpen !== undefined ? isOpen : mobileMenu.classList.contains('hidden');
    if (active) {
      mobileMenu.classList.remove('hidden');
      menuBtn.setAttribute('aria-expanded', 'true');
      if (menuIcon) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
      }
    } else {
      mobileMenu.classList.add('hidden');
      menuBtn.setAttribute('aria-expanded', 'false');
      if (menuIcon) {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
      }
    }
  }

  menuBtn.addEventListener('click', () => {
    const isCurrentlyHidden = mobileMenu.classList.contains('hidden');
    toggleMenu(isCurrentlyHidden);
  });

  // Cerrar al hacer clic en cualquier enlace del menú móvil
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });

  // Cerrar con la tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
      toggleMenu(false);
    }
  });
}

/* ==============================================================================
 * 2. STICKY NAVBAR CON EFECTO DE SCROLL
 * ============================================================================== */
function initStickyNavbar() {
  const navbar = document.getElementById('mainNavbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
      navbar.classList.remove('py-4');
      navbar.classList.add('py-2.5');
    } else {
      navbar.classList.remove('scrolled');
      navbar.classList.remove('py-2.5');
      navbar.classList.add('py-4');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Verificación inicial al cargar
}

/* ==============================================================================
 * 3. SCROLL SPY (RESALTADO DEL ENLACE ACTIVO EN EL MENÚ)
 * ============================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.desktop-nav-link');

  if (!sections.length || !desktopLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        desktopLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('text-blue-600', 'font-bold');
            link.classList.remove('text-slate-600');
          } else {
            link.classList.remove('text-blue-600', 'font-bold');
            link.classList.add('text-slate-600');
          }
        });
      }
    });
  }, {
    rootMargin: '-25% 0px -65% 0px',
    threshold: 0
  });

  sections.forEach(section => observer.observe(section));
}

/* ==============================================================================
 * 4. CONTADORES NUMÉRICOS ANIMADOS (MÉTRICAS CLAVE EN VISIÓN)
 * ============================================================================== */
function initMetricCounters() {
  const metricSection = document.getElementById('vision');
  if (!metricSection) return;

  const counters = document.querySelectorAll('.metric-counter');
  let hasAnimated = false;

  const animateCount = (el) => {
    const target = parseFloat(el.getAttribute('data-target'));
    const isDecimal = el.getAttribute('data-decimal') === 'true';
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 2000;
    const startTime = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing cúbico para desaceleración suave
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = progress === 1 ? target : (target * easeOut);

      el.textContent = `${prefix}${isDecimal ? currentVal.toFixed(1) : Math.floor(currentVal)}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counters.forEach(counter => animateCount(counter));
      }
    });
  }, { threshold: 0.35 });

  observer.observe(metricSection);
}

/* ==============================================================================
 * 5. HERO MOCKUP TABS (INTERACTIVIDAD TIENDA VS BACKOFFICE ERP)
 * ============================================================================== */
function initHeroMockupTabs() {
  const tabStore = document.getElementById('tabStoreBtn');
  const tabAdmin = document.getElementById('tabAdminBtn');
  const viewStore = document.getElementById('heroStoreView');
  const viewAdmin = document.getElementById('heroAdminView');

  if (!tabStore || !tabAdmin || !viewStore || !viewAdmin) return;

  tabStore.addEventListener('click', () => {
    tabStore.classList.add('active');
    tabAdmin.classList.remove('active');
    viewStore.classList.remove('hidden');
    viewAdmin.classList.add('hidden');
  });

  tabAdmin.addEventListener('click', () => {
    tabAdmin.classList.add('active');
    tabStore.classList.remove('active');
    viewAdmin.classList.remove('hidden');
    viewStore.classList.add('hidden');
  });
}

/* ==============================================================================
 * 6. SIMULADOR DE CATÁLOGO INTERACTIVO CON FILTRADO POR MARCA & BÚSQUEDA
 * ============================================================================== */
const SMARTPHONES_DATA = [
  {
    id: 1,
    name: 'Samsung Galaxy S24 Ultra',
    brand: 'samsung',
    price: 1299,
    ram: '12 GB',
    storage: '512 GB',
    stock: 14,
    imeiSample: '358249110294812',
    color: 'Titanium Gray',
    status: 'En Bodega Central',
    badge: 'Nuevo Flagship',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    name: 'iPhone 15 Pro Max',
    brand: 'apple',
    price: 1399,
    ram: '8 GB',
    storage: '256 GB',
    stock: 9,
    imeiSample: '864209054719302',
    color: 'Titanio Azul',
    status: 'Disponible para Despacho',
    badge: 'Alta Demanda',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    name: 'Xiaomi 14 Ultra 5G',
    brand: 'xiaomi',
    price: 999,
    ram: '16 GB',
    storage: '512 GB',
    stock: 22,
    imeiSample: '861928049182304',
    color: 'Black Ceramic',
    status: 'En Bodega Central',
    badge: 'Cámara Leica',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    name: 'Google Pixel 8 Pro',
    brand: 'google',
    price: 899,
    ram: '12 GB',
    storage: '128 GB',
    stock: 6,
    imeiSample: '352819058194012',
    color: 'Bay Blue',
    status: 'Stock Bajo',
    badge: 'Google AI',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    name: 'Motorola Edge 50 Ultra',
    brand: 'motorola',
    price: 799,
    ram: '12 GB',
    storage: '512 GB',
    stock: 18,
    imeiSample: '357193048192049',
    color: 'Peach Fuzz',
    status: 'En Bodega Central',
    badge: 'Edición Pantone',
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 6,
    name: 'Samsung Galaxy Z Fold 5',
    brand: 'samsung',
    price: 1599,
    ram: '12 GB',
    storage: '512 GB',
    stock: 5,
    imeiSample: '359102948192041',
    color: 'Phantom Black',
    status: 'Disponible para Despacho',
    badge: 'Plegable Premium',
    image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=600&q=80'
  }
];

function initCatalogSimulator() {
  const gridContainer = document.getElementById('catalogProductsGrid');
  const searchInput = document.getElementById('catalogSearchInput');
  const brandPills = document.querySelectorAll('.filter-pill');
  const resultsCounter = document.getElementById('catalogResultsCount');

  if (!gridContainer) return;

  let currentBrand = 'all';
  let searchTerm = '';

  const renderProducts = () => {
    const filtered = SMARTPHONES_DATA.filter(item => {
      const matchBrand = (currentBrand === 'all') || (item.brand === currentBrand);
      const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.storage.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.imeiSample.includes(searchTerm);
      return matchBrand && matchSearch;
    });

    if (resultsCounter) {
      resultsCounter.textContent = `${filtered.length} equipos encontrados`;
    }

    if (filtered.length === 0) {
      gridContainer.innerHTML = `
        <div class="col-span-full py-16 text-center">
          <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 text-2xl">
            <i class="fa-solid fa-mobile-screen"></i>
          </div>
          <h4 class="text-lg font-bold text-slate-800">No se encontraron celulares</h4>
          <p class="text-sm text-slate-500 mt-1">Intenta con otra marca o término de búsqueda.</p>
        </div>
      `;
      return;
    }

    gridContainer.innerHTML = filtered.map(item => `
      <div class="product-item bg-white rounded-2xl border border-slate-200 p-5 flex flex-col justify-between hover:border-blue-500 hover:shadow-xl transition-all">
        <div>
          <!-- Badge superior -->
          <div class="flex items-center justify-between mb-3">
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
              item.stock < 10 ? 'bg-amber-100 text-amber-800' : 'bg-blue-50 text-blue-700'
            }">
              <span class="w-1.5 h-1.5 rounded-full mr-1.5 ${item.stock < 10 ? 'bg-amber-500' : 'bg-blue-600'}"></span>
              ${item.badge}
            </span>
            <span class="text-xs font-medium text-slate-500">Stock: <strong class="text-slate-800">${item.stock} un.</strong></span>
          </div>

          <!-- Imagen con aspecto cuidado -->
          <div class="relative w-full h-44 rounded-xl overflow-hidden bg-slate-100 mb-4 group">
            <img 
              src="${item.image}" 
              alt="${item.name}" 
              loading="lazy"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
              <span class="text-white text-xs font-medium">${item.color}</span>
            </div>
          </div>

          <!-- Información del Equipo -->
          <h4 class="font-bold text-slate-900 text-base leading-snug line-clamp-1 mb-1">${item.name}</h4>
          
          <div class="flex items-center gap-2 mb-3">
            <span class="inline-block bg-slate-100 text-slate-700 text-xs px-2 py-0.5 rounded font-medium">RAM: ${item.ram}</span>
            <span class="inline-block bg-slate-100 text-slate-700 text-xs px-2 py-0.5 rounded font-medium">ROM: ${item.storage}</span>
          </div>

          <!-- Código IMEI Único Registrado -->
          <div class="bg-slate-50 border border-slate-200/80 rounded-lg p-2.5 mb-4">
            <div class="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span class="flex items-center gap-1 font-semibold text-slate-600">
                <i class="fa-solid fa-barcode text-blue-600"></i> IMEI Asignado:
              </span>
              <span class="text-emerald-700 font-semibold text-[11px] bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                Verificado
              </span>
            </div>
            <code class="imei-badge text-blue-700 font-mono font-bold block text-xs tracking-wider">${item.imeiSample}</code>
          </div>
        </div>

        <div>
          <!-- Precio y Botones de Acción -->
          <div class="flex items-center justify-between pt-3 border-t border-slate-100">
            <div>
              <span class="text-xs text-slate-400 block font-medium">Precio Tienda</span>
              <span class="text-xl font-extrabold text-slate-900">$${item.price.toLocaleString()} <span class="text-xs font-normal text-slate-500">USD</span></span>
            </div>
            <button 
              onclick="openImeiModal(${item.id})"
              class="px-3.5 py-2 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white rounded-lg text-xs font-bold transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              title="Auditar trazabilidad de este IMEI"
            >
              <i class="fa-solid fa-fingerprint"></i> Ficha IMEI
            </button>
          </div>
        </div>
      </div>
    `).join('');
  };

  // Event Listeners de Filtros
  brandPills.forEach(pill => {
    pill.addEventListener('click', () => {
      brandPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentBrand = pill.getAttribute('data-brand') || 'all';
      renderProducts();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.trim();
      renderProducts();
    });
  }

  // Render inicial
  renderProducts();
}

/* ==============================================================================
 * 7. SIMULADOR DE PRECIOS & FACTURACIÓN MENSUAL / ANUAL (-20%)
 * ============================================================================== */
function initPricingToggle() {
  const toggleBtn = document.getElementById('billingToggleBtn');
  const priceValues = document.querySelectorAll('.price-val');
  const billingPeriodLabels = document.querySelectorAll('.billing-period-label');

  if (!toggleBtn || !priceValues.length) return;

  let isYearly = false;

  toggleBtn.addEventListener('click', () => {
    isYearly = !isYearly;

    if (isYearly) {
      toggleBtn.classList.add('toggle-active');
    } else {
      toggleBtn.classList.remove('toggle-active');
    }

    priceValues.forEach(el => {
      const monthly = parseFloat(el.getAttribute('data-monthly'));
      const yearly = parseFloat(el.getAttribute('data-yearly'));
      const targetVal = isYearly ? yearly : monthly;

      // Animación rápida de cambio de número
      el.style.opacity = '0';
      setTimeout(() => {
        el.textContent = `$${targetVal}`;
        el.style.opacity = '1';
      }, 150);
    });

    billingPeriodLabels.forEach(label => {
      label.textContent = isYearly ? '/mes (facturado anualmente)' : '/mes';
    });
  });
}

/* ==============================================================================
 * 8. FORMULARIO DE CAPTURA & NOTIFICACIÓN TOAST
 * ============================================================================== */
function initLeadFormAndToast() {
  const form = document.getElementById('demoLeadForm');
  const toast = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('leadName');
    const emailInput = document.getElementById('leadEmail');
    const phonesInput = document.getElementById('leadVolume');

    if (!emailInput || !emailInput.value.includes('@')) {
      showToast('Por favor introduce un correo electrónico válido.', 'error');
      return;
    }

    const userName = nameInput && nameInput.value.trim() ? nameInput.value.trim() : 'Colega';

    // Simulación de envío exitoso
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Generando acceso...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      form.reset();
      showToast(`¡Excelente, ${userName}! Te enviamos las credenciales de demo a tu correo.`, 'success');
    }, 900);
  });
}

function showToast(message, type = 'info') {
  const toast = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');
  const toastIcon = document.getElementById('toastIcon');

  if (!toast || !toastMessage) return;

  toastMessage.textContent = message;

  if (toastIcon) {
    if (type === 'error') {
      toastIcon.className = 'fa-solid fa-circle-exclamation text-red-400 text-lg';
    } else {
      toastIcon.className = 'fa-solid fa-circle-check text-emerald-400 text-lg';
    }
  }

  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}

/* ==============================================================================
 * 9. MODALES INTERACTIVOS (FICHA TÉCNICA IMEI & DEMO BACKOFFICE)
 * ============================================================================== */
function initModals() {
  const modalImei = document.getElementById('imeiModal');
  const modalDemo = document.getElementById('demoModal');
  const closeBtns = document.querySelectorAll('.close-modal-btn');

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (modalImei) modalImei.classList.remove('active');
      if (modalDemo) modalDemo.classList.remove('active');
    });
  });

  // Cerrar al hacer clic en el backdrop
  [modalImei, modalDemo].forEach(modal => {
    if (!modal) return;
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });

  // Enlace para abrir modal de demo
  const openDemoBtns = document.querySelectorAll('.open-demo-modal');
  openDemoBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (modalDemo) modalDemo.classList.add('active');
    });
  });
}

// Función global para abrir la Ficha de Auditoría de IMEI
window.openImeiModal = function(productId) {
  const item = SMARTPHONES_DATA.find(p => p.id === productId);
  if (!item) return;

  const modal = document.getElementById('imeiModal');
  const title = document.getElementById('modalImeiTitle');
  const imeiCode = document.getElementById('modalImeiCode');
  const details = document.getElementById('modalImeiDetails');

  if (!modal || !title || !imeiCode || !details) return;

  title.textContent = `${item.name} (${item.storage})`;
  imeiCode.textContent = item.imeiSample;

  details.innerHTML = `
    <div class="grid grid-cols-2 gap-4 text-xs mb-6">
      <div class="bg-slate-50 p-3 rounded-lg border border-slate-200">
        <span class="text-slate-400 block font-medium">Ubicación Actual</span>
        <strong class="text-slate-800 text-sm">${item.status}</strong>
      </div>
      <div class="bg-slate-50 p-3 rounded-lg border border-slate-200">
        <span class="text-slate-400 block font-medium">Color Registrado</span>
        <strong class="text-slate-800 text-sm">${item.color}</strong>
      </div>
      <div class="bg-slate-50 p-3 rounded-lg border border-slate-200">
        <span class="text-slate-400 block font-medium">Garantía SmartCell</span>
        <strong class="text-emerald-700 text-sm">12 Meses Oficial</strong>
      </div>
      <div class="bg-slate-50 p-3 rounded-lg border border-slate-200">
        <span class="text-slate-400 block font-medium">Estado Fiscal</span>
        <strong class="text-blue-700 text-sm">Facturación Lista</strong>
      </div>
    </div>

    <h5 class="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">Historial de Trazabilidad Unitaria (Blockchain / Logs)</h5>
    <div class="space-y-3 text-xs border-l-2 border-blue-500 pl-4 py-1">
      <div class="relative">
        <div class="w-2.5 h-2.5 bg-blue-600 rounded-full absolute -left-[21px] top-1"></div>
        <p class="font-bold text-slate-800">Recepción en Bodega Central (Lote #SC-2026-9)</p>
        <p class="text-slate-500">Escaneado por Operador: Bodega_User_04 • 11/10/2026 09:42 AM</p>
      </div>
      <div class="relative">
        <div class="w-2.5 h-2.5 bg-emerald-500 rounded-full absolute -left-[21px] top-1"></div>
        <p class="font-bold text-slate-800">Control de Calidad y Registro IMEI Aprobado</p>
        <p class="text-slate-500">IMEI verificado contra listas GSMA internacionales (Sin bloqueos)</p>
      </div>
      <div class="relative">
        <div class="w-2.5 h-2.5 bg-slate-300 rounded-full absolute -left-[21px] top-1"></div>
        <p class="font-bold text-slate-800">Publicado en Catálogo Online para Compra</p>
        <p class="text-slate-500">Sincronizado con pasarelas de pago y despacho exprés</p>
      </div>
    </div>
  `;

  modal.classList.add('active');
};
