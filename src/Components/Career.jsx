import { useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";
import careerBackground from "../assets/digi.jpeg";
import {
  FaBriefcase,
  FaDatabase,
  FaHeart,
  FaNodeJs,
  FaReact,
  FaRocket,
  FaUsers,
} from "react-icons/fa";

const jobs = [
  {
    title: "Java Full Stack Developer",
    type: "Full Time",
    location: "Guindy, Chennai",
    description:
      "Build scalable web applications using Java, Spring Boot, React, REST APIs, and MySQL.",
  },
  {
    title: "Frontend Developer",
    type: "Full Time",
    location: "Bangalore",
    description:
      "Develop modern responsive interfaces using React, JavaScript, HTML, CSS, and modern UI technologies.",
  },
  {
    title: "Backend Developer",
    type: "Full Time",
    location: "Bangalore",
    description:
      "Develop scalable backend services and REST APIs using Java, Spring Boot, Node.js, and databases.",
  },
  {
    title: "Software Engineer",
    type: "Full Time",
    location: "Guindy, Chennai",
    description:
      "Design, develop, test, and maintain reliable enterprise software applications.",
  },
  {
    title: "React Developer",
    type: "Full Time",
    location: "Bangalore",
    description:
      "Build high-performance and responsive web applications using React and JavaScript.",
  },
  {
    title: "UI/UX Designer",
    type: "Full Time",
    location: "Guindy, Chennai",
    description:
      "Create modern user experiences, wireframes, prototypes, and professional digital interfaces.",
  },
  {
    title: "QA / Software Testing Engineer",
    type: "Full Time",
    location: "Bangalore",
    description:
      "Perform functional, integration, regression, and automation testing for applications.",
  },
  {
    title: "DevOps Engineer",
    type: "Full Time",
    location: "Guindy, Chennai",
    description:
      "Work with CI/CD, cloud platforms, deployment, monitoring, Docker, and DevOps tools.",
  },
];

const benefits = [
  {
    icon: FaRocket,
    title: "Fast Growth",
    description: "Work on real-world scalable projects and grow fast.",
  },
  {
    icon: FaUsers,
    title: "Great Team",
    description: "Collaborate with skilled and passionate developers.",
  },
  {
    icon: FaBriefcase,
    title: "Flexible Work",
    description: "Flexible working hours and room to do your best work.",
  },
  {
    icon: FaHeart,
    title: "Healthy Culture",
    description: "Positive, supportive, and innovation-driven culture.",
  },
];

const fieldClassName =
  "w-full rounded-lg border border-white/20 bg-[#111a35] px-4 py-3 text-white outline-none transition placeholder:text-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20";

const Career = () => {
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("All Locations");
  const [typeFilter, setTypeFilter] = useState("All");
  const [selectedJob, setSelectedJob] = useState(null);

  const filteredJobs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return jobs.filter((job) => {
      const matchesSearch =
        !query ||
        `${job.title} ${job.description} ${job.location} ${job.type} ${(job.skills ?? []).join(" ")}`
          .toLowerCase()
          .includes(query);
      const matchesLocation =
        locationFilter === "All Locations" || job.location === locationFilter;
      const matchesType = typeFilter === "All" || job.type === typeFilter;

      return matchesSearch && matchesLocation && matchesType;
    });
  }, [search, locationFilter, typeFilter]);

  const openApplication = (job) => setSelectedJob(job);

  const handleApplicationSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const applicantName = formData.get("fullName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const resume = formData.get("resume");
    const coverLetter = formData.get("coverLetter");
    const subject = encodeURIComponent(`Job Application - ${selectedJob.title}`);
    const body = encodeURIComponent(
      `Position: ${selectedJob.title}\nLocation: ${selectedJob.location}\n\nFull Name: ${applicantName}\nEmail: ${email}\nPhone Number: ${phone}\nResume: ${resume.name}\n\nCover Letter:\n${coverLetter}\n\nPlease attach your resume file before sending.`,
    );

    window.location.href = `mailto:evolvesolutionspvtltd@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] px-4 pb-12 pt-24 text-white sm:px-6 sm:pb-20 sm:pt-28 md:px-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] overflow-hidden" aria-hidden="true">
        <Motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${careerBackground})`, willChange: "transform" }}
          animate={{ scale: [1.04, 1.1, 1.04], x: [-6, 6, -6] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(5, 20, 50, 0.30) 0%, rgba(5, 20, 50, 0.30) 60%, rgba(5, 20, 50, 0) 100%)",
          }}
        />
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <Motion.div
          className="absolute left-[12%] top-32 h-24 w-24 rounded-2xl border border-cyan-300/20 bg-cyan-300/5"
          animate={{ y: [0, -10, 0], rotate: [12, 17, 12] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <Motion.div
          className="absolute right-[12%] top-44 h-16 w-16 rounded-full border border-indigo-200/20 bg-indigo-300/5"
          animate={{ y: [0, 12, 0], x: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute left-1/2 top-32 hidden -translate-x-1/2 gap-3 text-cyan-200/40 sm:flex">
          {[FaReact, FaNodeJs, FaDatabase].map((Icon, index) => (
            <Motion.span
              key={index}
              className="rounded-xl border border-white/10 bg-white/5 p-3 text-xl backdrop-blur"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3 + index, repeat: Infinity, ease: "easeInOut", delay: index * 0.25 }}
            >
              <Icon />
            </Motion.span>
          ))}
        </div>
      </div>

      <Motion.header
        className="relative z-10 mx-auto w-full max-w-4xl pt-8 text-center sm:pt-12"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300 sm:text-sm">
          Careers at Evolve
        </p>
        <h1 className="text-3xl font-extrabold text-white sm:text-5xl md:text-6xl">
          JOIN OUR <span className="text-cyan-400">TEAM</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
          Build the future with Evolve. Explore exciting opportunities and grow your career with our technology team.
        </p>
      </Motion.header>

      <section className="relative z-10 mt-14 w-full max-w-6xl sm:mt-20" aria-labelledby="benefits-heading">
        <h2 id="benefits-heading" className="mb-8 text-center text-2xl font-bold text-cyan-400 sm:text-3xl">
          Why Join EvolveSolution
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <Motion.div
                key={item.title}
                className="rounded-xl border border-white/15 bg-white/10 p-6 text-center backdrop-blur-lg transition-colors hover:border-cyan-300/40 hover:bg-white/[0.14]"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Icon className="mx-auto mb-3 text-3xl text-cyan-400" />
                <h3 className="mb-2 font-bold">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.description}</p>
              </Motion.div>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 mt-16 w-full max-w-5xl sm:mt-20" aria-labelledby="open-positions-heading">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Find your next opportunity</p>
          <h2 id="open-positions-heading" className="text-2xl font-bold text-cyan-400 sm:text-3xl">
            Open Positions
          </h2>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-3 rounded-xl border border-white/15 bg-white/[0.07] p-4 backdrop-blur-lg sm:grid-cols-2 sm:p-5 lg:grid-cols-[minmax(0,1fr)_220px_180px]">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-gray-200">Search Jobs</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by title, skill, or job type"
              className={fieldClassName}
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-gray-200">Location</span>
            <select value={locationFilter} onChange={(event) => setLocationFilter(event.target.value)} className={fieldClassName}>
              <option>All Locations</option>
              <option>Guindy, Chennai</option>
              <option>Bangalore</option>
            </select>
          </label>
          <label className="block sm:col-span-2 lg:col-span-1">
            <span className="mb-2 block text-sm font-medium text-gray-200">Job Type</span>
            <select value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)} className={fieldClassName}>
              <option>All</option>
              <option>Full Time</option>
            </select>
          </label>
        </div>

        <p className="mb-4 text-sm text-gray-400" aria-live="polite">
          {filteredJobs.length} {filteredJobs.length === 1 ? "position" : "positions"} available
        </p>
        <div className="space-y-4 sm:space-y-5">
          {filteredJobs.map((job, index) => (
            <Motion.article
              key={job.title}
              className="group rounded-xl border border-white/15 bg-white/[0.08] p-5 shadow-lg shadow-black/10 backdrop-blur-lg transition-[border-color,background-color,box-shadow] duration-300 hover:border-cyan-300/50 hover:bg-white/[0.12] hover:shadow-xl hover:shadow-cyan-950/30 sm:p-6"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: Math.min(index * 0.06, 0.36), ease: "easeOut" }}
              whileHover={{ y: -5, rotateX: 0.5 }}
              style={{ transformPerspective: 900 }}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-cyan-300 transition-transform duration-300 group-hover:translate-x-1 sm:text-xl">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-300">
                    {job.type} <span className="px-1 text-cyan-300">•</span> {job.location}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-gray-300 sm:max-w-2xl">{job.description}</p>
                  {job.skills && (
                    <div className="mt-3 flex flex-wrap gap-2" aria-label="Required skills">
                      {job.skills.map((skill) => (
                        <span key={skill} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 text-xs text-cyan-100">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                  {job.duration && job.stipend && (
                    <p className="mt-3 text-sm text-gray-300">
                      <span>{job.duration}</span>
                      <span className="px-2 text-cyan-300">•</span>
                      <span>{job.stipend}</span>
                    </p>
                  )}
                </div>
                <Motion.button
                  type="button"
                  onClick={() => openApplication(job)}
                  className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-cyan-500 px-5 py-2.5 font-semibold text-slate-950 transition-colors hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-[#171a3d]"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Apply Now
                </Motion.button>
              </div>
            </Motion.article>
          ))}
          {filteredJobs.length === 0 && (
            <div className="rounded-xl border border-white/15 bg-white/[0.07] px-5 py-10 text-center text-gray-300">
              No positions match those filters. Try a different search or selection.
            </div>
          )}
        </div>
      </section>

      <Motion.aside
        className="relative z-10 mt-12 w-full max-w-3xl rounded-xl border border-white/15 bg-white/[0.08] p-6 text-center backdrop-blur-lg sm:mt-16 sm:p-8"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
      >
        <h2 className="text-xl font-bold text-cyan-400 sm:text-2xl">Don't see a suitable role?</h2>
        <p className="mt-2 text-gray-300">
          Send your resume to <a className="text-cyan-300 underline decoration-cyan-300/50 underline-offset-4 hover:text-cyan-200" href="mailto:evolvesolutionspvtltd@gmail.com">evolvesolutionspvtltd@gmail.com</a>
        </p>
      </Motion.aside>

      {selectedJob && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center overflow-y-auto bg-slate-950/75 p-0 backdrop-blur-sm sm:items-center sm:p-5"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedJob(null);
          }}
        >
          <Motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby="application-heading"
            className="my-auto max-h-[95vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-white/15 bg-gradient-to-br from-[#111a35] via-[#191a42] to-[#24205c] p-5 shadow-2xl shadow-black/50 sm:rounded-2xl sm:p-8"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.22 }}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Job application</p>
                <h2 id="application-heading" className="mt-2 text-2xl font-bold text-white">{selectedJob.title}</h2>
                <p className="mt-1 text-sm text-gray-300">{selectedJob.type} <span className="px-1 text-cyan-300">•</span> {selectedJob.location}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedJob(null)}
                aria-label="Close application form"
                className="rounded-lg border border-white/15 px-3 py-2 text-gray-300 transition hover:border-cyan-300/50 hover:text-white"
              >
                Close
              </button>
            </div>

            <form onSubmit={handleApplicationSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-gray-200">Full Name</span>
                  <input name="fullName" type="text" autoComplete="name" required className={fieldClassName} />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-gray-200">Email</span>
                  <input name="email" type="email" autoComplete="email" required className={fieldClassName} />
                </label>
              </div>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-gray-200">Phone Number</span>
                <input name="phone" type="tel" autoComplete="tel" required className={fieldClassName} />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-gray-200">Resume Upload</span>
                <input
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  required
                  className="block w-full rounded-lg border border-white/20 bg-[#111a35] text-sm text-gray-300 file:mr-4 file:border-0 file:bg-cyan-500 file:px-4 file:py-3 file:font-semibold file:text-slate-950 hover:file:bg-cyan-300"
                />
                <span className="mt-1 block text-xs text-gray-400">PDF, DOC, or DOCX. Your email app will ask you to attach this file.</span>
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-gray-200">Cover Letter</span>
                <textarea name="coverLetter" rows="4" required className={`${fieldClassName} resize-y`} />
              </label>
              <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedJob(null)}
                  className="rounded-lg border border-white/20 px-5 py-3 font-semibold text-gray-200 transition hover:bg-white/10"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-[#171a3d]"
                >
                  Apply
                </button>
              </div>
            </form>
          </Motion.section>
        </div>
      )}
    </main>
  );
};

export default Career;