import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How do I book a truck?",
    a: "Simply fill out the booking form with your pickup and delivery locations, select the vehicle type, and enter the material weight. Our team will confirm your booking within minutes."
  },
  {
    q: "What types of vehicles are available?",
    a: "We offer a wide range of vehicles including pickup trucks, moving vans, and commercial trucks. The selection varies based on your location and requirements."
  },
  {
    q: "How do I track my shipment?",
    a: "Once your booking is confirmed, you'll receive a tracking ID. You can use this ID on our website or mobile app to track your shipment in real-time."
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit/debit cards, net banking, and digital wallets. For business customers, we also offer invoicing options."
  }
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">FAQs</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
            <button
              className="w-full px-6 py-4 flex justify-between items-center text-left text-white"
              onClick={() => toggleFaq(index)}
            >
              <span className="font-semibold">{faq.q}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  openFaq === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openFaq === index && (
              <div className="px-6 py-4 text-gray-400 border-t border-gray-700">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
