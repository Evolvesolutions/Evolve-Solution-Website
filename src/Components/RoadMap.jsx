import React from "react";
import { motion } from "framer-motion";
import {
  FaClipboardList,
  FaLightbulb,
  FaCode,
  FaVial,
  FaRocket,
  FaHeadset,
} from "react-icons/fa";

const roadmapSteps = [
  {
    title: "Requirement Analysis",
    description:
      "We gather and analyze your business requirements, goals, and technical needs to define a clear project scope and strategy.",
    icon: <FaClipboardList />,
  },
  {
    title: "Planning & Architecture",
    description:
      "Our architects design scalable system architecture, database structure, and select the best technology stack.",
    icon: <FaLightbulb />,
  },
  {
    title: "Development",
    description:
      "Our expert developers build secure, scalable, and high-performance applications using modern technologies.",
    icon: <FaCode />,
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "We perform rigorous testing to ensure performance, security, reliability, and bug-free delivery.",
    icon: <FaVial />,
  },
  {
    title: "Deployment",
    description:
      "We deploy your application to production using secure cloud infrastructure and CI/CD pipelines.",
    icon: <FaRocket />,
  },
  {
    title: "Support & Maintenance",
    description:
      "We provide ongoing support, monitoring, updates, and performance optimization.",
    icon: <FaHeadset />,
  },
];

const RoadMap = () => {
  return (
    <section
      className="
      w-full
      py-16 sm:py-20
      bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81]
      text-white
      px-4 sm:px-6 md:px-10
      relative
      overflow-hidden
    "
    >
      {/* TITLE */}
      <motion.h2
        className="
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl
          font-extrabold
          text-center
          mb-12 sm:mb-16
        "
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Project Delivery{" "}
        <motion.span
          className="text-cyan-400"
          animate={{
            textShadow: [
              "0 0 10px #06b6d4",
              "0 0 30px #06b6d4",
              "0 0 10px #06b6d4",
            ],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Roadmap
        </motion.span>
      </motion.h2>

      {/* TIMELINE CONTAINER */}
      <div className="max-w-6xl mx-auto relative">

        {/* CENTER LINE (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-cyan-400/40"></div>

        {/* LEFT LINE (Mobile) */}
        <div className="md:hidden absolute left-4 top-0 bottom-0 w-1 bg-cyan-400/40"></div>

        <div className="space-y-10 sm:space-y-14">

          {roadmapSteps.map((step, index) => {

            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className={`
                  relative flex flex-col md:flex-row items-start md:items-center
                  ${isEven ? "md:flex-row" : "md:flex-row-reverse"}
                `}
                initial={{
                  opacity: 0,
                  x: isEven ? -80 : 80,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.7,
                  type: "spring",
                }}
                viewport={{ once: true }}
              >

                {/* DOT */}
                <div
                  className="
                  absolute md:left-1/2
                  left-4
                  transform md:-translate-x-1/2
                  w-5 h-5
                  bg-cyan-400
                  rounded-full
                  border-4 border-[#0f172a]
                  shadow-lg shadow-cyan-400/50
                  z-10
                "
                />

                {/* CARD */}
                <div className="md:w-1/2 w-full pl-12 md:pl-0 pr-0 md:pr-8">

                  <motion.div
                    whileHover={{
                      scale: 1.04,
                      boxShadow:
                        "0 0 25px rgba(6,182,212,0.4)",
                    }}
                    className="
                      bg-white/10
                      backdrop-blur-lg
                      border border-white/20
                      rounded-xl
                      p-5 sm:p-6
                      transition-all duration-300
                    "
                  >

                    {/* ICON */}
                    <motion.div
                      className="
                        text-cyan-400
                        text-2xl sm:text-3xl
                        mb-3
                      "
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                      }}
                    >
                      {step.icon}
                    </motion.div>

                    {/* TITLE */}
                    <h3
                      className="
                        text-lg sm:text-xl
                        font-bold
                        mb-2
                      "
                    >
                      {step.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className="
                        text-gray-300
                        text-sm sm:text-base
                        leading-relaxed
                      "
                    >
                      {step.description}
                    </p>

                  </motion.div>

                </div>

                {/* EMPTY SIDE (Desktop spacing) */}
                <div className="hidden md:block md:w-1/2"></div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default RoadMap;