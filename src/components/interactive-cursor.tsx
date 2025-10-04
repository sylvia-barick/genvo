import { useEffect, useState } from 'react';

const InteractiveCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [class*="interactive"], [class*="hover-3d"]');

    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  if (typeof window === 'undefined') return null;

  return (
    <>
      {/* 3D Cursor Dot */}
      <div
        className={`fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] transition-all duration-100 ${isHovering ? 'scale-150 bg-gradient-to-r from-green-400 to-cyan-400' : 'scale-100 bg-gradient-to-r from-green-500 to-cyan-500'}`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: `translate(-50%, -50%) translateZ(100px) ${isHovering ? 'scale(1.5)' : 'scale(1)'}`,
        }}
      />

      {/* 3D Cursor Ring */}
      <div
        className={`fixed top-0 left-0 w-10 h-10 border-2 rounded-full pointer-events-none z-[9998] transition-all duration-200 ${isHovering ? 'opacity-100 scale-150 border-green-400' : 'opacity-70 scale-100 border-green-500'}`}
        style={{
          left: `${mousePosition.x - 20}px`,
          top: `${mousePosition.y - 20}px`,
          transform: `translateZ(50px) ${isHovering ? 'scale(1.5)' : 'scale(1)'}`,
        }}
      />
    </>
  );
};

export default InteractiveCursor;
