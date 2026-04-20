# Decap CMS [![Version](https://img.shields.io/badge/version-3-ff0082)](https://github.com/stackblaze-templates/decap-cms) [![Maintained by StackBlaze](https://img.shields.io/badge/maintained%20by-StackBlaze-blue)](https://stackblaze.com) [![Weekly Updates](https://img.shields.io/badge/updates-weekly-green)](https://github.com/stackblaze-templates/decap-cms/actions) [![Deploy on StackBlaze](https://img.shields.io/badge/Deploy%20on-StackBlaze-orange)](https://stackblaze.com)

<p align="center"><img src="logo.png" alt="decap-cms" width="120"></p>

A Git-based CMS for static site generators (formerly Netlify CMS). Edit content in a friendly UI and commit changes directly to your Git repository.

> **Credits**: Built on [Decap CMS](https://decapcms.org) by [Decap](https://github.com/decaporg). All trademarks belong to their respective owners.

## Deploy on StackBlaze

## Local Development

Serve the static files with any HTTP server.

## Configuration

Edit admin/config.yml to configure collections, backends, and media.

## Security

### Before deploying to production

- **Git backend credentials**: Configure your backend (`admin/config.yml`) to use a secure OAuth or Netlify Identity flow. Never commit personal access tokens or API keys to the repository.
- **Backend branch**: The `branch` field in `admin/config.yml` defaults to `main`. Ensure this matches your production branch and that write access is properly scoped via your Git backend's OAuth app.
- **Admin access**: The `/admin/` panel is publicly accessible by URL. Access is gated by your chosen backend's authentication (e.g. Netlify Identity, GitHub OAuth). Ensure authentication is configured before going live.

### What is NOT safe by default

- Decap CMS has no built-in rate limiting or IP allowlisting on the admin panel — rely on your Git provider's OAuth scopes and identity provider for access control.
- Do not expose this template on a production domain without configuring a proper authentication backend in `admin/config.yml`.

---

### Maintained by [StackBlaze](https://stackblaze.com)

Weekly automated checks for up-to-date dependencies, security scanning, and best practices.
