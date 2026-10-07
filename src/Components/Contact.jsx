


// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
// import toast from "react-hot-toast";

// const techIcons = [FaReact, FaNodeJs, FaPython, FaDatabase];

// const Contact = () => {
//   const [clicks, setClicks] = useState([]);

//   // ✅ form state (logic only)
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     organization: "",
//     contact: "",
//     region: "",
//     inquiry: "",
//     message: "",
//   });

//   const handleClick = (e) => {
//     const newClick = { x: e.clientX, y: e.clientY, id: Date.now() };
//     setClicks((prev) => [...prev, newClick]);
//     setTimeout(() => {
//       setClicks((prev) => prev.filter((c) => c.id !== newClick.id));
//     }, 1000);
//   };

//   // ✅ input handler (no UI change)
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // ✅ submit validation
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { name, email, contact, region, inquiry } = formData;

//     // ❌ validation (organization NOT required)
//     if (!name || !email || !contact || !region || !inquiry) {
//       toast.error("Please fill all required fields", { duration: 3000 });
//       return;
//     }

//     // ✅ success
//     toast.success(
//       "Submitted successfully! Our team will contact you soon.",
//       { duration: 4000 }
//     );
//   };

//   return (
//     <div
//       id="contact"
//       className="min-h-screen bg-linear-to-br bg-fuchsia-600 text-white flex flex-col justify-center items-center px-4 py-20 relative overflow-hidden"
//       onClick={handleClick}
//     >
//       {/* 🔹 Tech Rain Animation */}
//       {Array.from({ length: 14 }).map((_, i) => {
//         const Icon = techIcons[i % techIcons.length];
//         return (
//           <motion.div
//             key={i}
//             className="absolute text-white text-3xl md:text-4xl opacity-80 drop-shadow-lg z-20"
//             style={{ left: `${Math.random() * 100}%`, top: "-15%" }}
//             animate={{ y: ["0vh", "110vh"], rotate: [0, 360] }}
//             transition={{
//               duration: 6 + Math.random() * 6,
//               repeat: Infinity,
//               delay: Math.random() * 5,
//               ease: "linear",
//             }}
//           >
//             <Icon />
//           </motion.div>
//         );
//       })}

//       {/* 🔹 Click Ripple Effect */}
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

//       {/* 🔹 Heading */}
//       <motion.h1
//         className="text-5xl md:text-6xl font-extrabold mb-2 text-center"
//         initial={{ opacity: 0, y: -80 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2, ease: "easeOut" }}
//       >
//         <motion.span
//           className="text-black inline-block"
//           animate={{
//             scale: [1, 1.2, 1],
//             textShadow: ["0 0 5px ", "0 0 20px ", "0 0 5px "],
//           }}
//           transition={{
//             duration: 1.5,
//             repeat: Infinity,
//             repeatType: "mirror",
//           }}
//         >
//          Contact
//         </motion.span>{" "}
//         Us
//       </motion.h1>

//       {/* 🔹 Contact Box */}
//       <motion.div
//         className="w-full md:w-3/4 lg:w-3/4 bg-white text-black rounded-2xl border-2 border-black shadow-2xl p-8 md:p-12 z-10"
//         initial={{ opacity: 0, y: 80 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <p className="text-center text-lg text-gray-700 mb-10 font-medium">
//           <span className="text-black font-bold">Contact us </span>
//           “Let’s build something innovative together.”
//         </p>

//         {/* ✅ FORM (logic added only) */}
//         <form
//           onSubmit={handleSubmit}
//           className="grid grid-cols-1 md:grid-cols-2 gap-6"
//         >
//           {/* Left Column */}
//           <div className="flex flex-col space-y-4">
//             <input
//               name="name"
//               type="text"
//               placeholder="Name*"
//               value={formData.name}
//               onChange={handleChange}
//               className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />
//             <input
//               name="email"
//               type="email"
//               placeholder="Email*"
//               value={formData.email}
//               onChange={handleChange}
//               className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />
//             <input
//               name="organization"
//               type="text"
//               placeholder="Organization(Optional)"
//               value={formData.organization}
//               onChange={handleChange}
//               className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />
//             <input
//               name="contact"
//               type="text"
//               placeholder="Contact Number*"
//               value={formData.contact}
//               onChange={handleChange}
//               className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />
//           </div>

