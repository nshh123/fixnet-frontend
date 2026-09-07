# FixNet Frontend

FixNet is an on-demand platform connecting clients with verified, skilled technicians for maintenance, repair, and installation services across Rwanda.

The frontend is built with **Next.js 14 (App Router)**, **React 18**, **TypeScript**, and **Tailwind CSS**.

## Getting Started

### Prerequisites
- Node.js >= 18.17.0
- npm >= 9.0.0

### Installation

```bash
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Running Tests & Linting

```bash
# Run unit & smoke tests (Vitest)
npm test

# Run ESLint checks
npm run lint

# Build for production
npm run build
```

## Contributing Workflow

Please refer to `CONTRIBUTING.pdf` for our engineering standards:
1. Always branch off `dev`: `git checkout dev && git pull origin dev`
2. Create feature branch: `git checkout -b feat/your-feature-name`
3. Ensure CI checks pass locally (`npm run lint`, `npm test`, `npm run build`)
4. Open a Pull Request targeting `dev`

## Deployment

This frontend is configured for deployment on **Vercel**:
- Production branch: `main`
- Staging branch: `dev`
- Pull Requests automatically trigger isolated Preview Deployments