import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Settings, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  TrendingUp, 
  Users, 
  ShoppingCart,
  DollarSign,
  FileText,
  Upload
} from "lucide-react";

const AdminPanel = () => {
  const [newService, setNewService] = useState({
    name: "",
    price: "",
    description: ""
  });

  const [newGame, setNewGame] = useState({
    title: "",
    price: "",
    category: "",
    description: ""
  });

  const services = [
    { id: 1, name: "شارژ ایرانسل", price: "۹,۸۰۰", status: "فعال" },
    { id: 2, name: "خرید بیت کوین", price: "متغیر", status: "فعال" },
    { id: 3, name: "انتقال وجه", price: "۱٪ کارمزد", status: "غیرفعال" }
  ];

  const games = [
    { id: 1, title: "کالاف دیوتی", price: "۲۵۰,۰۰۰", category: "اکشن", sales: 245 },
    { id: 2, title: "فیفا ۲۴", price: "۱۸۰,۰۰۰", category: "ورزشی", sales: 189 },
    { id: 3, title: "ماینکرافت", price: "۱۲۰,۰۰۰", category: "خلاقی", sales: 456 }
  ];

  const stats = [
    { title: "فروش امروز", value: "۱۲,۴۵۰,۰۰۰", icon: DollarSign, change: "+12%" },
    { title: "سفارشات", value: "۱۵۸", icon: ShoppingCart, change: "+8%" },
    { title: "کاربران فعال", value: "۲,۳۴۵", icon: Users, change: "+15%" },
    { title: "درآمد ماهانه", value: "۱۲۵,۰۰۰,۰۰۰", icon: TrendingUp, change: "+25%" }
  ];

  return (
    <section id="admin" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Settings className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">
              پنل مدیریت
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            مدیریت خدمات، بازی‌ها و آمار فروش
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <Badge variant="success" className="mt-2">
                      {stat.change}
                    </Badge>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Admin Tabs */}
        <Tabs defaultValue="services" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="services">مدیریت خدمات</TabsTrigger>
            <TabsTrigger value="games">مدیریت بازی‌ها</TabsTrigger>
            <TabsTrigger value="reports">گزارشات</TabsTrigger>
          </TabsList>

          {/* Services Management */}
          <TabsContent value="services" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Add New Service */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plus className="h-5 w-5" />
                    افزودن خدمت جدید
                  </CardTitle>
                  <CardDescription>
                    خدمت جدید به لیست خدمات اضافه کنید
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="service-name">نام خدمت</Label>
                    <Input
                      id="service-name"
                      value={newService.name}
                      onChange={(e) => setNewService({...newService, name: e.target.value})}
                      placeholder="مثال: شارژ همراه اول"
                    />
                  </div>
                  <div>
                    <Label htmlFor="service-price">قیمت</Label>
                    <Input
                      id="service-price"
                      value={newService.price}
                      onChange={(e) => setNewService({...newService, price: e.target.value})}
                      placeholder="مثال: ۱۰,۰۰۰ تومان"
                    />
                  </div>
                  <div>
                    <Label htmlFor="service-description">توضیحات</Label>
                    <Input
                      id="service-description"
                      value={newService.description}
                      onChange={(e) => setNewService({...newService, description: e.target.value})}
                      placeholder="توضیح کوتاه درباره خدمت"
                    />
                  </div>
                  <Button className="w-full">
                    <Plus className="h-4 w-4 ml-2" />
                    افزودن خدمت
                  </Button>
                </CardContent>
              </Card>

              {/* Services List */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    لیست خدمات
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {services.map((service) => (
                      <div key={service.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h4 className="font-medium">{service.name}</h4>
                          <p className="text-sm text-muted-foreground">{service.price} تومان</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={service.status === "فعال" ? "success" : "secondary"}>
                            {service.status}
                          </Badge>
                          <Button size="icon" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="outline">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Games Management */}
          <TabsContent value="games" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Add New Game */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plus className="h-5 w-5" />
                    افزودن بازی جدید
                  </CardTitle>
                  <CardDescription>
                    بازی جدید به فروشگاه اضافه کنید
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="game-title">عنوان بازی</Label>
                    <Input
                      id="game-title"
                      value={newGame.title}
                      onChange={(e) => setNewGame({...newGame, title: e.target.value})}
                      placeholder="مثال: کالاف دیوتی"
                    />
                  </div>
                  <div>
                    <Label htmlFor="game-price">قیمت</Label>
                    <Input
                      id="game-price"
                      value={newGame.price}
                      onChange={(e) => setNewGame({...newGame, price: e.target.value})}
                      placeholder="مثال: ۲۵۰,۰۰۰ تومان"
                    />
                  </div>
                  <div>
                    <Label htmlFor="game-category">دسته‌بندی</Label>
                    <Input
                      id="game-category"
                      value={newGame.category}
                      onChange={(e) => setNewGame({...newGame, category: e.target.value})}
                      placeholder="مثال: اکشن"
                    />
                  </div>
                  <div>
                    <Label htmlFor="game-description">توضیحات</Label>
                    <Input
                      id="game-description"
                      value={newGame.description}
                      onChange={(e) => setNewGame({...newGame, description: e.target.value})}
                      placeholder="توضیح درباره بازی"
                    />
                  </div>
                  <Button className="w-full">
                    <Upload className="h-4 w-4 ml-2" />
                    افزودن بازی
                  </Button>
                </CardContent>
              </Card>

              {/* Games List */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    لیست بازی‌ها
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {games.map((game) => (
                      <div key={game.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h4 className="font-medium">{game.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {game.category} • {game.price} تومان
                          </p>
                          <p className="text-xs text-muted-foreground">
                            فروش: {game.sales} عدد
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button size="icon" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="outline">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Reports */}
          <TabsContent value="reports" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>گزارش فروش هفتگی</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>شنبه</span>
                      <span className="font-medium">۲,۳۴۰,۰۰۰ تومان</span>
                    </div>
                    <div className="flex justify-between">
                      <span>یکشنبه</span>
                      <span className="font-medium">۱,۸۹۰,۰۰۰ تومان</span>
                    </div>
                    <div className="flex justify-between">
                      <span>دوشنبه</span>
                      <span className="font-medium">۲,۱۲۰,۰۰۰ تومان</span>
                    </div>
                    <div className="flex justify-between">
                      <span>سه‌شنبه</span>
                      <span className="font-medium">۱,۷۶۰,۰۰۰ تومان</span>
                    </div>
                    <div className="flex justify-between">
                      <span>چهارشنبه</span>
                      <span className="font-medium">۲,۸۹۰,۰۰۰ تومان</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>محبوب‌ترین محصولات</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {games.map((game, index) => (
                      <div key={game.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline">{index + 1}</Badge>
                          <span>{game.title}</span>
                        </div>
                        <span className="text-muted-foreground">{game.sales} فروش</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AdminPanel;