# Design System Document: The Precision-Soft Aesthetic
 
## 1. Overview & Creative North Star: "The Visionary Engineer"
This design system rejects the "standard corporate template" in favor of an aesthetic we call **The Visionary Engineer**. For a CEO with a PhD in Robotics, the UI must balance the cold precision of high-tech engineering with the approachable sophistication of executive leadership.
 
The North Star is **Subtle Authority**. We achieve this by breaking the rigid, boxy grid of traditional digital cards. Instead, we use intentional asymmetry, overlapping layers, and a hierarchy driven by "tonal depth" rather than structural lines. The layout should feel like a custom-designed editorial spread—spacious, breathing, and intellectually composed.
 
## 2. Colors: Tonal Architecture
The palette is a sophisticated range of atmospheric blues and architectural grays. We move away from flat design by treating color as a physical material.
 
*   **Primary & Sophistication:** Use `primary` (#455F88) for moments of transition and key actions. It represents the "intellectual core."
*   **The "No-Line" Rule:** You are strictly prohibited from using 1px solid borders for sectioning. Boundaries must be defined solely through background color shifts. To separate a bio from a contact list, place a `surface-container-low` section against the `surface` background.
*   **Surface Hierarchy & Nesting:** Treat the UI as a series of stacked sheets of fine paper.
    *   **Level 0 (Base):** `surface` (#F7F9FB).
    *   **Level 1 (Sections):** `surface-container-low` (#F0F4F7).
    *   **Level 2 (Interaction Cards):** `surface-container-lowest` (#FFFFFF) for a soft "lift."
*   **The "Glass & Gradient" Rule:** Main CTAs or the Hero header should utilize a subtle linear gradient from `primary` (#455F88) to `primary-dim` (#39537C) at a 135-degree angle. For floating navigation or mobile overlays, use `surface_bright` at 80% opacity with a `20px` backdrop-blur to create a "frosted glass" robotic precision.
 
## 3. Typography: Editorial Precision
We pair the technical clarity of **Inter** with the structural elegance of **Manrope**.
 
*   **The Hierarchy:**
    *   **Display (Manrope):** Large, airy, and confident. Use `display-lg` for the name and `headline-md` for the PhD credentials. The wide tracking of Manrope communicates "space and scale."
    *   **Body & Utility (Inter):** Use `body-lg` for the biography and `label-md` for technical metadata. Inter’s tall x-height ensures readability on mobile-first screens.
*   **Brand Identity through Type:** Use `on_surface_variant` (#566166) for secondary titles to reduce visual noise. Headlines should use `on_surface` (#2A3439) to provide a grounded, authoritative contrast.
 
## 4. Elevation & Depth: Tonal Layering
Traditional shadows are too "dirty" for a robotics professional. We use light and layering to imply structure.
 
*   **The Layering Principle:** Depth is achieved by "stacking" tiers. A `surface-container-lowest` card sitting on a `surface-container` section creates a natural, soft lift.
*   **Ambient Shadows:** If a card requires a floating effect (e.g., a "Connect" button), use a shadow with a 24px blur, 0px spread, and 4% opacity. The shadow color must be a tinted version of `on_surface` (e.g., `#2A3439` at 4%), never pure black.
*   **The "Ghost Border" Fallback:** If accessibility requires a container edge, use a "Ghost Border": `outline-variant` (#A9B4B9) at **15% opacity**.
*   **Glassmorphism:** For the mobile navigation bar, use `surface_container_lowest` at 70% opacity with a blur effect. This allows the content to bleed through as the user scrolls, feeling integrated and fluid.
 
## 5. Components: Precision Primitives
 
### Buttons
*   **Primary:** Solid `primary` background with `on_primary` text. Corners: `full` (pill-shaped) to contrast the cards.
*   **Secondary:** `surface-container-high` background with `on_surface` text. No border.
*   **Interaction:** On hover/tap, transition to `primary_dim`.
 
### Cards & Lists
*   **The Divider Ban:** Strictly forbid the use of divider lines. Separate list items using `12px` of vertical white space (from the spacing scale) and subtle background shifts.
*   **Robotics PhD Detail Cards:** Use `surface-container-highest` for small "chip-like" info blocks (e.g., "Field: Autonomous Systems") nested inside a `surface-container-low` section.
 
### Input Fields
*   **Styling:** Use `surface-container-low` as the fill. On focus, transition the background to `surface-container-lowest` and apply a "Ghost Border" of `primary` at 40% opacity.
 
### Signature Component: The "Draggable Knowledge Base"
*   A horizontal scrolling carousel of "Research Highlights" or "Publications." Use `xl` (1.5rem) rounded corners for these cards to make them feel modern and tactile, unlike standard rigid business cards.
 
## 6. Do's and Don'ts
 
### Do:
*   **Do** use asymmetrical margins. A larger left margin for a name and a smaller right margin for a profile photo creates a "designed" feel.
*   **Do** use smooth, eased transitions (e.g., `cubic-bezier(0.4, 0, 0.2, 1)`) for all hover states.
*   **Do** prioritize "Breathing Room." If in doubt, increase the padding.
 
### Don't:
*   **Don't** use 100% black text. Use `on_surface` (#2A3439) for a softer, more professional look.
*   **Don't** use sharp 90-degree corners. Everything must use the `roundedness scale` to feel approachable.
*   **Don't** use standard blue hyperlinks. Use `primary` text with a subtle `2px` underline in `primary_container`.
 
---
*Director's Note: Remember, this is not just a card; it is a digital handshake. Every pixel should feel as calculated as a robotic algorithm and as smooth as a CEO's delivery.*