import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CreditCard, 
  DollarSign, 
  ArrowUpDown, 
  Wallet, 
  Smartphone, 
  Globe,
  TrendingUp,
  Shield
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: CreditCard,
      title: "شارژ مستقیم",
      description: "شارژ انواع اپراتورهای تلفن همراه",
      price: "از ۱۰,۰۰۰ تومان",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: DollarSign,
      title: "خرید و فروش ارز",
      description: "معامله انواع ارزهای دیجیتال",
      price: "نرخ روز بازار",
      color: "from-green-500 to-green-600"
    },
    {
      icon: ArrowUpDown,
      title: "انتقال وجه",
      description: "انتقال سریع و امن پول",
      price: "کارمزد ۱٪",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Wallet,
      title: "کیف پول دیجیتال",
      description: "مدیریت داراییهای دیجیتال",
      price: "رایگان",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Smartphone,
      title: "پرداخت موبایلی",
      description: "پرداخت آسان با موبایل",
      price: "از ۵,۰۰۰ تومان",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Globe,
      title: "پرداخت بین‌المللی",
      description: "تراکنش‌های بین‌المللی",
      price: "نرخ ویژه",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const priceList = [
    { service: "شارژ ایرانسل", amount: "۱۰,۰۰۰ تومان", price: "۹,۸۰۰ تومان" },
    { service: "شارژ همراه اول", amount: "۲۰,۰۰۰ تومان", price: "۱۹,۶۰۰ تومان" },
    { service: "شارژ رایتل", amount: "۵۰,۰۰۰ تومان", price: "۴۹,۰۰۰ تومان" },
    { service: "بیت کوین", amount: "۱ BTC", price: "۲,۸۵۰,۰۰۰,۰۰۰ تومان" },
    { service: "اتریوم", amount: "۱ ETH", price: "۱۸۵,۰۰۰,۰۰۰ تومان" },
    { service: "تتر", amount: "۱ USDT", price: "۶۵,۰۰۰ تومان" }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            خدمات ما
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            مجموعه کاملی از خدمات مالی و دیجیتال برای تمام نیازهای شما
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-0 bg-gradient-to-br from-card to-card/50">
                <CardHeader className="text-center">
                  <div className={`mx-auto p-4 rounded-2xl bg-gradient-to-r ${service.color} w-fit mb-4`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-primary mb-4">
                    {service.price}
                  </div>
                  <Button className="w-full" variant="default">
                    سفارش دهید
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Price List */}
        <div className="bg-card rounded-3xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="h-8 w-8 text-primary" />
            <h3 className="text-2xl font-bold">جدول قیمت‌ها</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4" />
              <span>به‌روزرسانی لحظه‌ای</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-right py-4 px-4 font-semibold">خدمت</th>
                  <th className="text-right py-4 px-4 font-semibold">مقدار</th>
                  <th className="text-right py-4 px-4 font-semibold">قیمت</th>
                  <th className="text-center py-4 px-4 font-semibold">عملیات</th>
                </tr>
              </thead>
              <tbody>
                {priceList.map((item, index) => (
                  <tr key={index} className="border-b border-border/50 hover:bg-accent/20 transition-colors">
                    <td className="py-4 px-4 font-medium">{item.service}</td>
                    <td className="py-4 px-4 text-muted-foreground">{item.amount}</td>
                    <td className="py-4 px-4 text-primary font-semibold">{item.price}</td>
                    <td className="py-4 px-4 text-center">
                      <Button size="sm" variant="outline">
                        خرید
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;