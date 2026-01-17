import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Teams from "./components/Teams";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";
import CareerTimeline from "./components/CareerTimeline";

function App() {
  return (
    <div className="bg-black">
      <Nav />
      <Hero />
      <CareerTimeline />
      <Teams />
      <Achievements />
      <Footer />
    </div>
  );
}

export default App;
