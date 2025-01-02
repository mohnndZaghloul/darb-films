import "./App.css";
import Nav from "./components/templates/Nav";

import Area from "./components/templates/Area";
import Services from "./components/templates/Services";
import Hero from "./components/templates/Hero";
import Portfolio from "./components/templates/Portfolio";
import Footer from "./components/templates/Footer";

function App() {
  return (
    <main className="bg-black text-white font-light overflow-hidden">
      <Nav />
      <Hero />
      <Area />
      <Services />
      <Portfolio />
      <Footer />
    </main>
  );
}

export default App;
