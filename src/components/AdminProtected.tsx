import { useState, useEffect } from "react";
import AdminLogin from "./AdminLogin";
import AdminPanel from "./AdminPanel";
import { Button } from "@/components/ui/button";
import { LogOut, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminProtected = () => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    checkAdminStatus();
  }, []);

  const checkAdminStatus = () => {
    const adminLoggedIn = localStorage.getItem("admin_logged_in");
    const loginTime = localStorage.getItem("admin_login_time");
    
    if (adminLoggedIn === "true" && loginTime) {
      const currentTime = Date.now();
      const loginTimestamp = parseInt(loginTime);
      
      // جلسه ادمین بعد از 8 ساعت منقضی می‌شود
      const sessionDuration = 8 * 60 * 60 * 1000; // 8 hours in milliseconds
      
      if (currentTime - loginTimestamp < sessionDuration) {
        setIsAdminLoggedIn(true);
      } else {
        // جلسه منقضی شده
        handleLogout(false);
      }
    }
    
    setIsLoading(false);
  };

  const handleLogin = (success: boolean) => {
    if (success) {
      setIsAdminLoggedIn(true);
    }
  };

  const handleLogout = (showToast = true) => {
    localStorage.removeItem("admin_logged_in");
    localStorage.removeItem("admin_login_time");
    setIsAdminLoggedIn(false);
    
    if (showToast) {
      toast({
        title: "خروج موفقیت‌آمیز",
        description: "با موفقیت از پنل مدیریت خارج شدید",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="text-muted-foreground">در حال بررسی دسترسی...</p>
        </div>
      </div>
    );
  }

  if (!isAdminLoggedIn) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6" />
              <div>
                <h1 className="text-xl font-bold">پنل مدیریت خدمات حازم</h1>
                <p className="text-sm opacity-90">مدیریت کامل سیستم</p>
              </div>
            </div>
            
            <Button
              variant="secondary"
              onClick={() => handleLogout()}
              className="bg-white/10 hover:bg-white/20 text-white border-white/20"
            >
              <LogOut className="h-4 w-4 ml-2" />
              خروج
            </Button>
          </div>
        </div>
      </div>

      {/* Admin Panel Content */}
      <AdminPanel />
    </div>
  );
};

export default AdminProtected;