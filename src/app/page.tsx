import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

export default function Home() {
  return (
    <>
      <div className="bg-black overflow-hidden">
        <Navbar />
        <Hero />

        <Footer />
      </div>
    </>
  );
}
