import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Gamepad2, 
  Star, 
  Download, 
  Users, 
  Trophy,
  Clock,
  Flame,
  Zap
} from "lucide-react";

const Games = () => {
  const games = [
    {
      title: "کالاف دیوتی",
      description: "بازی اکشن تیراندازی آنلاین",
      price: "۲۵۰,۰۰۰ تومان",
      originalPrice: "۳۰۰,۰۰۰ تومان",
      rating: 4.8,
      players: "۱۰M+",
      category: "اکشن",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      discount: 17,
      popular: true
    },
    {
      title: "فیفا ۲۴",
      description: "بازی شبیه‌سازی فوتبال",
      price: "۱۸۰,۰۰۰ تومان",
      originalPrice: "۲۲۰,۰۰۰ تومان",
      rating: 4.6,
      players: "۵M+",
      category: "ورزشی",
      image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=300&fit=crop",
      discount: 18,
      popular: false
    },
    {
      title: "ماینکرافت",
      description: "بازی ساخت و ساز خلاقانه",
      price: "۱۲۰,۰۰۰ تومان",
      originalPrice: null,
      rating: 4.9,
      players: "۲۰M+",
      category: "خلاقی",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop",
      discount: 0,
      popular: true
    },
    {
      title: "فورتنایت V-Bucks",
      description: "ارز درون بازی فورتنایت",
      price: "۸۵,۰۰۰ تومان",
      originalPrice: "۱۰۰,۰۰۰ تومان",
      rating: 4.7,
      players: "۳۰M+",
      category: "ارز بازی",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
      discount: 15,
      popular: true
    },
    {
      title: "پابجی موبایل UC",
      description: "ارز درون بازی پابجی موبایل",
      price: "۶۵,۰۰۰ تومان",
      originalPrice: "۷۵,۰۰۰ تومان",
      rating: 4.5,
      players: "۱۵M+",
      category: "ارز بازی",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
      discount: 13,
      popular: false
    },
    {
      title: "استیم والت",
      description: "شارژ کیف پول استیم",
      price: "۵۰,۰۰۰ تومان",
      originalPrice: null,
      rating: 4.9,
      players: "۵۰M+",
      category: "کیف پول",
      image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop",
      discount: 0,
      popular: true
    }
  ];

  const categories = ["همه", "اکشن", "ورزشی", "خلاقی", "ارز بازی", "کیف پول"];

  return (
    <section id="games" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Gamepad2 className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">
              فروشگاه بازی
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            خرید بازی‌های اورجینال و ارزهای درون بازی با بهترین قیمت‌ها
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Badge 
              key={index}
              variant={index === 0 ? "default" : "secondary"}
              className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Popular Games Banner */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 mb-12 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Flame className="h-6 w-6" />
            <h3 className="text-2xl font-bold">محبوب‌ترین بازی‌ها</h3>
          </div>
          <p className="text-white/90 mb-6">
            پرفروش‌ترین و محبوب‌ترین بازی‌های این ماه را از دست ندهید
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              <span>رنکینگ بالا</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>کاربران زیاد</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              <span>تحویل فوری</span>
            </div>
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Game Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  {game.popular && (
                    <Badge className="bg-accent text-accent-foreground">
                      <Flame className="h-3 w-3 ml-1" />
                      محبوب
                    </Badge>
                  )}
                  {game.discount > 0 && (
                    <Badge variant="destructive">
                      {game.discount}% تخفیف
                    </Badge>
                  )}
                </div>

                {/* Category */}
                <div className="absolute bottom-4 right-4">
                  <Badge variant="secondary" className="bg-black/50 text-white border-none">
                    {game.category}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg mb-2">{game.title}</CardTitle>
                    <CardDescription>{game.description}</CardDescription>
                  </div>
                </div>

                {/* Rating and Players */}
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{game.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{game.players}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                {/* Price */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {game.price}
                  </span>
                  {game.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {game.originalPrice}
                    </span>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <Button className="flex-1">
                    <Download className="h-4 w-4 ml-2" />
                    خرید فوری
                  </Button>
                  <Button variant="outline" size="icon">
                    <Clock className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            نمایش بیشتر
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Games;