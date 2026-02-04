import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

export interface ContentItem {
  slug: string
  title: string
  description: string
  type: string
  date: string
  content: string
  targetKeywords?: string[]
  ideaName?: string
  status?: string
  [key: string]: any
}

const typeToDirectory = {
  'blog-post': 'content/blog',
  'comparison': 'content/comparison',
  'faq': 'content/faq'
}

export async function getAllPosts(type: keyof typeof typeToDirectory): Promise<ContentItem[]> {
  try {
    const directory = typeToDirectory[type]
    const fullPath = path.join(process.cwd(), directory)
    
    if (!fs.existsSync(fullPath)) {
      return []
    }
    
    const fileNames = fs.readdirSync(fullPath)
    const allPostsData = await Promise.all(
      fileNames
        .filter(fileName => fileName.endsWith('.md'))
        .map(async fileName => {
          const slug = fileName.replace(/\.md$/, '')
          return await getPostBySlug(type, slug)
        })
    )
    
    return allPostsData
      .filter(post => post !== null)
      .sort((a, b) => (a.date < b.date ? 1 : -1))
  } catch (error) {
    console.error(`Error reading ${type} directory:`, error)
    return []
  }
}

export async function getPostBySlug(type: keyof typeof typeToDirectory, slug: string): Promise<ContentItem | null> {
  try {
    const directory = typeToDirectory[type]
    const fullPath = path.join(process.cwd(), directory, `${slug}.md`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    const processedContent = await remark()
      .use(remarkHtml)
      .process(content)
    
    const contentHtml = processedContent.toString()
    
    return {
      slug,
      content: contentHtml,
      type,
      title: data.title || '',
      description: data.description || '',
      date: data.date || new Date().toISOString(),
      targetKeywords: data.targetKeywords || [],
      ideaName: data.ideaName,
      status: data.status,
      ...data
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}