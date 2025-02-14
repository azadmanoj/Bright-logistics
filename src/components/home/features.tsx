import { Shield, Map, DollarSign, Navigation } from "lucide-react";

const features = [
  { 
    icon: <Map className="w-8 h-8" />, 
    title: "Pan India Coverage", 
    description: "Serving 700+ destinations across India with reliable and timely deliveries"
  },
  { 
    icon: <DollarSign className="w-8 h-8" />, 
    title: "Best Market Rates", 
    description: "Transparent pricing with no hidden charges, optimized for your budget"
  },
  { 
    icon: <Navigation className="w-8 h-8" />, 
    title: "Real-Time Tracking", 
    description: "Advanced GPS tracking for complete visibility of your shipments"
  },
  { 
    icon: <Shield className="w-8 h-8" />, 
    title: "Secure Transport", 
    description: "Full insurance coverage with professional handling of goods"
  }
];

export default function Features() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        Your Trusted Logistics Partner
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 ${
              index === 1 
                ? 'bg-yellow-400 text-black hover:bg-yellow-500' 
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="font-bold mb-2">{feature.title}</h3>
            <p className="text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}