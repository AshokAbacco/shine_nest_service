import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
            >        {/* Decorative Circles */}
        {/* <div className="absolute top-16 right-28 w-40 h-40 bg-gradient-to-br from-red-500 to-pink-400 rounded-full shadow-xl opacity-90 blur-2xl z-0"></div>
        <div className="absolute top-32 right-12 w-20 h-20 bg-gradient-to-br from-pink-300 to-red-300 rounded-full blur-xl opacity-70 z-0"></div> */}

        {/* Heading Content */}
        <div className="relative z-10 text-center">
          <div className="inline-block px-6 py-4 bg-blue-800/20 backdrop-blur-md rounded-lg shadow-md">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 ">
              Contract Staffing Services
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Professional support staff tailored to your business needs reliable and efficient.
            </p>
          </div>
        </div>


      </div>

        {/* Service Details - Direct Grid */}
      <div className="bg-white text-gray-800 py-16 px-6 md:px-20">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          data-aos="fade-up"
        >
          {/* Image */}
          <div>
            <img
              src="https://www.iqor.com/wp-content/uploads/2021/06/shutterstock_1771621901.jpg"
              alt="Office Support Services"
              className="w-full rounded-xl shadow-lg"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Office Support Services
            </h2>
            <p className="text-gray-600 mb-4">
              Efficient, reliable office assistance for smooth day-to-day operations, including document handling, printing, and essential support staff.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Office boy/peon services</li>
              <li>Stationery management</li>
              <li>Filing/document support</li>
              <li>Photocopying/printing assistance</li>
            </ul>
          </div>
        </div>
      </div>

     
      <Footer />
    </div>
  );
};

export default ContractStaffingServices;

 
// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const serviceCards = [
//   {
//     title: "Office Boy / Peon Services",
//     description:
//       "Trained support staff to handle errands, serve refreshments, distribute files, manage cleanliness, and provide basic admin support to keep your office running smoothly.",
//     image:
//       "https://www.staffingindustry.com/var/site/storage/images/media/images/articles/office-boy/9311514-1-eng-GB/Office-boy_article_image.jpg",
//   },
//   {
//     title: "Stationery Management",
//     description:
//       "End-to-end tracking, stocking, and distribution of office stationery, ensuring your team always has what they need without interruption or shortage.",
//     image:
//       "https://img.freepik.com/free-photo/office-supplies-blue-background-top-view-copy-space_169016-18926.jpg",
//   },
//   {
//     title: "Filing / Document Support",
//     description:
//       "Systematic filing, archiving, and retrieval services to maintain organized, secure, and compliant document workflows for both physical and digital formats.",
//     image:
//       "https://www.lucidchart.com/blog/wp-content/uploads/2020/04/document-management-system-hero.jpg",
//   },
//   {
//     title: "Photocopying / Printing Assistance",
//     description:
//       "Reliable on-demand support for printing, scanning, and photocopying with proper handling of confidential materials and timely document delivery.",
//     image:
//       "https://5.imimg.com/data5/SELLER/Default/2023/10/349867251/YK/CE/VW/173887334/printing-service-500x500.jpg",
//   },
// ];


// const OfficeSupportServices = () => {
//   useEffect(() => {
//     AOS.init({ duration: 800 });
//   }, []);

//   return (
//     <div>
//       <Navbar />

//       {/* Hero */}
//       <div
//         className="bg-cover bg-center min-h-[60vh] flex items-center justify-center text-white px-4"
//         style={{
//           backgroundImage:
//             "url('https://www.creativeoffice.com/wp-content/uploads/2020/06/office-support-staff.jpg')",
//         }}
//       >
//         <div className="bg-black/40 backdrop-blur px-6 py-4 rounded-lg text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Office Support Services
//           </h1>
//           <p className="text-lg md:text-xl text-white/80">
//             Essential office roles that ensure smooth day-to-day operations.
//           </p>
//         </div>
//       </div>

//       {/* Cards */}
//       <div className="bg-white py-16 px-6 md:px-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
//           {serviceCards.map((service, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition duration-300"
//               data-aos="fade-up"
//             >
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="w-full h-56 object-cover"
//               />
//               <div className="p-6">
//                 <h2 className="text-xl font-bold mb-2 text-blue-900">
//                   {service.title}
//                 </h2>
//                 <p className="text-gray-700 text-sm">{service.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default OfficeSupportServices;
