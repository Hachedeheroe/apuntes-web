# Encargo para Codex: mejorar el trazador de la portada

Pega este archivo entero como primer mensaje en Codex, con el repositorio
`Hachedeheroe/apuntes-web` abierto. Está escrito para que lo pueda ejecutar sin
preguntarte nada.

---

## Contexto

`apuntes-web` es una web de apuntes y exámenes de Física y Química, Matemáticas
y Biología, más el archivo completo de la PAU valenciana. Es **una sola página
estática**: `public/index.html`, sin build, sin npm, sin framework. GitHub Pages
publica la carpeta `public/` tal cual en cada push a `main`.

En la portada, junto a la entradilla, hay un cuadro que dibuja curvas en bucle.
Lo implementa `public/hero.js`. **Funciona y está en producción**: no partes de
cero, partes de algo que ya rueda. Tu trabajo es llevarlo más lejos sin
romperlo.

Míralo en https://hachedeheroe.github.io/apuntes-web/

## Archivos

| Archivo | Qué es | ¿Lo tocas? |
|---|---|---|
| `public/hero.js` | El trazador. Único archivo del encargo. | **Sí** |
| `public/index.html` | La página entera. Monta el trazador en `#hero-anim`. | Solo si el encargo lo pide explícitamente |
| `public/pau.json` | Índice de 1991 exámenes. Nada que ver con esto. | No |
| `.github/workflows/deploy.yml` | Publica `public/`. | No |

## El contrato: no lo rompas

`hero.js` se carga con `<script src="hero.js"></script>` justo antes del script
principal, y debe seguir exponiendo exactamente esto:

```js
window.heroApuntes = {
  montar: function (elemento) { /* ... */ return { destruir: function () {} }; },
  figuras: 5,              // número de figuras del ciclo
  duracionCiclo: 3620      // ms por figura, informativo
};
```

- `montar(el)` vacía `el`, construye dentro un `<svg>` y un `<p>` de pie, y
  arranca. Devuelve un objeto con `destruir()`.
- `destruir()` para todo, quita **todos** los listeners que haya puesto y deja
  el elemento vacío. La página monta y desmonta al entrar y salir de la portada:
  si dejas listeners sueltos, se acumulan.
- Todo va dentro de un IIFE. Nada más que `window.heroApuntes` toca el ámbito
  global.

## Reglas de diseño: sistema Modernist

El diseño es plano, con rejilla visible y una sola tinta de acento. **Respétalo
o el trabajo no vale.**

- **Radio de borde 0 en todo.** Nada redondeado. La punta del lápiz es un
  cuadrado, no un círculo. Si pones un `rx`, está mal.
- **Grosores:** trazo principal 2px, reglas auxiliares 1px. Nada intermedio.
- **Color:** el trazo usa `currentColor` (hereda el color del texto) y el acento
  usa `var(--acc)`. **Nunca escribas un color literal.** Así el tema claro y el
  oscuro funcionan solos. Los tokens vivos son `--pg` (fondo), `--ink` (tinta),
  `--sup` (superficie), `--rule` (regla suave), `--fuerte` (regla fuerte),
  `--sut` (texto secundario), `--acc` (acento).
- **Sin degradados, sin sombras, sin brillos, sin desenfoques.**
- Tipografía Archivo, ya cargada. El pie va en 10px, `letter-spacing:.18em`,
  mayúsculas, color `--sut`.

## Cómo está hecho ahora

Cinco figuras en bucle: tiro parabólico, onda armónica, distribución normal,
anillo bencénico y doble hélice. Cada una se traza en 1500 ms, se sostiene
1700 ms y se desvanece en 420 ms.

Dos decisiones que **debes mantener**:

1. **El trazado lo hacen animaciones CSS, no `requestAnimationFrame`.** El
   camino lleva `pathLength="1"`, así que `stroke-dasharray:1 1` y una animación
   de `stroke-dashoffset` de 1 a 0 sirven igual para todas las figuras, midan lo
   que midan. La punta se mueve con `offset-path` + `offset-distance`. Va en el
   compositor y no se queda a medias si el hilo principal se atasca. JavaScript
   solo encadena figuras con `setTimeout`.
2. **Se para cuando no se ve.** `IntersectionObserver` para cuando el cuadro sale
   de pantalla y `visibilitychange` para cuando la pestaña pasa a segundo plano.

## El encargo

Por orden de importancia. Haz 1 y 2; el 3 si te sobra tiempo.

### 1. Que las figuras se transformen unas en otras, en vez de borrarse

Ahora cada figura se desvanece y la siguiente aparece de cero. Quiero que **una
curva se convierta en la siguiente**: la parábola se dobla hasta ser la onda, la
onda se recoge hasta ser la campana, y así.

Cómo: todas las figuras se generan como polilíneas de puntos. Remuestréalas a un
número idéntico de puntos (por ejemplo 128, repartidos por longitud de arco, no
por índice) e interpola linealmente entre la figura N y la N+1, reescribiendo el
atributo `d` en cada fotograma de la transición.

Esto sí necesita `requestAnimationFrame`, y está bien: úsalo **solo durante la
transformación** (unos 700 ms), no para el trazado. El trazado sigue siendo CSS.

El anillo bencénico y la doble hélice son casos especiales: son curvas cerradas
o de ida y vuelta. Si la transformación queda fea con ellas, sepáralas — que se
tracen como ahora y solo se transformen las tres abiertas. Documenta en un
comentario qué decidiste y por qué.

### 2. Anotaciones a mano, como en un cuaderno

