import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Games from "@/components/Games";
import AdminPanel from "@/components/AdminPanel";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <Hero />
      <Services />
      <Games />
      <AdminPanel />
      <Footer />
    </div>
  );
};

export default Index;