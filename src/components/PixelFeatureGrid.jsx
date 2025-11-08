import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Shield, Zap } from 'lucide-react';

const features = [
  {
    title: 'Instant Trades',
    desc: 'Peer-to-peer swaps with escrow safety and lightning speed.',
    icon: Rocket,
    color: 'from-fuchsia-500 to-cyan-400',
  },
  {
    title: 'Verified Assets',
    desc: 'All items are verified on-chain and in-inventory to prevent scams.',
    icon: Shield,
    color: 'from-emerald-400 to-teal-300',
  },
  {
    title: 'Boosted Drops',
    desc: 'Seasonal chaos events multiply rare drop rates for limited time.',
    icon: Zap,
    color: 'from-amber-400 to-rose-400',
  },
];

export default function PixelFeatureGrid() {
  return (
    <section id="features" className="relative bg-black py-20">
      <div className="absolute inset-0 opacity-30 [background:radial-gradient(1200px_600px_at_50%_-10%,rgba(217,70,239,0.25),transparent),radial-gradient(800px_400px_at_80%_20%,rgba(34,197,94,0.2),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-extrabold text-white sm:text-4xl" style={{ fontFamily: 'Manrope, Inter, system-ui, sans-serif' }}>
          Why players choose School Of Chaos Blade Market
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="relative rounded-xl border border-white/10 bg-white/5 p-6 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-lg"
            >
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${f.color} shadow-lg`}>
                <f.icon className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>

              {/* pixel corners */}
              <div className="pointer-events-none absolute -left-px -top-px h-2 w-2 bg-fuchsia-400 [image-rendering:pixelated]" />
              <div className="pointer-events-none absolute -right-px -top-px h-2 w-2 bg-cyan-300 [image-rendering:pixelated]" />
              <div className="pointer-events-none absolute -left-px -bottom-px h-2 w-2 bg-emerald-300 [image-rendering:pixelated]" />
              <div className="pointer-events-none absolute -right-px -bottom-px h-2 w-2 bg-amber-300 [image-rendering:pixelated]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
