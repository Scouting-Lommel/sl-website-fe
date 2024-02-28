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

## Requirements

- [Node.js](https://nodejs.org) (v14.6.0 and up)
- [NPM](https://npmjs.com) (v6 and up)
- [NVM](https://github.com/nvm-sh/nvm) (optional but recommended)

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

3. You can now visit the website's frontend on [port 3000](http://localhost:3000).

## Building the project

### Local build

1. [Clone and install](#installation) this repo
2. Produce a production build using `npm`

   ```bash
   npm run build
   ```

3. Start the app using

   ```bash
   npm start
   ```

### Deployment

Deployments for this project are fully automated using [Github Actions](https://github.com/features/actions) and [Netlify](https://www.netlify.com/). For more info, check out the [deployment docs](/documentation/deployment.md).

## Development

### Trunk based development

> Trunk based development: a source-control branching model, where developers collaborate on code in a single branch called ‘trunk’, resist any pressure to create other long-lived development branches by employing documented techniques. They therefore avoid merge hell, do not break the build, and live happily ever after.

Instead of the traditional git-flow, this project is based on the [trunk based development](https://trunkbaseddevelopment.com/) principle.
