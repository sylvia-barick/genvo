import { GradientButton } from "@/components/ui/gradient-button";
import { ChevronDown, Rocket, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-2000">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,hsl(var(--genvo-primary)/0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,hsl(var(--genvo-accent)/0.15),transparent_60%)]" />

      <div className="absolute inset-0 opacity-20 interactive-bg-3d"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(142,76,55,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(142,76,55,0.1)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse" />
      </div>

      <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-ping particle-3d" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full animate-ping delay-1000 particle-3d" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-ping delay-500 particle-3d" style={{ animationDelay: '4s' }} />

      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full animate-float-3d blur-sm" />
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-gradient-to-br from-accent/40 to-primary/40 rounded-full animate-float-3d delay-1000 blur-sm" />

      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center py-20 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-20 lg:gap-16 xl:gap-24 max-w-7xl mx-auto">

          <div className="flex-1 space-y-10 animate-fade-in-up lg:text-left text-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1]">
                <span className="block animate-slide-in-left hover-3d-tilt">Join the</span>
                <span className="block genvo-text-gradient animate-gradient animate-slide-in-right hover-3d-rotate transform-gpu my-2">
                  GENVO
                </span>
                <span className="block animate-slide-in-left delay-300 hover-3d-tilt">Revolution</span>
              </h1>

              <p className="text-lg lg:text-xl xl:text-2xl text-muted-foreground/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                The ultimate GenZ developer community where innovation meets opportunity.
                Connect, collaborate, and code your way to success.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center">
              <GradientButton className="min-w-[220px] h-14 text-base font-semibold">
                <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Start Your Journey
              </GradientButton>
              <GradientButton variant="variant" className="min-w-[220px] h-14 text-base font-semibold">
                <Users className="w-5 h-5 mr-2 group-hover:animate-spin" />
                Explore Community
              </GradientButton>
            </div>

            <div className="grid grid-cols-3 gap-6 lg:gap-12 pt-16 max-w-xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left animate-scale-in hover-3d-lift cursor-pointer group transition-all duration-300">
                <div className="text-4xl lg:text-5xl xl:text-6xl font-bold genvo-text-gradient group-hover:text-3d mb-2">10K+</div>
                <div className="text-xs lg:text-sm text-muted-foreground/70 font-medium uppercase tracking-wider">Developers</div>
              </div>
              <div className="text-center lg:text-left animate-scale-in delay-200 hover-3d-lift cursor-pointer group transition-all duration-300">
                <div className="text-4xl lg:text-5xl xl:text-6xl font-bold genvo-text-gradient group-hover:text-3d mb-2">500+</div>
                <div className="text-xs lg:text-sm text-muted-foreground/70 font-medium uppercase tracking-wider">Hackathons</div>
              </div>
              <div className="text-center lg:text-left animate-scale-in delay-400 hover-3d-lift cursor-pointer group transition-all duration-300">
                <div className="text-4xl lg:text-5xl xl:text-6xl font-bold genvo-text-gradient group-hover:text-3d mb-2">50+</div>
                <div className="text-xs lg:text-sm text-muted-foreground/70 font-medium uppercase tracking-wider">Cities</div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end items-center">
            <div className="relative animate-float-3d perspective-1000 w-full max-w-md lg:max-w-lg">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-25 blur-3xl animate-pulse-glow-accent scale-125 animate-float-3d" />

              <div className="relative interactive-3d group cursor-pointer">
                <img
                  src="/lovable-uploads/db213be2-d741-4f1f-aaa6-00b4ab429f6a.png"
                  alt="GENVO Mascot - The Developer Guardian"
                  className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-all duration-700 group-hover:animate-float-3d filter brightness-110"
                />

                <div className="absolute top-1/2 -left-8 lg:-left-14 w-10 h-10 lg:w-12 lg:h-12 bg-card/90 backdrop-blur-sm border-2 border-primary/30 rounded-full flex items-center justify-center animate-ping hover-3d-tilt cursor-pointer group shadow-xl">
                  <div className="w-4 h-4 bg-primary rounded-full group-hover:bg-accent transition-colors duration-300"></div>
                </div>

                <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping opacity-30"></div>
                <div className="absolute inset-0 rounded-full border-2 border-accent/20 animate-pulse opacity-20" style={{ animationDelay: '1s' }}></div>
                <div className="absolute inset-0 rounded-full border border-primary/10 animate-ping opacity-20" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover-3d-lift cursor-pointer">
        <ChevronDown className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
      </div>
    </section>
  );
};

export default HeroSection;