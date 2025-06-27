import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaTractor, FaWarehouse, FaStore, FaUsers } from 'react-icons/fa';
import { GiWheat } from 'react-icons/gi';
import './FourPiller.scss';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const nodes = [
    { cx: 250, cy: 400, text: 'Farmers', icon: FaTractor, color: '#1a5345' }, // left bottom
    { cx: 450, cy: 200, text: 'Mandi', icon: FaWarehouse, color: '#1a5345' }, // left top
    { cx: 750, cy: 400, text: 'Vendors', icon: FaStore, color: '#1a5345' }, // right bottom
    { cx: 1050, cy: 200, text: 'Consumers', icon: FaUsers, color: '#1a5345' }, // right top
];

const HowRosWorks: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const svg = svgRef.current;
        const title = titleRef.current;

        if (!section || !svg || !title) return;

        // Set initial states
        gsap.set(title, { opacity: 0, y: 50 });
        gsap.set('.how-ros-works__title-icon', { scale: 0, rotation: -180 });
        gsap.set('.how-ros-works__circle', { scale: 0, opacity: 0 });
        gsap.set('.how-ros-works__circle-text', { opacity: 0 });
        gsap.set('.how-ros-works__circle-icon', { scale: 0, opacity: 0 });
        gsap.set('.how-ros-works__connection', {
            strokeDasharray: 1000,
            strokeDashoffset: 1000
        });

        // Create timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });

        // Animate title
        tl.to(title, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out'
        });

        // Animate title icon
        tl.to('.how-ros-works__title-icon', {
            scale: 1,
            rotation: 0,
            duration: 0.6,
            ease: 'back.out(1.7)'
        }, '-=0.4');

        // Animate connections (lines)
        tl.to('.how-ros-works__connection', {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: 'power2.inOut',
            stagger: 0.3
        }, '-=0.3');

        // Animate circles
        tl.to('.how-ros-works__circle', {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: 'back.out(1.7)',
            stagger: 0.2
        }, '-=1');

        // Animate icons inside circles
        tl.to('.how-ros-works__circle-icon', {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: 'back.out(1.7)',
            stagger: 0.2
        }, '-=0.6');

        // Animate text inside circles
        tl.to('.how-ros-works__circle-text', {
            opacity: 1,
            duration: 0.5,
            stagger: 0.2
        }, '-=0.3');

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} className="how-ros-works">
            <div className="how-ros-works__container">
                <h2 ref={titleRef} className="how-ros-works__title">
                    <GiWheat className="how-ros-works__title-icon" />
                    Four Pillars of ROS
                </h2>
                <div className="how-ros-works__diagram">
                    <svg
                        ref={svgRef}
                        className="how-ros-works__svg"
                        viewBox="0 0 1200 600"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        {/* Zig-zag connecting lines */}
                        <line x1={nodes[0].cx} y1={nodes[0].cy} x2={nodes[1].cx} y2={nodes[1].cy} className="how-ros-works__connection" stroke="#ffffff" strokeWidth="3" />
                        <line x1={nodes[1].cx} y1={nodes[1].cy} x2={nodes[2].cx} y2={nodes[2].cy} className="how-ros-works__connection" stroke="#ffffff" strokeWidth="3" />
                        <line x1={nodes[2].cx} y1={nodes[2].cy} x2={nodes[3].cx} y2={nodes[3].cy} className="how-ros-works__connection" stroke="#ffffff" strokeWidth="3" />

                        {/* Circles with icons and text */}
                        {nodes.map((node, idx) => {
                            const IconComponent = node.icon;
                            return (
                                <g key={idx}>
                                    <circle
                                        cx={node.cx}
                                        cy={node.cy}
                                        r="90"
                                        stroke="#FFFFFF"
                                        strokeWidth="4"
                                        filter="url(#shadow)"
                                        className="how-ros-works__circle"
                                    />
                                    <foreignObject
                                        x={node.cx - 25}
                                        y={node.cy - 35}
                                        width="50"
                                        height="50"
                                        className="how-ros-works__icon-container"
                                    >
                                        <IconComponent
                                            className="how-ros-works__circle-icon"
                                            style={{
                                                color: '#FFFFFF',
                                                fontSize: '32px',
                                                display: 'block',
                                                margin: '0 auto'
                                            }}
                                        />
                                    </foreignObject>
                                    <text
                                        x={node.cx}
                                        y={node.cy + 25}
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                        className="how-ros-works__circle-text"
                                        fill="#FFFFFF"
                                        fontSize="20"
                                        fontWeight="600"
                                    >
                                        {node.text}
                                    </text>
                                </g>
                            );
                        })}

                        <defs>
                            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                                <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#222" floodOpacity="0.5" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default HowRosWorks; 