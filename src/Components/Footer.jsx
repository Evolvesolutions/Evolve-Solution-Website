

// import React from "react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaWhatsapp,
//   FaMapMarkerAlt,
// } from "react-icons/fa";
// import logo from "../assets/Evolvelogo.png";

// const Footer = () => {
//   return (
//     <footer className="bg-white text-black border-t-2 border-fuchsia-800 py-10 px-4 sm:px-6 mt-10">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">

//         {/* 🔹 Logo & Info */}
//         <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
//           <img
//             src={logo}
//             alt="Evolve Solution Logo"
//             className="w-28 h-28 sm:w-32 sm:h-32 object-cover border-2 border-fuchsia-800
//             hover:shadow-[0_0_30px_rgba(192,38,211,0.6)]
//             hover:scale-105 transition-all duration-300 cursor-pointer shadow-md rounded-xl"
//           />

//           <h2 className="text-xl sm:text-2xl font-extrabold">
//             Evolve<span className="text-fuchsia-600">Solution</span>
//           </h2>

//           <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-xs">
//             Empowering innovation through smart digital solutions.
//           </p>
//         </div>

//         {/* 🔹 Contact */}
//         <div className="text-center md:text-left">
//           <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
//           <a
//             href="mailto:evolvesolutionspvtltd@gmail.com"
//             className="text-gray-600 hover:text-fuchsia-600 transition font-medium break-all text-sm sm:text-base"
//           >
//             evolvesolutionspvtltd@gmail.com
//           </a>
//         </div>

//         {/* 🔹 Location */}
//         <div className="flex flex-col items-center md:items-start text-center md:text-left">
//           <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
//             <FaMapMarkerAlt className="text-fuchsia-600" />
//             Our Location
//           </h3>

//           <p className="text-gray-600 text-sm leading-relaxed mb-4 max-w-xs">
//             <span className="font-semibold text-black">Evolve Solution</span>
//             <br />
//             NP 28, Sai Supreme,
//             <br />
//             Thiru Vi Ka Industrial Estate,
//             <br />
//             SIDCO Industrial Estate,
//             <br />
//             Ekkatuthangal,
//             <br/>
//               Chennai, Tamil Nadu – 600006
//           </p>
//           <p className="text-black font-bold text-sm leading-relaxed mb-4 max-w-xs">
//              Other  Branches
//           </p>
//           <p className="text-gray-600 text-sm leading-relaxed mb-4 max-w-xs"> 
//            Awfis guindy, Chennai .
//            <br/>
//            Pammal Chennai.
//            <br/>
//            Bangalore
//           </p>

//           <div className="w-full max-w-xs h-36 rounded-xl overflow-hidden border border-gray-300 shadow-sm">
//             <iframe
//               title="Evolve Solution Location"
//               src="https://www.google.com/maps?q=NP%2028,%20Thiru%20Vi%20Ka%20Industrial%20Estate,%20SIDCO%20Industrial%20Estate,%20Ekkatuthangal,%20Chennai&output=embed"
//               className="w-full h-full"
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             />
//           </div>
//         </div>

//         {/* 🔹 Social Links */}
//         <div className="flex justify-center md:justify-start lg:justify-end gap-6 text-xl sm:text-2xl">
//           <a
//             href="https://www.facebook.com/@evolve.solutions.2025"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-blue-600 transition-transform hover:scale-110"
//           >
//             <FaFacebookF />
//           </a>

//           <a
//             href="https://www.instagram.com/evolve_solution"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-pink-600 transition-transform hover:scale-110"
//           >
//             <FaInstagram />
//           </a>

//           <a
//             href="https://wa.me/919319552561"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-green-500 transition-transform hover:scale-110"
//           >
//             <FaWhatsapp />
//           </a>
//         </div>
//       </div>

