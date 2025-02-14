import { Star } from "lucide-react";

export default function Reviews() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-between max-w-md">
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5 12.5c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z" fill="#4285F4"/>
            <path d="M12.5 7.5v10h-2v-10h2z" fill="white"/>
            <path d="M15.5 7.5v10h-2v-10h2z" fill="white"/>
          </svg>
          <span className="text-white">Google Review</span>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>
    </div>
  );
}
