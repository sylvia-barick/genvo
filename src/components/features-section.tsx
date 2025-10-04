import { Code, Users, Zap, Trophy, MessageCircle, Rocket, ArrowRight, Sparkles, Star, Circle, Hexagon, Triangle, Square } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Hackathons All Over India",
      description: "Stay updated with the latest hackathons happening across India. Get notifications, form teams, and participate in events that match your interests.",
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-400/10 to-orange-500/10",
      pattern: "radial-gradient(circle at 20% 80%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)",
      accent: "bg-yellow-500/20",
      shape: "hexagon",
      particles: [
        { icon: <Triangle className="w-3 h-3" />, delay: "0s", position: "top-6 right-8" },
        { icon: <Circle className="w-2 h-2" />, delay: "0.5s", position: "bottom-6 left-8" },
        { icon: <Star className="w-2 h-2" />, delay: "1s", position: "top-12 right-4" }
      ],
      hoverEffect: "electric-bolt"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Developer Network",
      description: "Connect with like-minded GenZ developers, form teams, and build lasting professional relationships within our vibrant community.",
      gradient: "from-blue-400 to-purple-500",
      bgGradient: "from-blue-400/10 to-purple-500/10",
      pattern: "radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
      accent: "bg-purple-500/20",
      shape: "circle",
      particles: [
        { icon: <Circle className="w-3 h-3" />, delay: "0.2s", position: "top-8 right-6" },
        { icon: <Circle className="w-2 h-2" />, delay: "0.8s", position: "bottom-8 left-6" },
        { icon: <Users className="w-2 h-2" />, delay: "1.2s", position: "top-14 right-12" }
      ],
      hoverEffect: "network-pulse"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Challenges & Contests",
      description: "Participate in coding challenges, hackathons, and competitions designed specifically for GenZ developers to showcase your skills.",
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-400/10 to-emerald-500/10",
      pattern: "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.08) 0%, transparent 70%)",
      accent: "bg-emerald-500/20",
      shape: "trophy",
      particles: [
        { icon: <Trophy className="w-3 h-3" />, delay: "0.3s", position: "top-4 right-10" },
        { icon: <Star className="w-2 h-2" />, delay: "0.7s", position: "bottom-4 left-10" },
        { icon: <Circle className="w-2 h-2" />, delay: "1.1s", position: "top-10 right-6" }
      ],
      hoverEffect: "trophy-shine"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "24/7 Community",
      description: "Get help anytime with our active community forums and real-time chat support from fellow GenZ developers.",
      gradient: "from-pink-400 to-rose-500",
      bgGradient: "from-pink-400/10 to-rose-500/10",
      pattern: "radial-gradient(circle at 30% 70%, rgba(244, 63, 94, 0.1) 0%, transparent 60%)",
      accent: "bg-rose-500/20",
      shape: "message",
      particles: [
        { icon: <MessageCircle className="w-3 h-3" />, delay: "0.4s", position: "top-6 right-8" },
        { icon: <Circle className="w-2 h-2" />, delay: "0.9s", position: "bottom-6 left-8" },
        { icon: <Star className="w-2 h-2" />, delay: "1.3s", position: "top-12 right-4" }
      ],
      hoverEffect: "message-wave"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Career Growth",
      description: "Access job opportunities, mentorship programs, and resources specifically curated for GenZ developers to advance your career.",
      gradient: "from-indigo-400 to-cyan-500",
      bgGradient: "from-indigo-400/10 to-cyan-500/10",
      pattern: "radial-gradient(circle at 70% 30%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)",
      accent: "bg-cyan-500/20",
      shape: "rocket",
      particles: [
        { icon: <Rocket className="w-3 h-3" />, delay: "0.1s", position: "top-8 right-6" },
        { icon: <Star className="w-2 h-2" />, delay: "0.6s", position: "bottom-8 left-6" },
        { icon: <Circle className="w-2 h-2" />, delay: "1s", position: "top-14 right-12" }
      ],
      hoverEffect: "rocket-launch"
    }
  ];

  return (
    <section className="py-32 px-4 relative overflow-hidden perspective-2000">
      {/* Enhanced 3D Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--genvo-primary)/0.1),transparent_50%)]" />

      {/* 3D Interactive Background */}
      <div className="absolute inset-0 opacity-5 interactive-bg-3d"></div>

      {/* 3D Floating Particles */}
      <div className="absolute top-20 left-20 w-1 h-1 bg-primary/60 rounded-full animate-ping particle-3d opacity-40" />
      <div className="absolute top-60 right-40 w-0.5 h-0.5 bg-accent/70 rounded-full animate-pulse particle-3d opacity-30" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-purple-400/50 rounded-full animate-ping particle-3d opacity-35" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6 animate-bounce-in backdrop-blur-sm hover-3d-lift cursor-pointer">
            <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '3s' }} />
            Why Choose GENVO?
          </div>

          <h2 className="text-4xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="block animate-slide-in-left hover-3d-tilt inline-block cursor-pointer">Empowering</span>
            <span className="relative block my-2 text-center">
              <span className="genvo-text-gradient animate-gradient-flow bg-clip-text inline-block animate-pulse relative hover-3d-rotate cursor-pointer">
                GenZ Developers
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary animate-shimmer opacity-80 inline-block w-full"></span>
                <span className="absolute -bottom-3 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-pulse inline-block w-full"></span>
              </span>
            </span>
            <span className="block animate-slide-in-right hover-3d-tilt inline-block cursor-pointer">Across India</span>
          </h2>

          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Join a community that empowers{" "}
            <span className="text-primary font-semibold hover:text-3d cursor-pointer transition-all duration-300">GenZ developers</span>{" "}
            with the tools, connections, and opportunities needed to excel in the modern tech industry.
            <span className="block mt-2 text-accent font-medium hover:text-3d cursor-pointer transition-all duration-300">
              Where innovation meets opportunity, and dreams become reality.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`genvo-card-elegant p-8 group relative overflow-hidden hover-lift feature-card-hover enhanced-shimmer tilt-effect transition-all duration-700 animate-fade-in-up cursor-pointer interactive-3d hover-3d-lift ${feature.hoverEffect} transform-gpu`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Unique background pattern for each card */}
              <div
                className="absolute inset-0 opacity-30"
                style={{ background: feature.pattern }}
              ></div>

              {/* Animated background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-20 transition-all duration-700 transform group-hover:translate-z-4`}></div>

              {/* 3D Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

              {/* Interactive 3D floating orbs */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/10 rounded-full animate-pulse group-hover:w-4 group-hover:h-4 group-hover:bg-white/30 transition-all duration-500 hover-3d-lift"></div>
              <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-accent/20 rounded-full animate-bounce group-hover:w-3 group-hover:h-3 group-hover:bg-accent/40 transition-all duration-700 hover-3d-rotate" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-primary/15 rounded-full animate-ping group-hover:w-2 group-hover:h-2 group-hover:bg-primary/25 transition-all duration-600 hover-3d-tilt" style={{ animationDelay: '1s' }}></div>

              {/* Enhanced 3D Morphing Background Shapes */}
              <div className={`absolute inset-0 transition-all duration-1000 group-hover:scale-110 opacity-10 group-hover:opacity-20`}>
                <div className={`w-full h-full bg-gradient-to-br ${feature.gradient} animate-morph-shape hover-3d-rotate`} style={{
                  clipPath: feature.shape === 'hexagon' ? 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' :
                           feature.shape === 'circle' ? 'circle(50% at 50% 50%)' :
                           feature.shape === 'trophy' ? 'polygon(20% 0%, 80% 0%, 90% 20%, 90% 80%, 80% 100%, 20% 100%, 10% 80%, 10% 20%)' :
                           feature.shape === 'message' ? 'polygon(0% 20%, 60% 20%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 60% 80%, 0% 80%)' :
                           'polygon(20% 0%, 80% 0%, 100% 30%, 82% 100%, 18% 100%, 0% 30%)'
                }}></div>
              </div>

              {/* Shape-specific background elements with 3D effects */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300 group-hover:rotate-180 group-hover:scale-125 transition-all duration-700 hover-3d-rotate cursor-pointer">
                {feature.shape === 'hexagon' && <Hexagon className="w-8 h-8" />}
                {feature.shape === 'circle' && <Circle className="w-8 h-8" />}
                {feature.shape === 'trophy' && <Trophy className="w-8 h-8" />}
                {feature.shape === 'message' && <MessageCircle className="w-8 h-8" />}
                {feature.shape === 'rocket' && <Rocket className="w-8 h-8" />}
              </div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.bgGradient} flex items-center justify-center text-white group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-2xl magnetic-icon transition-all duration-700 shadow-lg transform-gpu hover:animate-pulse hover-3d-lift`}>
                    <div className={`bg-gradient-to-br ${feature.gradient} p-3 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-xl shadow-lg backdrop-blur-sm hover-3d-rotate`}>
                      {feature.icon}
                    </div>
                  </div>
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 hover-3d-lift">
                    <ArrowRight className="w-3 h-3 text-primary" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-white group-hover:text-glow transition-all duration-500 relative transform group-hover:translate-y-1 hover-3d-tilt cursor-pointer">
                  {feature.title}
                  {/* Animated underline */}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500"></div>
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-white/90 transition-all duration-500 transform group-hover:translate-x-1 hover:text-3d">
                  {feature.description}
                </p>

                {/* Enhanced interactive progress line */}
                <div className="mt-6 h-1 w-full bg-border/30 rounded-full overflow-hidden relative">
                  <div className={`h-full bg-gradient-to-r ${feature.gradient} group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-700 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100`}></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
                </div>

                {/* Interactive ripple effect on click */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-active:opacity-100 transition-opacity duration-200 animate-ping"></div>

                {/* Dynamic energy waves */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
                <div className="absolute bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1200 origin-left" style={{ animationDelay: '0.2s' }}></div>

                {/* 3D Hover state overlay */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-2xl transition-all duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced 3D Call to Action */}
        <div className="text-center animate-fade-in-up hover-3d-lift" style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <GradientButton>
              <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </GradientButton>
            <GradientButton variant="variant">
              <Users className="w-5 h-5 mr-2" />
              Join Community
            </GradientButton>
          </div>

          <p className="text-sm text-muted-foreground mt-6 max-w-md mx-auto hover:text-3d cursor-pointer transition-all duration-300">
            Join thousands of developers already building amazing things with GENVO
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;