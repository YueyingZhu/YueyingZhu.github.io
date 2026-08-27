# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Project decisions

- The user requested all three visual directions, so keep Research Ledger, Field Systems, and Embodied Future available through the in-page preview switcher until one is selected.
- Academic facts must remain conservative: the VIO benchmark is accepted at ICARCV 2026; the geometry-aware video re-rendering paper is second-author and under review at AAAI-27; the rejected ICML submission must not appear; the NTU dissertation is submitted and degree conferral is expected in December 2026.
- Do not fabricate research photographs, robot setups, paper results, author lists, or publication links. Use real shareable media supplied by the user. The existing SLAM nine-case plot is approved local evidence.
