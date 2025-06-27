import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaStore, FaUsers, FaChartLine } from 'react-icons/fa';
import './ImpactStats.scss';

gsap.registerPlugin(ScrollTrigger);

// Data for the stats section
const stats = [
    {
        id: 1,
        value: 500,
        label: 'Active Vendors',
        suffix: '+',
        icon: <FaStore />
    },
    {
        id: 2,
        value: 10000,
        label: 'Happy Consumers',
        suffix: '+',
        icon: <FaUsers />
    },
    {
        id: 3,
        value: 1.5,
        label: 'Investment Raised',
        prefix: '₹',
        suffix: 'Cr',
        icon: <FaChartLine />
    }
];

const ImpactStats: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        if (!sectionRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
            }
        });

        tl.from('.impact-stats__title', {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: 'power3.out'
        });

        tl.from('.impact-stats__item', {
            opacity: 0,
            y: 50,
            scale: 0.9,
            duration: 0.6,
            stagger: 0.2,
            ease: 'power2.out'
        }, "-=0.5");

        stats.forEach(stat => {
            const statValue = { val: 0 };
            const statEl = sectionRef.current?.querySelector(`#stat-value-${stat.id}`);
            if (statEl) {
                tl.to(statValue, {
                    val: stat.value,
                    duration: 2,
                    ease: 'power1.inOut',
                    onUpdate: () => {
                        let valueStr = stat.value % 1 !== 0 ? statValue.val.toFixed(1) : Math.round(statValue.val).toLocaleString();
                        statEl.textContent = valueStr;
                    }
                }, "-=1.5");
            }
        });

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="impact-stats">
            <div className="impact-stats__container">
                <h2 className="impact-stats__title">Our Impact in Numbers</h2>
                <div className="impact-stats__grid">
                    {stats.map((stat) => (
                        <div key={stat.id} className="impact-stats__item">
                            <div className="impact-stats__icon">
                                {stat.icon}
                            </div>
                            <div className="impact-stats__value">
                                {stat.prefix && <span className="impact-stats__symbol">{stat.prefix}</span>}
                                <span id={`stat-value-${stat.id}`}>0</span>
                                {stat.suffix && <span className="impact-stats__symbol">{stat.suffix}</span>}
                            </div>
                            <p className="impact-stats__label">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactStats; 