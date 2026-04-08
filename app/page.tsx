import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Experts from "@/components/Experts";
import Timeline from "@/components/Timeline";
import Gallery from "@/components/Gallery";
import Conclusion from "@/components/Conclusion";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Experts />
        {/* <Timeline /> */}
        {/* <Gallery /> */}
        <Conclusion />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
