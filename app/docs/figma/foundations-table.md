# Tabla de Fundaciones del Sistema de Diseño

## 1. Tipografía (Typography)

| Nombre                 | Tipo       | Variable CSS                                    | Tamaño (px) | Variable Tamaño (Referencia) | Peso           | Variable Peso (Referencia)     | Line Height | Font Family | Variable Familia (Referencia) | Uso                        |
| ---------------------- | ---------- | ----------------------------------------------- | ----------- | ---------------------------- | -------------- | ------------------------------ | ----------- | ----------- | ----------------------------- | -------------------------- |
| Title Hero             | Title      | `--sds-typography-title-hero-size`              | 72          | Scale 10                     | 700 (Bold)     | Weight Bold                    | 1.2         | Inter       | Family Sans                   | Títulos principales hero   |
| Title Page             | Title      | `--sds-typography-title-page-size-base`        | 48          | Scale 08                     | 700 (Bold)     | Weight Bold                    | 1.2         | Inter       | Family Sans                   | Títulos de página          |
| Title Page Small       | Title      | `--sds-typography-title-page-size-small`       | 40          | Scale 07                     | 700 (Bold)     | Weight Bold                    | 1.2         | Inter       | Family Sans                   | Títulos de página pequeño  |
| Title Page Large       | Title      | `--sds-typography-title-page-size-large`        | 64          | Scale 09                     | 700 (Bold)     | Weight Bold                    | 1.2         | Inter       | Family Sans                   | Títulos de página grande   |
| Subtitle               | Subtitle   | `--sds-typography-subtitle-size-base`          | 32          | Scale 06                     | 400 (Regular)  | Weight Regular                 | 1.2         | Inter       | Family Sans                   | Subtítulos                 |
| Subtitle Small         | Subtitle   | `--sds-typography-subtitle-size-small`         | 24          | Scale 05                     | 400 (Regular)  | Weight Regular                 | 1.2         | Inter       | Family Sans                   | Subtítulos pequeño         |
| Subtitle Large         | Subtitle   | `--sds-typography-subtitle-size-large`          | 40          | Scale 07                     | 400 (Regular)  | Weight Regular                 | 1.2         | Inter       | Family Sans                   | Subtítulos grande          |
| Heading                | Heading    | `--sds-typography-heading-size-base`            | 24          | Scale 05                     | 600 (SemiBold) | Weight Semibold                | 1.2         | Inter       | Family Sans                   | Encabezados principales    |
| Heading Small          | Heading    | `--sds-typography-heading-size-small`           | 20          | Scale 04                     | 600 (SemiBold) | Weight Semibold                | 1.2         | Inter       | Family Sans                   | Encabezados pequeño        |
| Heading Large          | Heading    | `--sds-typography-heading-size-large`           | 32          | Scale 06                     | 600 (SemiBold) | Weight Semibold                | 1.2         | Inter       | Family Sans                   | Encabezados grande         |
| Subheading             | Subheading | `--sds-typography-subheading-size-medium`       | 20          | Scale 04                     | 400 (Regular)  | Weight Regular                 | 1.2         | Inter       | Family Sans                   | Sub-encabezados            |
| Subheading Small       | Subheading | `--sds-typography-subheading-size-small`        | 16          | Scale 03                     | 400 (Regular)  | Weight Regular                 | 1.2         | Inter       | Family Sans                   | Sub-encabezados pequeño    |
| Subheading Large       | Subheading | `--sds-typography-subheading-size-large`         | 24          | Scale 05                     | 400 (Regular)  | Weight Regular                 | 1.2         | Inter       | Family Sans                   | Sub-encabezados grande     |
| Body Base              | Body       | `--sds-typography-body-size-medium`             | 16          | Scale 03                     | 400 (Regular)  | Weight Regular                 | 1.4         | Inter       | Family Sans                   | Texto base del cuerpo      |
| Body Strong            | Body       | `--sds-typography-body-size-medium`             | 16          | Scale 03                     | 600 (SemiBold) | Weight Semibold                | 1.4         | Inter       | Family Sans                   | Texto base en negrita      |
| Body Emphasis          | Body       | `--sds-typography-body-size-medium`             | 16          | Scale 03                     | 400 (Italic)   | Weight Regular Italic          | 1.4         | Inter       | Family Sans                   | Texto con énfasis          |
| Body Link              | Body       | `--sds-typography-body-size-medium`             | 16          | Scale 03                     | 400 (Regular)  | Weight Regular                 | 1.4         | Inter       | Family Sans                   | Enlaces en texto           |
| Body Small             | Body       | `--sds-typography-body-size-small`              | 14          | Scale 02                     | 400 (Regular)  | Weight Regular                 | 1.4         | Inter       | Family Sans                   | Texto pequeño              |
| Body Small Strong      | Body       | `--sds-typography-body-size-small`              | 14          | Scale 02                     | 600 (SemiBold) | Weight Semibold                | 1.4         | Inter       | Family Sans                   | Texto pequeño en negrita   |
| Body Large             | Body       | `--sds-typography-body-size-large`              | 20          | Scale 04                     | 400 (Regular)  | Weight Regular                 | 1.4         | Inter       | Family Sans                   | Texto grande              |
| Input                  | Input      | `--sds-typography-body-size-medium`             | 16          | Scale 03                     | 400 (Regular)  | Weight Regular                 | 1.0         | Inter       | Family Sans                   | Texto en campos de entrada |
| Body Code              | Code       | `--sds-typography-code-size-base`               | 16          | Body/Size Medium (alias)     | 400 (Regular)  | Body/Font Weight Regular (alias) | 1.0         | Roboto Mono | Family Mono                   | Código inline              |
| Code Small             | Code       | `--sds-typography-code-size-small`              | 14          | Body/Size Small (alias)      | 400 (Regular)  | Body/Font Weight Regular (alias) | 1.0         | Roboto Mono | Family Mono                   | Código inline pequeño      |
| Code Large             | Code       | `--sds-typography-code-size-large`              | 20          | Body/Size Large (alias)      | 400 (Regular)  | Body/Font Weight Regular (alias) | 1.0         | Roboto Mono | Family Mono                   | Código inline grande       |

