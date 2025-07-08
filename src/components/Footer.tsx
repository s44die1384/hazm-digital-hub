import { Button } from "@/components/ui/button";
import { 
  CreditCard, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Send,
  Clock,
  Shield,
  Star,
  CheckCircle
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "خدمات پولی", href: "#services" },
    { name: "فروشگاه بازی", href: "#games" },
    { name: "پنل مدیریت", href: "#admin" },
    { name: "تماس با ما", href: "#contact" }
  ];

  const services = [
    { name: "شارژ موبایل", href: "#" },
    { name: "خرید ارز دیجیتال", href: "#" },
    { name: "انتقال وجه", href: "#" },
    { name: "کیف پول", href: "#" }
  ];

  const features = [
    { icon: Shield, text: "امنیت بالا" },
    { icon: Clock, text: "پشتیبانی ۲۴/۷" },
    { icon: CheckCircle, text: "تحویل فوری" },
    { icon: Star, text: "کیفیت مطمئن" }
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground p-2 rounded-lg">
                <CreditCard className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                خدمات حازم
              </span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              ارائه دهنده معتبر خدمات مالی، فروش بازی‌های دیجیتال و خدمات مجازی با بیش از ۵ سال سابقه
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <Icon className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{feature.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">دسترسی سریع</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full opacity-60"></div>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">خدمات ما</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full opacity-60"></div>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">تماس با ما</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">تلفن</p>
                  <p className="font-medium">۰۹۱۲-۳۴۵-۶۷۸۹</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-accent/10 p-2 rounded-lg">
                  <Mail className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">ایمیل</p>
                  <p className="font-medium">info@hazem-services.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-success/10 p-2 rounded-lg">
                  <MapPin className="h-4 w-4 text-success" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">آدرس</p>
                  <p className="font-medium">تهران، میدان آزادی</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="font-medium">شبکه‌های اجتماعی</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="hover:bg-accent hover:text-accent-foreground">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-right">
              <p className="text-muted-foreground text-sm">
                © ۲۰۲۴ خدمات حازم. تمامی حقوق محفوظ است.
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                حریم خصوصی
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                شرایط استفاده
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                پشتیبانی
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button 
          size="icon" 
          className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;