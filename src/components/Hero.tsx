import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/6935b8e4-8027-4f67-bed6-5a461b7945af/bucket/45893c68-1bd3-4c67-8736-4ebaaebbf497.jpg"
          alt="SpartaDecore — изготовление декораций"
          className="w-full h-full object-cover object-center opacity-60"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white">


      </div>
    </div>
  );
}