import { useRef } from "react";
import heroImage from "/in-helmet.jpg";
import { SiRedbull } from "react-icons/si";
import { motion, useScroll, useTransform } from "framer-motion";

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
      {/* Background image */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Max Verstappen helmet close-up"
          className="w-full h-full object-cover object-right"
        />
      </motion.div>

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 md:bg-linear-to-r md:from-black md:via-black/80 mdto-transparent pointer-events-none z-10" />

      {/* Main content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 w-full h-full flex items-center"
      >
        <div className="pl-6 sm:pl-8 md:pl-12 lg:pl-24 pr-5 text-left space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 max-w-full md:max-w-3xl">
          {/* Flag & Country */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="inline-flex items-center gap-2"
          >
            <div className="flex h-3 sm:h-4 rounded overflow-hidden shadow-md ring-1 ring-white/10">
              <div className="w-6 sm:w-8 bg-[#AE1C28]" />
              <div className="w-6 sm:w-8 bg-white" />
              <div className="w-6 sm:w-8 bg-[#21468B]" />
            </div>
            <span className="text-xs sm:text-sm font-dms font-semibold tracking-widest text-orange-400/90 uppercase">
              Netherlands
            </span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-none text-white drop-shadow-[0_4px_12px_rgba(255,90,0,0.4)]"
          >
            Max
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-400 via-red-500 to-yellow-500 animate-gradient-x">
              Verstappen
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="inline-flex items-center text-base sm:text-lg justify-center uppercase px-3 py-1.5 rounded-2xl font-light bg-red-500/30 backdrop-blur-sm border border-zinc-800/80 leading-relaxed w-max"
          >
            <SiRedbull
              size={32}
              className="text-red-500 mr-2 my-auto sm:size-40"
            />
            <span className="my-auto font-dms text-white font-semibold text-sm sm:text-base">
              Red Bull Racing Driver
            </span>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, staggerChildren: 0.12 }}
            className="flex flex-wrap justify-start mt-4 sm:mt-6 gap-3 sm:gap-4 md:gap-5"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.15 }}
                className="group flex flex-col items-start px-3 pt-2 pb-3 bg-zinc-800/70 backdrop-blur-sm border border-zinc-800/80 rounded-2xl transition-all duration-300 flex-1 sm:flex-none min-w-[45%] sm:min-w-0"
              >
                <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-zinc-400">
                  {stat.label}
                </span>
                <div className="w-full flex justify-center mt-3 sm:mt-4 mb-1">
                  <span className="text-3xl sm:text-4xl font-mrat italic font-black text-white">
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
