import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChupa from "@/components/WhyChupa";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <WhyChupa />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}