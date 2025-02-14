import { Helmet } from "react-helmet";
import PageHeader from "@/components/shared/page-header";
import BookingForm from "@/components/home/booking-form";
import { MapPin, Phone, Mail, Truck, Shield, Clock } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us - Bright Logistics</title>
        <meta 
          name="description" 
          content="Book your truck or get in touch with Bright Logistics for all your transportation needs in India. Professional logistics services at competitive rates." 
        />
      </Helmet>

      <PageHeader
        title="Book Your Truck"
        description="Fast, reliable, and secure transportation services across India"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Booking Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white">Book Now</h2>
            <BookingForm />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white">Why Choose Bright Logistics?</h2>
              <div className="grid gap-6">
                <div className="bg-gray-800 p-6 rounded-lg flex items-start gap-4">
                  <Truck className="w-8 h-8 text-yellow-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">Pan-India Coverage</h3>
                    <p className="text-gray-400">
                      Operating across 700+ cities in India with a reliable network of verified transporters
                    </p>
                  </div>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg flex items-start gap-4">
                  <Shield className="w-8 h-8 text-yellow-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">Safe & Secure</h3>
                    <p className="text-gray-400">
                      Full insurance coverage for your goods with professional handling and real-time tracking
                    </p>
                  </div>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg flex items-start gap-4">
                  <Clock className="w-8 h-8 text-yellow-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">Quick Support</h3>
                    <p className="text-gray-400">
                      24/7 customer support with dedicated team to assist you throughout the journey
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">Our Location</h3>
                    <p className="text-gray-400">
                      C20 Agarwal Market<br />
                      Dewas Naka<br />
                      Opposite Skoda Showroom<br />
                      Indore
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">Phone</h3>
                    <p className="text-gray-400">+91 7880001415</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-400">brightlogistics1415@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}