export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-sm">
              Leading transportation and logistics services provider with nationwide coverage. Professional and reliable shipping solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Truck Booking</li>
              <li>Packers & Movers</li>
              <li>Enterprise Solutions</li>
              <li>Partner Program</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>brightlogistics1415@gmail.com</li>
              <li>+91 7880001415</li>
              <li>C20 Agarwal Market</li>
              <li>Dewas Naka</li>
              <li>Opposite Skoda Showroom</li>
              <li>Indore</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-yellow-400">Twitter</a>
              <a href="#" className="hover:text-yellow-400">LinkedIn</a>
              <a href="#" className="hover:text-yellow-400">Facebook</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-center">
          © 2024 Bright Logistics. All rights reserved.
        </div>
      </div>
    </footer>
  );
}