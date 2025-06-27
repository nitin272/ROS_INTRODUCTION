import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaSeedling, FaCheckCircle, FaBoxOpen, FaWarehouse, FaTruck } from 'react-icons/fa';
import { GiWheat } from 'react-icons/gi';
import './HowROSWorks.scss';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface SupplyChainStep {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const HowROSWorks: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const connectorLineRef = useRef<HTMLDivElement>(null);

    const supplyChainSteps: SupplyChainStep[] = [
        {
            id: 1,
            title: 'Sourcing',
            description: "Direct partnerships with local farmers ensure fresh, quality vegetables at competitive prices.",
            icon: <FaSeedling />
        },
        {
            id: 2,
            title: 'Quality Control',
            description: 'Every batch undergoes multi-level inspection to meet international food safety standards.',
            icon: <FaCheckCircle />
        },
        {
            id: 3,
            title: 'Packaging',
            description: 'Sealed for freshness using food-grade materials to retain nutritional value and quality.',
            icon: <FaBoxOpen />
        },
        {
            id: 4,
            title: 'Storage & Inventory',
            description: 'Climate-controlled storage facilities maintain optimal conditions for extended freshness.',
            icon: <FaWarehouse />
        },
        {
            id: 5,
            title: 'Distribution',
            description: 'Our logistics team delivers products on time to wholesalers, exporters, and distributors across the globe.',
            icon: <FaTruck />
        }
    ];

    // Using React GSAP hook for better React integration
    useGSAP(() => {
        // Set initial states - cards start from below with scale and rotation
        gsap.set(cardsRef.current, {
            y: 120,
            opacity: 0,
            scale: 0.7,
            rotationX: 60,
            transformOrigin: "center center"
        });

        // Set initial states for header elements
        gsap.set(titleRef.current, {
            y: 80,
            opacity: 0,
            scale: 0.9
        });

        gsap.set('.how-ros-works__title-icon', {
            scale: 0,
            rotation: -180
        });

        gsap.set(subtitleRef.current, {
            y: 50,
            opacity: 0
        });

        // Set initial state for connector line
        gsap.set(connectorLineRef.current, {
            scaleX: 0,
            transformOrigin: "left center"
        });

        // Create main timeline with ScrollTrigger
        const mainTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 85%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
                once: false
            }
        });

        // Animate header elements with smooth entrance
        mainTimeline
            .to(titleRef.current, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "power3.out"
            })
            .to('.how-ros-works__title-icon', {
                scale: 1,
                rotation: 0,
                duration: 0.6,
                ease: "back.out(1.7)"
            }, "-=0.4")
            .to(subtitleRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.5")

            // Animate connector line with smooth scale
            .to(connectorLineRef.current, {
                scaleX: 1,
                duration: 1.2,
                ease: "power2.out"
            }, "-=0.3")

            // Stagger animate cards with enhanced effect
            .to(cardsRef.current, {
                y: 0,
                opacity: 1,
                scale: 1,
                rotationX: 0,
                duration: 1,
                stagger: {
                    amount: 1.5,
                    from: "start",
                    ease: "power2.out"
                },
                ease: "back.out(1.4)"
            }, "-=0.8");

        // Add individual hover animations for each card
        cardsRef.current.forEach((card) => {
            if (card) {
                const icon = card.querySelector('.how-ros-works__icon');
                const badge = card.querySelector('.how-ros-works__badge');

                // Create hover timeline
                const hoverTl = gsap.timeline({ paused: true });

                hoverTl
                    .to(card, {
                        y: -16,
                        scale: 1.03,
                        duration: 0.4,
                        ease: "power2.out"
                    })
                    .to(icon, {
                        scale: 1.15,
                        rotation: 8,
                        duration: 0.4,
                        ease: "power2.out"
                    }, 0)
                    .to(badge, {
                        scale: 1.2,
                        duration: 0.4,
                        ease: "back.out(1.7)"
                    }, 0);

                // Add mouse event listeners
                const handleMouseEnter = () => hoverTl.play();
                const handleMouseLeave = () => hoverTl.reverse();

                card.addEventListener('mouseenter', handleMouseEnter);
                card.addEventListener('mouseleave', handleMouseLeave);

                // Cleanup function for event listeners
                return () => {
                    card.removeEventListener('mouseenter', handleMouseEnter);
                    card.removeEventListener('mouseleave', handleMouseLeave);
                };
            }
        });

    }, { scope: sectionRef }); // Use scope for better performance

    // Ref callback to collect card refs efficiently
    const addToCardRefs = (el: HTMLDivElement | null, index: number) => {
        if (el) {
            cardsRef.current[index] = el;
        }
    };

    return (
        <section ref={sectionRef} className="how-ros-works">
            <div className="how-ros-works__container">
                {/* Header Section */}
                <div className="how-ros-works__header">
                    <h2 ref={titleRef} className="how-ros-works__title">
                        <GiWheat className="how-ros-works__title-icon" />
                        How ROS Works
                    </h2>
                    <p ref={subtitleRef} className="how-ros-works__subtitle">
                        Our end-to-end supply chain ensures you get the best quality—every time
                    </p>
                </div>

                {/* Supply Chain Steps */}
                <div className="how-ros-works__steps">
                    {/* Connecting Line */}
                    <div ref={connectorLineRef} className="how-ros-works__connector-line"></div>

                    {supplyChainSteps.map((step, index) => (
                        <div
                            key={step.id}
                            ref={(el) => addToCardRefs(el, index)}
                            className="how-ros-works__step"
                        >
                            <div className="how-ros-works__card">
                                {/* Icon */}
                                <div className="how-ros-works__icon">
                                    <div className="how-ros-works__icon-symbol">
                                        {step.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="how-ros-works__content">
                                    <h3 className="how-ros-works__step-title">
                                        {step.title}
                                    </h3>
                                    <p className="how-ros-works__step-description">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Step Number Badge */}
                                <div className="how-ros-works__badge">
                                    <span className="how-ros-works__badge-number">
                                        {step.id}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowROSWorks;