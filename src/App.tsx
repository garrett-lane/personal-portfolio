import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Credentials from "./components/Credentials";
import Coursework from "./components/Coursework";
import Essays from "./components/Essays";
import ScoutingAwards from "./components/ScoutingAwards";
import FuturePlans from "./components/FuturePlans";
import Footer from "./components/Footer";

export default function App() {
  return (
    // overflow-x-clip keeps the hero glow from widening the page on phones (and, unlike
    // overflow-hidden, doesn't break the sticky nav).
    <div className="min-h-screen overflow-x-clip bg-bg font-sans text-text">
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Credentials />
        <Coursework />
        <Essays />
        <ScoutingAwards />
        <FuturePlans />
      </main>
      <Footer />
    </div>
  );
}
