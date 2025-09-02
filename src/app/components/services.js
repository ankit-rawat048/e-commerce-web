import {
  MdCurrencyExchange,
  MdCheckCircle,
  MdHeadsetMic,
} from "react-icons/md";

export default function Services() {
  const services = [
    {
      icon: <MdCurrencyExchange className="w-12 h-12 text-green-500" />,
      title: "Easy Exchange Policy",
      description: "We offer hassle-free exchange policy",
    },
    {
      icon: <MdCheckCircle className="w-12 h-12 text-green-500" />,
      title: "7 Days Return Policy",
      description: "We provide 7 days free return policy",
    },
    {
      icon: <MdHeadsetMic className="w-12 h-12 text-green-500" />,
      title: "Best Customer Support",
      description: "We provide 24/7 customer support",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
