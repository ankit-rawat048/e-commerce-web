import Image from "next/image";

export default function FooterContent() {
  return (
    <div className="text-gray-200 py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Logo & Description */}
        <div>
          <Image
            src="https://shrigangaherbal.com/assets/logo-new-DYO2f-fG.png"
            alt="Logo"
            width={150}
            height={50}
            className="mb-4"
          />
          <p className="text-gray-400 text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque velit
            saepe corrupti? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Possimus culpa amet vitae! Assumenda possimus quae ea aliquid
            voluptatem alias saepe.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h2 className="text-lg font-semibold text-gray-600 mb-4">COMPANY</h2>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Delivery</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg text-gray-600 font-semibold mb-4">GET IN TOUCH</h2>
          <div className="space-y-2 text-gray-400">
            <p>+1-23-233-778</p>
            <p>contact@random.com</p>
          </div>
        </div>

      </div>
    </div>
  );
}
