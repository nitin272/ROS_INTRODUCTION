import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FaTractor, FaShoppingCart, FaBriefcase, FaHandshake } from 'react-icons/fa';
import './BenefitsGrid.scss';

const benefitsData = [
    {
        userType: 'Vendors',
        icon: <FaTractor />,
        benefits: ['Direct market access', 'Fair, transparent pricing', 'Sustainable business growth']
    },
    {
        userType: 'Consumers',
        icon: <FaShoppingCart />,
        benefits: ['Access to fresh produce', 'Support for local economy', 'Convenient, reliable delivery']
    },
    {
        userType: 'Investors',
        icon: <FaBriefcase />,
        benefits: ['High-impact social returns', 'Portfolio diversification', 'Transparent performance tracking']
    }
];

const BenefitsGrid: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });

        tl.from(".benefits-grid__title", {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out'
        })
            .from(".benefits-grid__title-icon", {
                scale: 0,
                rotation: -180,
                duration: 0.6,
                ease: 'back.out(1.7)'
            }, "-=0.4")
            .from(".benefits-grid__subtitle", {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: 'power3.out'
            }, "-=0.6")
            .from(".benefits-grid__card", {
                opacity: 2,
                y: 60,
                scale: 0.9,
                duration: 0.8,
                stagger: 0.2,
                ease: 'back.out(1.7)'
            }, "-=0.4");

    }, { scope: sectionRef });

    return (
        <section className="benefits-grid" ref={sectionRef}>
            <div className="benefits-grid__container">
                <h2 className="benefits-grid__title">
                    <FaHandshake className="benefits-grid__title-icon" />
                    A Win-Win for Everyone
                </h2>
                <p className="benefits-grid__subtitle">Our platform is designed to create shared value, offering distinct advantages for every participant in the ecosystem.</p>
                <div className="benefits-grid__grid">
                    {benefitsData.map(card => (
                        <div key={card.userType} className="benefits-grid__card">
                            <div className="benefits-grid__card-header">
                                <div className="benefits-grid__card-icon">{card.icon}</div>
                                <h3 className="benefits-grid__card-title">{card.userType}</h3>
                            </div>
                            <ul className="benefits-grid__card-list">
                                {card.benefits.map(benefit => (
                                    <li key={benefit} className="benefits-grid__card-list-item">{benefit}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BenefitsGrid;
