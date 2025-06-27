# Layout Components - ROS Platform

This directory contains the professional layout components for the Republic of Subjiwala (ROS) platform, built following the design guidelines specified in `rules.txt`.

## Components

### Layout
The main layout wrapper that combines Navbar and Footer components.

```tsx
import { Layout } from './components/layout';

function App() {
  return (
    <Layout>
      <YourPageContent />
    </Layout>
  );
}
```

**Props:**
- `children` - React nodes to render in the main content area
- `className?` - Additional CSS classes
- `showNavbar?` - Whether to show the navbar (default: true)
- `showFooter?` - Whether to show the footer (default: true)

### Navbar
Professional navigation bar with responsive design, scroll effects, and mobile menu.

```tsx
import { Navbar } from './components/layout';

<Navbar 
  isScrolled={false}
  onMenuToggle={() => {}}
  isMenuOpen={false}
/>
```

**Features:**
- Fixed position with backdrop blur
- Scroll-based styling changes
- Responsive mobile menu with hamburger animation
- Accessibility-compliant keyboard navigation
- Professional gradient CTA button

### Footer
Comprehensive footer with multiple sections, social links, and contact information.

```tsx
import { Footer } from './components/layout';

<Footer 
  sections={footerSections}
  socialLinks={socialLinks}
  contactInfo={contactInfo}
  companyInfo={companyInfo}
/>
```

**Features:**
- Grid-based responsive layout
- Social media links with hover effects
- Contact information with clickable links
- Multiple navigation sections
- Professional bottom bar with legal links

## Design System

### Colors
- **Background**: #000000
- **Text Primary**: #FFFFFF
- **Text Secondary**: rgba(255, 255, 255, 0.8)
- **Accent Primary**: #FFD700 (Primary actions)
- **Accent Secondary**: #CBA3FF (Highlights)
- **Success**: #5AC77F
- **Warning**: #FF7043

### Typography
- **Font Stack**: 'Inter', system fonts
- **Scale**: 12px - 36px
- **Weights**: 400, 500, 600, 700

### Spacing
- **Scale**: 4px - 96px (using rem units)
- **Breakpoints**: 640px, 768px, 1024px, 1280px, 1536px

## Accessibility Features

- Skip-to-content link for keyboard users
- ARIA labels and roles
- Keyboard navigation support
- Focus management for mobile menu
- Screen reader friendly structure
- High contrast mode support

## Responsive Design

- Mobile-first approach
- Flexible grid layouts
- Adaptive navigation (hamburger on mobile)
- Touch-friendly interactive elements
- Optimized for all screen sizes

## Animation & Performance

- CSS transforms for smooth animations
- Reduced motion support
- GPU-accelerated properties
- Optimized re-renders with React.memo
- Lazy loading ready

## Usage Examples

### Basic Layout
```tsx
import { Layout } from './components/layout';

export default function HomePage() {
  return (
    <Layout>
      <section>Your content here</section>
    </Layout>
  );
}
```

### Layout Without Footer
```tsx
import { Layout } from './components/layout';

export default function LandingPage() {
  return (
    <Layout showFooter={false}>
      <section>Landing page content</section>
    </Layout>
  );
}
```

### Custom Navigation
```tsx
import { Navbar, Footer } from './components/layout';

export default function CustomPage() {
  return (
    <div>
      <Navbar />
      <main>
        <YourCustomContent />
      </main>
      <Footer 
        companyInfo={{
          name: 'Custom Company',
          description: 'Custom description',
          established: '2024'
        }}
      />
    </div>
  );
}
```

## Future Enhancements

When GSAP, Framer Motion, and Locomotive Scroll are added:
- Enhanced scroll animations
- Page transition effects
- Parallax scrolling
- Advanced micro-interactions
- Smooth scrolling behavior

## File Structure

```
layout/
├── Layout.tsx          # Main layout wrapper
├── Layout.scss         # Layout styles
├── Navbar.tsx          # Navigation component
├── Navbar.scss         # Navbar styles
├── Footer.tsx          # Footer component
├── Footer.scss         # Footer styles
├── index.ts           # Component exports
└── README.md          # This documentation
```

## Best Practices

1. Always use the Layout component for consistent structure
2. Customize props rather than modifying components directly
3. Follow the established color palette and spacing scale
4. Test on mobile devices for responsive behavior
5. Ensure keyboard accessibility when adding interactions 