### 1.1 Escalas de Tamaño (Typography Primitives)

| Escala | Variable CSS                    | Valor (px) | Uso                                    |
| ------ | ------------------------------- | ---------- | -------------------------------------- |
| Scale 01 | `--sds-typography-scale-01`     | 12         | Escala base mínima                     |
| Scale 02 | `--sds-typography-scale-02`     | 14         | Body Small, Code Small                 |
| Scale 03 | `--sds-typography-scale-03`     | 16         | Body Base, Input, Code Base            |
| Scale 04 | `--sds-typography-scale-04`     | 20         | Subheading, Heading Small, Body Large  |
| Scale 05 | `--sds-typography-scale-05`     | 24         | Heading Base, Subheading Large         |
| Scale 06 | `--sds-typography-scale-06`     | 32         | Subtitle Base, Heading Large           |
| Scale 07 | `--sds-typography-scale-07`     | 40         | Title Page Small, Subtitle Large       |
| Scale 08 | `--sds-typography-scale-08`     | 48         | Title Page Base                        |
| Scale 09 | `--sds-typography-scale-09`     | 64         | Title Page Large                       |
| Scale 10 | `--sds-typography-scale-10`     | 72         | Title Hero                             |

### 1.2 Pesos de Fuente (Typography Primitives)

