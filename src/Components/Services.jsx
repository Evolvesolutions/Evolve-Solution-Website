


// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import Navbar from "./Navbar";
// import {
//   FaLaptopCode,
//   FaChalkboardTeacher,
//   FaUserTie,
//   FaCodeBranch,
//   FaUsers,
//   FaBullhorn,
//   FaReact,
//   FaNodeJs,
//   FaPython,
//   FaDatabase,
// } from "react-icons/fa";
// import achi1 from "../assets/achi1.jpeg"
// import achi2 from "../assets/achi2.jpeg";
// import achi3 from "../assets/achi3.jpeg";
// import achi4 from "../assets/achi4.jpeg";
// import achi5 from "../assets/achi5..jpeg";
// import achi6 from "../assets/achi6.jpeg";

// const techIcons = [FaReact, FaNodeJs, FaPython, FaDatabase];

// const Services = () => {
//   const [clicks, setClicks] = useState([]);

//   const handleClick = (e) => {
//     const newClick = { x: e.clientX, y: e.clientY, id: Date.now() };
//     setClicks((prev) => [...prev, newClick]);
//     setTimeout(() => {
//       setClicks((prev) => prev.filter((c) => c.id !== newClick.id));
//     }, 1000);
//   };

//   const serviceList = [
//     {
//       title: "IT Consulting & Services",
//       description:
//         "Expert guidance and staffing solutions to scale your IT operations efficiently.",
//       icon: <FaLaptopCode className="text-4xl text-fuchsia-600 mb-4" />,
//     },
//     {
//       title: "IT Training & Placement",
//       description:
//         "Hands-on training programs with placement support to boost careers in tech.",
//       icon: <FaChalkboardTeacher className="text-4xl text-fuchsia-600 mb-4" />,
//     },
//     {
//       title: "Tech Courses",
//       description:
//         "Learn trending technologies with structured courses designed by industry experts.",
//       icon: <FaCodeBranch className="text-4xl text-fuchsia-600 mb-4" />,
//     },
//     {
//       title: "Manpower Solutions",
//       description:
//         "Providing skilled manpower to meet your project or staffing needs in IT, production, and manufacturing industries.",
//       icon: <FaUsers className="text-4xl text-fuchsia-600 mb-4" />,
//     },
//     {
//       title: "Internship Programs",
//       description:
//         "Our IT Internship Program at SoftSphere offers real-world project experience and exposure to modern technologies.",
//       icon: <FaUserTie className="text-4xl text-fuchsia-600 mb-4" />,
//     },
//     {
//       title: "Digital Marketing",
//       description:
//         "We help businesses grow their online presence through SEO, social media, and data-driven digital strategies.",
//       icon: <FaBullhorn className="text-4xl text-fuchsia-600 mb-4" />,
//     },
//   ];

//   const achievementImages = [
    
//     achi1,
//     achi2,
//     achi3,
//     achi4,
//     achi5,
//     achi6,
//   ];

//   return (
//     <div
//       id="Services"
//       className="relative w-full min-h-screen overflow-hidden bg-fuchsia-600 text-black"
//       onClick={handleClick}
//     >
//       <Navbar />

//       {/* Tech Rain Animation */}
//       {Array.from({ length: 14 }).map((_, i) => {
//         const Icon = techIcons[i % techIcons.length];
//         const randomX = Math.random() * 100;
//         const duration = 6 + Math.random() * 6;
//         return (
//           <motion.div
//             key={i}
//             className="absolute text-fuchsia-500 text-3xl md:text-4xl opacity-80 drop-shadow-lg z-20"
//             style={{
//               left: `${randomX}%`,
//               top: "-15%",
//             }}
//             animate={{
//               y: ["0vh", "110vh"],
//               rotate: [0, 360],
//             }}
//             transition={{
//               duration,
//               repeat: Infinity,
//               delay: Math.random() * 5,
//               ease: "linear",
//             }}
//           >
//             <Icon />
//           </motion.div>
//         );
//       })}

//       {/* Click Ripple Animation */}
//       {clicks.map((click) => (
//         <motion.div
//           key={click.id}
//           className="absolute w-10 h-10 rounded-full bg-yellow-400 opacity-80"
//           style={{ top: click.y - 20, left: click.x - 20 }}
//           initial={{ scale: 0, opacity: 1 }}
//           animate={{ scale: 2, opacity: 0 }}
//           transition={{ duration: 1 }}
//         />
//       ))}

