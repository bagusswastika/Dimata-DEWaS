import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isActive = (path: string) => router.pathname === path;

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div>
      <nav className="flex w-full justify-between p-10 px-10 sm:px-28 text-xl items-center bg-transparent text-white">
        <Link href="/">
          <div className="title text-3xl font-bold cursor-pointer text-[#E82315]">
            DEWaS
          </div>
        </Link>
        <div className="relative">
          {/* Tombol Dropdown */}
          <button className="md:hidden" onClick={toggleDropdown}>
            <span className="text-3xl">{isDropdownOpen ? "×" : "☰"}</span>
          </button>

          {/* Menu Dropdown */}
          {isDropdownOpen && (
            <div className="absolute right-0 bg-black bg-opacity-80 rounded-md shadow-lg z-10 md:hidden">
              <ul className="flex flex-col text-center">
                <li
                  className={`px-4 py-2 cursor-pointer ${
                    isActive("/")
                      ? "text-gray-500 text-opacity-70"
                      : "hover:text-gray-500"
                  }`}
                >
                  <Link href="/">Home</Link>
                </li>
                <li
                  className={`px-4 py-2 cursor-pointer ${
                    isActive("/about")
                      ? "text-gray-500 text-opacity-70"
                      : "hover:text-gray-500"
                  }`}
                >
                  <Link href="/about">About</Link>
                </li>
                <li
                  className={`px-4 py-2 cursor-pointer ${
                    isActive("/services")
                      ? "text-gray-500 text-opacity-70"
                      : "hover:text-gray-500"
                  }`}
                >
                  <Link href="/services">Services</Link>
                </li>
                <li
                  className={`px-4 py-2 cursor-pointer ${
                    isActive("/contact")
                      ? "text-gray-500 text-opacity-70"
                      : "hover:text-gray-500"
                  }`}
                >
                  <Link href="/contact">Contact</Link>
                </li>
                <li className="px-4 py-2 flex text-center items-center justify-center bg-gray-500 bg-opacity-70 cursor-pointer">
                  Login
                </li>
              </ul>
            </div>
          )}
          <div className="hidden md:flex ">
            <ul className="flex text-center items-center">
              <li
                className={`px-3 cursor-pointer ${
                  isActive("/")
                    ? "text-gray-500 text-opacity-70"
                    : "hover:text-gray-500"
                }`}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                className={`px-3 cursor-pointer ${
                  isActive("/about")
                    ? "text-gray-500 text-opacity-70"
                    : "hover:text-gray-500"
                }`}
              >
                <Link href="/about">About</Link>
              </li>
              <li
                className={`px-3 cursor-pointer ${
                  isActive("/services")
                    ? "text-gray-500 text-opacity-70"
                    : "hover:text-gray-500"
                }`}
              >
                <Link href="/services">Services</Link>
              </li>
              <li
                className={`px-4 py-2 cursor-pointer ${
                  isActive("/contact")
                    ? "text-gray-500 text-opacity-70"
                    : "hover:text-gray-500"
                }`}
              >
                <a
                  href="https://wa.me/6285954660645?text=Halo,%20saya%20tertarik%20dengan%20website%20Anda."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact
                </a>
              </li>

              <li className="pl-6 pr-6 flex text-center items-center justify-center bg-gray-500 bg-opacity-70 h-10 cursor-pointer hover:scale-105 transition duration-100">
                Login
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
