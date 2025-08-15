# Deployment

## Table of contents

- [Resource providers](#resource-providers)
  - [DNS](#dns)
  - [Frontend hosting](#frontend-hosting)
  - [Backend hosting](#backend-hosting)
  - [Error tracking](#error-tracking)
- [Environments](#environments)

## Resource providers

| Resource       | Provider                                                          | Comments                                                                         |
| :------------- | :---------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| DNS            | [CloudFlare](https://www.cloudflare.com/)                         | DNS management with caching & DDoS protection.                                   |
| Frontend app   | [Vercel](https://vercel.com)                                      | Dynamic hosting with automatic CI/CD for FE app.                                 |
| Backend CMS    | [Heroku](https://www.heroku.com)                                  | Dynamic hosting with CI/CD capabilities for BE CMS.                              |
| Database       | MySQL database hosted on [Vimexx](https://www.vimexx.be/)         | Both the development and production environments have a separate MySQL database. |
| Error tracking | [Sentry](https://www.sentry.com)                                  | Error tracking in a Sentry dashboard.                                            |
| E-mail setup   | [Google Workspace for Non-Profits](https://workspace.google.com/) | Check out the [Google Workspace setup docs](/documentation/google-workspace.md). |

### DNS

DNS records are managed by [CloudFlare](https://www.cloudflare.com). Other than features like SSL and caching, CloudFlare also offers a layer of securities like DDoS protection.

### Frontend hosting

Deployments for this project are fully automated using [Vercel](https://vercel.com) with the following deployment strategy:

- **Automatic deployment:** every push to the `main` branch automatically triggers a build and deployment to the production environment.
- **Build process:** Vercel automatically runs `npm run build` and deploys the built application from the `.next` directory.
- **Environment:** The application is deployed directly to the production environment on each push to main.

### Backend hosting

The website's backend CMS is a [Strapi](https://www.strapi.io) instance and is hosted on [Heroku](https://www.heroku.com). A CI/CD pipeline has been set up for automatic deployment when pushing changes and/or features to the `main` branch.

### Error tracking

Errors will be collected in a [Sentry](https://www.sentry.com) dashboard.

## Environments

This project consists of a single production environment that is automatically updated on each push to the main branch.

| Environment | Branch | Purpose        |
| :---------- | :----- | :------------- |
| Production  | `main` | Public website |

## Performance & Optimization

### Vercel Configuration

The project is configured for Vercel deployment with:

- Automatic Next.js optimization and caching
- Built-in image optimization
- Automatic compression and performance optimizations
- Edge network distribution for global performance

### Next.js Optimization

- **ISR Caching**: 1-hour cache for static data (navigation/footer), 5-minute for dynamic content
- **Bundle Splitting**: Dynamic imports for content blocks
- **Image Optimization**: Next.js Image component with Cloudinary integration

### Monitoring

- **Vercel Analytics**: Built-in performance monitoring and insights
- **Sentry Integration**: Error tracking and performance metrics
- **Browser Performance**: Lighthouse scores monitored in CI/CD

For detailed performance troubleshooting, see [Performance & Troubleshooting Guide](./performance-troubleshooting.md).
