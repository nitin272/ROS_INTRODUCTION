import React, { useState, useEffect } from 'react';
import type { LayoutProps, FooterSection, SocialLink, ContactInfo } from '../../types/layout';
import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.scss';

const Layout: React.FC<LayoutProps> = ({
    children,
    className = '',
    showNavbar = true,
    showFooter = true
}) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle mobile menu toggle
    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isMobileMenuOpen && !(event.target as Element)?.closest('.navbar')) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            // Prevent body scroll when mobile menu is open
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    // Handle escape key to close mobile menu
    useEffect(() => {
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscapeKey);
        return () => document.removeEventListener('keydown', handleEscapeKey);
    }, [isMobileMenuOpen]);

    // Footer configuration for ROS platform
    const footerSections: FooterSection[] = [
        {
            id: 'platform',
            title: 'Platform',
            links: [
                { id: 'vendors', label: 'For Vendors', href: '/vendors' },
                { id: 'consumers', label: 'For Consumers', href: '/consumers' },
                { id: 'investors', label: 'For Investors', href: '/investors' },
                { id: 'marketplace', label: 'Marketplace', href: '/marketplace' }
            ]
        },
        {
            id: 'resources',
            title: 'Resources',
            links: [
                { id: 'blog', label: 'Blog', href: '/blog' },
                { id: 'help', label: 'Help Center', href: '/help' },
                { id: 'api', label: 'API Documentation', href: '/api-docs' },
                { id: 'guides', label: 'User Guides', href: '/guides' }
            ]
        },
        {
            id: 'company',
            title: 'Company',
            links: [
                { id: 'about', label: 'About Us', href: '/about' },
                { id: 'careers', label: 'Careers', href: '/careers' },
                { id: 'press', label: 'Press Kit', href: '/press' },
                { id: 'contact', label: 'Contact', href: '/contact' }
            ]
        },
        {
            id: 'legal',
            title: 'Legal',
            links: [
                { id: 'privacy', label: 'Privacy Policy', href: '/privacy' },
                { id: 'terms', label: 'Terms of Service', href: '/terms' },
                { id: 'cookies', label: 'Cookie Policy', href: '/cookies' },
                { id: 'compliance', label: 'Compliance', href: '/compliance' }
            ]
        }
    ];

    const socialLinks: SocialLink[] = [
        {
            id: 'twitter',
            platform: 'Twitter',
            href: 'https://twitter.com/ros_Sabjiwala',
            icon: '𝕏',
            label: 'Follow us on Twitter'
        },
        {
            id: 'linkedin',
            platform: 'LinkedIn',
            href: 'https://linkedin.com/company/ros-Sabjiwala',
            icon: '💼',
            label: 'Connect with us on LinkedIn'
        },
        {
            id: 'instagram',
            platform: 'Instagram',
            href: 'https://instagram.com/ros_Sabjiwala',
            icon: '📷',
            label: 'Follow us on Instagram'
        },
        {
            id: 'facebook',
            platform: 'Facebook',
            href: 'https://facebook.com/ros.Sabjiwala',
            icon: '📘',
            label: 'Like us on Facebook'
        }
    ];

    const contactInfo: ContactInfo = {
        email: 'hello@Sabjiwala.com',
        phone: '+1 (555) 123-4567',
        address: 'Republic of Sabjiwala, Digital Agriculture Hub'
    };

    const companyInfo = {
        name: 'ROS - Republic of Sabjiwala',
        description: 'Connecting local vegetable vendors, consumers, and investors for a sustainable agricultural future.',
        established: '2024'
    };

    return (
        <div className={`layout ${className}`} id="layout-root">


            {/* Navbar - Fixed at uppermost position */}
            {showNavbar && (
                <Navbar
                    isScrolled={isScrolled}
                    onMenuToggle={handleMobileMenuToggle}
                    isMenuOpen={isMobileMenuOpen}
                />
            )}

            {/* Main Content - Flexible to fill remaining space */}
            <main
                id="main-content"
                className={`layout__main ${showNavbar ? 'layout__main--with-navbar' : ''}`}
                role="main"
                tabIndex={-1}
            >
                {children}
            </main>

            {/* Footer - Automatically positioned at bottom due to flexbox layout */}
            {showFooter && (
                <Footer
                    sections={footerSections}
                    socialLinks={socialLinks}
                    contactInfo={contactInfo}
                    companyInfo={companyInfo}
                />
            )}

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="layout__overlay"
                    aria-hidden="true"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </div>
    );
};

export default Layout; 