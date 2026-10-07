

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import logo from "../assets/Evolvelogo.png";
// import { path } from "framer-motion/client";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Services", path: "/services" },
//     { name: "Contact", path: "/contact" },
//     {name:"Properties", path:"/properties"}
//   ];

//   return (
//     <>
//       {/* ===== Top Navbar ===== */}
//       <nav className="fixed w-full bg-white shadow-lg z-20">
//         <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          
//           {/* Logo */}
//           <div className="flex items-center space-x-3">
//             <img
//               src={logo}
//               alt="Evolve Solution Logo"
//               className="w-12 h-12 rounded-full shadow-md"
//             />
//             <h1 className="text-3xl font-bold text-black">
//               Evolve<span className="text-fuchsia-500">Solution</span>
//             </h1>
//           </div>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex space-x-6 text-lg font-bold">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <NavLink
//                   to={link.path}
//                   end={link.path === "/"}
//                   className={({ isActive }) =>
//                     `transition duration-300 hover:text-fuchsia-800 ${
//                       isActive
//                         ? "text-fuchsia-600 underline underline-offset-8"
//                         : "text-black"
//                     }`
//                   }
//                 >
//                   {link.name}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>

//           {/* Mobile Hamburger */}
//           <button
//             className="md:hidden text-black text-2xl font-bold"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? "✖" : "☰"}
//           </button>
//         </div>
//       </nav>

//       {/* ===== Mobile Sidebar ===== */}
//       <div
//         className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-30 transform transition-transform duration-300 ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="flex justify-between items-center p-4 border-b">
//           <div className="flex items-center space-x-2">
//             <img src={logo} alt="Logo" className="w-8 h-8 rounded-full" />
//             <h1 className="text-2xl font-bold text-black">
//               Evolve<span className="text-fuchsia-500">Solution</span>
//             </h1>
//           </div>
//           <button
//             className="text-black text-2xl font-bold"
//             onClick={() => setIsOpen(false)}
//           >
//             ✖
//           </button>
//         </div>

//         <ul className="flex flex-col p-4 space-y-4 font-bold">
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <NavLink
//                 to={link.path}
//                 end={link.path === "/"}
//                 onClick={() => setIsOpen(false)}
//                 className={({ isActive }) =>
//                   `block transition duration-300 hover:text-fuchsia-800 ${
//                     isActive ? "text-fuchsia-600 underline" : "text-black"
//                   }`
//                 }
//               >
//                 {link.name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black opacity-30 z-20"
//           onClick={() => setIsOpen(false)}
//         />
//       )}
//     </>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Evolvelogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    { name: "Career", path: "/career" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ===== Navbar ===== */}
      <motion.nav
        className={` fixed w-full z-50 bg-white shadow-lg transition-all duration-500 flex justify-center`}
        animate={{
          padding: scrolled ? "0.5rem 2rem" : "1rem 2rem",
          borderRadius: scrolled ? "2rem" : "0rem",
        }}
      >
        <div className="max-w-6xl w-full flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img
              src={logo}
              alt="Logo"
              className={`rounded-full shadow-md transition-all duration-500 ${
                scrolled ? "w-8 h-8 sm:w-10 sm:h-10" : "w-10 h-10 sm:w-12 sm:h-12"
              }`}
            />
            {!scrolled && (
              <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-black whitespace-nowrap">
                Evolve<span className="text-violet-500">Solution</span>
              </h1>
            )}
          </div>

          {/* Desktop Links */}
<ul
  className={`hidden md:flex space-x-6 font-bold transition-all duration-500 ${
    scrolled ? "justify-center flex-1" : ""
  }`}
>
  {navLinks.map((link) => (
    <li key={link.name}>
      <NavLink
        to={link.path}
        end={link.path === "/"}
        className={({ isActive }) =>
          `
          relative px-3 py-1.5 rounded-md
          transition-all duration-300
          ${
            isActive
              ? "bg-cyan-500 text-white shadow-md"
              : "text-black hover:bg-cyan-50 hover:text-cyan-600"
          }
          `
        }
      >
        {link.name}
      </NavLink>
    </li>
  ))}
</ul>

          {/* Hamburger */}
          <button
            className="md:hidden text-black text-2xl font-bold p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </motion.nav>

      {/* ===== Mobile Sidebar ===== */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/30 z-40"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 flex flex-col"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex justify-between items-center p-4 border-b">
                <div className="flex items-center space-x-2">
                  <img src={logo} alt="Logo" className="w-8 h-8 rounded-full" />
                  <h1 className="text-2xl font-bold text-black">
                    Evolve<span className="text-violet-500">Solution</span>
                  </h1>
                </div>
                <button
                  className="text-black text-2xl font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  
                </button>
              </div>

              <ul className="flex flex-col p-4 space-y-4 font-bold">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <NavLink
                      to={link.path}
                      end={link.path === "/"}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block px-3 py-2 rounded-md transition duration-300 ${
                          isActive 
                            ? "bg-cyan-500 text-white shadow-sm" 
                            : "text-black hover:bg-cyan-50 hover:text-cyan-600"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
