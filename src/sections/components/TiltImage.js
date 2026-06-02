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
      <img
        src="https://tse4.mm.bing.net/th/id/OIP.-so6U1efiXqGkHDYPYmczAHaHa?w=2000&h=2000&rs=1&pid=ImgDetMain&o=7&rm=3"
        alt="profile"
        className="profile-img"
      />
    </div>
  );
}