Que cada figura traiga dos o tres marcas que aparezcan **después** de trazarse,
con un desfase corto, y se vayan con ella:

- Tiro parabólico: la altura máxima con una línea de puntos vertical y la
  etiqueta `h_máx`, y el alcance abajo con `R`.
- Onda armónica: la longitud de onda `λ` entre dos crestas y la amplitud `A`.
- Distribución normal: las marcas de `μ` y `μ±σ` sobre el eje.
- Anillo bencénico: nada, o a lo sumo `C₆H₆`.
- Doble hélice: `3,4 nm` de paso de rosca.

Las etiquetas van en `<text>` dentro del SVG: 9px, `letter-spacing:.14em`,
mayúsculas donde tenga sentido, color `--sut`; las líneas guía en 1px punteado.
Los subíndices, con `<tspan baseline-shift="sub" font-size="7">` o similar.

Ojo: son fórmulas de instituto y las va a ver alumnado. **Que sean correctas.**
Si dudas de una, quítala en vez de inventarla.

### 3. Un par de figuras más

Solo si 1 y 2 quedan bien. Candidatas: curva de valoración ácido-base, descarga
de un condensador RC, o un tablero de Punnett. Mismo estilo, mismas reglas.

## Restricciones duras

- **Cero dependencias.** Ni npm, ni CDN, ni import de nada. Un solo archivo,
  `public/hero.js`, JavaScript de navegador sin transpilar.
- **Nada de `<canvas>`, ni WebGL, ni vídeo, ni GIF, ni Lottie.** SVG y CSS.
- **Peso:** `hero.js` no debe pasar de **16 KB** sin minificar. Ahora son 9,3 KB.
- **`prefers-reduced-motion: reduce` manda.** Con eso activo: una sola figura,
  dibujada entera y quieta, sin bucle, sin transformaciones, sin punta de lápiz.
  No es opcional.
- **Sin saltos de maquetación.** El cuadro mide lo mismo pase lo que pase. Si el
  alto cambia al aparecer una etiqueta, está mal.
- **Accesibilidad:** el `<svg>` mantiene `role="img"` y un `aria-label` que
  describa lo que se ve. Las etiquetas decorativas dentro del SVG no deben
  añadir ruido a un lector de pantalla.
- **Los dos temas.** Pruébalo en claro y en oscuro. Si has usado `currentColor` y
  `var(--acc)` como se pide, sale gratis.
- **Sin errores en consola**, tampoco al montar y desmontar repetidamente.

## Cómo probarlo

Levanta un servidor en `public/` (el `fetch` de `pau.json` no funciona con
`file://`):

```bash
cd public && python3 -m http.server 8000
# abre http://localhost:8000/
```

Comprobaciones manuales, todas obligatorias:

1. La portada dibuja y encadena las cinco figuras, y vuelve a empezar.
2. Cambias a otra pestaña de la web y vuelves a Inicio: se remonta, y **no hay
   dos SVG** dentro de `#hero-anim`.
3. Con la pestaña del navegador en segundo plano, se para; al volver, sigue.
4. Botón `OSCURO`: el trazo cambia de color solo, y la punta sigue siendo roja.
5. En móvil (ventana de 390px) el cuadro cabe y **no aparece scroll horizontal**.
6. Con movimiento reducido activado, una figura fija y nada más.

Para lo del punto 6 en macOS: Ajustes → Accesibilidad → Pantalla → Reducir
movimiento. O con Chrome sin interfaz:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --force-prefers-reduced-motion \
  --virtual-time-budget=6000 --dump-dom http://localhost:8000/ | grep -c hero-dibujar
```

Aviso sobre Chrome sin interfaz: bajo `--virtual-time-budget` **no se sirven
fotogramas de `requestAnimationFrame`**. Una animación basada en rAF se congela
a mitad y parece rota cuando en un navegador de verdad va bien. Por eso el
trazado es CSS. Si añades rAF para las transformaciones (punto 1), **no
intentes validarlo con capturas sin interfaz**: compruébalo en un Chrome normal.
Lo que sí puedes validar sin interfaz es el encadenado, porque va con
`setTimeout`, leyendo el texto del pie cada 150 ms y viendo que cambia.

## Criterios de aceptación

- [ ] Las cinco figuras se encadenan en bucle, sin cortes ni parpadeos.
- [ ] Al menos las tres curvas abiertas se transforman una en otra.
- [ ] Cada figura lleva sus anotaciones, correctas, y desaparecen con ella.
- [ ] Radio 0, trazo de 2px, sin colores literales, sin degradados.
- [ ] `window.heroApuntes.montar/destruir` se comporta igual que antes.
- [ ] Montar y desmontar veinte veces no deja listeners ni SVG sueltos.
- [ ] Con movimiento reducido: una figura quieta.
- [ ] `hero.js` por debajo de 16 KB.
- [ ] Consola limpia.

## Qué no hacer

- No toques `public/pau.json`, `public/index.html` (salvo lo imprescindible para
  montar), `mkdocs.yml`, `docs/` ni el workflow.
- No añadas herramientas de build, linters ni configuración.
- No cambies los colores, la tipografía ni el espaciado de la página.
- No metas la animación en otras pestañas: es solo de la portada.
- No subas nada a producción sin pasar las seis comprobaciones de arriba.

## Publicar

El despliegue es automático: al hacer push a `main`, el workflow sube `public/`
y en un minuto está en producción.

```bash
git add public/hero.js
git commit -m "Trazador: transformación entre figuras y anotaciones"
git push origin main
```

Si algo sale mal en producción, se revierte con `git revert` y push: el workflow
vuelve a desplegar solo.
