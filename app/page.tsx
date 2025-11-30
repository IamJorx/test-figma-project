import { Button, IconButton, ButtonGroup } from "./components/buttons";

// Iconos simples para los ejemplos
const StarIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 1L9.5 5.5L14 7L9.5 8.5L8 13L6.5 8.5L2 7L6.5 5.5L8 1Z"
      fill="currentColor"
    />
  </svg>
);

const XIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 4L4 12M4 4L12 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-6xl flex-col gap-12 py-16 px-8 bg-white dark:bg-black">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-black dark:text-zinc-50">
            Sistema de Diseño - Componentes de Botones
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Implementación de los componentes de botones basados en el diseño de Figma
          </p>
        </div>

        {/* Button Component - Variants */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            Button - Variantes
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="neutral">Neutral</Button>
            <Button variant="subtle">Subtle</Button>
            <Button variant="danger">Danger</Button>
          </div>
        </section>

        {/* Button Component - Sizes */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            Button - Tamaños
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" size="small">
              Small
            </Button>
            <Button variant="primary" size="medium">
              Medium
            </Button>
            <Button variant="neutral" size="small">
              Small
            </Button>
            <Button variant="neutral" size="medium">
              Medium
            </Button>
          </div>
        </section>

        {/* Button Component - States */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            Button - Estados
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Default</Button>
            <Button variant="primary" disabled>
              Disabled
            </Button>
            <Button variant="neutral">Default</Button>
            <Button variant="neutral" disabled>
              Disabled
            </Button>
            <Button variant="subtle">Default</Button>
            <Button variant="subtle" disabled>
              Disabled
            </Button>
            <Button variant="danger">Default</Button>
            <Button variant="danger" disabled>
              Disabled
            </Button>
          </div>
        </section>

        {/* Button Component - With Icons */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            Button - Con Iconos
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" leftIcon={<StarIcon />}>
              Button
            </Button>
            <Button variant="primary" rightIcon={<XIcon />}>
              Button
            </Button>
            <Button variant="primary" leftIcon={<StarIcon />} rightIcon={<XIcon />}>
              Button
            </Button>
            <Button variant="neutral" leftIcon={<StarIcon />}>
              Button
            </Button>
            <Button variant="subtle" leftIcon={<StarIcon />}>
              Button
            </Button>
          </div>
        </section>

        {/* IconButton Component */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            IconButton
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-sm text-zinc-600 dark:text-zinc-400 w-24">
                Primary:
              </span>
              <IconButton
                variant="primary"
                size="small"
                icon={<StarIcon />}
                aria-label="Favorito pequeño"
              />
              <IconButton
                variant="primary"
                size="medium"
                icon={<StarIcon />}
                aria-label="Favorito mediano"
              />
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-sm text-zinc-600 dark:text-zinc-400 w-24">
                Neutral:
              </span>
              <IconButton
                variant="neutral"
                size="small"
                icon={<StarIcon />}
                aria-label="Neutral pequeño"
              />
              <IconButton
                variant="neutral"
                size="medium"
                icon={<StarIcon />}
                aria-label="Neutral mediano"
              />
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-sm text-zinc-600 dark:text-zinc-400 w-24">
                Subtle:
              </span>
              <IconButton
                variant="subtle"
                size="small"
                icon={<StarIcon />}
                aria-label="Subtle pequeño"
              />
              <IconButton
                variant="subtle"
                size="medium"
                icon={<StarIcon />}
                aria-label="Subtle mediano"
              />
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-sm text-zinc-600 dark:text-zinc-400 w-24">
                Disabled:
              </span>
              <IconButton
                variant="primary"
                size="medium"
                icon={<StarIcon />}
                disabled
                aria-label="Deshabilitado"
              />
              <IconButton
                variant="neutral"
                size="medium"
                icon={<StarIcon />}
                disabled
                aria-label="Deshabilitado"
              />
            </div>
          </div>
        </section>

        {/* ButtonGroup Component */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            ButtonGroup - Alineaciones
          </h2>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Align: Start
              </span>
              <ButtonGroup align="start">
                <Button variant="primary">Button 1</Button>
                <Button variant="neutral">Button 2</Button>
                <Button variant="subtle">Button 3</Button>
              </ButtonGroup>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Align: Center
              </span>
              <ButtonGroup align="center">
                <Button variant="primary">Button 1</Button>
                <Button variant="neutral">Button 2</Button>
                <Button variant="subtle">Button 3</Button>
              </ButtonGroup>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Align: End
              </span>
              <ButtonGroup align="end">
                <Button variant="primary">Button 1</Button>
                <Button variant="neutral">Button 2</Button>
                <Button variant="subtle">Button 3</Button>
              </ButtonGroup>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Align: Justify
              </span>
              <ButtonGroup align="justify">
                <Button variant="primary">Button 1</Button>
                <Button variant="neutral">Button 2</Button>
                <Button variant="subtle">Button 3</Button>
              </ButtonGroup>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Align: Stack
              </span>
              <ButtonGroup align="stack">
                <Button variant="primary">Button 1</Button>
                <Button variant="neutral">Button 2</Button>
                <Button variant="subtle">Button 3</Button>
              </ButtonGroup>
            </div>
          </div>
        </section>

        {/* Complete Examples */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            Ejemplos Completos
          </h2>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Botones con todas las variantes y tamaños
              </span>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="small">
                  Primary Small
                </Button>
                <Button variant="primary" size="medium">
                  Primary Medium
                </Button>
                <Button variant="neutral" size="small">
                  Neutral Small
                </Button>
                <Button variant="neutral" size="medium">
                  Neutral Medium
                </Button>
                <Button variant="subtle" size="small">
                  Subtle Small
                </Button>
                <Button variant="subtle" size="medium">
                  Subtle Medium
                </Button>
                <Button variant="danger" size="small">
                  Danger Small
                </Button>
                <Button variant="danger" size="medium">
                  Danger Medium
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Botones con iconos en diferentes variantes
              </span>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" leftIcon={<StarIcon />} rightIcon={<XIcon />}>
                  Button
                </Button>
                <Button variant="neutral" leftIcon={<StarIcon />} rightIcon={<XIcon />}>
                  Button
                </Button>
                <Button variant="subtle" leftIcon={<StarIcon />} rightIcon={<XIcon />}>
                  Button
                </Button>
                <Button variant="danger" leftIcon={<StarIcon />} rightIcon={<XIcon />}>
                  Button
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
