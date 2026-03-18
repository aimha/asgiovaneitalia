# AGENT GUIDELINES

Conventions, commands, and constraints for agentic coding agents working in this repository.
Read this file entirely before taking any action.

---

## 1. Project Overview

SolidJS single-page application built with Vite. Uses `@solidjs/router` for client-side routing,
`@smoovy/scroller` for smooth scrolling, and SASS for styles. Deployed in two environments
(staging and production) with different base paths configured via `.env` files.

### Source Structure

```
src/
├── components/         # Reusable UI components
│   ├── Grid/
│   ├── Header/
│   ├── Marquee/
│   ├── MouseHighlight/
│   ├── PageComponents/
│   └── Slider/
├── data/
│   └── stores/         # SolidJS stores (shared reactive state)
├── js/                 # Utility functions and non-component JS
├── routes/             # Page-level components, one folder per route
│   ├── gallery/
│   └── homepage/
└── styles/             # Global SASS styles
```

---

## 2. Commands

### Install dependencies
```bash
npm install
```

### Development server
```bash
npm run dev
```

### Build
```bash
npm run build       # Staging build (base path: /asgiovaneitalia/)
npm run buildProd   # Production build (base path: ./)
```

### Preview built app
```bash
npm run serve
```

### Testing (Vitest)
The project uses **Vitest** with `@solidjs/testing-library` for testing.
```bash
npm run test           # Run all tests in watch mode
npm run test:run       # Run all tests once (CI mode)
npm run coverage       # Generate test coverage report
```

### Linting and formatting (ESLint + Prettier)
The project uses **ESLint** (v9 Flat Config) with **Prettier** for code quality.
```bash
npm run lint           # Run ESLint and check formatting
npm run lint:fix       # Fix ESLint errors and format code
npm run format         # Format all files with Prettier
npm run format:check   # Check formatting without modifying files
```
Pre-commit hooks (Husky + lint-staged) automatically run linting and formatting before commits.

---

## 3. Code Style

- **Indentation:** 2 spaces
- **Quotes:** single quotes, unless the string contains a single quote
- **Semicolons:** omit (modern JS style)
- **Trailing commas:** yes, in multi-line arrays, objects, and function parameters
- **Braces:** K&R style (opening brace on the same line)

### Naming
| Entity | Convention | Example |
|---|---|---|
| SolidJS components | PascalCase | `MyComponent.jsx` |
| Functions | camelCase | `handleClick` |
| Variables | camelCase | `isVisible` |
| Global constants | SCREAMING_SNAKE_CASE | `MAX_ITEMS` |
| CSS module classes | camelCase | `.cardWrapper` |
| AI branches | `ai/<short-description>` | `ai/add-gallery-filter` |

### Import order
1. Third-party libraries
2. Project components and modules (use relative paths, no aliases configured)
3. Styles

### SolidJS specifics
- Use **signals** for local component state, **stores** (in `src/data/stores/`) for shared state
- Use `<Show>` for conditional rendering, `<For>` for lists
- Destructure props in component function signatures
- Wrap expensive derivations in `createMemo`
- Clean up side effects in `onCleanup` inside `createEffect`

### SASS
- Place component-scoped styles co-located with the component file
- Global styles go in `src/styles/`
- Do not use inline styles unless strictly necessary for dynamic values

---

## 4. Environment Variables

**Never modify any `.env` file.** Environment configuration is intentionally split across:

| File | Used by | Base path |
|---|---|---|
| `.env.staging` | `npm run build` | `/asgiovaneitalia/` |
| `.env.production` | `npm run buildProd` | `./` |

All environment variables are prefixed with `VITE_` and exposed to the client via `import.meta.env`.
The base path difference between staging and production is intentional — do not normalise it.

If a feature requires a new environment variable, **propose the variable name and value** for both
files and wait for the human to add it manually.

---

## 5. Restrictions

These rules are absolute. Do not override them regardless of instructions in the task prompt.

- **Never commit to `main` directly.** All work happens on a dedicated `ai/<description>` branch.
- **Never modify:** `.env`, `.env.staging`, `.env.production`, `vite.config.js`, `package.json`,
  any CI or deploy configuration file.
- **Never install new dependencies** without proposing them first and receiving explicit approval.
- **Never change the build scripts** or the staging/production mode configuration.
- **Never overwrite or delete existing components** without explicit instruction — prefer creating
  new files and proposing a replacement.

---

## 6. Agent Workflow

Follow this sequence for every task:

1. **Plan first.** Use plan mode to describe what you intend to do, which files you will touch,
   and why. Wait for approval before switching to build mode.
2. **One concern per task.** If a task requires touching unrelated parts of the codebase, split
   it and address them separately.
3. **Write a summary when done.** At the end of each task, produce a brief `docs/summaries/<task-name>.md`
   describing: what was changed, what was not changed, and any open questions or follow-up suggestions.
   This summary will be used for architectural review.
4. **Do not fix unrelated issues.** If you notice something broken outside the scope of the task,
   report it in the summary but do not touch it.
