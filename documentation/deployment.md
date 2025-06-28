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
| Frontend app   | [Netlify](https://www.netlify.app)                                | Dynamic hosting with CI/CD capabilities for FE app.                              |
| Backend CMS    | [Heroku](https://www.heroku.com)                                  | Dynamic hosting with CI/CD capabilities for BE CMS.                              |
| Database       | MySQL database hosted on [Vimexx](https://www.vimexx.be/)         | Both the development and production environments have a separate MySQL database. |
| Error tracking | [Sentry](https://www.sentry.com)                                  | Error tracking in a Sentry dashboard.                                            |
| E-mail setup   | [Google Workspace for Non-Profits](https://workspace.google.com/) | Check out the [Google Workspace setup docs](/documentation/google-workspace.md). |

### DNS

DNS records are managed by [CloudFlare](https://www.cloudflare.com). Other than features like SSL and caching, CloudFlare also offers a layer of securities like DDoS protection.

### Frontend hosting

Deployments for this project are fully automated using [Github Actions](https://github.com/features/actions) and [Netlify](https://www.netlify.com/) using the following strategies:

- **Continuous delivery:** every change to the `main` branch gets deployed to the `uat` environment.
- **Environment promotion:** a new production deploy will get triggered after tagging a new release in Github. The tags follow the [semver](https://semver.org/) versioning standard. After tagging a new release, a Github Actions workflow builds and deploys the application to the Netlify production environment.

### Backend hosting

The website's backend CMS is a [Strapi](https://www.strapi.io) instance and is hosted on [Heroku](https://www.heroku.com). A CI/CD pipeline has been set up for automatic deployment when pushing changes and/or features to the `main` branch.

### Error tracking

Errors will be collected in a [Sentry](https://www.sentry.com) dashboard.

## Environments

This project consists of different environments, all of which having a different purpose.

| Environment | Branch                   | Purpose               |
| :---------- | :----------------------- | :-------------------- |
| Production  | `main (tagged releases)` | Public website        |
| UAT         | `main`                   | Development & testing |

## Performance & Optimization

### Netlify Configuration

The project includes `netlify.toml` with:

- Proper caching headers for static assets (1 year)
- Image optimization (1 month cache)
- Security headers (CSRF, XSS protection)
- Compression enabled for assets

### Next.js Optimization

- **ISR Caching**: 1-hour cache for static data (navigation/footer), 5-minute for dynamic content
- **Bundle Splitting**: Dynamic imports for content blocks
- **Image Optimization**: Next.js Image component with Cloudinary integration

### Monitoring

- **Netlify Analytics**: Built-in performance monitoring
- **Sentry Integration**: Error tracking and performance metrics
- **Browser Performance**: Lighthouse scores monitored in CI/CD

For detailed performance troubleshooting, see [Performance & Troubleshooting Guide](./performance-troubleshooting.md).
