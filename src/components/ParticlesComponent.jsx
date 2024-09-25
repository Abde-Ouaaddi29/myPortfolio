import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine); // Load slim version of tsparticles to optimize performance
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: { value: "#FFFFFF" },
          // position: {value : "absolute"}
        },
        
        fpsLimit: 120,
        interactivity: {
          events: {
            resize: true,
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#FFA500" }, // Particle color
          links: {
            color: "#FFA500",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 80,
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 4 } },
        },
        detectRetina: true,
        fullScreen: { enable: false }, 

      }}
      style={{
        position: 'absolute', 
        top:0,
        left:0,
        width: '100%', 
        height: '100%',
        zIndex: -1

      }}
    />
  );
};

export default ParticlesComponent;
