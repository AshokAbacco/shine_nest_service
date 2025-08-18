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
} from "react-icons/fa";

const whyChooseItems = [
    {
        icon: <FaTasks size={40} color="#4400ff" />,
        title: "Proven Track Record",
        desc: "With 100+ projects successfully managed and 1500+ trained staff, we deliver consistent quality across businesses of all sizes.",
    },
    {
        icon: <FaFileContract size={40} color="#4400ff" />,
        title: "Contract-Based Services",
        desc: "Long-term contracts ensure continuity, accountability, and predictable costs—no daily outsourcing hassles.",
    },
    {
        icon: <FaUserGraduate size={40} color="#4400ff" />,
        title: "Highly Trained Workforce",
        desc: "All employees undergo rigorous training in safety, hygiene, communication, and technical skills to deliver excellence.",
    },
    {
        icon: <FaToolbox size={40} color="#4400ff" />,
        title: "Comprehensive Service Portfolio",
        desc: "From cleaning and pest control to reception, pantry, and office support—we’re your one-stop facility management partner.",
    },
    {
        icon: <FaLaptopCode size={40} color="#4400ff" />,
        title: "Technology-Enabled Operations",
        desc: "We use modern tools for scheduling, reporting, and quality checks—ensuring transparency and real-time updates.",
    },
    {
        icon: <FaShieldAlt size={40} color="#4400ff" />,
        title: "Focus on Health & Safety",
        desc: "Strict hygiene protocols, eco-friendly cleaning materials, and compliance with statutory standards keep your workplace safe.",
    },
    {
        icon: <FaUsers size={40} color="#4400ff" />,
        title: "Cost-Effective & Scalable Solutions",
        desc: "Affordable yet scalable services tailored for small offices to large enterprises, without overspending.",
    },
    {
        icon: <FaHeadset size={40} color="#4400ff" />,
        title: "Strong Customer Support",
        desc: "Dedicated client servicing team to address concerns, customize services, and ensure complete satisfaction.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="text-center">
            <motion.h2
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Why Choose Us
            </motion.h2>
            <motion.p
                className="text-gray-300 max-w-2xl mx-auto mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                Choosing the right facility management partner is critical to
                maintaining a professional, safe, and efficient workplace. Here’s why
                clients trust us:
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {whyChooseItems.map((item, idx) => (
                    <motion.div
                        key={idx}
                        className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex justify-center mb-4">{item.icon}</div>
                        <h3 className="text-lg font-semibold text-black mb-2">
                            {item.title}
                        </h3>
                        <p className="text-gray-700 text-sm">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
