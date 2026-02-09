# Realtoken Website

This project is the foundation of the website to present the Realtoken DAO.

A technology like WordPress was complicated to maintain on the community server, so a static technology like VueJS is perfect for creating a reliable, consistent, and scalable website foundation.

# Technologies

- VueJS 3 (https://vuejs.org/)
- Vite (https://vite.dev/)

## Run website with make

```sh
make dev-build   # Build 
make dev-run     # Run on port 5173
make dev-kill    # Stop container
make dev-logs    # Show container logs
```

### Sitemap (SEO)

The sitemap is generated automatically:

- **On each build** : `npm run build` runs `scripts/generate-sitemap.js` then Vite, so `public/sitemap.xml` is up to date with all static routes and blog posts (from `src/utils/blog.js`).
- **On demand** : `npm run sitemap` regenerates only the sitemap.

To set the site base URL for production (e.g. `https://realtoken.community`), use either `SITEMAP_BASE_URL` or `VITE_SITE_URL` when building:

```sh
SITEMAP_BASE_URL=https://realtoken.community npm run build
```

### Design/Chart concept: 

- Professional fintech/Web3 aesthetic with traditional real estate trust
- Navy blue (#0A1F44) and vibrant orange (#FF8C42) palette
- Modern geometric elements inspired by the cube logo
- Clean typography with Raleway font family
- Subtle animations for depth and engagement

### Features:

New design information:

- Hero section with strong value proposition (+nav, and add link to different section)
- About real-world asset tokenization (liquidity, exchange, available, accessible) / - Key benefits showcaseg
- Application section (from NAV) -> RMM (description) + YAM (description)
- Ressource section (from NAV) -> Wiki...?)
- Governance section (from NAV) -> Decentralize protocole, Forum, Tally
- How it works process (
    - 01 buy token from partenary
    - 02 token available in ecosystem (RMM, YAM)
    - 03 get a REG token, and participate to governance (SOON: des NFT for improve decentralize governance)
- Stats/trust indicators -> Assets under management / member of the ecosystem / REG marketcap / Number of votes
- CTA section (invite partner) -> Integrate your token and shape the future of the RealToken ecosystem