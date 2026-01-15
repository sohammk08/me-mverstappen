import { motion } from "framer-motion";
import { FaAward, FaStar, FaBolt, FaFlag, FaTrophy } from "react-icons/fa";

const milestones = [
  {
    year: "2005",
    title: "Karting Beginnings",
    desc: "Started karting at age 4, quickly showing exceptional talent in youth championships across Europe.",
    icon: FaStar,
    highlight: false,
  },
  {
    year: "2014",
    title: "Formula 3 Champion",
    desc: "Won the FIA European Formula 3 Championship, catching the attention of Red Bull motorsport advisors.",
    icon: FaAward,
    highlight: false,
  },
  {
    year: "2015",
    title: "F1 Debut — Youngest Ever",
    desc: "Made history as the youngest F1 driver at 17 years old, debuting with Scuderia Toro Rosso at the Australian GP.",
    icon: FaBolt,
    highlight: true,
  },
  {
    year: "2016",
    title: "Red Bull Promotion & First Win",
    desc: "Promoted to Red Bull Racing mid-season. Won his first race at the Spanish GP, becoming the youngest F1 winner ever.",
    icon: FaTrophy,
    highlight: true,
  },
  {
    year: "2021",
    title: "First World Championship",
    desc: "Won a dramatic title fight against Lewis Hamilton, clinching his first championship on the final lap in Abu Dhabi.",
    icon: FaTrophy,
    highlight: true,
  },
  {
    year: "2022",
    title: "Dominant Second Title",
    desc: "Secured his second championship with 15 victories — a record-breaking season of utter dominance.",
    icon: FaTrophy,
    highlight: true,
  },
  {
    year: "2023",
    title: "Historic Third Title",
    desc: "Achieved 19 wins in a single season — a new all-time record — securing his third consecutive championship.",
    icon: FaTrophy,
    highlight: true,
  },
  {
    year: "2024",
    title: "Fourth Championship",
    desc: "Continued his reign with another dominant campaign, cementing his legacy as one of the all-time greats.",
    icon: FaTrophy,
    highlight: true,
  },
  {
    year: "2025",
    title: "Championship Runner-Up",
    desc: "Finished 2nd with 8 Grand Prix victories, showing continued excellence despite increased competition.",
    icon: FaFlag,
    highlight: false,
  },
];

const CareerTimeline = () => {
  return (
    <section
      id="timeline"
      className="relative py-24 md:py-32 overflow-hidden bg-neutral-950"
    >
      <div className="absolute inset-0 bg-linear-to-b from-neutral-950 via-neutral-900/5 to-neutral-950 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="text-sm font-dms font-medium text-orange-400 uppercase tracking-widest">
              Career Journey
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-200 mb-4"
          >
            The Road to{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 via-red-500 to-yellow-500">
              Greatness
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-400 text-lg"
          >
            From karting prodigy to four-time world champion — a career defined
            by relentless pursuit of perfection.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Left vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[1.3px] bg-linear-to-b from-transparent via-neutral-800 via-50% to-transparent pointer-events-none" />

          <div className="space-y-6 md:space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Horizontal line to card */}
                <div className="absolute left-8 md:left-10 top-1/2 -translate-y-1/2 w-8 md:w-61 h-px bg-linear-to-r from-transparent via-neutral-700 to-neutral-700" />

                {/* Year badge/dot on vertical line */}
                <div className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
                  <span
                    className={`text-[11px] md:text-xs font-mono font-medium ${
                      milestone.highlight
                        ? "text-orange-400/80"
                        : "text-neutral-500"
                    }`}
                  >
                    {milestone.year}
                  </span>
                  <div
                    className={`w-2 h-2 rounded-full ${
                      milestone.highlight
                        ? "bg-orange-500 shadow-[0_0_0_4px_rgba(251,146,60,0.1)]"
                        : "bg-neutral-700"
                    }`}
                  />
                </div>

                <div className="w-full md:w-5/6 lg:w-3/4 ml-auto">
                  <motion.div
                    initial={{ scale: 0.95 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                    className={`relative p-4 rounded-xl transition-all duration-300 ${
                      milestone.highlight
                        ? "bg-neutral-900/80 border border-orange-500/30 shadow-lg shadow-orange-500/10"
                        : "bg-neutral-900/60 border border-neutral-800/60"
                    } hover:border-orange-500/40 hover:shadow-orange-500/5`}
                  >
                    <div className="absolute left-3 top-3 w-8 h-8 rounded-full bg-neutral-800/60 flex items-center justify-center border border-neutral-700/50">
                      <milestone.icon
                        className={`w-4 h-4 ${
                          milestone.highlight
                            ? "text-orange-400"
                            : "text-neutral-500"
                        }`}
                      />
                    </div>
                    <div className="pt-10">
                      <h3
                        className={`text-lg md:text-xl font-serif font-bold mb-2 transition-colors duration-300 ${
                          milestone.highlight
                            ? "text-orange-400/80"
                            : "text-neutral-200"
                        }`}
                      >
                        {milestone.title}
                      </h3>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        {milestone.desc}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
