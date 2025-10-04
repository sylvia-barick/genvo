import React from "react";
import { Vortex } from "@/components/ui/vortex";

function VortexDemo() {
  return (
    <div className="w-full max-w-6xl mx-auto rounded-md h-[25rem] overflow-hidden">
      <Vortex
        backgroundColor="transparent"
        baseHue={120}
        rangeY={200}
        particleCount={400}
        className="flex items-center flex-col justify-center px-4 md:px-10 py-8 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-4xl font-bold text-center mb-6">
          Join the GENVO Revolution
        </h2>
        <p className="text-white/80 text-sm md:text-lg max-w-2xl mt-4 text-center mb-8">
          Experience the future of developer communities with stunning visual effects and interactive animations.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset] font-semibold">
            Get Started
          </button>
          <button className="px-6 py-3 border border-white/30 text-white hover:bg-white/10 transition duration-200 rounded-lg font-semibold">
            Learn More
          </button>
        </div>
      </Vortex>
    </div>
  );
}

export { VortexDemo };
