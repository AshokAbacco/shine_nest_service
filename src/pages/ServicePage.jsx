import React, { useState, useEffect } from "react";
import "../styles/services.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function ServicePage() {
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

 const services = [
  {
    title: "Cleaning Services",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/2/385902315/AG/ZU/NV/12247396/vacuum-cleaning-service-500x500.jpg",
    description: `We offer complete cleaning solutions tailored to corporate and commercial spaces on a contract basis. From daily office cleaning to deep sanitization, carpet and upholstery care, restroom hygiene, and post-construction cleanup, our trained staff ensures a spotless, safe, and welcoming workplace environment.`,
  },
  {
    title: "Reception & Front Desk Services",
    img: "https://media.istockphoto.com/id/1448294355/photo/hotel-concierge-working.jpg?s=612x612&w=0&k=20&c=2nqXkQ6BbxFmqx-llHKdv2Ev0Aas4E7105N5ujIg0ec=",
    description: `Our professional reception and front desk teams manage your office’s first impression with efficiency and courtesy. We handle visitor management, helpdesk operations, call/message coordination, and guest hospitality, ensuring smooth daily operations and a professional image.`,
  },
  {
    title: "Pantry Services",
    img: "https://4.imimg.com/data4/UJ/KT/MY-18243090/pantry-services-500x500.jpg",
    description: `We manage complete pantry operations, including vending machine refills, tea/coffee/snacks services, and overall pantry upkeep. Our staff ensures timely service and a clean, organized pantry area to keep your employees refreshed and motivated.`,
  },
  {
    title: "Mailroom & Courier Services",
    img: "https://5.imimg.com/data5/SELLER/Default/2023/9/344550461/SZ/QS/XT/25219892/express-document-courier-service-500x500.jpg",
    description: `With dedicated staff, we streamline your internal and external communication. From internal mail distribution and courier handling to package tracking and secure document dispatch, we ensure fast, reliable, and professional mailroom management.`,
  },
  {
    title: "Pest Control Services",
    img: "https://techbullion.com/wp-content/uploads/2024/07/pest.webp",
    description: `We provide routine and specialized pest management solutions, including rodent control, termite treatment, mosquito and fly prevention, and fumigation services. Our methods are safe, effective, and tailored for long-term results in corporate environments.`,
  },
  {
    title: "Landscaping & Gardening",
    img: "https://5.imimg.com/data5/SELLER/Default/2023/5/310550835/PC/IY/OS/152095378/garden-landscape-maintenance-service.jpeg",
    description: `Our landscaping team maintains vibrant and sustainable green spaces. We offer lawn maintenance, garden design, indoor plant care, and irrigation management to enhance your office’s environment and employee well-being.`,
  },
  {
    title: "Office Support Services",
    img: "https://5.imimg.com/data5/SELLER/Default/2022/7/CQ/SG/BU/126642220/office-cleaning-service.jpg",
    description: `We provide trained support staff for day-to-day office assistance, including office boy/peon services, stationery management, document handling, and photocopy/printing support. Our staff integrates seamlessly with your team to keep operations running smoothly.`,
  },
];




  return (
    <div>
      {/* HERO SECTION */}
      <Navbar />
      <div className="service-page text-white relative overflow-hidden min-h-screen flex items-center justify-between px-6 md:px-20 py-10">
        {/* Bubbles ==> Sparkle/Star Icon */}
        {[
          { top: "top-10", left: "left-10", size: "text-xl" },
          {
            bottom: "bottom-20",
            left: "left-40",
            size: "text-base",
            delay: "delay-200",
          },
          {
            top: "top-1/3",
            right: "right-20",
            size: "text-lg",
            delay: "delay-500",
          },
          {
            bottom: "bottom-10",
            right: "right-10",
            size: "text-2xl",
            delay: "delay-1000",
          },
          {
            top: "top-[18%]",
            left: "left-[30%]",
            size: "text-xl",
            delay: "delay-700",
          },
          {
            bottom: "bottom-24",
            left: "left-[70%]",
            size: "text-base",
            delay: "delay-300",
          },
          {
            top: "top-1/3",
            right: "right-[50%]",
            size: "text-lg",
            delay: "delay-500",
          },
          {
            bottom: "bottom-10",
            right: "right-[30%]",
            size: "text-2xl",
            delay: "delay-800",
          },
          {
            top: "top-[15%]",
            left: "left-[10%]",
            size: "text-sm",
            delay: "delay-300",
          },
          {
            top: "top-[30%]",
            left: "left-[20%]",
            size: "text-base",
            delay: "delay-500",
          },
          {
            top: "top-[45%]",
            left: "left-[30%]",
            size: "text-xl",
            delay: "delay-700",
          },
          {
            top: "top-[60%]",
            left: "left-[35%]",
            size: "text-xs",
            delay: "delay-[850ms]",
          },
          {
            top: "top-[75%]",
            left: "left-[25%]",
            size: "text-base",
            delay: "delay-[1000ms]",
          },
          {
            bottom: "bottom-[10%]",
            left: "left-[15%]",
            size: "text-sm",
            delay: "delay-[1200ms]",
          },
        ].map((sparkle, i) => (
          <span
            key={i}
            className={`absolute ${sparkle.top || ""} ${sparkle.bottom || ""} ${
              sparkle.left || ""
            } ${sparkle.right || ""} ${
              sparkle.size
            } text-white opacity-100 animate-ping ${sparkle.delay || ""}`}
          >
            ✦
          </span>
        ))}

        {/* home TEXT */}
        <div className="max-w-xl z-10 ml-5">
          <p className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-purple-300 to-pink-300 w-fit animate-glow">
            Facility Management
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-4">
            So Fresh & So Clean...
            <br />
            We Promise!
          </h1>
          <p className="text-sm sm:text-base text-gray-200 mb-6">
            We help you live in a space that feels clean, healthy, and cared
            for.
          </p>
        </div>

        {/* IMAGE */}
        <div className="hidden md:block z-10 px-5">
          <img
            src="https://www.movemystuff.com.au/wp-content/uploads/2024/01/cleaners.jpg"
            alt="Cleaning Man"
            className="rounded-full w-[500px] h-[500px] object-cover shadow-lg"
          />
        </div>
      </div>

      {/* SERVICES SECTION */}
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 px-6 md:px-20">
        {/* Modern Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-slate-700 font-medium max-w-4xl mx-auto leading-relaxed">
            Transform your workplace with our comprehensive facility management solutions ensuring cleanliness, comfort, efficiency, and seamless daily operations.
          </p>
        </div>

        {/* Services Grid - Alternating Layout */}
        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image Section */}
              <div className="lg:w-1/2 relative group flex justify-center">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-700 w-10/12">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-72 object-cover rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  </div>

                  {/* Floating gradient background matching smaller div width */}
                  <div className="absolute w-10/12 h-75 top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
              </div>


              {/* Content Section */}
              <div className="lg:w-1/2 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
                    {service.title}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                </div>
                
                <p className="text-lg text-slate-600 leading-relaxed">
                  {service.description}
                </p>
                 

                {/* Modern CTA Button */}
                {/* <div className="pt-4">
                  <Link
                    to={service.route}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="text-lg">Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div> */}

                {/* Decorative elements */}
                <div className="flex items-center gap-4 pt-4">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400"></div>
                  <div className="w-6 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400"></div>
                  <div className="w-3 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Background Elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/10 to-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-300/5 to-indigo-400/5 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* VALUE ADDED SERVICES */}
      <div className="bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-20 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-16 tracking-tight">
          Value Added Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/* Transition Card */}
          <div className="relative bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-700/10 to-blue-700/20 rounded-bl-full"></div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Transition
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              STS will seamlessly handle the site transition process with full
              support, at no extra cost to the client.
            </p>
          </div>

          {/* AMC Card */}
          <div className="relative bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-bl-full"></div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">AMC</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              STS will manage all AMC activities, including coordination, vendor
              management, and reporting, ensuring cost-efficiency and uptime.
            </p>
          </div>

          {/* Reports Card */}
          <div className="relative bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-bl-full"></div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Reports
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Customized reports such as Daily Logs, Monthly Performance
              Reviews, and Exception Reports will be delivered regularly for
              full operational transparency.
            </p>
          </div>

          {/* Site Improvements Card */}
          <div className="relative bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-bl-full"></div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Site Improvements
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Periodic inspections will be conducted, and actionable proposals
              will be submitted to enhance safety, cleanliness, and operational
              efficiency.
            </p>
          </div>

          {/* Procurement Card */}
          <div className="relative bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-bl-full"></div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Procurement
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              STS provides access to vetted suppliers for maintenance and
              consumables, passing on the cost benefits and ensuring timely
              availability.
            </p>
          </div>

          {/* Software Card */}
          <div className="relative bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-bl-full"></div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Software
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Our in-house dashboard enables real-time tracking of MMR, DG sets,
              and electrical systems for large properties.
              <br />
              <span className="italic text-sm text-gray-500">
                *Recommended for sites with 100+ manpower*
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ServicePage;