//       {/* Main Section */}
//       <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 relative z-10">
//         <motion.h1
//           className="text-5xl md:text-6xl font-extrabold mb-12 text-center"
//           initial={{ opacity: 0, y: -80 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//         >
//           Our{" "}
//           <motion.span
//             className="text-white inline-block"
//             animate={{
//               scale: [1, 1.2, 1],
//               textShadow: ["0 0 5px", "0 0 20px", "0 0 5px"],
//             }}
//             transition={{
//               duration: 1.5,
//               repeat: Infinity,
//               repeatType: "mirror",
//             }}
//           >
//             Services
//           </motion.span>
//         </motion.h1>

//         {/* Service Boxes */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full mt-8">
//           {serviceList.map((service, index) => (
//             <motion.div
//               key={index}
//               className="p-6 border-2 border-black rounded-xl bg-white text-black hover:shadow-[0_0_40px_rgba(192,38,211,0.8)] hover:scale-105 transition-all duration-300 cursor-pointer"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: index * 0.1 }}
//             >
//               <div className="flex flex-col items-center text-center">
//                 {service.icon}
//                 <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
//                 <p className="text-md font-medium">{service.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Achievement Section */}
//     <section className="w-full py-20 bg-white text-black relative z-10">
//   {/* Title */}
//   <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
//     Our Achievements
//   </h2>

//   {/* Description */}
//   <p className="max-w-3xl mx-auto text-center text-lg md:text-xl font-medium mb-14 text-gray-700">
//     We have successfully conducted industry-oriented{" "}
//     <span className="text-fuchsia-600 font-semibold">
//       internship programs, professional IT training, live project development,
//       and placement assistance
//     </span>{" "}
//     to empower students and professionals with real-world experience and
//     career-ready skills.
//   </p>

//   <div className="overflow-hidden max-w-6xl mx-auto space-y-10">
//     {/* Row 1 */}
//     <motion.div
//       className="flex items-center gap-8"
//       animate={{ x: ["0%", "-50%"] }}
//       transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
//     >
//       {[...achievementImages, ...achievementImages].map((img, idx) => (
//         <div
//           key={idx}
//           className="min-w-[220px] h-160px bg-white rounded-xl 
//                      flex items-center justify-center 
//                      border-2 border-fuchsia-200
//                      shadow-lg hover:scale-105 transition-transform duration-300"
//         >
//           <img
//             src={img}
//             alt={`achievement-${idx}`}
//             className="w-full h-full object-contain p-4"
//           />
//         </div>
//       ))}
//     </motion.div>

//     {/* Row 2 (slower & opposite feel) */}
//     {/* <motion.div
//       className="flex items-center gap-8"
//       animate={{ x: ["-50%", "0%"] }}
//       transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
//     >
//       {[...achievementImages, ...achievementImages].map((img, idx) => (
//         <div
//           key={`row2-${idx}`}
//           className="min-w-[220px] h-160px bg-white rounded-xl 
//                      flex items-center justify-center 
//                      border-2 border-fuchsia-200
//                      shadow-lg hover:scale-105 transition-transform duration-300"
//         >
//           <img
//             src={img}
//             alt={`achievement-row2-${idx}`}
//             className="w-full h-full object-contain p-4"
//           />
//         </div>
//       ))}
//     </motion.div> */}
//   </div>
// </section>

//     </div>
//   );
// };

// export default Services;


import { useState } from "react";
import { motion as Motion, useReducedMotion } from "framer-motion";
import { FaArrowRight, FaCodeBranch, FaLaptopCode, FaUsers } from "react-icons/fa";
import "./Services.css";
import brainImage from "../assets/circle.png";
import dataAnalystImage from "../assets/data-analyst.jpg";

