// src/pages/WhyChooseUsPage.jsx
import { motion } from "framer-motion";
import {
    FaUsers,
    FaTasks,
    FaFileContract,
    FaUserGraduate,
    FaToolbox,
    FaLaptopCode,
    FaShieldAlt,
    FaHeadset,
    FaHandshake,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const whyChooseItems = [
    {
        icon: <FaTasks size={40} color="#4400ff" />,
        title: "Proven Track Record",
        desc: "100+ projects successfully managed and 1500+ trained staff ensure consistent quality for businesses of all sizes.",
    },
    {
        icon: <FaFileContract size={40} color="#4400ff" />,
        title: "Contract-Based Services",
        desc: "Long-term contracts ensure accountability, service continuity, and predictable costs with zero outsourcing hassle.",
    },
    {
        icon: <FaUserGraduate size={40} color="#4400ff" />,
        title: "Highly Trained Workforce",
        desc: "Employees undergo training in safety, hygiene, communication, and technical skills for excellence with empathy.",
    },
    {
        icon: <FaToolbox size={40} color="#4400ff" />,
        title: "Comprehensive Service Portfolio",
        desc: "From cleaning and pest control to reception, pantry, and office support—your one-stop facility management partner.",
    },
    {
        icon: <FaLaptopCode size={40} color="#4400ff" />,
        title: "Technology-Enabled Operations",
        desc: "Modern tools for scheduling, reporting, and quality checks—ensuring transparency and real-time updates.",
    },
    {
        icon: <FaShieldAlt size={40} color="#4400ff" />,
        title: "Focus on Health & Safety",
        desc: "Eco-friendly cleaning materials, strict hygiene protocols, and compliance with safety standards keep workplaces safe.",
    },
    {
        icon: <FaUsers size={40} color="#4400ff" />,
        title: "Cost-Effective & Scalable",
        desc: "Affordable services for small offices to large enterprises—flexible, scalable, and designed to grow with your needs.",
    },
    {
        icon: <FaHeadset size={40} color="#4400ff" />,
        title: "Strong Customer Support",
        desc: "Dedicated client servicing team available round-the-clock to address concerns, customize solutions, and ensure satisfaction.",
    },
];

const WhyChooseUsPage = () => {
    return (
        <div className="bg-[#ffffff] min-h-screen text-white">
            <Navbar />
            {/* Hero Section */}
            <section className="text-center px-[5]    py-20 bg-gradient-to-r from-[#4300FF] to-[#030637] h-[40vh]">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Why Choose ShineNest Services?
                </motion.h1>
                <motion.p
                    className="max-w-2xl mx-auto text-gray-200 text-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Choosing the right facility management partner is critical to
                    maintaining a professional, safe, and efficient workplace. Here’s why
                    clients trust us.
                </motion.p>
            </section>

            {/* Why Choose Us Cards */}
            <section className="px-6 md:px-12 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {whyChooseItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="p-6 bg-white text-black rounded-lg shadow-lg hover:shadow-xl transition"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex justify-center mb-4">{item.icon}</div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-700 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Extra Highlights */}
            <section className="px-6 md:px-12 py-16 bg-[#06067e] text-center">
                <motion.h2
                    className="text-3xl font-bold mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    Our Commitment
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-200">
                    <motion.div
                        className="p-6 rounded-lg bg-[#ffffff] shadow-lg text-black"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <FaHandshake size={40} className="mx-auto mb-3 text-[#4300FF] " />
                        <h3 className="font-semibold text-lg mb-2">Trusted Partnerships</h3>
                        <p>Long-term client relationships built on trust, transparency, and excellence.</p>
                    </motion.div>

                    <motion.div
                        className="p-6 rounded-lg bg-[#ffffff] shadow-lg text-black"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <FaUsers size={40} className="mx-auto mb-3 text-[#4300FF]" />
                        <h3 className="font-semibold text-lg mb-2">Skilled Workforce</h3>
                        <p>Continuous training ensures professionalism, empathy, and top performance.</p>
                    </motion.div>

                    <motion.div
                        className="p-6 rounded-lg bg-[#ffffff] shadow-lg text-black"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <FaShieldAlt size={40} className="mx-auto mb-3 text-[#4300FF]" />
                        <h3 className="font-semibold text-lg mb-2">Safe & Compliant</h3>
                        <p>Health & safety standards strictly followed with eco-friendly practices.</p>
                    </motion.div>
                </div>
            </section>

            {/* Call To Action */}
            <section className="text-center py-16">
                <motion.h2
                    className="text-3xl font-bold mb-4 text-black"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    Ready to Experience Hassle-Free Facility Management?
                </motion.h2>
                <motion.a
                    href="/contact"
                    className="inline-block px-8 py-3 bg-[#4300FF] text-white rounded-lg shadow-lg hover:bg-[#2e00aa] transition"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Contact Us Today
                </motion.a>
            </section>
            <Footer />
        </div>
    );
};

export default WhyChooseUsPage;
