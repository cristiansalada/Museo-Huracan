/**
 * Museo Quemero - Club Atlético Huracán
 * Lógica de Aplicación, Navegación, Modales, Renderizado y Trivia
 */

// Generador vectorial de camisetas históricas
function getJerseySvg(camId) {
  const balloon = `
    <g transform="translate(100, 75) scale(0.35)">
      <ellipse cx="0" cy="-10" rx="24" ry="28" fill="#E01E2B" />
      <path d="M-8 15 L8 15 L5 25 L-5 25 Z" fill="#B91420" />
      <rect x="-4" y="24" width="8" height="3" fill="#FFFFFF" />
      <path d="M0 -34 C-8 -20 -8 0 0 12 C8 0 8 -20 0 -34 Z" fill="#FFFFFF" />
    </g>
  `;

  const baseShirt = `
    <path d="M60 30 L30 65 L48 80 L65 58 L65 175 L135 175 L135 58 L152 80 L170 65 L140 30 Z" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2" />
  `;

  if (camId === 'cam-1908') {
    return `
      <svg viewBox="0 0 200 200" class="w-full h-44 drop-shadow-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        <path d="M60 30 L30 65 L48 80 L65 58 L65 175 L135 175 L135 58 L152 80 L170 65 L140 30 Z" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="2" />
        <path d="M85 30 L100 55 L115 30 Z" fill="#E2E8F0" />
        <line x1="93" y1="36" x2="107" y2="48" stroke="#64748B" stroke-width="2"/>
        <line x1="107" y1="36" x2="93" y2="48" stroke="#64748B" stroke-width="2"/>
        <g transform="translate(80, 68) scale(0.25)">
          <ellipse cx="0" cy="-10" rx="24" ry="28" fill="#E01E2B" />
          <path d="M-8 15 L8 15 L5 25 L-5 25 Z" fill="#B91420" />
        </g>
      </svg>
    `;
  } else if (camId === 'cam-1921') {
    return `
      <svg viewBox="0 0 200 200" class="w-full h-44 drop-shadow-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        ${baseShirt}
        <path d="M85 30 L100 52 L115 30 Z" fill="#F1F5F9" stroke="#CBD5E1"/>
        <rect x="75" y="70" width="16" height="20" rx="2" fill="none" stroke="#E2E8F0" stroke-width="1.5"/>
        <g transform="translate(83, 80) scale(0.18)">
          <ellipse cx="0" cy="-10" rx="24" ry="28" fill="#E01E2B" />
        </g>
        <text x="100" y="145" font-size="16" font-weight="bold" text-anchor="middle" fill="#E01E2B" font-family="sans-serif">1921</text>
      </svg>
    `;
  } else if (camId === 'cam-1922') {
    return `
      <svg viewBox="0 0 200 200" class="w-full h-44 drop-shadow-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        ${baseShirt}
        <path d="M82 30 L100 48 L118 30 Z" fill="#FFFFFF" stroke="#E01E2B" stroke-width="1.5"/>
        <g transform="translate(82, 70) scale(0.24)">
          <ellipse cx="0" cy="-10" rx="24" ry="28" fill="#E01E2B" />
          <path d="M-8 15 L8 15 L5 25 L-5 25 Z" fill="#B91420" />
        </g>
        <text x="100" y="145" font-size="14" font-weight="900" text-anchor="middle" fill="#E01E2B" font-family="sans-serif">BICAMPEÓN</text>
      </svg>
    `;
  } else if (camId === 'cam-1925') {
    return `
      <svg viewBox="0 0 200 200" class="w-full h-44 drop-shadow-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        ${baseShirt}
        <path d="M30 65 L48 80 L43 85 L25 70 Z" fill="#E01E2B" />
        <path d="M170 65 L152 80 L157 85 L175 70 Z" fill="#E01E2B" />
        <path d="M82 30 L100 45 L118 30 L100 36 Z" fill="#E01E2B" />
        <g transform="translate(82, 70) scale(0.28)">
          <ellipse cx="0" cy="-10" rx="24" ry="28" fill="#E01E2B" />
          <path d="M-8 15 L8 15 L5 25 L-5 25 Z" fill="#B91420" />
        </g>
      </svg>
    `;
  } else if (camId === 'cam-1928') {
    return `
      <svg viewBox="0 0 200 200" class="w-full h-44 drop-shadow-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        ${baseShirt}
        <path d="M85 30 L100 50 L115 30 Z" fill="#E01E2B" />
        ${balloon}
        <text x="100" y="145" font-size="15" font-weight="900" text-anchor="middle" fill="#E01E2B" font-family="sans-serif">1928</text>
      </svg>
    `;
  } else if (camId === 'cam-1942') {
    return `
      <svg viewBox="0 0 200 200" class="w-full h-44 drop-shadow-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        ${baseShirt}
        <path d="M85 30 L100 48 L115 30 Z" fill="#E01E2B" />
        <g transform="translate(80, 68) scale(0.26)">
          <ellipse cx="0" cy="-10" rx="24" ry="28" fill="#E01E2B" />
          <path d="M-8 15 L8 15 L5 25 L-5 25 Z" fill="#B91420" />
        </g>
        <text x="100" y="145" font-size="12" font-weight="bold" text-anchor="middle" fill="#64748B" font-family="sans-serif">COPA ESCOBAR</text>
      </svg>
    `;
  } else if (camId === 'cam-1944') {
    return `
      <svg viewBox="0 0 200 200" class="w-full h-44 drop-shadow-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        ${baseShirt}
        <path d="M85 30 L100 54 L115 30 L100 40 Z" fill="#E01E2B" />
        <path d="M30 65 L48 80 L42 84 L26 71 Z" fill="#E01E2B" />
        <path d="M170 65 L152 80 L158 84 L174 71 Z" fill="#E01E2B" />
        <g transform="translate(80, 70) scale(0.28)">
          <ellipse cx="0" cy="-10" rx="24" ry="28" fill="#E01E2B" />
          <path d="M-8 15 L8 15 L5 25 L-5 25 Z" fill="#B91420" />
        </g>
        <text x="100" y="145" font-size="13" font-weight="900" text-anchor="middle" fill="#E01E2B" font-family="sans-serif">BRITÁNICA '44</text>
      </svg>
    `;
  } else if (camId === 'cam-1973') {
    return `
      <svg viewBox="0 0 200 200" class="w-full h-44 drop-shadow-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        ${baseShirt}
        <path d="M85 30 L100 58 L115 30 L100 42 Z" fill="#E01E2B" />
        <path d="M30 65 L48 80 L42 84 L26 71 Z" fill="#E01E2B" />
        <path d="M170 65 L152 80 L158 84 L174 71 Z" fill="#E01E2B" />
        ${balloon}
        <text x="100" y="145" font-size="28" font-weight="900" text-anchor="middle" fill="#E01E2B" font-family="sans-serif">73</text>
      </svg>
    `;
  } else if (camId === 'cam-1980') {
    return `
      <svg viewBox="0 0 200 200" class="w-full h-44 drop-shadow-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        ${baseShirt}
        <line x1="56" y1="36" x2="33" y2="67" stroke="#E01E2B" stroke-width="2.5"/>
        <line x1="51" y1="39" x2="37" y2="71" stroke="#E01E2B" stroke-width="2.5"/>
        <line x1="46" y1="42" x2="42" y2="76" stroke="#E01E2B" stroke-width="2.5"/>
        <line x1="144" y1="36" x2="167" y2="67" stroke="#E01E2B" stroke-width="2.5"/>
        <line x1="149" y1="39" x2="163" y2="71" stroke="#E01E2B" stroke-width="2.5"/>
        <line x1="154" y1="42" x2="158" y2="76" stroke="#E01E2B" stroke-width="2.5"/>
        <path d="M85 30 L100 48 L115 30 Z" fill="#E01E2B" />
        <g transform="translate(80, 70) scale(0.25)">
          <ellipse cx="0" cy="-10" rx="24" ry="28" fill="#E01E2B" />
          <path d="M-8 15 L8 15 L5 25 L-5 25 Z" fill="#B91420" />
        </g>
      </svg>
    `;
  } else if (camId === 'cam-1990') {
    return `
      <svg viewBox="0 0 200 200" class="w-full h-44 drop-shadow-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        ${baseShirt}
        <polygon points="60,30 85,30 65,58" fill="#E01E2B"/>
        <polygon points="140,30 115,30 135,58" fill="#E01E2B"/>
        <path d="M85 30 L100 52 L115 30 Z" fill="#E01E2B" />
        <g transform="translate(80, 68) scale(0.24)">
          <ellipse cx="0" cy="-10" rx="24" ry="28" fill="#E01E2B" />
          <path d="M-8 15 L8 15 L5 25 L-5 25 Z" fill="#B91420" />
        </g>
        <rect x="75" y="105" width="50" height="15" rx="3" fill="#0A1931"/>
        <text x="100" y="116" font-size="8" font-weight="900" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" letter-spacing="1">MEDICUS</text>
      </svg>
    `;
  } else if (camId === 'cam-1996') {
    return `
      <svg viewBox="0 0 200 200" class="w-full h-44 drop-shadow-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        ${baseShirt}
        <path d="M85 30 L100 52 L115 30 Z" fill="#1E293B"/>
        <path d="M30 65 L48 80 L44 84 L26 71 Z" fill="#E01E2B"/>
        <path d="M170 65 L152 80 L156 84 L174 71 Z" fill="#E01E2B"/>
        <g transform="translate(80, 68) scale(0.25)">
          <ellipse cx="0" cy="-10" rx="24" ry="28" fill="#E01E2B" />
        </g>
        <rect x="72" y="105" width="56" height="14" rx="2" fill="#E01E2B"/>
        <text x="100" y="115" font-size="6.5" font-weight="bold" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif">BCO. PATRICIOS</text>
      </svg>
    `;
  } else if (camId === 'cam-1998') {
    return `
      <svg viewBox="0 0 200 200" class="w-full h-44 drop-shadow-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        ${baseShirt}
        <rect x="65" y="90" width="70" height="6" fill="#E01E2B"/>
        <rect x="65" y="100" width="70" height="6" fill="#E01E2B"/>
        <g transform="translate(80, 66) scale(0.24)">
          <ellipse cx="0" cy="-10" rx="24" ry="28" fill="#E01E2B" />
        </g>
        <rect x="80" y="115" width="40" height="12" rx="2" fill="#475569"/>
        <text x="100" y="124" font-size="8" font-weight="900" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif">OCA</text>
      </svg>
    `;
  } else if (camId === 'cam-2000') {
    return `
      <svg viewBox="0 0 200 200" class="w-full h-44 drop-shadow-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        ${baseShirt}
        <path d="M85 30 L100 52 L115 30 Z" fill="#E01E2B"/>
        <line x1="66" y1="60" x2="66" y2="175" stroke="#E01E2B" stroke-width="4"/>
        <line x1="134" y1="60" x2="134" y2="175" stroke="#E01E2B" stroke-width="4"/>
        <g transform="translate(80, 68) scale(0.24)">
          <ellipse cx="0" cy="-10" rx="24" ry="28" fill="#E01E2B" />
        </g>
        <rect x="74" y="105" width="52" height="14" rx="3" fill="#E01E2B"/>
        <text x="100" y="115" font-size="7" font-weight="900" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif">LIDERAR</text>
      </svg>
    `;
  } else if (camId === 'cam-2007') {
    return `
      <svg viewBox="0 0 200 200" class="w-full h-44 drop-shadow-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        ${baseShirt}
        <path d="M88 30 L100 46 L112 30 Z" fill="#E01E2B"/>
        <g transform="translate(80, 66) scale(0.24)">
          <ellipse cx="0" cy="-10" rx="24" ry="28" fill="#E01E2B" />
        </g>
        <!-- Sponsor La Nueva Seguros triángulo -->
        <polygon points="100,98 80,126 120,126" fill="#FACC15" stroke="#CA8A04" stroke-width="1"/>
        <text x="100" y="120" font-size="7" font-weight="900" text-anchor="middle" fill="#000000" font-family="sans-serif">LA NUEVA</text>
      </svg>
    `;
  } else if (camId === 'cam-2009') {
    return `
      <svg viewBox="0 0 200 200" class="w-full h-44 drop-shadow-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        ${baseShirt}
        <path d="M85 30 L100 48 L115 30 Z" fill="#E01E2B" />
        <g transform="translate(80, 68) scale(0.26)">
          <ellipse cx="0" cy="-10" rx="24" ry="28" fill="#E01E2B" />
          <path d="M-8 15 L8 15 L5 25 L-5 25 Z" fill="#B91420" />
        </g>
        <rect x="74" y="105" width="52" height="15" rx="3" fill="#E01E2B"/>
        <text x="100" y="116" font-size="7" font-weight="900" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif">BANCO CIUDAD</text>
      </svg>
    `;
  } else if (camId === 'cam-2014') {
    return `
      <svg viewBox="0 0 200 200" class="w-full h-44 drop-shadow-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        ${baseShirt}
        <path d="M85 30 L100 46 L115 30 Z" fill="#E01E2B"/>
        <path d="M60 30 L65 58 L75 58 L70 30 Z" fill="#E01E2B"/>
        <path d="M140 30 L135 58 L125 58 L130 30 Z" fill="#E01E2B"/>
        <g transform="translate(80, 68) scale(0.25)">
          <ellipse cx="0" cy="-10" rx="24" ry="28" fill="#E01E2B" />
          <path d="M-8 15 L8 15 L5 25 L-5 25 Z" fill="#B91420" />
        </g>
        <rect x="72" y="105" width="56" height="15" rx="3" fill="#0284C7"/>
        <text x="100" y="116" font-size="7" font-weight="900" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif">BANCO CIUDAD</text>
      </svg>
    `;
  } else if (camId === 'cam-2015') {
    return `
      <svg viewBox="0 0 200 200" class="w-full h-44 drop-shadow-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        ${baseShirt}
        <path d="M86 30 L100 44 L114 30 Z" fill="#E01E2B"/>
        <path d="M30 65 L48 80 L44 84 L26 71 Z" fill="#E01E2B"/>
        <path d="M170 65 L152 80 L156 84 L174 71 Z" fill="#E01E2B"/>
        <g transform="translate(80, 68) scale(0.25)">
          <ellipse cx="0" cy="-10" rx="24" ry="28" fill="#E01E2B" />
        </g>
        <rect x="72" y="105" width="56" height="15" rx="3" fill="#0284C7"/>
        <text x="100" y="116" font-size="7" font-weight="900" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif">BANCO CIUDAD</text>
      </svg>
    `;
  } else {
    // cam-2024 contemporánea
    return `
      <svg viewBox="0 0 200 200" class="w-full h-44 drop-shadow-md mx-auto" xmlns="http://www.w3.org/2000/svg">
        ${baseShirt}
        <path d="M86 30 L100 46 L114 30 Z" fill="#E01E2B"/>
        <path d="M60 30 L65 45 L70 30 Z" fill="#E01E2B"/>
        <path d="M140 30 L135 45 L130 30 Z" fill="#E01E2B"/>
        <g transform="translate(80, 68) scale(0.26)">
          <ellipse cx="0" cy="-10" rx="24" ry="28" fill="#E01E2B" />
          <path d="M-8 15 L8 15 L5 25 L-5 25 Z" fill="#B91420" />
        </g>
        <rect x="75" y="105" width="50" height="15" rx="4" fill="#E01E2B"/>
        <text x="100" y="116" font-size="8" font-weight="900" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" letter-spacing="1">DECUR</text>
      </svg>
    `;
  }
}

