import { GradientButton } from "@/components/ui/gradient-button";
import { ChevronDown, Sparkles, Users, Code, Rocket } from "lucide-react";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-2000">
      {/* Enhanced 3D Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,hsl(var(--genvo-primary)/0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,hsl(var(--genvo-accent)/0.15),transparent_60%)]" />

      {/* 3D Interactive Background Grid */}
      <div className="absolute inset-0 opacity-20 interactive-bg-3d"></div>

      {/* 3D Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(142,76,55,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(142,76,55,0.1)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse" />
      </div>

      {/* 3D Floating Elements with Enhanced Animation */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-ping particle-3d" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full animate-ping delay-1000 particle-3d" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-ping delay-500 particle-3d" style={{ animationDelay: '4s' }} />

      {/* Additional 3D Floating Orbs */}
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full animate-float-3d blur-sm" />
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-gradient-to-br from-accent/40 to-primary/40 rounded-full animate-float-3d delay-1000 blur-sm" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-16 max-w-7xl mx-auto">

          {/* Enhanced 3D Text Content */}
          <div className="flex-1 space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary animate-bounce-in hover-3d-lift cursor-pointer">
                <Sparkles className="w-4 h-4" />
                Welcome to the Future of GenZ Development
              </div>

              <h1 className="text-5xl lg:text-8xl font-bold tracking-tight leading-tight">
                <span className="block animate-slide-in-left hover-3d-tilt inline-block cursor-pointer">Join the</span>
                <span className="genvo-text-gradient animate-gradient animate-slide-in-right hover-3d-rotate inline-block cursor-pointer transform-gpu">
                  GENVO
                </span>
                <span className="block animate-slide-in-left delay-300 hover-3d-tilt inline-block cursor-pointer">Revolution</span>
              </h1>

              <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                The ultimate GenZ developer community where innovation meets opportunity.
                Connect, collaborate, and code your way to success.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <GradientButton>
                <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Start Your Journey
              </GradientButton>
              <GradientButton variant="variant">
                <Users className="w-5 h-5 mr-2 group-hover:animate-spin" />
                Explore Community
              </GradientButton>
            </div>

            {/* Enhanced 3D Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12">
              <div className="text-center animate-scale-in hover-3d-lift cursor-pointer group">
                <div className="text-3xl lg:text-4xl font-bold genvo-text-gradient group-hover:text-3d">10K+</div>
                <div className="text-sm text-muted-foreground">Developers</div>
              </div>
              <div className="text-center animate-scale-in delay-200 hover-3d-lift cursor-pointer group">
                <div className="text-3xl lg:text-4xl font-bold genvo-text-gradient group-hover:text-3d">500+</div>
                <div className="text-sm text-muted-foreground">Hackathons</div>
              </div>
              <div className="text-center animate-scale-in delay-400 hover-3d-lift cursor-pointer group">
                <div className="text-3xl lg:text-4xl font-bold genvo-text-gradient group-hover:text-3d">50+</div>
                <div className="text-sm text-muted-foreground">Cities</div>
              </div>
            </div>
          </div>

          {/* Enhanced 3D Mascot Section */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative animate-float-3d perspective-1000">
              {/* Enhanced 3D Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-20 blur-3xl animate-pulse-glow-accent scale-110 animate-float-3d" />

              {/* Mascot Container with 3D Effects */}
              <div className="relative interactive-3d group cursor-pointer">
                <img
                  src="/lovable-uploads/db213be2-d741-4f1f-aaa6-00b4ab429f6a.png"
                  alt="GENVO Mascot - The Developer Guardian"
                  className="w-96 h-auto max-w-full drop-shadow-2xl hover:scale-105 transition-all duration-500 group-hover:animate-float-3d"
                />

                {/* 3D Floating Code Elements */}
                <div className="absolute -top-8 -right-8 w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center animate-bounce hover-3d-rotate cursor-pointer group">
                  <Code className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center animate-pulse hover-3d-lift cursor-pointer group">
                  <Sparkles className="w-5 h-5 text-accent group-hover:text-primary transition-colors" />
                </div>
                <div className="absolute top-1/2 -left-12 w-8 h-8 bg-card border border-border rounded-full flex items-center justify-center animate-ping hover-3d-tilt cursor-pointer group">
                  <div className="w-3 h-3 bg-primary rounded-full group-hover:bg-accent transition-colors"></div>
                </div>

                {/* 3D Interactive Rings */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping opacity-30"></div>
                <div className="absolute inset-0 rounded-full border border-accent/30 animate-pulse opacity-20" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced 3D Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover-3d-lift cursor-pointer">
        <ChevronDown className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
      </div>
    </section>;
};
export default HeroSection;