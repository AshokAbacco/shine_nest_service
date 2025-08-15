import { useState } from "react";

export default function ContactForm() {
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare form data for submission
        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value);
        });

        // Optional: spam prevention and settings
        data.append("_captcha", "false");

        try {
            const response = await fetch("https://formsubmit.co/info@shinenestservices.in", {
                method: "POST",
                body: data
            });

            if (response.ok) {
                alert("Your message has been sent!");
                setFormData({
                    fullname: '',
                    email: '',
                    phone: '',
                    service: '',
                    message: ''
                });
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to send message. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit} method="POST">
            <div className="form-group">
                <label htmlFor="fullname">Full Name</label>
                <input
                    type="text"
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
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>-- Select a Service --</option>
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
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
        </form>
    );
}
