import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Our Story',
  description: 'Discover what makes Bondi Cafe special — specialty single-origin coffee, locally sourced ingredients, and a beachside setting that feels like home.',
  openGraph: {
    title: 'Our Story | Bondi Cafe',
  },
};

const galleryImages = [
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&q=80&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&q=80&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?w=800&q=80&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80&fit=crop&auto=format',
];

const features = [
  {
    icon: '☕',
    title: 'Single Origin Coffee',
    desc: 'Our beans are sourced directly from small farms in Ethiopia, Colombia, and Guatemala — traceable, ethical, and roasted fresh weekly.',
  },
  {
    icon: '🌿',
    title: 'Locally Sourced',
    desc: 'We partner with local NSW farmers and suppliers. From eggs to avocados, everything on your plate is seasonal and fresh.',
  },
  {
    icon: '🌊',
    title: 'Beachside Setting',
    desc: 'Perched on Campbell Parade with panoramic views of Bondi Beach — the best table in Sydney is right here.',
  },
  {
    icon: '🍞',
    title: 'House Baked Daily',
    desc: 'Every croissant, muffin, and loaf is baked in our kitchen from scratch before 5 AM, so you always get it fresh.',
  },
];

export default function ExperiencePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative h-64 md:h-96 flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80&fit=crop&auto=format"
            alt="Bondi Beach — Bondi Cafe"
            fill
            className="object-cover"
            priority
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="ember-glow-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 text-center px-4">
          <p className="animate-fade-in section-tag mb-3">More Than a Cafe</p>
          <h1 className="animate-slide-up font-oswald text-5xl md:text-6xl font-bold text-washi">
            Our <span className="text-ember text-glow-ember">Story</span>
          </h1>
        </div>
      </section>

      {/* ── Feature cards ────────────────────────────────── */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <p className="section-tag mb-3">Why Bondi Cafe</p>
          <h2 className="section-title text-3xl md:text-4xl">What Sets Us Apart</h2>
          <div className="ember-divider" />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={(i % 4 + 1) as 1 | 2 | 3 | 4}>
              <div className="card-glow bg-ink p-6 h-full">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-oswald text-ember text-lg font-bold mb-2">{f.title}</h3>
                <p className="font-open-sans text-washi/60 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Story + highlight box ─────────────────────────── */}
      <section className="bg-ink py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image with badge */}
          <ScrollReveal>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&q=80&fit=crop&auto=format"
                  alt="Bondi Cafe interior"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 ring-1 ring-ember/0 group-hover:ring-ember/25 transition-all duration-300" />
              </div>
              <div className="pulse-ember absolute -bottom-6 -right-6 bg-charcoal border p-6 max-w-[200px]">
                <div className="font-oswald text-ember text-3xl font-bold text-glow-ember">5 AM</div>
                <div className="font-oswald text-washi text-sm tracking-widest uppercase">Opens Daily</div>
                <div className="font-open-sans text-washi/70 text-xs mt-1">First coffee ready</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Copy */}
          <ScrollReveal delay={2}>
            <p className="section-tag mb-4">The Bondi Way</p>
            <h2 className="section-title text-4xl md:text-5xl mb-2">
              Built for the<br />
              <span className="text-ember text-glow-ember">Early Riser</span>
            </h2>
            <div className="ember-divider-left mb-6" />
            <p className="font-open-sans text-washi/70 text-base leading-relaxed mb-4">
              We opened our doors at 5 AM because we know who comes to Bondi first — the surfers, the swimmers, the joggers, the people chasing the morning light. They deserve a great coffee and a proper breakfast before the world wakes up.
            </p>
            <p className="font-open-sans text-washi/70 text-base leading-relaxed mb-8">
              From that quiet first-light cup to the last cocktail at 11 PM, Bondi Cafe is here for every part of your day. We source our coffee beans directly from origin, bake everything fresh before sunrise, and cook every dish with the kind of care that makes even a simple avo toast feel special.
            </p>
            <Link href="/contact" className="btn-outline">
              Find Us
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Photo gallery ─────────────────────────────────── */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-12">
          <p className="section-tag mb-3">The Vibe</p>
          <h2 className="section-title text-3xl md:text-4xl">Life at Bondi Cafe</h2>
          <div className="ember-divider" />
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {galleryImages.map((src, i) => (
            <ScrollReveal key={i} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className="relative aspect-square overflow-hidden group border border-ember/0 hover:border-ember/30 transition-colors duration-300">
                <Image
                  src={src}
                  alt={`Bondi Cafe ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/5 transition-colors duration-300" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-16 px-4 text-center bg-charcoal relative overflow-hidden">
        <div className="ember-glow-overlay absolute inset-0 opacity-50" />
        <div className="relative z-10">
          <ScrollReveal>
            <p className="section-tag mb-3">Come Experience It</p>
            <h2 className="section-title text-3xl md:text-4xl mb-2">We&apos;d Love to See You</h2>
            <div className="ember-divider mb-8" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://maps.google.com/?q=94+Campbell+Parade+Bondi+Beach+NSW+2026"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Get Directions
              </a>
              <Link href="/menu" className="btn-outline">
                See the Menu
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
