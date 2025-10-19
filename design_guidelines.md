# Design Guidelines: Plant Disease Detection App

## Design Approach: Material Design System
**Justification:** This is a utility-focused scientific tool requiring clarity, immediate visual feedback, and mobile-first accessibility. Material Design provides the structured framework needed for camera integration, data display, and user confidence in results.

## Core Design Elements

### A. Color Palette
**Light Mode:**
- Primary: 142 71% 45% (Vibrant plant green - main actions, headers)
- Primary Variant: 142 59% 38% (Darker green - hover states)
- Background: 120 30% 98% (Soft off-white with green hint)
- Surface: 0 0% 100% (White cards/containers)
- Success: 142 71% 45% (Healthy plant indicator)
- Warning: 45 100% 51% (Disease warning)
- Error: 0 65% 51% (Critical disease state)
- Text Primary: 0 0% 13% (Near black for readability)
- Text Secondary: 0 0% 38% (Gray for supporting text)

**Dark Mode:**
- Primary: 142 60% 55% (Lighter green for contrast)
- Background: 120 10% 12% (Dark green-tinted background)
- Surface: 120 8% 18% (Elevated dark surface)
- Text Primary: 0 0% 95% (Near white)
- Text Secondary: 0 0% 70% (Muted for hierarchy)

### B. Typography
**Font Stack:** 
- Primary: 'Inter' from Google Fonts (clean, highly readable)
- Fallback: system-ui, -apple-system, sans-serif

**Hierarchy:**
- H1 (App Title): text-3xl font-bold (30px, 700 weight)
- H2 (Section Headers): text-xl font-semibold (20px, 600 weight)
- Body (Instructions): text-base font-normal (16px, 400 weight)
- Results Display: text-lg font-semibold (18px, 600 weight)
- Confidence Score: text-2xl font-bold (24px, 700 weight)
- Helper Text: text-sm font-normal (14px, 400 weight)

### C. Layout System
**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16 consistently
- Component padding: p-6 or p-8
- Section margins: mb-8 or mb-12
- Button padding: px-6 py-3
- Card gaps: gap-6

**Container Strategy:**
- Max width: max-w-2xl (optimal for mobile camera experience)
- Centered layout: mx-auto
- Mobile padding: px-4, Desktop: px-6

### D. Component Library

**Camera Preview:**
- Full-width rounded container with 2px solid primary border
- aspect-video ratio maintained
- Rounded corners: rounded-xl (12px)
- Shadow: shadow-xl for depth
- Loading state with skeleton shimmer

**Capture Button:**
- Large, prominent: min-h-14, rounded-full
- Primary color background with white text
- Icon + text combination (📸 Chụp ảnh)
- Ripple effect on click (Material Design)
- Disabled state: opacity-50 with cursor-not-allowed

**Results Card:**
- White surface (dark: elevated dark surface)
- Padding: p-8
- Rounded: rounded-2xl
- Shadow: shadow-lg
- Border: 1px solid divider color
- Smooth fade-in animation (300ms) when result appears

**Disease Information Display:**
- Disease name: Large, bold, with emoji icon
- Confidence meter: Horizontal progress bar (h-3, rounded-full)
- Color-coded by confidence: >80% green, 50-80% yellow, <50% red
- Recommendation section: Light background panel with actionable text

**Navigation/Header:**
- Sticky top position
- Logo/title on left, info icon on right
- Background blur effect: backdrop-blur-md
- Subtle bottom border

### E. Interaction Patterns

**Camera State Management:**
- Loading: Pulsing skeleton with "Đang khởi động camera..."
- Active: Live feed with subtle border pulse
- Captured: Brief flash animation (white overlay, 150ms)

**Result Presentation:**
- Slide up animation from bottom (400ms ease-out)
- Confidence score animates from 0 to final value (1000ms)
- Disease name fades in (200ms delay after card appears)

**Error States:**
- Toast notifications for camera/model errors
- Inline helper text with warning color
- Retry button prominently displayed

## Mobile-First Requirements
- Camera view takes 60-70% of viewport height on mobile
- Touch-optimized button sizes (minimum 44x44px tap target)
- Vertical single-column layout throughout
- Bottom-fixed capture button on mobile for thumb accessibility
- Swipe-to-dismiss for result cards (optional enhancement)

## Accessibility
- High contrast ratios (WCAG AA minimum)
- Vietnamese language support throughout
- Camera permission explanatory text
- Screen reader labels for all interactive elements
- Focus indicators on all focusable elements

## Visual Enhancements
- Subtle gradient overlays on cards (5% opacity)
- Micro-interactions: button scale on press (scale-95)
- Loading spinners with primary color
- Empty state illustrations (simple plant icon with helper text)
- Success checkmark animation when high confidence detected

## Performance Considerations
- Lazy load TensorFlow.js model with progress indicator
- Compress captured images before prediction
- Debounce rapid capture attempts
- Show skeleton loaders during processing states