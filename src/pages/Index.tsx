import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import CommunitySection from "@/components/community-section";
import InteractiveCursor from "@/components/interactive-cursor";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  const featuresAnimation = useScrollAnimation({ threshold: 0.2 });
  const communityAnimation = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="min-h-screen relative">
      {/* 3D Interactive Cursor */}
      <InteractiveCursor />

      <Header />

      <main>
        <section id="home">
          <HeroSection />
        </section>

        <section
          id="features"
          ref={featuresAnimation.ref as React.RefObject<HTMLElement>}
          className={`animate-on-scroll ${featuresAnimation.isVisible ? 'animate-in' : ''}`}
        >
          <FeaturesSection />
        </section>

        <section
          id="community"
          ref={communityAnimation.ref as React.RefObject<HTMLElement>}
          className={`animate-on-scroll ${communityAnimation.isVisible ? 'animate-in' : ''}`}
        >
          <CommunitySection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
