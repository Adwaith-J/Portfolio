import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const projects = [
  { id: 1, title: "AI/ML", description: "Car-vs-Bike-Image-Classifier-using-PyTorch" },
  { id: 2, title: "WebDev", description: "Event-Attendance-system" },
  { id: 3, title: "Portfolio", description: "My personal portfolio site" },
];

function App() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Projects projects={projects} />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
