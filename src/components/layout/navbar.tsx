import { Link } from "wouter";

export default function Navbar() {
  return (
    <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
      <Link href="/">
        <span className="text-xl font-bold text-white cursor-pointer">
          BRIGHT LOGISTICS
        </span>
      </Link>
      <div className="flex gap-6 items-center">
        <Link href="/">
          <span className="text-white hover:text-yellow-400 cursor-pointer">Home</span>
        </Link>
        <Link href="/movers-packers">
          <span className="text-white hover:text-yellow-400 cursor-pointer">Movers & Packers</span>
        </Link>
        <Link href="/truck-partners">
          <span className="text-white hover:text-yellow-400 cursor-pointer">Truck Partners</span>
        </Link>
        <Link href="/enterprise">
          <span className="text-white hover:text-yellow-400 cursor-pointer">For Enterprise</span>
        </Link>

        <Link href="/payment">
          <span className="text-white hover:text-yellow-400 cursor-pointer">For Enterprise</span>
        </Link>
        {/* Add any other navigation items here if needed */}
      </div>
    </nav>
  );
}