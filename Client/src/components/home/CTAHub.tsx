import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './CTAHub.scss';

const gridCards = [
    {
        id: 1,
        type: 'cta',
        size: 'medium',
        color: 'teal',
        title: 'Join Our Community',
        subtitle: 'Connect with Local Farmers',
        text: 'Discover fresh produce from verified vendors in your area',
        button: 'Get Started',
        icon: '🌱'
    },
    {
        id: 2,
        type: 'quote',
        size: 'large',
        color: 'purple',
        quote: 'Farming is not just a job, it\'s a way of life that feeds the world',
        author: '- Local Farmer'
    },
    {
        id: 3,
        type: 'feature',
        size: 'small',
        color: 'green',
        title: 'Fresh Daily',
        text: 'Farm to table in 24 hours',
        icon: '🥕'
    },
    {
        id: 4,
        type: 'stats',
        size: 'medium',
        color: 'orange',
        title: 'Growing Impact',
        stats: [
            { number: '500+', label: 'Farmers' },
            { number: '10K+', label: 'Orders' },
            { number: '50+', label: 'Cities' }
        ]
    },
    {
        id: 5,
        type: 'cta',
        size: 'medium',
        color: 'blue',
        title: 'For Investors',
        subtitle: 'Sustainable Returns',
        text: 'Invest in agricultural innovation and community growth',
        button: 'Learn More',
        icon: '💼'
    },
    {
        id: 6,
        type: 'quote',
        size: 'small',
        color: 'brown',
        quote: 'Supporting local farmers means supporting our future',
        author: '- Community Leader'
    },
    {
        id: 7,
        type: 'feature',
        size: 'large',
        color: 'pink',
        title: 'Quality Guaranteed',
        subtitle: 'Every Product Verified',
        text: 'Our rigorous quality standards ensure you receive the freshest produce every time',
        icon: '✓'
    },
    {
        id: 8,
        type: 'cta',
        size: 'small',
        color: 'yellow',
        title: 'Download App',
        text: 'Shop on the go',
        button: 'Get App',
        icon: '📱'
    },
    {
        id: 9,
        type: 'feature',
        size: 'medium',
        color: 'gray',
        title: 'Sustainable Future',
        subtitle: 'Eco-Friendly Practices',
        text: 'Supporting environmentally conscious farming for a better tomorrow',
        icon: '🌍'
    }
];

const CTAHub: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        // Initial state
        gsap.set(".cta-hub__card", {
            opacity: 0,
            scale: 0.8,
            y: 60
        });

        // Title animation
        gsap.from(".cta-hub__title", {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });

        // Staggered card animations
        gsap.to(".cta-hub__card", {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            stagger: {
                amount: 1.5,
                from: "random",
                ease: "power2.inOut"
            },
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: ".cta-hub__grid",
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });

        // Hover animations for each card
        gsap.utils.toArray('.cta-hub__card').forEach((card: any) => {
            const hoverTl = gsap.timeline({ paused: true });

            hoverTl.to(card, {
                scale: 1.05,
                y: -10,
                duration: 0.3,
                ease: 'power2.out'
            });

            card.addEventListener('mouseenter', () => hoverTl.play());
            card.addEventListener('mouseleave', () => hoverTl.reverse());
        });

    }, { scope: sectionRef });

    const renderCard = (card: any) => {
        const baseClasses = `cta-hub__card cta-hub__card--${card.size} cta-hub__card--${card.color}`;

        switch (card.type) {
            case 'cta':
                return (
                    <div key={card.id} className={baseClasses}>
                        {card.icon && <div className="cta-hub__card-icon">{card.icon}</div>}
                        <h3 className="cta-hub__card-title">{card.title}</h3>
                        {card.subtitle && <h4 className="cta-hub__card-subtitle">{card.subtitle}</h4>}
                        <p className="cta-hub__card-text">{card.text}</p>
                        <button className="cta-hub__card-button">{card.button}</button>
                    </div>
                );

            case 'quote':
                return (
                    <div key={card.id} className={baseClasses}>
                        <p className="cta-hub__card-quote">{card.quote}</p>
                        <p className="cta-hub__card-author">{card.author}</p>
                    </div>
                );

            case 'feature':
                return (
                    <div key={card.id} className={baseClasses}>
                        {card.icon && <div className="cta-hub__card-icon">{card.icon}</div>}
                        <h3 className="cta-hub__card-title">{card.title}</h3>
                        {card.subtitle && <h4 className="cta-hub__card-subtitle">{card.subtitle}</h4>}
                        <p className="cta-hub__card-text">{card.text}</p>
                    </div>
                );

            case 'stats':
                return (
                    <div key={card.id} className={baseClasses}>
                        <h3 className="cta-hub__card-title">{card.title}</h3>
                        <div className="cta-hub__card-stats">
                            {card.stats.map((stat: any, index: number) => (
                                <div key={index} className="cta-hub__stat">
                                    <div className="cta-hub__stat-number">{stat.number}</div>
                                    <div className="cta-hub__stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <section className="cta-hub" ref={sectionRef}>
            <div className="cta-hub__container">
                <h2 className="cta-hub__title">Transforming Agriculture Together</h2>
                <div className="cta-hub__grid">
                    {gridCards.map(renderCard)}
                </div>
            </div>
        </section>
    );
};

export default CTAHub; 