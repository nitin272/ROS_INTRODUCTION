// Type definitions for home page components

export interface ProcessStep {
    id: string;
    number: number;
    title: string;
    description: string;
    icon: string;
}

export interface WhyChooseRosProps {
    className?: string;
    steps?: ProcessStep[];
}

export interface HowRosWorksProps {
    className?: string;
}

export interface HeroCarouselProps {
    className?: string;
    slides?: CarouselSlide[];
    autoPlay?: boolean;
    interval?: number;
}

export interface CarouselSlide {
    id: string;
    title: string;
    subtitle?: string;
    description?: string;
    image?: string;
    ctaText?: string;
    ctaHref?: string;
} 