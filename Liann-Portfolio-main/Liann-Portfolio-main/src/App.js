import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./layouts/Footer";
import TechStack from "./components/TechStack";




function App() {
  return (
    <div className="min-h-screen bg-base-100 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Home />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}


export default App;
