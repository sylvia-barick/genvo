import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Rocket, Users, Home, Zap, MessageCircle } from "lucide-react";
import { AnimeNavBar } from "@/components/ui/anime-navbar";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home", icon: Home },
    { name: "Features", href: "#features", icon: Zap },
    { name: "Community", href: "#community", icon: Users },
    { name: "Contact", href: "#contact", icon: MessageCircle }
  ];

  return (
    <>
      {/* Anime Navigation Bar */}
      <AnimeNavBar
        items={[
          { name: "Home", url: "#home", icon: Home },
          { name: "Features", url: "#features", icon: Zap },
          { name: "Community", url: "#community", icon: Users },
          { name: "About", url: "#about", icon: MessageCircle }
        ]}
        defaultActive="Home"
      />

      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
        {/* Subtle accent lighting */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

        {/* Refined floating elements */}
        <div className="absolute top-6 left-8 w-1.5 h-1.5 bg-primary/30 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-8 right-12 w-1 h-1 bg-accent/40 rounded-full animate-pulse opacity-50" style={{ animationDelay: '1s' }}></div>

        <div className="relative z-10 flex items-center justify-between h-16 px-6">
          {/* Clean Logo Section */}
          <div className="relative group cursor-pointer">
            <div className="relative p-2.5 rounded-xl bg-background/60 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <img
                src="/lovable-uploads/d6088163-65b6-4374-8819-9d063cf31eb9.png"
                alt="GENVO Logo"
                className="h-10 w-auto transition-all duration-300 hover:brightness-110"
              />
            </div>
          </div>

          {/* Desktop CTA Button (hidden since anime navbar handles navigation) */}
          <div className="hidden md:flex items-center gap-3">
            <GradientButton variant="variant">
              <Rocket className="w-4 h-4 mr-2" />
              <span className="font-medium">Join Community</span>
            </GradientButton>
          </div>

          {/* Clean Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2 hover:bg-background/50 transition-colors duration-300">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-background/95 backdrop-blur-xl border-l border-border/50">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center gap-3 p-6 border-b border-border/50">
                    <img
                      src="/lovable-uploads/d6088163-65b6-4374-8819-9d063cf31eb9.png"
                      alt="GENVO Logo"
                      className="h-8 w-auto"
                    />
                    <span className="font-bold text-lg text-foreground">GENVO</span>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex-1 p-6">
                    <div className="space-y-2">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-background/50 rounded-lg transition-all duration-300"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <item.icon className="w-4 h-4" />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </nav>

                  {/* Mobile CTA */}
                  <div className="p-6 border-t border-border/50">
                    <GradientButton className="w-full" variant="variant">
                      <Rocket className="w-4 h-4 mr-2" />
                      Join Community
                    </GradientButton>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Elegant Progress Bar */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary/60 via-accent/60 to-primary/60 transition-all duration-500" style={{ width: '0%' }}></div>
      </header>
    </>
  );
};

export default Header;