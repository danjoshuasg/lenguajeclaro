# Plan de Mejora: Interactividad y Fluidez — RPELCO Landing Page

## Diagnóstico del Estado Actual

### Lo que funciona bien
- Paleta de colores coherente con CSS variables (burgundy/cream)
- Tipografía bien definida (Cormorant + DM Sans)
- Estructura semántica correcta (header, section, footer)
- Contenido fiel al diseño original de Pencil
- Build limpio sin errores

### Problemas Críticos Detectados

| # | Problema | Severidad | Componente(s) |
|---|---------|-----------|---------------|
| 1 | **Cero animaciones** — Todo es estático. Sin scroll-reveal, sin entrance animations, sin micro-interacciones | Alta | Todos |
| 2 | **Sin diseño responsivo** — Padding fijo `px-[120px]` en todos los componentes. Se rompe en tablet/móvil | Alta | Todos |
| 3 | **Header no es sticky** — Desaparece al hacer scroll, se pierde la navegación | Media | Header |
| 4 | **Sin smooth scroll** — Los anchor links saltan bruscamente | Media | Layout |
| 5 | **Cards planas** — Sin hover effects (elevación, escala, sombras) en cards de servicios, noticias y logos | Media | QueHacemos, Noticias, Miembros |
| 6 | **Hero estático** — Los glows usan inline styles y no se mueven. Sin animación de entrada del contenido | Media | Hero |
| 7 | **Imágenes sin interacción** — News cards sin zoom en hover ni overlay | Baja | NoticiasEventos |
| 8 | **Form sin pulido** — Sin focus rings animados, sin transición suave de labels, botón sin estado de press | Baja | Contacto |
| 9 | **Sin menú móvil** — No hay hamburger menu para pantallas pequeñas | Alta | Header |
| 10 | **CTAs sin profundidad** — Botones sin sombra, sin escala en hover, sin efecto active/press | Baja | Hero, Header |

---

## Plan de Implementación

### Fase 1: Infraestructura de Animación y Responsive

**Archivos a modificar:** `globals.css`, `layout.tsx`, `package.json`

#### 1.1 Instalar Motion (Framer Motion)
- `npm install motion` — Librería de animaciones para React
- Se usará para scroll-triggered reveals y entrance animations

#### 1.2 Smooth scroll global
- Agregar `scroll-behavior: smooth` en `globals.css` al `html`
- Agregar `scroll-padding-top` para compensar el header sticky

#### 1.3 Definir breakpoints responsivos
- Establecer sistema de padding responsivo reemplazando `px-[120px]`:
  - Mobile: `px-6` (24px)
  - Tablet: `px-12` (48px)
  - Desktop: `px-[120px]`
- Crear clase utilitaria `.section-padding` en globals.css para consistencia

#### 1.4 Crear componente reutilizable `ScrollReveal`
- Wrapper que usa `motion` con `whileInView`
- Fade-up con stagger para listas de elementos
- Threshold configurable

---

### Fase 2: Header Interactivo

**Archivo:** `src/components/Header.tsx`

#### 2.1 Header sticky con backdrop blur
- Convertir a Client Component (`"use client"`)
- `position: sticky` + `top: 0` + `z-50`
- Al hacer scroll: agregar `backdrop-blur-md` + `bg-cream/80` + sombra sutil
- Transición suave entre estados (transparente → blurred)

#### 2.2 Menú móvil hamburger
- Icono hamburger visible en `md:hidden`
- Panel lateral (drawer) con animación slide-in
- Links de navegación en formato vertical
- Overlay con fade para cerrar

#### 2.3 Active link highlight
- Detectar sección visible con Intersection Observer
- Marcar el nav link correspondiente con color burgundy y underline animado

---

### Fase 3: Hero con Vida

**Archivo:** `src/components/Hero.tsx`

#### 3.1 Entrance animation orquestada
- Tag badge: fade-in + slide-down (delay 0)
- H1: fade-in + slide-up (delay 0.2s)
- Subtítulo: fade-in + slide-up (delay 0.4s)
- CTAs: fade-in + slide-up (delay 0.6s)
- Stagger effect crea sensación cinematográfica

#### 3.2 Glows animados
- Eliminar inline styles → pasar a Tailwind classes
- Animación sutil de "breathing" (scale pulse lento, 8-12s)
- Movimiento flotante suave con `@keyframes float`

#### 3.3 CTAs con personalidad
- Botón primario: sombra burgundy sutil `shadow-lg shadow-burgundy/20`
- Hover: `scale-[1.02]` + sombra más profunda
- Active/press: `scale-[0.98]`
- Transición `duration-200 ease-out`

---

### Fase 4: Secciones con Scroll Reveal

**Archivos:** Todos los componentes de sección

#### 4.1 Sobre Nosotros
- Label "SOBRE NOSOTROS": fade-in
- Columna izquierda: slide-in desde left (delay 0.1s)
- Columna derecha: slide-in desde right (delay 0.3s)
- Card normativa: fade-in + scale-up sutil (delay 0.5s)

