/* ============================================================
   REINVÉNTATE — Custom Code para Webflow
   Pegar en: Project Settings > Custom Code > Footer Code

   PALETA DE MARCA:
     Burdeo oscuro  #590C1B  (primario)
     Terracota      #8C3535  (acento)
     Rosa medio     #D9A0AB  (decorativo)
     Rosa claro     #F2D8DC  (fondos suaves / bordes)
     Crema          #F2EFEB  (fondo principal)

   FUENTE ALTA (cargada en Webflow CDN):
     Regular  → títulos de secciones inyectadas
     Light    → eyebrows, subtítulos
     Caption  → tags, badges, etiquetas

   EDITAR CONTENIDO: busca los objetos POSTS, SPEAKER, LEAD_CONTENT
   ============================================================ */
(function () {
  "use strict";

  /* ── CDN FUENTES ─────────────────────────────────────────── */
  var FONT = {
    regular: "https://cdn.prod.website-files.com/69e10682976777cf635a56e1/6a11ec5465a909cd2ceb946b_Alta_regular.otf",
    light:   "https://cdn.prod.website-files.com/69e10682976777cf635a56e1/6a11ec5573d0ed34e82aecdf_Alta_light.otf",
    caption: "https://cdn.prod.website-files.com/69e10682976777cf635a56e1/6a11ec5665a909cd2ceb94f2_Alta_caption.otf"
  };

  /* ── COLORES DE MARCA ────────────────────────────────────── */
  var C = {
    burdeo:   "#590C1B",
    terra:    "#8C3535",
    rosaMid:  "#D9A0AB",
    rosaLight:"#F2D8DC",
    crema:    "#F2EFEB",
    blanco:   "#FFFFFF",
    negro:    "#1a0a0f",
    gris:     "#6b5a5e"
  };

  /* ══════════════════════════════════════════════════════════
     CONTENIDO EDITABLE
  ══════════════════════════════════════════════════════════ */

  var POSTS = [
    {
      emoji: "🎨",
      tag: "Imagen Personal",
      title: "Tu ropa te cambia el cerebro: la ciencia detrás de la imagen personal",
      excerpt: "Vestirte no es vanidad. Es neurociencia. La investigación sobre 'enclothed cognition' demuestra que lo que llevas puesto altera tu rendimiento cognitivo, tu nivel de atención y cómo te perciben los demás — todo en fracciones de segundo.",
      contenido:
        "<p>En 2012, los investigadores Hajo Adam y Adam Galinsky de la Northwestern University publicaron un hallazgo que cambió para siempre cómo entendemos la ropa: las personas que vestían una bata de laboratorio descrita como <em>\"de doctor\"</em> cometieron la mitad de errores en pruebas de atención que quienes vestían la misma bata descrita como <em>\"de pintor\"</em>. Misma tela. Distinto significado. Resultado completamente diferente.</p>" +
        "<p>A este fenómeno lo llamaron <strong>enclothed cognition</strong> (cognición enclausurada): la ropa influye de forma sistemática en los procesos psicológicos del portador, pero solo cuando se dan dos condiciones al mismo tiempo — el significado simbólico de la prenda <em>y</em> la experiencia física de llevarla puesta. No basta con verla sobre una silla.</p>" +
        "<h3>Lo que tu imagen comunica antes de que abras la boca</h3>" +
        "<p>El cerebro del otro no espera tu presentación. En milisegundos, la amígdala evalúa si eres una amenaza o alguien digno de confianza. La corteza prefrontal integra esa señal visual con experiencias pasadas y forma un juicio — antes de que hayas dicho una sola palabra. El efecto halo hace el resto: si la primera impresión es positiva, el cerebro tenderá a interpretar todo lo que hagas después bajo esa misma luz favorable.</p>" +
        "<p>Las inconsistencias entre la imagen externa y el comportamiento percibido no pasan desapercibidas: generan una disonancia que el cerebro registra como falta de autenticidad o previsibilidad, erosionando la confianza de forma inconsciente.</p>" +
        "<h3>El estilo como herramienta de salud mental</h3>" +
        "<p>El <em>dopamine dressing</em> — el uso intencional de colores y texturas que generan alegría — no es un concepto de moda vacío. El sistema de recompensa cerebral responde a lo que percibe como bello o significativo liberando dopamina, lo que mejora la atención, combate el entumecimiento emocional y eleva la motivación. Especialmente en períodos de baja energía, elegir conscientemente lo que te pones es un acto de autocuidado con base neurocientífica.</p>" +
        "<p>La colorimetría suma otro nivel: ciertos colores resuenan con la química de tu piel, ojos y cabello creando armonía visual que el cerebro del observador lee como salud y coherencia. Los colores que 'apagan' tu rostro generan una microdisonancia que nadie sabe nombrar, pero todos registran.</p>" +
        "<h3>Ejercicio para esta semana</h3>" +
        "<p>Frente al espejo, con luz natural, coloca una tela o prenda de tonos cálidos (ocre, terracota, coral) y luego una de tonos fríos (gris, azul, verde menta) cerca de tu rostro. Observa cuál define tus rasgos y cuál los borra. Esa diferencia que ves es neurociencia pura — y el primer dato de tu colorimetría personal.</p>" +
        "<p><em>Tu imagen no es superficial. Es el primer idioma que hablas.</em></p>",
      min: "6 min"
    },
    {
      emoji: "🌑",
      tag: "Psicología & Jung",
      title: "Tu éxito no es suficiente: lo que la sombra de Jung sabe sobre ti que tú aún ignoras",
      excerpt: "Hasta el 95% de tus decisiones ocurren fuera de tu conciencia. Los estudios de fMRI muestran que el cerebro prepara una acción hasta 7 segundos antes de que seas consciente de ella. Carl Jung lo llamó 'la sombra' — y lo que no integras, te dirige.",
      contenido:
        "<p>Son las 6 de la mañana. Has hecho todo bien — la carrera, las metas, las casillas marcadas. Y aun así, hay algo que no encaja. Una rabia que no puedes explicar. Un vacío que ningún logro llena. Esta contradicción no es un fallo de carácter. Es una señal de que algo en ti sigue sin ser reclamado.</p>" +
        "<h3>La regla del 95%: no eres tan libre como crees</h3>" +
        "<p>La neurociencia moderna confirma algo que Jung intuía hace un siglo: hasta el <strong>95% de nuestras decisiones son inconscientes</strong>. La mente procesa información a una velocidad de 11 millones de bits por segundo de forma automática, mientras que la conciencia apenas maneja 50 bits por segundo. Los estudios de resonancia magnética funcional (fMRI) del neurocientífico John-Dylan Haynes han demostrado que el cerebro prepara una acción hasta <strong>10 segundos antes</strong> de que seas consciente de haberla decidido.</p>" +
        "<p>Esto no es una fatalidad. Es el mapa del territorio. Y Jung fue uno de los primeros en trazar ese mapa.</p>" +
        "<h3>¿Qué es la Sombra?</h3>" +
        "<p>La Sombra junguiana no es lo malo en ti. Es todo lo que has reprimido, negado o enterrado porque en algún momento fue peligroso mostrarlo — tu rabia, tu ambición, tu necesidad, tu brillantez. Cada vez que reaccionas de forma desproporcionada a alguien, cada vez que juzgas con dureza cierto rasgo en otra persona, cada vez que saboteas lo que más deseas — estás frente a tu sombra sin reconocerla.</p>" +
        "<p>El analista Erel Shalit describe los <strong>complejos</strong> — los núcleos emocionales de la sombra — como personalidades autónomas dentro de ti que secuestran tu voluntad cuando algo \"toca tu fibra\". Se formaron como mecanismos de protección en la infancia. En la vida adulta, actúan como programas que se ejecutan solos.</p>" +
        "<h3>La Sombra Dorada: tu potencial no reclamado</h3>" +
        "<p>No toda la sombra es oscura. Existe también la <strong>Sombra Dorada</strong> — ese potencial que proyectamos en las personas que admiramos profundamente. Tu fascinación por el talento, la audacia o la libertad de alguien es, en realidad, un eco de tus propios dones reprimidos por miedo a no encajar. Lo que envidias es tuyo.</p>" +
        "<h3>El \"Good Girl Script\" y el costo de la máscara</h3>" +
        "<p>Para muchas mujeres el trabajo con la sombra empieza aquí: en el guion cultural que exige ser complaciente, perfecta y siempre bajo control. James Hollis lo llama \"Vida Provisional\" — una construcción frágil basada únicamente en la máscara social. Mantenerla consume una energía enorme. La investigación sobre burnout en mujeres en entornos académicos y de salud lo confirma: la rabia y la necesidad reprimidas cobran factura.</p>" +
        "<p>Jung lo dijo directamente: <em>\"Prefiero ser un individuo completo que una persona buena.\"</em> La integridad — ser un todo con luces y sombras — es psicológicamente superior a la perfección moral.</p>" +
        "<h3>Primer paso: el espejo de la proyección</h3>" +
        "<p>El psicoanalista Bud Harris propone comenzar con este ejercicio:</p>" +
        "<ol><li>Identifica a alguien que te provoque irritación o juicio moral desproporcionado.</li><li>Pregúntate con honestidad: <em>¿Qué se permite esta persona que yo tengo estrictamente prohibido en mi propia vida?</em></li><li>Escribe la respuesta. No la corrijas. Eso que ves en el otro es el inicio del mapa de tu sombra.</li></ol>" +
        "<p>La individuación — el proceso de convertirte en quien realmente eres — no empieza cuando todo va bien. Empieza exactamente aquí, en la fractura entre quien muestras y quien eres.</p>",
      min: "7 min"
    },
    {
      emoji: "🧠",
      tag: "Neurociencia",
      title: "Por qué tu cerebro sabotea lo que más deseas: la neurobiología de la resistencia al cambio",
      excerpt: "No es falta de voluntad. Es arquitectura cerebral. Tu cerebro consume el 20% de tu energía corporal y ha evolucionado para minimizar ese gasto — lo que significa que prefiere lo conocido, aunque lo conocido sea exactamente lo que te limita.",
      contenido:
        "<p>Has tomado la decisión. Esta vez sí. Lo has visualizado, lo has escrito, lo has prometido. Y aun así, tres semanas después, estás exactamente donde empezaste. No es que no quieras. Es que tu cerebro literalmente está diseñado para resistir.</p>" +
        "<h3>El cerebro no evolucionó para hacerte feliz</h3>" +
        "<p>El sistema nervioso central tiene una función primaria: garantizar la supervivencia minimizando el gasto energético y la incertidumbre. El cerebro consume el <strong>20% de la energía corporal total</strong> siendo apenas el 2% del peso corporal. Para sostener esa demanda, ha desarrollado una arquitectura de ahorro radical: la automatización.</p>" +
        "<p>Tu mente inconsciente procesa <strong>11 millones de bits por segundo</strong>. Tu conciencia, apenas 50. Esta asimetría no es un defecto — es una solución evolutiva brillante. El problema es que esa misma solución convierte tus patrones, creencias e identidad en <em>inercia neurológica</em>: circuitos que se ejecutan solos, sin supervisión consciente.</p>" +
        "<h3>La Red del Yo: el guardián de tu identidad</h3>" +
        "<p>Cuando intentas \"crear una nueva realidad\", el mayor obstáculo no es la falta de motivación — es tu propia identidad neurológica. La <strong>Red Neuronal por Defecto (DMN)</strong>, activa cuando no estás concentrada en una tarea, incluye la corteza prefrontal medial y la corteza cingulada posterior. Su función principal: codificar y defender el autoconcepto existente.</p>" +
        "<p>Cada vez que intentas actuar desde una versión de ti que aún no has consolidado neurológicamente, la DMN genera resistencia. No por sabotearte — sino porque ese nuevo \"tú\" aún no tiene suficiente historia cerebral para ser reconocido como real.</p>" +
        "<h3>Los ganglios basales: tus hábitos tienen su propio sistema operativo</h3>" +
        "<p>El estriado dorsal — parte de los ganglios basales — almacena secuencias de comportamiento automatizadas mediante un proceso llamado <em>chunking</em>: empaqueta rutinas completas en un solo disparador neuronal. Una vez instalado un hábito aquí, opera sin control prefrontal consciente. Esto es por qué un hábito de diez años puede sobrevivir perfectamente a diez días de \"motivación\".</p>" +
        "<h3>La amígdala y el costo de la incertidumbre</h3>" +
        "<p>Cuando el cambio implica incertidumbre — y siempre lo hace — la amígdala activa el sistema de alarma y <strong>desvía recursos desde la corteza prefrontal</strong> hacia respuestas de defensa. Literalmente te quita capacidad de pensamiento racional en el momento en que más la necesitas. Esto explica por qué en los instantes de mayor presión volvemos automáticamente a lo conocido, aunque sepamos que no nos sirve.</p>" +
        "<h3>Lo que sí funciona: intervenciones con evidencia</h3>" +
        "<p>La buena noticia es real: la neuroplasticidad es un hecho biológico. El cerebro se reconfigura físicamente con experiencias, emociones y pensamientos repetidos. Pero requiere estrategia, no solo voluntad.</p>" +
        "<p><strong>Planes Si-Entonces</strong> (Peter Gollwitzer): en lugar de depender de la motivación, programa disparadores automáticos. <em>\"Si son las 7am y estoy en la cocina, entonces escribo 10 minutos antes de abrir el teléfono.\"</em> Al automatizar la acción mediante una señal contextual, eludas la fatiga decisional.</p>" +
        "<p><strong>Técnica 10-10-10</strong> (Suzy Welch): ante un impulso reactivo, pregúntate cómo te sentirás respecto a esta decisión en 10 minutos, en 10 meses y en 10 años. Esto activa la corteza prefrontal dorsolateral y desactiva la reactividad de la amígdala.</p>" +
        "<p><strong>Defusión cognitiva</strong> (ACT): en lugar de creer cada pensamiento automático, obsérvalo. <em>\"Estoy teniendo el pensamiento de que no soy suficiente\"</em> crea una distancia que la corteza puede usar para elegir una respuesta distinta.</p>" +
        "<h3>El primer acto de cambio</h3>" +
        "<p>No empieces por transformar tu vida. Empieza por observar tu cerebro. Durante los próximos 7 días, anota cada mañana el primer pensamiento automático que tuviste sobre ti misma al despertar. Sin juzgarlo. Solo mirarlo.</p>" +
        "<p>La conciencia no cambia el patrón de inmediato — pero es el único punto desde el que el cambio es posible. No puedes transformar lo que no puedes ver.</p>" +
        "<p><em>No eres tus patrones. Eres quien puede elegir cambiarlos.</em></p>",
      min: "8 min"
    }
  ];

  var SPEAKER = {
    nombre:    "Paulina Henríquez",
    cargo:     "Asesora de Imagen · Encargada Liola Osorno",
    tagline:   "Tu guía en esta experiencia",
    bio:       "Asesora de imagen especializada en colorimetría y construcción de estilo personal con enfoque estratégico. Acompaño a mujeres a descubrir los colores, formas y prendas que potencian su esencia, elevando su seguridad y coherencia visual. Mi enfoque combina estética, identidad y propósito.",
    aprende:   [
      "Comprender tu código de imagen y qué estás comunicando hoy",
      "Definir qué quieres proyectar",
      "Usar el color a tu favor para potenciar tu presencia",
      "Conectar tu imagen con seguridad y autenticidad"
    ],
    instagram: "https://www.instagram.com/pau.henriquezv",
    foto:      "https://cdn.prod.website-files.com/69e10682976777cf635a56e1/6a11e44ad91f74eb123db444_paulina-henriquez.jpeg"
  };

  var LEAD_CONTENT = {
    emoji:     "🧬",
    eyebrow:   "Descarga gratuita",
    titulo:    "Guía: Neurociencia para crear\nla vida que deseas",
    subtitulo: "Ejercicios prácticos de visualización, reconocimiento de patrones y reprogramación de creencias — para mujeres listas para su siguiente versión.",
    items:     ["Visualización guiada paso a paso", "Identificar patrones que te frenan", "Reconocimiento de identidad", "Anclaje emocional"],
    boton:     "Quiero mi guía gratuita →",
    fine:      "Sin spam. Solo contenido que transforma."
  };

  var VIDEO_URL = "https://www.instagram.com/p/DYnrxwoRud2/";

  /* ══════════════════════════════════════════════════════════
     ESTILOS (colores exactos de marca + fuente Alta)
  ══════════════════════════════════════════════════════════ */
  function injectStyles() {
    var s = document.createElement("style");
    s.textContent =
      ".w-webflow-badge{display:none!important}" +
      /* Fuente Alta ─────────────────────────────────────────── */
      "@font-face{font-family:'Alta';font-weight:400;font-style:normal;src:url('" + FONT.regular + "') format('opentype')}" +
      "@font-face{font-family:'Alta';font-weight:300;font-style:normal;src:url('" + FONT.light   + "') format('opentype')}" +
      "@font-face{font-family:'AltaCaption';font-weight:400;font-style:normal;src:url('" + FONT.caption + "') format('opentype')}" +

      /* Variables ──────────────────────────────────────────── */
      ":root{" +
        "--rv-burdeo:#590C1B;--rv-terra:#8C3535;--rv-rosa-mid:#D9A0AB;" +
        "--rv-rosa-light:#F2D8DC;--rv-crema:#F2EFEB;--rv-negro:#1a0a0f;--rv-gris:#6b5a5e" +
      "}" +

      /* Barra de progreso ───────────────────────────────────── */
      "#rv-bar{position:fixed;top:0;left:0;height:3px;background:var(--rv-burdeo);z-index:10000;width:0;pointer-events:none;transition:width .1s linear}" +

      /* Scroll animations ───────────────────────────────────── */
      ".rv-up{opacity:0;transform:translateY(28px);transition:opacity .75s cubic-bezier(.22,1,.36,1),transform .75s cubic-bezier(.22,1,.36,1)}" +
      ".rv-left{opacity:0;transform:translateX(-28px);transition:opacity .75s cubic-bezier(.22,1,.36,1),transform .75s cubic-bezier(.22,1,.36,1)}" +
      ".rv-zoom{opacity:0;transform:scale(.95);transition:opacity .6s ease,transform .6s ease}" +
      ".rv-up.on,.rv-left.on,.rv-zoom.on{opacity:1;transform:none}" +
      ".rv-d1{transition-delay:.1s!important}.rv-d2{transition-delay:.2s!important}.rv-d3{transition-delay:.3s!important}" +

      /* Botones Webflow — hover suave ────────────────────────── */
      ".rt-button,.rt-navbar-button,.rt-button-v2{transition:transform .2s ease,box-shadow .2s ease!important}" +
      ".rt-button:hover,.rt-navbar-button:hover,.rt-button-v2:hover{transform:translateY(-2px)!important;box-shadow:0 8px 24px rgba(89,12,27,.2)!important}" +

      /* ── TARJETA TICKET ─────────────────────────────────────── */
      "#rv-ticket{" +
        "background:#fff;border-radius:14px;border:1.5px solid var(--rv-rosa-light);" +
        "padding:18px 20px;margin:0 0 18px;display:flex;flex-direction:column;gap:10px;" +
        "box-shadow:0 4px 16px rgba(89,12,27,.06)" +
      "}" +
      ".rv-ticket-badge{" +
        "display:flex;align-items:center;gap:8px;background:var(--rv-crema);" +
        "border-radius:8px;padding:8px 12px;font-size:12px;font-weight:600;" +
        "color:var(--rv-burdeo);font-family:'AltaCaption',sans-serif;letter-spacing:.5px" +
      "}" +
      ".rv-ticket-row{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}" +
      ".rv-ticket-price{font-size:32px;font-weight:400;color:var(--rv-burdeo);line-height:1;font-family:'Alta',serif}" +
      ".rv-ticket-meta strong{display:block;font-size:13px;color:var(--rv-negro);font-weight:600;margin-bottom:2px}" +
      ".rv-ticket-meta span{font-size:11px;color:var(--rv-gris)}" +

      /* ── BOTÓN SPEAKER ──────────────────────────────────────── */
      ".rv-spk-wrap{padding:0;margin:0 0 4px}" +
      ".rv-spk-btn{" +
        "display:inline-flex;align-items:center;gap:9px;padding:10px 22px;" +
        "border:1.5px solid var(--rv-burdeo);border-radius:50px;" +
        "background:var(--rv-crema);color:var(--rv-burdeo);" +
        "font-size:13px;font-family:'AltaCaption',sans-serif;letter-spacing:.5px;" +
        "cursor:pointer;transition:background .2s,color .2s,border-color .2s;white-space:nowrap" +
      "}" +
      ".rv-spk-btn:hover{background:var(--rv-burdeo);color:#fff;border-color:var(--rv-burdeo)}" +

      /* ── MODAL BASE ─────────────────────────────────────────── */
      ".rv-modal-bg{display:none;position:fixed;inset:0;background:rgba(26,10,15,.75);z-index:99999;align-items:center;justify-content:center;padding:16px;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)}" +
      ".rv-modal-bg.show{display:flex}" +
      ".rv-modal-box{" +
        "background:var(--rv-crema);border-radius:20px;max-width:580px;width:100%;max-height:90vh;" +
        "overflow-y:auto;padding:36px 32px 32px;position:relative;" +
        "animation:rv-pop .3s cubic-bezier(.22,1,.36,1)" +
      "}" +
      "@keyframes rv-pop{from{opacity:0;transform:scale(.9) translateY(18px)}to{opacity:1;transform:none}}" +
      ".rv-modal-close{" +
        "position:absolute;top:14px;right:14px;background:var(--rv-rosa-light);border:none;" +
        "font-size:18px;cursor:pointer;color:var(--rv-burdeo);width:32px;height:32px;" +
        "display:flex;align-items:center;justify-content:center;border-radius:50%;transition:background .2s,color .2s" +
      "}" +
      ".rv-modal-close:hover{background:var(--rv-rosa-mid);color:#fff}" +

      /* ── MODAL SPEAKER ──────────────────────────────────────── */
      ".rv-spk-header{display:flex;gap:18px;align-items:center;margin-bottom:20px;padding-bottom:20px;border-bottom:1px solid var(--rv-rosa-light)}" +
      ".rv-spk-foto{width:82px;height:82px;border-radius:50%;object-fit:cover;object-position:top;border:2px solid var(--rv-rosa-mid);flex-shrink:0}" +
      ".rv-spk-nombre{font-size:19px;font-weight:400;color:var(--rv-burdeo);margin:0 0 3px;font-family:'Alta',serif}" +
      ".rv-spk-cargo{font-size:11px;color:var(--rv-terra);font-family:'AltaCaption',sans-serif;letter-spacing:.8px;text-transform:uppercase;margin:0 0 3px}" +
      ".rv-spk-tagline{font-size:13px;color:var(--rv-gris);margin:0;font-style:italic}" +
      ".rv-spk-bio{font-size:14px;color:var(--rv-gris);line-height:1.7;margin:0 0 20px}" +
      ".rv-spk-label{font-size:11px;font-family:'AltaCaption',sans-serif;letter-spacing:1.5px;text-transform:uppercase;color:var(--rv-burdeo);margin:0 0 12px}" +
      ".rv-spk-list{list-style:none;padding:0;margin:0 0 22px}" +
      ".rv-spk-list li{font-size:13px;color:#3a2028;padding:9px 0 9px 22px;border-bottom:1px solid var(--rv-rosa-light);position:relative;line-height:1.45}" +
      ".rv-spk-list li:last-child{border:none}" +
      ".rv-spk-list li::before{content:'✦';position:absolute;left:0;top:11px;color:var(--rv-terra);font-size:9px}" +
      ".rv-spk-ig{display:inline-flex;align-items:center;gap:7px;font-size:12px;color:var(--rv-burdeo);text-decoration:none;font-family:'AltaCaption',sans-serif;letter-spacing:.5px;border:1.5px solid var(--rv-rosa-mid);border-radius:50px;padding:8px 16px;transition:background .2s}" +
      ".rv-spk-ig:hover{background:var(--rv-rosa-light)}" +

      /* ── MODAL ARTÍCULO ─────────────────────────────────────── */
      ".rv-modal-box.rv-art-modal{background:var(--rv-burdeo)}" +
      ".rv-art-tag{font-size:11px;font-family:'AltaCaption',sans-serif;letter-spacing:1.5px;text-transform:uppercase;color:var(--rv-rosa-mid);margin:0 0 10px}" +
      ".rv-art-title{font-size:clamp(18px,3vw,22px);font-weight:400;color:var(--rv-crema);font-family:'Alta',serif;margin:0 0 18px;line-height:1.3}" +
      ".rv-art-body{font-size:14px;color:rgba(242,239,235,0.82);line-height:1.85;margin:0 0 24px}" +
      ".rv-art-body h3{font-size:15px;font-family:'Alta',serif;color:var(--rv-rosa-mid);font-weight:400;margin:26px 0 10px}" +
      ".rv-art-body strong{color:var(--rv-rosa-mid);font-weight:600}" +
      ".rv-art-body em{color:var(--rv-crema);font-style:italic}" +
      ".rv-art-body p{margin:0 0 14px}" +
      ".rv-art-body ol{padding-left:20px;margin:0 0 14px}" +
      ".rv-art-body ol li{margin-bottom:10px;color:rgba(242,239,235,0.82);line-height:1.6}" +
      ".rv-modal-close-art{background:rgba(242,216,220,0.12)!important;color:var(--rv-rosa-mid)!important}" +
      ".rv-modal-close-art:hover{background:rgba(242,216,220,0.22)!important;color:var(--rv-crema)!important}" +
      ".rv-art-cta{display:inline-flex;align-items:center;gap:8px;padding:12px 26px;background:var(--rv-rosa-mid);color:var(--rv-burdeo);border-radius:50px;font-size:13px;font-family:'AltaCaption',sans-serif;letter-spacing:.5px;cursor:pointer;border:none;font-weight:700;text-decoration:none;transition:transform .2s,box-shadow .2s}" +
      ".rv-art-cta:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.35)}" +

      /* ── SECCIÓN BLOG ───────────────────────────────────────── */
      "#rv-blog{padding:88px 0;background:var(--rv-crema)}" +
      ".rv-blog-inner{max-width:1120px;margin:0 auto;padding:0 24px}" +
      ".rv-eyebrow{font-size:11px;font-family:'AltaCaption',sans-serif;letter-spacing:2.5px;text-transform:uppercase;color:var(--rv-burdeo);margin:0 0 12px}" +
      ".rv-sec-title{font-size:clamp(26px,3.5vw,42px);font-weight:400;color:var(--rv-negro);font-family:'Alta',serif;margin:0 0 48px;line-height:1.2}" +
      ".rv-blog-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(270px,1fr));gap:24px}" +
      ".rv-blog-card{background:#fff;border-radius:16px;border:1px solid var(--rv-rosa-light);transition:box-shadow .25s,transform .25s;cursor:pointer;overflow:hidden}" +
      ".rv-blog-card:hover{box-shadow:0 16px 48px rgba(89,12,27,.12);transform:translateY(-5px)}" +
      ".rv-blog-thumb{height:156px;display:flex;align-items:center;justify-content:center;font-size:52px;background:linear-gradient(135deg,var(--rv-crema),var(--rv-rosa-light))}" +
      ".rv-blog-body{padding:22px}" +
      ".rv-blog-tag{font-size:10px;font-family:'AltaCaption',sans-serif;letter-spacing:1.5px;text-transform:uppercase;color:var(--rv-burdeo);margin:0 0 8px}" +
      ".rv-blog-card-title{font-size:16px;font-weight:400;color:var(--rv-negro);line-height:1.35;margin:0 0 10px;font-family:'Alta',serif}" +
      ".rv-blog-excerpt{font-size:13px;color:var(--rv-gris);line-height:1.6;margin:0 0 14px}" +
      ".rv-blog-read{font-size:11px;font-family:'AltaCaption',sans-serif;letter-spacing:1px;color:var(--rv-burdeo);display:flex;align-items:center;gap:4px}" +

      /* ── SECCIÓN VIDEO ──────────────────────────────────────── */
      "#rv-video{padding:88px 24px;background:var(--rv-negro);text-align:center}" +
      ".rv-video-inner{max-width:560px;margin:0 auto}" +
      "#rv-video .rv-eyebrow{color:var(--rv-rosa-mid)}" +
      "#rv-video .rv-sec-title{color:#fff;margin-bottom:36px}" +
      ".rv-ig-wrap{border-radius:16px;overflow:hidden;max-width:400px;margin:0 auto;box-shadow:0 24px 64px rgba(0,0,0,.5)}" +
      ".rv-ig-wrap iframe{width:100%!important;border:none}" +

      /* ── LEAD MAGNET ────────────────────────────────────────── */
      "#rv-lead{padding:88px 24px;background:linear-gradient(145deg,#2a0710 0%,var(--rv-burdeo) 55%,var(--rv-terra) 100%);text-align:center}" +
      ".rv-lead-inner{max-width:600px;margin:0 auto}" +
      ".rv-lead-emoji{font-size:52px;margin-bottom:14px}" +
      "#rv-lead .rv-eyebrow{color:var(--rv-rosa-mid)}" +
      "#rv-lead .rv-sec-title{color:#fff;margin-bottom:12px}" +
      ".rv-lead-sub{font-size:15px;color:var(--rv-rosa-light);margin:0 0 18px;line-height:1.7;font-weight:300}" +
      ".rv-lead-chips{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-bottom:32px}" +
      ".rv-lead-chip{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);border-radius:50px;padding:6px 14px;font-size:11px;color:#fff;font-family:'AltaCaption',sans-serif;letter-spacing:.5px}" +
      ".rv-lead-form{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;max-width:460px;margin:0 auto 14px}" +
      ".rv-lead-input{flex:1;min-width:200px;padding:14px 22px;border-radius:50px;border:none;font-size:14px;font-family:inherit;outline:none;background:#fff;color:var(--rv-negro)}" +
      ".rv-lead-input::placeholder{color:#aaa}" +
      ".rv-lead-btn{padding:14px 26px;border-radius:50px;background:var(--rv-crema);color:var(--rv-burdeo);font-size:13px;font-family:'AltaCaption',sans-serif;letter-spacing:.5px;border:none;cursor:pointer;transition:transform .2s,box-shadow .2s;white-space:nowrap}" +
      ".rv-lead-btn:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.25)}" +
      ".rv-lead-fine{font-size:11px;color:rgba(242,216,220,.45);margin:0;font-family:'AltaCaption',sans-serif;letter-spacing:.5px}" +
      ".rv-lead-ok{display:none;background:rgba(255,255,255,.1);border-radius:14px;padding:20px;color:#fff;font-size:15px;font-family:'Alta',serif;max-width:360px;margin:0 auto}" +

      /* ── STICKY MÓVIL ───────────────────────────────────────── */
      "#rv-sticky{display:none;position:fixed;bottom:0;left:0;right:0;z-index:9998;padding:13px 20px;background:var(--rv-burdeo);text-align:center;box-shadow:0 -4px 20px rgba(0,0,0,.25)}" +
      "#rv-sticky a{color:#fff;font-family:'AltaCaption',sans-serif;font-size:14px;letter-spacing:.5px;text-decoration:none}" +
      "@media(max-width:767px){" +
        "#rv-sticky{display:block}" +
        "body{padding-bottom:52px}" +
        /* Blog */
        "#rv-blog{padding:56px 0}" +
        ".rv-blog-grid{grid-template-columns:1fr;gap:16px}" +
        ".rv-sec-title{margin-bottom:28px}" +
        /* Modal */
        ".rv-modal-box{padding:28px 20px 24px;border-radius:16px;max-height:88vh}" +
        ".rv-art-title{font-size:18px}" +
        ".rv-spk-header{flex-direction:column;text-align:center}" +
        /* Event extras */
        ".rv-ticket-wrap{margin:16px 0}" +
        ".rv-ticket{padding:18px}" +
        ".rv-spk-btn{width:100%;text-align:center;justify-content:center}" +
        /* Lead */
        "#rv-lead{padding:60px 16px}" +
        ".rv-lead-form{flex-direction:column;align-items:stretch}" +
        ".rv-lead-input,.rv-lead-btn{width:100%;min-width:0;box-sizing:border-box}" +
        /* Video */
        "#rv-video{padding:60px 16px}" +
        ".rv-ig-wrap{max-width:100%}" +
      "}" +
      "@media(max-width:480px){" +
        ".rv-blog-inner{padding:0 16px}" +
        ".rv-modal-bg{padding:10px}" +
        ".rv-modal-box{padding:24px 16px 20px}" +
        ".rv-blog-card-title{font-size:15px}" +
      "}" +

      /* Smooth scroll ─────────────────────────────────────────── */
      "html{scroll-behavior:smooth}";

    document.head.appendChild(s);
  }

  /* ══════════════════════════════════════════════════════════
     FIXES: redes, nexvora, créditos, alt text
  ══════════════════════════════════════════════════════════ */
  function fixContent() {
    var map = {
      "https://www.instagram.com/": "https://www.instagram.com/reinventate.chile/",
      "https://www.facebook.com/": null, "https://linkedin.com": null,
      "https://www.linkedin.com/": null, "https://www.youtube.com/": null
    };
    document.querySelectorAll("a").forEach(function(a) {
      var h = a.getAttribute("href");
      if (h && map.hasOwnProperty(h)) {
        if (map[h]) { a.href = map[h]; a.target = "_blank"; a.rel = "noopener noreferrer"; }
        else (a.closest(".rt-social-icon") || a).style.display = "none";
      }
    });
    document.querySelectorAll('a[href="https://www.instagram.com/reinventate.chile/"]').forEach(function(ig) {
      if (ig.parentElement.querySelector("[data-rv-tk]")) return;
      var tk = document.createElement("a");
      tk.href = "https://www.tiktok.com/@reinventatechile_"; tk.target = "_blank";
      tk.rel = "noopener noreferrer"; tk.className = ig.className; tk.dataset.rvTk = "1";
      tk.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.26 8.26 0 004.83 1.56V6.81a4.85 4.85 0 01-1.06-.12z"/></svg>';
      ig.insertAdjacentElement("afterend", tk);
    });
    document.querySelectorAll("img").forEach(function(img) {
      if ((img.src || "").toLowerCase().includes("nexvora")) (img.closest("div") || img).style.display = "none";
      if ((img.src || "").includes("sandra") && !img.alt) img.alt = "Sandra Galindo, cofundadora de Reinvéntate";
      if ((img.src || "").includes("WhatsApp") && !img.alt) img.alt = "Martina Tereucan, cofundadora de Reinvéntate";
    });
    document.querySelectorAll("a").forEach(function(a) {
      var h = a.getAttribute("href") || "";
      if (h.includes("radianttemplates") || h === "/style-guide" || h === "/license")
        (a.closest("p") || a).style.display = "none";
    });
  }

  /* ── BARRA DE PROGRESO ─────────────────────────────────── */
  function initProgress() {
    var b = document.createElement("div"); b.id = "rv-bar"; document.body.prepend(b);
    window.addEventListener("scroll", function() {
      b.style.width = Math.min(window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100, 100) + "%";
    }, { passive: true });
  }

  /* ── SCROLL ANIMATIONS ─────────────────────────────────── */
  function initAnimations() {
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) { if (e.isIntersecting) { e.target.classList.add("on"); obs.unobserve(e.target); } });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".rv-up,.rv-left,.rv-zoom").forEach(function(el) { obs.observe(el); });
  }

  /* ── MODAL ─────────────────────────────────────────────── */
  function initModal() {
    if (document.getElementById("rv-modal-bg")) return;
    var bg = document.createElement("div"); bg.className = "rv-modal-bg"; bg.id = "rv-modal-bg";
    var box = document.createElement("div"); box.className = "rv-modal-box"; box.id = "rv-modal-box";
    var cl = document.createElement("button"); cl.className = "rv-modal-close"; cl.innerHTML = "✕"; cl.setAttribute("aria-label", "Cerrar");
    cl.addEventListener("click", closeModal);
    box.appendChild(cl); bg.appendChild(box); document.body.appendChild(bg);
    bg.addEventListener("click", function(e) { if (e.target === bg) closeModal(); });
    document.addEventListener("keydown", function(e) { if (e.key === "Escape") closeModal(); });
  }

  function openModal(html) {
    var box = document.getElementById("rv-modal-box");
    var cl = box.querySelector(".rv-modal-close");
    box.innerHTML = ""; box.appendChild(cl);
    var c = document.createElement("div"); c.innerHTML = html; box.appendChild(c);
    document.getElementById("rv-modal-bg").classList.add("show");
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    var bg = document.getElementById("rv-modal-bg");
    if (bg) { bg.classList.remove("show"); document.body.style.overflow = ""; }
    var box = document.getElementById("rv-modal-box");
    if (box) { box.classList.remove("rv-art-modal"); }
  }

  /* ── BOTÓN NAV "PRIMER EVENTO" ─────────────────────────── */
  function fixNavButton() {
    document.querySelectorAll(".rt-navbar-button, .rt-button, a").forEach(function(el) {
      if (el.textContent.trim().match(/^quiero ser parte$/i)) {
        el.textContent = "Primer evento";
        el.removeAttribute("href");
        el.style.cursor = "pointer";
        el.addEventListener("click", function(e) {
          e.preventDefault();
          var target = document.querySelector(".rt-case-studies, #rt-case-studies, [class*='case-studies']");
          if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    });
  }

  /* ── BOTÓN MÁS INFORMACIÓN EN TARJETA EVENTO ───────────── */
  function injectEventExtras() {
    var card = null;
    document.querySelectorAll(".rt-case-studies-cards").forEach(function(el) {
      if (!card && el.textContent.match(/imagen personal|colorimetr|evento fundador/i)) card = el;
    });
    if (!card || card.dataset.rvDone) return;
    card.dataset.rvDone = "1";

    var wrap = document.createElement("div"); wrap.className = "rv-spk-wrap";

    var btn = document.createElement("button"); btn.className = "rv-spk-btn rv-up";
    btn.style.cssText = "width:100%;justify-content:center;background:var(--rv-burdeo);color:var(--rv-crema);border:none;border-radius:50px;padding:13px 24px;font-size:13px;font-family:'AltaCaption',sans-serif;letter-spacing:.5px;font-weight:600;cursor:pointer;transition:opacity .2s;margin-top:8px;";
    btn.textContent = "Más información →";
    btn.addEventListener("mouseover", function() { this.style.opacity = ".85"; });
    btn.addEventListener("mouseout", function() { this.style.opacity = "1"; });
    btn.addEventListener("click", function() { openModal(buildEventDetailHTML()); });
    wrap.appendChild(btn);

    card.insertAdjacentElement("afterend", wrap);
  }

  function buildEventDetailHTML() {
    return (
      /* encabezado */
      '<p style="font-size:10px;letter-spacing:3px;text-transform:uppercase;color:var(--rv-terra);font-family:\'AltaCaption\',sans-serif;margin:0 0 8px;">Evento fundador · 30 mayo · Puerto Varas</p>' +
      '<p style="font-size:24px;font-family:\'Alta\',serif;color:var(--rv-burdeo);margin:0 0 20px;line-height:1.2;">Una jornada para conocerte,<br>transformarte y conectar.</p>' +

      /* programa */
      '<p style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:var(--rv-terra);font-family:\'AltaCaption\',sans-serif;margin:0 0 12px;">Programa del día</p>' +
      '<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:24px;">' +
        evPrograma("✦", "Dinámica de integración", "Activación con neurociencia para conectar contigo y con el grupo antes de comenzar.") +
        evPrograma("✦", "Workshop de imagen personal", "Con Paulina Henríquez: colorimetría, estilo y proyección. Aprendes a usar tu imagen como herramienta.") +
        evPrograma("✦", "Ejercicio de visualización", "Pones en práctica lo aprendido: visualización guiada de tu versión futura.") +
        evPrograma("✦", "Coffee break & networking", "Tiempo para compartir, conectar con otras mujeres y cerrar la experiencia.") +
      '</div>' +

      /* speaker */
      '<div style="background:var(--rv-crema);border-radius:14px;padding:18px;margin-bottom:20px;">' +
        '<p style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:var(--rv-terra);font-family:\'AltaCaption\',sans-serif;margin:0 0 12px;">Tu guía en esta experiencia</p>' +
        '<div style="display:flex;gap:14px;align-items:center;margin-bottom:12px;">' +
          '<img src="' + SPEAKER.foto + '" alt="' + SPEAKER.nombre + '" style="width:60px;height:60px;border-radius:50%;object-fit:cover;object-position:top;border:2px solid var(--rv-rosa-mid);flex-shrink:0;"/>' +
          '<div>' +
            '<p style="font-size:16px;font-family:\'Alta\',serif;color:var(--rv-burdeo);margin:0 0 2px;">' + SPEAKER.nombre + '</p>' +
            '<p style="font-size:10px;text-transform:uppercase;letter-spacing:.8px;color:var(--rv-terra);font-family:\'AltaCaption\',sans-serif;margin:0;">' + SPEAKER.cargo + '</p>' +
          '</div>' +
        '</div>' +
        '<p style="font-size:13px;line-height:1.7;color:#444;margin:0 0 10px;">' + SPEAKER.bio + '</p>' +
        '<a href="' + SPEAKER.instagram + '" target="_blank" rel="noopener noreferrer" style="font-size:12px;color:var(--rv-burdeo);font-family:\'AltaCaption\',sans-serif;">@pau.henriquezv →</a>' +
      '</div>' +

      /* precio */
      '<div style="display:flex;align-items:center;justify-content:space-between;background:rgba(89,12,27,.05);border-radius:12px;padding:16px 20px;margin-bottom:20px;">' +
        '<div>' +
          '<p style="font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:var(--rv-terra);font-family:\'AltaCaption\',sans-serif;margin:0 0 4px;">Inversión</p>' +
          '<p style="font-size:28px;font-family:\'Alta\',serif;color:var(--rv-burdeo);margin:0;">$25.000</p>' +
          '<p style="font-size:11px;color:var(--rv-gris);margin:2px 0 0;">Transferencia tras inscripción · Plazas limitadas</p>' +
        '</div>' +
      '</div>' +

      /* CTA */
      '<a href="https://reinventatechile.github.io/inscripcion/" target="_blank" rel="noopener noreferrer" ' +
        'style="display:block;text-align:center;padding:14px 24px;background:var(--rv-burdeo);color:var(--rv-crema);' +
        'border-radius:50px;font-size:13px;font-family:\'AltaCaption\',sans-serif;letter-spacing:.5px;' +
        'text-decoration:none;font-weight:600;" ' +
        'onmouseover="this.style.opacity=\'0.85\'" onmouseout="this.style.opacity=\'1\'">' +
        'Quiero inscribirme →' +
      '</a>'
    );
  }

  function evPrograma(icon, titulo, desc) {
    return '<div style="display:flex;gap:12px;align-items:flex-start;">' +
      '<span style="color:var(--rv-rosa-mid);font-size:14px;margin-top:2px;flex-shrink:0;">' + icon + '</span>' +
      '<div>' +
        '<p style="font-size:13px;font-weight:600;color:var(--rv-burdeo);margin:0 0 2px;">' + titulo + '</p>' +
        '<p style="font-size:12px;color:#555;line-height:1.6;margin:0;">' + desc + '</p>' +
      '</div>' +
    '</div>';
  }

  /* ── BLOG ──────────────────────────────────────────────── */
  function injectBlog() {
    if (document.getElementById("rv-blog")) return;
    var anchor = document.getElementById("testimonials") || document.querySelector(".rt-testimonials");
    if (!anchor) return;

    var cards = POSTS.map(function(p, i) {
      return '<div class="rv-blog-card rv-up rv-d' + i + '" data-rv-post="' + i + '">' +
        '<div class="rv-blog-thumb">' + p.emoji + '</div>' +
        '<div class="rv-blog-body">' +
          '<p class="rv-blog-tag">' + p.tag + ' · ' + p.min + ' de lectura</p>' +
          '<h3 class="rv-blog-card-title">' + p.title + '</h3>' +
          '<p class="rv-blog-excerpt">' + p.excerpt + '</p>' +
          '<span class="rv-blog-read">Leer artículo →</span>' +
        '</div>' +
      '</div>';
    }).join("");

    var el = document.createElement("section"); el.id = "rv-blog";
    el.innerHTML =
      '<div class="rv-blog-inner">' +
        '<p class="rv-eyebrow rv-up">Neurociencia aplicada</p>' +
        '<h2 class="rv-sec-title rv-up">Ideas que transforman,<br>no solo información</h2>' +
        '<div class="rv-blog-grid">' + cards + '</div>' +
      '</div>';
    anchor.insertAdjacentElement("beforebegin", el);

    el.querySelectorAll(".rv-blog-card").forEach(function(card) {
      card.addEventListener("click", function() {
        var p = POSTS[parseInt(card.dataset.rvPost)];
        var box = document.getElementById("rv-modal-box");
        openModal(
          '<p class="rv-art-tag">' + p.tag + '</p>' +
          '<h2 class="rv-art-title">' + p.title + '</h2>' +
          '<div class="rv-art-body">' + p.contenido + '</div>' +
          '<button class="rv-art-cta" onclick="' +
            "document.getElementById('rv-lead').scrollIntoView({behavior:'smooth'});" +
            "document.getElementById('rv-modal-bg').classList.remove('show');" +
            "document.body.style.overflow='';" +
          '">Descargar guía gratuita</button>'
        );
        box.classList.add("rv-art-modal");
        var cl = box.querySelector(".rv-modal-close");
        if (cl) cl.classList.add("rv-modal-close-art");
      });
    });
  }

  /* ── VIDEO ─────────────────────────────────────────────── */
  function injectVideo() {
    if (document.getElementById("rv-video")) return;
    var anchor = document.getElementById("rv-blog") || document.getElementById("testimonials");
    if (!anchor) return;

    var el = document.createElement("section"); el.id = "rv-video";
    el.innerHTML =
      '<div class="rv-video-inner">' +
        '<p class="rv-eyebrow rv-up">Así vivimos nuestros eventos</p>' +
        '<h2 class="rv-sec-title rv-up">Sentirlo es entenderlo</h2>' +
        '<div class="rv-ig-wrap rv-zoom">' +
          '<blockquote class="instagram-media" data-instgrm-permalink="' + VIDEO_URL + '" data-instgrm-version="14" style="background:#FFF;border:0;border-radius:16px;box-shadow:0 0 1px 0 rgba(0,0,0,.5);margin:1px;max-width:400px;min-width:320px;padding:0;width:calc(100% - 2px)">' +
            '<div style="padding:16px;"><a href="' + VIDEO_URL + '" style="background:#FFFFFF;line-height:0;padding:0;text-align:center;text-decoration:none;width:100%" target="_blank">' +
              '<div style="display:flex;align-items:center;"><div style="background:#F4F4F4;border-radius:50%;height:40px;margin-right:14px;width:40px"></div><div style="display:flex;flex-direction:column;flex-grow:1;"><div style="background:#F4F4F4;border-radius:4px;height:14px;margin-bottom:6px;width:100px"></div><div style="background:#F4F4F4;border-radius:4px;height:14px;width:60px"></div></div></div>' +
              '<div style="padding:19% 0"></div>' +
              '<div style="display:block;height:50px;margin:0 auto 12px;width:50px"><svg width="50" height="50" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g transform="translate(-511 -20)" fill="#000"><path d="M556 20h-11c-13.255 0-24 10.745-24 24v11c0 13.255 10.745 24 24 24h11c13.255 0 24-10.745 24-24V44c0-13.255-10.745-24-24-24zm13 35c0 7.18-5.82 13-13 13h-11c-7.18 0-13-5.82-13-13V44c0-7.18 5.82-13 13-13h11c7.18 0 13 5.82 13 13v11z"/></g></g></svg></div>' +
              '<div style="padding-top:8px"><div style="color:#3897f0;font-family:Arial,sans-serif;font-size:14px;font-weight:550;line-height:18px">Ver en Instagram</div></div>' +
            '</a></div>' +
          '</blockquote>' +
        '</div>' +
      '</div>';
    anchor.insertAdjacentElement("beforebegin", el);

    if (!document.querySelector('script[src*="instagram.com/embed"]')) {
      var sc = document.createElement("script"); sc.src = "https://www.instagram.com/embed.js"; sc.async = true;
      sc.onload = function() { if (window.instgrm) window.instgrm.Embeds.process(); };
      document.body.appendChild(sc);
    } else if (window.instgrm) { window.instgrm.Embeds.process(); }
  }

  /* ── LEAD MAGNET ───────────────────────────────────────── */
  function injectLead() {
    if (document.getElementById("rv-lead")) return;
    var anchor = document.getElementById("contact") || document.querySelector(".rt-contact");
    if (!anchor) return;
    var L = LEAD_CONTENT;
    var chips = L.items.map(function(i) { return '<span class="rv-lead-chip">✓ ' + i + '</span>'; }).join("");
    var el = document.createElement("section"); el.id = "rv-lead";
    el.innerHTML =
      '<div class="rv-lead-inner">' +
        '<div class="rv-lead-emoji rv-zoom">' + L.emoji + '</div>' +
        '<p class="rv-eyebrow rv-up">' + L.eyebrow + '</p>' +
        '<h2 class="rv-sec-title rv-up" style="color:#fff">' + L.titulo.replace("\n", "<br>") + '</h2>' +
        '<p class="rv-lead-sub rv-up">' + L.subtitulo + '</p>' +
        '<div class="rv-lead-chips rv-up">' + chips + '</div>' +
        '<form class="rv-lead-form" id="rv-lead-form">' +
          '<input class="rv-lead-input" type="email" id="rv-lead-email" placeholder="Tu correo electrónico" required/>' +
          '<button class="rv-lead-btn" type="submit">' + L.boton + '</button>' +
        '</form>' +
        '<div class="rv-lead-ok" id="rv-lead-ok">✅ ¡Listo! Revisa tu correo — enviamos tu guía ahora mismo.</div>' +
        '<p class="rv-lead-fine rv-up">' + L.fine + '</p>' +
      '</div>';
    anchor.insertAdjacentElement("beforebegin", el);
    document.getElementById("rv-lead-form").addEventListener("submit", function(e) {
      e.preventDefault();
      var email = document.getElementById("rv-lead-email").value.trim();
      if (!email) return;
      var btn = document.querySelector(".rv-lead-btn");
      btn.textContent = "Enviando..."; btn.disabled = true;
      fetch("https://script.google.com/macros/s/AKfycbz0V76AV8o3DhxwWjX57v-1MUUdEmI-DMIfHA3iWUgf7Yx47Bh3AjojKFZZ5V7jbO6d/exec", {
        method: "POST",
        body: JSON.stringify({ action: "lead", email: email }),
        headers: { "Content-Type": "text/plain" }
      }).catch(function() {}).finally(function() {
        document.getElementById("rv-lead-form").style.display = "none";
        document.getElementById("rv-lead-ok").style.display = "block";
        setTimeout(function() {
          window.open("https://reinventatechile.github.io/inscripcion/guia/", "_blank");
        }, 1200);
      });
    });
  }

  /* ── STICKY MÓVIL ──────────────────────────────────────── */
  function injectSticky() {
    if (document.getElementById("rv-sticky")) return;
    var s = document.createElement("div"); s.id = "rv-sticky";
    s.innerHTML = '<a href="https://reinventatechile.github.io/inscripcion/" target="_blank" rel="noopener noreferrer">✨ Inscribirme · $25.000</a>';
    document.body.appendChild(s);
    var form = document.querySelector("form");
    if (form) new IntersectionObserver(function(e) { s.style.display = e[0].isIntersecting ? "none" : ""; }, { threshold: .2 }).observe(form);
  }

  /* ── INIT ──────────────────────────────────────────────── */
  function init() {
    injectStyles();
    fixContent();
    fixNavButton();
    initProgress();
    initModal();
    injectEventExtras();
    injectBlog();
    injectVideo();
    injectLead();
    injectSticky();
    setTimeout(initAnimations, 80);
  }

  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", init)
    : init();
})();
