import React from "react";
import CountUp from "react-countup";
import { Users, Building2, Briefcase, Layers } from "lucide-react";

const stats = [
    { id: 1, icon: Briefcase, value: 1500, suffix: "+", label: "QUALIFIED STAFF" },
    { id: 2, icon: Layers, value: 7, suffix: "+", label: "SERVICES" },
    { id: 3, icon: Users, value: 100, suffix: "+", label: "SATISFIED CLIENTS" },
    { id: 4, icon: Building2, value: 62, suffix: "+ Lakh", label: "Sq Feet OF AREA UNDER SERVICE" },
];

const StatsSection = () => {
    return (
        <div className="bg-[#4400ff] text-white py-6 px-4 md:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat) => (
                    <div key={stat.id} className="flex gap-4 justify-center items-center space-y-2">
                        <stat.icon size={40} className="mb-0.5" />
                        <div className="text">
                            <h2 className="text-2xl font-bold">
                                <CountUp end={stat.value} duration={7} /> {stat.suffix}
                            </h2>
                            <p className="text-sm uppercase font-medium">{stat.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatsSection;
