import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })

export const metadata: Metadata = {
  title: 'Advanced Lipid Panel Without Doctor — CardioGuard',
  description: 'Get advanced cardiovascular biomarkers like ApoB and Lp(a) without doctor orders. CardioGuard makes heart disease prevention accessible with direct testing.',
  keywords: [
    'advanced lipid panel without doctor',
    'apolipoprotein b test',
    'lipoprotein a test insurance',
    'cardiovascular biomarkers entrepreneurs',
    'heart disease prevention blood tests',
    'direct cardiovascular testing'
  ],
  authors: [{ name: 'CardioGuard' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    url: 'https://cardioguard.com',
    title: 'Advanced Lipid Panel Without Doctor — CardioGuard',
    description: 'Get advanced cardiovascular biomarkers like ApoB and Lp(a) without doctor orders. CardioGuard makes heart disease prevention accessible with direct testing.',
    siteName: 'CardioGuard'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advanced Lipid Panel Without Doctor — CardioGuard',
    description: 'Get advanced cardiovascular biomarkers like ApoB and Lp(a) without doctor orders. CardioGuard makes heart disease prevention accessible with direct testing.'
  },
  alternates: {
    canonical: 'https://cardioguard.com'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body bg-background text-text-primary antialiased">
        {children}
      </body>
    </html>
  )
}