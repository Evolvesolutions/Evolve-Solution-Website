


  // import React, { useState } from 'react';
  // import { motion } from 'framer-motion';
  // import Navbar from './Navbar';
  // import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';

  // const techIcons = [FaReact, FaNodeJs, FaPython, FaDatabase];

  // const Homepage = () => {
  //   const [clicks, setClicks] = useState([]);

  //   const handleClick = (e) => {
  //     const newClick = {
  //       x: e.clientX,
  //       y: e.clientY,
  //       id: Date.now(),
  //     };
  //     setClicks((prev) => [...prev, newClick]);
  //     setTimeout(() => {
  //       setClicks((prev) => prev.filter((click) => click.id !== newClick.id));
  //     }, 1000);
  //   };

  //   return (
  //     <div
  //       id="home"
  //       className="w-full min-h-screen relative overflow-hidden bg-white text-black"
  //       onClick={handleClick}
  //     >
  //       {/* Click Ripple */}
  //       {clicks.map((click) => (
  //         <motion.div
  //           key={click.id}
  //           className="absolute w-10 h-10 rounded-full bg-fuchsia-800 opacity-80"
  //           style={{ top: click.y - 20, left: click.x - 20 }}
  //           initial={{ scale: 0, opacity: 1 }}
  //           animate={{ scale: 2, opacity: 0 }}
  //           transition={{ duration: 1 }}
  //         />
  //       ))}

  //       {/* Navbar */}
  //       <Navbar />

  //       {/* Floating Tech Icons */}
  //     {/* 🔹 Tech Rain Animation (fixed + visible + responsive) */}
  // {Array.from({ length: 14 }).map((_, i) => {
  //   const Icon = techIcons[i % techIcons.length];
  //   const randomX = Math.random() * 100;
  //   const duration = 6 + Math.random() * 6;
  //   return (
  //     <motion.div
  //       key={i}
  //       className="absolute text-fuchsia-600 text-3xl md:text-4xl opacity-80 drop-shadow-lg z-20"
  //       style={{
  //         left: `${randomX}%`,
  //         top: "-15%",
  //       }}
  //       animate={{
  //         y: ["0vh", "110vh"],
  //         rotate: [0, 360],
  //       }}
  //       transition={{
  //         duration,
  //         repeat: Infinity,
  //         delay: Math.random() * 5,
  //         ease: "linear",
  //       }}
  //     >
  //       <Icon />
  //     </motion.div>
  //   );
  // })}


  //       {/* Hero Section */}
  //       <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
  //         <motion.h1
  //           className="text-6xl font-extrabold tracking-tight"
  //           initial={{ opacity: 0, y: -80 }}
  //           animate={{ opacity: 1, y: 0 }}
  //           transition={{ duration: 1.5, ease: "easeOut" }}
  //         >
  //           Welcome to{" "}
  //           <motion.span
  //             className="text-fuchsia-600 inline-block"
  //             animate={{ scale: [1, 1.2, 1], textShadow: ["0 0 5px ", "0 0 20px ", "0 0 5px "] }}
  //             transition={{
  //               duration: 1.5,
  //               repeat: Infinity,
  //               repeatType: "mirror",
  //             }}
  //           >
  //             EvolveSolution
  //           </motion.span>
  //         </motion.h1>

  //         <motion.p
  //           className="mt-8 max-w-3xl text-lg leading-relaxed font-bold"
  //           initial={{ opacity: 0 }}
  //           animate={{ opacity: 1 }}
  //           transition={{ delay: 1.2, duration: 1 }}
  //         >
  //           At{" "}
  //           <motion.span
  //             className="text-fuchsia-600 font-bold inline-block"
  //             animate={{ opacity: [0.8, 1, 0.8] }}
  //             transition={{
  //               duration: 1.5,
  //               repeat: Infinity,
  //               repeatType: "mirror",
  //             }}
  //           >
  //             EvolveSolution
  //           </motion.span>
  //           , we build smart, scalable, and innovative digital solutions that elevate your business. From web apps to mobile platforms and beyond, we focus on delivering seamless user experiences and cutting-edge features.
  //         </motion.p>
  //       </section>
        
  //     </div>
  //   );
  // };
  
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./CoreServices.css";
import heroVideo from "../assets/299527_medium.mp4";
import TypingText from "../Components/TypingAnimation";
import Navbar from "./Navbar";
import pic1 from "../assets/modern-office.avif"
import pic2 from "../assets/collaboration-group-young-modern-people-smart-casual-wear-discussing-something-smiling-working-creative-office-144907464.webp"
import pic3 from "../assets/digital-marketing-2.jpg.optimal.jpg"
import pic4 from "../assets/innovation.jpg"
import pic5 from "../assets/realworld.jpg"
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaBullhorn,
  FaLaptopCode,
  FaMobileAlt,
  FaHeadset
} from "react-icons/fa";
import RoadMap from "./RoadMap";
import img1 from "../assets/download.jpeg"
import img2 from "../assets/1715371733808.jpeg"
import img3 from "../assets/circle.png"
const coreServices = [
  {
    title: "Web Development",
    description:
      "We design and develop modern, responsive, and high-performance websites tailored to your business needs. Our websites are fast, secure, and user-friendly, ensuring a great experience across all devices.",
    icon: FaLaptopCode,
    image: img1,
  },
  {
    title: "Mobile Applications",
    description:
      "We design and develop high-quality mobile applications that deliver smooth performance and an excellent user experience. Our apps are built to be secure, scalable, and easy to use, helping businesses connect with customers anytime, anywhere.",
    icon: FaMobileAlt,
    image: img2,
  },
  {
    title: "Backend & Cloud",
    description:
      "We provide robust backend and cloud solutions that power secure, scalable, and high-performance applications. Our backend systems handle business logic, databases, and APIs, while our cloud services ensure reliability, flexibility, and easy scalability.",
    icon: FaDatabase,
    image: img3,
  },
  {
    title: "IT Support Services",
    description:
      "We provide reliable IT support services to ensure your systems run smoothly and securely. Our team handles troubleshooting, maintenance, system updates, and technical assistance to minimize downtime and keep your business operating efficiently.",
    icon: FaHeadset,
    image: pic2,
  },
];

