# Appscrip Task — Akera

A Product Listing Page (PLP) built as part of the Appscrip frontend assignment.

## Tech Stack

- **Next.js 13+** (App Router)
- **React** (Server & Client Components)
- **Plain CSS** (no frameworks)

## Features

- Server Side Rendering (SSR) for product data via [Fake Store API](https://fakestoreapi.com/)
- Responsive design — mobile, tablet, and desktop
- Filter sidebar with collapsible sections
- Sort dropdown (Recommended, Newest, Popular, Price)
- SEO optimised — metadata, H1/H2 tags, JSON-LD schema, alt text
- Accessible — semantic HTML, aria-labels throughout

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/               # Pages and layout
├── components/
│   ├── Header/        # Site header with nav
│   ├── Footer/        # Site footer with accordion (mobile)
│   ├── ProductGrid/   # Product grid layout
│   ├── ProductCard/   # Individual product card
│   ├── PLPClient/     # Client component managing filter/sort state
│   ├── FilterSidebar/ # Filter panel
│   └── SortDropdown/  # Sort options dropdown
```

## Live Demo

[View on Netlify](#) — _link to be added after deployment_
