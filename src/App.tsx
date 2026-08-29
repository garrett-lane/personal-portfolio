import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Credentials from "./components/Credentials";
import Coursework from "./components/Coursework";
import ScoutingAwards from "./components/ScoutingAwards";
import FuturePlans from "./components/FuturePlans";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bg font-sans text-text">
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Credentials />
        <Coursework />
        <ScoutingAwards />
        <FuturePlans />
      </main>
      <Footer />
    </div>
  );
}