function CoreServiceCard({ service, index, isOpen, setOpenService }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const Icon = service.icon;

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return undefined;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(card);
      }
    }, { threshold: 0.12 });

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  const supportsHover = () =>
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const handleMouseMove = (event) => {
    if (!supportsHover()) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const pointerX = (event.clientX - bounds.left) / bounds.width;
    const pointerY = (event.clientY - bounds.top) / bounds.height;

    event.currentTarget.style.setProperty("--tilt-x", `${(0.5 - pointerY) * 8}deg`);
    event.currentTarget.style.setProperty("--tilt-y", `${(pointerX - 0.5) * 8}deg`);
  };

  const handleCardClick = () => {
    if (supportsHover()) {
      setOpenService(index);
      return;
    }

    setOpenService((current) => current === index ? null : index);
  };

  const handleKeyDown = (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    setOpenService((current) => current === index ? null : index);
  };

  const handleMouseLeave = (event) => {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");

    if (supportsHover()) {
      setOpenService((current) => current === index ? null : current);
    }
  };

  return (
    <div
      className={`core-service-reveal${isVisible ? " is-visible" : ""}`}
      style={{ "--reveal-delay": `${index * 100}ms`, "--idle-delay": `${index * 250}ms` }}
    >
      <article
        ref={cardRef}
        id={`core-service-card-${index}`}
        className={`core-service-card group${isOpen ? " is-open" : ""}`}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-controls={`core-service-description-${index}`}
        style={{ "--idle-delay": `${index * 250}ms` }}
        onClick={handleCardClick}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => {
          if (supportsHover()) setOpenService(index);
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img src={service.image} alt="" aria-hidden="true" className="core-service-image" />
        <div className="core-service-overlay" />
        <div className="core-service-content">
          <div className="core-service-icon" aria-hidden="true">
            <Icon />
          </div>
          <div className="core-service-copy">
            <h3>{service.title}</h3>
            <p id={`core-service-description-${index}`} aria-hidden={!isOpen}>
              {service.description}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

const techIcons = [FaReact, FaNodeJs, FaPython, FaDatabase];

const Homepage = () => {
  const [clicks, setClicks] = useState([]);
  const [openService, setOpenService] = useState(null);

  useEffect(() => {
    const closeOutsideCards = (event) => {
      if (event.target instanceof Element && event.target.closest(".core-service-card")) return;
      setOpenService(null);
    };

    document.addEventListener("pointerdown", closeOutsideCards);
    return () => document.removeEventListener("pointerdown", closeOutsideCards);
  }, []);

  const handleClick = (e) => {
    const newClick = { x: e.clientX, y: e.clientY, id: Date.now() };
    setClicks((prev) => [...prev, newClick]);
    setTimeout(() => {
      setClicks((prev) => prev.filter((c) => c.id !== newClick.id));
    }, 1000);
  };

  const imageFloat = {
  animate: {
    y: [0, -10, 0],
  },
  transition: {
    duration: 3,
    
    ease: "easeInOut",
  },
};



const descriptionText = `
Evolve Solution is a technology-driven company specializing in web and mobile application development, digital marketing, IT consulting, and professional training services. We engineer scalable digital platforms, cloud-ready systems, and high-performance applications using modern frameworks, microservice architectures, and agile methodologies.

Our solutions emphasize clean code, optimized performance, secure integrations, and seamless user experiences, helping businesses adapt, scale, and innovate in rapidly evolving digital environments.

In addition to development services, Evolve Solution provides industry-focused technical courses, IT training, and placement support programs to prepare students and professionals with real-world skills and career opportunities. Our IT consulting and services help organizations streamline processes, enhance digital presence, and achieve sustainable growth.
`;
  return (
    <div
      id="home"
      className="w-full min-h-screen relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] text-white"
      onClick={handleClick}
    >
      {/* Click Ripple */}
      {clicks.map((click) => (
        <motion.div
          key={click.id}
          className="absolute w-10 h-10 rounded-full bg-cyan-400 opacity-60"
          style={{ top: click.y - 20, left: click.x - 20 }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 1 }}
        />
      ))}

      <Navbar />

      {/* Tech Rain */}
      {Array.from({ length: 12 }).map((_, i) => {
        const Icon = techIcons[i % techIcons.length];
        return (
          <motion.div
            key={i}
            className="absolute text-cyan-400 text-3xl opacity-40 z-20"
            style={{ left: `${Math.random() * 100}%`, top: "-15%" }}
            animate={{ y: ["0vh", "110vh"], rotate: [0, 360] }}
            transition={{
              duration: 7 + Math.random() * 6,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Icon />
          </motion.div>
        );
      })}

      {/* ================= HERO ================= */}
 {/* ================= HERO ================= */}
<section className="relative min-h-screen pt-20 flex flex-col justify-center items-center text-center px-4 sm:px-6 overflow-hidden">

  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    <source src={heroVideo} type="video/mp4" />
  </video>

  {/* Dark Overlay */}
  <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-0"></div>

  {/* Content */}
  <div className="relative z-10">

    {/* Hero Heading */}
    <motion.h1
      className="
        font-extrabold 
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
        leading-tight
        text-white
        text-center
        w-full
        px-2
      "
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      Welcome to{" "}
      <span className="text-cyan-400 inline">
        EvolveSolution
      </span>
    </motion.h1>

    {/* Hero Description */}
    <motion.p
      className="
        mt-4 sm:mt-6 
        max-w-3xl 
        text-lg sm:text-lg md:text-xl 
        font-medium 
        whitespace-pre-line
        px-2 sm:px-0
        text-gray-200
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <TypingText text={descriptionText} speed={20} />
    </motion.p>

  </div>

</section>


  

{/* ================= WORK CULTURE ================= */}
<section className="bg-white/5 backdrop-blur-sm border-t border-white/10 py-10 sm:py-12 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

    {/* Image */}
    <motion.img
      src={pic1}
      alt="Engineering Culture"
      className="w-full rounded-2xl shadow-2xl hover:shadow-fuchsia-300/40 transition-shadow duration-500"
      initial={{ opacity: 0, x: -60, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.04 }}
    />

    {/* Content */}
    <div className="text-center md:text-left">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white"  >
        Engineering-Driven <span className="text-white">Culture</span>
      </h2>

      <p className="text-white text-lg sm:text-base leading-relaxed mb-4">
        At EvolveSolution, we foster a high-performance engineering culture built
        on clean architecture, reusable components, and Agile sprint execution.
        Our teams work with clarity, ownership, and accountability to deliver
        scalable digital solutions.
      </p>

      <ul className="text-white text-lg sm:text-base space-y-2 list-disc list-inside">
        <li>Clean code standards and best practices</li>
        <li>Agile development and sprint-based delivery</li>
        <li>Code reviews and performance optimization</li>
        <li>Scalable and maintainable system design</li>
      </ul>
    </div>

  </div>
</section>

{/* ================= COLLABORATION ================= */}
<section className="bg-white/5 backdrop-blur-sm border-t border-white/10 py-12 sm:py-14 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

    {/* Content */}
    <div className="text-center md:text-left order-2 md:order-1">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white"  >
        Smart Collaboration & <span className="text-white">Growth</span>
      </h2>

      <p className="text-white text-lg sm:text-base leading-relaxed mb-4">
        We believe that great products are built through strong collaboration.
        Our teams communicate openly across design, development, and deployment
        to solve real-world problems efficiently.
      </p>

      <ul className="text-white text-lg sm:text-base space-y-2 list-disc list-inside">
        <li>Cross-functional team collaboration</li>
        <li>Continuous learning and mentoring culture</li>
        <li>Innovation-driven problem solving</li>
        <li>Ownership and accountability at every level</li>
      </ul>
    </div>

    {/* Image */}
    <motion.img
      src={pic2}
      alt="Team Collaboration"
      className="w-full rounded-2xl shadow-2xl hover:shadow-fuchsia-300/40 transition-shadow duration-500 order-1 md:order-2"
      initial={{ opacity: 0, x: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.04 }}
    />

  </div>
</section>


<section className="bg-white/5 backdrop-blur-sm border-t border-white/10 py-10 sm:py-12 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

    {/* Image */}
    <motion.img
      src={pic4}
      alt="Engineering Culture"
      className="w-full rounded-2xl shadow-2xl hover:shadow-fuchsia-300/40 transition-shadow duration-500"
      initial={{ opacity: 0, x: -60, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.04 }}
    />

    {/* Content */}
    <div className="text-center md:text-left">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white"  >
        Innovation &<span className="text-white">Continuous Learning</span>
      </h2>

      <p className="text-white text-lg sm:text-base leading-relaxed mb-4">
      We foster a culture where innovation and learning never stop. Our team constantly explores
       modern technologies, frameworks, and industry trends to stay ahead in the evolving digital 
       landscape. Developers are encouraged to experiment, improve their skills, 
      and work with cutting-edge tools such as AI, cloud platforms, and modern web technologies.
      </p>

      <ul className="text-white text-lg sm:text-base space-y-2 list-disc list-inside">
        <li>Explore and experiment with modern technologies.</li>
        <li>Stay ahead with AI, cloud, and web frameworks.</li>
        <li>Continuous skill growth is part of our culture.</li>
       
      </ul>
    </div>

  </div>
</section>


<section className="bg-white/5 backdrop-blur-sm border-t border-white/10 py-12 sm:py-14 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

    {/* Content */}
    <div className="text-center md:text-left order-2 md:order-1">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white"  >
       Ownership & <span className="text-white">Real-World Impact</span>
      </h2>

      <p className="text-white text-lg sm:text-base leading-relaxed mb-4">
      At EvolveSolution, every team member takes ownership of their work and contributes directly to
       meaningful, real-world products. From idea to deployment,
       developers are involved in building scalable solutions that solve actual business challenges.
      </p>

      <ul className="text-white text-lg sm:text-base space-y-2 list-disc list-inside">
        <li>Take responsibility from idea to deployment.</li>
        <li>Work on products that solve real business problems.</li>
        <li>Make meaningful contributions that drive results.</li>
        
      </ul>
    </div>

    {/* Image */}
    <motion.img
      src={pic5}
      alt="Team Collaboration"
      className="w-full rounded-2xl shadow-2xl hover:shadow-fuchsia-300/40 transition-shadow duration-500 order-1 md:order-2"
      initial={{ opacity: 0, x: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.04 }}
    />

  </div>
</section>

   {/* ================= SERVICES ================= */}
<section className="bg-white/5 backdrop-blur-sm border-t border-white/10 py-12 sm:py-16 px-4 sm:px-6 text-center">

  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12">
    Our <span className="text-cyan-400">Core Services</span>
  </h2>

  <div className="core-services-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
    {coreServices.map((service, index) => (
      <CoreServiceCard
        key={service.title}
        service={service}
        index={index}
        isOpen={openService === index}
        setOpenService={setOpenService}
      />
    ))}
  </div>
</section>


      {/* ================= DIGITAL MARKETING ================= */}
 

{/* ================= DIGITAL MARKETING ================= */}
<section className="bg-white/5 backdrop-blur-sm border-t border-white/10 py-10 sm:py-14 md:py-16 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

    {/* IMAGE WITH JUMP EFFECT */}
    <motion.img
      src={pic3}
      alt="Digital Marketing Strategy"
      className="w-full rounded-2xl shadow-xl cursor-pointer"
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{
        y: -18,
        scale: 1.03,
        boxShadow: "0px 20px 40px rgba(0,0,0,0.25)",
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 12,
        duration: 0.8,
      }}
      viewport={{ once: true }}
    />

    {/* CONTENT */}
    <motion.div
      className="text-center md:text-left"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className=" text-white   text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
        Land & Digital <span className="text-white">Marketing</span>
      </h2>

      <p className="text-white text-base sm:text-lg leading-relaxed mb-4">
        We provide end-to-end land and digital marketing solutions designed
        to increase visibility, generate qualified leads, and drive measurable
        business growth through smart digital strategies.
      </p>

      <p className="text-white text-base sm:text-lg leading-relaxed mb-5 sm:mb-6">
        From local land promotions to full-scale digital campaigns, we combine
        market research, creative execution, and analytics to ensure maximum
        ROI across every channel.
      </p>

      <ul className="space-y-2 sm:space-y-3 text-white text-base sm:text-lg font-medium">
        <li>✔ SEO & Local Search Optimization</li>
        <li>✔ Social Media Marketing & Paid Ads</li>
        <li>✔ Google Ads, Meta Ads & Campaign Tracking</li>
        <li>✔ Landing Pages & Conversion Optimization</li>
        <li>✔ Analytics, Reporting & Performance Insights</li>
      </ul>
    </motion.div>

  </div>
</section>
  <RoadMap/>

    </div>
  );
};

export default Homepage;
