# The Roast Board

A playful, browser-based roast board for friends. Data is stored locally in the browser, so no backend or account setup is required.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build` and preview it with `npm run preview`.

## Publish

This project is set up to build and deploy on Netlify (`netlify.toml` runs `npm run build` and publishes the `dist` folder). Connecting the repository to a Netlify site deploys it automatically on every push to `main`.

A GitHub Actions workflow is also included, which deploys to GitHub Pages whenever `main` is updated. Enable Pages in the repository settings with **GitHub Actions** as the source, then open:

`https://najahnhia.github.io/-The-Roast-Board/`