// Plantilla de tarjeta de jugador universal con foto y fallback
function getPlayerCardHtml(jug, badgeText = "") {
  const fotoUrl = jug.foto || 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Emblema_oficial_del_Club_Atl%C3%A9tico_Hurac%C3%A1n.svg/500px-Emblema_oficial_del_Club_Atl%C3%A9tico_Hurac%C3%A1n.svg.png';
  const badge = badgeText || jug.posicion;

  return `
    <div class="player-card" onclick="openPlayerModal('${jug.id}')">
      <div class="player-avatar-wrapper relative h-48 overflow-hidden bg-slate-900 rounded-t-2xl">
        <img referrerpolicy="no-referrer" 
          src="${fotoUrl}" 
          alt="${jug.nombre}" 
          class="w-full h-full object-cover object-top filter brightness-95 transition-transform duration-300 hover:scale-105" 
          onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Emblema_oficial_del_Club_Atl%C3%A9tico_Hurac%C3%A1n.svg/500px-Emblema_oficial_del_Club_Atl%C3%A9tico_Hurac%C3%A1n.svg.png';"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
        <span class="player-card-badge">${badge}</span>
      </div>
      <div class="player-card-info p-4 flex flex-col justify-between flex-1">
        <div>
          <h4 class="player-name font-black text-slate-900 text-base leading-tight">${jug.nombre}</h4>
          <span class="player-sub text-xs text-red-600 font-bold block mt-0.5 mb-2.5">"${jug.apodo}" • ${jug.periodo}</span>
        </div>
        <div>
          <div class="player-stats-row flex justify-between bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-center">
            <div class="stat-item flex-1">
              <div class="stat-val font-black text-red-600 text-lg">${jug.partidos}</div>
              <div class="stat-lbl text-[10px] uppercase font-bold text-slate-400">Partidos</div>
            </div>
            <div class="stat-item flex-1 border-l border-slate-200">
              <div class="stat-val font-black text-slate-900 text-lg">${jug.goles}</div>
              <div class="stat-lbl text-[10px] uppercase font-bold text-slate-400">Goles</div>
            </div>
          </div>
          <button class="btn-outline w-full mt-3 justify-center text-xs py-2">
            Ver Ficha Histórica
          </button>
        </div>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  // Inicialización general
  initNavigation();
  initSearch();
  initOnThisDay();
  initUniversalModalBackdrop();

  renderInicio();
  renderJugadores();
  renderTecnicos();
  renderPalmares();
  renderPartidos();
  renderRivales();
  renderSedes();
  renderDisciplinas();
  renderComisiones();
  renderCamisetas();
  renderEmblemas();
  renderMapamundi();
  startTriviaGame();
  renderInstitucion();

  // Escuchar cambios en la URL (hash)
  window.addEventListener("hashchange", handleHashChange);
  handleHashChange();
});

/* ==========================================================================
   ENRUTADOR Y NAVEGACIÓN
   ========================================================================== */
function initNavigation() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const sidebar = document.getElementById("sidebar");
  const navLinks = document.querySelectorAll(".nav-link");

  if (mobileMenuBtn && sidebar) {
    mobileMenuBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });

    // Cerrar sidebar al hacer click fuera en móviles
    document.addEventListener("click", (e) => {
      if (window.innerWidth <= 1024 && !sidebar.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        sidebar.classList.remove("open");
      }
    });
  }

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 1024 && sidebar) {
        sidebar.classList.remove("open");
      }
    });
  });
}

function handleHashChange() {
  const hash = window.location.hash.replace("#", "") || "inicio";
  const views = document.querySelectorAll(".view-section");
  const navLinks = document.querySelectorAll(".nav-link");

  let targetView = document.getElementById(`view-${hash}`);
  if (!targetView) {
    targetView = document.getElementById("view-inicio");
  }

  views.forEach(v => v.classList.remove("active"));
  if (targetView) {
    targetView.classList.add("active");
  }

  navLinks.forEach(link => {
    const href = link.getAttribute("href")?.replace("#", "");
    if (href === hash || (hash === "" && href === "inicio")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ==========================================================================
   BUSCADOR GLOBAL
   ========================================================================== */
function initSearch() {
  const searchInput = document.getElementById("global-search-input");
  const searchDropdown = document.getElementById("search-results-dropdown");

  if (!searchInput || !searchDropdown) return;

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (query.length < 2) {
      searchDropdown.innerHTML = "";
      searchDropdown.classList.remove("visible");
      return;
    }

    const results = [];

    // Buscar en Jugadores
    HURACAN_DB.jugadores.forEach(j => {
      if (j.nombre.toLowerCase().includes(query) || j.apodo.toLowerCase().includes(query) || j.posicion.toLowerCase().includes(query)) {
        results.push({
          tipo: "Jugador",
          titulo: j.nombre,
          subtitulo: `${j.posicion} | ${j.partidos} PJ - ${j.goles} Goles`,
          badge: "Jugador",
          action: () => openPlayerModal(j.id)
        });
      }
    });

    // Buscar en Técnicos
    HURACAN_DB.tecnicos.forEach(t => {
      if (t.nombre.toLowerCase().includes(query) || t.apodo.toLowerCase().includes(query)) {
        results.push({
          tipo: "Técnico",
          titulo: t.nombre,
          subtitulo: `${t.periodo} | ${t.titulos.join(", ")}`,
          badge: "Técnico",
          action: () => { window.location.hash = "tecnicos"; }
        });
      }
    });

    // Buscar en Sedes
    HURACAN_DB.sedes.forEach(s => {
      if (s.nombre.toLowerCase().includes(query) || s.ubicacion.toLowerCase().includes(query)) {
        results.push({
          tipo: "Sede",
          titulo: s.nombre,
          subtitulo: s.ubicacion,
          badge: "Sede",
          action: () => { window.location.hash = "sedes"; }
        });
      }
    });

    // Buscar en Palmarés
    HURACAN_DB.palmares.forEach(p => {
      if (p.tipo.toLowerCase().includes(query) || p.anio.toString().includes(query)) {
        results.push({
          tipo: "Título",
          titulo: `${p.tipo} (${p.anio})`,
          subtitulo: p.asociacion,
          badge: "Palmarés",
          action: () => openTitleModal(p.id)
        });
      }
    });

    // Buscar en Partidos
    HURACAN_DB.partidos.forEach(part => {
      if (part.rival.toLowerCase().includes(query) || part.torneo.toLowerCase().includes(query)) {
        results.push({
          tipo: "Partido",
          titulo: `${part.resultado}`,
          subtitulo: `${part.torneo} - ${part.fecha}`,
          badge: "Partido",
          action: () => openMatchModal(part.id)
        });
      }
    });

    renderSearchResults(results, searchDropdown);
  });

  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
      searchDropdown.classList.remove("visible");
    }
  });
}

function renderSearchResults(results, container) {
  if (results.length === 0) {
    container.innerHTML = `
      <div class="p-4 text-center text-sm text-gray-500">
        No se encontraron resultados para la búsqueda.
      </div>
    `;
    container.classList.add("visible");
    return;
  }

  container.innerHTML = results.slice(0, 8).map((res, index) => `
    <div class="search-result-item" data-index="${index}">
      <span class="search-badge">${res.badge}</span>
      <div class="min-w-0 flex-1">
        <div class="font-bold text-sm text-gray-900 truncate">${res.titulo}</div>
        <div class="text-xs text-gray-500 truncate">${res.subtitulo}</div>
      </div>
      <svg class="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </div>
  `).join("");

  container.querySelectorAll(".search-result-item").forEach((item, idx) => {
    item.addEventListener("click", () => {
      results[idx].action();
      container.classList.remove("visible");
      document.getElementById("global-search-input").value = "";
    });
  });

  container.classList.add("visible");
}

/* ==========================================================================
   UN DÍA COMO HOY (CALENDARIO DINÁMICO)
   ========================================================================== */
function initOnThisDay() {
  const dateInput = document.getElementById("on-this-day-date");
  const today = new Date();
  const currentMonth = today.getMonth() + 1; // 1 - 12
  const currentDay = today.getDate();

  updateOnThisDay(currentMonth, currentDay);

  if (dateInput) {
    const formattedMonth = String(currentMonth).padStart(2, "0");
    const formattedDay = String(currentDay).padStart(2, "0");
    dateInput.value = `${today.getFullYear()}-${formattedMonth}-${formattedDay}`;

    dateInput.addEventListener("change", (e) => {
      if (e.target.value) {
        const parts = e.target.value.split("-");
        const m = parseInt(parts[1], 10);
        const d = parseInt(parts[2], 10);
        updateOnThisDay(m, d);
      }
    });
  }
}

function updateOnThisDay(month, day) {
  const containerPersonas = document.getElementById("on-this-day-personas");
  const containerPartidos = document.getElementById("on-this-day-partidos");
  const labelFecha = document.getElementById("current-date-label");

  const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  if (labelFecha) {
    labelFecha.textContent = `${day} de ${monthNames[month - 1]}`;
  }

  const matchesEvents = HURACAN_DB.efemerides.filter(e => e.mes === month && e.dia === day);

  const eventsToShow = matchesEvents.length > 0 
    ? matchesEvents 
    : [
        {
          titulo: "16 de Septiembre de 1973 - Campeón Metropolitano",
          tipo: "Hito Dorado",
          descripcion: "En este mes de Septiembre, el Huracán de Menotti con Houseman, Brindisi y Babington maravilló al fútbol mundial alcanzando la gloria en el Ducó.",
          icono: "trophy"
        },
        {
          titulo: "1 de Noviembre de 1908 - Fundación del Globo",
          tipo: "Institución",
          descripcion: "Los fundadores bautizaron a la institución en honor al legendario globo aerostático del Ingeniero Jorge Newbery.",
          icono: "flag"
        }
      ];

  if (containerPersonas) {
    containerPersonas.innerHTML = eventsToShow.map(ev => `
      <div class="timeline-item">
        <div class="timeline-icon">
          <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
          </svg>
        </div>
        <div class="timeline-content">
          <span class="text-xs font-bold text-red-600 uppercase tracking-wider">${ev.tipo}</span>
          <h4>${ev.titulo}</h4>
          <p>${ev.descripcion}</p>
        </div>
      </div>
    `).join("");
  }

  if (containerPartidos) {
    containerPartidos.innerHTML = `
      <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-bold text-slate-500 uppercase">Partido Inolvidable de la Historia</span>
          <span class="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-bold rounded-full">Final Oficial</span>
        </div>
        <div class="flex items-center justify-between py-3 border-y border-slate-200">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-xs">CAH</div>
            <span class="font-bold text-slate-800">Huracán</span>
          </div>
          <span class="text-lg font-black text-red-600 px-3 py-1 bg-white rounded-lg border border-slate-200 shadow-sm">1 - 0</span>
          <div class="flex items-center gap-3">
            <span class="font-bold text-slate-800">River Plate</span>
            <div class="w-8 h-8 rounded-full bg-slate-200 font-bold flex items-center justify-center text-xs text-slate-700">CARP</div>
          </div>
        </div>
        <p class="mt-2 text-xs text-slate-600">
          Supercopa Argentina en San Juan. Golazo picado del chileno Edson Puch ante Barovero y vuelta olímpica quemera.
        </p>
      </div>
    `;
  }
}

/* ==========================================================================
   VISTA: INICIO
   ========================================================================== */
function renderInicio() {
  renderCampanaMuseo();
  renderUltimoResultado();

  const podioGoleadores = document.getElementById("podio-goleadores-container");
  const podioPresencias = document.getElementById("podio-presencias-container");

  if (podioGoleadores) {
    podioGoleadores.innerHTML = HURACAN_DB.topGoleadores.slice(0, 4).map((j, idx) => {
      const jug = HURACAN_DB.jugadores.find(item => item.id === j.id) || j;
      return getPlayerCardHtml(jug, `#${idx + 1} Goleador Histórico`);
    }).join("");
  }

  if (podioPresencias) {
    podioPresencias.innerHTML = HURACAN_DB.topPresencias.slice(0, 4).map((j, idx) => {
      const jug = HURACAN_DB.jugadores.find(item => item.id === j.id) || j;
      return getPlayerCardHtml(jug, `#${idx + 1} Presencias Históricas`);
    }).join("");
  }
}

