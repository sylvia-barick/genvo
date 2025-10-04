import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Github,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  MapPin,
  Phone,
  ExternalLink,
  Heart,
  Sparkles,
  Rocket
} from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log("Newsletter signup:", email);
  };

  const footerLinks = {
    product: [
      { name: "Hackathons", href: "#hackathons" },
      { name: "Challenges", href: "#challenges" },
      { name: "Community", href: "#community" },
      { name: "Events", href: "#events" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Contact", href: "#contact" },
      { name: "Blog", href: "#blog" }
    ],
    resources: [
      { name: "Documentation", href: "#docs" },
      { name: "Help Center", href: "#help" },
      { name: "API", href: "#api" },
      { name: "Status", href: "#status" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "DMCA", href: "#dmca" }
    ]
  };

  const socialLinks = [
    { name: "Twitter", href: "https://x.com/genvo_dev", icon: Twitter },
    { name: "LinkedIn", href: "https://linkedin.com/company/genvo", icon: Linkedin },
    { name: "GitHub", href: "https://github.com/genvo", icon: Github },
    { name: "YouTube", href: "https://youtube.com/@genvo", icon: Youtube },
    { name: "Instagram", href: "https://instagram.com/genvo_dev", icon: Instagram }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-background via-card/50 to-background border-t border-border/50 overflow-hidden">
      {/* Vortex Background Effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-green-500/5 to-teal-400/10 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-emerald-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-green-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-teal-400/15 rounded-full blur-xl animate-bounce-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="genvo-card-elegant p-12 animate-fade-in-up relative">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-400 to-green-500 flex items-center justify-center animate-pulse">
                  <Mail className="w-6 h-6 text-white" />
                </div>
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Stay Updated with{" "}
                <span className="genvo-text-gradient animate-gradient">GENVO</span>
              </h3>

              <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                Get the latest updates on hackathons, challenges, and community events delivered straight to your inbox.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-background/50 border-border/50 focus:border-emerald-400"
                  required
                />
                <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                  <Rocket className="w-5 h-5 mr-2" />
                  Subscribe
                </Button>
              </form>

              <p className="text-xs text-muted-foreground mt-4">
                By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        <Separator className="bg-border/50" />

        {/* Main Footer Content */}
        <div className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
              {/* Brand Section */}
              <div className="lg:col-span-2 animate-fade-in-up">
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img
                      src="/lovable-uploads/d6088163-65b6-4374-8819-9d063cf31eb9.png"
                      alt="GENVO Logo"
                      className="h-16 w-auto mr-4 transition-transform hover:scale-105"
                    />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                  </div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">GENVO</span>
                </div>

                <p className="text-muted-foreground mb-8 leading-relaxed max-w-md">
                  Empowering GenZ developers across India with hackathons, challenges, and a thriving community.
                  Join us in building the future of technology.
                </p>

                {/* Contact Info */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                    <span>India • 50+ Cities</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="w-5 h-5 text-emerald-400" />
                    <span>+91 99999 99999</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="w-5 h-5 text-emerald-400" />
                    <span>hello@genvo.dev</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-emerald-400 hover:border-emerald-400 transition-all duration-300 hover:scale-110"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Links Sections */}
              <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <h4 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-emerald-400" />
                    Product
                  </h4>
                  <ul className="space-y-3">
                    {footerLinks.product.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-muted-foreground hover:text-emerald-400 transition-colors duration-300 flex items-center gap-2 group"
                        >
                          {link.name}
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <h4 className="font-semibold text-foreground mb-6">Company</h4>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-muted-foreground hover:text-emerald-400 transition-colors duration-300 flex items-center gap-2 group"
                        >
                          {link.name}
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <h4 className="font-semibold text-foreground mb-6">Resources</h4>
                  <ul className="space-y-3">
                    {footerLinks.resources.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-muted-foreground hover:text-emerald-400 transition-colors duration-300 flex items-center gap-2 group"
                        >
                          {link.name}
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <h4 className="font-semibold text-foreground mb-6">Legal</h4>
                  <ul className="space-y-3">
                    {footerLinks.legal.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-muted-foreground hover:text-emerald-400 transition-colors duration-300 flex items-center gap-2 group"
                        >
                          {link.name}
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-border/50" />

        {/* Bottom Section */}
        <div className="py-8 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>© 2024 GENVO. Built with</span>
                <Heart className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                <span>by GenZ developers, for GenZ developers.</span>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="text-emerald-400">🏆 Best Tech Community 2024</span>
                <span className="text-emerald-400">🌟 4.9/5 Rating</span>
                <span className="text-emerald-400">🚀 10K+ Developers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;