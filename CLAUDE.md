# Claude Development Guidelines for Budgey Frontend

## Linear Ticket Completion Workflow

**Default behavior when completing any Linear ticket:**

1. **Create Feature Branch**
   - Branch name format: `{username}/{ticket-id}-{ticket-title-slug}`
   - Example: `tomaszjlloyd/two-15-ui-001-authentication-components`
   - Use the `gitBranchName` from the Linear ticket if available

2. **Commit Changes**
   - Use conventional commit format: `feat:`, `fix:`, `refactor:`, etc.
   - Include ticket ID in commit title
   - Add comprehensive commit message with:
     - Summary of changes
     - List of features/fixes implemented
     - Reference to Linear ticket
     - Claude Code attribution

3. **Create Pull Request**
   - Title format: `{type}: {description} ({TICKET-ID})`
   - Include comprehensive PR description with:
     - Summary of changes
     - Features implemented (with checkboxes)
     - Technical details
     - Test plan with verification checkboxes
     - Reference to Linear ticket: `Closes {TICKET-ID}`
     - Claude Code attribution

4. **Update Linear Ticket**
   - Add comment documenting completion
   - Include links to PR and branch
   - Summarize what was delivered
   - Note any testing completed

## Project Information

- **Framework**: React + TypeScript + Vite
- **Styling**: Tailwind CSS with custom design system
- **Forms**: React Hook Form + Zod validation
- **State Management**: React useState (no external state management yet)
- **Build Commands**: 
  - `npm run dev` - Development server
  - `npm run build` - Production build
  - `npm run lint` - ESLint checking

## Code Standards

- Use TypeScript for all components
- Follow existing design system in `tailwind.config.js`
- Implement proper accessibility (ARIA labels, semantic HTML)
- Use React Hook Form for forms with Zod validation schemas
- Ensure mobile-responsive design
- Always run `npm run build` and `npm run lint` before committing

## Dependencies

Current key dependencies:
- `react`, `react-dom` - React framework
- `react-hook-form` - Form handling
- `@hookform/resolvers`, `zod` - Form validation
- `tailwindcss` - Styling
- `typescript` - Type safety
- `vite` - Build tool

*Last updated: 2025-01-29*