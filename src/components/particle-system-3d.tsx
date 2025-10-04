import { useEffect, useRef } from 'react';

const ParticleSystem3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;

    const container = containerRef.current;
    const particles: HTMLDivElement[] = [];

    // Create floating particles
    const createParticles = () => {
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-1 h-1 rounded-full opacity-30 animate-pulse';
        particle.style.background = `radial-gradient(circle, hsl(${Math.random() * 60 + 120}, 70%, ${Math.random() * 30 + 50}%) 0%, transparent 70%)`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 3}s`;
        particle.style.animationDuration = `${3 + Math.random() * 4}s`;

        container.appendChild(particle);
        particles.push(particle);
      }
    };

    createParticles();

    return () => {
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
    />
  );
};

export default ParticleSystem3D;