//           {/* Right Column */}
//           <div className="flex flex-col space-y-4">
//             <select
//               name="region"
//               value={formData.region}
//               onChange={handleChange}
//               className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             >
//               <option value="">Region*</option>
//               <option>Asia</option>
//               <option>Europe</option>
//               <option>America</option>
//               <option>Australia</option>
//             </select>

//             <select
//               name="inquiry"
//               value={formData.inquiry}
//               onChange={handleChange}
//               className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             >
//               <option value="">Inquiry Type*</option>
//               <option>General Inquiry</option>
//               <option>Business Partnership</option>
//               <option>Career Opportunities</option>
//               <option>Technical Support</option>
//             </select>

//             <textarea
//               name="message"
//               placeholder="Message"
//               rows="5"
//               value={formData.message}
//               onChange={handleChange}
//               className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             ></textarea>
//           </div>

//           {/* Submit */}
//           <div className="md:col-span-2 flex justify-center mt-8">
//             <motion.button
//               type="submit"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className=" text-black bg-fuchsia-600 font-bold px-8 py-3 rounded-xl border border-black hover:bg-fuchsia-800 transition-all"
//             >
//               Submit
//             </motion.button>
//           </div>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default Contact;



import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaCheckCircle, FaDatabase, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import toast from "react-hot-toast";
import "./Contact.css";

const techIcons = [
  { Icon: FaReact, left: "8%", top: "17%", depth: 0.8, duration: "24s", delay: "-4s" },
  { Icon: FaNodeJs, left: "88%", top: "24%", depth: 0.5, duration: "27s", delay: "-13s" },
  { Icon: FaPython, left: "14%", top: "72%", depth: 0.65, duration: "21s", delay: "-8s" },
  { Icon: FaDatabase, left: "82%", top: "78%", depth: 0.9, duration: "29s", delay: "-17s" },
  { Icon: FaReact, left: "52%", top: "11%", depth: 0.35, duration: "26s", delay: "-10s" },
  { Icon: FaNodeJs, left: "94%", top: "54%", depth: 0.55, duration: "23s", delay: "-2s" },
];

const selectOptions = {
  region: ["Asia", "Europe", "America", "Australia"],
  inquiry: [
    "General Inquiry",
    "Business Partnership",
    "Career Opportunities",
    "Technical Support",
  ],
};

const requiredFields = ["name", "email", "contact", "region", "inquiry"];

const isFieldValid = (name, value) => {
  if (name === "name") return value.trim().length > 0;
  if (name === "email") return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  if (name === "contact") return /^\+?[\d\s().-]{7,}$/.test(value.trim());
  if (name === "region" || name === "inquiry") return Boolean(value);
  return true;
};

