# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands
- `npm run dev` - Start the development server 
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint for code linting
- `npm run preview` - Preview the production build

## Code Style Guidelines
- **Imports**: Use absolute imports with `@/` prefix (e.g., `import { Button } from '@/components/ui/button'`)
- **Component Structure**: Use functional components with named exports
- **Naming**: Use PascalCase for components, camelCase for variables/functions
- **TypeScript**: TypeScript is used but with relaxed strictness (noImplicitAny: false, strictNullChecks: false)
- **Formatting**: Use single quotes for strings and consistent whitespace
- **State Management**: React hooks (useState, useEffect) for component state
- **Styling**: Use Tailwind CSS with shadcn/ui components, utilize the `cn()` utility for class merging
- **Error Handling**: Use try/catch blocks for async operations
- **Component Organization**: Components are organized by feature in the src/components directory
- **Path Aliases**: Use `@/*` aliases configured in tsconfig.json