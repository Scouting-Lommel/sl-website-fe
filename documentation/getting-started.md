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

- [Node.js](https://nodejs.org) (v14.6.0 and up)
- [NPM](https://npmjs.com) (v6 and up)
- [NVM](https://github.com/nvm-sh/nvm) (optional but recommended)

> Note: Only NPM is allowed as package manager (enforced by preinstall script)

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
npm run storybook
```

This will start Storybook on port 6006 with CSS processing enabled.

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
