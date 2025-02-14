import { Truck, Users, Clock } from "lucide-react";

const stats = [
  { icon: <Truck className="w-12 h-12" />, title: "500+", description: "Verified Transporters" },
  { icon: <Users className="w-12 h-12" />, title: "50,000+", description: "Active Customers" },
  { icon: <Clock className="w-12 h-12" />, title: "98%", description: "On-time Delivery" }
];

export default function Statistics() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        Largest Trucking Platform
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center mb-4 text-yellow-400">{stat.icon}</div>
            <h3 className="text-2xl font-bold mb-2 text-white">{stat.title}</h3>
            <p className="text-gray-400">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
