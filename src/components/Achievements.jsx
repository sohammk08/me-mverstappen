import {
  FaFlag,
  FaFire,
  FaMedal,
  FaTrophy,
  FaBullseye,
  FaStopwatch,
} from "react-icons/fa";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const achievements = [
  {
    icon: FaTrophy,
    value: "4",
    label: "World Championships",
    sublabel: "2021–2024",
    featured: true,
  },
  {
    icon: FaFlag,
    value: "71",
    label: "Race Victories",
    sublabel: "All-time 3rd",
    featured: false,
  },
  {
    icon: FaMedal,
    value: "127",
    label: "Podium Finishes",
    sublabel: "Career Total",
    featured: false,
  },
  {
    icon: FaStopwatch,
    value: "48",
    label: "Pole Positions",
    sublabel: "Career Total",
    featured: false,
  },
  {
    icon: FaFire,
    value: "19",
    label: "Wins in One Season",
    sublabel: "2023 Record",
    featured: true,
  },
  {
    icon: FaBullseye,
    value: "17",
    label: "Years Old",
    sublabel: "Youngest F1 Driver",
    featured: false,
  },
];

const recentWins = [
  { race: "Abu Dhabi Grand Prix", flag: "🇦🇪", year: "2025" },
  { race: "Qatar Grand Prix", flag: "🇶🇦", year: "2025" },
  { race: "São Paulo Grand Prix", flag: "🇧🇷", year: "2025" },
  { race: "United States Grand Prix", flag: "🇺🇸", year: "2025" },
];

function Achievements() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="achievements"
      className="relative py-20 md:py-28 overflow-hidden bg-gray-950"
    >
      {/* Header */}
      <div className="text-center -mb-10 md:mb-18">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs font-dms font-medium text-orange-400 uppercase tracking-widest"
        >
          Hall of Fame
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[1.75rem] md:text-4xl lg:text-5xl mt-0.5 font-serif font-bold text-white"
        >
          Record-Breaking{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 via-red-500 to-yellow-500">
            Achievements
          </span>
        </motion.h2>
      </div>

      <div
        className="relative z-20 container mx-auto px-5 lg:px-10"
        ref={sectionRef}
      >
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-4">
          <div className="w-full lg:w-auto lg:shrink-0">
            <div className="relative w-full lg:w-160 h-160 md:h-184 mx-auto">
              <img
                src="/victory-pose.png"
                className="h-full w-full object-cover"
                alt="Victory pose"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-transparent pointer-events-none z-10" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-center lg:justify-between lg:my-12">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 max-w-5xl mx-auto mb-10 lg:mb-14">
              {achievements.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                    className="flex flex-col justify-between p-3.5 rounded-2xl overflow-hidden text-center backdrop-blur-md border transition-all duration-300 hover:scale-103 hover:shadow-xl bg-white/5 border-white/10 hover:bg-white/10"
                  >
                    {/* Icon */}
                    <div
                      className={`py-1 rounded-full transition-transform duration-300 ${
                        stat.featured
                          ? "bg-linear-to-br from-yellow-400 to-amber-500"
                          : "bg-linear-to-br from-blue-500/20 to-blue-600/10"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 md:w-6 md:h-6 mx-auto ${
                          stat.featured ? "text-black" : "text-blue-400"
                        }`}
                      />
                    </div>

                    {/* Stats */}
                    <div className="-space-x-0.5 mt-2">
                      <p
                        className={`text-2xl md:text-4xl lg:text-5xl font-bebas font-extrabold mt-2 mb-1 transition-all duration-300 ${
                          stat.featured
                            ? "bg-linear-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent"
                            : "text-white group-hover:text-blue-400"
                        }`}
                      >
                        {stat.value}
                      </p>
                      <p className="text-xs md:text-sm text-gray-200 font-bold font-dms uppercase mb-1">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Recent Wins */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="max-w-3xl mx-auto lg:mx-0"
            >
              <h3 className="text-xl md:text-2xl font-dms font-extrabold text-center text-white mb-6 md:mb-7">
                2025 Season{" "}
                <span className="bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Victories
                </span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
                {recentWins.map((win, index) => (
                  <motion.div
                    key={win.race}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="group relative p-3 md:p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 text-center overflow-hidden transition-all duration-300 hover:bg-white/10 hover:scale-103 hover:shadow-lg"
                  >
                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-linear-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <p className="relative text-lg md:text-2xl font-bebas tracking-wide font-bold text-white/90 italic mt-1 md:mt-2 group-hover:bg-linear-to-r group-hover:from-amber-400 group-hover:to-orange-500 group-hover:bg-clip-text group-hover:text-transparent transition-colors leading-tight">
                      {win.race}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
