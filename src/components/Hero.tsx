import { Button } from "@/components/ui/button";
import { CreditCard, Gamepad2, Zap, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const features = [
    {
      icon: CreditCard,
      title: "خدمات پولی",
      description: "انجام انواع تراکنش‌های مالی با بالاترین امنیت"
    },
    {
      icon: Gamepad2,
      title: "فروش بازی",
      description: "خرید و فروش انواع بازی‌های دیجیتال"
    },
    {
      icon: Zap,
      title: "خدمات مجازی",
      description: "ارائه خدمات دیجیتال متنوع و مدرن"
    },
    {
      icon: TrendingUp,
      title: "قیمت‌گذاری",
      description: "بهترین نرخ‌ها و قیمت‌های روز بازار"
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            خدمات پولی
            <span className="block bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              حازم
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            ارائه دهنده خدمات مالی، فروش بازی‌های دیجیتال و خدمات مجازی
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <CreditCard className="ml-2 h-5 w-5" />
              شروع کنید
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <Gamepad2 className="ml-2 h-5 w-5" />
              مشاهده بازی‌ها
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="bg-white/20 rounded-full p-3 w-fit mx-auto mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default Hero;