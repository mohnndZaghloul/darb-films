import "./App.css";
import Nav from "./components/templates/Nav";

import Area from "./components/templates/Area";
import Services from "./components/templates/Services";
import Hero from "./components/templates/Hero";
import Portfolio from "./components/templates/Portfolio";
import Footer from "./components/templates/Footer";

import { motion } from "framer-motion";

function App() {
  return (
    <main className="bg-black text-white font-light overflow-hidden">
      <Nav />
      <motion.div
        initial={{ x: "-50%", scale: 30 }}
        animate={{ x: "-50%", scale: 0 }}
        transition={{ duration: 4, type: "spring" }}
        className="fixed z-50 w-20 aspect-square bottom-0 left-1/2 bg-gradient-to-b from-black to-[#222] rounded-full"
      />
      <Hero />
      <Area />
      <Services />
      <Portfolio />
      <Footer />
    </main>
  );
}

export default App;
