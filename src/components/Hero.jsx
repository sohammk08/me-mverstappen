import { useRef } from "react";
import heroImage from "/in-helmet.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { SiRedbull } from "react-icons/si";

const stats = [
  { value: "71", label: "Grand Prix Wins" },
  { value: "127", label: "Podium Finishes" },
  { value: "4", label: "World Titles" },
];

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 1.08]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background image fitting full screen */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Max Verstappen helmet close-up"
          className="w-full h-full object-cover object-right"
        />
      </motion.div>

      {/* Strong dark overlay gradient from left (fully black) to right (transparent) */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent pointer-events-none z-10" />

      {/* Main content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 w-full h-full flex items-center"
      >
        <div className="pl-30 text-left space-y-8 lg:space-y-10 max-w-3xl">
          {/* Flag & Country */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="inline-flex items-center gap-3"
          >
            <div className="flex h-5 rounded overflow-hidden shadow-md ring-1 ring-white/10">
              <div className="w-8 bg-[#AE1C28]" />
              <div className="w-8 bg-white" />
              <div className="w-8 bg-[#21468B]" />
            </div>
            <span className="text-base font-dms font-semibold tracking-widest text-orange-400/90 uppercase">
              Netherlands
            </span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="font-bebas text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-none text-white drop-shadow-[0_4px_12px_rgba(255,90,0,0.4)]"
          >
            Max
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-400 via-red-500 to-yellow-500 animate-gradient-x">
              Verstappen
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex text-xl justify-center uppercase px-4 py-2 rounded-2xl font-light bg-red-500/30 backdrop-blur-sm border border-zinc-800/80 leading-relaxed"
          >
            <SiRedbull size={50} className="text-red-500 mr-3 my-auto" />
            <span className="my-auto font-dms text-white font-semibold">
              Red Bull Racing Driver
            </span>
          </motion.span>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, staggerChildren: 0.12 }}
            className="flex flex-wrap justify-start mt-8 gap-5 sm:gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.15 }}
                className="group flex flex-col items-start px-4 pt-3 pb-4 bg-zinc-800/70 backdrop-blur-sm border border-zinc-800/80 rounded-2xl transition-all duration-300"
              >
                <span className="text-xs sm:text-sm font-medium uppercase tracking-wider text-zinc-400">
                  {stat.label}
                </span>
                <div className="w-full flex justify-center mt-5 mb-1.5">
                  <span className="text-5xl font-mrat italic font-black text-white">
                    {stat.value}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
