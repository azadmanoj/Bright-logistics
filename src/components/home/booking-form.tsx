import { useForm } from "react-hook-form";

type BookingFormData = {
  from: string;
  to: string;
  vehicleType: string;
  weight: string;
  name: string;
  email: string;
  phone: string;
  date: string;
};

export default function BookingForm() {
  const { register, handleSubmit } = useForm<BookingFormData>();

  const onSubmit = (data: BookingFormData) => {
    console.log(data);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg space-y-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400">Full Name</label>
            <input
              {...register("name")}
              type="text"
              placeholder="Enter your full name"
              className="w-full bg-gray-700 p-2 rounded mt-1 text-white"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400">Email</label>
              <input
                {...register("email")}
                type="email"
                placeholder="Enter your email"
                className="w-full bg-gray-700 p-2 rounded mt-1 text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400">Phone</label>
              <input
                {...register("phone")}
                type="tel"
                placeholder="Enter your phone number"
                className="w-full bg-gray-700 p-2 rounded mt-1 text-white"
                required
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400">From</label>
            <input
              {...register("from")}
              type="text"
              placeholder="Enter pickup location"
              className="w-full bg-gray-700 p-2 rounded mt-1 text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400">To</label>
            <input
              {...register("to")}
              type="text"
              placeholder="Enter delivery location"
              className="w-full bg-gray-700 p-2 rounded mt-1 text-white"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400">Vehicle Type</label>
            <select
              {...register("vehicleType")}
              className="w-full bg-gray-700 p-2 rounded mt-1 text-white"
              required
            >
              <option value="">Select vehicle</option>
              <option value="pickup">Pickup Truck</option>
              <option value="van">Moving Van</option>
              <option value="truck">Commercial Truck</option>
              <option value="trailer">Semi-Trailer</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-400">Pickup Date</label>
            <input
              {...register("date")}
              type="date"
              className="w-full bg-gray-700 p-2 rounded mt-1 text-white"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-400">Material Weight (kg)</label>
          <input
            {...register("weight")}
            type="number"
            placeholder="Enter approximate weight"
            className="w-full bg-gray-700 p-2 rounded mt-1 text-white"
            required
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-yellow-400 text-black py-3 rounded hover:bg-yellow-500 font-semibold"
        >
          Request Booking
        </button>
      </form>
    </div>
  );
}