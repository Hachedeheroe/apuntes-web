/* Catálogo de asignaturas — Apuntes (H. Sierra)
   ------------------------------------------------------------------
   Cada asignatura tiene SIEMPRE las mismas seis secciones, en el mismo
   orden. Si una está vacía se pinta igualmente, marcada como pendiente:
   la estructura es la misma en toda la web, cambia solo lo que hay dentro.

   Documento = [ título, idDrive, etiqueta, restringido ]
     · idDrive     abre https://drive.google.com/file/d/<id>/view
     · etiqueta    lo que se lee a la derecha de la fila (PDF, VÍDEO, DOCX…)
     · restringido 1 = vive fuera del árbol público (1-ALUMNADO); Drive pedirá
                   cuenta autorizada. La web no protege nada: el muro es Drive.

   `pau` enlaza la asignatura con el archivo público de la PAU (public/pau.json),
   del que se listan los exámenes de otros años sin duplicar IDs aquí.

   Mapeado desde Drive el 30 de julio de 2026 sobre el árbol 1-ALUMNADO
   (y 2-SIMULACROS para los simulacros de ESO, que son material del centro). */

window.APUNTES_CURSOS = (function () {
  "use strict";

  var SECCIONES = [
    ["curriculo",      "Currículo LOMLOE",       "La norma oficial que fija qué entra en el curso."],
    ["criterios",      "Criterios de evaluación", "Cómo se califica: instrumentos y pesos."],
    ["presentaciones", "Presentaciones",          "Las diapositivas de clase, tema a tema."],
    ["libro",          "Libro de la asignatura",  "El manual completo del curso."],
    ["ejercicios",     "Ejercicios por temas",    "Boletines de problemas para practicar."],
    ["simulacros",     "Simulacros de examen",    "Exámenes de otros años para prepararte."]
  ];

  var A = [];

  /* ============================================================ FÍSICA Y QUÍMICA */

  A.push({
    id: "fyq-2eso", materia: "fyq", nivel: "eso",
    nombre: "Física y Química", curso: "2º ESO",
    nota: "Presentaciones «para el 10» de los siete temas y batería de simulacros por tema.",
    pau: null,
    doc: {
      curriculo: [["Currículo LOMLOE · Física y Química 2º y 3º ESO", "1oIR5n_31Jp5r0piQd_1wPp3wR1lg1uEx", "PDF", 0]],
      criterios: [["Criterios de evaluación", "1Z_HGFL85di5x-6itE_7M2Ec0rOVy0Hbx", "PDF", 0]],
      presentaciones: [
        ["Tema 1 · La materia y su medida", "1R_9T74pt6EcTKisSf5B_4Yya_FV-_a3Q", "PDF", 0],
        ["Tema 2 · Estados de la materia y gases", "1HBnIq1QZ9kQlI_G2VsrbQIyE1cvz21q4", "PDF", 0],
        ["Tema 3 · Disoluciones", "1cn2kzNIa4SkA0hAO2oElcEw0Lp7Axjkw", "PDF", 0],
        ["Tema 4 · Tabla periódica", "1EXBvS1qyyEZCnz5LeJMDwpGCi7HMCSGs", "PDF", 0],
        ["Tema 5 · Reacciones químicas", "1RnxBItKnEn1q0ELLGUYIW-x0grOdUsMh", "PDF", 0],
        ["Tema 6 · Movimiento", "15Yhc757c3bL4j0Tyw16669NyfoadjNjN", "PDF", 0],
        ["Tema 7 · Fuerzas e interacciones", "1OiMZGVBiim7820B73nEt5Hck6nWfH16p", "PDF", 0]
      ],
      libro: [],
      ejercicios: [],
      simulacros: [
        ["Tema 2 · Estados de la materia — simulacro 1", "1MJ6fyUPaqQb2XmuP9PRpJoGSwW5Q0DXn", "PDF", 1],
        ["Tema 2 · Estados de la materia — simulacro 2", "1-6cRIwJhL9SpmbY1IiN5czowPt_N1bhl", "PDF", 1],
        ["Tema 2 · Estados de la materia — simulacro 3", "1itfAzvPOitVkG4Ai1VHsJD_K5a8GwlwH", "PDF", 1],
        ["Tema 3 · Disoluciones — simulacro 1", "1l0HPE_YvgFCYXEdrMyxU3zokzlxyC8G-", "PDF", 1],
        ["Tema 3 · Disoluciones — simulacro 2", "1UngfR3sXG1mxeMNL9aXyufYlCYThLagg", "PDF", 1],
        ["Tema 3 · Disoluciones — simulacro 3", "1pFi8_bxS2EckXQNdw8wd7TFyOB7ltaTw", "PDF", 1],
        ["Tema 4 · Tabla periódica — simulacro 1", "1QdyE63GehX5d4ygr-uv-ail_LyV9Zr-7", "PDF", 1],
        ["Tema 4 · Tabla periódica — simulacro 2", "17q0LOJA7Jmh_r5zP7S3qvjIT9KC3wIoo", "PDF", 1],
        ["Tema 4 · Tabla periódica — simulacro 3", "1_P_RdirMjw1FrXEN4u2T7x47M59F5CRN", "PDF", 1],
        ["Tema 5 · Reacciones químicas — simulacro 1", "1AdNqFA2NfuXPNpc0cN6cTmDFIMm4u5x6", "PDF", 1],
        ["Tema 5 · Reacciones químicas — simulacro 2", "1sA25Rcn96zkXJhJR5KOc-zKa50kuAsvY", "PDF", 1],
        ["Tema 5 · Reacciones químicas — simulacro 3", "141j97CsIxiFzeRRIP3WJ7QREsCMm9kjZ", "PDF", 1],
        ["Tema 6 · Movimiento — simulacro 1", "15E2RPP8ty-cmgU7vjF9RFmXSWxEXl1Go", "PDF", 1],
        ["Tema 6 · Movimiento — simulacro 2", "1OCJgtgBzJOEp5g2vDZrsopuU1neulYs_", "PDF", 1],
        ["Tema 6 · Movimiento — simulacro 3", "1NTjPedwqfHNvWqeDwU5Fc-0Q5iOjVIOb", "PDF", 1],
        ["Tema 7 · Fuerzas e interacciones — simulacro 1", "1ZrHfCJo6DJ5lmjTtDHg8FyiqYBqq24A1", "PDF", 1],
        ["Tema 7 · Fuerzas e interacciones — simulacro 2", "1vc6ew3snfd9ItBGFcBRzsxguCFJbkh0B", "PDF", 1],
        ["Tema 7 · Fuerzas e interacciones — simulacro 3", "1G9NDqntaYA7ovDciCyV_APSRhY-wxREl", "PDF", 1],
        ["Propiedades de la materia — simulacro 1", "1O5iEdL5aVdLO4utlSJKOJvzT3aIJ-9hM", "PDF", 1],
        ["Propiedades de la materia — simulacro 2", "14GndGn9nHZxpB04Udw1NnQoqQIn4ryQf", "PDF", 1],
        ["Propiedades de la materia — simulacro 3", "1n5T5-6I7m95xz_d_yuGwpjg4I8x8HPqd", "PDF", 1]
      ]
    }
  });

  A.push({
    id: "fyq-3eso", materia: "fyq", nivel: "eso",
    nombre: "Física y Química", curso: "3º ESO",
    nota: "Ocho temas con presentación y boletín de ejercicios emparejados.",
    pau: null,
    doc: {
      curriculo: [["Currículo LOMLOE · Física y Química 2º y 3º ESO", "1SNZBv46vDckOrVrFmMAOXIqstgcSvcO_", "PDF", 0]],
      criterios: [["Criterios de evaluación", "1Q2mYY6e4iy8-Uk-JODxntgH8tTVi3gON", "PDF", 0]],
      presentaciones: [
        ["Tema 1 · Método científico y medida", "1h27bu2ivztg7_tDaSu_rIVp1NPmVvC-b", "PDF", 0],
        ["Tema 2 · El átomo", "1EJ04Z7DSXioyxg6sGJ_d3EosKdDdu6ly", "PDF", 0],
        ["Tema 3 · Tabla periódica", "13m4C1c_pRzyXvTiHqRiWuFMhYbfTNdox", "PDF", 0],
        ["Tema 4 · Formulación inorgánica", "16sDmgaN5LiSk7CejFOdZCs2sQpC2HhXP", "PDF", 0],
        ["Tema 5 · Reacciones químicas", "1p5zgr-xFFsmQWDMium6Si4-VsdtRU_ye", "PDF", 0],
        ["Tema 6 · Energía y calor", "1qllmwCULLn3KPfNrI3Q9XPTWBWbni--J", "PDF", 0],
        ["Tema 7 · Circuitos eléctricos", "1QVsVDewI5DuOtVWrDoq_4lX8YlR901hU", "PDF", 0],
        ["Tema 8 · Electricidad y magnetismo", "18ZnbPWjTFHmlWfbomgB5U1eEsMVwpQI5", "PDF", 0]
      ],
      libro: [],
      ejercicios: [
        ["Tema 1 · Método científico y medida", "1zhxEVRTHudrtYsRU2eGJmwG8pIs4Iev5", "PDF", 0],
        ["Tema 2 · El átomo", "15N94Jbrvbpn5-ssxWf5I_2XPwWCDM-J_", "PDF", 0],
        ["Tema 3 · Tabla periódica", "1jNRyG8bIVLwilS2VPN__7JtQFMU0go1g", "PDF", 0],
        ["Tema 4 · Formulación inorgánica", "1kIYB2KoN30x5I2YCjyXFj9NWpaIL_ySh", "PDF", 0],
        ["Tema 5 · Reacciones químicas", "1H-tE0xcHSom8ZgyBjhcYZdpBrl_2SiPS", "PDF", 0],
        ["Tema 6 · Energía y calor", "1mXFEHMXnuKLjMefw3PT9LaDl-Qqa1uqm", "PDF", 0],
        ["Tema 7 · Circuitos eléctricos", "1YUEJFfSuEexMA8efx9j3KDXRCZgT4mNk", "PDF", 0],
        ["Tema 8 · Electricidad y magnetismo", "1dULHguCa_2ETZIlLEaYRbN-OBXExNp7O", "PDF", 0]
      ],
      simulacros: []
    }
  });

  A.push({
    id: "fyq-4eso", materia: "fyq", nivel: "eso",
    nombre: "Física y Química", curso: "4º ESO",
    nota: "Curso 2026-27 completo: libro del alumno, diez temas con presentación y boletín, y los exámenes del curso pasado.",
    pau: null,
    doc: {
      curriculo: [["Currículo LOMLOE · Física y Química 4º ESO", "1YiX0QAvfddOzK67cDWZFmGTtlO5qgYx7", "PDF", 0]],
      criterios: [
        ["Criterios de evaluación 2026-27", "1cOl2mAp8njGpgH1peFxubdU4Fos40LJx", "DOCX", 0],
        ["Criterios de evaluación 2025-26", "1iZAK7pRnNJ6mRDbwuaabIzsgCuGtvtEB", "PDF", 0],
        ["Criterios de calificación (resumen)", "1sk-AHkHccVP1txeXgCjjiUF47Oi5RbgH", "PDF", 0]
      ],
      presentaciones: [
        ["Tema 0 · Materia, laboratorio y disoluciones", "1TJOQs_StEL2fkHsYuBZ-0H_U0vhVuiMb", "PDF", 0],
        ["Tema 1 · Estructura atómica", "1Yrg_zOwNrV2etTvx9El4joRhM49bLgzq", "PDF", 0],
        ["Tema 2 · Enlace químico", "193Jbu797fer6pvVAev7mjcfkR84_wrCZ", "PDF", 0],
        ["Tema 3 · Formulación inorgánica", "1sQiy9HmOQeNBkz47KBaXeBsT0Jd5VXrc", "PDF", 0],
        ["Tema 4 · Reacción química y estequiometría", "1g8SFMlEwN6Sygtj6nHKAQiIyhaL2xl66", "PDF", 0],
        ["Tema 5 · Química orgánica", "1WtroffnAjWXPxRhM2DDu9pkhrJI8oyAh", "PDF", 0],
        ["Tema 6 · Cinemática", "1CB9nxzVG-1i_xgT2NZw2XnG34Edi_qta", "PDF", 0],
        ["Tema 7 · Dinámica", "1p71N6GPzYh3sO0Un7CJNmNXhcJ7PYAr0", "PDF", 0],
        ["Tema 8 · Fuerzas y fluidos", "1GbkJYAev4Ss-L-RXa29xRC631o1J_bh0", "PDF", 0],
        ["Tema 9 · Trabajo, energía y ondas", "1hc1vwAGBoIJgh4xHavBPrswGkEE2Qyxa", "PDF", 0]
      ],
      libro: [["Libro del alumno · Física y Química 4º ESO 2026-27", "1nr8OS9YMXVadfiJXW9hiPI5CFv37S5NV", "PDF", 0]],
      ejercicios: [
        ["Tema 0 · Materia, laboratorio y disoluciones", "1tm-KXxfULIdc-tNyLnK4XEbdl3nLaLS8", "PDF", 0],
        ["Tema 1 · Estructura atómica", "15FvH8fU9tX6KR0hPs9M1MxGRU_wNihM2", "PDF", 0],
        ["Tema 2 · Enlace químico", "1a5BdBbX-dt_McCwNClko0WY_ubX7BsBN", "PDF", 0],
        ["Tema 3 · Formulación inorgánica", "1hJW_BqTgtJeEiFYZguXm1eY0d3LI8pGM", "PDF", 0],
        ["Tema 4 · Reacción química y estequiometría", "1MW_gSeHeelo7BZv-dewYm-pw97Kx095H", "PDF", 0],
        ["Tema 5 · Química orgánica", "1TpQd4fmeNnQOuBRUU6QZaSDIEssNOetV", "PDF", 0],
        ["Tema 6 · Cinemática", "1dV0PHBJONbiXdZ0tSSmXMp1oApDISgZw", "PDF", 0],
        ["Tema 6 · Movimiento circular (MCU)", "1oGf6zGDPe7u8Tm3pjm8niK4QMEHIBFv5", "PDF", 0],
        ["Tema 7 · Dinámica", "1tnUboir9uqUSghWBtl3iLDnXddodTw3k", "PDF", 0],
        ["Tema 8 · Fuerzas y fluidos", "1LGwx__b2XVNXaRtgxv-w31nwYYg-cwGR", "PDF", 0],
        ["Tema 9 · Trabajo, energía y ondas", "1bOLx2_HcYfBtxoeTiN07Icd-36zZK-xF", "PDF", 0]
      ],
      simulacros: [
        ["Tema 1 · Estructura atómica — examen 2024-25", "1pPYMJcySQuA7EgEc3L3xS4-wQgKbjMwK", "PDF", 0],
        ["Tema 1 · Estructura atómica — examen 1 (2025-26)", "1_9T0a25N6aZbYKQct3LFuDo5YhYxB1tW", "PDF", 0],
        ["Tema 1 · Estructura atómica — examen 2 (2025-26)", "17FFLLV5LCYqDgSbGoejDAuwhTeCDWR0r", "PDF", 0],
        ["Tema 1 · Estructura atómica — simulacro 1", "1_znxzTqYQDwRw8ms7skBoI-xRIk3G_F2", "PDF", 0],
        ["Tema 1 · Estructura atómica — simulacro 2", "1nYgT7-q-dbToIZSPJKoMCgw6qDNy9OYp", "PDF", 0],
        ["Tema 1 · Estructura atómica — simulacro 3", "1q_dHer3x0kVrAnvMkRjQ12suu3KVUlwV", "PDF", 0],
        ["Tema 2 · Enlace químico — examen 2025-26", "1DyjszAXmGmXF51fvdUGw52dfj9sm_EwE", "PDF", 0],
        ["Tema 2 · Enlace químico — simulacro 1", "1rfBlSG7zA1o96A_i1r7PzfyRNwq4sP-M", "PDF", 0],
        ["Tema 2 · Enlace químico — simulacro 2", "1CwLr0XuKPCpwUgpoxg4DMndQK9Ohk_mp", "PDF", 0],
        ["Tema 2 · Enlace químico — simulacro 3", "18JRO56axOp06UZePtnKiUX_QI7Zu7Ljp", "PDF", 0],
        ["Tema 3 · Formulación inorgánica — examen 2025-26", "1TLMFKrah0wgqulqGk2MmvnFCFiFEm8P2", "PDF", 0],
        ["Tema 3 · Formulación inorgánica — simulacro 1", "1WKfdP5bvg3UDFcIozAlwpZLkv2SLUaqF", "PDF", 0],
        ["Tema 3 · Formulación inorgánica — simulacro 2", "1yHkDYwUuuwx6YAFjaq-hTQkjyShwhKSN", "PDF", 0],
        ["Tema 3 · Formulación inorgánica — simulacro 3", "1Agt6ustbMVrqgA6hOzAPNhjnnUlOQlQI", "PDF", 0],
        ["Tema 4 · Estequiometría — simulacro", "1TQYlpzRTNs6DP446zqqUSBBDwS7RaIsZ", "PDF", 0],
        ["Tema 5 · Química orgánica — examen 2025-26", "190_VgId0bit2JdyYKSonuznO19Xzvg8q", "PDF", 0],
        ["Tema 6 · Cinemática MRU — examen 2025-26", "1BG-IwsR-ScRVSn0krLuB0RUwU0uPP2fM", "PDF", 0],
        ["Tema 6 · Cinemática MRUA — examen 1 (2025-26)", "1n5SbO4k9wyBcMMgHPruRyPksJckPyMR1", "PDF", 0],
        ["Tema 6 · Cinemática MRUA — examen 2 (2025-26)", "1rk3EnvRoZLfK1P-RtB49Bid3gTq6o3tA", "PDF", 0],
        ["Tema 6 · Cinemática MRUA — simulacro 1", "16uqDYNJaYfLeFyevfKPc7CGMa7uNm_5u", "PDF", 0],
        ["Tema 6 · Cinemática MRUA — simulacro 2", "1sdNhxsVt3NAVtbbnVRX1mu70no-_6K51", "PDF", 0],
        ["Tema 6 · Cinemática MRUA — simulacro 3", "1OuThEoZvHMOaRqyHE10e86ZGlRzLujmS", "PDF", 0],
        ["Tema 7 · Dinámica — examen 2025-26", "1rZ6cJTRRITt292b64tZRukboa0jKkI2F", "PDF", 0],
        ["Tema 7 · Dinámica — simulacro 1", "1yeWHvCTFYykoiVbiw11fDUsSM23CAODg", "PDF", 0],
        ["Tema 7 · Dinámica — simulacro 2", "1MSR1EV_Qh5gmL34KqiKXPDBXZ6LtA59B", "PDF", 0],
        ["Tema 7 · Dinámica — simulacro 3", "1ZLUaAT4n_glrBGpkWjeXDj3RqO64U_HG", "PDF", 0],
        ["Tema 7 · Dinámica — simulacro 4", "1QofeFIwmbVMVepB-BTqwQbXO0HGfkRwn", "PDF", 0]
      ]
    }
  });

  A.push({
    id: "fyq-1bach", materia: "fyq", nivel: "bach",
    nombre: "Física y Química", curso: "1º Bachillerato",
    nota: "Curso 2026-27: métodos paso a paso, banco de ejercicios y los diez exámenes del año. Sin presentaciones todavía.",
    pau: null,
    doc: {
      curriculo: [["Currículo LOMLOE · Física y Química 1º Bachillerato", "16QT6lq9jt5b6KjoNX-fxjR0OxxRWOeLM", "PDF", 0]],
      criterios: [["Criterios de evaluación 2026-27", "1fKClDIkGuh4V-KEpIRKm1tX2BZc3evet", "PDF", 0]],
      presentaciones: [],
      libro: [["Métodos paso a paso · Física y Química 1º Bachillerato", "1KqciIhoP2MfcMmRMxwZQFUc0xnwE0QUy", "PDF", 0]],
      ejercicios: [
        ["Banco de ejercicios del curso", "16gNFxeHkfmP_RSHCCVenHCCnjfNDKL8e", "PDF", 0],
        ["Formulación orgánica · cuaderno completo", "1jVQ5Fzwa6gEDv2SpC5h3g9KAVAMRmeJP", "PDF", 0]
      ],
      simulacros: [
        ["1ª evaluación · Prueba 1 — Cinemática", "1PsmcbLqirhBm-K8gR1_5snWqTuCYnl7I", "PDF", 0],
        ["1ª evaluación · Prueba 2 — Dinámica y energía", "15fJ26qP1A3HPqYuJEksoFb9HamWT9kze", "PDF", 0],
        ["1ª evaluación · Global", "1GpFvLekWXenx0M3rwr9iotL_r-0H9pr9", "PDF", 0],
        ["2ª evaluación · Prueba 1 — Formulación", "1cffNxFUUdorZ6lR7XGzi4mWnDkJ7-W0C", "PDF", 0],
        ["2ª evaluación · Prueba 2 — Átomo y sistema periódico", "1EGQWKIpCIDgQ732SmzjNvg5hKgtqkd74", "PDF", 0],
        ["2ª evaluación · Global", "1mgogyZSAkTFERBKwzz7ZhqSMdt32SdI4", "PDF", 0],
        ["3ª evaluación · Prueba 1 — Estequiometría", "1CgUkg106V5I9p62jFeaea_s20fXYir9B", "PDF", 0],
        ["3ª evaluación · Prueba 2 — Enlace químico", "1EMBnj-zkGhmQ8ADoqs6JXtMOZ2G4zF5j", "PDF", 0],
        ["3ª evaluación · Global", "1v0SNi9aIsHbcnBngtrZuU_Q6JqUH8lR8", "PDF", 0],
        ["Final de curso", "1ByWkZF4fW3q4FXvG9FfrTk-EzdCFwR54", "PDF", 0],
        ["Modelo · Formulación orgánica 1", "1rv8KCJIJjJg8lrPr-WLlN5o3rQ0T3HYE", "PDF", 0],
        ["Modelo · Formulación orgánica 2", "1qx7BXlV8dAqJhm4EHPIPb3QcBdcUfqW0", "PDF", 0],
        ["Modelo · Formulación orgánica 3", "1lcIZfzzh_Ctftgv6qZtMz6EqjEnI-5sy", "PDF", 0],
        ["Banco fiquipedia · Cinemática — Roberloko16", "1LGlmhDjNaYGMXj0rkyMyiSdgWFzAwsgR", "CC", 0],
        ["Banco fiquipedia · Cinemática — Rumanía", "1Hel5lsTM9VjpNpVzwLoEWTJObSlDZcWn", "CC", 0],
        ["Banco fiquipedia · Cinemática — Mickey Mouse", "13Zsd6zHZqMZOBLPBkuQisTNSr1E3jRXY", "CC", 0],
        ["Banco fiquipedia · Cinemática — Xavi Hernández", "1TA7GqbflJNA15n-H7xuUg0Ufk8kEkWn_", "CC", 0],
        ["Banco fiquipedia · Dinámica — Jujutsu Kaisen", "1WfeRJna5-VGejoD4cL313nRylVTIhk2C", "CC", 0],
        ["Banco fiquipedia · Dinámica — Hazbin Hotel", "1da4e7P38ODQg9hndtDpZJVq2WkzsIHCD", "CC", 0],
        ["Banco fiquipedia · Dinámica — Gossip Girl", "1NgGiEJPQbeEqdtNuvPipkvYva63_ligC", "CC", 0],
        ["Banco fiquipedia · Termoquímica y cinemática — La sociedad de la nieve", "1ZH51ThWuglKHHZu0Dt50TpMgvhuby4kO", "CC", 0],
        ["Banco fiquipedia · Termoquímica y dinámica — Brawl Stars", "1KqED1n4EQG79L77Gh7DJWr2hliGeONfj", "CC", 0],
        ["Banco fiquipedia · Estática — OT 2023", "1YgkqpKjArC3KgJT00Bv2BDDdwhHwkr1o", "CC", 0],
        ["Banco fiquipedia · Estática — Outlander", "1fUQlj2BsyuNCqAn7J26ZBQz4esWWRA7F", "CC", 0],
        ["Banco fiquipedia · Estática — Voleyball", "1Oph53GtCHvZKadaOiwBAKISTDsG5pDwA", "CC", 0],
        ["Banco fiquipedia · Energía — Baloncesto", "1xeAFKdJUHYL5Li8N-8SCZx1yKqPo54ok", "CC", 0],
        ["Banco fiquipedia · Energía — Jordi Wild", "1RhyFst_1kdh1tBzKt940NyZrTQWGunD0", "CC", 0],
        ["Banco fiquipedia · Energía — South Park", "1mE3iX21ya8gtcRYUk3f3oDhaxLHKXy3r", "CC", 0],
        ["Banco fiquipedia · Energía — Jessie", "1JZ2xWfbbV5pnmt5ROBe2037RPLBOQ4VZ", "CC", 0],
        ["Banco fiquipedia · Termodinámica — Van Gogh", "1wUP4od_iD3FhnA8WIomEhF0FJG5XDhjl", "CC", 0],
        ["Banco fiquipedia · Termodinámica — Tom and Jerry", "1MKYk94F0BPYNw4rG_fAQM9IMdnchZcQY", "CC", 0],
        ["Banco fiquipedia · Termodinámica — Outer Wilds", "1ns7o-Zlw3sGlbfiw9GdGvBcuYUSJjC13", "CC", 0],
        ["Banco fiquipedia · Termodinámica — Bebés de plástico", "1SODfY88TJjlNdgRS1sH3a2sMg65_nOlj", "CC", 0],
        ["Banco fiquipedia · Final — Croquetas", "1rOLaibELTIJPTrU04_0bD85VY1PEZl8t", "CC", 0],
        ["Banco fiquipedia · Estática, energía y termodinámica — Croquetas", "1V8IoYMbkWjFi3M21yM5Af-Kgttq7jzRA", "CC", 0]
      ]
    }
  });

  A.push({
    id: "fis-2bach", materia: "fyq", nivel: "bach",
    nombre: "Física", curso: "2º Bachillerato",
    nota: "Once temas de teoría, el libro completo y el archivo oficial de la PAU valenciana.",
    pau: "Física",
    doc: {
      curriculo: [["Currículo LOMLOE · Física 2º Bachillerato", "1DC2Bkhu3A0BbqJfwSS-HSGwLcwnT9cVj", "PDF", 0]],
      criterios: [["Criterios de evaluación", "1ufUS74QSb4jhxbILNGb1dGX2idLrscCq", "PDF", 0]],
      presentaciones: [
        ["Tema 1 · Las matemáticas de la física", "1I3DIfAdK-WOfp_syA2RWCuZODnmL5LDN", "PDF", 0],
        ["Tema 2 · Gravitación universal", "1JCQEjUh8GPPB5i29dTvnPzKG5M95g4Kp", "PDF", 0],
        ["Tema 3 · Movimiento armónico simple y energía", "13fJaSxPewSxkajjxNmGQXo2SkqhyRVJ-", "PDF", 0],
        ["Temas 4-5 · Ondas y fenómenos ondulatorios", "1oDns4Z3vQCTyeO6zhMJenr0Ypfm6B5th", "PDF", 0],
        ["Tema 6a · Óptica geométrica", "1_WaNYrni8IqTvSvc9aNINreQkzPiBUL_", "PDF", 0],
        ["Tema 6b · Óptica física", "1HdiH3uk7Z1nIf0et02lenaBs4mJUbFTt", "PDF", 0],
        ["Tema 7 · Campo eléctrico", "1mNUZzAi3DsoPCk3QutCD6xPkwIzGqiQj", "PDF", 0],
        ["Tema 8 · Electromagnetismo", "1Dvi56oGOH-WfgQAweUZIQPfqdtMbwFLx", "PDF", 0],
        ["Tema 9 · Relatividad", "1orSXE0y8ZJFhasp2skH9M94FThiMC2NU", "PDF", 0],
        ["Tema 10 · Física cuántica", "11kUJYDR8yFs-XhGzkBEMcUvjatis78Hf", "PDF", 0],
        ["Tema 11 · Física nuclear", "1ps9qi3yFhlow0_ZkMDX3jkBvjlgJ8inO", "PDF", 0]
      ],
      libro: [
        ["Libro de Física 2º Bachillerato", "1rVr8b8ZmFx0aeHIC4YGCROU3wfG1CXbG", "PDF", 0],
        ["Selectivos PAU resueltos 2000-2025", "1eUv_jiR2OtFjNYav6658Eo59FwqZBpC2", "PDF", 0]
      ],
      ejercicios: [],
      simulacros: [
        ["Recopilatorio PAU València 2000-2026", "1PKTlln3lLj4e2yUOsuw_vWcYfuqvYFBn", "PDF", 0],
        ["Modelo de examen PAU 2026", "1HovysFGHN50ILDaP1wlqTC1ZkwfahK4a", "PDF", 0],
        ["Guía PAU València 2010", "141-iOIAFq4z7l-ZTzthrepOxI8o4f6Sn", "PDF", 0],
        ["Orientaciones y programa 2012", "1X-glyc1KTNlSW_nj5pR4J_gqOAsr41Ww", "PDF", 0]
      ]
    }
  });

  A.push({
    id: "qui-2bach", materia: "fyq", nivel: "bach",
    nombre: "Química", curso: "2º Bachillerato",
    nota: "Currículo, selectivos resueltos y el archivo oficial de la PAU.",
    aviso: "Segunda fase: faltan por subir criterios, presentaciones y ejercicios.",
    pau: "Química",
    doc: {
      curriculo: [["Currículo LOMLOE · Química 2º Bachillerato", "1belPKCII3ESwPzWN4emRcxhSPK0BTWJ6", "PDF", 0]],
      criterios: [],
      presentaciones: [],
      libro: [["Selectivos PAU de Química resueltos 2010-2026", "1ew1LqNL_---_NdwimSqrpDXEMKTGY-bm", "PDF", 0]],
      ejercicios: [],
      simulacros: []
    }
  });

  /* ==================================================================== MATEMÁTICAS */

  A.push({
    id: "mat-2eso", materia: "mat", nivel: "eso",
    nombre: "Matemáticas", curso: "2º ESO",
    nota: "Presentaciones y vídeos por tema, listados de ejercicios por evaluación y simulacros de las tres evaluaciones.",
    pau: null,
    doc: {
      curriculo: [["Currículo LOMLOE · Matemáticas ESO", "12DbOzVEagwGMPicAYzo7WdCeOZ-YwCC_", "PDF", 0]],
      criterios: [["Criterios de evaluación", "17TGAIJkLby3rLsAyEb838Q83y5cCcyeH", "PDF", 0]],
      presentaciones: [
        ["Tema 1 · Enteros y divisibilidad", "1de_ApqNHEScGY9vPxnN7lDpbBBn8Jj20", "PDF", 0],
        ["Tema 3 · Potencias y raíces", "19tIM1-7bLJfinMiDZDF-dDz9j1PmxU9o", "PDF", 0],
        ["Tema 4 · Monomios y polinomios", "1ksjX8IWisyz5yPUaK5TTixX1dB5v9L-X", "PDF", 0],
        ["Tema 5 · Ecuaciones y sistemas", "10fwVXDqMeuqb57OmRt1l-NWcaXGD0jv4", "PDF", 0],
        ["Tema 6 · Proporcionalidad y porcentajes", "1-HSERBKOmdpEwjJxYQGjwnar9hyWo2mP", "PDF", 0],
        ["Tema 7 · Funciones y gráficas", "10izEqJJvF5XNg2CRap16EG5DFl8G45J3", "PDF", 0],
        ["Tema 8 · Geometría", "12OaoGgaXTyuUEuOoMs2gg8HXsd3G0Mx2", "PDF", 0],
        ["Tema 9 · Estadística y probabilidad", "1f4zLp1XCwNSk0nffnmGAVvrPKln6EYKQ", "PDF", 0],
        ["Vídeo 1 · Tema 1 — La recta de los enteros", "1FWJLzAuulmr0YyR1sF-I6IpYbaEqtDZI", "VÍDEO", 0],
        ["Vídeo 2 · Tema 5 — La balanza de las ecuaciones", "1Y-_tzc6h5zv-l6YkaNarYqU1wkADP5Sf", "VÍDEO", 0],
        ["Vídeo 3 · Tema 8 — Pitágoras", "1q-_tfYLix1DDgTyMc1w-hSaWXfRKuSMm", "VÍDEO", 0],
        ["Vídeo 4 · Tema 2 — Fracciones a la vista", "1LDYhW1XGm1UD6yZLPYUVFFEaqLCuJr43", "VÍDEO", 0],
        ["Vídeo 5 · Tema 3 — Potencias a la vista", "1247UjS76ZNUOJ77_VeP5hYTd_V6UJzUE", "VÍDEO", 0],
        ["Vídeo 6 · Tema 4 — Monomios con fichas", "1VG3zLo055oEJ1goupIxcps15wRIEkVug", "VÍDEO", 0],
        ["Vídeo 7 · Tema 6 — Regla de tres", "1Iq1PDy0Yw79vWvY4CJaFSuH6LE1bfSth", "VÍDEO", 0],
        ["Vídeo 8 · Tema 7 — De la máquina a la gráfica", "1DKHgxstcikl4ujQKj-Av4_pPRMZBmhlt", "VÍDEO", 0],
        ["Vídeo 9 · Tema 9 — La bolsa de la probabilidad", "1BW7JBOiP79rWD9HIbc1wIKD2J-7GPLXs", "VÍDEO", 0]
      ],
      libro: [],
      ejercicios: [
        ["1ª evaluación · Listado 1", "1dfr8-UYyyYMEEslfGPVvVA81Usuicdfg", "PDF", 0],
        ["1ª evaluación · Listado 2", "1nl-B00dCNqQomUwdS6Urep1VN9MxmGiX", "PDF", 0],
        ["1ª evaluación · Listado 3", "1zfgKGZ32g7q4Dlt0R-bduNTCJfThvXrK", "PDF", 0],
        ["2ª evaluación · Listado 1", "12ALAQPllE8YuizdzsbyoU59Ka6fHxCv-", "PDF", 0],
        ["2ª evaluación · Listado 2", "11JYIdILijAdDX-6Gv1AxcC7bUiBxTwmQ", "PDF", 0],
        ["2ª evaluación · Listado 3", "1HFGPR5hJNt9U4tVW9TDuIKem1QdmfegH", "PDF", 0],
        ["3ª evaluación · Listado 1", "16ofQ18k75ifR0-cpFc8m0oLGPdJwLRpX", "PDF", 0],
        ["3ª evaluación · Listado 2", "1XbrU71Thq3uTNAgg3swGVWHHiLhz_bU0", "PDF", 0],
        ["3ª evaluación · Listado 3", "1kAFwYdzwbFpsZ1I3oUPoGt0_TfRO9gpG", "PDF", 0],
        ["3ª evaluación · Tema 9 — Estadística y probabilidad", "1wbSABK-XPw_RTlAXi7W_OEQbzBeIi2t6", "PDF", 0],
        ["Ejercicios de m.c.d. y m.c.m.", "1uIcdVpnrNYoSht6Olg8S160-pd4RF_2Z", "PDF", 0],
        ["Ejercicios de repaso · 2ª evaluación", "1IIBCq3oC0dApyRzkNx1S4shJQgBOEHiF", "PDF", 0],
        ["Actividad · Decimales y presupuesto", "1ynrL7QwQ0l-OEjmPcO6X5ybyPeOam2Ct", "PDF", 0]
      ],
      simulacros: [
        ["1ª evaluación · 1er parcial — simulacro 1", "15-57YocHGGbWUZHfuQkKFbIG-ntxbbMY", "PDF", 1],
        ["1ª evaluación · 1er parcial — simulacro 2", "1B8N8Fy8hT0Js2CGgrZieXu0_1WOlfdvX", "PDF", 1],
        ["1ª evaluación · 1er parcial — simulacro 3", "1xNooP-VzJOp98xdDSgkJzoKRUcEKftQ9", "PDF", 1],
        ["1ª evaluación · 2º parcial — simulacro 1", "1ip8DPUefjao-q6nZ7izFtysj1ANpDjJY", "PDF", 1],
        ["1ª evaluación · 2º parcial — simulacro 3", "16hB-MvqlRDkIsKYyh9hkiO1lZaQlLVhq", "PDF", 1],
        ["1ª evaluación · 3er parcial — simulacro 1", "1uHbgo5-Mqw4KbaH68HP-zIF8e8uae-kj", "PDF", 1],
        ["1ª evaluación · 3er parcial — simulacro 2", "1-fpaZ9_Mvfzi6Nz2dp7Ud86GNJqYqCAP", "PDF", 1],
        ["1ª evaluación · 3er parcial — simulacro 3", "1R9YuroHnmolvlvc01-zY7PUjIIYc4fW3", "PDF", 1],
        ["1ª evaluación · 3er parcial — simulacro 4", "1nweasqIUCo0ekl5L5NoA2Alxzfd4Y1z1", "PDF", 1],
        ["2ª evaluación · 1er parcial — simulacro 1", "18SbBIG4OdTxAUYcQHGLkRP_94SlFtkds", "PDF", 1],
        ["2ª evaluación · 1er parcial — simulacro 2", "1MfWTCtC9ND9cqrTcciJhsF6LprPXHLpk", "PDF", 1],
        ["2ª evaluación · 1er parcial — simulacro 3", "1wpsxWAKe65RgPdGkpHevszlhevbL3DgG", "PDF", 1],
        ["2ª evaluación · 2º parcial — simulacro 1", "1ze-XWpjCwRJ6miKs0sr1NHKflU_o2va0", "PDF", 1],
        ["2ª evaluación · 2º parcial — simulacro 2", "1I90x3saIaJP1udZknM8NuDgHyFCTnUhJ", "PDF", 1],
        ["2ª evaluación · 2º parcial — simulacro 3", "1_FVxgPNsTNaS4U9v4WUP2PdjQD6vqCH3", "PDF", 1],
        ["2ª evaluación · 3er parcial — simulacro 1", "1ovvka7USmtFcoPov739WZBhbdeOLMnGC", "PDF", 1],
        ["2ª evaluación · 3er parcial — simulacro 2", "1Bjt26zIhm2T5T7LcbW1MhbtmnGNjI9JG", "PDF", 1],
        ["2ª evaluación · 3er parcial — simulacro 3", "1QQUCsd8iYw51fnRLcXokxH9Iih5TTwd4", "PDF", 1],
        ["3ª evaluación · 1er parcial — simulacro 1", "125fEN0BrddWtWdM-BIrPriI_FJPC8xPy", "PDF", 1],
        ["3ª evaluación · 1er parcial — simulacro 2", "1RvdmpPq33GEMPt1AbhddFLvJq21C0X3_", "PDF", 1],
        ["3ª evaluación · 1er parcial — simulacro 3", "1iyXVM0-O8PILxdaahvSo6UDIod63Ifj_", "PDF", 1],
        ["3ª evaluación · 2º parcial — simulacro 1", "1o6tcWrB1MQOaW6vRhLchcNBA4pq5b5Sy", "PDF", 1],
        ["3ª evaluación · 2º parcial — simulacro 2", "1A-ZCaOtp_wLiv9RQP1VzvU7yPq2qWfsO", "PDF", 1],
        ["3ª evaluación · 2º parcial — simulacro 3", "1GQeWR2e_y0jCM2z4Uuacv0zOtGHzsSg-", "PDF", 1],
        ["3ª evaluación · 3er parcial — simulacro 1", "1njTnpXnqKfzZSSxOaElEiXcMsfR_aNKc", "PDF", 1],
        ["3ª evaluación · 3er parcial — simulacro 2", "18n9qEn-fj-5yCXTwCK9XHDvkfUa5aQBP", "PDF", 1],
        ["3ª evaluación · 3er parcial — simulacro 3", "1J6Pp-H_8lTIy1DSqwVlNUU9B4ocYnEE3", "PDF", 1],
        ["3ª evaluación · 3er parcial — simulacro 4", "1rZeYOLIeME3zSbaBKqx2Seyi7UJi2_4A", "PDF", 1]
      ]
    }
  });

  A.push({
    id: "mat-3eso", materia: "mat", nivel: "eso",
    nombre: "Matemáticas", curso: "3º ESO",
    nota: "Ocho unidades con ruta, presentación y práctica por niveles, más proyectos y simulacros por evaluación.",
    pau: null,
    doc: {
      curriculo: [["Currículo LOMLOE · Matemáticas ESO", "19YOYdPsEA_7EQ0TdVwhDFlQ23R9r9-bJ", "PDF", 0]],
      criterios: [["Criterios de evaluación", "1BTUeighs7gxZL3y44N3epENuUtdPhkb4", "PDF", 0]],
      presentaciones: [
        ["Tema 1 · Números racionales", "1MAEd2h87WX6KGgsSQjVKPZvJpFYUqxO2", "PDF", 0],
        ["Tema 2 · Potencias, raíces y notación científica", "1cZHV7twn7ytM3ek2TKMTdnsM2LxSJ4fN", "PDF", 0],
        ["Tema 3 · Sucesiones y progresiones", "1sIAu2qutJmNREAGo9_dDaGrk7kzUrq_L", "PDF", 0],
        ["Tema 4 · Polinomios", "1j_Mb2e7hJBDwZflGOo-QoG79JoYjfR7b", "PDF", 0],
        ["Tema 5 · Ecuaciones y sistemas", "1J80_m0coM3NF6iI6FG6doGYQJ5VP10vw", "PDF", 0],
        ["Tema 6 · Funciones y rectas", "14IY4HoQIm5M5QOGs5LmR54qk78exrCio", "PDF", 0],
        ["Tema 7 · Estadística y probabilidad", "1O26I3i--DfKPOuYAsAOsJDVQZ9gzLwGM", "PDF", 0],
        ["Tema 8 · Geometría", "10cpwpSxN_ZFhBSvRAuNuTd8I19vScaOQ", "PDF", 0]
      ],
      libro: [],
      ejercicios: [
        ["Guía del curso", "16xuevkKZxu329cXlNovJedz10vDXKWZ8", "PDF", 0],
        ["Diagnóstico inicial", "1hVw9MMDaHvSuuPMCZ5BA_0Qvhq2apsbw", "PDF", 0],
        ["Tema 1 · Ruta de la unidad", "15Tmt9sK_fTSjwKnNUrTMF25fQzR20ScD", "PDF", 0],
        ["Tema 1 · Práctica por niveles", "1wVVikI3mSWDLoQbAVdLbvU62bIyDvoe0", "PDF", 0],
        ["Tema 2 · Ruta de la unidad", "1FE5eYUhIU0zG3Yr1keEh5gMfkzEzxxs1", "PDF", 0],
        ["Tema 2 · Práctica por niveles", "16RMyxrdNqEVBpgXE21xbq8JdDAKOdjep", "PDF", 0],
        ["Tema 3 · Ruta de la unidad", "1eXKcMRvb9v0E0pS04yALewmE7N10OoM6", "PDF", 0],
        ["Tema 3 · Práctica por niveles", "1r_DgrUT_G-M9gUAhMuix_FtWqfcKFleF", "PDF", 0],
        ["Tema 3 · Proyecto — Modelo de crecimiento y rúbrica", "1aa6DtOncB0aO5PaeIrCn6uEYt0rD5glY", "PDF", 0],
        ["Repaso · 1ª evaluación", "1_OaqZAx2NbSHfKXvV8-LTBUiA7ov36Jy", "PDF", 0],
        ["Tema 4 · Ruta de la unidad", "1LxSiXxBX92AWWDXLAs0pnJI5-AWYbMGq", "PDF", 0],
        ["Tema 4 · Práctica por niveles", "1fPQaCGerdYmmCzxyZszCAOl3-s8WImvp", "PDF", 0],
        ["Tema 5 · Ruta de la unidad", "18KG36JTucBZOZMPR3bPRmCTc6rBP884w", "PDF", 0],
        ["Tema 5 · Práctica por niveles", "1lh7rNnJfsHjk8_NdUDtC11uwT5KI86fB", "PDF", 0],
        ["Repaso · 2ª evaluación", "1vtP1gzxicBemDjaTti-oianLSiS3rbTB", "PDF", 0],
        ["Tema 6 · Ruta de la unidad", "1-n0W2SDcTOyIFI3ePVgcnZZJNiS_33Fx", "PDF", 0],
        ["Tema 6 · Práctica por niveles", "1-nEa_8pEtUA3rvWu-I6HZCTbylAhkONQ", "PDF", 0],
        ["Tema 7 · Ruta de la unidad", "1fMe2ioKW4Xh6Q-UEmnFhitQdKXn5J38V", "PDF", 0],
        ["Tema 7 · Práctica por niveles", "1t5B_tsm77BGmsoDAWCflrsNNLh7QTVH9", "PDF", 0],
        ["Tema 7 · Proyecto — Investigación de datos y rúbrica", "1J7ie054YwwQvYv2oN0o_qNtbz_hfufbk", "PDF", 0],
        ["Tema 8 · Ruta de la unidad", "1PLwEWNYqbnVN6-qR48ftz_KJ3ZCv5FTR", "PDF", 0],
        ["Tema 8 · Práctica por niveles", "1mcc_cz2U7EyDPuZXydhXe-f43iBYUMs9", "PDF", 0],
        ["Tema 8 · Reto de geometría y rúbrica", "1SJAAXZH3FXhpexxa2Mo9lLrDNKwb_71N", "PDF", 0],
        ["Repaso · 3ª evaluación", "1d9Oz06unEc43THJf6jRf8AVYDv_iRlVk", "PDF", 0]
      ],
      simulacros: [
        ["1ª evaluación · Práctica de números", "1sIARvNzFFmKrZJdAXKHu7uXtSCo8LSdf", "PDF", 1],
        ["1ª evaluación · Práctica de proporcionalidad", "1Lu6tpskSFmbB161i6uvl6X3g-SBFTq8E", "PDF", 1],
        ["1ª evaluación · Práctica de sucesiones", "1cUHnwcIXtZ2sp4OJclFL32ZfPGcIEFyK", "PDF", 1],
        ["2ª evaluación · Práctica de polinomios", "1l7fyFgbQ_BwlwBbCDJSSXnx06WY5lxM2", "PDF", 1],
        ["2ª evaluación · Práctica de ecuaciones", "1DrlnBI-IqMYXSsdxr8K2tt06YSnGTovm", "PDF", 1],
        ["3ª evaluación · Práctica de probabilidad", "1QtPNXrCodcI7J0tXItXYwTTe9DLU20PR", "PDF", 1],
        ["3ª evaluación · Práctica de funciones y rectas", "1NsUAPWPm0FIMfgB7xVveQMHLWl74RiVq", "PDF", 1],
        ["3ª evaluación · Práctica global", "1LSkXVWr3Dttum30NqOVegHsWITWBzElx", "PDF", 1]
      ]
    }
  });

  A.push({
    id: "mat-2bach", materia: "mat", nivel: "bach",
    nombre: "Matemáticas II", curso: "2º Bachillerato",
    nota: "Simulacros de las tres evaluaciones y el archivo oficial de la PAU de Matemáticas II.",
    aviso: "Segunda fase: faltan por subir criterios, presentaciones, libro y ejercicios.",
    pau: "Matemáticas II",
    doc: {
      curriculo: [["Currículo LOMLOE · Matemáticas I y II (Bachillerato)", "1ZoDkTyRES4FQcg-IkZ3thHZSIDdn3U0n", "PDF", 0]],
      criterios: [],
      presentaciones: [],
      libro: [],
      ejercicios: [],
      simulacros: [
        ["1ª evaluación · 1er parcial — simulacro 1", "1zU74u9QRY8cMYQoww17jrOcYEndEKOU7", "PDF", 1],
        ["1ª evaluación · 1er parcial — simulacro 2", "143_5YUdwzPMPObz3CcpUByNDHL6gytBM", "PDF", 1],
        ["1ª evaluación · 1er parcial — simulacro 3", "1-hQfliDMISW8YGae7Hjqh8ZjXxM_UKPI", "PDF", 1],
        ["1ª evaluación · 2º parcial — simulacro 1", "1ryrORW92dIpOR4oqDlWqOtE0gpxI5-MY", "PDF", 1],
        ["1ª evaluación · 2º parcial — simulacro 2", "1GKDY9mTc1tdwmrS2YnPJdPZ6VJ9q8CXh", "PDF", 1],
        ["1ª evaluación · 2º parcial — simulacro 3", "1gEVRhvlHCQM-hAzIbFZ4kyQaZiTlNNgY", "PDF", 1],
        ["1ª evaluación · 3er parcial — simulacro 1", "1rYX4Iptpziveg_Rv2sRzFimaYRMf8nW5", "PDF", 1],
        ["1ª evaluación · 3er parcial — simulacro 2", "1-E_OpLf97pVKo0lIwqcSaWD2bMhdkY6y", "PDF", 1],
        ["1ª evaluación · 3er parcial — simulacro 3", "1uUyZT1a1SWLLmikeOla_185yMxZA_QzV", "PDF", 1],
        ["1ª evaluación · 3er parcial — simulacro 4", "1MMTxT8TN6PTEM3UoBpnirtlpmBACuayT", "PDF", 1],
        ["2ª evaluación · 1er parcial — simulacro 1", "1YTHKPnnanwppBpVuZOcO-czjqVD-c79G", "PDF", 1],
        ["2ª evaluación · 1er parcial — simulacro 2", "132zAXFvLJquepPv8tpoJt15K3Fp0bQ8a", "PDF", 1],
        ["2ª evaluación · 1er parcial — simulacro 3", "1YH06Dog5NtGeKQk_q1FvR9MJaVo9Owd9", "PDF", 1],
        ["2ª evaluación · 2º parcial — simulacro 1", "1vcDq-6c4tqe-rId0Km1z6sPwzZIW4Ziq", "PDF", 1],
        ["2ª evaluación · 2º parcial — simulacro 2", "1-Js64xqaGnY7p8L513LTvqgxDSaPLQSX", "PDF", 1],
        ["2ª evaluación · 2º parcial — simulacro 3", "1_eObZPI3HRxpi8Pea2sXPYUIL5pvVksb", "PDF", 1],
        ["2ª evaluación · 3er parcial — simulacro 1", "1bBoBMRz9TcvIEEEtEXYFXXIHm9QQGIB0", "PDF", 1],
        ["2ª evaluación · 3er parcial — simulacro 2", "16RBJ9H94xuZa2tEBXhVpQbfuHx6u2mmY", "PDF", 1],
        ["2ª evaluación · 3er parcial — simulacro 3", "1m--VqCTfjFWVkor9q_yI_8isXPTUhD5P", "PDF", 1],
        ["3ª evaluación · 1er parcial — simulacro 1", "19p1IrMr9Zr1dFNNbyz51aivAO-3ESg9M", "PDF", 1],
        ["3ª evaluación · 1er parcial — simulacro 2", "1HFyuzCdIi_B_gk8yulqkx-VSibmeBAgF", "PDF", 1],
        ["3ª evaluación · 1er parcial — simulacro 3", "1-aaXM4T7IwQL1wdWxRLQYGOqMxH70TE9", "PDF", 1],
        ["3ª evaluación · 2º parcial — simulacro 1", "1HNVxG0EaDQ-k54N2iWUsVku_rqsNJAkE", "PDF", 1],
        ["3ª evaluación · 2º parcial — simulacro 2", "1N6Pve5GoiYh9rO1wBEmzJfgJiD_HZufR", "PDF", 1],
        ["3ª evaluación · 2º parcial — simulacro 3", "13Kt1NCHaQU_HEulX7zyvJlWYVw1EXl8w", "PDF", 1],
        ["3ª evaluación · 3er parcial — simulacro 1", "1JqpDtMYDyAgxkk-XCnCRG8Kz7YNlzrCr", "PDF", 1],
        ["3ª evaluación · 3er parcial — simulacro 2", "1cS6Vr6p0TXbou5P2vWueXY57Amp7-cfi", "PDF", 1],
        ["3ª evaluación · 3er parcial — simulacro 3", "13ajGAj9w_vKJXLGzNsnUzKQEJmLDDw_A", "PDF", 1],
        ["3ª evaluación · 3er parcial — simulacro 4", "1TbmRWIj96g-V5IpA7932-6zB5wLpXk-V", "PDF", 1]
      ]
    }
  });

  /* ======================================================================= BIOLOGÍA */

  A.push({
    id: "bio-2bach", materia: "bio", nivel: "bach",
    nombre: "Biología", curso: "2º Bachillerato",
    nota: "Los diecinueve temas de teoría, dos libros completos y el archivo oficial de la PAU con criterios de corrección.",
    pau: "Biología",
    doc: {
      curriculo: [["Currículo LOMLOE · Biología 2º Bachillerato (addenda)", "1D8sLRSjCpjSPUaD61y80GwuHmgLZ1q4N", "PDF", 0]],
      criterios: [],
      presentaciones: [],
      libro: [
        ["Libro de Biología PAU · edición del alumno", "1i2Nm5tdN7Fkh7fUIcIoxHsoph8_KRzMr", "PDF", 0],
        ["ECIR · Biología 2º Bachillerato", "1oNIv3ptAtqggw2z29B5HjhCbMQrrtBLV", "PDF", 0]
      ],
      ejercicios: [
        ["Tema 1 · Bioelementos", "1Xb_SdI_n8SNiUnERnFOBEnYBKMjO6Wm3", "PDF", 0],
        ["Tema 2 · Glúcidos", "1pDN7oTX_Qemi3BYbv3KRR4f6unZ03_W2", "PDF", 0],
        ["Tema 3 · Lípidos", "1ppM1UEtGgXL2nreBp2nOiAMXYdaIXDRo", "PDF", 0],
        ["Tema 4 · Proteínas", "1v-n3PE8veQ2415BWP_D1VCovDj6sV8gM", "PDF", 0],
        ["Tema 5 · Ácidos nucleicos", "1aVRjbaw52EsSr_lEHTxcMiR8ceOBB7zh", "PDF", 0],
        ["Tema 6 · Introducción a la célula", "12f467Hnox1R8QHFLWxC5Q75Xu8lVVS6W", "PDF", 0],
        ["Tema 7 · Envoltura celular", "1ofZRqDMplnAROHD2OIcZ8ivz9zqv2ODK", "PDF", 0],
        ["Tema 8 · Citoesqueleto", "1jWJMb4CF5CbF3WxUgD7a9fNJYvbsOhjy", "PDF", 0],
        ["Tema 9 · Sistema de endomembranas", "1JJFbZ1Wz1Q0NfTupqGXBuAYm48EaD7w5", "PDF", 0],
        ["Tema 10 · Orgánulos energéticos", "1CICwSsKHMfrQdZMRnIOeD43xOupjIcQb", "PDF", 0],
        ["Tema 11 · Núcleo y división celular", "1wczBIlD5BZgoRS-OduwtnI85lmdBfJTQ", "PDF", 0],
        ["Tema 12 · Metabolismo y enzimas", "1HcLa_EFq3IMKW3185C87jxhR8hjusq2b", "PDF", 0],
        ["Tema 13 · Respiración y fotosíntesis", "1cvLIfGs5ndEg7OJKIzZ_B2UBhJyYG183", "PDF", 0],
        ["Tema 14 · Herencia", "1G_xXrztLpNRhbPZpoEvXItYGxGiTg_ii", "PDF", 0],
        ["Tema 15 · Genes y expresión génica", "1oGQduFD9DHVox31TlpLQB7P2oyC4rfeN", "PDF", 0],
        ["Tema 16 · Mutaciones", "1SgkB1pTeaaSw4E0w2cdGp7079nmtnyBw", "PDF", 0],
        ["Tema 17 · Microorganismos", "1oTCSLZ-IWKqKoedxUIdvPJHhiPubYpFz", "PDF", 0],
        ["Tema 18 · Microbiología aplicada", "1lj7xP5Mmfx-4SiRP5eI2SVwCEf8c7GWG", "PDF", 0],
        ["Tema 19 · Inmunología", "1j0lXC5v2pQ_Q6vf2c-GcHZR03vIlMwNO", "PDF", 0]
      ],
      simulacros: []
    }
  });

  /* ============================================================== EN PREPARACIÓN */
  /* Solo el currículo oficial: el resto del material llegará más adelante. */

  function pendiente(id, materia, nivel, nombre, curso, curriculo) {
    A.push({
      id: id, materia: materia, nivel: nivel, nombre: nombre, curso: curso,
      proximamente: true,
      nota: "En preparación. De momento, el currículo oficial LOMLOE.",
      pau: null,
      doc: { curriculo: curriculo ? [curriculo] : [], criterios: [], presentaciones: [], libro: [], ejercicios: [], simulacros: [] }
    });
  }

  pendiente("bio-1eso", "bio", "eso", "Biología y Geología", "1º ESO",
    ["Currículo LOMLOE · Biología y Geología ESO", "1B_ATcoRm9EPdG7Satw42mp1zXW8kjfzF", "PDF", 0]);
  pendiente("bio-3eso", "bio", "eso", "Biología y Geología", "3º ESO",
    ["Currículo LOMLOE · Biología y Geología ESO", "1EnrmSCdtUsnwlaBnScTo6_qotejoa4eK", "PDF", 0]);
  pendiente("bio-4eso", "bio", "eso", "Biología y Geología", "4º ESO",
    ["Currículo LOMLOE · Biología y Geología ESO", "1gi3lsc5_sjB7G0k9NU27xVnzLYz6Fmv_", "PDF", 0]);
  pendiente("bio-1bach", "bio", "bach", "Biología, Geología y Ciencias Ambientales", "1º Bachillerato",
    ["Currículo LOMLOE · BioGeo y CC. Ambientales 1º Bachillerato", "1YwA63czZbEROidTQJJeYMOpLNuZspR9A", "PDF", 0]);

  pendiente("mat-1eso", "mat", "eso", "Matemáticas", "1º ESO",
    ["Currículo LOMLOE · Matemáticas ESO", "1tRNlqO4qF6OSrEsb3oG3bSts9hHUiDHn", "PDF", 0]);
  pendiente("mat-4eso", "mat", "eso", "Matemáticas", "4º ESO",
    ["Currículo LOMLOE · Matemáticas ESO", "1uSpPqoFiZfUSGh1FmY3gcHVHTy8AVAO3", "PDF", 0]);
  pendiente("mat-1bach", "mat", "bach", "Matemáticas I", "1º Bachillerato",
    ["Currículo LOMLOE · Matemáticas I y II (Bachillerato)", "1zkYbBiNaSk8xK_-W5VE2TFLSXoD0BpC4", "PDF", 0]);

  return { version: "2026-07-30", secciones: SECCIONES, asignaturas: A };
})();
