import React from 'react';
import type { FooterProps, FooterSection, SocialLink } from '../../types/layout';
import transprentBlackLogo from '../../assets/logos/transprentblackLogo.png';
import './Footer.scss';

const Footer: React.FC<FooterProps> = ({
    className = '',
    sections: propSections,
    socialLinks: propSocialLinks,
    contactInfo: propContactInfo,
    companyInfo: propCompanyInfo
}) => {
    // Default footer sections for ROS platform
    const defaultSections: FooterSection[] = [
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

    // Default social links with professional icons
    const defaultSocialLinks: SocialLink[] = [
        {
            id: 'linkedin',
            platform: 'LinkedIn',
            href: 'https://linkedin.com/company/ros-Sabjiwala',
            icon: '⚡',
            label: 'Connect with us on LinkedIn'
        },
        {
            id: 'instagram',
            platform: 'Instagram',
            href: 'https://instagram.com/ros_Sabjiwala',
            icon: '⬢',
            label: 'Follow us on Instagram'
        }
    ];

    // Default contact info
    const defaultContactInfo = {
        email: 'info@republicofsabjiwala.com',
        phone: '7339792512',
    };

    // Default company info
    const defaultCompanyInfo = {
        name: 'ROS - Republic of Sabjiwala',
        description: 'Connecting local vegetable vendors, consumers, and investors for a sustainable agricultural future.',
        established: '2024'
    };

    const sections = propSections || defaultSections;
    const socialLinks = propSocialLinks || defaultSocialLinks;
    const contactInfo = propContactInfo || defaultContactInfo;
    const companyInfo = propCompanyInfo || defaultCompanyInfo;

    const currentYear = new Date().getFullYear();

    // Handle link clicks
    const handleLinkClick = (href: string, isExternal?: boolean) => {
        if (isExternal) {
            window.open(href, '_blank', 'noopener,noreferrer');
        } else {
            window.location.href = href;
        }
    };

    // Handle keyboard navigation
    const handleKeyDown = (event: React.KeyboardEvent, href: string, isExternal?: boolean) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleLinkClick(href, isExternal);
        }
    };

    return (
        <footer className={`footer ${className}`} role="contentinfo">
            {/* Main Footer Content */}
            <div className="footer__main">
                <div className="footer__container">
                    {/* Brand Section */}
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <div className="footer__logo-icon">
                                <img src={transprentBlackLogo} alt="ROS Logo" className="footer__logo-image" />
                            </div>
                            <div className="footer__logo-text">
                                <h3 className="footer__logo-title">ROS</h3>
                                <p className="footer__logo-subtitle">Republic of Sabjiwala</p>
                            </div>
                        </div>
                        <p className="footer__description">
                            {companyInfo.description}
                        </p>
                    </div>

                    {/* Navigation Sections */}
                    <div className="footer__sections">
                        {sections.map((section) => (
                            <div key={section.id} className="footer__section">
                                <h4 className="footer__section-title">{section.title}</h4>
                                <ul className="footer__section-links" role="list">
                                    {section.links.map((link) => (
                                        <li key={link.id} className="footer__section-item" role="listitem">
                                            <a
                                                href={link.href}
                                                className="footer__section-link"
                                                tabIndex={0}
                                                aria-label={`Navigate to ${link.label}`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleLinkClick(link.href, link.isExternal);
                                                }}
                                                onKeyDown={(e) => handleKeyDown(e, link.href, link.isExternal)}
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        
                        {/* Follow Us Section */}
                        <div className="footer__section footer__section--social">
                            <h4 className="footer__section-title">Follow Us</h4>
                            <div className="footer__social-links">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.id}
                                        href={social.href}
                                        className="footer__social-link"
                                        aria-label={social.label}
                                        tabIndex={0}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleLinkClick(social.href, true);
                                        }}
                                        onKeyDown={(e) => handleKeyDown(e, social.href, true)}
                                    >
                                        <span className="footer__social-icon" aria-hidden="true">{social.icon}</span>
                                        <span className="footer__social-name">{social.platform}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="footer__contact">
                        <h4 className="footer__contact-title">Get in Touch</h4>
                        <div className="footer__contact-info">
                            <a
                                href={`mailto:${contactInfo.email}`}
                                className="footer__contact-item footer__contact-email"
                                aria-label={`Send email to ${contactInfo.email}`}
                            >
                                <span className="footer__contact-icon" aria-hidden="true">✉</span>
                                <span className="footer__contact-text">{contactInfo.email}</span>
                            </a>
                            <a
                                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                                className="footer__contact-item footer__contact-phone"
                                aria-label={`Call ${contactInfo.phone}`}
                            >
                                <span className="footer__contact-icon" aria-hidden="true">☎</span>
                                <span className="footer__contact-text">{contactInfo.phone}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer__bottom">
                <div className="footer__container">
                    <div className="footer__bottom-content">
                        <div className="footer__copyright">
                            <p>
                                © {currentYear} {companyInfo.name}. All rights reserved.
                            </p>
                            <p className="footer__established">
                                Established {companyInfo.established}
                            </p>
                        </div>
                        <div className="footer__bottom-links">
                            <a
                                href="/privacy"
                                className="footer__bottom-link"
                                aria-label="View Privacy Policy"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleLinkClick('/privacy');
                                }}
                            >
                                Privacy
                            </a>
                            <a
                                href="/terms"
                                className="footer__bottom-link"
                                aria-label="View Terms of Service"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleLinkClick('/terms');
                                }}
                            >
                                Terms
                            </a>
                            <a
                                href="/cookies"
                                className="footer__bottom-link"
                                aria-label="View Cookie Policy"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleLinkClick('/cookies');
                                }}
                            >
                                Cookies
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 