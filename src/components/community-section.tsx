import { GradientButton } from "@/components/ui/gradient-button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, MessageSquare, Users, Trophy, Star, Quote, MapPin, Calendar, Award } from "lucide-react";

const CommunitySection = () => {
  const testimonials = [
    {
      name: "Arjun Sharma",
      role: "Full Stack Developer",
      location: "Mumbai, India",
      content: "GENVO helped me land my dream job at a top tech company. The hackathons and networking events opened doors I never knew existed.",
      avatar: "👨‍💻",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "Frontend Engineer",
      location: "Bangalore, India",
      content: "The community support is incredible. I went from junior developer to tech lead in just 18 months thanks to GENVO's mentorship program.",
      avatar: "👩‍💻",
      rating: 5
    },
    {
      name: "Rohit Kumar",
      role: "DevOps Engineer",
      location: "Delhi, India",
      content: "Winning my first hackathon through GENVO gave me the confidence to pursue entrepreneurship. Now I'm building my own startup!",
      avatar: "👨‍🚀",
      rating: 5
    }
  ];

  const stats = [
    { icon: Users, label: "Active Developers", value: "10,000+", color: "from-blue-400 to-purple-500" },
    { icon: Trophy, label: "Hackathons Hosted", value: "500+", color: "from-yellow-400 to-orange-500" },
    { icon: MapPin, label: "Cities Covered", value: "50+", color: "from-green-400 to-emerald-500" },
    { icon: Award, label: "Success Stories", value: "1,000+", color: "from-pink-400 to-rose-500" }
  ];

  const achievements = [
    "🏆 Best Tech Community 2024",
    "🚀 500+ Startup Success Stories",
    "🌟 4.9/5 Community Rating",
    "💡 Innovation Hub of the Year"
  ];

  return (
    <section className="py-32 px-4 relative overflow-hidden perspective-2000">
      {/* Enhanced 3D Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card/10 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--genvo-primary)/0.1),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(var(--genvo-accent)/0.1),transparent_60%)]" />

      {/* 3D Interactive Background */}
      <div className="absolute inset-0 opacity-3 interactive-bg-3d"></div>

      {/* 3D Floating Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-ping particle-3d opacity-60" />
      <div className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full animate-ping delay-1000 particle-3d opacity-50" />
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-ping delay-500 particle-3d opacity-55" />

      {/* 3D Floating Orbs */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full animate-float-3d blur-sm" />
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-gradient-to-br from-emerald-400/40 to-teal-400/40 rounded-full animate-float-3d delay-1500 blur-sm" />

      <div className="container mx-auto relative z-10">
        {/* Section Header with 3D Effects */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6 animate-bounce-in hover-3d-lift cursor-pointer">
            <Users className="w-4 h-4 hover-3d-rotate" />
            Join Our Thriving Community
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            Where{" "}
            <span className="genvo-text-gradient animate-gradient hover-3d-tilt inline-block cursor-pointer">Innovation</span>{" "}
            Meets Community
          </h2>

          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed hover:text-3d cursor-pointer transition-all duration-300">
            Join thousands of GenZ developers across India who are building the future of technology.
            Connect, collaborate, and grow together in our vibrant ecosystem.
          </p>
        </div>

        {/* Enhanced 3D Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 relative">
          {stats.map((stat, index) => (
            <div className="relative group">
              {/* 3D Floating Oval Elements around each card */}
              <div className="absolute -top-6 -left-6 w-4 h-6 bg-gradient-to-br from-blue-400/40 to-purple-400/40 oval-3d animate-revolve-oval-3d opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -top-4 -right-4 w-3 h-5 bg-gradient-to-br from-emerald-400/50 to-teal-400/50 oval-3d animate-pulse opacity-60 group-hover:opacity-90 transition-opacity duration-700" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-6 -left-4 w-5 h-4 bg-gradient-to-br from-violet-400/40 to-pink-400/40 oval-3d animate-bounce opacity-50 group-hover:opacity-80 transition-opacity duration-600" style={{ animationDelay: '2s' }}></div>
              <div className="absolute -bottom-4 -right-6 w-4 h-6 bg-gradient-to-br from-cyan-400/45 to-blue-400/45 oval-3d animate-ping opacity-55 group-hover:opacity-85 transition-opacity duration-800" style={{ animationDelay: '0.5s' }}></div>

              {/* Main Stats Card with Enhanced 3D Effects */}
              <div
                key={index}
                className="card-3d-enhanced p-8 text-center animate-fade-in-up group cursor-pointer relative overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-all duration-700 transform group-hover:translate-z-4`}></div>

                {/* 3D Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

                {/* Interactive icon with 3D rotation */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-2xl transform-gpu relative overflow-hidden`}>
                    {/* Rotating border ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-spin opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDuration: '3s' }}></div>

                    {/* Main icon with 3D effects */}
                    <div className="relative z-10 transform-gpu group-hover:scale-110 group-hover:-translate-z-2 transition-all duration-500">
                      <stat.icon className="w-10 h-10 group-hover:animate-bounce drop-shadow-lg" />
                    </div>

                    {/* Floating particles around icon */}
                    <div className="absolute top-0 right-0 w-2 h-2 bg-white/60 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                    <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-accent/70 rounded-full animate-pulse opacity-0 group-hover:opacity-100" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                </div>

                {/* Stats value with 3D text effect */}
                <div className="relative mb-3">
                  <div className="text-4xl lg:text-5xl font-bold genvo-text-gradient hover:text-3d cursor-pointer transition-all duration-300 transform-gpu group-hover:scale-110 group-hover:-translate-y-1 relative">
                    {stat.value}
                    {/* Animated underline */}
                    <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${stat.color} group-hover:w-full transition-all duration-500`}></div>
                  </div>
                </div>

                {/* Stats label with enhanced styling */}
                <div className="text-sm text-muted-foreground font-medium hover:text-3d cursor-pointer transition-all duration-300 transform-gpu group-hover:translate-y-1 group-hover:text-white relative">
                  {stat.label}
                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </div>

                {/* 3D corner accent */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-white/20 to-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>

                {/* Enhanced hover state overlay */}
                <div className="absolute inset-0 border border-white/10 rounded-2xl transition-all duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced 3D Testimonials Section */}
        <div className="mb-20 relative">
          {/* Floating Quote Bubbles */}
          <div className="absolute -top-8 left-10 quote-bubble-3d animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            "Amazing community!"
          </div>
          <div className="absolute -top-4 right-16 quote-bubble-3d animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
            "Life-changing experience"
          </div>
          <div className="absolute top-8 right-8 quote-bubble-3d animate-fade-in-up" style={{ animationDelay: '2.5s' }}>
            "Best decision ever"
          </div>

          <h3 className="text-3xl lg:text-4xl font-bold text-center mb-16 animate-fade-in-up hover-3d-tilt cursor-pointer animate-slide-left-right relative">
            What Our{" "}
            <span className="genvo-text-gradient hover-3d-rotate inline-block cursor-pointer">Community Says</span>
            {/* Animated accent line */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary animate-shimmer opacity-60"></div>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative group">
                {/* Floating testimonial particles */}
                <div className="testimonial-particle absolute top-4 right-4 opacity-0 group-hover:opacity-100" style={{ animationDelay: `${index * 0.5}s` }}></div>
                <div className="testimonial-particle absolute bottom-6 left-6 opacity-0 group-hover:opacity-80" style={{ animationDelay: `${index * 0.5 + 1}s` }}></div>
                <div className="testimonial-particle absolute top-1/2 right-8 opacity-0 group-hover:opacity-60" style={{ animationDelay: `${index * 0.5 + 2}s` }}></div>

                <div className="testimonial-card-3d animate-fade-in-up group cursor-pointer relative overflow-hidden" style={{ animationDelay: `${index * 0.2}s` }}>
                  {/* Morphing background */}
                  <div className="morphing-bg-3d opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>

                  {/* 3D Shimmer overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

                  <div className="relative z-10">
                    {/* Enhanced 3D Star Rating */}
                    <div className="star-rating-3d mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="star-3d w-5 h-5 fill-yellow-400 text-yellow-400 hover:scale-125 transition-all duration-300"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>

                    {/* Enhanced Quote and Content */}
                    <div className="relative mb-8">
                      <Quote className="absolute -top-3 -left-3 w-10 h-10 text-primary/30 hover-3d-rotate group-hover:text-primary/50 transition-all duration-500 group-hover:scale-125 group-hover:-rotate-12" />
                      <p className="text-muted-foreground leading-relaxed pl-8 italic hover:text-3d transition-all duration-300 text-lg group-hover:text-foreground/90 group-hover:translate-x-2">
                        "{testimonial.content}"
                      </p>
                      {/* Animated quote mark trail */}
                      <div className="absolute top-0 right-0 w-2 h-2 bg-primary/40 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                    </div>

                    {/* Enhanced User Profile */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center text-xl hover-3d-lift cursor-pointer transform-gpu group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent animate-pulse opacity-0 group-hover:opacity-100"></div>
                          <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">{testimonial.avatar}</span>
                        </div>
                        {/* Floating accent ring */}
                        <div className="absolute -inset-1 rounded-full border-2 border-primary/20 animate-ping opacity-0 group-hover:opacity-100"></div>
                      </div>

                      <div className="flex-1">
                        <div className="font-bold text-foreground hover:text-3d cursor-pointer transition-all duration-300 text-lg group-hover:text-primary group-hover:translate-x-1">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground hover:text-3d cursor-pointer transition-all duration-300 group-hover:text-accent group-hover:translate-x-1">
                          {testimonial.role}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground hover:text-3d cursor-pointer transition-all duration-300 group-hover:text-primary">
                          <MapPin className="w-3 h-3 hover-3d-lift group-hover:animate-bounce" />
                          <span className="group-hover:translate-x-1 transition-transform duration-300">{testimonial.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* 3D Corner Accents */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-br from-accent/40 to-primary/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce"></div>

                    {/* Enhanced hover border */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-2xl transition-all duration-500 pointer-events-none"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced 3D Achievements Section */}
        <div className="mb-20 animate-fade-in-up hover-3d-lift" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8 hover-3d-tilt cursor-pointer">
            Our{" "}
            <span className="genvo-text-gradient hover-3d-rotate inline-block cursor-pointer">Achievements</span>
          </h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="genvo-card-elegant p-4 text-center animate-fade-in-up hover:scale-105 transition-all duration-300 hover-3d-lift cursor-pointer interactive-3d"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl mb-2 hover:text-3d transition-all duration-300">{achievement}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced 3D CTA Section */}
        <div className="text-center animate-fade-in-up hover-3d-lift" style={{ animationDelay: '0.8s' }}>
          <div className="genvo-card-elegant p-12 max-w-2xl mx-auto hover-3d-lift interactive-3d">
            <h3 className="text-3xl font-bold mb-4 hover-3d-tilt cursor-pointer">
              Ready to Join the{" "}
              <span className="genvo-text-gradient hover-3d-rotate inline-block cursor-pointer">GENVO Community</span>?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg hover:text-3d cursor-pointer transition-all duration-300">
              Be part of India's largest GenZ developer community. Connect, learn, and grow with fellow developers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton>
                <Users className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Join Community
                <MessageSquare className="w-5 h-5 ml-2" />
              </GradientButton>
              <GradientButton variant="variant">
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </GradientButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;