# Yueying Zhu — Academic Homepage

Academic homepage for Yueying Zhu's 2027 Robotics PhD applications. The site connects robust robot perception, scalable real-world data collection, and task-conditioned manipulation.

The prototype currently contains three responsive directions:

- **Research Ledger** — an editorial, publication-first academic profile.
- **Field Systems** — an engineering-led profile centered on deployed robot systems.
- **Embodied Future** — a forward-looking research narrative.

Use the fixed preview switcher to compare them. The selected direction is stored in the `view` query parameter: `ledger`, `field`, or `future`.

## Development

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

## Verification

```bash
npm run build
npm run test:sites
```

## GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` builds and publishes the site automatically whenever `main` is updated. When this repository is named `YueyingZhu.github.io`, the public address is:

`https://yueyingzhu.github.io/`

In the repository settings, select **Settings → Pages → Build and deployment → Source: GitHub Actions** once if GitHub has not selected it automatically.

## Content policy

Only confirmed academic and engineering facts are shown. Missing research visuals are left out instead of being replaced with fabricated robot photos or results.
