import React from 'react'
import Hero from './components/Hero'
import PixelFeatureGrid from './components/PixelFeatureGrid'
import MarketGrid from './components/MarketGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-black">
      <Hero />
      <PixelFeatureGrid />
      <MarketGrid />
      <CTA />
      <Footer />
    </div>
  )
}

function CTA() {
  return (
    <section className="relative overflow-hidden bg-black py-20">
      <div className="absolute inset-0 opacity-30 [background:radial-gradient(600px_300px_at_20%_10%,rgba(217,70,239,0.18),transparent),radial-gradient(800px_400px_at_80%_80%,rgba(34,197,94,0.18),transparent)]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center text-white">
        <h3 className="text-2xl font-extrabold sm:text-3xl" style={{ fontFamily: 'IBM Plex Sans, Inter, system-ui, sans-serif' }}>
          Ready to slice into the chaos?
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-white/75">
          Join thousands of players turning loot into legend. Smooth animations, pixel vibes, and verified trades.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#market" className="rounded-lg border border-cyan-300/50 bg-cyan-400/20 px-6 py-3 text-sm font-semibold text-white hover:bg-cyan-400/30">
            Explore Market
          </a>
          <a href="#" className="rounded-lg border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/15">
            Create Account
          </a>
        </div>
      </div>

      {/* pixel scanline */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-[linear-gradient(90deg,#22c55e,#67e8f9,#d946ef)] [image-rendering:pixelated]" />
    </section>
  )
}

export default App
