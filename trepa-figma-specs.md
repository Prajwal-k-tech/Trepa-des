# Trepa Landing Page - Figma Design Specifications

## 🎨 Design System

### Colors

```
Primary Green: #10B981
Dark Green: #059669
Light Green: #34D399

Background: #000000
Surface: #1F2937 (gray-800)
Border: #374151 (gray-700)

Text Primary: #FFFFFF
Text Secondary: #D1D5DB (gray-300)
Text Muted: #9CA3AF (gray-400)
Text Disabled: #6B7280 (gray-500)
```

### Typography

```
Font Family:
- Headings: Poppins
- Body: Inter

Font Sizes:
- Hero: 72px (Desktop) / 48px (Mobile)
- H2: 48px (Desktop) / 32px (Mobile)
- H3: 24px
- Body Large: 20px
- Body: 16px
- Caption: 14px
```

### Spacing

```
Section Padding: 80px vertical, 24px horizontal
Card Padding: 32px
Button Padding: 16px vertical, 32px horizontal
Grid Gap: 64px (Desktop) / 32px (Mobile)
```

## 📱 Artboard Setup

### Desktop

- Width: 1440px
- Sections: Full width with 1280px max-width container

### Mobile

- Width: 375px
- Stack sections vertically

## 🏗️ Component Structure

### 1. Header (Fixed)

```
Background: rgba(0,0,0,0.8) with backdrop blur
Height: 80px
Content:
- Logo (Pink circle + "Trepa" text)
- Navigation (centered, hide on mobile)
- Green "Join Beta" button (right)
```

### 2. Hero Section

```
Padding: 128px top, 80px bottom
Content:
- H1: "From predicting vibes to" (white) + "forecasting real-world numbers." (green gradient)
- 2 paragraphs (gray text)
- Green CTA button with glow effect
Background: Atmospheric green blurs (large circles with heavy blur)
```

### 3. Close Still Pays Section

```
Layout: 2-column grid (stack on mobile)
Left Column:
- H2: "Close Still Pays"
- 2 explanatory paragraphs
- 3-column stat cards (90%, 60%, 30%)

Right Column:
- Target/bullseye visualization
- 5 concentric circles
- Green center with pulse animation
```

### 4. Slide and Stake Section

```
Layout: Centered content, max-width 512px
Content:
- H2: "Slide and Stake"
- Interactive demo card:
  * "Predict Next Month's US Inflation Rate"
  * Large "5.0%" display (green)
  * Slider with green fill and white thumb
  * Payout percentage with progress bar
  * "Stake $100" button
Background: Card with dark background, subtle border
```

### 5. Feature Cards Section

```
Layout: 3-column grid (stack on mobile)
Each Card:
- Dark background with hover glow
- Green icon (48x48px with 20% opacity background)
- White heading (Poppins, 20px)
- Gray description (Inter, 16px)
```

### 6. Final CTA

```
Content:
- H2: "Ready to show your precision?"
- Description paragraph
- Large green "Join Beta" button
- Small disclaimer text
```

## 🎯 Interactive Elements

### Buttons

```
Primary Green Button:
- Background: #10B981
- Text: Black (#000000)
- Border Radius: 999px (fully rounded)
- Hover: #059669 + scale(1.05)
- Shadow: 0 20px 25px rgba(16,185,129,0.25)
```

### Cards

```
Background: rgba(31,41,55,0.6)
Border: 1px solid rgba(75,85,99,0.6)
Border Radius: 16px
Hover: Border becomes green with glow
```

### Slider

```
Track: #374151 (gray-700)
Fill: Linear gradient #10B981 to #059669
Thumb: 20px circle, #10B981 with white border
```

## 🌟 Effects & Animations

### Background Atmosphere

```
Large circles (800px, 700px, 600px) with:
- Green colors at 8-10% opacity
- Heavy blur (160px, 140px, 120px)
- Positioned in corners/edges
```

### Glow Effects

```
Buttons: Box shadow with green color at 25% opacity
Cards: Subtle green border glow on hover
Target: Pulsing animation on center circle
```

## 📐 Layout Grid

### Desktop (1440px)

```
Container: 1280px max-width, centered
Columns: 12-column grid with 24px gutters
Margins: 80px on each side
```

### Mobile (375px)

```
Container: Full width with 24px margins
Single column layout
Reduced spacing (40px section padding)
```

## 🎪 Step-by-Step Figma Creation

1. **Setup**: Create artboards (1440px desktop, 375px mobile)
2. **Colors**: Add color styles to design system
3. **Typography**: Set up text styles (Poppins/Inter)
4. **Components**: Create button, card, and icon components
5. **Layout**: Use auto-layout for responsive behavior
6. **Effects**: Add shadows, blurs, and gradients
7. **Prototype**: Add hover states and interactions
8. **Export**: Generate development-ready assets

This specification gives you everything needed to recreate the Trepa landing page pixel-perfectly in Figma!
