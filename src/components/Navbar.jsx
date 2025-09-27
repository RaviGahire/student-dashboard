import { useState } from "react";

const tabs = [
  { label: "Home", href: "/" },
  { label: "Student", href: "/student" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
];

export  function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="block w-full px-4 py-2 mx-auto text-white bg-slate-900 shadow-md lg:px-8 lg:py-3">
      <div className="container flex flex-wrap items-center justify-between mx-auto text-gray-100">
        {/* Logo */}
        <a
          href="#"
          className="mr-4 block cursor-pointer py-1.5 text-base text-gray-200 font-semibold"
        >
          Welcome to Student Dashboard
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {tabs.map((items, index) => (
              <li
                key={index}
                className="flex items-center p-1 text-sm gap-x-2 text-gray-200"
              >
                <a href={items.href} className="flex items-center">
                  {items.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center lg:hidden"
          type="button"
        >
          {isOpen ? (
            // X icon when open
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden">
          <ul className="flex flex-col gap-4 mt-4 mb-4">
            {tabs.map((items, index) => (
              <li
                key={index}
                className="flex items-center p-1 text-sm gap-x-2 text-gray-200"
              >
                <a href={items.href} className="flex items-center">
                  {items.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
