import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Games from "@/components/Games";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <Hero />
      <Services />
      <Games />
      <Footer />
    </div>
  );
};

export default Index;