| Peso        | Variable CSS                          | Valor | Uso                                    |
| ----------- | ------------------------------------- | ----- | -------------------------------------- |
| Weight Thin  | `--sds-typography-weight-thin`        | 100   | Peso mínimo                            |
| Weight Extra Light | `--sds-typography-weight-extra-light` | 200   | Peso extra ligero                      |
| Weight Light | `--sds-typography-weight-light`      | 300   | Peso ligero                            |
| Weight Regular | `--sds-typography-weight-regular`    | 400   | Peso regular (más usado)               |
| Weight Medium | `--sds-typography-weight-medium`     | 500   | Peso medio                             |
| Weight Semibold | `--sds-typography-weight-semibold`   | 600   | Body Strong, Heading                   |
| Weight Bold  | `--sds-typography-weight-bold`        | 700   | Title Hero, Title Page                 |
| Weight Extra Bold | `--sds-typography-weight-extra-bold` | 800   | Peso extra negrita                     |
| Weight Black | `--sds-typography-weight-black`      | 900   | Peso máximo                            |

### 1.3 Familias de Fuente (Typography Primitives)

| Familia     | Variable CSS                      | Valor      | Uso                    |
| ----------- | --------------------------------- | ---------- | ---------------------- |
| Family Sans | `--sds-typography-family-sans`    | Inter      | Fuente principal (default) |
| Family Serif | `--sds-typography-family-serif`   | Noto Serif | Fuente serif           |
| Family Mono | `--sds-typography-family-mono`    | Roboto Mono | Fuente monoespaciada (Code) |

## 2. Colores (Colors)

### 2.1 Background Colors

| Nombre                           | Variable                                         | HEX     | RGB              | Uso                          |
| -------------------------------- | ------------------------------------------------ | ------- | ---------------- | ---------------------------- |
| Background Default               | `--sds-color-background-default-default`         | #ffffff | rgb(255,255,255) | Fondo base                   |
| Background Default Hover         | `--sds-color-background-default-default-hover`   | #f5f5f5 | rgb(245,245,245) | Fondo base hover             |
| Background Secondary             | `--sds-color-background-default-secondary`       | #f5f5f5 | rgb(245,245,245) | Fondo secundario             |
| Background Secondary Hover       | `--sds-color-background-default-secondary-hover` | #e6e6e6 | rgb(230,230,230) | Fondo secundario hover       |
| Background Tertiary              | `--sds-color-background-default-tertiary`        | #d9d9d9 | rgb(217,217,217) | Fondo terciario              |
| Background Tertiary Hover        | `--sds-color-background-default-tertiary-hover`  | #b3b3b3 | rgb(179,179,179) | Fondo terciario hover        |
| Background Disabled              | `--sds-color-background-disabled-default`        | #d9d9d9 | rgb(217,217,217) | Fondo deshabilitado          |
| Background Brand Default         | `--sds-color-background-brand-default`           | #2c2c2c | rgb(44,44,44)    | Fondo marca base             |
| Background Brand Hover           | `--sds-color-background-brand-hover`             | #1e1e1e | rgb(30,30,30)    | Fondo marca hover            |
| Background Brand Secondary       | `--sds-color-background-brand-secondary`         | #e6e6e6 | rgb(230,230,230) | Fondo marca secundario       |
| Background Brand Secondary Hover | `--sds-color-background-brand-secondary-hover`   | #d9d9d9 | rgb(217,217,217) | Fondo marca secundario hover |
| Background Neutral Default       | `--sds-color-background-neutral-default`         | #5a5a5a | rgb(90,90,90)    | Fondo neutro base            |
| Background Neutral Hover         | `--sds-color-background-neutral-hover`           | #434343 | rgb(67,67,67)    | Fondo neutro hover           |
| Background Neutral Secondary     | `--sds-color-background-neutral-secondary`       | #cdcdcd | rgb(205,205,205) | Fondo neutro secundario      |

### 2.2 Text Colors

| Nombre               | Variable                             | HEX     | RGB              | Uso                    |
| -------------------- | ------------------------------------ | ------- | ---------------- | ---------------------- |
| Text Default         | `--sds-color-text-default-default`   | #1e1e1e | rgb(30,30,30)    | Texto base             |
| Text Secondary       | `--sds-color-text-default-secondary` | #757575 | rgb(117,117,117) | Texto secundario       |
| Text Tertiary        | `--sds-color-text-default-tertiary`  | #b3b3b3 | rgb(179,179,179) | Texto terciario        |
| Text Brand Default   | `--sds-color-text-brand-default`     | #2c2c2c | rgb(44,44,44)    | Texto marca base       |
| Text Brand Secondary | `--sds-color-text-brand-secondary`   | #444444 | rgb(68,68,68)    | Texto marca secundario |

