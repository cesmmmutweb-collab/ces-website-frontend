import { motion } from "framer-motion";
import { Code2, Cpu, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden flex items-center justify-center px-8 py-20">

      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100" />
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0 L0 0 0 40" fill="none" stroke="#93c5fd" strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <svg className="absolute inset-0 w-full h-full">
          {[...Array(15)].map((_, i) => (
            <motion.circle
              key={i}
              cx={Math.random() * 1200}
              cy={Math.random() * 800}
              r={2 + Math.random() * 3}
              fill="rgba(59,130,246,0.4)"
              animate={{
                cy: [Math.random() * 800, Math.random() * 800],
                cx: [Math.random() * 1200, Math.random() * 1200],
              }}
              transition={{ repeat: Infinity, duration: 10 + Math.random() * 10, yoyo: true }}
            />
          ))}
          {[...Array(10)].map((_, i) => (
            <line
              key={i}
              x1={Math.random() * 1200}
              y1={Math.random() * 800}
              x2={Math.random() * 1200}
              y2={Math.random() * 800}
              stroke="rgba(59,130,246,0.2)"
              strokeWidth="1"
            />
          ))}
        </svg>

      </div>

      {/* GRADIENT BEAM */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500" />

      {/* FLOATING PULSE RING */}
      <motion.div
        className="absolute top-40 right-32 w-32 h-32 rounded-full border-4 border-blue-500 opacity-30"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />

      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE – HEADLINE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-6xl font-extrabold leading-tight">
            Shaping the Future of{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Technology
            </span>
          </h1>

          <motion.p
            className="text-xl font-semibold text-blue-600"
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Innovate • Build • Inspire
          </motion.p>

          <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
            The Computer Engineering Society brings together creators, developers,
            problem-solvers, and visionaries to engineer meaningful solutions and
            push the boundaries of what’s possible.
          </p>

          <div className="flex items-center gap-4 mt-4">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition">
              Get Started
            </button>

            <motion.div
              className="flex items-center gap-2 text-blue-600 font-medium"
              whileHover={{ scale: 1.1 }}
            >
              <Sparkles className="w-5 h-5" />
              Discover More
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT SIDE – 3D CODE CARD */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          {/* GLASS BACK PANEL */}
          <motion.div
            className="absolute inset-0 -z-10 rounded-3xl bg-white/20 backdrop-blur-xl shadow-2xl border border-white/30"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          {/* CODE BLOCK */}
          <motion.div
            className="relative rounded-2xl bg-gray-900 text-gray-100 p-6 shadow-2xl font-mono text-sm border border-gray-700"
            animate={{ rotateY: [0, 6, 0], rotateX: [0, -4, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="w-3 h-3 bg-yellow-500 rounded-full" />
              <span className="w-3 h-3 bg-green-500 rounded-full" />
            </div>

            <motion.pre
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >{`const CES = {
  mission: "Empower innovators",
  values: ["Creativity", "Engineering", "Collaboration"],
  motto: "Think. Build. Elevate."
};

function startInnovation() {
  return CES.values.join(" | ");
}

console.log(startInnovation());`}</motion.pre>
          </motion.div>

          {/* FLOATING ICONS */}
          <motion.div
            className="absolute -top-8 -right-8 bg-blue-600 text-white p-5 rounded-2xl shadow-xl"
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <Code2 className="w-7 h-7" />
          </motion.div>

          <motion.div
            className="absolute -bottom-10 left-0 bg-purple-600 text-white p-5 rounded-2xl shadow-xl"
            animate={{ y: [10, -10, 10] }}
            transition={{ repeat: Infinity, duration: 3.5 }}
          >
            <Cpu className="w-7 h-7" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
