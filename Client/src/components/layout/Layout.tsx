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
                { id: 'consumers', label: 'For Consumers', href: '/consumers' }
            ]
        },
        {
            id: 'company',
            title: 'Company',
            links: [
                { id: 'about', label: 'About Us', href: '/about' },
                { id: 'contact', label: 'Contact', href: '/contact' }
            ]
        }
    ];

    const socialLinks: SocialLink[] = [
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
        }
    ];

    const contactInfo: ContactInfo = {
        email: 'info@republicofsabjiwala.com',
        phone: '7339792512'
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