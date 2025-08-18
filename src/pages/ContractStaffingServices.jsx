import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const servicesData = [
  {
    title: "Office Boy/Peon Services",
    description:
      "Reliable office boys for daily support tasks, including delivery of documents, managing office errands, and maintaining office cleanliness.",
    image: "https://images.unsplash.com/photo-1581092795366-29fce9c4480e?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Stationery Management",
    description:
      "Efficient handling of office stationery including inventory tracking, timely procurement, and distribution to staff members.",
    image: "https://images.unsplash.com/photo-1591696205602-d90e1332de6d?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Filing/Document Support",
    description:
      "Organized filing and document management services ensuring quick retrieval and proper record keeping of important documents.",
    image: "https://images.unsplash.com/photo-1581091012184-9b986f8f8d20?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Photocopying/Printing Assistance",
    description:
      "Support staff to handle photocopying, scanning, and printing tasks efficiently to maintain smooth office operations.",
    image: "https://images.unsplash.com/photo-1615394309968-8eac0b236d57?auto=format&fit=crop&w=800&q=60",
  },
];

const ContractStaffingServices = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative from-blue-900 via-blue-700 to-blue-600 text-white min-h-[60vh] flex items-center justify-center px-6 md:px-24 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url('https://indiaemployerforum.org/wp-content/uploads/2023/01/Contract-Staffing-India-Employer-Forum.png')`,
        }}
      >
        <div className="relative z-10 text-center">
          <div className="inline-block px-6 py-4 bg-blue-800/20 backdrop-blur-md rounded-lg shadow-md">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contract Staffing Services
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Professional support staff tailored to your business needs, reliable and efficient.
            </p>
          </div>
        </div>
      </div>

      {/* Service Section */}
      <div className="bg-white text-gray-800 py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12" data-aos="fade-up">
          Our Office Support Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContractStaffingServices;
