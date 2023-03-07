# Deployment

TODO: write deployment manual

## Table of contents

- [Resource providers](#resource-providers)
  - [DNS](#dns)
  - [Frontend hosting](#frontend-hosting)
  - [Backend hosting](#backend-hosting)
  - [Error tracking](#error-tracking)
  - [E-mail setup](#e-mail-setup)
- [Environments](#environments)

## Resource providers

| Resource       | Provider                                                  | Comments                                                                         |
| :------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------- |
| DNS            | [Netlify](https://www.netlify.app/) DNS management        | DNS management with Netlify routing & DDoS protection.                           |
| Frontend app   | Hosting on [Netlify](https://www.netlify.app)             | Dynamic hosting with CI/CD capabilities for FE app.                              |
| Backend CMS    | Hosting on [Railway](https://www.railway.app)             | Dynamic hosting with CI/CD capabilities for BE CMS.                              |
| Database       | MySQL database hosted on [Vimexx](https://www.vimexx.be/) | Both the development and production environments have a separate MySQL database. |
| Error tracking | [Sentry](https://www.sentry.com)                          | Error tracking in a Sentry dashboard.                                            |
| E-mail setup   | To be determined                                          | Check out the [e-mail setup docs](/documentation/e-mail-setup.md).               |

### DNS

DNS records are managed by [Netlify](https://www.netlify.app). Netlify also offers a layer of securities like DDoS protection.

### Frontend hosting

The website's frontend is a NextJS application and is hosted on [Netlify](https://www.netlify.app). A CI/CD pipeline has been set up for automatic deployment when pushing changes and/or features to the `main` and `development` branches.

### Backend hosting

The website's backend CMS is a [Strapi](https://www.strapi.io) instance and is hosted on [Railway](https://www.railway.app). A CI/CD pipeline has been set up for automatic deployment when pushing changes and/or features to the `main` branch.

### Error tracking

Errors will be collected in a [Sentry](https://www.sentry.com) dashboard.

### E-mail setup

To be determined.

## Environments

This project consists of different environments, all of which having a different purpose.

| Environment | Branch        | Purpose               |
| :---------- | :------------ | :-------------------- |
| Production  | `main`        | Public website        |
| Development | `development` | Development & testing |
