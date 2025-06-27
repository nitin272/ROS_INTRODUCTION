import React, { useState, useEffect } from 'react';
import './HeroCarousel.scss';
import type { SlideData } from '../../types/carousel';

// Import logo images
import logo from '../../assets/logos/transprentblackLogo.png';


const slidesData: SlideData[] = [
    {
        id: 1,
        title: "Welcome to ROS",
        slogan: "Republic of Subjiwala ",
        description: "Connecting local vegetable vendors, consumers, and investors in a revolutionary digital marketplace. We're building the future of local agriculture commerce, empowering communities one vegetable at a time.",
        logo: logo,
        backgroundColor: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
        textColor: "#FFFFFF",
        accentColor: "#1a5446"
    },

    {
        id: 3,
        title: "For Investors",
        slogan: "Invest in the Future ",
        description: "Be part of the agricultural revolution. Invest in sustainable local commerce and help build a platform that connects communities while generating strong returns for stakeholders.",
        logo: logo,
        backgroundColor: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
        textColor: "#FFFFFF",
        accentColor: "#1a5446"
    }
];

const HeroCarousel: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slidesData.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);

        // Resume auto-play after 10 seconds of manual interaction
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };



    const currentSlideData = slidesData[currentSlide];

    return (
        <section
            className="hero-carousel"
            style={{
                background: currentSlideData.backgroundColor,
                color: currentSlideData.textColor
            }}
        >
            <div className="hero-carousel__container">
                <div className="hero-carousel__content">
                    {/* Left Side - Text Content */}
                    <div className="hero-carousel__text">


                        <h2
                            className="hero-carousel__title"
                            style={{ color: currentSlideData.accentColor }}
                        >
                            {currentSlideData.title}
                        </h2>

                        <h1 className="hero-carousel__slogan">
                            {currentSlideData.slogan}
                        </h1>

                        <p className="hero-carousel__description">
                            {currentSlideData.description}
                        </p>


                    </div>

                    {/* Right Side - Logo */}
                    <div className="hero-carousel__visual">
                        <div className="hero-carousel__logo-container">
                            {/* Animated SVG Background */}


                            <img
                                src={currentSlideData.logo}
                                alt={`${currentSlideData.title} Logo`}
                                className="hero-carousel__logo"
                            />
                        </div>
                    </div>
                </div>

                {/* Navigation Controls */}
                <div className="hero-carousel__navigation">

                    <div className="hero-carousel__dots">
                        {slidesData.map((_, index) => (
                            <button
                                key={index}
                                className={`hero-carousel__dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                                style={{
                                    backgroundColor: index === currentSlide
                                        ? currentSlideData.accentColor
                                        : 'rgba(255, 255, 255, 0.3)'
                                }}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Progress Bar */}

            </div>
        </section>
    );
};

export default HeroCarousel; 