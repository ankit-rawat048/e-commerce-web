"use client";

import Link from "next/link";
import Image from "next/image";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation"; // ✅ Correct for App Router

export default function Header() {
  const router = useRouter();

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "COLLECTION", href: "/collections" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="https://shrigangaherbal.com/assets/logo-new-DYO2f-fG.png"
          alt="website logo"
          width={150}
          height={150}
          className="object-contain"
        />
      </Link>

      {/* Nav Links */}
      <nav>
        <ul className="flex space-x-8 text-gray-700 font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="hover:text-green-600 transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right-side icons */}
      <div>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li>
            <Link href="/profile">
              <FaUser size={24} className="hover:text-green-600 cursor-pointer" />
            </Link>
          </li>
          <li>
            <Link href="/login">
              <FaShoppingCart size={24} className="hover:text-green-600 cursor-pointer" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
