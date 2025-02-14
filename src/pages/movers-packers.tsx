import PageHeader from "@/components/shared/page-header";
import { Package2, Shield, Clock, Trophy, CheckCircle2, Phone } from "lucide-react";

export default function MoversPackers() {
  const services = [
    {
      icon: <Package2 className="w-12 h-12" />,
      title: "Professional Packing",
      description: "Expert packing services using industry-grade materials for maximum protection"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Safe Transportation",
      description: "Secure and damage-free transportation with full insurance coverage"
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Timely Delivery",
      description: "On-time delivery with real-time tracking and status updates"
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: "Best in Class",
      description: "Top-rated movers and packers with verified customer reviews"
    }
  ];

  const features = [
    "Experienced and trained staff",
    "Custom packing solutions",
    "Climate-controlled storage",
    "Door-to-door service",
    "Live tracking system",
    "24/7 customer support"
  ];

  return (
    <div>
      <PageHeader
        title="Movers & Packers"
        description="Professional moving services for homes and offices with end-to-end solutions"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg text-white hover:transform hover:scale-105 transition-transform duration-300">
              <div className="text-yellow-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Features List */}
        <div className="bg-gray-800 rounded-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-white mb-6">Why Choose Our Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-white gap-2">
                <CheckCircle2 className="text-yellow-400 w-5 h-5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500">
            <Phone className="w-5 h-5" />
            <span className="font-bold">Get Free Quote</span>
          </div>
        </div>
      </div>
    </div>
  );
}