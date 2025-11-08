import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { id: 1, name: 'Chaos Blade Mk.I', price: 24, rarity: 'Rare', img: 'https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, name: 'Neon Dagger v2', price: 12, rarity: 'Uncommon', img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, name: 'Pixel Katana ++', price: 49, rarity: 'Epic', img: 'https://images.unsplash.com/photo-1568684339846-0c61db2f7816?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, name: 'Glitch Short Sword', price: 8, rarity: 'Common', img: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, name: 'Spectral Greatsword', price: 79, rarity: 'Legendary', img: 'https://images.unsplash.com/photo-1542367597-8849eb00b52e?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, name: 'Holo Axe 3D', price: 17, rarity: 'Uncommon', img: 'https://images.unsplash.com/photo-1612178537255-37cef1fae7b6?q=80&w=1200&auto=format&fit=crop' },
];

export default function MarketGrid() {
  return (
    <section id="market" className="bg-black py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl" style={{ fontFamily: 'Manrope, Inter, system-ui, sans-serif' }}>
            Featured Blades
          </h2>
          <a href="#" className="text-sm font-medium text-cyan-300 hover:text-cyan-200">View all</a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img src={item.img} alt={item.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80" />
                <div className="absolute left-3 top-3 rounded px-2 py-1 text-xs font-bold text-black" style={{ background: 'linear-gradient(90deg,#22c55e,#a3e635)' }}>
                  {item.rarity}
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white">{item.name}</h3>
                  <span className="rounded-md border border-emerald-400/40 bg-emerald-500/20 px-2 py-1 text-emerald-300">${item.price}
                  </span>
                </div>
                <button className="mt-4 w-full rounded-lg border border-fuchsia-400/50 bg-fuchsia-500/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-fuchsia-500/30">
                  Add to Cart
                </button>
              </div>

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