//       {/* 🔹 Bottom Line */}
//       <div className="border-t border-gray-300 mt-8 pt-4 text-center text-gray-600 text-xs sm:text-sm">
//         © {new Date().getFullYear()} EvolveSolution. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../assets/Evolvelogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white border-t border-cyan-400/30 py-10 px-4 sm:px-6 mt-10">

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 items-start">

        {/* 🔹 Logo & Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">

          <img
            src={logo}
            alt="Evolve Solution Logo"
            className="
            w-28 h-28 sm:w-32 sm:h-32 object-cover
            border-2 border-cyan-400
            hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]
            hover:scale-105 transition-all duration-300
            cursor-pointer shadow-md rounded-xl
          "
          />

          <h2 className="text-xl sm:text-2xl font-extrabold">
            Evolve<span className="text-cyan-400">Solution</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xs">
            Empowering innovation through smart digital solutions.
          </p>

        </div>

        {/* 🔹 Quick Links (ADDED) */}
        <div className="text-center md:text-left">

          <h3 className="text-lg font-semibold mb-3 text-cyan-400">
            Quick Links
          </h3>

          <div className="flex flex-col gap-2 text-sm sm:text-base">

            <a href="/" className="text-gray-400 hover:text-cyan-400 transition">
              Home
            </a>

            <a href="/about" className="text-gray-400 hover:text-cyan-400 transition">
              About
            </a>

            <a href="/services" className="text-gray-400 hover:text-cyan-400 transition">
              Services
            </a>

            <a href="/career" className="text-gray-400 hover:text-cyan-400 transition">
              Career
            </a>

            <a href="/contact" className="text-gray-400 hover:text-cyan-400 transition">
              Contact
            </a>

          </div>

        </div>

        {/* 🔹 Contact + Location */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">

          <h3 className="text-lg font-semibold mb-3 text-cyan-400">
            Contact Us
          </h3>

          <a
            href="mailto:evolvesolutionspvtltd@gmail.com"
            className="text-gray-400 hover:text-cyan-400 transition font-medium break-all text-sm sm:text-base mb-4"
          >
            evolvesolutionspvtltd@gmail.com
          </a>

          {/* <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-cyan-400">
            <FaMapMarkerAlt />
            Our Location
          </h3> */}

          {/* <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-xs">
            <span className="font-semibold text-white">Evolve Solution</span>
            <br />
            NP 28, Sai Supreme,
            <br />
            SIDCO Industrial Estate,
            <br />
            Ekkatuthangal,
            <br />
            Chennai, Tamil Nadu – 600006
          </p> */}
          {/* <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-xs">
            <span className="font-semibold text-white"></span>
            <br />
            Workafella Coworking Space,
            <br />
            Infantry Road ,
            <br />
            Bangalore,
            <br />
            Karnataka -560001
          </p>
          <p className="text-white font-bold text-sm leading-relaxed mb-2 max-w-xs">
            Other Branches
          </p>

          <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-xs">
            Awfis Guindy, Chennai
            <br />
            Pammal Chennai
           
           
          </p> */}

        </div>

        {/* 🔹 Map + Social Links */}
        <div className="flex flex-col items-center lg:items-end gap-4">
{/* <div className="w-full max-w-xs h-36 rounded-xl overflow-hidden border border-cyan-400/30 shadow-sm">
  <iframe
    title="Sai Supreme Ekkatuthangal Location"
    src="https://www.google.com/maps?q=Sai%20Supreme,%20Ekkatuthangal,%20Chennai&output=embed"
    className="w-full h-full"
    loading="lazy"
  />
</div> */}
          {/* <div className="w-full max-w-xs h-36 rounded-xl overflow-hidden border border-cyan-400/30 shadow-sm">
  <iframe
    title="Workafella Bangalore Location"
    src="https://www.google.com/maps?q=Workafella%20Coworking%20Space,%20Infantry%20Road,%20Opposite%20Commissioner%20Office,%20Bangalore,%20Karnataka%20560001&output=embed"
    className="w-full h-full"
    loading="lazy"
  />
</div> */}

          {/* 🔹 Social Links */}
          <div className="flex gap-6 text-xl sm:text-2xl">

            <a
              href="https://www.facebook.com/@evolve.solutions.2025"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-transform hover:scale-110"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/evolve_solution"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-transform hover:scale-110"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/919319552561"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-transform hover:scale-110"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

      </div>

      <section className="max-w-6xl mx-auto mt-10" aria-labelledby="office-locations-heading">
        <h3
          id="office-locations-heading"
          className="mb-5 text-center text-xl font-semibold text-cyan-400 sm:text-left"
        >
          Our Office Locations
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <address className="flex min-w-0 gap-3 rounded-xl border border-cyan-400/20 bg-white/[0.04] p-4 not-italic transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/[0.07]">
            <FaMapMarkerAlt className="mt-1 shrink-0 text-cyan-400" aria-hidden="true" />
            <div className="min-w-0 break-words">
              <h4 className="mb-2 font-semibold text-white">CHENNAI – OLYMPIA TECHNOLOGY PARK</h4>
              <p className="text-sm leading-6 text-gray-400">
                Olympia Technology Park, Plot No. 1,<br />
                Jawaharlal Nehru Salai,<br />
                SIDCO Industrial Estate,<br />
                Guindy, Chennai,<br />
                Tamil Nadu 600032
              </p>
            </div>
          </address>

          <address className="flex min-w-0 gap-3 rounded-xl border border-cyan-400/20 bg-white/[0.04] p-4 not-italic transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/[0.07]">
            <FaMapMarkerAlt className="mt-1 shrink-0 text-cyan-400" aria-hidden="true" />
            <div className="min-w-0 break-words">
              <h4 className="mb-2 font-semibold text-white">CHENNAI – EKKATUTHANGAL</h4>
              <p className="text-sm leading-6 text-gray-400">
                Sai Supreme NP 28,<br />
                Thiru Vi Ka Industrial Estate,<br />
                SIDCO Industrial Estate,<br />
                Ekkatuthangal, Chennai,<br />
                Tamil Nadu 600032
              </p>
            </div>
          </address>

          <address className="flex min-w-0 gap-3 rounded-xl border border-cyan-400/20 bg-white/[0.04] p-4 not-italic transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/[0.07]">
            <FaMapMarkerAlt className="mt-1 shrink-0 text-cyan-400" aria-hidden="true" />
            <div className="min-w-0 break-words">
              <h4 className="mb-2 font-semibold text-white">BANGALORE – INFANTRY ROAD</h4>
              <p className="text-sm leading-6 text-gray-400">
                Workafella Infantry Road - Coworking Space in Bangalore,<br />
                150, 1, Infantry Rd,<br />
                Opp. Commissioner Office,<br />
                Vasanth Nagar,<br />
                Bengaluru, Karnataka 560001
              </p>
            </div>
          </address>
        </div>
      </section>

      {/* 🔹 Bottom Line */}
      <div className="border-t border-cyan-400/20 mt-8 pt-4 text-center text-gray-400 text-xs sm:text-sm">
        © {new Date().getFullYear()} 
        <span className="text-cyan-400 font-semibold"> EvolveSolution</span>. 
        All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;