const technologies = [
  {
    key: "ai",
    title: "Artificial Intelligence",
    category: "ARTIFICIAL INTELLIGENCE",
    description: "Smart systems that learn from your data",
    detailTitle: "Artificial Intelligence",
    detailDescription: "Smart systems that learn from your data to automate decisions.",
    features: ["Machine Learning", "Deep Learning", "Natural Language Processing"],
    cta: "Explore Artificial Intelligence",
    isAiTitle: true,
    icon: <FaLaptopCode />,
    image: "https://cdn.mos.cms.futurecdn.net/cuJ2nHdA2cLngX4bhsHsye-1920-80.jpg",
  },
  {
    key: "data",
    title: "Data & Analytics",
    category: "DATA & ANALYTICS",
    description: "Turn raw data into insights your team can act on.",
    detailTitle: "Data & Analytics",
    detailDescription: "Turn raw data into insights your team can act on.",
    features: ["Big Data", "Business Intelligence", "Data Analysis"],
    cta: "Explore Data & Analytics",
    icon: <FaCodeBranch />,
    image: dataAnalystImage,
  },
  {
    key: "genai",
    title: "Generative AI",
    category: "GENERATIVE AI",
    description: "Chatbots and AI assistants built on large language models.",
    detailTitle: "Generative AI",
    detailDescription: "Chatbots and AI assistants built on large language models.",
    features: ["Large Language Models", "Chatbots", "AI Assistants"],
    cta: "Explore Generative AI",
    isAiTitle: true,
    icon: <FaLaptopCode />,
    image: brainImage,
  },
  {
    key: "ml",
    title: "Machine Learning",
    category: "ARTIFICIAL INTELLIGENCE",
    description: "Models that predict trends and improve over time.",
    detailTitle: "Machine Learning",
    detailDescription: "Models that predict trends and improve over time.",
    features: ["Predictive Models", "Pattern Recognition", "Model Evaluation"],
    cta: "Explore Machine Learning",
    isAiTitle: true,
    icon: <FaLaptopCode />,
    image: "https://thumbs.dreamstime.com/b/artificial-intelligence-chipset-processor-circuit-board-working-data-analysis-machine-learning-futuristic-technology-293459801.jpg",
  },
  {
    key: "cloud",
    title: "Cloud Technologies",
    category: "CLOUD TECHNOLOGIES",
    description: "Secure, scalable infrastructure on AWS, Azure and GCP.",
    detailTitle: "Cloud Technologies",
    detailDescription: "Secure, scalable infrastructure on AWS, Azure and GCP.",
    features: ["Cloud Infrastructure", "Application Deployment", "DevOps"],
    cta: "Explore Cloud Technologies",
    icon: <FaCodeBranch />,
    image: "https://cioaxis.com/wp-content/uploads/2024/03/Cloudflare-Enters-Multicloud-Networking-Market.jpg",
  },
  {
    key: "security",
    title: "Cybersecurity",
    category: "CYBERSECURITY",
    description: "Protect your applications, data and networks.",
    detailTitle: "Cybersecurity",
    detailDescription: "Protect your applications, data and networks.",
    features: ["Monitoring", "Encryption", "Compliance"],
    cta: "Explore Cybersecurity",
    icon: <FaUsers />,
    image: "https://tse4.mm.bing.net/th/id/OIP.r8t1x6Z6cAV7jcfB4Jd_1AHaEO?r=0&pid=Api&h=220&P=0",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 36, rotateX: -7, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

function ServiceCard({ service, reducedMotion }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    if (reducedMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const pointerX = (event.clientX - bounds.left) / bounds.width;
    const pointerY = (event.clientY - bounds.top) / bounds.height;
    setTilt({
      x: (0.5 - pointerY) * 9,
      y: (pointerX - 0.5) * 9,
    });
  };

  return (
    <div className="service-card-shell">
      <Motion.article
        className={`service-card${service.isAiTitle ? " is-ai-title" : ""}`}
        data-service={service.key}
        role="link"
        tabIndex={0}
        aria-label={`View ${service.title} details`}
        variants={reducedMotion ? undefined : cardVariants}
        style={{
          rotateX: tilt.x,
          rotateY: tilt.y,
          transformPerspective: 1100,
        }}
        whileTap={reducedMotion ? undefined : { scale: 0.99 }}
        transition={{
          scale: { type: "spring", stiffness: 260, damping: 22 },
          rotateX: { type: "spring", stiffness: 180, damping: 22 },
          rotateY: { type: "spring", stiffness: 180, damping: 22 },
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      >
        <img
          className="service-card-image"
          src={service.image}
          alt=""
          aria-hidden="true"
          onError={(event) => {
            event.currentTarget.hidden = true;
            const card = event.currentTarget.closest(".service-card");
            if (card) card.classList.add("has-image-fallback");
          }}
        />
        <div className="service-card-overlay" />
        <div className="service-card-icon" aria-hidden="true">{service.icon}</div>
        <div className="service-card-content">
          <span className="service-card-category">{service.category}</span>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <span className="service-card-arrow" aria-hidden="true">
            <FaArrowRight aria-hidden="true" />
          </span>
        </div>
      </Motion.article>
    </div>
  );
}

const Services = () => {
  const [clicks, setClicks] = useState([]);
  const reducedMotion = useReducedMotion();

  const handleClick = (e) => {
    const newClick = {
      x: e.clientX,
      y: e.clientY,
      id: Date.now(),
    };

    setClicks((prev) => [...prev, newClick]);

    setTimeout(() => {
      setClicks((prev) =>
        prev.filter((click) => click.id !== newClick.id)
      );
    }, 1000);
  };

  const achievements = [
    {
      icon: "🏆",
      stat: "500+",
      title: "Students Trained",
      desc: "Successfully trained over 500 students in cutting-edge technologies with hands-on, industry-relevant curriculum.",
    },
    {
      icon: "💼",
      stat: "300+",
      title: "Placements Done",
      desc: "Placed 300+ professionals in top-tier IT companies across India through our dedicated placement cell.",
    },
    {
      icon: "🚀",
      stat: "50+",
      title: "Live Projects Delivered",
      desc: "Successfully delivered over 50 live client projects, giving trainees real-world exposure and portfolio strength.",
    },
    {
      icon: "🤝",
      stat: "30+",
      title: "Industry Partners",
      desc: "Partnered with 30+ leading companies to ensure our students get the best internship and job opportunities.",
    },
    {
      icon: "🎓",
      stat: "10+",
      title: "Expert Mentors",
      desc: "Our team of 10+ industry veterans and certified trainers bring decades of combined experience to every batch.",
    },
    {
      icon: "⭐",
      stat: "98%",
      title: "Satisfaction Rate",
      desc: "98% of our students and corporate clients rate their experience as excellent or highly satisfactory.",
    },
  ];

  return (
    <div
      onClick={handleClick}
      className="services-page min-h-screen text-white relative overflow-hidden"
    >
      {/* CLICK GLOW */}
      {clicks.map((click) => (
        <Motion.div
          key={click.id}
          className="absolute w-10 h-10 rounded-full bg-cyan-400 opacity-60"
          style={{
            top: click.y - 20,
            left: click.x - 20,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 1 }}
        />
      ))}

      {/* TECHNOLOGIES SECTION */}
      <section
        id="services"
        className="services-section technologies-section px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20 relative z-10"
      >
        <div className="technology-stats" aria-label="Evolve Solutions at a glance">
          <div className="technology-stat">
            <strong>50+</strong>
            <span className="technology-stat-bar" aria-hidden="true" />
            <span>Projects delivered</span>
          </div>
          <div className="technology-stat">
            <strong>20+</strong>
            <span className="technology-stat-bar" aria-hidden="true" />
            <span>Technologies</span>
          </div>
          <div className="technology-stat">
            <strong>10+</strong>
            <span className="technology-stat-bar" aria-hidden="true" />
            <span>Countries served</span>
          </div>
        </div>

        <Motion.header
          className="services-heading"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="services-eyebrow">EVOLVE SOLUTION</p>
          <h1>
            Our <span>Technologies</span>
          </h1>
          <p className="services-subtitle">
            We deliver innovative technology solutions to help your business grow, transform and stay ahead in a digital world.
          </p>
        </Motion.header>

        {/* Faint cyan waves sit behind the technology cards. */}
        <svg
          className="services-wave-lines"
          viewBox="0 0 1440 700"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path className="services-wave services-wave-blue wave-one" d="M-80 180 C170 35 310 330 560 190 S940 55 1190 200 1450 325 1540 150" />
          <path className="services-wave services-wave-blue wave-two" d="M-90 300 C140 450 360 105 600 285 S990 455 1230 270 1450 175 1540 360" />
          <path className="services-wave services-wave-blue wave-three" d="M-90 490 C180 310 390 615 650 450 S1020 285 1260 460 1460 570 1540 425" />
        </svg>

        <div className="services-experience">
          <Motion.div
            className="services-grid"
            id="services-grid"
            initial={reducedMotion ? false : "hidden"}
            whileInView={reducedMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.12 }}
          >
            {technologies.map((service) => (
              <div key={service.title} className="service-card-slot">
                <ServiceCard service={service} reducedMotion={reducedMotion} />
              </div>
            ))}
          </Motion.div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">

        <Motion.h2
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 text-cyan-400 px-2"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Achievements
        </Motion.h2>

        <Motion.p
          className="text-center text-gray-300 text-lg max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We take pride in our milestones — from shaping careers to delivering
          real-world solutions. Here's what we've accomplished so far.
        </Motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((item, index) => (
            <Motion.div
              key={index}
              className="
                rounded-2xl
                border border-white/20
                bg-white/10
                backdrop-blur-lg
                p-8
                flex flex-col items-center text-center
                hover:border-cyan-400
                hover:shadow-xl
                hover:shadow-cyan-400/20
                transition duration-300
                group
              "
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-5xl mb-4">{item.icon}</div>

              <Motion.div
                className="text-4xl font-extrabold text-cyan-400 mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              >
                {item.stat}
              </Motion.div>

              <h3 className="text-xl font-bold mb-3 text-white">
                {item.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </Motion.div>
          ))}
        </div>

      </section>

    </div>
  );
};

export default Services;