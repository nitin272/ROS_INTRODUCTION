# 🌿 ROS (Republic of Sabjiwala) — Website

**Connecting local vegetable vendors to consumers through technology.**

---

## 📌 Project Overview

**ROS (Republic of Sabjiwala)** is a web platform modernizing the traditional vegetable market by digitally connecting vendors, consumers, and investors. Built with **React.js**, the platform offers seamless onboarding for vendors, easy shopping for consumers, and clear value for investors.

This repository contains the source code and content plan for the ROS website.

---

## 📁 Folder Structure

```bash
/src
│
├── pages/                    # Route-based pages
│   ├── index.tsx            # Homepage
│   ├── vendors.tsx          # Vendor onboarding page
│   ├── investors.tsx        # Investor info page
│   ├── consumers.tsx        # Consumer landing page
│   ├── blog.tsx             # News & articles
│   └── contact.tsx          # Contact & support
│
├── components/              # Reusable UI and section components
│   ├── home/                # Homepage sections (hero, services, etc.)
│   ├── vendors/             # Vendor page components
│   ├── investors/           # Investor page components
│   ├── consumers/           # Consumer page components
│   ├── blog/                # Blog/news sections
│   ├── contact/             # Contact & support components
│   ├── layout/              # Layout components (Header, Footer)
│   └── common/              # Common UI elements (Button, Card, etc.)
│
├── styles/                  # Global and modular styles
│   ├── globals.css
│   └── variables.scss
│
├── hooks/                   # Custom React hooks
│   └── useForm.ts
│
├── context/                 # Global state with React context
│   └── UserContext.tsx
│
├── utils/                   # Utility functions
│   ├── validateEmail.ts
│   └── formatDate.ts
│
├── services/                # API and data services
│   ├── vendorService.ts
│   ├── investorService.ts
│   ├── blogService.ts
│   └── contactService.ts
│
├── lib/                     # Configuration and libraries
│   ├── api.ts
│   └── config.ts
│
└── types/                   # TypeScript types and interfaces
    ├── vendor.d.ts
    ├── investor.d.ts
    ├── consumer.d.ts
    └── blog.d.ts
```

---

## ⚙️ Workflow

### 1. Development

* All development happens inside the `/src` folder.
* Each route (page) is defined in `/pages`.
* UI sections are built as components inside `/components`.

### 2. Component Design

* Modular and reusable components are used.
* Each component is scoped by page type (e.g., `/components/vendors`).

### 3. Styling

* Global styles go into `globals.css`.
* Component-level styles use `.module.css` or `.scss` for modularity.

### 4. API & Data

* All data fetching logic is abstracted inside `/services`.
* Uses `fetch` or `axios` for REST APIs.

### 5. State Management

* React Context API is used for global state (`/context`).
* Hooks are used for local or reusable logic (`/hooks`).

### 6. Typescript & Type Safety

* Strongly typed using `.d.ts` files inside `/types`.

---

# 🌈 ROS UI Color Theme Guide

This README outlines the official color theme for **ROS (Republic of Sabjiwala)** — a modern digital platform reimagining the traditional vegetable market.

---

## 🎨 Color Palette

| Role             | Color Code | Description                                                    |
| ---------------- | ---------- | -------------------------------------------------------------- |
| **Background**   | `#000000`  | Base UI background. Provides a sleek, modern canvas.           |
| **Text Primary** | `#FFFFFF`  | Used for main text content and headings.                       |
| **Accent 1**     | `#FFD700`  | Used for primary CTAs (buttons), highlights, and pricing tags. |
| **Accent 2**     | `#CBA3FF`  | Secondary buttons, card highlights, infographics.              |
| **Success**      | `#5AC77F`  | Confirmation states, successful actions.                       |
| **Warning**      | `#FF7043`  | Error states, warnings, and promotional alerts.                |

---

## 🔭 Application Guidelines

* **Background**: Set as the main backdrop for the entire web app.
* **Text Primary**: Use for titles, body copy, and all foreground text for clarity and accessibility.
* **Accent 1**: Apply for all primary action buttons (e.g., "Buy Now", "Invest") and emphasize important content.
* **Accent 2**: Use for secondary buttons, info cards, and labels to bring visual variety while staying accessible.
* **Success**: Green tones indicate successful user actions like form submissions, vendor approvals.
* **Warning**: Coral tones highlight errors, validations, or limited-time announcements.

---

## 🖼️ Color Palette Preview

> You can refer to the visual representation below for a quick glance at the full color palette.

![ROS Color Palette](./Client/assets/color%20schema.png)

> *Ensure the image file is named `A_2D_digital_graphic_design_image_displays_a_color.png` and placed in the same directory as this README.*

---

## 💡 Notes

* All colors are optimized for dark-mode interfaces.
* Maintain at least a **4.5:1 contrast ratio** between text and background to ensure readability and WCAG compliance.
* Limit use of Accent colors to retain visual hierarchy and clarity.
