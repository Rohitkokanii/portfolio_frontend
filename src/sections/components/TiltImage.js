import VanillaTilt from "vanilla-tilt";
import { useEffect, useRef } from "react";

export default function TiltImage() {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: -2, // tilt angle
        speed: 500,
        // scale: 1,
        glare: false,
        // "max-glare": 0.2,
        perspective: 600,
        gyroscope: true,
      });
    }

    return () => {
      tiltRef.current?.vanillaTilt?.destroy();
    };
  }, []);

  return (
    <div className="tilt-card" ref={tiltRef}>
      <img src="Rohit_Photo.png" alt="profile photo" className="profile-img" />
    </div>
  );
}
