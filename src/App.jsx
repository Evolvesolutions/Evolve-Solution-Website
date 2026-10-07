import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Homepage from "./Components/Homepage";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import Career from "./Components/Career";
import Projects from "./Components/Projects";
import ProjectDetails from "./Components/ProjectDetails";
import LovixApp from "./Components/LovixApp";

function App() {
  return (
    <Router>
      <Toaster position="top-right" />

      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/blessings-foundation-trust" element={<ProjectDetails />} />
        <Route path="/projects/lovix-app" element={<LovixApp />} />
        <Route path="/project-details.html" element={<LovixApp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career/>}/>

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;





// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Toaster } from "react-hot-toast";

// import Homepage from "./Components/Homepage";
// import About from "./Components/About";
// import Navbar from "./Components/Navbar";
// import ScrollToTop from "./Components/ScrollToTop";
// import Project from "./Project";
// import Footer from "./Components/Footer";

// function App() {
//   return (
//     <Router>
//       {/* 🔔 Toast Container */}
//       <Toaster position="top-right" reverseOrder={false} />

//       <Navbar />
//       <ScrollToTop />

//       <Routes>
//         <Route path="/" element={<Project />} />
      
//       </Routes>

//       <Footer />
//     </Router>
//   );
// }

// export default App;
