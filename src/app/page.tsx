import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Roadmap from "@/components/Roadmap";
import Founder from "@/components/Founder";
import BetaForm from "@/components/BetaForm";
import StayInTheLoop from "@/components/StayInTheLoop";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Roadmap />
        <Founder />
        <BetaForm />
        <StayInTheLoop />
      </main>
      <Footer />
    </>
  );
}
