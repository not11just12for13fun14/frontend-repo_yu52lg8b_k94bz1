import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10">
      <div className="mx-auto max-w-6xl px-6 text-white/70">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-sm">© {new Date().getFullYear()} School Of Chaos Blade Market. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
