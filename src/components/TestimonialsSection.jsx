import { motion } from 'framer-motion';
import Accetion from '/images/Accetion.jpg';
import aerospace from '/images/aerospace.jpg';
import ashield from '/images/ashield.jpg';
import billsafe from '/images/billsafe.jpg';
import calibr from '/images/calibr.jpg';
import docttocare from '/images/docttocare.jpg';
import ecobillz from '/images/ecobillz.jpg';
import finclus from '/images/finclus.jpg';
import neuropixel from '/images/neuropixel.jpg';
import newtral from '/images/newtral.jpg';

const testimonials = [
    {
        name: 'Hemant Sabat',
        title: 'Deputy General Manager',
        text: `Accetion’s facility management services for our steel plant have been exceptional. Their focus on innovation, safety, and operational efficiency has greatly improved our workplace standards.`,
        logo: Accetion,
    },
    {
        name: 'Ankita Sharma',
        title: 'Operations Head',
        text: `Aerospace’s specialized cleaning solutions have kept our manufacturing spaces spotless and compliant with industry safety norms. Their precision and professionalism are unmatched.`,
        logo: aerospace,
    },
    {
        name: 'Ravi Kumar',
        title: 'Facility Manager',
        text: `Ashield’s proactive maintenance and protection strategies have ensured our facilities remain secure, clean, and operational at all times.`,
        logo: ashield,
    },
    {
        name: 'Sunita Desai',
        title: 'Office Manager',
        text: `Billsafe’s team is incredibly efficient and detail-oriented. Their commitment to keeping our workplace hygienic has made a noticeable difference.`,
        logo: billsafe,
    },
    {
        name: 'Rajesh Iyer',
        title: 'Plant Supervisor',
        text: `Calibr’s on-site support and precise service execution have streamlined our plant operations while maintaining exceptional cleanliness standards.`,
        logo: calibr,
    },
    {
        name: 'Priya Verma',
        title: 'Admin Head',
        text: `Docttocare’s approach to hygiene and safety reflects genuine care for our team’s well-being. Their professionalism is evident in every service.`,
        logo: docttocare,
    },
    {
        name: 'Amit Mehra',
        title: 'Operations Manager',
        text: `Ecobillz’s eco-friendly cleaning practices have helped us maintain a sustainable, safe, and spotless work environment.`,
        logo: ecobillz,
    },
    {
        name: 'Neha Kapoor',
        title: 'HR Manager',
        text: `Finclus understands our operational needs and consistently delivers cleaning solutions that boost both hygiene and employee satisfaction.`,
        logo: finclus,
    },
    {
        name: 'Vikram Patel',
        title: 'Logistics Head',
        text: `Neuropixel’s meticulous attention to detail ensures our logistics hubs remain clean, organized, and ready for operations at all times.`,
        logo: neuropixel,
    },
    {
        name: 'Arun Gupta',
        title: 'Chief Engineer',
        text: `Newtral’s reliable services and consistent quality have made them a trusted partner in maintaining our infrastructure to the highest standards.`,
        logo: newtral,
    },
];


const TestimonialsSection = () => {
    return (
        <section className="px-8 py-16 bg-white text-[#030637] overflow-hidden">
            <h2 className="text-3xl font-bold text-center text-[#4300FF] mb-12">
                Hear it from our Clients
            </h2>

            <motion.div
                className="flex space-x-6"
                animate={{ x: ['0%', '-100%'] }}
                transition={{
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 40,
                    ease: 'linear',
                }}
            >
                {[...testimonials, ...testimonials].map((testimonial, idx) => (
                    <motion.div
                        key={idx}
                        className="min-w-[300px] max-w-[300px] p-6 bg-white rounded-lg shadow-lg mx-2 flex flex-col justify-between"
                    >
                        <div>
                            <div className="text-4xl text-[#DAA520] mb-2">“</div>
                            <h3 className="text-lg font-bold text-[#030637]">{testimonial.name}</h3>
                            <p className="text-sm text-gray-500 mb-4">{testimonial.title}</p>
                            <p className="text-sm text-[#030637] mb-4 leading-relaxed">
                                {testimonial.text}
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <img src={testimonial.logo} alt="Company Logo" className="h-8 object-contain mt-4" />
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default TestimonialsSection;
