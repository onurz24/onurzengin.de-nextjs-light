import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { PriceInquiry } from "./components/PriceInquiry/PriceInquiry";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { Services } from "./components/Services/Services";
import { Techstack } from "./components/Techstack/Techstack2";
import { Welcome } from "./components/Welcome/Welcome";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Welcome/>
      <About/>
      <Services/>
      {/* <Techstack/> */}
      <PriceInquiry/>
      <Contact/>
      <Footer/>
      <ScrollToTop/>
    </>
  );
}