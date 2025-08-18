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
    description: "Professional-grade cleaning services including vacuuming, kitchen cleaning, bathroom sanitization, and deep cleaning to maintain a hygienic and fresh environment for your workplace.",
    details: "We offer daily, weekly, or monthly cleaning schedules based on your needs. Our team uses eco-friendly cleaning products and provides carpet, upholstery, and window cleaning. High-touch surfaces are disinfected to ensure a safe and hygienic environment.",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/2/385902315/AG/ZU/NV/12247396/vacuum-cleaning-service-500x500.jpg",
    route: "/cleaning-services",
  },
  {
    title: "Reception & Front Desk Services",
    description: "Professional reception services with trained staff to handle visitor management, call handling, appointment scheduling, and creating a welcoming first impression for your business.",
    details: "Our receptionists are friendly and professional, managing visitor check-ins and security coordination. They handle calls, emails, and appointments efficiently, ensuring your front desk creates a positive first impression for your clients and visitors.",
    img: "https://media.istockphoto.com/id/1222545476/photo/handsome-smiling-cleaner-looking-at-camera-while-standing-near-computer-monitors.jpg?s=612x612&w=0&k=20&c=qBZsQ5wdd8s9IUGV9D8ARTGzOWvv0c05cMyCcwk4RxY=",
    route: "/reception-services",
  },
  {
    title: "Pantry Services",
    description: "Complete pantry management including tea/coffee service, meal preparation, kitchen maintenance, inventory management, and ensuring a well-stocked and hygienic pantry area.",
    details: "Our pantry services include tea/coffee service for staff and visitors, meal preparation, and snack management. We handle inventory tracking, restocking, and ensure kitchen hygiene and proper utensil management for a seamless pantry experience.",
    img: "https://mccoymart.com/post/wp-content/uploads/2019/05/Kitchen-cupboard-cleaner.jpg",
    route: "/pantry-services",
  },
  {
    title: "Mailroom & Courier Services",
    description: "Efficient mailroom operations including sorting, distribution, courier coordination, package handling, and document management to ensure smooth communication flow.",
    details: "We manage incoming and outgoing mail, coordinate couriers with tracking, handle document management and scanning, and securely handle sensitive packages to ensure smooth office communication.",
    img: "https://media.istockphoto.com/id/1394199344/photo/document-management-system-or-dms-automation-software-to-archiving-and-efficiently-manage-and.jpg?s=612x612&w=0&k=20&c=YaQU7BoPNvaxANtTdRMGhpaePXt7q5UlOYRjKiGqR8I=",
    route: "/mailroom-services",
  },
  {
    title: "Pest Control Services",
    description: "Comprehensive pest management using eco-friendly solutions to eliminate and prevent infestations, ensuring a safe and healthy environment for your workplace and employees.",
    details: "We conduct routine pest inspections and treatments using eco-friendly and safe chemicals. Our services cover rodent, insect, and termite control, along with preventive measures to avoid future infestations, keeping your workplace safe and healthy.",
    img: "https://cpimg.tistatic.com/05837563/b/4/Bathroom-Cleaning-Services.jpg",
    route: "/pest-control",
  },
  {
    title: "Landscaping & Gardening",
    description: "Professional landscaping and gardening services including plant maintenance, lawn care, garden design, irrigation systems, and creating beautiful outdoor spaces.",
    details: "Our landscaping and gardening services include lawn mowing, plant care, garden design, irrigation setup, and seasonal maintenance. We create and maintain aesthetically pleasing outdoor spaces for your workplace or residential areas.",
    img: "https://skbuildingservices.com/wp-content/uploads/2023/02/what-is-the-difference-between-window-washing-and-window-cleaning_-scaled-1.jpeg",
    route: "/landscaping-services",
  },
  {
    title: "Office Support Services",
    description: "Comprehensive office support including administrative assistance, document management, filing, data entry, and general office operations to boost productivity.",
    details: "Our office support services include office boy/peon tasks, stationery management, filing and document support, photocopying and printing assistance, as well as data entry and record management. This ensures smooth daily operations and increased workplace productivity.",
    img: "https://t3.ftcdn.net/jpg/02/68/41/46/360_F_268414618_zpZvftaDcCLJj6tgGMhNNSh9gRUf6IOv.jpg",
    route: "/contract",
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
              <div className="lg:w-1/2 relative group">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-700">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                {/* Floating gradient background */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
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
                <p className="text-lg text-slate-600 leading-relaxed">
                  {service.details}.
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