import Image from "next/image";

export default function Hero_section() {
  return (
    <section className="bg-green-50 py-16">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 gap-8">
        
        {/* Hero Content */}
        <div className="hero-content flex-1 text-center md:text-left">
          <span className="flex items-center justify-center md:justify-start gap-2 text-green-600 font-medium mb-2">
            <p>-</p>
            <p>OUR BESTSELLERS</p>
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Latest Arrival
          </h1>

          <span className="flex items-center justify-center md:justify-start gap-2 mt-4 text-green-700 font-semibold cursor-pointer">
            <h2 className="text-lg md:text-xl">SHOP NOW</h2>
            <p>-</p>
          </span>
        </div>

        {/* Hero Image */}
        <div className="hero-img flex-1 flex justify-center md:justify-end">
          <Image
            src="https://shrigangaherbal.com/assets/bg_2-Bh6Mm5H-.png"
            alt="Hero Image"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
