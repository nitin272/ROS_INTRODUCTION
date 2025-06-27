# Home Page Components

This directory contains all the components specific to the homepage of the ROS platform.

## Components

### HeroCarousel
Hero section carousel component with dynamic content and smooth transitions.

### HowRosWorks
Network topology visualization showing the ROS platform structure with connecting circles.

### HowWeWork
**NEW** - Supply chain process section showcasing the five-step workflow from sourcing to distribution.

#### Features:
- **Dark Theme Optimized**: Adapted for the ROS dark mode design system
- **Responsive Design**: Mobile-first approach with tablet and desktop layouts
- **Interactive Cards**: Hover effects with smooth animations
- **Process Flow**: Visual connectors showing step progression
- **Accessibility**: Reduced motion support and proper ARIA labels
- **Modern Styling**: Glass-morphism effects with gradient accents

#### Five Steps:
1. **Sourcing** - Working with FPOs and verified farm collectives
2. **Quality Control** - Multi-level inspection for international standards
3. **Packaging** - Food-grade materials for freshness retention
4. **Storage & Inventory** - Managed warehousing with traceability
5. **Distribution** - Global logistics to wholesalers and exporters

#### Styling:
- Uses design system colors: #1a5446 (primary), #5AC77F (success)
- Glass-morphism cards with backdrop blur
- Staggered entrance animations
- Responsive breakpoints at 768px and 1024px
- Green gradient badges with step numbers

#### Usage:
```tsx
import { HowWeWork } from '../components/home';

<HowWeWork />
```

## File Structure
```
/home
├── HeroCarousel.tsx & .scss
├── HowRosWorks.tsx & .scss  
├── HowWeWork.tsx & .scss     ← NEW
├── index.ts
└── README.md
```

## Design System Compliance
All components follow the established ROS design guidelines:
- Dark mode optimized (#000000 background)
- Consistent typography scale
- Proper spacing and layout grid
- Accessibility standards (4.5:1 contrast ratio)
- Performance optimized animations 