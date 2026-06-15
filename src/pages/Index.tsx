import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Gallery from "@/components/Gallery";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";
import TelegramButton from "@/components/TelegramButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Gallery />
      <Promo />
      <Footer />
      <TelegramButton />
    </main>
  );
};

export default Index;