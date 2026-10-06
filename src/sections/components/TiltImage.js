import VanillaTilt from "vanilla-tilt";
import { useEffect, useRef } from "react";

export default function TiltImage() {
  const tiltRef = useRef(null);

  useEffect(() => {
    const element = tiltRef.current;

    if (!element) return;

    VanillaTilt.init(element, {
      max: 2,
      speed: 500,
      perspective: 600,
      scale: 1.01,
      glare: false,
      gyroscope: true,
    });

    return () => {
      element.vanillaTilt?.destroy();
    };
  }, []);

  return (
    <div className="tilt-card" ref={tiltRef}>
      <img src="Rohit_Photo.png" alt="Rohit Kokani" className="profile-img" />
    </div>
  );
}
