/* ---------------------------------------------------------------------------
   Trazador de la portada — apuntes-web
   ---------------------------------------------------------------------------
   Dibuja, una tras otra y en bucle, cinco curvas de las tres materias de la
   web. Cada una se traza de principio a fin con un cuadrado rojo haciendo de
   punta de lápiz, se sostiene un momento y se desvanece.

   El trazo lo hace el navegador con animaciones CSS, no un bucle de
   requestAnimationFrame: va en el compositor, sobrevive a un hilo principal
   ocupado y no se queda a medias si el navegador deja de servir fotogramas.
   JavaScript solo encadena las figuras.

   Sin dependencias. El trazo usa currentColor y la punta var(--acc), así que
   el tema claro/oscuro se hereda solo.

   Contrato público:
     window.heroApuntes.montar(elemento) -> { destruir: function }

   Ver ANIMACION-HERO.md en la raíz del repositorio.
--------------------------------------------------------------------------- */
(function () {
  "use strict";

  var NS = "http://www.w3.org/2000/svg";
  var ANCHO = 320, ALTO = 180;

  var TRAZO = 1500;   /* dibujar */
  var ESPERA = 1700;  /* sostener */
  var SALIDA = 420;   /* desvanecer */

  /* Cada figura: nombre para el pie y el atributo d. Coordenadas en el viewBox
     de 320x180. `d` se calcula una vez y se guarda. */
  var FIGURAS = [
    { nombre: "Tiro parabólico", d: parabola() },
    { nombre: "Onda armónica", d: onda() },
    { nombre: "Distribución normal", d: campana() },
    { nombre: "Anillo bencénico", d: benceno() },
    { nombre: "Doble hélice", d: helice() }
  ];

  function traza(puntos) {
    return puntos.map(function (p, i) {
      return (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1);
    }).join(" ");
  }

  function parabola() {
    var p = [], x0 = 26, x1 = 294, base = 150, alto = 104;
    for (var i = 0; i <= 60; i++) {
      var t = i / 60;
      p.push([x0 + (x1 - x0) * t, base - alto * 4 * t * (1 - t)]);
    }
    return traza(p);
  }

  function onda() {
    var p = [], x0 = 26, x1 = 294, eje = 90, amp = 52;
    for (var i = 0; i <= 140; i++) {
      var t = i / 140;
      p.push([x0 + (x1 - x0) * t, eje - amp * Math.sin(t * Math.PI * 4)]);
    }
    return traza(p);
  }

  function campana() {
    var p = [], x0 = 26, x1 = 294, base = 150, alto = 108;
    for (var i = 0; i <= 100; i++) {
      var t = i / 100, z = (t - 0.5) * 6;
      p.push([x0 + (x1 - x0) * t, base - alto * Math.exp(-z * z / 2)]);
    }
    return traza(p);
  }

  function benceno() {
    var cx = 160, cy = 90, r = 62, p = [];
    for (var i = 0; i <= 6; i++) {
      var a = Math.PI / 6 + i * Math.PI / 3;
      p.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
    }
    /* La circunferencia interior, en polilínea para que el trazado sea continuo. */
    var ri = r * 0.56;
    for (var k = 0; k <= 48; k++) {
      var b = Math.PI / 6 + (k / 48) * Math.PI * 2;
      p.push([cx + ri * Math.cos(b), cy + ri * Math.sin(b)]);
    }
    return traza(p);
  }

  function helice() {
    var p = [], x0 = 30, x1 = 290, eje = 90, amp = 46, vueltas = 2.2;
    var y = function (t, desfase) { return eje + amp * Math.sin(t * Math.PI * 2 * vueltas + desfase); };
    for (var i = 0; i <= 100; i++) { var t = i / 100; p.push([x0 + (x1 - x0) * t, y(t, 0)]); }
    /* Vuelta atrás por la segunda hebra: un solo trazo continuo, ida y vuelta. */
    for (var j = 100; j >= 0; j--) { var u = j / 100; p.push([x0 + (x1 - x0) * u, y(u, Math.PI)]); }
    return traza(p);
  }

  function crear(nombre, atributos) {
    var el = document.createElementNS(NS, nombre);
    for (var k in atributos) if (atributos.hasOwnProperty(k)) el.setAttribute(k, atributos[k]);
    return el;
  }

  function reducido() {
    return !!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches);
  }

  /* offset-path mueve la punta por la misma curva. Donde no exista, no hay punta. */
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
      "@media (prefers-reduced-motion:reduce){.hero-trazo,.hero-punta{animation:none}}";
    document.head.appendChild(css);
  }

  function montar(caja) {
    if (!caja) return { destruir: function () {} };
    ponerEstilos();
    caja.innerHTML = "";

    var svg = crear("svg", {
      viewBox: "0 0 " + ANCHO + " " + ALTO,
      width: "100%", role: "img",
      "aria-label": "Curvas de física, matemáticas, química y biología trazándose una tras otra",
      style: "display:block;color:var(--ink);--hero-trazo:" + TRAZO + "ms"
    });

    /* Rejilla de fondo: reglas finas y estáticas. Marca el papel. */
    var rejilla = crear("g", { stroke: "currentColor", "stroke-width": "1", opacity: ".16" });
    [45, 90, 135, 150].forEach(function (y) {
      rejilla.appendChild(crear("line", { x1: 12, y1: y, x2: ANCHO - 12, y2: y }));
    });
    svg.appendChild(rejilla);

    /* pathLength=1 hace que el guion y su desfase vayan de 0 a 1 en todas las
       figuras, midan lo que midan: una sola animación CSS sirve para todas. */
    var trazo = crear("path", {
      fill: "none", stroke: "currentColor", "stroke-width": "2",
      "stroke-linecap": "square", "stroke-linejoin": "miter",
      pathLength: "1", "stroke-dasharray": "1 1"
    });
    svg.appendChild(trazo);

    /* La punta del lápiz: un cuadrado, no un círculo. Radio 0 en todas partes. */
    var punta = crear("rect", { width: 6, height: 6, x: -3, y: -3, fill: "var(--acc)" });
    punta.style.display = "none";
    svg.appendChild(punta);

    caja.appendChild(svg);

    var pie = document.createElement("p");
    pie.style.cssText = "margin:8px 0 0;font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--sut);min-height:1.2em";
    caja.appendChild(pie);

    var i = 0, temporizador = 0, vivo = true, visible = true, corriendo = false;

    function pintar(n) {
      var f = FIGURAS[n % FIGURAS.length];
      trazo.setAttribute("d", f.d);
      pie.textContent = f.nombre;
      trazo.style.transition = "none";
      trazo.style.opacity = "1";
      punta.style.opacity = "1";
      if (HAY_OFFSET) {
        punta.style.display = "";
        punta.style.offsetPath = 'path("' + f.d + '")';
        punta.style.offsetRotate = "0deg";
      }
      /* Reiniciar las animaciones CSS: quitar la clase, forzar reflujo, volver. */
      trazo.classList.remove("hero-trazo");
      punta.classList.remove("hero-punta");
      void trazo.getBoundingClientRect();
      trazo.classList.add("hero-trazo");
      if (HAY_OFFSET) punta.classList.add("hero-punta");
    }

    function siguiente() {
      if (!vivo || !corriendo) return;
      i = (i + 1) % FIGURAS.length;
      arrancar();
    }

    function arrancar() {
      if (!vivo || !corriendo) return;
      pintar(i);
      clearTimeout(temporizador);
      temporizador = setTimeout(function () {
        if (!vivo || !corriendo) return;
        trazo.style.transition = "opacity " + SALIDA + "ms ease";
        trazo.style.opacity = "0";
        punta.style.opacity = "0";
        temporizador = setTimeout(siguiente, SALIDA);
      }, TRAZO + ESPERA);
    }

    function reanudar() {
      if (!vivo || corriendo || !visible || document.hidden) return;
      corriendo = true;
      arrancar();
    }
    function pausar() {
      corriendo = false;
      clearTimeout(temporizador);
    }

    /* Sin movimiento: una sola figura, entera y quieta. */
    if (reducido()) {
      trazo.setAttribute("d", FIGURAS[0].d);
      trazo.setAttribute("stroke-dasharray", "none");
      pie.textContent = FIGURAS[0].nombre;
      return { destruir: function () { vivo = false; caja.innerHTML = ""; } };
    }

    /* No gastar batería con la pestaña de fondo ni la portada fuera de vista. */
    var alCambiarVisibilidad = function () {
      if (document.hidden) pausar(); else reanudar();
    };
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
