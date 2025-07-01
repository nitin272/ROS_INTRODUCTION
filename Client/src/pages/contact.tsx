import React, { useState } from 'react';
import { motion } from 'framer-motion';
import indiaMap from '../assets/logos/india_map.svg';
import '../styles/contactPage.scss';

const ContactPage: React.FC = () => {
  // Contact form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: 'IN',
    phone: '',
    message: '',
    services: [] as string[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox' && e.target instanceof HTMLInputElement) {
      const checked = e.target.checked;
      setFormData(prev => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter(s => s !== value),
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      country: 'IN',
      phone: '',
      message: '',
      services: [],
    });
    alert('Thank you for your message! We will get back to you soon.');
  };

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const headerVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6 }
  };

  const cardVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const contactCards = [
    // {
    //   title: 'Chat to sales',
    //   desc: 'Speak directly to our sales team for all business inquiries.',
    //   button: 'Message on WhatsApp',
    //   link: '#',
    // },
    {
      title: 'Chat to support',
      desc: 'Need help? Our support team is here for you.',
      button: 'Message on WhatsApp',
      link: '#',
    },
    // {
    //   title: 'Visit us',
    //   desc: 'Come say hello at our Jaipur office.',
    //   button: 'View on Google Maps',
    //   link: '#',
    // },
    // {
    //   title: 'Call us',
    //   desc: 'Mon-Fri 9am to 5pm',
    //   button: '+91 9988-000-000',
    //   link: 'tel:+919988000000',
    // },
  ];



  return (
    <motion.div
      className="page-container"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <motion.header className="header" variants={headerVariants}>
        <div className="breadcrumb">Contact us</div>
        <motion.h1 className="title">Get in touch with our team</motion.h1>
        <motion.p className="subtitle">We have the team and know-how to help you scale. Go faster.</motion.p>
      </motion.header>

      <div className="map-section">
        <div className="map-wrapper">
          <motion.img
            src={indiaMap}
            alt="India Map"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{
              width: '100%',
              height: 'auto',
              background: 'none',
              filter: 'invert(0.9) sepia(0.2) saturate(1.5) hue-rotate(190deg) brightness(0.9) contrast(1.1)',
              transition: 'all 0.3s ease'
            }}
          />
          <div className="marker" style={{ left: '25%', top: '38%' }} />
          <div className="tooltip" style={{ left: '8%', top: '18%' }}>
            <strong>Jaipur, Rajasthan</strong>
            <div style={{
              fontSize: '1.1rem',
              color: '#CBD5E1',
              marginTop: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span>📍</span> Our Headquarters
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="cards-section"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {contactCards.map((card) => (
          <motion.div
            key={card.title}
            className="card"
            variants={cardVariants}
            whileHover={{ y: -5 }}
          >
            <motion.h3 className="card-title">{card.title}</motion.h3>
            <motion.p className="card-desc">{card.desc}</motion.p>
            <a className="card-button" href={card.link} target="_blank" rel="noopener noreferrer">
              {card.button}
            </a>
          </motion.div>
        ))}
      </motion.div>



      <section className="contact-form-section">
        <div className="form-left">
          <h2 className="form-title">Contact our team</h2>
          <p className="form-subtitle">
            Got any questions about the product or scaling on our platform? We're here to help.<br />
            Chat to our friendly team 24/7 and get onboard in less than 5 minutes.
          </p>
          <form className="styled-form" onSubmit={handleFormSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="firstName">First name</label>
                <input
                  className="form-input"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleFormChange}
                  placeholder="First name"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="lastName">Last name</label>
                <input
                  className="form-input"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleFormChange}
                  placeholder="Last name"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input
                className="form-input"
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleFormChange}
                placeholder="you@company.com"
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group" style={{ maxWidth: 120 }}>
                <label className="form-label" htmlFor="country">Phone number</label>
                <select
                  className="form-select"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleFormChange}
                >
                  <option value="IN">IN</option>
                  <option value="US">US</option>
                  <option value="UK">UK</option>
                  <option value="AU">AU</option>
                  <option value="CA">CA</option>
                </select>
              </div>
              <div className="form-group" style={{ flex: 2 }}>
                <label className="form-label" style={{ visibility: 'hidden' }}>Phone</label>
                <input
                  className="form-input"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleFormChange}
                  placeholder={formData.country === 'US' ? '+1 (555) 000-0000' : formData.country === 'IN' ? '+91 (555) 000-0000' : formData.country === 'UK' ? '+44 (555) 000-0000' : formData.country === 'AU' ? '+61 (555) 000-0000' : '+1 (555) 000-0000'}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                className="form-textarea"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                placeholder="Leave us a message..."
                required
              />
            </div>
            {/* <div className="form-group">
              <label className="form-label">Services</label>
              <div className="services-group">
                {['Website design', 'UX design', 'User research', 'Content creation', 'Strategy & consulting', 'Other'].map(service => (
                  <label className="checkbox-label" key={service}>
                    <input
                      className="checkbox"
                      type="checkbox"
                      name="services"
                      value={service}
                      checked={formData.services.includes(service)}
                      onChange={handleFormChange}
                    />
                    {service}
                  </label>
                ))}
              </div>
            </div> */}
            <button className="submit-button" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send message'}
            </button>
          </form>
        </div>
        {/* <div className="form-right">
          <div className="info-block">
            <div className="info-title">Chat with us</div>
            <div className="info-desc">Speak to our friendly team via live chat.</div>
            <a className="info-link" href="#">💬 Start a live chat</a>
            <a className="info-link" href="mailto:support@company.com">✉️ Shoot us an email</a>
            <a className="info-link" href="#">🐦 Message us on X</a>
          </div>
          <div className="info-block">
            <div className="info-title">Call us</div>
            <div className="info-desc">Call our team Mon-Fri from 8am to 5pm.</div>
            <a className="info-link" href="tel:+1555000000">📞 +1 (555) 000-0000</a>
          </div>
          <div className="info-block">
            <div className="info-title">Visit us</div>
            <div className="info-desc">Chat to us in person at our Melbourne HQ.</div>
            <a className="info-link" href="#" target="_blank" rel="noopener noreferrer">📍 100 Smith Street, Collingwood VIC 3066</a>
          </div>
        </div> */}
      </section>

      {/* <section className="newsletter-section">
        <h3 className="newsletter-title">Join our weekly newsletter</h3>
        <p className="subtitle" style={{ color: '#94a3b8', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          Stay up-to-date with the latest news, announcements, and articles.
        </p>
        <form className="newsletter-form" onSubmit={e => { e.preventDefault(); alert('Subscribed!'); }}>
          <input
            className="newsletter-input"
            type="email"
            placeholder="Enter your email"
            value={newsletter}
            onChange={e => setNewsletter(e.target.value)}
            required
          />
          <button className="newsletter-button" type="submit">Subscribe</button>
        </form>
      </section> */}
    </motion.div>
  );
};

export default ContactPage;
