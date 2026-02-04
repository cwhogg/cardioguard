import { getAllPosts, getPostBySlug } from '../../../lib/content'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getAllPosts('comparison')
  return posts.map((post) => ({
    slug: post.slug
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug('comparison', slug)
  
  if (!post) {
    return {
      title: 'Comparison Not Found | CardioGuard'
    }
  }
  
  return {
    title: `${post.title} | CardioGuard`,
    description: post.description,
    alternates: {
      canonical: `https://cardioguard.com/compare/${slug}`
    },
    openGraph: {
      title: `${post.title} | CardioGuard`,
      description: post.description,
      type: 'article',
      url: `https://cardioguard.com/compare/${slug}`
    }
  }
}

function JsonLd({ post }: { post: any }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'CardioGuard'
    },
    publisher: {
      '@type': 'Organization',
      name: 'CardioGuard'
    },
    url: `https://cardioguard.com/compare/${post.slug}`
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default async function ComparisonPost({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug('comparison', slug)
  
  if (!post) {
    notFound()
  }
  
  return (
    <div className="min-h-screen bg-background">
      <JsonLd post={post} />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <nav className="mb-8">
          <Link 
            href="/"
            className="text-accent hover:text-primary transition-colors font-semibold"
          >
            ← Back to CardioGuard
          </Link>
        </nav>
        
        <article>
          <header className="mb-12">
            <h1 className="text-5xl font-heading font-bold text-text-primary mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              {post.description}
            </p>
          </header>
          
          <div 
            className="prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-headings:text-text-primary prose-p:text-text-secondary prose-p:leading-relaxed prose-a:text-accent prose-a:hover:text-primary prose-strong:text-text-primary prose-code:text-accent prose-code:bg-background-elevated prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-background-elevated prose-pre:border prose-pre:border-border"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
        
        <div className="mt-12 pt-8 border-t border-border">
          <Link 
            href="/"
            className="text-accent hover:text-primary transition-colors font-semibold"
          >
            ← Back to CardioGuard
          </Link>
        </div>
      </div>
    </div>
  )
}