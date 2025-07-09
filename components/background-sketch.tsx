"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "@/contexts/theme-context";

// Dynamically import p5 only on the client side
const BackgroundSketch = () => {
  const [isClient, setIsClient] = useState(false);
  const [noiseSeed, setNoiseSeed] = useState<number>(0);
  const canvasRef = useRef<HTMLDivElement>(null);
  const p5InstanceRef = useRef<any>(null);
  const { theme, mounted } = useTheme();

  useEffect(() => {
    setIsClient(true);
    // Generate random seed only on client-side
    setNoiseSeed(Math.floor(Math.random() * 1000));
  }, []);

  useEffect(() => {
    if (!isClient || !canvasRef.current || p5InstanceRef.current || !mounted || noiseSeed === 0) return;

    // Dynamically import p5 only when component mounts on client
    const loadP5 = async () => {
      const p5 = (await import('p5')).default;
      
      const sketch = (p: any) => {
        let time = 0;
        let breathingTime = 0;
        
        // Use the pre-generated noise seed
        p.noiseSeed(noiseSeed);
        
        // Line configuration with organic variations
        const getLineConfig = () => {
          if (theme === "dark") {
            // Monochromatic blues and purples for dark mode
            return [
              { 
                offset: 0.15, 
                speed: 0.005, 
                amplitude: 0.08, 
                opacity: 0.25, 
                hue: 220, 
                saturation: 25, 
                brightness: 85,
                strokeWeight: 0.8,
                noiseScale: 0.002,
                phaseOffset: 0
              },
              { 
                offset: 0.35, 
                speed: 0.008, 
                amplitude: 0.06, 
                opacity: 0.20, 
                hue: 240, 
                saturation: 30, 
                brightness: 80,
                strokeWeight: 0.6,
                noiseScale: 0.003,
                phaseOffset: 1.5
              },
              { 
                offset: 0.55, 
                speed: 0.006, 
                amplitude: 0.10, 
                opacity: 0.30, 
                hue: 260, 
                saturation: 35, 
                brightness: 90,
                strokeWeight: 1.0,
                noiseScale: 0.0015,
                phaseOffset: 3.0
              },
              { 
                offset: 0.75, 
                speed: 0.009, 
                amplitude: 0.07, 
                opacity: 0.18, 
                hue: 280, 
                saturation: 20, 
                brightness: 75,
                strokeWeight: 0.7,
                noiseScale: 0.0025,
                phaseOffset: 4.5
              },
              { 
                offset: 0.45, 
                speed: 0.007, 
                amplitude: 0.09, 
                opacity: 0.22, 
                hue: 230, 
                saturation: 28, 
                brightness: 82,
                strokeWeight: 0.9,
                noiseScale: 0.0018,
                phaseOffset: 6.0
              }
            ];
          } else {
            // Soft blues and grays for light mode
            return [
              { 
                offset: 0.15, 
                speed: 0.005, 
                amplitude: 0.08, 
                opacity: 0.15, 
                hue: 220, 
                saturation: 20, 
                brightness: 95,
                strokeWeight: 0.8,
                noiseScale: 0.002,
                phaseOffset: 0
              },
              { 
                offset: 0.35, 
                speed: 0.008, 
                amplitude: 0.06, 
                opacity: 0.12, 
                hue: 240, 
                saturation: 25, 
                brightness: 90,
                strokeWeight: 0.6,
                noiseScale: 0.003,
                phaseOffset: 1.5
              },
              { 
                offset: 0.55, 
                speed: 0.006, 
                amplitude: 0.10, 
                opacity: 0.18, 
                hue: 200, 
                saturation: 15, 
                brightness: 88,
                strokeWeight: 1.0,
                noiseScale: 0.0015,
                phaseOffset: 3.0
              },
              { 
                offset: 0.75, 
                speed: 0.009, 
                amplitude: 0.07, 
                opacity: 0.10, 
                hue: 260, 
                saturation: 18, 
                brightness: 92,
                strokeWeight: 0.7,
                noiseScale: 0.0025,
                phaseOffset: 4.5
              },
              { 
                offset: 0.45, 
                speed: 0.007, 
                amplitude: 0.09, 
                opacity: 0.14, 
                hue: 230, 
                saturation: 22, 
                brightness: 89,
                strokeWeight: 0.9,
                noiseScale: 0.0018,
                phaseOffset: 6.0
              }
            ];
          }
        };

        let lines = getLineConfig();

        // Modular function to draw a single animated line
        const drawLine = (lineConfig: any, currentTime: number) => {
          const baseHeight = p.height * lineConfig.offset;
          
          // Set stroke properties for this line
          p.stroke(
            lineConfig.hue, 
            lineConfig.saturation, 
            lineConfig.brightness, 
            lineConfig.opacity
          );
          p.strokeWeight(lineConfig.strokeWeight);
          
          // Breathing effect - subtle global modulation
          const breathing = p.sin(breathingTime) * 0.1 + 0.9;
          
          // Draw the line
          p.beginShape();
          for (let x = 0; x <= p.width; x += 2) {
            // Multiple Perlin noise layers for organic movement
            const noise1 = p.noise(
              x * lineConfig.noiseScale, 
              currentTime * lineConfig.speed + lineConfig.phaseOffset
            );
            const noise2 = p.noise(
              x * lineConfig.noiseScale * 2, 
              currentTime * lineConfig.speed * 0.7 + lineConfig.phaseOffset
            );
            const noise3 = p.noise(
              x * lineConfig.noiseScale * 0.5, 
              currentTime * lineConfig.speed * 1.3 + lineConfig.phaseOffset
            );
            
            // Combine noise layers with different weights for organic movement
            const combinedNoise = (noise1 * 0.5 + noise2 * 0.3 + noise3 * 0.2);
            
            // Apply breathing effect to amplitude
            const modulatedAmplitude = lineConfig.amplitude * breathing;
            
            // Map to screen coordinates with modulated amplitude
            const y = p.map(
              combinedNoise, 
              0, 1, 
              baseHeight - p.height * modulatedAmplitude, 
              baseHeight + p.height * modulatedAmplitude
            );
            
            p.vertex(x, y);
          }
          p.endShape();
        };

        p.setup = () => {
          const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
          if (canvasRef.current) {
            canvas.parent(canvasRef.current);
          }
          p.colorMode(p.HSB, 360, 100, 100, 1);
          p.noFill();
          p.smooth();
        };

        p.draw = () => {
          p.clear();
          
          // Update line config if theme changed
          lines = getLineConfig();
          
          // Update breathing time
          breathingTime += 0.01;
          
          // Draw all lines
          lines.forEach((lineConfig) => {
            drawLine(lineConfig, time);
          });
          
          time += 0.01;
        };

        p.windowResized = () => {
          p.resizeCanvas(p.windowWidth, p.windowHeight);
        };
      };

      if (canvasRef.current) {
        p5InstanceRef.current = new p5(sketch, canvasRef.current);
      }
    };

    loadP5();

    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
        p5InstanceRef.current = null;
      }
    };
  }, [isClient, theme, mounted, noiseSeed]);

  return (
    <div 
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
};

// Export as dynamic component with SSR disabled
export default dynamic(() => Promise.resolve(BackgroundSketch), {
  ssr: false,
  loading: () => <div className="fixed inset-0 -z-10 pointer-events-none" />
}); 