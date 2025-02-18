import React from "react";
import { FaPaintBrush, FaCouch, FaTools, FaLightbulb } from "react-icons/fa";

const features = [
  { icon: <FaPaintBrush size={40} className="text-orange-500" />, title: "Custom Designs", description: "Tailored interior designs to match your style and needs." },
  { icon: <FaCouch size={40} className="text-orange-500" />, title: "Premium Furniture", description: "High-quality furniture that enhances your space." },
  { icon: <FaTools size={40} className="text-orange-500" />, title: "Expert Craftsmanship", description: "Skilled professionals ensuring perfection in every detail." },
  { icon: <FaLightbulb size={40} className="text-orange-500" />, title: "Innovative Solutions", description: "Creative and functional interior design ideas." }
];

const Features = () => {
  return (
    <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose <span className="text-orange-500">Space<span className="text-black">Craft</span>Interio</span>?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-16">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center text-gray-800">
            {feature.icon}
            <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
