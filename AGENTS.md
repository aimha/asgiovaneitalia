# AGENT GUIDELINES

This document outlines the conventions, commands, and best practices for agentic coding agents operating within this repository. Adhering to these guidelines ensures consistency, maintainability, and alignment with the project's standards.

## 1. Build, Lint, and Test Commands

### Dependency Installation
To install project dependencies:
```bash
npm install # Recommended for general use
# or
pnpm install
# or
yarn install
```
For CI environments, `npm ci` is often preferred:
```bash
npm ci
```

### Development Server
To start the development server:
```bash
npm run dev
# or
npm start
```

### Build Commands
To build the application for deployment:
*   **Staging build:**
    ```bash
    npm run build
    ```
*   **Production build:**
    ```bash
    npm run buildProd
    ```

### Serving Built Application
To preview the built application locally:
```bash
npm run serve
```

### Testing
This project uses a SolidJS/Vite setup, but explicit test commands or configurations were not found in `package.json`.
*   **Recommended Testing Frameworks:** For SolidJS, common testing frameworks include Vitest (with `@solidjs/testing-library`) or Jest. If you need to introduce testing, please propose the integration of one of these frameworks.
*   **Running all tests (placeholder):**
    ```bash
    # npm test # (if a 'test' script is added to package.json)
    # vitest # (if Vitest is configured)
    ```
*   **Running a single test (placeholder):**
    If a testing framework like Vitest is integrated, a single test can typically be run by specifying the test file path:
    ```bash
    # vitest src/components/MyComponent.test.jsx
    ```
    Or by using a pattern match:
    ```bash
    # vitest -t "Name of a specific test"
    ```

### Linting and Formatting
Explicit linting or formatting configurations (e.g., `.eslintrc.json`, `.prettierrc`, `ruff.toml`) were not found.
*   **Recommended Tools:** For JavaScript/TypeScript projects, ESLint and Prettier are standard. If you need to introduce linting or formatting, please propose the integration of these tools and define appropriate configurations.
*   **Running linting (placeholder):**
    ```bash
    # npm run lint # (if a 'lint' script is added to package.json)
    # eslint . --fix # (if ESLint is configured)
    ```
*   **Running formatting (placeholder):**
    ```bash
    # npm run format # (if a 'format' script is added to package.json)
    # prettier --write . # (if Prettier is configured)
    ```

## 2. Code Style Guidelines

Given the absence of explicit configuration files, the following general guidelines should be followed, aligning with common practices in SolidJS and modern JavaScript development.

### Imports
*   **Order:** Group imports by type:
    1.  Third-party libraries
    2.  Project-specific components/modules
    3.  Relative imports
*   **Consistency:** Use consistent import styles (e.g., all named imports, or a mix where appropriate).
*   **Absolute vs. Relative:** Prefer absolute imports for modules within `src/` to avoid deeply nested relative paths, if path aliases are configured. Otherwise, use relative paths.

### Formatting
*   **Indentation:** Use 2 spaces for indentation.
*   **Quotes:** Prefer single quotes for strings, unless double quotes are needed for strings containing single quotes.
*   **Semicolons:** Omit semicolons where optional (Modern JavaScript style).
*   **Trailing Commas:** Use trailing commas for multi-line arrays, objects, and function parameters.
*   **Braces:** Use K&R style (opening brace on the same line as the statement).

### Types (JavaScript with JSDoc or TypeScript)
While no `tsconfig.json` was found, indicating a pure JavaScript project, strive for type clarity.
*   **JSDoc:** Use JSDoc for complex function signatures, component props, and object shapes to improve readability and tooling support.
*   **Type Coercion:** Be explicit with type coercions.

### Naming Conventions
*   **Components:** PascalCase for SolidJS components (e.g., `MyComponent.jsx`).
*   **Functions:** camelCase for functions (e.g., `myFunction`).
*   **Variables:** camelCase for variables (e.g., `myVariable`).
*   **Constants:** SCREAMING_SNAKE_CASE for global constants (e.g., `MY_CONSTANT`).
*   **CSS Modules:** camelCase for CSS module class names.

### Error Handling
*   **Explicit Error Handling:** Use `try...catch` blocks for asynchronous operations or potentially failing synchronous code.
*   **Meaningful Errors:** Throw or return descriptive error messages.
*   **Propagate Errors:** Ensure errors are propagated appropriately to be handled at a higher level.

### SolidJS Specific Guidelines
*   **Reactivity:** Understand and correctly utilize SolidJS's reactivity system (signals, memos, effects).
*   **Props:** Destructure props in component functions.
*   **Conditional Rendering:** Use Solid's `<Show>` or logical `&&` for conditional rendering.
*   **Loops:** Use `<For>` for rendering lists of items.

## 3. Cursor and Copilot Rules

No specific `.cursor/rules/`, `.cursorrules`, or `.github/copilot-instructions.md` files were found in this repository. Therefore, no agent-specific rules are currently enforced beyond these general guidelines.
