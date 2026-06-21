import type { Metadata } from 'next';
import Image from 'next/image';
import { menuCategories } from '@/data/menu';
import MenuGallery from '@/components/MenuGallery';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Our Menu',
  description: 'Explore the full Bondi Cafe menu — specialty coffee, all-day breakfast, brunch, fresh lunch mains, pastries, cocktails and more.',
  openGraph: {
    title: 'Our Menu | Bondi Cafe',
  },
};

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80&fit=crop&auto=format',
    label: 'Flat White',
  },
  {
    src: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80&fit=crop&auto=format',
    label: 'Cold Brew',
  },
  {
    src: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&q=80&fit=crop&auto=format',
    label: 'Smashed Avo',
  },
  {
    src: 'https://images.unsplash.com/photo-1504754524776-8f4f37790c4f?w=800&q=80&fit=crop&auto=format',
    label: 'Eggs Benedict',
  },
  {
    src: 'https://images.unsplash.com/photo-1490688003919-5e5cd1c06f59?w=800&q=80&fit=crop&auto=format',
    label: 'Acai Bowl',
  },
  {
    src: 'https://images.unsplash.com/photo-1555507036-ab794f575f2b?w=800&q=80&fit=crop&auto=format',
    label: 'Croissant',
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&fit=crop&auto=format',
    label: 'Barramundi Bowl',
  },
  {
    src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80&fit=crop&auto=format',
    label: 'Cocktails',
  },
  {
    src: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=800&q=80&fit=crop&auto=format',
    label: 'Smoothie Bowl',
  },
  {
    src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80&fit=crop&auto=format',
    label: 'Fresh Salad',
  },
  {
    src: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=80&fit=crop&auto=format',
    label: 'Bondi Burger',
  },
  {
    src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&q=80&fit=crop&auto=format',
    label: 'Espresso Martini',
  },
];

const catNav = [
  { id: 'specialty-coffee', icon: '☕', label: 'Coffee' },
  { id: 'all-day-breakfast', icon: '🍳', label: 'Breakfast' },
  { id: 'brunch-lunch', icon: '🥑', label: 'Brunch & Lunch' },
  { id: 'smoothies-cold', icon: '🥤', label: 'Cold Drinks' },
  { id: 'pastries-sweets', icon: '🥐', label: 'Pastries' },
  { id: 'cocktails-drinks', icon: '🍹', label: 'Cocktails' },
];

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80&fit=crop&auto=format"
            alt="Bondi Cafe Menu"
            fill
            className="object-cover"
            priority
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="ember-glow-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 text-center px-4">
          <p className="animate-fade-in section-tag mb-3">Fresh · Seasonal · Delicious</p>
          <h1 className="animate-slide-up font-oswald text-5xl md:text-6xl font-bold text-washi">
            Our <span className="text-ember text-glow-ember">Menu</span>
          </h1>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-12">
          <p className="section-tag mb-3">Photo Gallery</p>
          <h2 className="section-title text-3xl md:text-4xl">What Awaits You</h2>
          <div className="ember-divider" />
        </ScrollReveal>
        <MenuGallery images={galleryImages} />
      </section>

      {/* Menu Categories */}
      <section className="bg-ink py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal className="text-center mb-10">
            <p className="section-tag mb-3">Full Menu</p>
            <h2 className="section-title text-3xl md:text-4xl">All Categories</h2>
            <div className="ember-divider" />
          </ScrollReveal>

          {/* Sticky category nav */}
          <div className="sticky top-20 z-30 bg-ink/95 backdrop-blur-sm -mx-4 px-4 py-3 mb-10 border-b border-ember/20">
            <div className="flex overflow-x-auto gap-2 pb-1">
              {catNav.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="shrink-0 flex items-center gap-1.5 px-4 py-2 font-oswald text-xs tracking-widest uppercase border border-ember/30 text-washi/70 hover:text-ember hover:border-ember transition-colors duration-200 whitespace-nowrap"
                >
                  <span>{cat.icon}</span>
                  {cat.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-16">
            {menuCategories.map((cat) => (
              <div key={cat.id} id={cat.id} className="scroll-mt-24">
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-ember/20">
                  <span className="text-3xl">{cat.icon}</span>
                  <div>
                    <h3 className="font-oswald text-2xl text-washi font-bold">{cat.title}</h3>
                    {cat.subtitle && (
                      <p className="font-open-sans text-ember text-sm tracking-wider">{cat.subtitle}</p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className={`flex items-start justify-between gap-4 p-4 rounded ${
                        item.highlight ? 'bg-ember/10 border border-ember/30' : 'bg-charcoal/50'
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <p className={`font-oswald text-sm font-semibold leading-tight ${item.highlight ? 'text-ember' : 'text-washi'}`}>
                          {item.name}
                          {item.highlight && (
                            <span className="ml-2 text-[10px] bg-ember text-charcoal px-1.5 py-0.5 rounded font-bold">SIGNATURE</span>
                          )}
                        </p>
                        {item.dietary && (
                          <p className="font-open-sans text-washi/40 text-xs mt-0.5">{item.dietary}</p>
                        )}
                        {item.description && (
                          <p className="font-open-sans text-washi/50 text-xs mt-1 leading-relaxed">{item.description}</p>
                        )}
                      </div>
                      <div className="font-oswald text-ember font-bold text-sm whitespace-nowrap">
                        {typeof item.price === 'number' ? `$${item.price.toFixed(2)}` : item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="py-16 px-4 text-center bg-charcoal relative overflow-hidden">
        <div className="ember-glow-overlay absolute inset-0 opacity-50" />
        <div className="relative z-10">
          <p className="section-tag mb-3">Ready to Order?</p>
          <h2 className="section-title text-3xl md:text-4xl mb-2">Get It Delivered</h2>
          <div className="ember-divider mb-6" />
          <p className="font-open-sans text-washi/60 text-sm mb-8">
            Order online via Uber Eats or DoorDash — delivered fresh to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.ubereats.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Order on Uber Eats
            </a>
            <a
              href="https://www.doordash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Order on DoorDash
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
