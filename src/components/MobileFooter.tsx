export default function MobileFooter() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-charcoal/98 border-t border-ember/30 flex">
      {/* Menu */}
      <a
        href="/menu"
        className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-washi/70 hover:text-ember transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
        </svg>
        <span className="font-oswald text-[10px] tracking-wider uppercase">Menu</span>
      </a>

      {/* Uber Eats */}
      <a
        href="https://www.ubereats.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-3 gap-1 bg-ember text-charcoal hover:bg-amber-400 transition-colors"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
        </svg>
        <span className="font-oswald text-[10px] tracking-wider uppercase">Uber Eats</span>
      </a>

      {/* DoorDash */}
      <a
        href="https://www.doordash.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-washi/70 hover:text-ember transition-colors"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-5h2v2h-2zm0-8h2v6h-2z"/>
        </svg>
        <span className="font-oswald text-[10px] tracking-wider uppercase">DoorDash</span>
      </a>

      {/* Map */}
      <a
        href="https://maps.google.com/?q=94+Campbell+Parade+Bondi+Beach+NSW+2026"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-washi/70 hover:text-ember transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
        <span className="font-oswald text-[10px] tracking-wider uppercase">Find Us</span>
      </a>

      {/* Call */}
      <a
        href="tel:+61293651234"
        className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-washi/70 hover:text-ember transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
        <span className="font-oswald text-[10px] tracking-wider uppercase">Call</span>
      </a>
    </div>
  );
}
