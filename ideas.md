# Brainstorming de Diseño: Bailarines del Mañana

## Enfoque 1: Minimalismo Neoclásico (Probabilidad: 0.08)

**Movimiento de Diseño:** Neoclasicismo moderno con influencias de galerías de arte contemporáneo.

**Principios Centrales:**
- Pureza absoluta en la composición: solo lo esencial permanece visible
- Simetría controlada con asimetrías estratégicas para dinamismo
- Espacios negativos amplios que respiran y guían la atención
- Tipografía serif elegante como elemento de distinción

**Filosofía de Color:**
Paleta monocromática con matices sutiles. Blanco puro como base (fondo), grises cálidos (80-90% de luminosidad) para secciones secundarias, y negro profundo (charcoal) para texto principal. Ocasionalmente, un gris plateado (90% luminosidad) para destacar elementos clave. La ausencia de color refuerza la elegancia y permite que las imágenes de ballet sean el protagonista.

**Paradigma de Diseño:**
Estructura asimétrica con columnas desiguales. Secciones con ancho variable (60%-40% o 70%-30%) crean movimiento visual sin sacrificar equilibrio. Las imágenes de ballet ocupan espacios amplios y sin restricciones, mientras el texto se distribuye en áreas comprimidas pero legibles.

**Elementos Distintivos:**
- Líneas divisoras sutiles (bordes grises muy claros) que separan secciones sin ser invasivas
- Tipografía serif (Playfair Display o similar) para títulos principales
- Espaciado vertical generoso (mínimo 60px entre secciones)

**Filosofía de Interacción:**
Transiciones suaves y lentas (400-600ms). Los botones son minimalistas: solo borde gris, sin fondo. Al pasar el mouse, el fondo se llena con gris muy claro. Los enlaces tienen subrayado sutil que aparece al hover.

**Animaciones:**
- Fade-in suave al cargar secciones (300ms)
- Escalado sutil (1.02x) en elementos interactivos
- Líneas divisoras que se animan con un efecto de "dibujo" al scroll

**Sistema Tipográfico:**
- Títulos: Playfair Display, 48-72px, peso 700, espaciado de letras 0.02em
- Subtítulos: Playfair Display, 24-32px, peso 500
- Cuerpo: Inter, 16-18px, peso 400, line-height 1.6
- Acentos: Playfair Display en gris charcoal para destacar

---

## Enfoque 2: Modernismo Geométrico (Probabilidad: 0.07)

**Movimiento de Diseño:** Diseño constructivista ruso con influencias de Bauhaus contemporáneo.

**Principios Centrales:**
- Formas geométricas precisas (rectángulos, líneas diagonales, círculos)
- Composición basada en grillas pero con rotaciones sutiles
- Contraste fuerte entre elementos (blanco vs. negro profundo)
- Dinamismo a través de ángulos y superposiciones

**Filosofía de Color:**
Blanco limpio como fondo principal. Grises en tres tonos: gris claro (95%), gris medio (60%), y negro absoluto. Las imágenes de ballet se presentan en marcos geométricos (rectángulos con bordes negros de 2-3px). Ocasionalmente, un rectángulo gris oscuro (20% luminosidad) detrás de texto blanco para máximo contraste.

**Paradigma de Diseño:**
Grilla de 12 columnas con desalineaciones intencionales. Las secciones se dividen con líneas diagonales o rectángulos rotados. Los elementos se superponen ligeramente para crear profundidad. Las imágenes se enmarcan con bordes negros precisos.

**Elementos Distintivos:**
- Líneas diagonales que cruzan secciones (clip-path en CSS)
- Rectángulos geométricos que contienen imágenes y texto
- Números y etiquetas tipográficas en las esquinas (2022, 2024, etc.)

**Filosofía de Interacción:**
Interacciones rápidas y directas (200-300ms). Los botones tienen borde negro grueso (2px) y fondo blanco. Al hover, el fondo se invierte (negro con texto blanco). Los elementos se deslizan o saltan con movimiento snappy.

**Animaciones:**
- Líneas que se dibujan al cargar (stroke animation)
- Rotaciones suaves de elementos geométricos
- Escalado con snap (rápido, no suave)

