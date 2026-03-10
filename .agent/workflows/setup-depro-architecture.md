---
description: Automatically set up the "Depro Style" data-driven architecture and directory structure for a new project.
---

This workflow will configure the core structure used in the Depro Trading project.

1. Create the base directory structure:
// turbo
```bash
mkdir src/data src/components/ui src/components/home src/components/layout src/lib
```

2. Generate the standard `cn` utility in `src/lib/utils.ts`:
```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
```

3. Initialize the global design tokens in `src/app/globals.css` using Tailwind v4 `@theme` block.

4. Create the `SectionHeader.tsx` master component in `src/components/ui/` to ensure visual consistency across the new site.

5. Create a template `homeData.ts` in `src/data/` with the following structure:
```typescript
export const heroData = { title: { main: "", highlight: "" }, description: "", stats: [] };
export const whyChooseUsData = { title: "", features: [] };
```

6. Set up the Multi-Page Foundation:
// turbo
```bash
mkdir -p src/app/about src/app/services src/app/contact src/app/catalog
```
- Create default layouts for these pages to handle SEO metadata shells immediately.

7. Integrate WhatsApp Inquiry Logic:
- Generate a `FloatingWhatsApp.tsx` component that pulls the number and initial message from `src/data/config.ts`.
- Ensure all CTA buttons are pre-linked to this inquiry flow.

8. SEO & Production Baseline:
- Add `src/components/seo/JsonLd.tsx` for local business schema.
- Add dynamic `sitemap.ts` and `robots.ts`.

9. **The "Automatic" Adaptation Phase**:
- After running this workflow, tell Antigravity: "I am building a [Business Type] website."
- Antigravity will then automatically:
    - Update CSS variables in `globals.css` with a matching color palette.
    - Generate unique Hero designs based on the business category.
    - Populate `src/data/` with relevant industry content.

10. Final Verification:
- Run `npm run build` to verify the generated foundation is production-ready.
