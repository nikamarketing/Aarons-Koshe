import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Contact & Location',
  description: 'Find Bondi Cafe at 94 Campbell Parade, Bondi Beach NSW 2026. Open daily 5:00 AM – 11:00 PM.',
  keywords: ['bondi cafe location', 'cafe campbell parade', 'bondi beach cafe contact', 'cafe near bondi beach'],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact & Location | Bondi Cafe',
    description: '94 Campbell Parade, Bondi Beach NSW 2026 — open daily 5:00 AM – 11:00 PM. Dine in, takeaway, or delivery.',
    url: '/contact',
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&fit=crop&auto=format'],
  },
};

const ctaCards = [
  {
    icon: '📍',
    label: 'Address',
    desc: '94 Campbell Parade, Bondi Beach NSW 2026, Australia',
    cta: 'Get Directions',
    href: 'https://maps.google.com/?q=94+Campbell+Parade+Bondi+Beach+NSW+2026',
    detail: 'Bondi Beach NSW 2026',
  },
  {
    icon: '🛵',
    label: 'Uber Eats',
    desc: 'Order Bondi Cafe delivered to your door',
    cta: 'Order Now',
    href: 'https://www.ubereats.com',
    detail: 'Delivered fresh',
  },
  {
    icon: '📦',
    label: 'DoorDash',
    desc: 'Fast delivery anywhere nearby',
    cta: 'Order Now',
    href: 'https://www.doordash.com',
    detail: 'Delivered fresh',
  },
];

const gettingThere = [
  {
    icon: '🏄',
    label: 'From the Beach',
    desc: 'Walk up Campbell Parade from the beach — we\'re right on the strip, steps from the sand.',
  },
  {
    icon: '🚌',
    label: 'By Bus',
    desc: 'Bus routes 333, 380, and 381 stop right on Campbell Parade. A short walk from the bus stop.',
  },
  {
    icon: '🚗',
    label: 'By Car / Rideshare',
    desc: 'Drop off on Campbell Parade. Parking available on Hall Street and nearby side streets.',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-4 text-center bg-charcoal relative overflow-hidden">
        <div className="ember-glow-overlay absolute inset-0 opacity-60" />
        <div className="relative z-10">
          <p className="animate-fade-in section-tag mb-3">We&apos;re Easy to Find</p>
          <h1 className="animate-slide-up font-oswald text-5xl md:text-6xl font-bold text-washi mb-4">
            Find <span className="text-ember text-glow-ember">Us</span>
          </h1>
          <p className="animate-fade-in-d2 font-open-sans text-washi/60 max-w-xl mx-auto">
            Bondi Cafe is located at 94 Campbell Parade, Bondi Beach — right on the iconic strip,
            steps from the sand. Open every day, 5:00 AM to 11:00 PM.
          </p>
        </div>
      </section>

      {/* ── Info cards ───────────────────────────────────── */}
      <section className="bg-ink py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: '📍',
              label: 'Address',
              body: (
                <>
                  94 Campbell Parade<br />
                  Bondi Beach NSW 2026<br />
                  Australia
                </>
              ),
            },
            {
              icon: '🕐',
              label: 'Opening Hours',
              body: (
                <>
                  Open Daily<br />
                  5:00 AM – 11:00 PM<br />
                  <span className="text-xs text-washi/40">Kitchen 5 AM–3 PM · Bar from 5 PM</span>
                </>
              ),
            },
            {
              icon: '📞',
              label: 'Phone',
              body: (
                <a href="tel:+61293651234" className="hover:text-ember transition-colors">
                  +61 2 9365 1234
                </a>
              ),
            },
          ].map((card, i) => (
            <ScrollReveal key={card.label} delay={(i + 1) as 1 | 2 | 3}>
              <div className="card-glow bg-charcoal p-6 text-center h-full">
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="font-oswald text-ember text-sm tracking-widest uppercase mb-2">{card.label}</h3>
                <p className="font-open-sans text-washi/70 text-sm leading-relaxed">{card.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA cards */}
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-8">
            <p className="section-tag mb-2">Visit or Order</p>
            <h2 className="section-title text-2xl md:text-3xl">Get in Touch</h2>
            <div className="ember-divider" />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {ctaCards.map((card, i) => (
              <ScrollReveal key={card.label} delay={(i + 1) as 1 | 2 | 3}>
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-glow bg-charcoal p-6 text-center flex flex-col items-center block"
                >
                  <div className="text-4xl mb-3">{card.icon}</div>
                  <h3 className="font-oswald text-washi text-lg font-bold mb-1">{card.label}</h3>
                  <p className="font-open-sans text-washi/50 text-sm mb-3">{card.desc}</p>
                  <p className="font-oswald text-ember text-sm mb-4">{card.detail}</p>
                  <span className="btn-outline text-xs px-4 py-2">{card.cta}</span>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Map ──────────────────────────────────────────── */}
      <section className="w-full border-y border-ember/20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.489!2d151.2716!3d-33.8908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b18c21893a01%3A0x8e3b60be67ca3b1d!2s94+Campbell+Parade%2C+Bondi+Beach+NSW+2026!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
          width="100%"
          height="450"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Bondi Cafe location — 94 Campbell Parade Bondi Beach"
        />
      </section>

      {/* ── Getting there ────────────────────────────────── */}
      <section className="py-16 px-4 bg-charcoal relative overflow-hidden">
        <div className="ember-glow-overlay absolute inset-0 opacity-40" />
        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal className="text-center mb-10">
            <p className="section-tag mb-2">Directions</p>
            <h2 className="section-title text-2xl md:text-3xl">Getting Here</h2>
            <div className="ember-divider" />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {gettingThere.map((item, i) => (
              <ScrollReveal key={item.label} delay={(i + 1) as 1 | 2 | 3}>
                <div className="card-glow bg-ink p-6 text-center h-full">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-oswald text-washi text-base font-bold mb-2">{item.label}</h3>
                  <p className="font-open-sans text-washi/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
