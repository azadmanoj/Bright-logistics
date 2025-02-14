import PageHeader from "@/components/shared/page-header";
import { Truck, Users, Wallet, BarChart, CheckCircle2, ArrowRight } from "lucide-react";

export default function TruckPartners() {
  const benefits = [
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Regular Business",
      description: "Get consistent shipping assignments and steady income flow"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Large Network",
      description: "Access to nationwide customer base and premium corporate clients"
    },
    {
      icon: <Wallet className="w-12 h-12" />,
      title: "Timely Payments",
      description: "Guaranteed weekly payments with transparent fee structure"
    },
    {
      icon: <BarChart className="w-12 h-12" />,
      title: "Business Growth",
      description: "Scale your transport business with our technology platform"
    }
  ];

  const requirements = [
    "Valid commercial vehicle registration",
    "Minimum 2 years of experience",
    "Clean driving record",
    "Vehicle tracking system",
    "Insurance coverage",
    "Professional conduct"
  ];

  return (
    <div>
      <PageHeader
        title="Truck Partners"
        description="Join our network of successful truck partners and grow your business"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg text-white hover:transform hover:scale-105 transition-transform duration-300">
              <div className="text-yellow-400 mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Requirements Section */}
        <div className="bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Partner Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {requirements.map((requirement, index) => (
              <div key={index} className="flex items-center text-white gap-2">
                <CheckCircle2 className="text-yellow-400 w-5 h-5" />
                <span>{requirement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-yellow-400 text-black px-8 py-4 rounded-lg hover:bg-yellow-500 font-bold">
            Become a Partner
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}