import { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Discover", href: "#discover" },
    { label: "Get Started", href: "#getStarted" },
  ];

  return (
    <>
      <motion.div
        initial={{ top: "-300px" }}
        animate={{ top: "0" }}
        transition={{
          duration: 0.8,
        }}
        className="relative bg-[url('/images/image-hero-mobile.jpg')] lg:bg-[url('/images/image-hero-desktop.jpg')] h-52 lg:h-72 bg-cover"
      >
        <motion.nav className="justify-between flex items-start p-4 lg:py-16 lg:px-40">
          <motion.img
            initial={{ marginLeft: "-100px" }}
            animate={{ marginLeft: "0px" }}
            transition={{
              duration: 1,
            }}
            src="images/logo.svg"
            alt="Crowfund-logo"
          />

          <motion.li
            initial={{ right: "-100px" }}
            animate={{ right: "0px" }}
            transition={{
              duration: 1,
            }}
            className={`opacity-0 lg:opacity-100 lg:flex lg:relative lg:top-0 
               lg:bg-inherit lg:rounded-none lg:flex-row  lg:gap-10 lg:w-fit lg:p-0 
                ${
                  isOpen
                    ? " opacity-100 flex fixed top-20 mx-auto bg-white rounded-lg flex-col gap-3  w-11/12 p-8 shadow-2xl z-50"
                    : false
                } `}
            // className="relative hidden lg:flex lg:gap-10 lg:text-lg lg:text-white font-semibold "
          >
            {navItems.map((item) => (
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                key={item.label}
                href={item.href}
                className="lg:text-white lg:font-semibold"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.li>

          <motion.button
            whileTap={{ scale: 1.2 }}
            transition={{ duration: 0.5 }}
            className="flex lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <img src="images/icon-close-menu.svg" alt="close-menu" />
            ) : (
              <img src="images/icon-hamburger.svg" alt="hamburger" />
            )}
          </motion.button>
        </motion.nav>
      </motion.div>

      {/* {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="bg-white w-11/12 absolute rounded-lg shadow-lg top-16 left-3">
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
      )} */}
    </>
  );
}

export default Navbar;

//About this navbar next time you come to it why not make
// a different nav section entirely for laptop and for mobile
// since crowfund logo is still showing with no opacity so that
//  the x button would just be close to it and it can serve it's
// onclick purpose
