export default function Subscribe() {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Subscribe Now and Get 20% Off
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quae
          beatae laboriosam doloribus!
        </p>

        {/* Input & Button */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
}
