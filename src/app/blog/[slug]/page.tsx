import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getPostBySlug } from '@/data/blog';
import ScrollReveal from '@/components/ScrollReveal';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: `${post.title} | Bondi Cafe`,
      description: post.description,
      url: `/blog/${post.slug}`,
      images: [post.image],
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.date,
    keywords: post.keywords.join(', '),
    author: { '@type': 'Organization', name: 'Bondi Cafe' },
    publisher: { '@type': 'Organization', name: 'Bondi Cafe', url: 'https://www.aaronskoshe.com.au' },
    mainEntityOfPage: `https://www.aaronskoshe.com.au/blog/${post.slug}`,
  };

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image src={post.image} alt={post.imageAlt} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/20" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-open-sans text-xs tracking-widest uppercase bg-ember text-charcoal px-3 py-1">
              {post.category}
            </span>
            <span className="font-open-sans text-washi/60 text-xs">📍 {post.location}</span>
            <span className="font-open-sans text-washi/60 text-xs">· {post.readTime}</span>
          </div>
          <h1 className="font-oswald text-washi text-3xl md:text-5xl font-bold tracking-wide leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Article */}
      <article className="py-14 bg-charcoal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {post.intro.map((para, i) => (
            <p key={i} className="font-open-sans text-washi/80 text-base md:text-lg leading-relaxed mb-6">
              {para}
            </p>
          ))}

          {post.sections.map((section) => (
            <ScrollReveal key={section.heading}>
              <div className="mt-10">
                <h2 className="font-oswald text-ember text-2xl font-bold tracking-wide uppercase mb-4">
                  {section.heading}
                </h2>
                {section.body.map((para, i) => (
                  <p key={i} className="font-open-sans text-washi/70 text-base leading-relaxed mb-5">
                    {para}
                  </p>
                ))}
              </div>
            </ScrollReveal>
          ))}

          {/* Takeaway */}
          <ScrollReveal>
            <div className="mt-12 border-l-4 border-ember bg-ink p-6">
              <h2 className="font-oswald text-washi text-lg font-bold tracking-widest uppercase mb-3">The Takeaway</h2>
              <p className="font-open-sans text-washi/80 text-base leading-relaxed">{post.takeaway}</p>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal>
            <div className="mt-12 text-center bg-ink border border-ember/20 p-8">
              <h2 className="font-oswald text-washi text-2xl font-bold tracking-wide uppercase mb-3">
                Visit Bondi Cafe
              </h2>
              <p className="font-open-sans text-washi/60 text-sm mb-6">
                94 Campbell Parade, Bondi Beach — open daily 5 AM to 11 PM.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/menu" className="btn-primary">
                  See Our Menu
                </Link>
                <Link href="/contact" className="btn-outline">
                  Find Us
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </article>

      {/* More posts */}
      <section className="pb-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-oswald text-washi text-2xl font-bold tracking-widest uppercase mb-8 text-center">
            More From The Blog
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group block bg-ink border border-ember/20 overflow-hidden hover:border-ember/50 transition-colors"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-oswald text-washi text-lg font-bold tracking-wide group-hover:text-ember transition-colors">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
