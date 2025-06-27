import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {
    FaUserPlus, FaClipboardList, FaShoppingCart, FaTruck,
    FaSearch, FaShoppingBag, FaMapMarkerAlt, FaLeaf,
    FaLightbulb, FaBriefcase, FaChartLine, FaCoins,
    FaCogs
} from 'react-icons/fa';
import './ProcessFlow.scss';

type UserType = 'Vendors' | 'Consumers' | 'Investors';

interface Step {
    title: string;
    description: string;
    icon: React.ReactElement;
}

const processData: Record<UserType, Step[]> = {
    Vendors: [
        { title: 'Sign Up', description: 'Create your vendor profile in minutes.', icon: <FaUserPlus /> },
        { title: 'List Produce', description: 'Showcase your fresh vegetables to a wide audience.', icon: <FaClipboardList /> },
        { title: 'Get Orders', description: 'Receive and manage orders through our intuitive dashboard.', icon: <FaShoppingCart /> },
        { title: 'Deliver & Earn', description: 'Fulfill orders and receive timely payments.', icon: <FaTruck /> },
    ],
    Consumers: [
        { title: 'Browse & Discover', description: 'Explore a wide variety of fresh, local produce.', icon: <FaSearch /> },
        { title: 'Place Your Order', description: 'Select your items and enjoy a seamless checkout.', icon: <FaShoppingBag /> },
        { title: 'Track in Real-Time', description: 'Watch your order travel from the farm to your door.', icon: <FaMapMarkerAlt /> },
        { title: 'Enjoy Freshness', description: 'Receive your fresh vegetables and enjoy healthy meals.', icon: <FaLeaf /> },
    ],
    Investors: [
        { title: 'Explore Opportunities', description: 'Discover curated investment opportunities in local agriculture.', icon: <FaLightbulb /> },
        { title: 'Invest with Confidence', description: 'Make secure investments using our transparent platform.', icon: <FaBriefcase /> },
        { title: 'Track Your Impact', description: 'Monitor the growth of your investment and its social impact.', icon: <FaChartLine /> },
        { title: 'Earn Returns', description: 'Generate financial returns while empowering local communities.', icon: <FaCoins /> },
    ],
};

const ProcessFlow: React.FC = () => {
    const [activeTab, setActiveTab] = useState<UserType>('Consumers');
    const sectionRef = useRef<HTMLElement>(null);
    const stepsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!stepsRef.current) return;
        gsap.fromTo(gsap.utils.toArray(stepsRef.current.children),
            { opacity: 0, y: -20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.4,
                ease: 'power2.out',
                stagger: 0.1,
            });
    }, { dependencies: [activeTab] });

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
        tl.from(".process-flow__title", { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' })
            .from(".process-flow__title-icon", { scale: 0, rotation: -180, duration: 0.6, ease: 'back.out(1.7)' }, "-=0.4")
            .from(".process-flow__subtitle", { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' }, "-=0.6")
            .from(".process-flow__tabs", { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' }, "-=0.6");
    }, { scope: sectionRef });

    const handleTabClick = (tab: UserType) => {
        if (tab === activeTab) return;

        if (!stepsRef.current) return;
        gsap.to(gsap.utils.toArray(stepsRef.current.children), {
            opacity: 0,
            y: 20,
            duration: 0.3,
            ease: 'power2.in',
            stagger: 0.05,
            onComplete: () => {
                setActiveTab(tab);
            }
        });
    };

    return (
        <section className="process-flow" ref={sectionRef}>
            <div className="process-flow__container">
                <h2 className="process-flow__title">
                    <FaCogs className="process-flow__title-icon" />
                    How It Works
                </h2>
                <p className="process-flow__subtitle">A simple, transparent process for everyone involved in our ecosystem. Follow the journey from farm to table, or from investment to impact.</p>
                <div className="process-flow__tabs">
                    {(Object.keys(processData) as UserType[]).map(tab => (
                        <button
                            key={tab}
                            className={`process-flow__tab-btn ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => handleTabClick(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="process-flow__content">
                    <div ref={stepsRef} className="process-flow__steps">
                        {processData[activeTab].map((step, index) => (
                            <div className="process-flow__step" key={step.title}>
                                <div className="process-flow__step-icon-container">
                                    <div className="process-flow__step-number">{index + 1}</div>
                                    <div className="process-flow__step-icon">{step.icon}</div>
                                </div>
                                <h3 className="process-flow__step-title">{step.title}</h3>
                                <p className="process-flow__step-description">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessFlow; 