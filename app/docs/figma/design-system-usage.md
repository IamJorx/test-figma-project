# Guía de Uso del Sistema de Diseño (SDS)

Este documento explica cómo usar las variables CSS del sistema de diseño extraídas de Figma.

## Variables CSS Disponibles

Todas las variables están disponibles en `app/globals.css` con el prefijo `--sds-` (SDS = Sistema de Diseño).

## 1. Tipografía

### Uso Básico

```css
.title-hero {
  font-size: var(--sds-typography-title-hero-size);
  font-weight: var(--sds-typography-title-hero-font-weight);
  font-family: var(--sds-typography-title-hero-font-family);
  line-height: 1.2;
}

.body-base {
  font-size: var(--sds-typography-body-size-medium);
  font-weight: var(--sds-typography-body-font-weight-regular);
  font-family: var(--sds-typography-body-font-family);
  line-height: 1.4;
}

.body-strong {
  font-size: var(--sds-typography-body-size-medium);
  font-weight: var(--sds-typography-body-font-weight-strong);
  font-family: var(--sds-typography-body-font-family);
  line-height: 1.4;
}
```

### Con Tailwind CSS

```tsx
<h1 className="text-[var(--sds-typography-title-hero-size)] font-[var(--sds-typography-weight-bold)]">
  Título Hero
</h1>

<p className="text-[var(--sds-typography-body-size-medium)] font-[var(--sds-typography-weight-regular)]">
  Texto base
</p>
```

## 2. Colores

### Background

```css
.bg-default {
  background-color: var(--sds-color-background-default-default);
}

.bg-default-hover:hover {
  background-color: var(--sds-color-background-default-default-hover);
}

.bg-brand {
  background-color: var(--sds-color-background-brand-default);
}
```

### Text

```css
.text-default {
  color: var(--sds-color-text-default-default);
}

.text-secondary {
  color: var(--sds-color-text-default-secondary);
}

.text-brand {
  color: var(--sds-color-text-brand-default);
}
```

### Con Tailwind CSS

```tsx
<div className="bg-[var(--sds-color-background-default-default)]">
  <p className="text-[var(--sds-color-text-default-default)]">
    Contenido
  </p>
</div>
```

## 3. Espaciado

### Gap (espaciado entre elementos)

```css
.gap-small {
  gap: var(--sds-size-space-200); /* 8px */
}

.gap-medium {
  gap: var(--sds-size-space-400); /* 16px */
}

.gap-large {
  gap: var(--sds-size-space-800); /* 32px */
}
```

### Padding

```css
.p-small {
  padding: var(--sds-size-space-200); /* 8px */
}

.p-medium {
  padding: var(--sds-size-space-400); /* 16px */
}

.p-large {
  padding: var(--sds-size-space-800); /* 32px */
}
```

### Con Tailwind CSS

```tsx
<div className="gap-[var(--sds-size-space-400)] p-[var(--sds-size-space-600)]">
  Contenido
</div>
```

## 4. Border Radius

```css
.rounded-small {
  border-radius: var(--sds-size-radius-100); /* 4px */
}

.rounded-medium {
  border-radius: var(--sds-size-radius-200); /* 8px */
}

.rounded-large {
  border-radius: var(--sds-size-radius-400); /* 16px */
}

.rounded-full {
  border-radius: var(--sds-size-radius-full); /* 9999px */
}
```

### Con Tailwind CSS

```tsx
<button className="rounded-[var(--sds-size-radius-400)]">
  Botón
</button>
```

## 5. Sombras

### Drop Shadows

```css
.shadow-0 {
  box-shadow: var(--sds-shadow-0);
}

.shadow-1 {
  box-shadow: var(--sds-shadow-1);
}

.shadow-2 {
  box-shadow: var(--sds-shadow-2);
}

.shadow-3 {
  box-shadow: var(--sds-shadow-3);
}

.shadow-4 {
  box-shadow: var(--sds-shadow-4);
}

.shadow-5 {
  box-shadow: var(--sds-shadow-5);
}
```

### Inner Shadows

```css
.shadow-inner-0 {
  box-shadow: var(--sds-shadow-inner-0);
}

.shadow-inner-1 {
  box-shadow: var(--sds-shadow-inner-1);
}
```

### Con Tailwind CSS

```tsx
<div className="shadow-[var(--sds-shadow-2)]">
  Contenido con sombra
</div>
```

## 6. Blur

```css
.blur-small {
  filter: blur(var(--sds-size-blur-100)); /* 4px */
}

.blur-medium {
  filter: blur(var(--sds-size-blur-200)); /* 8px */
}

.blur-large {
  filter: blur(var(--sds-size-blur-400)); /* 32px */
}
```

### Con Tailwind CSS

```tsx
<div className="blur-[var(--sds-size-blur-100)]">
  Contenido con blur
</div>
```

## Ejemplo Completo: Botón

```tsx
<button
  className="
    bg-[var(--sds-color-background-brand-default)]
    hover:bg-[var(--sds-color-background-brand-hover)]
    text-[var(--sds-color-text-default-default)]
    px-[var(--sds-size-space-400)]
    py-[var(--sds-size-space-300)]
    rounded-[var(--sds-size-radius-400)]
    shadow-[var(--sds-shadow-1)]
    text-[var(--sds-typography-body-size-medium)]
    font-[var(--sds-typography-weight-semibold)]
    transition-colors
  "
>
  Click me
</button>
```

## Variables Disponibles

### Tipografía
- Escalas: `--sds-typography-scale-01` a `--sds-typography-scale-10`
- Pesos: `--sds-typography-weight-thin` a `--sds-typography-weight-black`
- Familias: `--sds-typography-family-sans`, `--sds-typography-family-serif`, `--sds-typography-family-mono`

### Colores
- Background: `--sds-color-background-*`
- Text: `--sds-color-text-*`
- Border: `--sds-color-border-*`
- Icon: `--sds-color-icon-*`
- Shadow: `--sds-color-black-100` a `--sds-color-black-1000`

### Espaciado
- Space: `--sds-size-space-0` a `--sds-size-space-4000`
- Negative Space: `--sds-size-space-negative-*`

### Border Radius
- Radius: `--sds-size-radius-0`, `--sds-size-radius-100`, `--sds-size-radius-200`, `--sds-size-radius-300`, `--sds-size-radius-400`, `--sds-size-radius-full`

### Efectos
- Depth: `--sds-size-depth-*` (positivos y negativos)
- Blur: `--sds-size-blur-0` a `--sds-size-blur-400`
- Stroke: `--sds-size-stroke-border`, `--sds-size-stroke-focus-ring`
- Shadows: `--sds-shadow-0` a `--sds-shadow-5`, `--sds-shadow-inner-0` a `--sds-shadow-inner-4`

