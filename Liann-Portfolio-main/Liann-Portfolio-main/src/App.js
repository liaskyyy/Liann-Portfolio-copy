import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Public Components
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TechStack from "./components/TechStack";

// Admin Pages 
// NOTE: If you haven't moved these to a 'pages' folder yet, remove 'pages/' from the path below.
import Login from "./pages/Login"; 
import Dashboard from "./pages/Dashboard"; 

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-base-100 dark:bg-gray-900 transition-colors duration-300">
        <Routes>
          
          {/* Route 1: Public Portfolio */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <main>
                  <Home />
                  <About />
                  <TechStack />
                  <Projects />
                  <Experience />
                  <Contact />
                </main>
                <Footer />
              </>
            }
          />

          {/* Route 2: Admin Login */}
          <Route path="/login" element={<Login />} />

          {/* Route 3: Admin Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;