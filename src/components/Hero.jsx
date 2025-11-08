import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* soft gradient overlay to help with text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-widest backdrop-blur"
        >
          School of Chaos • Game Market
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-black leading-tight"
          style={{
            fontFamily: 'IBM Plex Sans, Inter, system-ui, sans-serif',
          }}
        >
          <span className="block text-4xl sm:text-6xl md:text-7xl">
            School Of Chaos
          </span>
          <span className="mt-2 block bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent text-3xl sm:text-5xl md:text-6xl">
            Blade Market
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 max-w-2xl text-balance text-sm sm:text-base text-white/80"
        >
          Pixels, chaos, and smooth interactions. Trade skins, blades, boosts, and rare drops with style.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#market"
            className="group rounded-lg border border-fuchsia-400/50 bg-fuchsia-500/20 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(217,70,239,0.3)] backdrop-blur transition hover:bg-fuchsia-500/30"
          >
            Enter the Market
          </a>
          <a
            href="#features"
            className="rounded-lg border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/15"
          >
            Why Us
          </a>
        </motion.div>
      </div>

      {/* pixel border bottom */}
      <div className="relative z-10 h-2 w-full bg-[linear-gradient(90deg,rgba(217,70,239,1)_0%,rgba(34,197,94,1)_50%,rgba(103,232,249,1)_100%)] [image-rendering:pixelated]" />
    </section>
  );
}
