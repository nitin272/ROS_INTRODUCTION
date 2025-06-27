export interface SlideData {
    id: number;
    title: string;
    slogan: string;
    description: string;
    logo: string;
    backgroundColor: string;
    textColor: string;
    accentColor: string;
}

export interface CarouselProps {
    slides?: SlideData[];
    autoPlayInterval?: number;
    showNavigation?: boolean;
    showProgressBar?: boolean;
} 