### 2.3 Border Colors

| Nombre                 | Variable                               | HEX     | RGB              | Uso                    |
| ---------------------- | -------------------------------------- | ------- | ---------------- | ---------------------- |
| Border Default         | `--sds-color-border-default-default`   | #d9d9d9 | rgb(217,217,217) | Borde base             |
| Border Secondary       | `--sds-color-border-default-secondary` | #757575 | rgb(117,117,117) | Borde secundario       |
| Border Brand Default   | `--sds-color-border-brand-default`     | #2c2c2c | rgb(44,44,44)    | Borde marca base       |
| Border Brand Secondary | `--sds-color-border-brand-secondary`   | #444444 | rgb(68,68,68)    | Borde marca secundario |

### 2.4 Icon Colors

| Nombre               | Variable                             | HEX     | RGB              | Uso                    |
| -------------------- | ------------------------------------ | ------- | ---------------- | ---------------------- |
| Icon Default         | `--sds-color-icon-default-default`   | #1e1e1e | rgb(30,30,30)    | Icono base             |
| Icon Secondary       | `--sds-color-icon-default-secondary` | #757575 | rgb(117,117,117) | Icono secundario       |
| Icon Brand Default   | `--sds-color-icon-brand-default`     | #2c2c2c | rgb(44,44,44)    | Icono marca base       |
| Icon Brand Secondary | `--sds-color-icon-brand-secondary`   | #444444 | rgb(68,68,68)    | Icono marca secundario |

### 2.5 Primary Colors (Ya extraídos)

| Nombre          | Variable             | RGB              | HEX     | Uso                         |
| --------------- | -------------------- | ---------------- | ------- | --------------------------- |
| Primary Default | test-primary/default | rgb(163, 13, 13) | #A30D0D | Color primario por defecto  |
| Primary 200     | test-primary/200     | rgb(123, 10, 10) | #7B0A0A | Color primario variante 200 |

## 3. Espaciado (Spacing)

### 3.1 Gap (Espaciado entre elementos)

| Nombre | Variable CSS                | Valor (px) | Valor (rem) | Uso                  |
| ------ | --------------------------- | ---------- | ----------- | -------------------- |
| Gap 0  | `--sds-size-space-0`        | 0          | 0           | Sin espacio          |
| Gap 050 | `--sds-size-space-050`      | 2          | 0.125       | Espacio mínimo extra |
| Gap 1  | `--sds-size-space-100`     | 4          | 0.25        | Espacio mínimo       |
| Gap 150 | `--sds-size-space-150`     | 6          | 0.375       | Espacio pequeño extra |
| Gap 2  | `--sds-size-space-200`     | 8          | 0.5         | Espacio pequeño      |
| Gap 3  | `--sds-size-space-300`     | 12         | 0.75        | Espacio medio        |
| Gap 4  | `--sds-size-space-400`     | 16         | 1           | Espacio grande       |
| Gap 5  | `--sds-size-space-500`     | 20*        | 1.25*       | Espacio extra grande |
| Gap 6  | `--sds-size-space-600`     | 24         | 1.5         | Espacio muy grande   |
| Gap 7  | `--sds-size-space-700`     | 28*        | 1.75*       | Espacio máximo       |
| Gap 8  | `--sds-size-space-800`      | 32         | 2           | Espacio extra máximo |
| Gap 9  | `--sds-size-space-1200`    | 48         | 3           | Espacio ultra grande |
| Gap 10 | `--sds-size-space-1600`    | 64         | 4           | Espacio ultra máximo |
| Gap 11 | `--sds-size-space-2400`    | 96         | 6           | Espacio extra máximo |
| Gap 12 | `--sds-size-space-4000`    | 160        | 10          | Espacio máximo absoluto |