**Sistema Tipográfico:**
- Títulos: Montserrat Bold, 56-80px, peso 700
- Subtítulos: Montserrat, 20-28px, peso 600
- Cuerpo: Roboto, 16px, peso 400, line-height 1.5
- Números/Etiquetas: Montserrat Mono, 12-14px, peso 700

---

## Enfoque 3: Elegancia Contemporánea (Probabilidad: 0.06)

**Movimiento de Diseño:** Diseño editorial de lujo con influencias de revistas de moda de alta gama.

**Principios Centrales:**
- Jerarquía tipográfica sofisticada y clara
- Uso estratégico de imágenes a sangre (sin márgenes)
- Espaciado generoso pero proporcional
- Tipografía serif para títulos, sans-serif para cuerpo

**Filosofía de Color:**
Blanco como base. Grises en escala de 5 tonos: blanco roto (98%), gris muy claro (92%), gris claro (80%), gris medio (50%), y negro suave (charcoal 15%). Las imágenes de ballet son el protagonista visual. Fondos grises sutiles detrás de secciones de texto para crear "cajas" invisibles.

**Paradigma de Diseño:**
Diseño de revista: columnas variables con márgenes amplios. Las imágenes ocupan espacios completos o semi-completos. El texto se distribuye en columnas estrechas (máx 600px de ancho). Las secciones se separan con espacios en blanco generoso, no con líneas.

**Elementos Distintivos:**
- Iniciales decorativas (drop caps) en párrafos principales
- Números grandes y tipografía de cita para estadísticas (ej: "9 escuelas" en 48px)
- Márgenes laterales amplios que crean un marco invisible

**Filosofía de Interacción:**
Transiciones elegantes y lentas (500-700ms). Los botones son minimalistas: texto con subrayado que aparece al hover. Los enlaces tienen un efecto de "tinta" que se expande.

**Animaciones:**
- Fade-in suave al scroll
- Parallax sutil en imágenes de fondo
- Subrayado animado que se expande de izquierda a derecha

**Sistema Tipográfico:**
- Títulos: Cormorant Garamond, 64-96px, peso 600, italic ocasional
- Subtítulos: Cormorant Garamond, 28-40px, peso 400
- Cuerpo: Lato, 17px, peso 300, line-height 1.8
- Acentos: Cormorant Garamond en cursiva para citas

---

## Decisión Final: **Enfoque 3 - Elegancia Contemporánea**

Se ha seleccionado el **Enfoque 3: Elegancia Contemporánea** porque:

1. **Alineación con Ballet:** La elegancia editorial refleja perfectamente la sofisticación y gracia del ballet clásico.
2. **Legibilidad y Accesibilidad:** La tipografía serif para títulos y sans-serif para cuerpo es profesional y accesible.
3. **Versatilidad:** Funciona bien tanto en desktop como en mobile sin perder su carácter.
4. **Imágenes Protagonistas:** Las imágenes generadas por IA de bailarines serán el centro de atención, no competirán con elementos geométricos.
5. **Paleta Monocromática:** Blanco, grises y negro refuerzan la elegancia y permiten que el contenido brille.

### Especificaciones Finales de Diseño:

**Tipografía:**
- Títulos principales: Cormorant Garamond 700, 64-96px
- Subtítulos: Cormorant Garamond 400, 28-40px
- Cuerpo: Lato 300, 17px, line-height 1.8
- Acentos: Cormorant Garamond Italic

**Paleta de Color:**
- Fondo: #FFFFFF (blanco puro)
- Texto principal: #1A1A1A (charcoal)
- Gris claro (secciones): #F5F5F5
- Gris medio (bordes): #D0D0D0
- Gris oscuro (acentos): #4A4A4A

**Espaciado:**
- Margen lateral: 60px (desktop), 20px (mobile)
- Espaciado entre secciones: 80-120px
- Padding interno: 40-60px

**Animaciones:**
- Transiciones estándar: 500ms ease-in-out
- Fade-in al scroll: 600ms
- Parallax suave en imágenes

**Componentes Clave:**
- Botones: Texto + subrayado animado
- Enlaces: Subrayado que aparece al hover
- Imágenes: A sangre o con márgenes amplios
- Tarjetas: Fondo gris muy claro con sombra suave
