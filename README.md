# Les Deux Chevaux

Website for Les Deux Chevaux - a mini-camping, chambres d'hôtes (B&B), and table d'hôtes in Auvergne, France.

🌐 **Live site:** [basnijholt.github.io/lesdeuxchevaux](https://basnijholt.github.io/lesdeuxchevaux)

## Features

- Dual language support (Dutch / French)
- Responsive design with Tailwind CSS
- Static export for GitHub Pages deployment
- Interactive OpenStreetMap location
- Optimized images (WebP, responsive sizes, blur placeholders)

## Development

### Using Devbox (recommended)

```bash
devbox shell
bun install
bun dev
```

### Using Bun directly

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command | Description |
|---------|-------------|
| `bun dev` | Start development server |
| `bun run build` | Build for production |
| `bun start` | Start production server |
| `bun lint` | Run ESLint |

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when pushing to `main`.

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Bun](https://bun.sh/) - JavaScript runtime & package manager
- [Devbox](https://www.jetify.com/devbox) - Development environment
