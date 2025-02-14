import PageHeader from "@/components/shared/page-header";
import { Building2, LineChart, Shield, Headphones, Briefcase, Mail } from "lucide-react";

export default function Enterprise() {
  const solutions = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Custom Solutions",
      description: "Tailored logistics solutions designed for your specific business needs"
    },
    {
      icon: <LineChart className="w-12 h-12" />,
      title: "Advanced Analytics",
      description: "Real-time tracking, performance metrics, and business intelligence"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Enterprise Security",
      description: "Enhanced security protocols and compliance management"
    },
    {
      icon: <Headphones className="w-12 h-12" />,
      title: "24/7 Support",
      description: "Dedicated account manager and round-the-clock technical support"
    }
  ];

  const features = [
    {
      title: "Supply Chain Optimization",
      points: [
        "End-to-end visibility",
        "Route optimization",
        "Inventory management",
        "Cost reduction strategies"
      ]
    },
    {
      title: "Technology Integration",
      points: [
        "API integration",
        "Custom dashboard",
        "Mobile app access",
        "Automated reporting"
      ]
    }
  ];

  return (
    <div>
      <PageHeader
        title="Enterprise Solutions"
        description="Scalable logistics solutions for businesses of all sizes"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg text-white hover:transform hover:scale-105 transition-transform duration-300">
              <div className="text-yellow-400 mb-4">{solution.icon}</div>
              <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
              <p className="text-gray-400">{solution.description}</p>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <ul className="space-y-3">
                {feature.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-center text-gray-300 gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-gray-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-gray-400 mb-6">Get in touch with our enterprise team for a customized solution</p>
          <div className="flex justify-center gap-4">
            <button className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500">
              <Briefcase className="w-5 h-5" />
              <span className="font-bold">Schedule Demo</span>
            </button>
            <button className="inline-flex items-center gap-2 border border-yellow-400 text-yellow-400 px-6 py-3 rounded-lg hover:bg-gray-700">
              <Mail className="w-5 h-5" />
              <span className="font-bold">Contact Sales</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}