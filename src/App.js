import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Courses } from "./components/Courses";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Students } from "./components/Students";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <About />
      <Courses />
      <Skills />
      <Students />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