#### 4.2 Qué Hacemos
- Título y label: fade-in estándar
- Cards: stagger reveal (cada una con 0.15s de delay incremental)
- Cards hover: `translateY(-4px)` + sombra elevada + borde burgundy sutil
- Icono en hover: escala sutil `scale-110` con transición

#### 4.3 Miembros y Aliados
- Texto central: fade-in
- Logo boxes: stagger desde el centro hacia afuera
- Hover en logos: borde más definido + leve elevación + texto menos gris

#### 4.4 Noticias y Eventos
- Cards: stagger reveal de izquierda a derecha
- Imagen hover: zoom suave `scale-105` con `overflow-hidden` (ya existe el clip)
- Overlay sutil burgundy semi-transparente al hover
- Card completa: elevación sutil + cursor pointer

#### 4.5 Contacto
- Columna izquierda: slide-in left
- Columna derecha (form): slide-in right
- Social icons: stagger aparición
- Inputs focus: ring burgundy suave `ring-2 ring-burgundy/20`
- Botón submit: mismo tratamiento que CTAs del hero
- Labels: transición de opacidad al focus del input

---

### Fase 5: Footer Refinado

**Archivo:** `src/components/Footer.tsx`

#### 5.1 Entrance animation
- Fade-in general al entrar en viewport

#### 5.2 Links hover mejorado
- Agregar underline animado (width de 0 a 100%) bajo los links
- Usar `::after` pseudo-element via Tailwind `after:` variant

#### 5.3 Logo hover
- Leve glow/pulse en el logo mark al hover

---

### Fase 6: Responsive Completo

**Archivos:** Todos los componentes

#### 6.1 Breakpoints target
```
sm: 640px   → Móvil grande
md: 768px   → Tablet
lg: 1024px  → Desktop pequeño
xl: 1280px  → Desktop
```

#### 6.2 Cambios por componente

**Header:**
- Mobile: logo + hamburger, nav oculto en drawer
- Desktop: layout actual

**Hero:**
- Mobile: `text-[36px]` para h1, `text-[16px]` para subtítulo
- Glows reducidos o eliminados en mobile (performance)
- CTAs en stack vertical en mobile

**Sobre Nosotros:**
- Mobile/Tablet: columnas en stack vertical (`flex-col`)

**Qué Hacemos:**
- Mobile: 1 card por fila
- Tablet: 2 cards por fila (grid 2 cols)
- Desktop: 4 cards en fila (actual)

**Miembros y Aliados:**
- Mobile: grid 2 cols con wrap
- Tablet: grid 3 cols
- Desktop: 5 en fila (actual)

**Noticias:**
- Mobile: 1 card, scroll horizontal o stack vertical
- Tablet: 2 cards
- Desktop: 3 cards (actual)

**Contacto:**
- Mobile/Tablet: stack vertical (form debajo del texto)

**Footer:**
- Mobile: stack vertical, links en 1 columna
- Tablet: brand arriba, links en fila debajo

---

### Fase 7: Detalles de Pulido Final

#### 7.1 Smooth scroll-padding
- `scroll-padding-top: 100px` para compensar header sticky

#### 7.2 Selection color
- `::selection` con fondo burgundy y texto cream

#### 7.3 Cursor personalizado en CTAs
- `cursor-pointer` explícito en todos los elementos interactivos

#### 7.4 Focus visible
- Ring visible solo con navegación por teclado (`:focus-visible`)
- Color burgundy consistente

#### 7.5 Transiciones globales
- Asegurar `transition-colors duration-200` en todos los hovers
- Motion reduce: `@media (prefers-reduced-motion: reduce)` desactiva animaciones

---

## Resumen de Dependencias

| Paquete | Propósito |
|---------|-----------|
| `motion` | Animaciones scroll-reveal y entrance animations |

Solo se agrega **1 dependencia**. Todo lo demás se resuelve con CSS y Tailwind.

## Orden de Ejecución

```
Fase 1 → Fase 2 → Fase 3 → Fase 6 → Fase 4 → Fase 5 → Fase 7
```

Se prioriza infraestructura (1), luego header sticky (2) y hero (3) porque son lo primero que ve el usuario, luego responsive (6) porque es un problema de accesibilidad, y finalmente las secciones interiores (4, 5) y pulido (7).

## Archivos que se Modifican

| Archivo | Fases |
|---------|-------|
| `package.json` | 1 |
| `src/app/globals.css` | 1, 7 |
| `src/app/layout.tsx` | 1 |
| `src/app/page.tsx` | 1 |
| `src/components/Header.tsx` | 2, 6 |
| `src/components/Hero.tsx` | 3, 6 |
| `src/components/SobreNosotros.tsx` | 4, 6 |
| `src/components/QueHacemos.tsx` | 4, 6 |
| `src/components/MiembrosAliados.tsx` | 4, 6 |
| `src/components/NoticiasEventos.tsx` | 4, 6 |
| `src/components/Contacto.tsx` | 4, 6 |
| `src/components/Footer.tsx` | 5, 6 |

**Archivo nuevo:**
| Archivo | Propósito |
|---------|-----------|
| `src/components/ScrollReveal.tsx` | Componente reutilizable de animación scroll |
| `src/components/MobileMenu.tsx` | Drawer de navegación móvil |
