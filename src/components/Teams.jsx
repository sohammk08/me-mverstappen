import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const teams = [
  {
    name: "Scuderia Toro Rosso",
    years: "2015 — 2016",
    description:
      "Made Formula 1 history as the youngest driver to ever start a Grand Prix. Showed consistent flashes of brilliance that led to an early promotion to a top team.",
    stats: { races: 23, points: 43, bestFinish: "6th" },
    image: "/toro-rosso.jpg",
    gradientFrom: "from-blue-500/20",
    gradientTo: "to-indigo-600/10",
  },
  {
    name: "Red Bull Racing",
    years: "2016 — Present",
    description:
      "Promoted mid-2016 and immediately won on debut. Has since become the face of the team, securing 4 World Championships and 71 Grand Prix victories.",
    stats: { races: 182, wins: 71, championships: 4 },
    image: "/redbull-car.png",
    gradientFrom: "from-primary/20",
    gradientTo: "to-accent/10",
    current: true,
  },
];

function Teams() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="teams"
      className="relative py-20 md:py-28 overflow-hidden bg-neutral-950"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-card/30 to-background pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-5 lg:px-10" ref={sectionRef}>
        {/* Header */}
        <div className="text-center mb-14 md:mb-18">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-dms font-medium text-orange-400 uppercase tracking-widest"
          >
            Formula 1 Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-neutral-200 mt-1.5 mb-3"
          >
            Teams &{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 via-red-500 to-yellow-500">
              Legacy
            </span>
          </motion.h2>
        </div>

        {/* Teams Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 max-w-6xl mx-auto">
          {teams.map((team, index) => (
            <motion.div
              key={team.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group relative"
            >
              <div className="relative flex flex-col md:h-80 lg:h-110 overflow-hidden rounded-3xl bg-neutral-900/80 border border-neutral-800 hover:border-orange-500/30 shadow-xl hover:shadow-orange-500/10 tile-hover-effect">
                {/* Image & overlay */}
                <div className="relative min-h-54 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-linear-to-t ${team.gradientFrom} ${team.gradientTo} to-transparent z-10`}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent z-10" />

                  <motion.img
                    src={team.image}
                    alt={team.name}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      team.name === "Scuderia Toro Rosso" ? "scale-125" : ""
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="relative justify-between p-5 pb-6 md:p-6 md:pb-12">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-2xl font-bebas tracking-wide font-bold text-white/90 italic duration-300">
                        {team.name}
                      </h3>
                      <p className="text-xs text-gray-400 font-dms">
                        {team.years}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-white/90 font-mrat leading-relaxed">
                    {team.description}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-3 p-3 mt-4 rounded-xl border-2 border-neutral-800">
                    {Object.entries(team.stats).map(([key, value]) => (
                      <div
                        key={key}
                        className="mx-auto text-center text-white/90"
                      >
                        <p className="text-xl font-bebas font-extrabold italic">
                          {value}
                        </p>
                        <p className="text-xs font-dms text-gray-400 uppercase tracking-wider">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Teams;