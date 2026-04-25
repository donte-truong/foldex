---
name: Clinical Intelligence Interface
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#bac9cc'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#849396'
  outline-variant: '#3b494c'
  surface-tint: '#00daf3'
  primary: '#c3f5ff'
  on-primary: '#00363d'
  primary-container: '#00e5ff'
  on-primary-container: '#00626e'
  inverse-primary: '#006875'
  secondary: '#beffdc'
  on-secondary: '#003824'
  secondary-container: '#08f1a9'
  on-secondary-container: '#006947'
  tertiary: '#e0eeff'
  on-tertiary: '#213241'
  tertiary-container: '#c1d2e6'
  on-tertiary-container: '#4a5b6b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#9cf0ff'
  primary-fixed-dim: '#00daf3'
  on-primary-fixed: '#001f24'
  on-primary-fixed-variant: '#004f58'
  secondary-fixed: '#46ffb8'
  secondary-fixed-dim: '#00e29e'
  on-secondary-fixed: '#002114'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#d3e4f9'
  tertiary-fixed-dim: '#b7c8dc'
  on-tertiary-fixed: '#0b1d2c'
  on-tertiary-fixed-variant: '#384859'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
  data-mono:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  gutter: 20px
  margin: 32px
  max_width: 1600px
---

## Brand & Style
The design system is engineered for high-stakes medical environments, emphasizing precision, clarity, and rapid data synthesis. The brand personality is clinical and authoritative, yet technologically advanced—evoking the feeling of a sophisticated laboratory instrument.

The design style utilizes **Glassmorphism** and **Minimalism** to create a multi-layered digital workspace. By leveraging semi-transparent surfaces and subtle luminescence, the interface provides a sense of depth without compromising the density of data required by researchers. Visual interest is maintained through "Data-Waves"—generative DNA-like patterns that appear in backgrounds and transitions to reinforce the biological context of the application.

## Colors
This design system utilizes a deep-sea charcoal palette for the primary canvas to reduce eye strain during long-form research sessions. 

- **Primary (Electric Blue):** Reserved for primary actions, active states, and data highlights. It represents the "pulse" of the system.
- **Secondary (Surgical Green):** Used for success states, validated data points, and secondary metrics. It provides a biological, "clean-room" aesthetic.
- **Neutral (Slate/Charcoal):** Provides the structural foundation. Backgrounds use a gradient from #0B101A to #0F172A to create a subtle sense of verticality.
- **Data Accents:** Subtle glows in the primary and secondary hues are used to draw attention to critical anomalies or high-priority notifications.

## Typography
The typography strategy prioritizes legibility and technical character. **Space Grotesk** is used for headings and UI labels to provide a geometric, futuristic feel that aligns with laboratory equipment displays. **Inter** is utilized for all body copy and tabular data to ensure maximum readability for dense medical reports.

Special attention is given to "Data-Mono" styling—a variant of Inter with slightly wider letter spacing used for specimen IDs, sequences, and numerical values, ensuring they are easily distinguishable from descriptive text.

## Layout & Spacing
The design system employs a **12-column fluid grid** optimized for widescreen laboratory monitors. The layout is structured around a "Command Center" philosophy where essential tools are anchored to the periphery, leaving a large central viewport for data visualization or specimen analysis.

A tight 4px baseline grid ensures that dense data sets remain aligned and professional. Horizontal margins are generous (32px) to allow the interface to breathe, while internal component spacing (8px-16px) remains compact to maximize information density.

## Elevation & Depth
Depth is communicated through **Glassmorphism** rather than traditional shadows. Surfaces are layered using varying levels of background blur (8px to 24px) and semi-transparent fills. 

Higher-level elements, such as modals or active tooltips, feature a 1px inner border in a translucent version of the primary Electric Blue to simulate "backlit" edges. Subtle ambient glows are placed behind key data containers to make them appear as if they are floating above a dark control panel. Background "DNA Waves" should exist on the lowest Z-index, rendered at 5-10% opacity to provide texture without distracting from the UI.

## Shapes
The shape language is "Soft-Technical." UI elements use a consistent 4px (Soft) corner radius to maintain a precise, engineered appearance while avoiding the harshness of 0px corners. 

Buttons and interactive containers utilize a "Chiseled" look, achieved by the 1px stroke mentioned in the elevation section. Data visualizations like progress bars or status indicators use sharp caps to reinforce the scientific accuracy of the data being presented.

## Components
- **Primary Buttons:** High-contrast Electric Blue fills with black text for maximum visibility. On hover, they should emit a subtle cyan glow.
- **Interactive Chips:** Transparent backgrounds with 1px Surgical Green borders. Used for filtering biological markers or specimen types.
- **Data Cards:** Utilizing the glassmorphic style with a deep navy tint. Header areas of cards should have a subtle horizontal "Data-Wave" watermark.
- **Input Fields:** Bottom-border only or very subtle ghost-outlines. Focus states should trigger a "scanning" animation—a thin blue line that moves from left to right once.
- **Specimen Lists:** Alternating row highlights using 2% opacity white to maintain readability without breaking the dark theme.
- **Waveform Monitor:** A specialized component for displaying real-time data streams, using the Surgical Green for the primary line and Electric Blue for the peak indicators.