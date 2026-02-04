import { getAllPosts, getPostBySlug } from '../../../lib/content'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getAllPosts('blog-post')
  return posts.map((post) => ({
    slug: post.slug
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug('blog-post', slug)
  
  if (!post) {
    return {
      title: 'Post Not Found | CardioGuard'
    }
  }
  
  return {
    title: `${post.title} | CardioGuard`,
    description: post.description,
    alternates: {
      canonical: `https://cardioguard.com/blog/${slug}`
    },
    openGraph: {
      title: `${post.title} | CardioGuard`,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      url: `https://cardioguard.com/blog/${slug}`
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | CardioGuard`,
      description: post.description
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
    url: `https://cardioguard.com/blog/${post.slug}`
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug('blog-post', slug)
  
  if (!post) {
    notFound()
  }
  
  return (
    <div className="min-h-screen bg-background">
      <JsonLd post={post} />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <nav className="mb-8">
          <Link 
            href="/blog"
            className="text-accent hover:text-primary transition-colors font-semibold"
          >
            ← Back to Blog
          </Link>
        </nav>
        
        <article>
          <header className="mb-12">
            <div className="mb-4">
              <time className="text-sm text-text-muted font-mono">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
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
            href="/blog"
            className="text-accent hover:text-primary transition-colors font-semibold"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
  )
}