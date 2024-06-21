import Footer from "./components/Footer";
import ApplyPartner from "./components/home/ApplyPartner";
import Event from "./components/home/Event";
import Hero from "./components/home/Hero";
import Membership from "./components/home/Membership";
import Paidback from "./components/home/Paidback";
import PartnerExchanges from "./components/home/PartnerExchanges";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Membership />
      <Event />
      <PartnerExchanges text="Official Partner Exchanges" />
      <Paidback />
      <ApplyPartner />
      <Footer />
    </main>
  );
}
