import { motion } from "framer-motion";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const socialLinks = [
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://instagram.com/maxverstappen1",
    handle: "@maxverstappen1",
  },
  {
    name: "X / Twitter",
    icon: FaTwitter,
    url: "https://twitter.com/Max33Verstappen",
    handle: "@Max33Verstappen",
  },
];

const Footer = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer
      id="contact"
      className="relative py-16 md:py-24 overflow-hidden bg-neutral-950"
    >
      <div className="absolute inset-0 bg-linear-to-t from-neutral-900/50 via-neutral-950 to-neutral-950 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-radial from-orange-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-neutral-800 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="text-4xl md:text-5xl font-serif font-bold text-neutral-100">
              MV<span className="text-gradient-ember">1</span>
            </span>
          </motion.div>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 mb-8 max-w-md mx-auto"
          >
            Follow Max Verstappen's journey as he continues to redefine
            excellence in Formula 1.
          </motion.p>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-4 mb-12"
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-3 rounded-full bg-neutral-900/50 border border-neutral-800 hover:border-orange-500/50 hover:bg-neutral-900 transition-all"
              >
                <social.icon className="w-5 h-5 text-neutral-400 group-hover:text-orange-400 transition-colors" />
                <span className="text-sm text-neutral-400 group-hover:text-neutral-200 transition-colors hidden sm:inline">
                  {social.handle}
                </span>
              </a>
            ))}
          </motion.div>

          <motion.a
            href="https://www.redbullracing.com"
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors mb-12"
          >
            Official Team:{" "}
            <span className="font-medium text-gradient-gold">
              Red Bull Racing
            </span>
          </motion.a>

          <div className="w-32 h-0.5 mx-auto mb-8 bg-linear-to-r from-transparent via-red-500 to-transparent" />

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xs text-neutral-600"
          >
            <p className="mb-2">© 2026 Max Verstappen. All rights reserved.</p>
            <p className="text-neutral-700">
              This is a fan-made portfolio. Not affiliated with Max Verstappen,
              Red Bull Racing, or Formula 1.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