\* Valores inferidos basados en la escala observada

### 3.2 Padding (Relleno interno)

| Nombre      | Variable CSS                | Valor (px) | Valor (rem) | Uso                  |
| ----------- | --------------------------- | ---------- | ----------- | -------------------- |
| Padding 0   | `--sds-size-space-0`        | 0          | 0           | Sin padding          |
| Padding 050 | `--sds-size-space-050`      | 2          | 0.125       | Padding mínimo extra |
| Padding 1   | `--sds-size-space-100`      | 4          | 0.25        | Padding mínimo       |
| Padding 150 | `--sds-size-space-150`      | 6          | 0.375       | Padding pequeño extra |
| Padding 2   | `--sds-size-space-200`      | 8          | 0.5         | Padding pequeño      |
| Padding 3   | `--sds-size-space-300`      | 12         | 0.75        | Padding medio        |
| Padding 4   | `--sds-size-space-400`      | 16         | 1           | Padding grande       |
| Padding 5   | `--sds-size-space-500`      | 20*        | 1.25*       | Padding extra grande |
| Padding 6   | `--sds-size-space-600`      | 24         | 1.5         | Padding muy grande   |
| Padding 7   | `--sds-size-space-700`      | 28*        | 1.75*       | Padding máximo       |
| Padding 8   | `--sds-size-space-800`      | 32         | 2           | Padding extra máximo |
| Padding 9   | `--sds-size-space-1200`     | 48         | 3           | Padding ultra grande |
| Padding 10  | `--sds-size-space-1600`     | 64         | 4           | Padding ultra máximo |
| Padding 11  | `--sds-size-space-2400`     | 96         | 6           | Padding extra máximo |
| Padding 12  | `--sds-size-space-4000`     | 160        | 10          | Padding máximo absoluto |

\* Valores inferidos basados en la escala observada

**Nota**: Padding y Gap comparten las mismas variables de espaciado (`--sds-size-space-*`). La diferencia está en cómo se aplican (padding interno vs gap entre elementos).

## 4. Border Radius

| Nombre      | Variable CSS                | Valor (px) | Valor (rem) | Uso                   |
| ----------- | --------------------------- | ---------- | ----------- | --------------------- |
| Radius 0    | `--sds-size-radius-0`       | 0          | 0           | Sin radio             |
| Radius 1    | `--sds-size-radius-100`      | 4          | 0.25        | Radio pequeño         |
| Radius 2    | `--sds-size-radius-200`      | 8          | 0.5         | Radio medio           |
| Radius 3    | `--sds-size-radius-300`     | 12*        | 0.75*       | Radio grande          |
| Radius 4    | `--sds-size-radius-400`     | 16         | 1           | Radio extra grande    |
| Radius Full | `--sds-size-radius-full`    | 9999       | 624.9375    | Radio completo (pill) |

\* Valor inferido basado en la escala observada

## 5. Efectos (Effects)

### 5.1 Drop Shadows

