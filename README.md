# Portfolio Design & Components Reference

This document serves as a technical blueprint for the key design components and UI patterns implemented in the sidsrlal portfolio. It is designed to be used as a reference for re-implementing these features in other projects using an LLM.

---

## 🎨 Design System

### 1. Color Palette & Typography
- **Primary Colors**: 
  - `Olive Dark`: `#3e4d19` (Signature earthy tone)
  - `Off-white`: `#e6daaa` (Soft, warm background)
  - `Text`: Deep charcoal/muted olive
- **Typography**:
  - `Serif`: Used for headers and emphasis (e.g., Times New Roman or Google Fonts 'Outfit'). It conveys sophistication.
  - `Monospace`: 'JetBrains Mono' for technical components (Terminal, dates, tags).
  - `Sans`: 'Inter' for body text and navigation.

### 2. Global Textures (CSS Utility)
- **Noise Overlay**: A persistent `fixed` div with a subtle SVG noise filter to give the site a tactile, analog feel.
- **Grid Patterns**: 
  - `.bg-grid-olive`: A delicate `linear-gradient` grid used for project tiles.
  - 2px lines, 20px - 40px spacing, very low opacity (5-8%).

---

## 🛠️ Core Components

### 1. Interactive Lens Grid (`InteractiveGrid.tsx`)
A high-end background component that reacts to cursor movement with a lens distortion/magnification effect.
- **Implementation Details**:
  - Uses HTML5 `<canvas>` for performance.
  - Draws a static grid and then recalculates line points based on cursor proximity.
  - `useInView` or window-level listeners used to track cursor without blocking underlying clicks (`pointer-events: none`).
  - **Lens Formula**: Calculates distance from cursor and "pushes" grid intersections outward using a sine/cosine magnification strength.

### 2. Sophisticated Terminal (`Terminal.tsx`)
A minimalist code display component with realistic typing effects.
- **Interactivity**: 
  - Starts typing only when visible in the viewport (`useInView`).
  - Implements a subtle typing speed variation (random delay between characters).
  - **Auto-scroll**: Automatically scrolls the body as text is being "typed".
  - **Visuals**: Dark olive background with 40% opacity, glassmorphism (`backdrop-filter`), and muted window controls (traffic light style).

### 3. Editorial Portrait (`HeroPortrait.tsx`)
A stylized image component that transforms raw images into "magazine-style" assets.
- **Layered Effects**:
  - `CSS Filters`: Sepia, contrast, and brightness adjustments.
  - `Overlays`: Film grain (SVG turbulence), vignette (radial-gradient), and color multiplication (olive blend mode).
  - Interactivity: Gentle scale-up zoom on hover within a `rounded-2xl` container.

### 4. Custom Trailing Cursor (`Cursor.tsx`)
A two-part cursor system: an "instant dot" and a "trailing spring ring".
- **Implementation**:
  - Uses `framer-motion`'s `useSpring` and `useMotionValue` for physics-based movement.
  - **Theme Awareness**: Detects parent sections with `data-theme="dark"` or `"light"` to invert colors in real-time.
  - **Link Detection**: Scales up and reduces opacity when hovering over `<a>` or `button` elements.

---

## 💡 Prompt Guide for LLMs

To re-implement these features, you can copy the relevant section title and the "Implementation Details" above and paste it into a prompt along with this instruction:

> *"Using React, Tailwind CSS, and Framer Motion, implement the [Component Name] as described in the Design Reference below. Focus on the [Specific Detail, e.g., lens distortion math or physics-based springs]. Ensure the color palette uses #3e4d19 and #e6daaa for the signature 'Olive Tech' aesthetic."*

---

## 📁 File Structure Reference
- `src/components/Section.tsx`: Reusable layout wrapper with intersection animations and theme handling.
- `src/components/InteractiveGrid.tsx`: Canvas-based interactive background.
- `src/components/Terminal.tsx`: Typing code snippet component.
- `src/components/HeroPortrait.tsx`: Photo processing and overlay component.
- `src/components/Cursor.tsx`: Custom mouse tracker.
