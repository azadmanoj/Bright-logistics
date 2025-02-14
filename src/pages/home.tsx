import { Helmet } from "react-helmet";
import VideoBanner from "@/components/home/video-banner";
import Statistics from "@/components/home/statistics";
import MobileApp from "@/components/home/mobile-app";
import FAQ from "@/components/home/faq";
import BookingForm from "@/components/home/booking-form";
import Features from "@/components/home/features";
import Reviews from "@/components/home/reviews";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Bright Logistics - Leading Transportation & Logistics Services in India</title>
        <meta 
          name="description" 
          content="Bright Logistics offers professional transportation and logistics services across India. Expert in truck booking, shipping, and delivery services with real-time tracking." 
        />
        <meta 
          name="keywords" 
          content="logistics company india, transportation services, truck booking, shipping, delivery service, movers, packers, indore logistics" 
        />
        <meta 
          property="og:title" 
          content="Bright Logistics - Leading Transportation & Logistics Services in India" 
        />
        <meta 
          property="og:description" 
          content="Professional transportation and logistics services with pan-India coverage. Book trucks, track shipments, and get reliable delivery services from Bright Logistics." 
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <VideoBanner />
      <Statistics />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-xl mx-auto">
          <BookingForm />
        </div>
      </div>
      <Features />
      <Reviews />
      <MobileApp />
      <FAQ />
    </>
  );
}