| Nombre   | X (px) | Variable X | Y (px) | Variable Y | Blur (px) | Variable Blur | Spread (px) | Variable Spread | Color                                   | Variable Color | Opacidad | Uso                                   |
| -------- | ------ | ---------- | ------ | ---------- | --------- | ------------- | ----------- | --------------- | --------------------------------------- | -------------- | -------- | ------------------------------------- |
| Shadow 0 | 0      | `--sds-size-depth-0` | 1      | `--sds-size-depth-025` | 4         | `--sds-size-depth-100` | 0           | `--sds-size-depth-0` | rgba(12,12,13,0.05)                     | `--sds-color-black-100` | 5%       | Sombra base                           |
| Shadow 1 | 0      | `--sds-size-depth-0` | 1      | `--sds-size-depth-025` | 4         | `--sds-size-depth-100` | 0           | `--sds-size-depth-0` | rgba(12,12,13,0.1), rgba(12,12,13,0.05) | `--sds-color-black-200`, `--sds-color-black-100` | 10%, 5%  | Sombra pequeña (múltiples capas)      |
| Shadow 2 | 0      | `--sds-size-depth-0` | 4      | `--sds-size-depth-100` | 4         | `--sds-size-depth-100` | -1          | `--sds-size-depth-negative-025` | rgba(12,12,13,0.1), rgba(12,12,13,0.05) | `--sds-color-black-200`, `--sds-color-black-100` | 10%, 5%  | Sombra media (múltiples capas)        |
| Shadow 3 | 0      | `--sds-size-depth-0` | 16     | `--sds-size-depth-400` | 32        | `--sds-size-depth-800` | -4          | `--sds-size-depth-negative-100` | rgba(12,12,13,0.1), rgba(12,12,13,0.05) | `--sds-color-black-200`, `--sds-color-black-100` | 10%, 5%  | Sombra grande (múltiples capas)       |
| Shadow 4 | 0      | `--sds-size-depth-0` | 16     | `--sds-size-depth-400` | 16        | `--sds-size-depth-400` | -8          | `--sds-size-depth-negative-200` | rgba(12,12,13,0.1), rgba(12,12,13,0.05) | `--sds-color-black-200`, `--sds-color-black-100` | 10%, 5%  | Sombra extra grande (múltiples capas) |
| Shadow 5 | 0      | `--sds-size-depth-0` | 16     | `--sds-size-depth-400` | 32        | `--sds-size-depth-800` | -8          | `--sds-size-depth-negative-200` | rgba(12,12,13,0.4)                      | `--sds-color-black-400` | 40%      | Sombra máxima                         |

### 5.1.1 Variables de Depth (para sombras)

| Variable CSS                      | Valor (px) | Uso                    |
| --------------------------------- | ---------- | ---------------------- |
| `--sds-size-depth-0`              | 0          | Sin desplazamiento     |
| `--sds-size-depth-025`            | 1          | Desplazamiento mínimo |
| `--sds-size-depth-100`            | 4          | Desplazamiento pequeño |
| `--sds-size-depth-200`            | 8          | Desplazamiento medio   |
| `--sds-size-depth-400`            | 16         | Desplazamiento grande  |
| `--sds-size-depth-800`            | 32         | Desplazamiento extra grande |
| `--sds-size-depth-1200`           | 48         | Desplazamiento máximo  |
| `--sds-size-depth-negative-025`  | -1         | Spread negativo mínimo |
| `--sds-size-depth-negative-100`  | -4         | Spread negativo pequeño |
| `--sds-size-depth-negative-200`  | -8         | Spread negativo medio  |
| `--sds-size-depth-negative-400`  | -16        | Spread negativo grande |
| `--sds-size-depth-negative-800`  | -32        | Spread negativo extra grande |
| `--sds-size-depth-negative-1200` | -48        | Spread negativo máximo |

### 5.2 Inner Shadows

| Nombre         | X (px) | Variable X | Y (px) | Variable Y | Blur (px) | Variable Blur | Spread (px) | Variable Spread | Color               | Variable Color | Opacidad  | Uso                         |
| -------------- | ------ | ---------- | ------ | ---------- | --------- | ------------- | ----------- | --------------- | ------------------- | -------------- | --------- | --------------------------- |
| Inner Shadow 0 | 0      | `--sds-size-depth-0` | 1      | `--sds-size-depth-025` | 4         | `--sds-size-depth-100` | 0           | `--sds-size-depth-0` | rgba(12,12,13,0.05) | `--sds-color-black-100` | 5%        | Sombra interna base         |
| Inner Shadow 1 | 0      | `--sds-size-depth-0` | 4      | `--sds-size-depth-100` | 4         | `--sds-size-depth-100` | -1          | `--sds-size-depth-negative-025` | rgba(12,12,13,0.05) | `--sds-color-black-100` | 5%        | Sombra interna pequeña      |
| Inner Shadow 2 | 0      | `--sds-size-depth-0` | 16     | `--sds-size-depth-400` | 32        | `--sds-size-depth-800` | -4          | `--sds-size-depth-negative-100` | rgba(12,12,13,0.1)  | `--sds-color-black-200` | 10%       | Sombra interna media        |
| Inner Shadow 3 | 0      | `--sds-size-depth-0` | 16     | `--sds-size-depth-400` | 16        | `--sds-size-depth-400` | -8          | `--sds-size-depth-negative-200` | rgba(12,12,13,0.1)  | `--sds-color-black-200` | 10%       | Sombra interna grande       |
| Inner Shadow 4 | 0      | `--sds-size-depth-0` | 16     | `--sds-size-depth-400` | 32        | `--sds-size-depth-800` | -8          | `--sds-size-depth-negative-200` | rgba(12,12,13,0.4)  | `--sds-color-black-400` | 40%       | Sombra interna extra grande |
| Inner Shadow 5 | _Extraer_ | _Extraer_ | _Extraer_ | _Extraer_ | _Extraer_ | _Extraer_ | _Extraer_ | _Extraer_ | _Extraer_ | _Extraer_ | _Extraer_ | Sombra interna máxima       |

