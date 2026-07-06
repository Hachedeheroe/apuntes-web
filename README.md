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

## Fase 1 — Estructura en Drive

- [ ] Crear en Drive un árbol espejo: `Apuntes-Web/<Asignatura>/<Curso>/{Apuntes, Examenes}`
- [ ] Compartir cada carpeta como **«Cualquier persona con el enlace → Lector»** (imprescindible para el iframe)
- [ ] Copiar el `FOLDER_ID` de cada carpeta (la parte final de la URL: `drive.google.com/drive/folders/`**`ESTE_ID`**)
- [ ] Sustituir los huecos `FOLDER_ID_APUNTES` y `FOLDER_ID_EXAMENES` en cada página `.md`

**Resultado:** las secciones Apuntes y Exámenes muestran las carpetas en vivo.

## Fase 2 — Contenido curricular mínimo

- [ ] Currículo LOMLOE por asignatura-curso (resumen + enlace al decreto GVA)
- [ ] Criterios de evaluación: rellenar tabla de instrumentos y pesos por curso
- [ ] Portada: presentación breve y normas de uso

**Resultado:** cada página es útil para familias/alumnado aunque aún no haya PDFs.

## Fase 3 — Apuntes

- [ ] Volcar PDFs existentes a las carpetas Drive por curso (fuente: `~/Desktop/1-Colegio`, packs beamer FyQ 2º/4º ESO ya generados)
- [ ] Nombrado consistente: `T01-Titulo.pdf`, `T02-...` para que ordenen bien en el iframe
- [ ] Prioridad: FyQ (material ya listo) → Matemáticas → Biología

**Resultado:** sección Apuntes operativa. Cero mantenimiento futuro: subir a Drive basta.

## Fase 4 — Exámenes pasados

- [ ] Subir exámenes de cursos anteriores (anonimizados) a carpetas `Examenes`
- [ ] Opcional: soluciones en subcarpeta `Soluciones`

## Fase 5 — Calendarios

- [ ] Crear un Google Calendar por asignatura (o uno por curso si hace falta)
- [ ] Google Calendar → Configuración del calendario → «Integrar calendario» → copiar ID
- [ ] Sustituir `CALENDAR_ID` en cada página
- [ ] Añadir fechas de exámenes y entregas

## Fase 6 — Pulido (opcional)

- [ ] Dominio propio (ej. `apuntes.hugosierra.es`) — CNAME + config Pages
- [ ] Favicon y logo
- [ ] Analytics (Plausible o GA4) si interesa medir uso
- [ ] Aviso legal / protección de datos si se publican fotos o nombres

---

## Desarrollo local

```bash
pip install mkdocs-material
mkdocs serve        # previsualizar en http://127.0.0.1:8000
```

Publicar: `git push` a `main`. La Action hace el resto.
