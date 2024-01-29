# Scouting Lommel Frontend

Frontend to the new and refreshed [Scouting Lommel website](https://www.scoutinglommel.be).

[![Netlify Status](https://api.netlify.com/api/v1/badges/828df058-eb6b-49e5-8c74-37453d85336c/deploy-status)](https://app.netlify.com/sites/scouting-lommel/deploys)

## Table of contents

- [Tech stack](#tech-stack)
- [Installation](#installation)
- [Running locally](#running-locally)
- [Deployment](#deployment)

## Tech stack

- [NextJS](https://nextjs.org/) application

## Installation

```bash
npm install
```

For detailed instructions and requirements, check out the [getting started docs](/documentation/getting-started.md).

## Running locally

```bash
npm run dev
```

For detailed instructions, check out the [getting started docs](/documentation/getting-started.md#running-locally).

## Deployment

| Resource       | Provider                                                 | Comments                                                  |
| :------------- | :------------------------------------------------------- | :-------------------------------------------------------- |
| DNS            | [Cloudflare](https://www.cloudflare.com/) DNS management | DNS management with Cloudflare routing & DDoS protection. |
| Frontend app   | Hosting on [Netlify](https://www.netlify.app)            | Dynamic hosting with CI/CD capabilities for FE app.       |
| Backend CMS    | Hosting on [Railway](https://www.railway.app)            | Dynamic hosting with CI/CD capabilities for BE CMS.       |
| Error tracking | [Sentry](https://www.sentry.com)                         | Error tracking in a Sentry dashboard.                     |

For a detailed view and instructions, check out the [deployment docs](/documentation/deployment.md).
