import { Play } from "lucide-react";
import { Link } from "wouter";

export default function VideoBanner() {
  return (
    <div className="relative h-[500px] w-full">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <img
        src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1920"
        alt="Truck on road"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold mb-4 text-white">
          India's Most Trusted <br />
          Logistics Partner for <br />
          Your Business
        </h1>
        <p className="text-gray-300 mb-6 max-w-2xl">
          Bright Logistics offers comprehensive transportation solutions with a focus on reliability, 
          efficiency, and customer satisfaction. From local deliveries to nationwide shipping, 
          we've got you covered.
        </p>
        <div className="flex gap-4">
          <Link href="/contact">
            <a className="bg-yellow-400 text-black px-8 py-3 rounded-full flex items-center gap-2 hover:bg-yellow-500">
              Book Your Truck Now
            </a>
          </Link>
          <button className="border border-yellow-400 text-yellow-400 px-8 py-3 rounded-full flex items-center gap-2 hover:bg-yellow-400/10">
            <Play className="w-5 h-5" /> Watch How We Work
          </button>
        </div>
      </div>
    </div>
  );
}