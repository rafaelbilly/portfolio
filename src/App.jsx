import About from "./components/About";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Portfolio />
        <Footer />
      </main>
    </>
  );
}

export default App;
