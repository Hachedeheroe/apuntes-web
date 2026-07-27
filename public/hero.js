/* ---------------------------------------------------------------------------
   Trazador de la portada — apuntes-web

   El trazo inicial usa CSS. Las tres curvas abiertas (parábola, onda y
   campana) se transforman entre sí con rAF; el anillo y la hélice conservan
   la transición por fundido porque sus recorridos cerrado/de ida y vuelta
   producen cruces poco legibles al interpolarlos. Sin dependencias.

   Contrato: window.heroApuntes.montar(elemento) -> { destruir: function }
--------------------------------------------------------------------------- */
(function () {
  "use strict";

  var NS = "http://www.w3.org/2000/svg";
  var ANCHO = 320, ALTO = 180, MUESTRAS = 128;
  var TRAZO = 1500, ESPERA = 1700, SALIDA = 420, MORPH = 700;

  function traza(puntos) {
    return puntos.map(function (p, i) {
      return (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1);
    }).join(" ");
  }

  /* Igualar por longitud de arco evita que zonas con más puntos avancen más
     despacio durante la transformación. */
  function remuestrear(p, n) {
    var d = [0], total = 0, i, j = 1;
    for (i = 1; i < p.length; i++) {
      total += Math.hypot(p[i][0] - p[i - 1][0], p[i][1] - p[i - 1][1]);
      d.push(total);
    }
    var r = [];
    for (i = 0; i < n; i++) {
      var meta = total * i / (n - 1);
      while (j < d.length - 1 && d[j] < meta) j++;
      var tramo = d[j] - d[j - 1], t = tramo ? (meta - d[j - 1]) / tramo : 0;
      r.push([
        p[j - 1][0] + (p[j][0] - p[j - 1][0]) * t,
        p[j - 1][1] + (p[j][1] - p[j - 1][1]) * t
      ]);
    }
    return r;
  }

  function parabola() {
    var p = [], x0 = 26, x1 = 294, base = 150, alto = 104;
    for (var i = 0; i <= 60; i++) {
      var t = i / 60;
      p.push([x0 + (x1 - x0) * t, base - alto * 4 * t * (1 - t)]);
    }
    return p;
  }

  function onda() {
    var p = [], x0 = 26, x1 = 294, eje = 90, amp = 52;
    for (var i = 0; i <= 140; i++) {
      var t = i / 140;
      p.push([x0 + (x1 - x0) * t, eje - amp * Math.sin(t * Math.PI * 4)]);
    }
    return p;
  }

  function campana() {
    var p = [], x0 = 26, x1 = 294, base = 150, alto = 108;
    for (var i = 0; i <= 100; i++) {
      var t = i / 100, z = (t - 0.5) * 6;
      p.push([x0 + (x1 - x0) * t, base - alto * Math.exp(-z * z / 2)]);
    }
    return p;
  }

  function benceno() {
    var cx = 160, cy = 90, r = 62, p = [];
    for (var i = 0; i <= 6; i++) {
      var a = Math.PI / 6 + i * Math.PI / 3;
      p.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
    }
    var ri = r * 0.56;
    for (var k = 0; k <= 48; k++) {
      var b = Math.PI / 6 + k / 48 * Math.PI * 2;
      p.push([cx + ri * Math.cos(b), cy + ri * Math.sin(b)]);
    }
    return p;
  }

  function helice() {
    var p = [], x0 = 30, x1 = 290, eje = 90, amp = 46, vueltas = 2.2;
    function y(t, fase) { return eje + amp * Math.sin(t * Math.PI * 2 * vueltas + fase); }
    for (var i = 0; i <= 100; i++) {
      var t = i / 100;
      p.push([x0 + (x1 - x0) * t, y(t, 0)]);
    }
    for (var j = 100; j >= 0; j--) {
      var u = j / 100;
      p.push([x0 + (x1 - x0) * u, y(u, Math.PI)]);
    }
    return p;
  }

  var FIGURAS = [
    ["Tiro parabólico", "Gráfico de un tiro parabólico con altura máxima y alcance", parabola()],
    ["Onda armónica", "Gráfico de una onda armónica con longitud de onda y amplitud", onda()],
    ["Distribución normal", "Gráfico de una distribución normal con media y desviación típica", campana()],
    ["Anillo bencénico", "Representación geométrica de un anillo bencénico", benceno()],
    ["Doble hélice", "Esquema de una doble hélice con su paso de rosca", helice()]
  ].map(function (f) {
    f.push(remuestrear(f[2], MUESTRAS));
    f.push(traza(f[3]));
    return f;
  });

  function crear(nombre, atributos) {
    var el = document.createElementNS(NS, nombre);
    for (var k in atributos) if (Object.prototype.hasOwnProperty.call(atributos, k)) {
      el.setAttribute(k, atributos[k]);
    }
    return el;
  }

  function reducido() {
    return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }

  var HAY_OFFSET = !!(window.CSS && CSS.supports && CSS.supports("offset-path", 'path("M 0 0 L 1 1")'));
  var ESTILOS_PUESTOS = false;

  function ponerEstilos() {
    if (ESTILOS_PUESTOS) return;
    ESTILOS_PUESTOS = true;
    var css = document.createElement("style");
    css.textContent =
      "@keyframes hero-dibujar{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}" +
      "@keyframes hero-punta{from{offset-distance:0%}to{offset-distance:100%}}" +
      ".hero-trazo{animation:hero-dibujar var(--hero-trazo) cubic-bezier(.25,.6,.3,1) both}" +
      ".hero-punta{animation:hero-punta var(--hero-trazo) cubic-bezier(.25,.6,.3,1) both}" +
      ".hero-marca{opacity:0;transition:opacity .16s ease;transition-delay:0s}" +
      ".hero-notas-on .hero-marca{opacity:1;transition-delay:var(--hero-retardo)}" +
      "@media(prefers-reduced-motion:reduce){.hero-trazo,.hero-punta{animation:none}.hero-marca{opacity:1;transition:none}}";
    document.head.appendChild(css);
  }

  function linea(g, x1, y1, x2, y2) {
    g.appendChild(crear("line", {
      x1: x1, y1: y1, x2: x2, y2: y2, stroke: "var(--sut)",
      "stroke-width": "1", "stroke-dasharray": "3 3"
    }));
  }

  function texto(g, x, y, normal, sub, ancla) {
    var t = crear("text", {
      x: x, y: y, fill: "var(--sut)", "font-size": "9px",
      "letter-spacing": ".14em", "text-anchor": ancla || "start"
    });
    t.appendChild(document.createTextNode(normal));
    if (sub) {
      var s = crear("tspan", { "baseline-shift": "sub", "font-size": "7px" });
      s.textContent = sub;
      t.appendChild(s);
    }
    g.appendChild(t);
  }

  function marca(notas, retraso) {
    var g = crear("g", { "class": "hero-marca" });
    g.style.setProperty("--hero-retardo", retraso + "ms");
    notas.appendChild(g);
    return g;
  }

  function anotar(n, notas) {
    notas.textContent = "";
    var a, b, c;
    if (n === 0) {
      a = marca(notas, 0); linea(a, 160, 46, 160, 150); texto(a, 168, 99, "h", "máx");
      b = marca(notas, 110); linea(b, 26, 164, 294, 164); linea(b, 26, 159, 26, 169);
      linea(b, 294, 159, 294, 169); texto(b, 160, 176, "R", "", "middle");
    } else if (n === 1) {
      a = marca(notas, 0); linea(a, 59.5, 27, 193.5, 27); linea(a, 59.5, 24, 59.5, 34);
      linea(a, 193.5, 24, 193.5, 34); texto(a, 126.5, 20, "λ", "", "middle");
      b = marca(notas, 110); linea(b, 47, 38, 47, 90); texto(b, 39, 67, "A", "", "middle");
    } else if (n === 2) {
      a = marca(notas, 0); linea(a, 115.3, 145, 115.3, 158); texto(a, 115.3, 171, "μ−σ", "", "middle");
      b = marca(notas, 90); linea(b, 160, 145, 160, 158); texto(b, 160, 171, "μ", "", "middle");
      c = marca(notas, 180); linea(c, 204.7, 145, 204.7, 158); texto(c, 204.7, 171, "μ+σ", "", "middle");
    } else if (n === 4) {
      a = marca(notas, 0); linea(a, 72, 27, 190.2, 27); linea(a, 72, 23, 72, 32);
      linea(a, 190.2, 23, 190.2, 32); texto(a, 131.1, 19, "3,4 nm", "", "middle");
    }
  }

  function montar(caja) {
    if (!caja) return { destruir: function () {} };
    ponerEstilos();
    caja.innerHTML = "";

    var svg = crear("svg", {
      viewBox: "0 0 " + ANCHO + " " + ALTO, width: "100%", role: "img",
      "aria-label": FIGURAS[0][1],
      style: "display:block;color:var(--ink);--hero-trazo:" + TRAZO + "ms"
    });
    var rejilla = crear("g", { stroke: "currentColor", "stroke-width": "1", opacity: ".16", "aria-hidden": "true" });
    [45, 90, 135, 150].forEach(function (y) {
      rejilla.appendChild(crear("line", { x1: 12, y1: y, x2: ANCHO - 12, y2: y }));
    });
    svg.appendChild(rejilla);

    var trazo = crear("path", {
      fill: "none", stroke: "currentColor", "stroke-width": "2",
      "stroke-linecap": "square", "stroke-linejoin": "miter",
      pathLength: "1", "stroke-dasharray": "1 1", "aria-hidden": "true"
    });
    svg.appendChild(trazo);

    var notas = crear("g", { "class": "hero-notas", "aria-hidden": "true" });
    svg.appendChild(notas);
    var punta = crear("rect", { width: 6, height: 6, x: -3, y: -3, fill: "var(--acc)", "aria-hidden": "true" });
    punta.style.display = "none";
    svg.appendChild(punta);
    caja.appendChild(svg);

    var pie = document.createElement("p");
    pie.style.cssText = "margin:8px 0 0;font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--sut);min-height:1.2em";
    caja.appendChild(pie);

    var i = 0, vivo = true, visible = true, corriendo = false, raf = 0, tiempos = [];

    function limpiarTiempos() {
      tiempos.forEach(clearTimeout);
      tiempos = [];
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    }
    function luego(fn, ms) { tiempos.push(setTimeout(fn, ms)); }
    function ocultarNotas() { notas.classList.remove("hero-notas-on"); }
    function mostrarNotas() { if (vivo && corriendo) notas.classList.add("hero-notas-on"); }

    function preparar(n) {
      var f = FIGURAS[n];
      pie.textContent = f[0];
      svg.setAttribute("aria-label", f[1]);
      anotar(n, notas);
      ocultarNotas();
    }

    function pintar(n, animar) {
      if (!vivo || !corriendo) return;
      i = n;
      limpiarTiempos();
      preparar(i);
      var f = FIGURAS[i];
      trazo.setAttribute("d", f[4]);
      trazo.style.transition = "none";
      trazo.style.opacity = "1";
      trazo.classList.remove("hero-trazo");
      punta.classList.remove("hero-punta");
      punta.style.display = "none";
      if (animar) {
        trazo.setAttribute("stroke-dasharray", "1 1");
        void trazo.getBoundingClientRect();
        trazo.classList.add("hero-trazo");
        if (HAY_OFFSET) {
          punta.style.display = "";
          punta.style.opacity = "1";
          punta.style.offsetPath = 'path("' + f[4] + '")';
          punta.style.offsetRotate = "0deg";
          punta.classList.add("hero-punta");
        }
        luego(mostrarNotas, TRAZO + 90);
        luego(salir, TRAZO + ESPERA);
      } else {
        trazo.setAttribute("stroke-dasharray", "none");
        luego(mostrarNotas, 90);
        luego(salir, ESPERA);
      }
    }

    function transformar() {
      var desde = FIGURAS[i][3], siguiente = i + 1, hacia = FIGURAS[siguiente][3];
      var inicio = performance.now();
      ocultarNotas();
      punta.style.display = "none";
      trazo.classList.remove("hero-trazo");
      trazo.setAttribute("stroke-dasharray", "none");
      function paso(ahora) {
        if (!vivo || !corriendo) return;
        var t = Math.min(1, (ahora - inicio) / MORPH);
        t = t * t * (3 - 2 * t);
        var p = desde.map(function (q, k) {
          return [q[0] + (hacia[k][0] - q[0]) * t, q[1] + (hacia[k][1] - q[1]) * t];
        });
        trazo.setAttribute("d", traza(p));
        if (t < 1) raf = requestAnimationFrame(paso);
        else { raf = 0; pintar(siguiente, false); }
      }
      raf = requestAnimationFrame(paso);
    }

    function desvanecer() {
      ocultarNotas();
      punta.style.opacity = "0";
      trazo.style.transition = "opacity " + SALIDA + "ms ease";
      trazo.style.opacity = "0";
      luego(function () { pintar((i + 1) % FIGURAS.length, true); }, SALIDA);
    }

    function salir() {
      if (!vivo || !corriendo) return;
      if (i < 2) transformar(); else desvanecer();
    }

    function pausar() { corriendo = false; limpiarTiempos(); }
    function reanudar() {
      if (!vivo || corriendo || !visible || document.hidden) return;
      corriendo = true;
      pintar(i, true);
    }

    if (reducido()) {
      trazo.setAttribute("d", FIGURAS[0][4]);
      trazo.setAttribute("stroke-dasharray", "none");
      pie.textContent = FIGURAS[0][0];
      anotar(0, notas);
      notas.classList.add("hero-notas-on");
      return { destruir: function () { vivo = false; caja.innerHTML = ""; } };
    }

    function alCambiarVisibilidad() { if (document.hidden) pausar(); else reanudar(); }
    document.addEventListener("visibilitychange", alCambiarVisibilidad);
    var observador = null;
    if (window.IntersectionObserver) {
      observador = new IntersectionObserver(function (entradas) {
        var dentro = entradas[entradas.length - 1].isIntersecting;
        if (dentro === visible) return;
        visible = dentro;
        if (visible) reanudar(); else pausar();
      }, { rootMargin: "0px 0px -10% 0px" });
      observador.observe(caja);
    }
    reanudar();

    return {
      destruir: function () {
        vivo = false;
        pausar();
        document.removeEventListener("visibilitychange", alCambiarVisibilidad);
        if (observador) observador.disconnect();
        caja.innerHTML = "";
      }
    };
  }

  window.heroApuntes = { montar: montar, figuras: FIGURAS.length, duracionCiclo: TRAZO + ESPERA + SALIDA };
})();
