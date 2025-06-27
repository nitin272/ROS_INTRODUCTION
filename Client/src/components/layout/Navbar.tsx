import React, { useState, useEffect } from 'react';
import type { NavbarProps, NavItem } from '../../types/layout';
import './Navbar.scss';
import logo from '../../assets/logos/transprentblackLogo.png';
import { Link } from 'react-router-dom';

const Navbar: React.FC<NavbarProps> = ({
    className = '',
    isScrolled: propIsScrolled,
    onMenuToggle,
    isMenuOpen = false
}) => {
    const [isScrolled, setIsScrolled] = useState(propIsScrolled || false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(isMenuOpen);

    // Navigation items for ROS platform
    const navItems: NavItem[] = [
        { id: 'home', label: 'Home', href: '/' },
        { id: 'about', label: 'About', href: '/about' },
        { id: 'blog', label: 'Blog', href: '/blog' },
        { id: 'contact', label: 'Contact', href: '/contact' },
    ];

    // Handle scroll effect
    useEffect(() => {
        if (propIsScrolled !== undefined) return;

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [propIsScrolled]);

    // Handle mobile menu toggle
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        onMenuToggle?.();
    };

    // Handle navigation click
    const handleNavClick = (href: string) => {
        setIsMobileMenuOpen(false);
        // For future router integration
        window.location.href = href;
    };

    // Handle keyboard navigation
    const handleKeyDown = (event: React.KeyboardEvent, href: string) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleNavClick(href);
        }
    };

    return (
        <nav
            className={`navbar ${isScrolled ? 'navbar--scrolled' : ''} ${className}`}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="navbar__container">
                {/* Logo Section */}
                <div className="navbar__brand">
                    <Link
                        to="/"
                        className="navbar__logo"
                        aria-label="ROS - Republic of Subjiwala Home"
                    >
                        <div className="navbar__logo-icon">
                            <img src={logo} alt="ROS Logo" className="navbar__logo-img" />
                        </div>
                        <div className="navbar__logo-text">
                            <span className="navbar__logo-main">ROS</span>
                            <span className="navbar__logo-sub">Republic of Subjiwala</span>
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="navbar__nav" role="menubar">
                    {navItems.map((item) => (
                        <Link
                            key={item.id}
                            to={item.href}
                            className="navbar__nav-item"
                            role="menuitem"
                            tabIndex={0}
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick(item.href);
                            }}
                            onKeyDown={(e) => handleKeyDown(e, item.href)}
                            aria-label={`Navigate to ${item.label}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                < button
                    className={`navbar__mobile-toggle ${isMobileMenuOpen ? 'navbar__mobile-toggle--active' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-menu"
                >
                    <span className="navbar__hamburger-line"></span>
                    <span className="navbar__hamburger-line"></span>
                    <span className="navbar__hamburger-line"></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className={`navbar__mobile-menu ${isMobileMenuOpen ? 'navbar__mobile-menu--open' : ''}`}
                role="menu"
                aria-hidden={!isMobileMenuOpen}
            >
                <div className="navbar__mobile-nav">
                    {navItems.map((item) => (
                        <Link
                            key={item.id}
                            to={item.href}
                            className="navbar__mobile-nav-item"
                            role="menuitem"
                            tabIndex={isMobileMenuOpen ? 0 : -1}
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick(item.href);
                            }}
                            onKeyDown={(e) => handleKeyDown(e, item.href)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <button
                        className="navbar__mobile-cta-button"
                        onClick={() => handleNavClick('/vendors')}
                        tabIndex={isMobileMenuOpen ? 0 : -1}
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </nav >
    );
};

export default Navbar; 