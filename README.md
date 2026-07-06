# 📚 Apuntes — Repositorio web de asignaturas

Página web estática (MkDocs Material + GitHub Pages) que actúa como **índice público** de apuntes, exámenes y calendarios. Los archivos pesados (PDFs) **no viven aquí**: viven en Google Drive y la web los muestra embebidos en vivo.

**Web:** https://hachedeheroe.github.io/apuntes-web/

## Arquitectura

```
Google Drive  ──(carpetas compartidas, iframe en vivo)──▶  Web (GitHub Pages)
Google Calendar ──(iframe embed)──▶  Sección calendario de cada asignatura
GitHub ──(push a main → Action → deploy)──▶  Publicación automática
```

- **Drive = almacén.** Subes un PDF a la carpeta → aparece en la web solo, sin tocar el repo.
- **Web = índice.** Una página por asignatura-curso con 5 secciones fijas:
  1. Currículo LOMLOE
  2. Apuntes (carpeta Drive embebida)
  3. Exámenes pasados (carpeta Drive embebida)
  4. Calendario (Google Calendar embebido)
  5. Criterios de evaluación

## Asignaturas y cursos

| Matemáticas | Física y Química | Biología |
|---|---|---|
| 1º ESO | 2º ESO | 1º ESO |
| 2º ESO | 3º ESO | 3º ESO |
| 3º ESO | 4º ESO | 4º ESO |
| 4º ESO | 1º Bach | 1º Bach |
| 1º Bach | 2º Bach — Física | 2º Bach |
| 2º Bach | 2º Bach — Química | |

---

# 🗺️ Plan por fases

## Fase 0 — Infraestructura ✅ (hoy)

- [x] Repo GitHub + estructura MkDocs Material
- [x] 17 páginas plantilla (una por asignatura-curso) con las 5 secciones y huecos `FOLDER_ID` / `CALENDAR_ID`
- [x] GitHub Action de despliegue automático (push a `main` → web actualizada)
- [x] GitHub Pages activado

**Resultado:** web viva con estructura completa, contenido pendiente.

## Fase 1 — Estructura en Drive ✅ (automatizada vía conector Drive)

- [x] Árbol creado en Drive (cuenta `hugosierra@pcsantaana.com`): `Apuntes-Web/<Asignatura>/<Curso>/{Apuntes, Examenes}` — 55 carpetas
- [x] IDs insertados en las 17 páginas `.md` — mapa completo con enlaces en [DRIVE.md](DRIVE.md)
- [ ] **ÚNICO PASO MANUAL:** compartir la carpeta raíz [Apuntes-Web](https://drive.google.com/drive/folders/1pDBenh9iQ6y7X9v4RERRNlKkyCS9YT2E) como **«Cualquier persona con el enlace → Lector»** (se hereda a todas las subcarpetas). Si la cuenta del colegio bloquea compartir fuera del dominio, avisar y se migra a cuenta personal.

**Resultado:** las secciones Apuntes y Exámenes muestran las carpetas en vivo (tras el paso manual de permisos).

## Fase 2 — Contenido curricular mínimo ✅ (2026-07-06)

- [x] Currículo LOMLOE en las 17 páginas: resumen por asignatura-curso + enlaces oficiales (RD estatales 217/2022 y 243/2022 + Decretos GVA 107/2022 y 108/2022). FyQ 2º/3º/4º ESO y Física 2º Bach con la secuencia real de temas de la programación 2026-27.
- [x] Criterios de evaluación de **Física 2º Bach** con los pesos reales del departamento (pruebas cortas 40 %, exámenes finales 60 % con media ponderada acumulativa P1–P4, +10 % opcional).
- [x] Portada: presentación, cómo usar la web y marco normativo.
- [ ] Pendiente: pesos reales de las otras 16 asignaturas (placeholder honesto «pendiente de publicar» hasta que Hugo confirme la programación de cada una).

**Resultado:** cada página es útil para familias/alumnado aunque aún no haya PDFs.

## Fase 3 — Apuntes y exámenes ✅ (2026-07-06, material existente subido)

- [x] Material curado en staging local `~/Desktop/Apuntes-Web` y **subido a Drive** (~450 archivos): presentaciones FyQ 2º/3º/4º ESO y Física 2º Bach (T1–T11), PAU Física CV 2000–2025, PAU Química 2003–2024, PAU Biología 2010–2026, libro Bio PAU resuelto, simulacros Mates 2º Bach, banco fiquipedia FyQ 1º Bach, currículos LOMLOE y criterios por curso
- [x] Verificado en Drive: sin datos de alumnado (informes y exámenes con nombres excluidos)
- [x] Ampliado 2026-07-06 tarde: ejercicios FyQ 3º ESO, exámenes propios limpios Física 2º Bach (PRUEBA/Tn), selección PAU adicional
- [ ] **Decisión pendiente (Hugo):** soluciones de exámenes propios ya subidas a Drive (2º ESO `*_SOL`, 4º ESO, solucionarios Mates 2º Bach) — ¿se quedan públicas o se retiran? Copias también en `~/Desktop/Apuntes-Web/_NO-SUBIR_Soluciones-pendientes/`
- [ ] Huecos sin material propio: FyQ 1º Bach (apuntes), Mates 1º/3º/4º ESO y 1º Bach, Biología ESO y 1º Bach

**Resultado:** secciones Apuntes y Exámenes pobladas con todo el material existente. Cero mantenimiento futuro: subir a Drive basta.

## Fase 4 — Exámenes pasados ✅ (2026-07-06, integrada en Fase 3)

- [x] Exámenes propios limpios y PAU completas subidos a las carpetas `Examenes` (sin datos de alumnado, verificado)
- [x] Decisión soluciones (2026-07-06): **se quedan públicas** junto a los exámenes

## Fase 5 — Calendarios ⏸ (aparcada hasta el inicio del curso 2026-27, decisión 2026-07-06)

- [x] Páginas saneadas: aviso «disponible al inicio del curso 2026-27» en vez del iframe roto con placeholder
- [x] Descartados los calendarios de Classroom (Google no permite hacerlos públicos)
- [ ] **Al arrancar el curso — Hugo:** crear 3 calendarios — `Exámenes Matemáticas`, `Exámenes FyQ`, `Exámenes Biología` (Google Calendar → ⚙ → Crear calendario) y en cada uno: Configuración → **«Hacer disponible públicamente»**. Si el dominio del colegio bloquea la opción, avisar (plan B: cuenta personal)
- [ ] Cablear los `CALENDAR_ID` en las 17 páginas (detectables vía conector; plantilla comentada ya en cada página)
- [ ] Añadir fechas de exámenes y entregas (creación en bloque vía conector pasando las fechas en texto)

## Fase 6 — Pulido 🔶 (en curso, 2026-07-06)

- [x] Favicon (átomo SVG) y logo en cabecera
- [x] Aviso legal: responsable, finalidad, propiedad intelectual, datos/cookies — página propia enlazada en nav
- [x] Footer con copyright
- [x] Portada sin «en construcción»
- [ ] Dominio propio (ej. `apuntes.hugosierra.es`) — decisión de Hugo: comprar dominio (~10 €/año) o quedarse con `hachedeheroe.github.io/apuntes-web`
- [ ] Analytics — decisión de Hugo: GA4 (gratis, cuenta Google) o nada

---

## Desarrollo local

```bash
pip install mkdocs-material
mkdocs serve        # previsualizar en http://127.0.0.1:8000
```

Publicar: `git push` a `main`. La Action hace el resto.
