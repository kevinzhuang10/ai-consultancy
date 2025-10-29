# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 application using the App Router architecture with TypeScript, React 19, and Tailwind CSS v4. The project was bootstrapped with `create-next-app`.

## Development Commands

- `npm run dev` - Start the development server on http://localhost:3000
- `npm run build` - Create a production build
- `npm start` - Run the production build
- `npm run lint` - Run ESLint for code quality checks

## Architecture

### App Router Structure
- Uses Next.js App Router (not Pages Router)
- Entry point: `app/page.tsx` - main landing page
- Root layout: `app/layout.tsx` - configures global layout, fonts (Geist Sans and Geist Mono), and metadata
- Global styles: `app/globals.css` - uses Tailwind CSS v4 with `@import "tailwindcss"` syntax

### Styling
- Tailwind CSS v4 with PostCSS
- Uses CSS custom properties for theming (`--background`, `--foreground`)
- Dark mode via `prefers-color-scheme` media query
- Custom fonts via `next/font/google` (Geist Sans and Geist Mono)

### TypeScript Configuration
- Path alias `@/*` maps to project root
- Strict mode enabled
- JSX mode: `react-jsx` (new JSX transform)

## Key Conventions

- All source code lives in the `app/` directory following App Router conventions
- Static assets in `public/` directory
- TypeScript is required for all components and pages
- Server components by default (add `"use client"` directive when needed)
