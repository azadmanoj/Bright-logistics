import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Johnson",
    text: "Great service! The app made tracking my shipment so easy."
  },
  {
    name: "Michael Chen",
    text: "Best logistics platform I've used. Very professional service."
  },
  {
    name: "Emma Davis",
    text: "Reliable and efficient. Would definitely recommend!"
  }
];

export default function MobileApp() {
  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">
              Trusted by 50,000+ <br />
              happy customers!
            </h2>
            <div className="space-y-6 mb-8">
              {reviews.map((review, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-gray-800 p-2 rounded-full">
                    <Star className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-white">{review.name}</h4>
                    <p className="text-gray-400">{review.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <a href="#" className="transition-transform hover:scale-105">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on App Store"
                  className="h-[42px]"
                />
              </a>
              <a href="#" className="transition-transform hover:scale-105">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-[42px]"
                />
              </a>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800"
                alt="Mobile App Interface"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent rounded-lg transform translate-x-4 translate-y-4 -z-10" />
          </div>
        </div>
      </div>
    </div>
  );
}