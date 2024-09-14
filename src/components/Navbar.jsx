import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Discover", href: "#discover" },
    { label: "Get Started", href: "#getStarted" },
  ];

  return (
    <>
      <div className="justify-between flex items-start p-4 lg:py-16 lg:px-40 lg:bg-[url(images/image-hero-desktop.jpg)] bg-[url(images/image-hero-mobile.jpg)] h-52 lg:h-72 bg-cover">
        <img src="images/logo.svg" alt="Crowfund-logo" />

        {/* laptop  */}
        <nav className="hidden lg:flex gap-10 text-lg text-white font-semibold">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* mobile  */}
        {!isOpen && (
          <button onClick={() => setIsOpen(!isOpen)} className="flex lg:hidden">
            <img src="images/icon-hamburger.svg" alt="hamburger" />
          </button>
        )}
        {isOpen && (
          <button onClick={() => setIsOpen(!isOpen)}>
            <img src="images/icon-close-menu.svg" alt="iclose-menu" />
          </button>
        )}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="bg-white w-11/12 absolute rounded-lg shadow-lg top-12 left-3">
            <nav className="flex flex-col gap-2 font-semibold p-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="border-b border-gray-200 p-3"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
