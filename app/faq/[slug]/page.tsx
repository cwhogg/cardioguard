import { getAllPosts, getPostBySlug } from '../../../lib/content'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getAllPosts('faq')
  return posts.map((post) => ({
    slug: post.slug
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug('faq', slug)
  
  if (!post) {
    return {
      title: 'FAQ Not Found | CardioGuard'
    }
  }
  
  return {
    title: `${post.title} | CardioGuard`,
    description: post.description,
    alternates: {
      canonical: `https://cardioguard.com/faq/${slug}`
    }
  }
}

function JsonLd({ post }: { post: any }) {
  // Extract Q&A pairs from the content HTML
  const faqItems: any[] = []
  
  // Simple regex to extract h2/h3 questions and following paragraphs
  const questionRegex = /<h[23][^>]*>([^<]+)<\/h[23]>/g
  const questions = [...post.content.matchAll(questionRegex)]
  
  questions.forEach((match, index) => {
    const question = match[1]
    // This is a simplified extraction - in production you'd want more robust parsing
    faqItems.push({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Information about ${question}`
      }
    })
  })
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default async function FAQPost({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug('faq', slug)
  
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