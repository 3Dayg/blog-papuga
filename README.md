# Chapter 1 - Project Setup Notes

This project started from a standard Vite + React template and was extended to practice code quality and commit workflow tools.

## What I changed from standard Vite

Default Vite React already gives:

- React app structure
- Vite scripts: `dev`, `build`, `preview`
- Basic ESLint setup

I added and configured:

1. **Prettier** for automatic code formatting
2. **Extended ESLint** rules (React + accessibility + Prettier compatibility)
3. **Husky** git hooks
4. **lint-staged** to run checks only on staged files
5. **Commitlint** to enforce conventional commit messages

## Tool by tool (study notes)

## 1) ESLint

**What is ESLint?**

ESLint is a static analysis tool for JavaScript/React. It checks code for problems and rule violations before runtime.

**In this project:**

- Config file: `.eslintrc.json`
- Ignore file: `.eslintignore`
- Script: `npm run lint` runs ESLint on `src`
- Added rules/extensions:
  - `eslint:recommended`
  - `plugin:react/recommended`
  - `plugin:react/jsx-runtime`
  - `plugin:jsx-a11y/recommended` (accessibility checks)
  - `prettier` (disables formatting-conflicting ESLint rules)

**Why it helps:**

- Finds mistakes early
- Encourages consistent, maintainable code
- Catches common React issues
- Adds accessibility guidance

## 2) Prettier

**What is Prettier?**

Prettier is a code formatter. It automatically formats code to a consistent style.

**In this project:**

- Config file: `.prettierrc.json`
- Ignore file: `.prettierignore`
- Formatting style includes:
  - no semicolons
  - single quotes
  - JSX single quotes
  - print width 80
  - trailing commas

**Why it helps:**

- Removes style debates
- Keeps code readable and consistent
- Works well with ESLint when using `eslint-config-prettier`

## 3) Husky

**What is Husky?**

Husky lets you run scripts on git hooks (before commit, during commit message checks, etc.).

**In this project:**

- Added `prepare` script in `package.json`: `husky install`
- Hooks:
  - `.husky/pre-commit` -> runs `npx lint-staged`
  - `.husky/commit-msg` -> runs `npx commitlint --edit ${1}`

**Why it helps:**

- Blocks bad code or bad commit messages before they reach the repository

## 4) lint-staged

**What is lint-staged?**

lint-staged runs commands only on files that are staged for commit.

**In this project (`package.json`):**

- For `**/*.{js,jsx}` staged files:
  1.  `prettier --write`
  2.  `eslint --fix`

**Why it helps:**

- Fast checks
- Prevents formatting/lint issues from being committed

## 5) Commitlint

**What is Commitlint?**

Commitlint validates commit messages against a convention (here: Conventional Commits).

**In this project:**

- Config file: `.commitlintrc.json`
- Extends: `@commitlint/config-conventional`
- Triggered by Husky `commit-msg` hook

**Why it helps:**

- Makes commit history cleaner
- Improves collaboration and changelog generation

## Dependencies I added (vs standard starter)

- `prettier`
- `eslint-config-prettier`
- `eslint-plugin-jsx-a11y`
- `husky`
- `lint-staged`
- `@commitlint/cli`
- `@commitlint/config-conventional`

## Workflow when I commit

1. I stage files.
2. `pre-commit` runs `lint-staged`.
3. Staged JS/JSX files are auto-formatted and auto-fixed.
4. I enter a commit message.
5. `commit-msg` runs Commitlint and checks message format.
6. Commit succeeds only if checks pass.

## Example commit message format

Use Conventional Commits, for example:

- `feat(auth): add login form validation`
- `fix(ui): correct button alignment`
- `chore(config): update eslint rules`

## Commands to remember

- `npm run dev` -> run dev server
- `npm run build` -> production build
- `npm run preview` -> preview production build
- `npm run lint` -> lint source files

## What I learned in this chapter

- How to turn a basic Vite project into a safer, cleaner workflow
- Difference between linting (ESLint) and formatting (Prettier)
- How git hooks enforce quality automatically
- Why commit conventions matter in real projects
