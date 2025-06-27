import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaSeedling, FaArrowRight, FaQuoteLeft, FaLeaf } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';
import './AboutRos.scss';
import aboutRosImage from '../../assets/home/aboutROS.jpg';

gsap.registerPlugin(ScrollTrigger);

const AboutRos: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    // GSAP animations following the established pattern
    useGSAP(() => {
        if (!sectionRef.current || !contentRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
            }
        });

        // Animate heading
        tl.from('.about-ros__heading', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        });

        // Animate heading icon separately for extra effect
        tl.from('.about-ros__heading-icon', {
            scale: 0,
            rotation: -180,
            duration: 0.6,
            ease: 'back.out(1.7)'
        }, '-=0.4');

        // Animate columns
        tl.from('.about-ros__image-container', {
            x: -50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.4');

        tl.from('.about-ros__content', {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.8');

        // Animate mission elements with stagger
        tl.from('.about-ros__mission-tag', {
            rotate: -15,
            opacity: 0,
            duration: 0.6,
            ease: 'back.out(1.7)'
        }, '-=0.6');

        // Animate mission tag icon
        tl.from('.about-ros__mission-tag-icon', {
            scale: 0,
            rotation: 360,
            duration: 0.5,
            ease: 'back.out(1.7)'
        }, '-=0.3');

        tl.from(['.about-ros__mission-title', '.about-ros__mission-text', '.about-ros__cta'], {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out'
        }, '-=0.4');

        // Animate mission title icon
        tl.from('.about-ros__mission-title-icon', {
            scale: 0,
            rotation: -360,
            duration: 0.5,
            ease: 'back.out(1.7)'
        }, '-=0.7');

        // Animate quote
        tl.from('.about-ros__quote-icon', {
            scale: 0,
            rotation: -180,
            opacity: 0,
            duration: 0.6,
            ease: 'back.out(1.7)'
        }, '-=0.2');

        tl.from('.about-ros__quote', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.4');

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="about-ros">
            <div className="about-ros__container">
                {/* Main Heading */}
                <h2 className="about-ros__heading">
                    <FaLeaf className="about-ros__heading-icon" />
                    ABOUT THE ROS
                </h2>

                {/* Two Column Layout */}
                <div className="about-ros__main" ref={contentRef}>
                    {/* Left Column - Image */}
                    <div className="about-ros__image-container">
                        <img
                            src={aboutRosImage}
                            alt="Woman carrying basket in field"
                            className="about-ros__image"
                            loading="lazy"
                        />
                    </div>

                    {/* Right Column - Content */}
                    <div className="about-ros__content">
                        <div className="about-ros__mission">
                            {/* Mission Tag */}
                            <span className="about-ros__mission-tag">
                                <FaSeedling className="about-ros__mission-tag-icon" />
                                For the better of us
                            </span>

                            {/* Mission Title */}
                            <h3 className="about-ros__mission-title">
                                <BiWorld className="about-ros__mission-title-icon" />
                                - Our Mission
                            </h3>

                            {/* Mission Text */}
                            <p className="about-ros__mission-text">
                                ROS stands for the celebration of the people's power to transform the food system, for the public.
                            </p>

                            {/* Call to Action */}
                            <a href="#mission" className="about-ros__cta">
                                Learn more about our mission
                                <FaArrowRight className="about-ros__cta-arrow" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Quote */}
                <div className="about-ros__quote-container">
                    <FaQuoteLeft className="about-ros__quote-icon" />
                    <p className="about-ros__quote">
                        We want to show the world, through our actions, how to transform a weak and broken system into a flourishing one.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutRos; 