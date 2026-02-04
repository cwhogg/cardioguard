import { getAllPosts } from '../../lib/content'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Heart Health Blog — Advanced Cardiovascular Testing Tips | CardioGuard',
  description: 'Learn about advanced heart disease prevention, cardiovascular biomarkers like ApoB and Lp(a), and how to access better heart tests without insurance barriers.',
  alternates: {
    canonical: 'https://cardioguard.com/blog'
  }
}

export default async function BlogPage() {
  const posts = await getAllPosts('blog-post')
  
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-heading font-bold text-text-primary mb-4">
            Heart Health Blog
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            Get the latest insights on advanced cardiovascular testing, heart disease prevention strategies, and navigating insurance barriers to access the biomarkers that actually predict cardiac risk.
          </p>
        </div>
        
        {posts.length === 0 ? (
          <div className="bg-background-elevated border border-border rounded-lg p-8 text-center">
            <h2 className="text-2xl font-heading font-semibold text-text-primary mb-2">
              Coming Soon
            </h2>
            <p className="text-text-secondary">
              We're preparing comprehensive guides on advanced cardiovascular testing. Check back soon for expert insights on ApoB, Lp(a), and other critical heart health biomarkers.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-background-elevated border border-border rounded-lg p-6 hover:border-primary transition-colors">
                <div className="mb-4">
                  <time className="text-sm text-text-muted font-mono">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                <h2 className="text-2xl font-heading font-semibold text-text-primary mb-3">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  {post.description}
                </p>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-primary hover:text-primary-light font-semibold transition-colors"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        )}
        
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