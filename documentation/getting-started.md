# Getting started

## Table of contents

- [Tech stack](#tech-stack)
- [Requirements](#requirements)
- [Installation](#installation)
- [Running locally](#running-locally)
- [Building the project](#building-the-project)
  - [Local build](#local-build)
  - [Production build](#deployment)
- [Development](#development)
- [Trunk-based development](#trunk-based-development)

## Tech stack

- [NextJS](https://nextjs.org/) frontend application
- [Strapi](https://strapi.io/) headless CMS backend
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostCSS](https://postcss.org/) for CSS processing
- [Storybook](https://storybook.js.org/) for component development
- [next-intl](https://next-intl-docs.vercel.app/) for internationalization
- [react-hook-form](https://react-hook-form.com/) for form handling
- [next-auth](https://next-auth.js.org/) for authentication

## Requirements

- [Node.js](https://nodejs.org) (v18 or higher, recommended v20)
- [NPM](https://npmjs.com) (v8 and up)
- [NVM](https://github.com/nvm-sh/nvm) (optional but recommended)

> **Important**: Only NPM is allowed as package manager (enforced by preinstall script). Attempting to use Yarn or pnpm will fail.

### Environment Variables Required

Create a `.env` file with the required environment variables. See `.env.example` for the complete list of variables needed.

Contact the project maintainer for the actual values to use in development.

## Installation

1. Clone this repo onto your machine and navigate to the local repo

   ```bash
   git clone https://github.com/Scouting-Lommel/sl-website-fe.git
   cd sl-website-fe
   ```

2. Copy the example environment file

   ```bash
   cp .env.example .env
   ```

3. Fill in `.env`. For environment values, contact repo owner.

4. Set the `Node.js` version (optional but recommended)

   ```bash
   nvm use
   ```

5. Install dependencies

   ```bash
   npm install
   ```

## Running locally

1. [Clone and install](#installation) this repo
2. Start the development server

   ```bash
   npm run dev
   ```

   This will start:

   - Next.js development server
   - PostCSS watcher for component styles
   - PostCSS watcher for global styles

3. You can now visit the website's frontend on [port 3000](http://localhost:3000).

### Running Storybook

To run Storybook for component development:

```bash
npm run storybook:start
```

This will start Storybook on [port 6006](http://localhost:6006) with CSS processing enabled.

## Code Quality & Testing

### Linting and Formatting

```bash
npm run lint                   # Run all linters (ESLint, TypeScript, Stylelint, ls-lint)
npm run lint:eslint            # ESLint with auto-fix
npm run lint:typescript        # TypeScript type checking
npm run lint:stylelint         # Stylelint for .pcss files with auto-fix
npm run lint:ls-lint           # File/directory naming conventions
```

### Important Linting Rules

- **Import Order**: Strictly enforced ESLint rule with specific path group ordering
- **TypeScript**: Strict mode enabled, all types must be properly defined
- **CSS**: PostCSS files must follow naming conventions
- **File Naming**: Directory and file names must follow ls-lint rules

### Manual Code Quality Checks

Before committing, manually run the linting commands:

```bash
npm run lint              # Run all quality checks
```

This will check:
- ESLint rules and auto-fix issues
- TypeScript type checking
- Stylelint for CSS files
- File naming conventions (ls-lint)

**Best Practice**: Always run `npm run lint` before committing to ensure code quality.

## Building the project

### Local build

1. [Clone and install](#installation) this repo
2. Produce a production build using `npm`

   ```bash
   npm run build
   ```

   This will:

   - Run the prebuild script
   - Build CSS for components
   - Build global CSS
   - Build Next.js application

3. Start the app using

   ```bash
   npm start
   ```

### Deployment

Deployments for this project are fully automated using [Github Actions](https://github.com/features/actions) and [Netlify](https://www.netlify.com/). For more info, check out the [deployment docs](/documentation/deployment.md).

## Development and GIT flow

We follow a trunk-based development approach where `main` is our primary branch. All development work is done in feature branches that are eventually merged back into `main` through Pull Requests (PRs).

For more information, read the [Development and GIT flow documentation](./development-and-git-flow.md).
