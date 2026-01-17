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
      className="relative py-24 md:py-32 overflow-hidden bg-gray-950"
    >
      {/* Header */}
      <div className="text-center mb-16 md:mb-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium text-amber-400 uppercase tracking-widest"
        >
          Hall of Fame
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl mt-3 font-serif font-bold text-white"
        >
          Record-Breaking{" "}
          <span className="bg-linear-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            Achievements
          </span>
        </motion.h2>
      </div>

      <div
        className="relative z-20 container mx-auto px-6 lg:px-12"
        ref={sectionRef}
      >
        <div className="flex space-x-5">
          <div className="w-200 h-230">
            <img src="/victory-pose.png" className="h-full w-full" />
          </div>
          <div className="w-1/2 absolute inset-0 bg-linear-to-t from-gray-950 via-transparent pointer-events-none z-10" />
          <div className="flex flex-col justify-between my-15">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-16">
              {achievements.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <>
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                      className="flex flex-col justify-between p-4 rounded-2xl overflow-hidden text-center backdrop-blur-md border transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white/5 border-white/10 hover:bg-white/10"
                    >
                      {/* Icon */}
                      <div
                        className={` py-1.5 rounded-full  transition-transform duration-300 group-hover:scale-110 ${
                          stat.featured
                            ? "bg-linear-to-br from-yellow-400 to-amber-500"
                            : "bg-linear-to-br from-blue-500/20 to-blue-600/10"
                        }`}
                      >
                        <Icon
                          className={`w-6 h-6 md:w-7 md:h-7 mx-auto ${
                            stat.featured ? "text-black" : "text-blue-400"
                          }`}
                        />
                      </div>

                      {/* Stats */}
                      <div className="-space-x-0.5 mt-3">
                        <p
                          className={`text-4xl md:text-5xl lg:text-6xl font-bebas font-extrabold mt-3 mb-1 transition-all duration-300 ${
                            stat.featured
                              ? "bg-linear-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent group-hover:scale-105"
                              : "text-white group-hover:text-blue-400"
                          }`}
                        >
                          {stat.value}
                        </p>
                        <p className="text-gray-200 font-bold font-dms uppercase mb-1">
                          {stat.label}
                        </p>
                      </div>
                    </motion.div>
                  </>
                );
              })}
            </div>

            {/* Recent Wins */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="max-w-3xl"
            >
              <h3 className="text-4xl font-dms font-extrabold text-center text-white mb-8">
                2025 Season{" "}
                <span className="bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Victories
                </span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                {recentWins.map((win, index) => (
                  <motion.div
                    key={win.race}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="group relative p-5 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 text-center overflow-hidden transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-xl"
                  >
                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-linear-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <p className="relative text-3xl font-bebas tracking-wide font-bold text-white/90 italic mt-2 group-hover:bg-linear-to-r group-hover:from-amber-400 group-hover:to-orange-500 group-hover:bg-clip-text group-hover:text-transparent transition-colors leading-tight">
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