### 5.3 Blur

| Nombre | Variable CSS              | Valor (px) | Uso               |
| ------ | ------------------------- | ---------- | ----------------- |
| Blur 0 | `--sds-size-blur-0`       | 0          | Sin blur          |
| Blur 1 | `--sds-size-blur-100`     | 4          | Blur pequeño      |
| Blur 2 | `--sds-size-blur-200`     | 8*         | Blur medio        |
| Blur 3 | `--sds-size-blur-300`     | 16*        | Blur grande       |
| Blur 4 | `--sds-size-blur-400`     | 32*        | Blur extra grande |

\* Valores inferidos basados en la progresión observada (solo blur-100 está definido en Figma con valor 4px)

## Notas

### Relaciones entre Variables

El sistema de diseño de Figma utiliza un sistema de variables jerárquico donde:

1. **Variables Primitivas**: Son las variables base que definen valores fundamentales:
   - **Typography Primitives**: Escalas (Scale 01-10), Pesos (Weight Regular, Bold, etc.), Familias (Family Sans, Mono, Serif)
   - **Size**: Espaciado (Space), Radio (Radius), Profundidad (Depth), Blur, Stroke
   - **Color Primitives**: Colores base (Slate, Brand, Red, Yellow, Green, Pink, Gray, Black, White)

2. **Variables Compuestas**: Hacen referencia a las primitivas usando aliases:
   - Las variables de tipografía (Title Hero, Body, etc.) referencian las escalas y pesos primitivos
   - Las variables de tamaño (espaciado, radius) son primitivas directas
   - Las variables de color semánticas (background-default, text-brand) pueden referenciar primitivos

3. **Aliases**: Cuando una variable hace referencia a otra, se indica en la columna "Variable (Referencia)":
   - Ejemplo: `Code/Size Base` → `Body/Size Medium` (alias)
   - Ejemplo: `Title Hero/Size` → `Scale 10` (alias)

### Convenciones

- Los valores marcados con "_Extraer_" aún no han sido extraídos automáticamente y deben completarse manualmente desde Figma
- Los valores marcados con `*` fueron inferidos basándome en patrones observados (escala de 4px para espaciado, progresión lógica para blur)
- Para extraer valores específicos, selecciona cada elemento en Figma y revisa sus propiedades en el panel derecho
- Los colores pueden estar definidos como variables en Figma (ya tenemos algunas en `test-ds.json`)
- Los valores de espaciado siguen una escala basada en múltiplos de 4px (4, 8, 12, 16, 24, 32, 64, 96, 160px)
- Los efectos de sombra pueden tener múltiples capas en Figma
- Las variables CSS en Figma usan el prefijo `--sds-` (SDS = Sistema de Diseño)
- Los valores de rem se calculan asumiendo un tamaño de fuente base de 16px (1rem = 16px)
- El sistema de colores usa nomenclatura semántica (default, secondary, tertiary, hover, brand, neutral, disabled) en lugar de números
