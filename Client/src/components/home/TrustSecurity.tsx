import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FaShieldAlt, FaCheckCircle, FaUserCheck, FaHandshake, FaLock } from 'react-icons/fa';
import './TrustSecurity.scss';

const securityFeatures = [
    {
        icon: <FaShieldAlt />,
        title: 'Payment Security',
        description: 'Bank-grade encryption and secure payment processing ensure your transactions are always protected.'
    },
    {
        icon: <FaCheckCircle />,
        title: 'Quality Assurance',
        description: 'Multi-step quality checks and freshness guarantees on every product delivered to your doorstep.'
    },
    {
        icon: <FaUserCheck />,
        title: 'Vendor Verification',
        description: 'Thorough background checks and certification requirements for all vendors on our platform.'
    },
    {
        icon: <FaHandshake />,
        title: 'Customer Protection',
        description: '100% money-back guarantee and 24/7 customer support for complete peace of mind.'
    }
];



const stats = [
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '100K+', label: 'Secure Transactions' },
    { number: '24 /7', label: 'Security Monitoring' },
];

const TrustSecurity: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });

        // Title and subtitle animation
        tl.from(".trust-security__title", {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out'
        })
            .from(".trust-security__title-icon", {
                scale: 0,
                rotation: -180,
                duration: 0.6,
                ease: 'back.out(1.7)'
            }, "-=0.4")
            .from(".trust-security__subtitle", {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: 'power3.out'
            }, "-=0.6");

        // Cards animation
        tl.from(".trust-security__card", {
            opacity: 2,
            y: 50,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power2.out'
        }, "-=0.4");

        // Badges animation
        tl.from(".trust-security__badge", {
            opacity: 2,
            scale: 0.8,
            stagger: 0.1,
            duration: 0.6,
            ease: 'back.out(1.7)'
        }, "-=0.3");

        // Stats animation
        tl.from(".trust-security__stat", {
            opacity: 0,
            y: 30,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power2.out'
        }, "-=0.4");

        // Animate stat numbers
        const statNumbers = gsap.utils.toArray('.trust-security__stat-number');
        statNumbers.forEach((el: any) => {
            const finalText = el.textContent;
            const hasPlus = finalText.includes('+');
            const hasPercent = finalText.includes('%');
            const numericValue = parseFloat(finalText.replace(/[^0-9.]/g, ''));

            if (!isNaN(numericValue)) {
                gsap.fromTo(el,
                    { textContent: 0 },
                    {
                        textContent: numericValue,
                        duration: 2,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 85%',
                            once: true
                        },
                        onUpdate: function () {
                            const current = parseFloat(this.targets()[0].textContent);
                            if (finalText.includes('.')) {
                                el.textContent = current.toFixed(1) + (hasPercent ? '%' : '') + (hasPlus ? '+' : '');
                            } else {
                                el.textContent = Math.floor(current).toLocaleString() + (hasPlus ? '+' : '');
                            }
                        }
                    }
                );
            }
        });

    }, { scope: sectionRef });

    return (
        <section className="trust-security" ref={sectionRef}>
            <div className="trust-security__container">
                <h2 className="trust-security__title">
                    <FaLock className="trust-security__title-icon" />
                    Your Trust, Our Priority
                </h2>
                <p className="trust-security__subtitle">
                    We've built a platform with security, quality, and transparency at its core.
                    Every transaction, every vendor, every product is backed by our commitment to excellence.
                </p>

                <div className="trust-security__grid">
                    {securityFeatures.map((feature, index) => (
                        <div key={index} className="trust-security__card">
                            <div className="trust-security__card-icon">{feature.icon}</div>
                            <h3 className="trust-security__card-title">{feature.title}</h3>
                            <p className="trust-security__card-description">{feature.description}</p>
                        </div>
                    ))}
                </div>


                <div className="trust-security__stats">
                    {stats.map((stat, index) => (
                        <div key={index} className="trust-security__stat">
                            <div className="trust-security__stat-number">{stat.number}</div>
                            <div className="trust-security__stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustSecurity; 