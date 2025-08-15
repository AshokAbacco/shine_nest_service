import React, { useState } from 'react';
import '../styles/contact.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaMapMarkedAlt } from "react-icons/fa";

const ContactForm = ({ isSidebar }) => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert('Your message has been sent!');
        setFormData({
            fullname: '',
            email: '',
            phone: '',
            service: '',
            message: ''
        });
    };

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
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="fullname">Full Name</label>
                                <input
                                    type="text"
                                    id="fullname"
                                    name="fullname"
                                    value={formData.fullname}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="service">Service Interested In</label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    required
                                ><option value="" disabled>-- Select a Service --</option>
                                    <option value="cleaning">Cleaning Services</option>
                                    <option value="reception">Reception & Front Desk</option>
                                    <option value="pantry">Pantry Services</option>
                                    <option value="pest">Pest Control</option>
                                    <option value="landscaping">Landscaping & Gardening</option>
                                    <option value="support">Office Support</option>
                                    <option value="multiple">Multiple Services</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn">Send Message</button>
                        </form>

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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.91409178981107!2d77.56141930818556!3d13.059495461268048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae23c6b3c49891%3A0xeb24c1b7f096a66f!2sShine%20Nest%20Services!5e0!3m2!1sen!2sin!4v1755260734863!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" width="100%"
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
                        href="https://maps.app.goo.gl/Zx2VRJ8uWDn4DHja7"
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
