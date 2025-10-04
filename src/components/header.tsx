import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Rocket, Users, Home, Zap, MessageCircle, Sparkles } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "Features", href: "#features", icon: Zap },
    { name: "Community", href: "#community", icon: Users },
    { name: "Contact", href: "#contact", icon: MessageCircle }
  ];

  return (
    <header className="relative top-0 left-0 right-0">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-transparent backdrop-blur-2xl"></div>
      
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 via-cyan-400/30 to-transparent"></div>

      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            
            <div className="flex items-center gap-12">
              <div className="group cursor-pointer relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="relative flex items-center gap-3 px-4 py-2 rounded-xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-400/30 shadow-lg backdrop-blur-xl group-hover:border-emerald-400/50 transition-all duration-500">
                  <img
                    src="/lovable-uploads/d6088163-65b6-4374-8819-9d063cf31eb9.png"
                    alt="GENVO"
                    className="h-10 w-auto drop-shadow-[0_0_20px_rgba(16,185,129,0.6)]"
                  />
                  <div className="hidden sm:flex flex-col">
                    <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">GENVO</span>
                    <span className="text-[10px] text-emerald-400/60 font-light tracking-wider">FUTURE OF GENZ</span>
                  </div>
                </div>
              </div>

              <nav className="hidden lg:flex items-center gap-2 p-2 rounded-2xl bg-black/40 backdrop-blur-xl border border-emerald-500/20 shadow-2xl">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setActiveNav(item.name)}
                    className={`relative flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-500 group ${
                      activeNav === item.name
                        ? "text-white"
                        : "text-gray-400 hover:text-emerald-400"
                    }`}
                  >
                    {activeNav === item.name && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-xl backdrop-blur-xl"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl opacity-10"></div>
                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl opacity-20 blur-lg"></div>
                      </>
                    )}
                    <item.icon className={`w-4 h-4 relative z-10 transition-all duration-500 ${
                      activeNav === item.name 
                        ? "text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]" 
                        : "group-hover:scale-110"
                    }`} />
                    <span className="relative z-10">{item.name}</span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <GradientButton variant="variant" className="relative group shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-500">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
                  <Rocket className="w-4 h-4 mr-2 relative z-10" />
                  <span className="relative z-10">Join Community</span>
                  <Sparkles className="w-3 h-3 ml-2 relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </GradientButton>
              </div>

              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="relative group backdrop-blur-xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 hover:from-emerald-500/20 hover:to-cyan-500/20 border border-emerald-400/30 hover:border-emerald-400/50 transition-all duration-500 p-3"
                  >
                    <Menu className="h-5 w-5 text-emerald-400" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 backdrop-blur-3xl bg-gradient-to-b from-black via-emerald-950/20 to-black border-l border-emerald-500/30">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-3 p-6 border-b border-emerald-500/20">
                      <img src="/lovable-uploads/d6088163-65b6-4374-8819-9d063cf31eb9.png" alt="GENVO" className="h-10 drop-shadow-[0_0_15px_rgba(16,185,129,0.6)]" />
                      <div className="flex flex-col">
                        <span className="font-bold text-lg bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">GENVO</span>
                        <span className="text-xs text-emerald-400/60 tracking-wider">FUTURE OF GENZ</span>
                      </div>
                    </div>

                    <nav className="flex-1 p-6 space-y-3">
                      {navItems.map((item, index) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="relative flex items-center gap-4 px-5 py-4 rounded-xl backdrop-blur-xl bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 hover:from-emerald-500/15 hover:to-cyan-500/15 border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-500 group overflow-hidden"
                          onClick={() => setIsMenuOpen(false)}
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-cyan-500/0 group-hover:from-emerald-500/10 group-hover:to-cyan-500/10 transition-all duration-500"></div>
                          <div className="relative z-10 p-2 rounded-lg bg-emerald-500/10 border border-emerald-400/20 group-hover:border-emerald-400/40 transition-all duration-500">
                            <item.icon className="w-5 h-5 text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.4)] group-hover:scale-110 transition-transform duration-500" />
                          </div>
                          <span className="relative z-10 font-medium text-gray-300 group-hover:text-white transition-colors duration-500">{item.name}</span>
                        </a>
                      ))}
                    </nav>

                    <div className="p-6 border-t border-emerald-500/20">
                      <GradientButton className="w-full shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-all duration-500" variant="variant">
                        <Rocket className="w-4 h-4 mr-2" />
                        Join Community
                      </GradientButton>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-20 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 right-20 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </header>
  );
};

export default Header;