// Banner destacado de anuncio del Museo y Relevamiento de Patrimonio
function renderCampanaMuseo() {
  const container = document.getElementById("campana-museo-container");
  if (!container || !HURACAN_DB.info.campanaMuseo) return;

  const camp = HURACAN_DB.info.campanaMuseo;

  container.innerHTML = `
    <div class="bg-gradient-to-br from-slate-900 via-slate-900 to-red-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl mb-10 border border-red-900/40 relative overflow-hidden">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        <!-- Columna Izquierda: Foto Conceptual del Proyecto -->
        <div class="lg:col-span-5">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-red-600/30 group">
            <img referrerpolicy="no-referrer" src="${camp.imagen}" 
              alt="Proyecto Museo Huracán" 
              referrerpolicy="no-referrer"
              class="w-full h-72 sm:h-80 object-cover transform transition-transform duration-500 group-hover:scale-105"
              onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Emblema_oficial_del_Club_Atl%C3%A9tico_Hurac%C3%A1n.svg/500px-Emblema_oficial_del_Club_Atl%C3%A9tico_Hurac%C3%A1n.svg.png';"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-3 left-3 right-3 text-center">
              <span class="inline-block px-3 py-1 bg-red-600/90 text-white text-[11px] font-black uppercase tracking-wider rounded-full backdrop-blur-sm">
                Espacio Proyectado • Palacio Tomás A. Ducó
              </span>
            </div>
          </div>
        </div>

        <!-- Columna Derecha: Anteproyecto y Convocatoria de Relevamiento -->
        <div class="lg:col-span-7 space-y-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-red-600/20 text-red-400 border border-red-500/30 rounded-full text-xs font-extrabold uppercase tracking-wider">
            <span>🏛️ Proyecto Museo Oficial • Planificación & Anteproyecto</span>
          </div>

          <h3 class="text-2xl sm:text-4xl font-black text-white leading-tight tracking-tight">
            ${camp.titulo}
          </h3>
          <p class="text-red-200 text-sm sm:text-base font-medium">
            ${camp.subtitulo}
          </p>

          <p class="text-slate-300 text-xs sm:text-sm leading-relaxed">
            ${camp.comunicado}
          </p>

          <div class="p-4 bg-white/5 border border-white/10 rounded-2xl">
            <h4 class="text-xs font-bold text-red-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <span>📢 Relevamiento Patrimonial (Envío de Fotos / Videos):</span>
            </h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              ${camp.llamado}
            </p>
          </div>

          <!-- Botones de Acción Directa WhatsApp y Correo -->
          <div class="flex flex-wrap gap-3 pt-2">
            <a 
              href="${camp.whatsappUrl}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2.5 px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-full shadow-lg hover:shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5"
            >
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>${camp.whatsappTexto}</span>
            </a>

            <a 
              href="${camp.emailUrl}" 
              class="inline-flex items-center gap-2.5 px-5 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm rounded-full shadow-lg hover:shadow-red-600/30 transition-all transform hover:-translate-y-0.5"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span>${camp.emailTexto}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Widget del Último Resultado Deportivo
function renderUltimoResultado() {
  const container = document.getElementById("ultimo-resultado-container");
  if (!container || !HURACAN_DB.info.ultimoResultado) return;

  const res = HURACAN_DB.info.ultimoResultado;

  container.innerHTML = `
    <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm mb-10">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 border-b border-slate-100 gap-2 mb-4">
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
          <span class="text-xs font-black text-slate-700 uppercase tracking-wider">Último Partido Oficial</span>
          <span class="px-2.5 py-0.5 bg-red-100 text-red-700 font-extrabold text-[11px] rounded-full">
            ${res.torneo}
          </span>
        </div>
        <span class="text-xs font-semibold text-slate-500">${res.fecha} • ${res.estadio}</span>
      </div>

      <div class="flex items-center justify-between py-4 px-2 sm:px-6">
        <!-- Local: River Plate -->
        <div class="flex items-center gap-3 sm:gap-4 flex-1">
          <div class="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center p-2 shrink-0 shadow-sm">
            <img referrerpolicy="no-referrer" src="${res.rivalEscudo}" alt="${res.rival}" referrerpolicy="no-referrer" class="w-full h-full object-contain" onerror="this.style.display='none'">
          </div>
          <div>
            <h4 class="font-black text-base sm:text-xl text-slate-900 leading-tight">${res.local || 'River Plate'}</h4>
            <span class="text-xs text-slate-500 font-bold">Local</span>
          </div>
        </div>

        <!-- Marcador Central (1 - 2) -->
        <div class="px-5 py-2.5 bg-slate-900 text-white rounded-2xl flex items-center gap-3 shadow-inner">
          <span class="text-2xl sm:text-4xl font-black text-slate-300">${res.marcadorLocal !== undefined ? res.marcadorLocal : res.rivalGoles}</span>
          <span class="text-slate-500 font-bold text-xl">-</span>
          <span class="text-2xl sm:text-4xl font-black text-red-500">${res.marcadorVisitante !== undefined ? res.marcadorVisitante : res.huracanGoles}</span>
        </div>

        <!-- Visitante: Huracán (Ganador) -->
        <div class="flex items-center justify-end gap-3 sm:gap-4 flex-1 text-right">
          <div>
            <div class="flex items-center justify-end gap-1.5">
              <span class="px-1.5 py-0.5 bg-emerald-100 text-emerald-700 font-black text-[10px] rounded uppercase">¡Victoria!</span>
              <h4 class="font-black text-base sm:text-xl text-slate-900 leading-tight">Huracán</h4>
            </div>
            <span class="text-xs text-red-600 font-bold">Visitante</span>
          </div>
          <div class="w-12 h-12 rounded-full bg-red-600 text-white font-black flex items-center justify-center text-sm shadow-md shrink-0 ring-2 ring-red-200">
            CAH
          </div>
        </div>
      </div>

      <!-- Reseña del Partido -->
      <div class="p-3 bg-red-50/50 border border-red-100 rounded-xl text-xs text-slate-700 leading-relaxed mb-3">
        ${res.detalle}
      </div>

      <!-- Detalle de Goles y Figura -->
      <div class="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl">
        <div class="flex flex-wrap items-center gap-2">
          <span class="font-bold text-slate-700">⚽ Incidencias:</span>
          ${res.goles.map(g => `
            <span class="px-2 py-0.5 bg-white border border-slate-200 rounded-md font-medium text-slate-800 ${g.equipo === 'cah' ? 'border-red-200 text-red-700 font-bold' : ''}">
              <strong>${g.minuto}</strong> ${g.autor}
            </span>
          `).join("")}
        </div>
        <div class="flex items-center gap-1.5 shrink-0 text-amber-700 font-bold">
          <span>★ Figura:</span>
          <span class="text-slate-900">${res.figura}</span>
        </div>
      </div>
    </div>
  `;
}

/* ==========================================================================
   VISTA: JUGADORES
   ========================================================================== */
function renderJugadores() {
  const container = document.getElementById("jugadores-list-container");
  const filterDecada = document.getElementById("filter-decada");
  const filterPosicion = document.getElementById("filter-posicion");
  const filterSort = document.getElementById("filter-sort");
  const searchPlayer = document.getElementById("search-player-input");

  function applyFilters() {
    let list = [...HURACAN_DB.jugadores];

    // Filtro década
    const decadaVal = filterDecada ? filterDecada.value : "all";
    if (decadaVal !== "all") {
      list = list.filter(j => j.decada === decadaVal);
    }

    // Filtro posición
    const posVal = filterPosicion ? filterPosicion.value : "all";
    if (posVal !== "all") {
      list = list.filter(j => j.linea === posVal);
    }

    // Búsqueda específica
    const query = searchPlayer ? searchPlayer.value.trim().toLowerCase() : "";
    if (query) {
      list = list.filter(j => j.nombre.toLowerCase().includes(query) || j.apodo.toLowerCase().includes(query));
    }

    // Ordenamiento
    const sortVal = filterSort ? filterSort.value : "goles";
    if (sortVal === "goles") {
      list.sort((a, b) => b.goles - a.goles);
    } else if (sortVal === "partidos") {
      list.sort((a, b) => b.partidos - a.partidos);
    } else if (sortVal === "nombre") {
      list.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }

    if (container) {
      if (list.length === 0) {
        container.innerHTML = `<div class="col-span-full text-center py-12 text-gray-500">No se encontraron jugadores con los filtros seleccionados.</div>`;
        return;
      }
      container.innerHTML = list.map(jug => getPlayerCardHtml(jug)).join("");
    }
  }

  if (filterDecada) filterDecada.addEventListener("change", applyFilters);
  if (filterPosicion) filterPosicion.addEventListener("change", applyFilters);
  if (filterSort) filterSort.addEventListener("change", applyFilters);
  if (searchPlayer) searchPlayer.addEventListener("input", applyFilters);

  applyFilters();
}

/* ==========================================================================
   VISTA: TÉCNICOS
   ========================================================================== */
function renderTecnicos() {
  const container = document.getElementById("tecnicos-list-container");
  if (!container) return;

  container.innerHTML = HURACAN_DB.tecnicos.map(dt => {
    const fotoUrl = dt.foto || 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Emblema_oficial_del_Club_Atl%C3%A9tico_Hurac%C3%A1n.svg/500px-Emblema_oficial_del_Club_Atl%C3%A9tico_Hurac%C3%A1n.svg.png';
    const isCurrent = dt.id === "diego-martinez";

    return `
      <div class="card-quemero overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all border ${isCurrent ? 'border-2 border-red-600 ring-2 ring-red-100' : 'border-slate-200'}">
        <div>
          <div class="h-48 overflow-hidden relative bg-slate-900">
            <img referrerpolicy="no-referrer" 
              src="${fotoUrl}" 
              alt="${dt.nombre}" 
              class="w-full h-full object-cover object-top filter brightness-95" 
              onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Emblema_oficial_del_Club_Atl%C3%A9tico_Hurac%C3%A1n.svg/500px-Emblema_oficial_del_Club_Atl%C3%A9tico_Hurac%C3%A1n.svg.png';"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            <div class="absolute bottom-3 left-4 right-4 text-white">
              <span class="px-2.5 py-0.5 ${isCurrent ? 'bg-emerald-600' : 'bg-red-600'} text-white text-xs font-bold rounded-full">
                ${dt.estado || dt.periodo}
              </span>
              <h3 class="text-xl font-black text-white mt-1 leading-tight">${dt.nombre}</h3>
            </div>
          </div>

          <div class="p-5">
            <div class="flex items-center justify-between mb-3 text-xs text-slate-500">
              <span class="font-bold text-red-600">"${dt.apodo}" • ${dt.periodo}</span>
              <span><strong>${dt.partidos}</strong> PJ • ${dt.efectividad} efect.</span>
            </div>
            <p class="text-xs text-slate-600 mb-4 leading-relaxed">${dt.descripcion}</p>
            
            ${dt.cuerpoTecnico ? `
              <div class="mb-3 p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700">
                <strong>Cuerpo Técnico:</strong> ${dt.cuerpoTecnico}
              </div>
            ` : ''}

            <div class="mb-4">
              <h5 class="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Títulos y Logros</h5>
              <div class="flex flex-wrap gap-1.5">
                ${dt.titulos.map(t => `<span class="px-2 py-1 bg-red-50 text-red-800 text-xs rounded-md font-semibold border border-red-100">${t}</span>`).join("")}
              </div>
            </div>
          </div>
        </div>

        <div class="p-4 bg-slate-50 border-t border-slate-100 text-xs italic text-gray-700">
          ${dt.frase}
        </div>
      </div>
    `;
  }).join("");
}

/* ==========================================================================
   VISTA: PALMARÉS
   ========================================================================== */
function renderPalmares() {
  const container = document.getElementById("palmares-list-container");
  const filterTabs = document.querySelectorAll(".palmares-tab");

  function filterPalmares(category) {
    let list = [...HURACAN_DB.palmares];
    if (category === "ligas") {
      list = list.filter(t => t.categoria === "Liga Nacional");
    } else if (category === "copas") {
      list = list.filter(t => t.categoria === "Copa Nacional");
    }

    if (container) {
      container.innerHTML = list.map(tit => `
        <div class="card-quemero p-6 flex flex-col justify-between hover:shadow-lg transition-all cursor-pointer group" onclick="openTitleModal('${tit.id}')">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-3xl font-black text-red-600 group-hover:scale-110 transition-transform">${tit.anio}</span>
              <span class="px-2.5 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full uppercase">${tit.categoria}</span>
            </div>
            <h3 class="text-lg font-black text-gray-900 mb-1 leading-tight">${tit.tipo}</h3>
            <p class="text-xs text-gray-500 mb-3">${tit.asociacion}</p>
            <p class="text-xs text-gray-600 line-clamp-3 mb-4 leading-relaxed">${tit.detalle}</p>
          </div>

          <div class="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-red-600">
            <span>Ver Detalles de la Conquista</span>
            <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </div>
        </div>
      `).join("");
    }
  }

  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      filterPalmares(tab.dataset.category);
    });
  });

  filterPalmares("all");
}

/* ==========================================================================
   VISTA: PARTIDOS HISTÓRICOS
   ========================================================================== */
function renderPartidos() {
  const container = document.getElementById("partidos-list-container");
  if (!container) return;

  container.innerHTML = HURACAN_DB.partidos.map(part => `
    <div class="card-quemero p-6 flex flex-col justify-between hover:shadow-lg transition-all cursor-pointer" onclick="openMatchModal('${part.id}')">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="px-2.5 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full">${part.torneo}</span>
          <span class="text-xs text-gray-500">${part.fecha}</span>
        </div>
        <h3 class="text-xl font-black text-gray-900 mb-1">${part.resultado}</h3>
        <p class="text-xs text-gray-400 mb-3">Estadio: ${part.estadio}</p>
        <p class="text-xs text-gray-600 leading-relaxed mb-4 line-clamp-3">${part.resumen}</p>
      </div>

      <div class="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-red-600">
        <span>Ver Crónica & Formación</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   VISTA: RIVALES & HISTORIALES
   ========================================================================== */
function renderRivales() {
  const container = document.getElementById("rivales-list-container");
  if (!container) return;

  container.innerHTML = HURACAN_DB.rivales.map(riv => {
    const total = riv.partidosJugados;
    const pctHuracan = Math.round((riv.victoriasHuracan / total) * 100);
    const pctEmpates = Math.round((riv.empates / total) * 100);
    const pctRival = 100 - pctHuracan - pctEmpates;

    return `
      <div class="card-quemero p-6 hover:shadow-lg transition-all flex flex-col justify-between">
        <div>
          <span class="text-xs font-extrabold text-red-600 uppercase tracking-wider block mb-1">${riv.tipo}</span>
          <h3 class="text-xl font-black text-gray-900 mb-1">${riv.nombre}</h3>
          <p class="text-xs text-gray-400 mb-3">${riv.apodo}</p>
          <p class="text-xs text-gray-600 mb-4 leading-relaxed">${riv.descripcion}</p>

          <div class="grid grid-cols-3 gap-2 text-center bg-slate-50 p-3 rounded-xl mb-3 border border-slate-100">
            <div>
              <div class="text-lg font-black text-red-600">${riv.victoriasHuracan}</div>
              <div class="text-[10px] uppercase font-bold text-gray-400">Huracán</div>
            </div>
            <div>
              <div class="text-lg font-black text-gray-500">${riv.empates}</div>
              <div class="text-[10px] uppercase font-bold text-gray-400">Empates</div>
            </div>
            <div>
              <div class="text-lg font-black text-gray-800">${riv.victoriasRival}</div>
              <div class="text-[10px] uppercase font-bold text-gray-400">Rival</div>
            </div>
          </div>

          <div class="w-full bg-gray-200 h-2 rounded-full overflow-hidden flex mb-4">
            <div class="bg-red-600 h-full" style="width: ${pctHuracan}%" title="Huracán: ${pctHuracan}%"></div>
            <div class="bg-gray-400 h-full" style="width: ${pctEmpates}%" title="Empates: ${pctEmpates}%"></div>
            <div class="bg-blue-800 h-full" style="width: ${pctRival}%" title="Rival: ${pctRival}%"></div>
          </div>

          <div class="text-xs text-gray-600 space-y-1 pt-2 border-t border-gray-100">
            <div><strong>Partido Mítico:</strong> ${riv.partidoMitico}</div>
            <div><strong>Máximo Verdugo Quemero:</strong> ${riv.maximoGoleadorQuemero}</div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

/* ==========================================================================
   VISTA: NUESTRAS SEDES Y ESPACIOS
   ========================================================================== */
function renderSedes() {
  const container = document.getElementById("sedes-list-container") || document.getElementById("estadios-list-container");
  if (!container) return;

  container.innerHTML = HURACAN_DB.sedes.map(sede => {
    const fotoUrl = sede.foto || 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Emblema_oficial_del_Club_Atl%C3%A9tico_Hurac%C3%A1n.svg/500px-Emblema_oficial_del_Club_Atl%C3%A9tico_Hurac%C3%A1n.svg.png';
    return `
      <div class="card-quemero overflow-hidden hover:shadow-lg transition-all flex flex-col justify-between">
        <div>
          <div class="h-56 overflow-hidden relative bg-slate-900">
            <img referrerpolicy="no-referrer" 
              src="${fotoUrl}" 
              alt="${sede.nombre}" 
              class="w-full h-full object-cover" 
              onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Emblema_oficial_del_Club_Atl%C3%A9tico_Hurac%C3%A1n.svg/500px-Emblema_oficial_del_Club_Atl%C3%A9tico_Hurac%C3%A1n.svg.png';"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
            <div class="absolute bottom-3 left-4 right-4 text-white">
              <span class="px-2.5 py-0.5 bg-red-600 text-white text-xs font-bold rounded-full uppercase">
                Infraestructura Oficial
              </span>
              <h3 class="text-xl font-black mt-1 leading-tight text-white">${sede.nombre}</h3>
            </div>
          </div>

          <div class="p-6">
            <div class="text-xs text-gray-500 mb-4 space-y-1 bg-slate-50 p-3 rounded-lg border border-slate-100">
              <div><strong>Inauguración:</strong> ${sede.inauguracion}</div>
              <div><strong>Ubicación:</strong> ${sede.ubicacion}</div>
              ${sede.capacidad ? `<div><strong>Capacidad:</strong> ${typeof sede.capacidad === 'number' ? sede.capacidad.toLocaleString() + ' espectadores' : sede.capacidad}</div>` : ''}
            </div>

            <p class="text-xs text-gray-600 mb-4 leading-relaxed">${sede.historia || sede.arquitectura}</p>
            
            ${sede.tribunas ? `
              <div class="mb-4">
                <h5 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Tribunas del Palacio Ducó</h5>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  ${sede.tribunas.map(trib => `
                    <div class="p-2.5 bg-red-50/60 border border-red-100 rounded-lg text-xs">
                      <div class="font-bold text-gray-900">${trib.nombre}</div>
                      <div class="text-gray-500 text-[11px]">${trib.sector}</div>
                    </div>
                  `).join("")}
                </div>
              </div>
            ` : ''}

            ${sede.espacios ? `
              <div class="mb-4 p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700">
                <strong>Instalaciones:</strong> ${sede.espacios}
              </div>
            ` : ''}

            ${sede.distincion ? `
              <div class="p-3 bg-red-100/60 text-red-900 text-xs rounded-lg font-semibold">
                ★ ${sede.distincion}
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Retrocompatibilidad
function renderEstadios() {
  renderSedes();
}

/* ==========================================================================
   VISTA: OTRAS DISCIPLINAS DEPORTIVAS
   ========================================================================== */
function renderDisciplinas() {
  const container = document.getElementById("disciplinas-list-container");
  if (!container || !HURACAN_DB.disciplinas) return;

  container.innerHTML = HURACAN_DB.disciplinas.map(d => `
    <div class="card-quemero p-6 hover:shadow-lg transition-all flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full">${d.destacado}</span>
        </div>
        <h3 class="text-2xl font-black text-gray-900 mb-2">${d.nombre}</h3>
        <p class="text-xs text-gray-600 leading-relaxed mb-4">${d.descripcion}</p>

        <div class="space-y-1.5 pt-3 border-t border-slate-100">
          <h5 class="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Hitos y Campeonatos</h5>
          ${d.logros.map(l => `
            <div class="flex items-start gap-2 text-xs text-slate-700">
              <span class="text-red-600 font-bold">✦</span>
              <span>${l}</span>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   VISTA: COMISIONES DIRECTIVAS & PRESIDENTES
   ========================================================================== */
function renderComisiones() {
  const container = document.getElementById("comisiones-list-container");
  if (!container || !HURACAN_DB.comisionesDirectivas) return;

  container.innerHTML = `
    <div class="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
      <table class="w-full text-left text-xs text-slate-700">
        <thead class="bg-slate-900 text-white uppercase text-[10px] tracking-wider">
          <tr>
            <th class="py-3 px-4 font-black">Período</th>
            <th class="py-3 px-4 font-black">Presidente</th>
            <th class="py-3 px-4 font-black hidden sm:table-cell">Rol</th>
            <th class="py-3 px-4 font-black">Hitos Institucionales y Deportivos</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100">
          ${HURACAN_DB.comisionesDirectivas.map((c, idx) => `
            <tr class="hover:bg-red-50/40 transition-colors ${idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}">
              <td class="py-3 px-4 font-black text-red-600 whitespace-nowrap">${c.periodo}</td>
              <td class="py-3 px-4 font-bold text-slate-900 whitespace-nowrap">${c.presidente}</td>
              <td class="py-3 px-4 text-slate-500 hidden sm:table-cell">${c.rol}</td>
              <td class="py-3 px-4 leading-relaxed">${c.hitos}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

/* ==========================================================================
   VISTA: CAMISETAS HISTÓRICAS
   ========================================================================== */
function renderCamisetas() {
  const container = document.getElementById("camisetas-list-container");
  if (!container) return;

  container.innerHTML = HURACAN_DB.camisetas.map(cam => `
    <div class="card-quemero overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all group">
      <div class="bg-gradient-to-b from-slate-100 to-white p-4 border-b border-slate-100 flex items-center justify-center">
        ${getJerseySvg(cam.id)}
      </div>
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-2xl font-black text-red-600">${cam.anio}</span>
            <span class="px-2.5 py-1 bg-slate-100 text-slate-800 text-xs font-bold rounded-md">${cam.marca}</span>
          </div>
          <h4 class="text-lg font-extrabold text-gray-900 mb-1">${cam.nombre}</h4>
          <span class="text-xs text-gray-400 block mb-3">Patrocinio: ${cam.sponsor}</span>
          <p class="text-sm text-gray-600 mb-4 leading-relaxed">${cam.descripcion}</p>
        </div>

        <div class="pt-3 border-t border-gray-100 text-xs text-slate-600 bg-red-50/50 p-2.5 rounded-lg">
          <strong class="text-red-700">Hitos con esta casaca:</strong> ${cam.titulos.join(", ")}
        </div>
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   VISTA: MAPAMUNDI QUEMERO
   ========================================================================== */
function renderMapamundi() {
  const container = document.getElementById("mapamundi-list-container");
  if (!container) return;

  container.innerHTML = HURACAN_DB.mapamundi.map(pt => `
    <div class="card-quemero p-5">
      <div class="flex items-center justify-between mb-2">
        <span class="text-xs font-bold text-red-600 uppercase tracking-wider">${pt.pais}</span>
        <span class="text-xs font-bold text-gray-400">${pt.anio}</span>
      </div>
      <h4 class="text-lg font-extrabold text-gray-900 mb-2">${pt.lugar}</h4>
      <p class="text-sm text-gray-600">${pt.detalle}</p>
    </div>
  `).join("");
}

/* ==========================================================================
   VISTA: TRIVIA QUEMERA (BANCO DE +100 PREGUNTAS / 10 AL AZAR POR PARTIDA)
   ========================================================================== */
let currentTriviaSession = [];
let triviaCurrentIndex = 0;
let triviaScore = 0;
let triviaStreak = 0;

window.startTriviaGame = function() {
  triviaCurrentIndex = 0;
  triviaScore = 0;
  triviaStreak = 0;

  // Barajar y tomar 10 preguntas aleatorias de las 105
  const shuffled = [...HURACAN_DB.trivia].sort(() => 0.5 - Math.random());
  currentTriviaSession = shuffled.slice(0, 10);

  renderTrivia();
};

window.resetTrivia = function() {
  startTriviaGame();
};

function renderTrivia() {
  const container = document.getElementById("trivia-game-wrapper");
  if (!container || currentTriviaSession.length === 0) return;

  const q = currentTriviaSession[triviaCurrentIndex];
  const progressPct = ((triviaCurrentIndex) / currentTriviaSession.length) * 100;

  container.innerHTML = `
    <div class="trivia-container">
      <div class="flex items-center justify-between mb-4">
        <span class="text-xs font-bold uppercase text-red-600 tracking-wider">
          Pregunta ${triviaCurrentIndex + 1} de ${currentTriviaSession.length} • Nivel: ${q.dificultad}
        </span>
        <div class="flex gap-3 text-xs font-bold">
          <span class="text-slate-700">Aciertos: <strong class="text-red-600">${triviaScore}</strong></span>
          <span class="text-amber-600">Racha: 🔥 <strong>${triviaStreak}</strong></span>
        </div>
      </div>

      <div class="trivia-progress-bar">
        <div class="trivia-progress-fill" style="width: ${progressPct}%"></div>
      </div>

      <h3 class="trivia-question">${q.pregunta}</h3>

      <div class="trivia-options" id="trivia-options-box">
        ${q.opciones.map((opt, idx) => `
          <button class="trivia-option-btn" onclick="checkTriviaAnswer(${idx})">
            ${opt}
          </button>
        `).join("")}
      </div>

      <div id="trivia-feedback-box" class="hidden mt-6 p-4 rounded-xl text-sm leading-relaxed"></div>

      <button id="trivia-next-btn" class="hidden btn-globo w-full mt-4 justify-center" onclick="nextTriviaQuestion()">
        Siguiente Pregunta
      </button>
    </div>
  `;
}

window.checkTriviaAnswer = function(selectedIdx) {
  const q = currentTriviaSession[triviaCurrentIndex];
  const optionsBox = document.getElementById("trivia-options-box");
  const feedbackBox = document.getElementById("trivia-feedback-box");
  const nextBtn = document.getElementById("trivia-next-btn");

  if (!optionsBox) return;

  const btns = optionsBox.querySelectorAll("button");
  btns.forEach(b => b.disabled = true);

  if (selectedIdx === q.correcta) {
    triviaScore++;
    triviaStreak++;
    btns[selectedIdx].classList.add("correct");
    feedbackBox.className = "mt-6 p-4 rounded-xl text-sm leading-relaxed bg-green-50 border border-green-200 text-green-900";
    feedbackBox.innerHTML = `<strong>¡Correcto! 🔥</strong> ${q.explicacion}`;
  } else {
    triviaStreak = 0;
    btns[selectedIdx].classList.add("incorrect");
    btns[q.correcta].classList.add("correct");
    feedbackBox.className = "mt-6 p-4 rounded-xl text-sm leading-relaxed bg-red-50 border border-red-200 text-red-900";
    feedbackBox.innerHTML = `<strong>Incorrecto.</strong> ${q.explicacion}`;
  }

  feedbackBox.classList.remove("hidden");
  if (nextBtn) nextBtn.classList.remove("hidden");
};

window.nextTriviaQuestion = function() {
  triviaCurrentIndex++;
  if (triviaCurrentIndex < currentTriviaSession.length) {
    renderTrivia();
  } else {
    showTriviaResults();
  }
};

function showTriviaResults() {
  const container = document.getElementById("trivia-game-wrapper");
  const total = currentTriviaSession.length;
  const pct = Math.round((triviaScore / total) * 100);

  let titulo = "Quemero Novato";
  if (pct >= 90) titulo = "¡Quemero de Ley Absoluto!";
  else if (pct >= 70) titulo = "Gran Conocedor del Globo";
  else if (pct >= 50) titulo = "Quemero con Memoria";

  container.innerHTML = `
    <div class="trivia-container text-center py-10">
      <div class="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-black">
        ★
      </div>
      <h3 class="text-3xl font-black text-gray-900 mb-2">¡Partida Completada!</h3>
      <p class="text-lg font-bold text-red-600 mb-4">${titulo}</p>
      <div class="text-4xl font-black text-gray-900 mb-2">${triviaScore} / ${total}</div>
      <p class="text-sm text-gray-500 mb-6">Respondiste correctamente el ${pct}% de esta tanda de preguntas históricas.</p>
      <button class="btn-globo mx-auto" onclick="startTriviaGame()">
        Jugar Otra Partida (10 Nuevas Preguntas)
      </button>
    </div>
  `;
}

/* ==========================================================================
   VISTA: INSTITUCIÓN & ORÍGENES
   ========================================================================== */

/* ==========================================================================
   VISTA: EVOLUCIÓN DE EMBLEMAS HISTÓRICOS
   ========================================================================== */
function getEmblemSvg(id) {
  if (id === 'emblema-1908') {
    return `
      <svg viewBox="0 0 200 200" class="w-36 h-36 mx-auto drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="92" fill="#F8FAFC" stroke="#1E293B" stroke-width="5" stroke-dasharray="4,2"/>
        <circle cx="100" cy="100" r="82" fill="#FFFFFF" stroke="#1E293B" stroke-width="2"/>
        <path id="curveTop" d="M 28 100 A 72 72 0 0 1 172 100" fill="none" />
        <text font-family="'Inter', serif" font-size="10" font-weight="900" fill="#1E293B" letter-spacing="2">
          <textPath href="#curveTop" startOffset="50%" text-anchor="middle">
            ★ CLUB ATLÉTICO EL HURACÁN ★
          </textPath>
        </text>
        <circle cx="100" cy="100" r="54" fill="#F1F5F9" stroke="#1E293B" stroke-width="1.5"/>
        <text x="100" y="88" font-family="'Inter', serif" font-size="11" font-weight="900" fill="#B91420" text-anchor="middle" letter-spacing="1">CALLE VENTANA</text>
        <text x="100" y="106" font-family="'Inter', serif" font-size="18" font-weight="900" fill="#0F172A" text-anchor="middle">859</text>
        <text x="100" y="122" font-family="'Inter', serif" font-size="8" font-weight="700" fill="#64748B" text-anchor="middle" letter-spacing="0.5">PARQUE PATRICIOS</text>
        <path id="curveBottom" d="M 32 100 A 68 68 0 0 0 168 100" fill="none" />
        <text font-family="'Inter', serif" font-size="9.5" font-weight="800" fill="#64748B" letter-spacing="3">
          <textPath href="#curveBottom" startOffset="50%" text-anchor="middle">
            • 1 DE NOVIEMBRE 1908 •
          </textPath>
        </text>
      </svg>
    `;
  } else if (id === 'emblema-1910') {
    return `
      <svg viewBox="0 0 200 200" class="w-36 h-36 mx-auto drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="aerostatoGrad" cx="40%" cy="30%" r="70%">
            <stop offset="0%" stop-color="#EF4444" />
            <stop offset="60%" stop-color="#B91420" />
            <stop offset="100%" stop-color="#7F1D1D" />
          </radialGradient>
        </defs>
        <path d="M100 12 C52 12 28 48 28 92 C28 124 52 146 76 160 L82 168 L118 168 L124 160 C148 146 172 124 172 92 C172 48 148 12 100 12 Z" fill="url(#aerostatoGrad)" stroke="#FFFFFF" stroke-width="3"/>
        <path d="M100 12 C70 40 56 84 76 160" stroke="#FFFFFF" stroke-width="2.5" fill="none" opacity="0.85"/>
        <path d="M100 12 C130 40 144 84 124 160" stroke="#FFFFFF" stroke-width="2.5" fill="none" opacity="0.85"/>
        <line x1="100" y1="12" x2="100" y2="168" stroke="#FFFFFF" stroke-width="3" opacity="0.95"/>
        <path d="M44 60 Q100 76 156 60" stroke="#FFFFFF" stroke-width="2" fill="none" opacity="0.6"/>
        <path d="M48 104 Q100 124 152 104" stroke="#FFFFFF" stroke-width="2" fill="none" opacity="0.6"/>
        <line x1="78" y1="168" x2="122" y2="168" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>
        <line x1="84" y1="168" x2="88" y2="184" stroke="#475569" stroke-width="2"/>
        <line x1="94" y1="168" x2="94" y2="184" stroke="#475569" stroke-width="2"/>
        <line x1="106" y1="168" x2="106" y2="184" stroke="#475569" stroke-width="2"/>
        <line x1="116" y1="168" x2="112" y2="184" stroke="#475569" stroke-width="2"/>
        <rect x="84" y="184" width="32" height="13" rx="2" fill="#D97706" stroke="#78350F" stroke-width="1.5"/>
        <line x1="86" y1="190" x2="114" y2="190" stroke="#78350F" stroke-width="1"/>
        <circle cx="100" cy="92" r="20" fill="#FFFFFF" stroke="#991B1B" stroke-width="2"/>
        <text x="100" y="99" font-family="'Inter', serif" font-size="18" font-weight="900" fill="#B91420" text-anchor="middle">H</text>
      </svg>
    `;
  } else if (id === 'emblema-1921') {
    return `
      <svg viewBox="0 0 200 200" class="w-36 h-36 mx-auto drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
        <g fill="#EAB308" transform="translate(46, 6) scale(0.6)">
          <polygon points="25,2 32,18 49,18 35,29 40,46 25,36 10,46 15,29 1,18 18,18"/>
        </g>
        <g fill="#EAB308" transform="translate(74, 2) scale(0.6)">
          <polygon points="25,2 32,18 49,18 35,29 40,46 25,36 10,46 15,29 1,18 18,18"/>
        </g>
        <g fill="#EAB308" transform="translate(102, 2) scale(0.6)">
          <polygon points="25,2 32,18 49,18 35,29 40,46 25,36 10,46 15,29 1,18 18,18"/>
        </g>
        <g fill="#EAB308" transform="translate(130, 6) scale(0.6)">
          <polygon points="25,2 32,18 49,18 35,29 40,46 25,36 10,46 15,29 1,18 18,18"/>
        </g>
        <path d="M100 36 C58 36 36 68 36 106 C36 134 58 152 78 164 L84 172 L116 172 L122 164 C142 152 164 134 164 106 C164 68 142 36 100 36 Z" fill="#E01E2B" stroke="#FFFFFF" stroke-width="2.5"/>
        <path d="M100 36 C75 60 62 98 78 164" stroke="#FFFFFF" stroke-width="2.5" fill="none"/>
        <path d="M100 36 C125 60 138 98 122 164" stroke="#FFFFFF" stroke-width="2.5" fill="none"/>
        <rect x="85" y="174" width="30" height="12" rx="2" fill="#B91420" stroke="#FFFFFF" stroke-width="1.5"/>
        <circle cx="100" cy="106" r="26" fill="#FFFFFF"/>
        <text x="100" y="112" font-family="'Inter', serif" font-size="12.5" font-weight="900" fill="#E01E2B" text-anchor="middle" letter-spacing="1">C.A.H.</text>
        <text x="100" y="196" font-family="'Inter', sans-serif" font-size="8.5" font-weight="800" fill="#64748B" text-anchor="middle">TETRACAMPEÓN</text>
      </svg>
    `;
  } else if (id === 'emblema-1940') {
    return `
      <svg viewBox="0 0 200 200" class="w-36 h-36 mx-auto drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="150" height="150" rx="16" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="2"/>
        <path d="M100 25 L175 100 L100 175 L25 100 Z" fill="none" stroke="#E01E2B" stroke-width="1.5" opacity="0.3"/>
        <path d="M100 34 C64 34 46 64 46 100 C46 126 66 142 82 152 L86 160 L114 160 L118 152 C134 142 154 126 154 100 C154 64 136 34 100 34 Z" fill="#B91420" stroke="#FFFFFF" stroke-width="3"/>
        <path d="M100 34 L100 160" stroke="#FFFFFF" stroke-width="3"/>
        <path d="M72 68 L100 100 L128 68" stroke="#FFFFFF" stroke-width="2" fill="none"/>
        <path d="M72 132 L100 100 L128 132" stroke="#FFFFFF" stroke-width="2" fill="none"/>
        <rect x="86" y="162" width="28" height="10" rx="1" fill="#FFFFFF" stroke="#B91420" stroke-width="1.5"/>
        <text x="100" y="190" font-family="'Inter', sans-serif" font-size="9" font-weight="900" fill="#B91420" text-anchor="middle" letter-spacing="2">PALACIO DUCÓ</text>
      </svg>
    `;
  } else if (id === 'emblema-1973') {
    return `
      <svg viewBox="0 0 200 200" class="w-36 h-36 mx-auto drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="88" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2"/>
        <path d="M100 28 C64 28 44 58 44 94 C44 120 64 136 80 146 L84 154 L116 154 L120 146 C136 136 156 120 156 94 C156 58 136 28 100 28 Z" fill="#E01E2B"/>
        <rect x="85" y="156" width="30" height="12" rx="2" fill="#E01E2B"/>
        <text x="100" y="104" font-family="'Inter', sans-serif" font-size="28" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="-1">73</text>
        <text x="100" y="186" font-family="'Inter', sans-serif" font-size="8.5" font-weight="900" fill="#B91420" text-anchor="middle" letter-spacing="1">MENOTTI • FÚTBOL ARTE</text>
      </svg>
    `;
  } else {
    // emblema-actual
    return `
      <svg viewBox="0 0 200 200" class="w-36 h-36 mx-auto drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="90" fill="#FFFFFF" stroke="#E01E2B" stroke-width="4"/>
        <path d="M100 32 C68 32 50 60 50 94 C50 118 68 134 82 144 L86 152 L114 152 L118 144 C132 134 150 118 150 94 C150 60 132 32 100 32 Z" fill="#E01E2B"/>
        <path d="M100 32 C82 52 74 76 82 144" stroke="#FFFFFF" stroke-width="3" fill="none"/>
        <path d="M100 32 C118 52 126 76 118 144" stroke="#FFFFFF" stroke-width="3" fill="none"/>
        <path d="M100 42 C88 64 88 116 100 136 C112 116 112 64 100 42 Z" fill="#FFFFFF"/>
        <path d="M68 66 C78 72 88 78 100 78 C112 78 122 72 132 66" stroke="#FFFFFF" stroke-width="2.5" fill="none"/>
        <path d="M72 108 C80 102 90 98 100 98 C110 98 120 102 128 108" stroke="#FFFFFF" stroke-width="2.5" fill="none"/>
        <rect x="85" y="154" width="30" height="12" rx="2" fill="#E01E2B"/>
        <text x="100" y="184" font-family="'Inter', sans-serif" font-size="8.5" font-weight="900" fill="#1E293B" text-anchor="middle" letter-spacing="1">OFICIAL REGISTRADO AFA</text>
      </svg>
    `;
  }
}

function renderEmblemas() {
  const container = document.getElementById("emblemas-list-container");
  if (!container || !HURACAN_DB.emblemas) return;

  container.innerHTML = HURACAN_DB.emblemas.map(emb => {
    return `
      <div class="card-quemero overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 group border border-slate-200">
        <div>
          <div class="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
            <span class="px-3 py-1 bg-red-600 text-white font-black text-xs rounded-full uppercase tracking-wider">
              ${emb.periodo}
            </span>
            <span class="text-xs font-bold text-slate-500">${emb.tipo}</span>
          </div>

          <div class="p-8 bg-gradient-to-b from-slate-50 to-white flex items-center justify-center border-b border-slate-100 relative group-hover:scale-105 transition-transform duration-300">
            ${getEmblemSvg(emb.id)}
          </div>

          <div class="p-6 space-y-3">
            <div>
              <span class="text-[11px] font-extrabold text-red-600 uppercase tracking-wider block">${emb.epoca}</span>
              <h3 class="text-xl font-black text-slate-900 mt-0.5 leading-tight">${emb.nombre}</h3>
            </div>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">${emb.descripcion}</p>

            <div class="pt-2">
              <h5 class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Hitos y Significado</h5>
              <ul class="space-y-1.5">
                ${emb.detalles.map(d => `
                  <li class="flex items-start gap-2 text-xs text-slate-700">
                    <svg class="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>${d}</span>
                  </li>
                `).join("")}
              </ul>
            </div>
          </div>
        </div>

        <div class="p-4 bg-slate-50 border-t border-slate-100 text-center">
          <span class="text-[11px] font-semibold text-slate-400">Patrimonio Histórico • Club Atlético Huracán</span>
        </div>
      </div>
    `;
  }).join("");
}

function renderInstitucion() {
  const container = document.getElementById("institucion-content-wrapper");
  if (!container) return;

  container.innerHTML = `
    <div class="space-y-8 max-w-4xl mx-auto">
      <div class="card-quemero p-8">
        <h3 class="text-2xl font-black text-red-600 mb-4">El Bautismo del Globo y Jorge Newbery</h3>
        <p class="text-gray-700 leading-relaxed mb-4">
          A principios del siglo XX, un grupo de jóvenes entusiastas de Nueva Pompeya y Parque Patricios decidió fundar un club de fútbol. Tras una primera etapa informal bajo el nombre 'Verde Esperanza y Nunca Pierde', el 1 de noviembre de 1908 se formalizó la asamblea fundacional en la calle Ventana 859.
        </p>
        <p class="text-gray-700 leading-relaxed mb-4">
          Inspirados por la hazaña patriótica del Ingeniero Jorge Newbery, quien el 25 de diciembre de 1909 cruzó el Río de la Plata a bordo del aerostato 'El Huracán', los fundadores le solicitaron permiso para utilizar el símbolo del globo aerostático como divisa oficial. Newbery no solo aceptó encantado sino que se convirtió en el primer Presidente Honorario y benefactor de la institución.
        </p>
        <div class="p-4 bg-slate-50 border-l-4 border-red-600 rounded-r-lg text-sm italic text-gray-800">
          "El distintivo de Huracán será el globo rojo que surca los cielos de la patria con valentía, nobleza e hidalguía deportiva." — Ingeniero Jorge Newbery.
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="card-quemero p-6">
          <h4 class="text-lg font-bold text-gray-900 mb-2">¿Por qué 'Los Quemeros'?</h4>
          <p class="text-sm text-gray-600 leading-relaxed">
            Hacia fines del siglo XIX y principios del XX, en los límites de Parque Patricios funcionaba el Vaciadero Municipal de Basura de la Ciudad de Buenos Aires, conocido popularmente como 'La Quema'. Los vecinos e hinchas adoptaron con orgullo este apodo proletario, convirtiéndolo en bandera de pertenencia indiscutida.
          </p>
        </div>

        <div class="card-quemero p-6">
          <h4 class="text-lg font-bold text-gray-900 mb-2">Oscar 'Ringo' Bonavena</h4>
          <p class="text-sm text-gray-600 leading-relaxed">
            El legendario peso pesado argentino, que combatió de igual a igual contra Muhammad Ali y Joe Frazier, era fanático empedernido de Huracán. Creció y entrenó en la sede social de Caseros. Hoy en día, la tribuna popular local del Palacio Tomás A. Ducó y la calle adyacente llevan su nombre eterno.
          </p>
        </div>
      </div>

      <div class="card-quemero p-6">
        <h4 class="text-lg font-bold text-gray-900 mb-3">Himno Oficial del Club Atlético Huracán</h4>
        <div class="text-sm text-gray-700 space-y-2 italic bg-slate-50 p-6 rounded-xl border border-slate-200">
          <p>"Sopla el viento del triunfo sonoro,</p>
          <p>va elevándose el Globo triunfal,</p>
          <p>es Huracán corazón de mi barrio,</p>
          <p>emblema de fuego, pasión popular."</p>
          <p class="pt-2 font-semibold not-italic text-xs text-red-600">— Compuesto por Vicente Greco y letra de Alfredo Rovira.</p>
        </div>
      </div>
    </div>
  `;
}

/* ==========================================================================
   MODALES UNIVERSALES BLINDADOS (MOBILE-FIRST CON SCROLL LOCK Y TOUCH CIERRE)
   ========================================================================== */
function initUniversalModalBackdrop() {
  const modal = document.getElementById("universal-modal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      // Si el clic o tap fue directo en el backdrop oscuro
      if (e.target === modal) {
        closeUniversalModal();
      }
    });
  }
}

window.openPlayerModal = function(id) {
  const jug = HURACAN_DB.jugadores.find(j => j.id === id);
  if (!jug) return;

  const modal = document.getElementById("universal-modal");
  const modalBody = document.getElementById("modal-dynamic-content");
  const fotoUrl = jug.foto || 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Emblema_oficial_del_Club_Atl%C3%A9tico_Hurac%C3%A1n.svg/500px-Emblema_oficial_del_Club_Atl%C3%A9tico_Hurac%C3%A1n.svg.png';

  modalBody.innerHTML = `
    <div class="overflow-hidden rounded-2xl">
      <div class="relative h-64 sm:h-80 bg-slate-900 overflow-hidden">
        <img referrerpolicy="no-referrer" 
          src="${fotoUrl}" 
          alt="${jug.nombre}" 
          class="w-full h-full object-cover object-top filter brightness-95" 
          onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Emblema_oficial_del_Club_Atl%C3%A9tico_Hurac%C3%A1n.svg/500px-Emblema_oficial_del_Club_Atl%C3%A9tico_Hurac%C3%A1n.svg.png';"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
        <div class="absolute bottom-5 left-6 right-6 text-white">
          <span class="px-3 py-1 bg-red-600 text-white font-extrabold text-xs rounded-full uppercase tracking-wider">${jug.posicion}</span>
          <h3 class="text-2xl sm:text-3xl font-black mt-2 leading-tight">${jug.nombre}</h3>
          <p class="text-sm text-red-200">"${jug.apodo}" • ${jug.periodo}</p>
        </div>
      </div>

      <div class="p-6 sm:p-8">
        <div class="grid grid-cols-3 gap-3 bg-slate-50 p-4 rounded-xl text-center mb-6 border border-slate-200">
          <div>
            <div class="text-2xl font-black text-red-600">${jug.partidos}</div>
            <div class="text-xs uppercase font-bold text-gray-400">Partidos</div>
          </div>
          <div>
            <div class="text-2xl font-black text-gray-900">${jug.goles}</div>
            <div class="text-xs uppercase font-bold text-gray-400">Goles</div>
          </div>
          <div>
            <div class="text-2xl font-black text-gray-900">${jug.promedio}</div>
            <div class="text-xs uppercase font-bold text-gray-400">Promedio</div>
          </div>
        </div>

        <h5 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Biografía y Trayectoria</h5>
        <p class="text-sm text-gray-700 leading-relaxed mb-6">${jug.descripcion}</p>

        <h5 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Hitos y Récords</h5>
        <ul class="space-y-2 mb-6">
          ${jug.hitos.map(h => `
            <li class="flex items-start gap-2 text-sm text-gray-700">
              <svg class="w-4 h-4 text-red-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>${h}</span>
            </li>
          `).join("")}
        </ul>

        <div class="pt-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between text-xs text-gray-500 gap-2 mb-4">
          <span><strong>Nacimiento:</strong> ${jug.nacimiento}</span>
          ${jug.fallecimiento ? `<span><strong>Fallecimiento:</strong> ${jug.fallecimiento}</span>` : ''}
        </div>

        <button onclick="closeUniversalModal()" class="btn-globo w-full justify-center text-xs py-2.5 sm:hidden">
          Cerrar Ficha
        </button>
      </div>
    </div>
  `;

  // Bloquear scroll de pantalla para móviles
  document.body.style.overflow = "hidden";
  modal.classList.add("active");
};

window.openTitleModal = function(id) {
  const tit = HURACAN_DB.palmares.find(t => t.id === id);
  if (!tit) return;

  const modal = document.getElementById("universal-modal");
  const modalBody = document.getElementById("modal-dynamic-content");

  modalBody.innerHTML = `
    <div class="p-6 sm:p-8">
      <div class="flex items-center justify-between mb-4">
        <span class="text-3xl font-black text-red-600">${tit.anio}</span>
        <span class="px-3 py-1 bg-red-100 text-red-700 font-bold text-xs rounded-full uppercase">${tit.categoria}</span>
      </div>

      <h3 class="text-2xl font-black text-gray-900 mb-2">${tit.tipo}</h3>
      <p class="text-sm text-gray-500 mb-4">${tit.asociacion}</p>

      <div class="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl mb-6 border border-slate-200 text-center">
        <div>
          <div class="text-2xl font-black text-gray-900">${tit.partidos}</div>
          <div class="text-xs uppercase font-bold text-gray-400">Partidos Jugados</div>
        </div>
        <div>
          <div class="text-2xl font-black text-red-600">${tit.golesFavor}</div>
          <div class="text-xs uppercase font-bold text-gray-400">Goles a Favor</div>
        </div>
      </div>

      <h5 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Reseña de la Conquista</h5>
      <p class="text-sm text-gray-700 leading-relaxed mb-6">${tit.detalle}</p>

      <div class="bg-gray-50 p-4 rounded-xl border border-gray-200 text-xs text-gray-700 space-y-1 mb-4">
        <div><strong>Director Técnico:</strong> ${tit.dt}</div>
        <div><strong>Grandes Figuras:</strong> ${tit.figuras}</div>
      </div>

      <button onclick="closeUniversalModal()" class="btn-globo w-full justify-center text-xs py-2.5 sm:hidden">
        Cerrar
      </button>
    </div>
  `;

  document.body.style.overflow = "hidden";
  modal.classList.add("active");
};

window.openMatchModal = function(id) {
  const part = HURACAN_DB.partidos.find(p => p.id === id);
  if (!part) return;

  const modal = document.getElementById("universal-modal");
  const modalBody = document.getElementById("modal-dynamic-content");

  modalBody.innerHTML = `
    <div class="p-6 sm:p-8">
      <div class="flex items-center justify-between mb-3">
        <span class="px-3 py-1 bg-red-100 text-red-700 font-bold text-xs rounded-full">${part.torneo}</span>
        <span class="text-xs font-semibold text-gray-500">${part.fecha}</span>
      </div>

      <h3 class="text-2xl sm:text-3xl font-black text-gray-900 mb-2">${part.resultado}</h3>
      <p class="text-xs text-gray-500 mb-4"><strong>Estadio:</strong> ${part.estadio}</p>

      <h5 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Crónica del Encuentro</h5>
      <p class="text-sm text-gray-700 leading-relaxed mb-6">${part.resumen}</p>

      <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-gray-800 mb-4">
        <strong>Formación Histórica:</strong>
        <p class="mt-1 leading-relaxed">${part.alineacion}</p>
      </div>

      <button onclick="closeUniversalModal()" class="btn-globo w-full justify-center text-xs py-2.5 sm:hidden">
        Cerrar
      </button>
    </div>
  `;

  document.body.style.overflow = "hidden";
  modal.classList.add("active");
};

window.closeUniversalModal = function() {
  const modal = document.getElementById("universal-modal");
  if (modal) modal.classList.remove("active");
  document.body.style.overflow = "";
};

window.openMobileShareModal = function() {
  const modal = document.getElementById("universal-modal");
  const modalBody = document.getElementById("modal-dynamic-content");

  const localIp = "192.168.0.16";
  const port = window.location.port || "8080";
  const mobileUrl = `http://${localIp}:${port}`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(mobileUrl)}`;

  modalBody.innerHTML = `
    <div class="p-6 sm:p-8">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
        </div>
        <div>
          <h3 class="text-xl font-black text-gray-900">Ver en tu Celular o Compartir</h3>
          <p class="text-xs text-gray-500">Museo Quemero Oficial</p>
        </div>
      </div>

      <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 mb-5">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold uppercase text-red-600 tracking-wider">Acceso Directo</span>
          <span class="px-2 py-0.5 bg-green-100 text-green-800 text-[10px] font-extrabold rounded-full">Wi-Fi Local</span>
        </div>
        
        <div class="flex flex-col sm:flex-row items-center gap-5">
          <div class="p-2 bg-white rounded-xl shadow-sm border border-slate-200 shrink-0">
            <img referrerpolicy="no-referrer" src="${qrUrl}" alt="Código QR para celular" class="w-32 h-32 rounded-lg">
          </div>
          <div class="flex-1 text-xs text-slate-600 space-y-2 text-center sm:text-left">
            <p><strong>Escanea el código QR</strong> o ingresa manualmente a:</p>
            <div class="p-2 bg-white border border-slate-200 rounded-lg font-mono text-sm font-bold text-slate-900 break-all select-all">
              ${mobileUrl}
            </div>
          </div>
        </div>
      </div>

      <div class="bg-red-50/60 border border-red-200 rounded-2xl p-4 mb-4">
        <span class="text-xs font-bold uppercase text-red-700 tracking-wider block mb-1">GitHub Pages Oficial</span>
        <p class="text-xs text-slate-700">
          Disponible en línea para todo el mundo en:
          <a href="https://cristiansalada.github.io/Museo-Huracan/" target="_blank" class="text-red-600 underline font-bold block mt-1">
            https://cristiansalada.github.io/Museo-Huracan/
          </a>
        </p>
      </div>

      <button onclick="closeUniversalModal()" class="btn-globo w-full justify-center text-xs py-2.5">
        Cerrar
      </button>
    </div>
  `;

  document.body.style.overflow = "hidden";
  modal.classList.add("active");
};

// Cerrar modal con tecla Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeUniversalModal();
  }
});