function TextField({ name, label, type = "text", value, onChange, invalid, index }) {
  const valid = value.length > 0 && isFieldValid(name, value);
  const fieldId = name === "contact" ? "contact-number" : name;

  return (
    <motion.div
      className={`contact-field-entry contact-field${value ? " has-value" : ""}${invalid ? " is-invalid" : ""}`}
      style={{ "--field-delay": `${index * 90}ms` }}
    >
      <input
        id={fieldId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        autoComplete={name === "contact" ? "tel" : name}
        required={requiredFields.includes(name)}
        aria-invalid={invalid}
        className="contact-control"
      />
      <label htmlFor={fieldId}>{label}</label>
      {valid && <FaCheckCircle className="contact-valid-icon" aria-label="Valid" />}
    </motion.div>
  );
}

function AnimatedSelect({ name, label, value, options, invalid, onChange, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapperRef = useRef(null);
  const valid = Boolean(value);

  useEffect(() => {
    const closeOnOutsidePointer = (event) => {
      if (!wrapperRef.current?.contains(event.target)) setIsOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    return () => document.removeEventListener("pointerdown", closeOnOutsidePointer);
  }, []);

  const selectOption = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setIsOpen(false);
      return;
    }

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (!isOpen) setIsOpen(true);
      const direction = event.key === "ArrowDown" ? 1 : -1;
      setActiveIndex((current) => (current + direction + options.length) % options.length);
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (isOpen) selectOption(options[activeIndex]);
      else setIsOpen(true);
    }
  };

  return (
    <motion.div
      ref={wrapperRef}
      className={`contact-field-entry contact-field contact-select${value ? " has-value" : ""}${invalid ? " is-invalid" : ""}`}
      style={{ "--field-delay": `${index * 90}ms` }}
    >
      <label id={`${name}-label`} htmlFor={`${name}-control`}>{label}</label>
      <button
        id={`${name}-control`}
        type="button"
        className="contact-control contact-select-trigger"
        role="combobox"
        aria-labelledby={`${name}-label`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={`${name}-options`}
        aria-activedescendant={isOpen ? `${name}-option-${activeIndex}` : undefined}
        aria-required="true"
        aria-invalid={invalid}
        onClick={() => setIsOpen((open) => !open)}
        onKeyDown={handleKeyDown}
      >
        <span>{value || `Choose ${label.replace("*", "").toLowerCase()}`}</span>
        <span className="contact-select-chevron" aria-hidden="true">⌄</span>
      </button>
      <input type="hidden" name={name} value={value} />
      {valid && <FaCheckCircle className="contact-valid-icon" aria-label="Valid" />}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            id={`${name}-options`}
            className="contact-select-menu"
            role="listbox"
            aria-labelledby={`${name}-label`}
            initial={{ opacity: 0, y: -7, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -5, scale: 0.98 }}
            transition={{ duration: 0.17, ease: "easeOut" }}
          >
            {options.map((option, optionIndex) => (
              <li
                id={`${name}-option-${optionIndex}`}
                key={option}
                role="option"
                aria-selected={value === option}
                className={activeIndex === optionIndex ? "is-active" : ""}
                onMouseEnter={() => setActiveIndex(optionIndex)}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => selectOption(option)}
              >
                {option}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    contact: "",
    region: "",
    inquiry: "",
    message: "",
  });
  const [invalidFields, setInvalidFields] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ripple, setRipple] = useState(null);
  const contactRef = useRef(null);
  const cardRef = useRef(null);
  const formRef = useRef(null);
  const submitTimerRef = useRef(null);

  useEffect(() => () => window.clearTimeout(submitTimerRef.current), []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setInvalidFields((current) => current.filter((field) => field !== name));
    setIsSubmitted(false);
  };

  const handleSelectChange = (name, value) => {
    setFormData((current) => ({ ...current, [name]: value }));
    setInvalidFields((current) => current.filter((field) => field !== name));
    setIsSubmitted(false);
  };

  const handleBackgroundPointerMove = (event) => {
    if (!contactRef.current || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const bounds = contactRef.current.getBoundingClientRect();
    const offsetX = (event.clientX - bounds.left - bounds.width / 2) / bounds.width;
    const offsetY = (event.clientY - bounds.top - bounds.height / 2) / bounds.height;

    contactRef.current.querySelectorAll("[data-parallax]").forEach((icon) => {
      const depth = Number(icon.dataset.parallax);
      icon.style.setProperty("--parallax-x", `${offsetX * depth * -12}px`);
      icon.style.setProperty("--parallax-y", `${offsetY * depth * -12}px`);
    });
  };

  const handleCardPointerMove = (event) => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const pointX = (event.clientX - bounds.left) / bounds.width;
    const pointY = (event.clientY - bounds.top) / bounds.height;
    event.currentTarget.style.setProperty("--card-tilt-x", `${(0.5 - pointY) * 4}deg`);
    event.currentTarget.style.setProperty("--card-tilt-y", `${(pointX - 0.5) * 5}deg`);
  };

  const resetCardTilt = (event) => {
    event.currentTarget.style.setProperty("--card-tilt-x", "0deg");
    event.currentTarget.style.setProperty("--card-tilt-y", "0deg");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    const invalid = requiredFields.filter((field) => !isFieldValid(field, formData[field]));
    setInvalidFields(invalid);
    if (invalid.length) {
      toast.error("Please check the highlighted required fields.", { duration: 3000 });
      document.getElementById(invalid[0] === "region" || invalid[0] === "inquiry" ? `${invalid[0]}-control` : invalid[0])?.focus();
      return;
    }

    setIsSubmitting(true);
    setIsSubmitted(false);
    submitTimerRef.current = window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Submitted successfully! Our team will contact you soon.", { duration: 4000 });
    }, 750);
  };

  const handleSubmitButtonClick = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    setRipple({
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
      id: Date.now(),
    });
  };

  return (
    <main
      id="contact"
      ref={contactRef}
      className="contact-page min-h-screen text-white flex flex-col justify-center items-center px-4 sm:px-6 pt-24 sm:pt-28 pb-12 sm:pb-20 relative overflow-hidden"
      onPointerMove={handleBackgroundPointerMove}
    >
      <div className="contact-orb contact-orb-one" aria-hidden="true" />
      <div className="contact-orb contact-orb-two" aria-hidden="true" />
      <div className="contact-orb contact-orb-three" aria-hidden="true" />

      <div className="contact-tech-layer" aria-hidden="true">
        {techIcons.map(({ Icon, left, top, depth, duration, delay }, index) => (
          <div
            className="contact-tech-icon"
            key={`${Icon.name}-${index}`}
            data-parallax={depth}
            style={{ left, top, "--float-duration": duration, "--float-delay": delay }}
          >
            <span className="contact-tech-glyph"><Icon /></span>
          </div>
        ))}
      </div>

      <motion.h1
        className="contact-heading relative z-10 text-center"
        aria-label="Contact Us"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <span className="contact-heading-shimmer" data-text="Contact Us">Contact Us</span>
      </motion.h1>

      <motion.div
        ref={cardRef}
        className="contact-card-wrap relative z-10 w-full max-w-4xl"
        initial={{ opacity: 0, scale: 0.95, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.16, ease: "easeOut" }}
        onPointerMove={handleCardPointerMove}
        onPointerLeave={resetCardTilt}
      >
        <section className="contact-card">
          <div className="contact-card-shine" aria-hidden="true" />
          <div className="contact-card-content">
            <p className="contact-intro">Let’s build something innovative together.</p>

            <form ref={formRef} onSubmit={handleSubmit} noValidate className="contact-form">
              <div className="contact-form-column">
                <TextField name="name" label="Name*" value={formData.name} onChange={handleChange} invalid={invalidFields.includes("name")} index={0} />
                <TextField name="email" label="Email*" type="email" value={formData.email} onChange={handleChange} invalid={invalidFields.includes("email")} index={1} />
                <TextField name="organization" label="Organization (Optional)" value={formData.organization} onChange={handleChange} invalid={false} index={2} />
                <TextField name="contact" label="Contact Number*" type="tel" value={formData.contact} onChange={handleChange} invalid={invalidFields.includes("contact")} index={3} />
              </div>

              <div className="contact-form-column">
                <AnimatedSelect
                  name="region"
                  label="Region*"
                  value={formData.region}
                  options={selectOptions.region}
                  invalid={invalidFields.includes("region")}
                  onChange={(value) => handleSelectChange("region", value)}
                  index={0}
                />
                <AnimatedSelect
                  name="inquiry"
                  label="Inquiry Type*"
                  value={formData.inquiry}
                  options={selectOptions.inquiry}
                  invalid={invalidFields.includes("inquiry")}
                  onChange={(value) => handleSelectChange("inquiry", value)}
                  index={1}
                />
                <motion.div className={`contact-field-entry contact-field contact-message${formData.message ? " has-value" : ""}`} style={{ "--field-delay": "180ms" }}>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder=" "
                    value={formData.message}
                    onChange={handleChange}
                    className="contact-control"
                  />
                  <label htmlFor="message">Message</label>
                </motion.div>
              </div>

              <div className="contact-submit-row">
                <div className="contact-submit-wrap">
                  <button
                    type="submit"
                    className={`contact-submit${isSubmitted ? " is-success" : ""}`}
                    disabled={isSubmitting}
                    onClick={handleSubmitButtonClick}
                  >
                    {ripple && <span key={ripple.id} className="contact-ripple" style={{ left: ripple.x, top: ripple.y }} />}
                    {isSubmitting ? (
                      <><span className="contact-spinner" aria-hidden="true" /> Sending</>
                    ) : isSubmitted ? (
                      <><FaCheckCircle aria-hidden="true" /> Sent</>
                    ) : (
                      "Submit"
                    )}
                  </button>
                  {isSubmitted && (
                    <div className="contact-sparkles" aria-hidden="true">
                      {Array.from({ length: 8 }, (_, index) => (
                        <span key={index} style={{ "--sparkle-index": index }}>✦</span>
                      ))}
                    </div>
                  )}
                </div>
                <AnimatePresence>
                  {isSubmitted && (
                    <motion.p
                      className="contact-success-message"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.35 }}
                      role="status"
                    >
                      Thank you. Our team will be in touch soon.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>
        </section>
      </motion.div>
    </main>
  );
};

export default Contact;