# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

For the English locale, start the localized dev server:

```bash
npm run start:en
```

Then open `http://localhost:3000/en/`.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

This repository is configured for GitHub Pages at:

- `https://goofmint.github.io/cr-learning/`

Merges to `main` deploy automatically through GitHub Actions. In the repository settings, set **Pages > Build and deployment > Source** to **GitHub Actions**.

You can also run the deployment manually from the **Actions** tab by selecting **Deploy to GitHub Pages** and then **Run workflow**.

For a local production build:

```bash
npm run build
```
