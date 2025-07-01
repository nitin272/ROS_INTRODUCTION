// Navigation Types
export interface NavItem {
    id: string;
    label: string;
    href: string;
    isExternal?: boolean;
    icon?: string;
}

export interface NavSection {
    id: string;
    title: string;
    items: NavItem[];
}

export interface NavbarProps {
    className?: string;
    isScrolled?: boolean;
    onMenuToggle?: () => void;
    isMenuOpen?: boolean;
}

// Footer Types
export interface FooterLink {
    id: string;
    label: string;
    href: string;
    isExternal?: boolean;
}

export interface FooterSection {
    id: string;
    title: string;
    links: FooterLink[];
}

export interface SocialLink {
    id: string;
    platform: string;
    href: string;
    icon: string;
    label: string;
}

export interface ContactInfo {
    email: string;
    phone: string;
    address?: string;
}

export interface FooterProps {
    className?: string;
    sections?: FooterSection[];
    socialLinks?: SocialLink[];
    contactInfo?: ContactInfo;
    companyInfo?: {
        name: string;
        description: string;
        established: string;
    };
}

// Layout Types
export interface LayoutProps {
    children: React.ReactNode;
    className?: string;
    showNavbar?: boolean;
    showFooter?: boolean;
} 