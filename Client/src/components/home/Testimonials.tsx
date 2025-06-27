import React, { useState, useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FaQuoteLeft, FaPlay, FaChevronLeft, FaChevronRight, FaUsers } from 'react-icons/fa';
import './Testimonials.scss';
import type { Testimonial } from '../../types/testimonial';

import avatar1 from '../../assets/about/men_image.svg';
import avatar2 from '../../assets/about/Jp.svg';
import avatar3 from '../../assets/about/image2.svg';

const testimonialsData: Testimonial[] = [
    {
        id: 1,
        quote: "ROS has completely transformed my business. I'm reaching more customers, my income has doubled. The platform is a lifesaver for local vendors like me.",
        name: 'Rajesh Kumar',
        role: 'Local Vendor, Pune',
        avatar: avatar1,
    },
    {
        id: 2,
        quote: "The quality of vegetables is outstanding, and I love supporting local farmers directly. It's a win-win! The video stories from the farms are a fantastic touch.",
        name: 'Priya Sharma',
        role: 'Happy Consumer, Mumbai',
        avatar: avatar2,
        videoUrl: 'https://www.youtube.com/watch?v=sB0n2_2dc64'
    },
    {
        id: 3,
        quote: "Investing in ROS was one of the best decisions I've made. It's not just about financial returns; it's about making a real impact in our communities and food systems.",
        name: 'Anjali Mehta',
        role: 'Impact Investor',
        avatar: avatar3,
    },
];

const TestimonialSlide: React.FC<{ testimonial: Testimonial, isActive: boolean }> = ({ testimonial, isActive }) => {
    const slideRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (isActive && slideRef.current) {
            gsap.fromTo(slideRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
            gsap.fromTo(slideRef.current.querySelector('.testimonials__quote-icon'), { scale: 0, rotation: -180 }, { scale: 1, rotation: 0, duration: 0.6, ease: 'back.out(1.7)', delay: 0.2 });
        } else if (slideRef.current) {
            gsap.to(slideRef.current, { opacity: 0, y: -20, duration: 0.5, ease: 'power2.in' });
        }
    }, [isActive]);

    if (!isActive) return null;

    return (
        <div ref={slideRef} className="testimonials__slide-content">
            <div className="testimonials__avatar-container">
                <img src={testimonial.avatar} alt={testimonial.name} className="testimonials__avatar" />
                {testimonial.videoUrl && (
                    <a href={testimonial.videoUrl} target="_blank" rel="noopener noreferrer" className="testimonials__video-play-button" aria-label={`Watch video testimonial from ${testimonial.name}`}>
                        <FaPlay />
                    </a>
                )}
            </div>
            <blockquote className="testimonials__quote">
                <FaQuoteLeft className="testimonials__quote-icon" />
                {testimonial.quote}
            </blockquote>
            <p className="testimonials__author">{testimonial.name}</p>
            <p className="testimonials__role">{testimonial.role}</p>
        </div>
    );
};


const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            handleNext();
        }, 6000);
        return () => clearInterval(timer);
    }, [currentIndex, isPaused]);

    const handleNavigation = (newIndex: number) => {
        if (newIndex === currentIndex) return;
        setCurrentIndex(newIndex);
    };

    const handlePrev = () => {
        const newIndex = (currentIndex - 1 + testimonialsData.length) % testimonialsData.length;
        handleNavigation(newIndex);
    };

    const handleNext = () => {
        const newIndex = (currentIndex + 1) % testimonialsData.length;
        handleNavigation(newIndex);
    };

    const pauseSlideshow = () => {
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 10000); // Resume after 10s
    };

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            }
        });

        tl.from(".testimonials__title", { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' })
            .from(".testimonials__title-icon", { scale: 0, rotation: -180, duration: 0.6, ease: 'back.out(1.7)' }, "-=0.4")
            .from(".testimonials__subtitle", { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' }, "-=0.6")
            .from(".testimonials__carousel", { opacity: 0, scale: 0.95, duration: 0.8, ease: 'power3.out' }, "-=0.6");

    }, { scope: sectionRef });

    return (
        <section className="testimonials" ref={sectionRef}>
            <div className="testimonials__container">
                <h2 className="testimonials__title">
                    <FaUsers className="testimonials__title-icon" />
                    Voices of Our Community
                </h2>
                <p className="testimonials__subtitle">
                    See how ROS is making a difference for vendors, consumers, and investors.
                </p>
                <div className="testimonials__carousel" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
                    {testimonialsData.map((testimonial, index) => (
                        <TestimonialSlide key={testimonial.id} testimonial={testimonial} isActive={index === currentIndex} />
                    ))}
                    <div className="testimonials__navigation">
                        <button onClick={() => { handlePrev(); pauseSlideshow(); }} className="testimonials__nav-btn" aria-label="Previous testimonial">
                            <FaChevronLeft />
                        </button>
                        <div className="testimonials__dots">
                            {testimonialsData.map((_, index) => (
                                <button
                                    key={index}
                                    className={`testimonials__dot ${index === currentIndex ? 'active' : ''}`}
                                    onClick={() => { handleNavigation(index); pauseSlideshow(); }}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                        <button onClick={() => { handleNext(); pauseSlideshow(); }} className="testimonials__nav-btn" aria-label="Next testimonial">
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials; 