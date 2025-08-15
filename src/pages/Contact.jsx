import React, { useState } from 'react';
import '../styles/contact.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaMapMarkedAlt } from "react-icons/fa";
import ContactForms from '../components/ContactForm';
const ContactForm = ({ isSidebar }) => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });


    return (
        <>
            <Navbar />
            <div className={`contact-container ${isSidebar ? 'sidebar-form' : ''}`}>
                <div className="contact-wrapper">
                    {/* Left Info Section */}
                    <div className="contact-info">
                        <h2>Get in Touch</h2>
                        <p>We’re here to help and answer any questions you might have. Let’s build something great together.</p>

                        <div className="contact-detail">
                            <p><strong>Phone:</strong> +91 9739547999</p>
                            <p><strong>Email:</strong> info@shinenestservices.in</p>
                            <p><strong>Address:</strong> Ground floor, Building No 20, Krishna Temple Road, Near Ramya Provision Store, Dodda Bommasandra, Bengaluru, 560097</p>
                        </div>

                        <div className="social-icons">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaLinkedinIn /></a>
                        </div>
                    </div>

                    {/* Right Contact Form */}
                    <div className="contact-card">
                        <h1>Contact Us</h1>
                        <ContactForms />

                        {!isSidebar && (
                            <a href="/" className="back-link">← Back to Home</a>
                        )}
                    </div>
                </div>
            </div>

            <section className="map-section">
                <h2 className="map-heading">Find Us Here</h2>

                <div className="map-container">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3886.607930613837!2d77.561174!3d13.060609999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAzJzM4LjIiTiA3N8KwMzMnNDAuMiJF!5e0!3m2!1sen!2sin!4v1755264333323!5m2!1sen!2sin"
                        referrerpolicy="no-referrer-when-downgrade"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                {/* Interactive Map Section (final design with centered icon) */}
                <div className="interactive-map-final">
                    <div className="map-icon-wrapper">
                        <FaMapMarkedAlt className="map-icon" />
                    </div>

                    <h3 className="map-title">Interactive Map</h3>
                    <p className="map-description">
                        Explore our location and get directions easily through Google Maps.
                    </p>
                    <a
                        href="https://maps.app.goo.gl/mHyX8JCPskAHwiTs6?g_st=aw"
                        className="map-cta-button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View on Google Maps
                    </a>
                </div>






            </section>
            <Footer />
        </>
    );
};

export default ContactForm;
