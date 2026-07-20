import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Blog — Bondi Beach Guides & Cafe Stories',
  description:
    'Local guides from Bondi Cafe — the best breakfast in Bondi Beach, specialty coffee, the Bondi to Bronte walk, Icebergs swims, and how to do Bondi mornings like a local.',
  keywords: ['bondi beach blog', 'bondi cafe blog', 'bondi beach guide', 'things to do bondi beach'],
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog — Bondi Beach Guides & Cafe Stories | Bondi Cafe',
    description:
      'Local guides from Bondi Cafe — breakfast, coffee, the coastal walk, and Bondi mornings done right.',
    url: '/blog',
    images: ['https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1200&q=80&fit=crop&auto=format'],
  },
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      {/* Hero */}
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1920&q=80&fit=crop&auto=format"
            alt="Bondi Beach morning — Bondi Cafe blog"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="relative z-10 text-center px-4">
          <p className="font-open-sans text-ember text-sm tracking-[0.3em] uppercase mb-3">From Campbell Parade</p>
          <h1 className="font-oswald text-washi text-4xl md:text-6xl font-bold tracking-wide uppercase">The Blog</h1>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-ink border border-ember/20 overflow-hidden hover:border-ember/50 transition-colors"
            >
              <div className="relative h-64 md:h-96 overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-open-sans text-xs tracking-widest uppercase bg-ember text-charcoal px-3 py-1">
                    {featured.category}
                  </span>
                  <span className="font-open-sans text-washi/50 text-xs">{featured.readTime}</span>
                </div>
                <h2 className="font-oswald text-washi text-2xl md:text-3xl font-bold tracking-wide mb-4 group-hover:text-ember transition-colors">
                  {featured.title}
                </h2>
                <p className="font-open-sans text-washi/60 text-sm leading-relaxed mb-6">{featured.description}</p>
                <span className="btn-outline inline-block">Read Article</span>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Post grid */}
      <section className="pb-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post, i) => (
              <ScrollReveal key={post.slug} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-ink border border-ember/20 overflow-hidden hover:border-ember/50 transition-colors h-full"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 font-open-sans text-xs tracking-widest uppercase bg-ember text-charcoal px-3 py-1">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3 font-open-sans text-washi/50 text-xs">
                      <span>📍 {post.location}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="font-oswald text-washi text-xl font-bold tracking-wide mb-3 group-hover:text-ember transition-colors">
                      {post.title}
                    </h2>
                    <p className="font-open-sans text-washi/60 text-sm leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
