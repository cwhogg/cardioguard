import { JsonLd } from '@/components/content/JsonLd'
import { SignupForm } from '@/components/SignupForm'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <JsonLd
        type="Organization"
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "CardioGuard",
          "url": "https://cardioguard.com",
          "description": "Advanced Heart Tests Without Insurance Barriers",
          "foundingDate": "2024"
        }}
      />
      
      <JsonLd
        type="WebSite"
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "CardioGuard",
          "url": "https://cardioguard.com",
          "description": "Get advanced cardiovascular biomarkers like ApoB and Lp(a) without doctor orders.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://cardioguard.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        }}
      />

      <JsonLd
        type="FAQPage"
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What are the best markers for cardiovascular health?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The most predictive cardiovascular biomarkers include ApoB (apolipoprotein B), Lp(a) (lipoprotein a), and hs-CRP (high-sensitivity C-reactive protein). These advanced markers provide better risk assessment than traditional cholesterol tests alone."
              }
            },
            {
              "@type": "Question",
              "name": "Does insurance cover LP(a) test?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most insurance plans don't cover Lp(a) testing without specific medical indications, creating barriers to preventive cardiovascular screening. CardioGuard provides direct access to these important tests without insurance pre-authorization."
              }
            },
            {
              "@type": "Question",
              "name": "What is a preferred cardiac biomarker?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ApoB is increasingly recognized as the preferred cardiac biomarker because it measures the actual number of atherogenic particles, providing more accurate cardiovascular risk assessment than LDL cholesterol alone."
              }
            },
            {
              "@type": "Question",
              "name": "Is a lipid panel covered by insurance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Basic lipid panels are typically covered by insurance, but advanced cardiovascular biomarkers like ApoB, Lp(a), and NMR lipoproteins often require prior authorization or aren't covered at all. This creates gaps in preventive heart disease screening."
              }
            }
          ]
        }}
      />

      <main>
        {/* Hero Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-6">
                <span className="badge-primary">Early Access Now Open</span>
              </div>
              <h1 className="heading-1 mb-6">
                Get Advanced Cardiovascular Biomarkers Without Doctor Orders
              </h1>
              <p className="body-large mb-8 max-w-3xl mx-auto">
                Access ApoB, Lp(a), and hs-CRP testing directly. Skip insurance denials and get the heart disease prevention markers cardiologists actually recommend.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SignupForm />
              </div>
              <div className="mt-6">
                <p className="text-sm text-text-muted">
                  Join 2,847+ health-conscious professionals on our waitlist
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Value Propositions */}
        <section className="section-padding" aria-label="CardioGuard benefits">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-2 mb-4">
                Finally, Advanced Heart Testing Without the Hassle
              </h2>
              <p className="body-large max-w-2xl mx-auto">
                Your insurance covers basic cholesterol, but the markers that actually predict heart attacks? Not so much.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card-hover text-center">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="heading-3 mb-3">
                  Complete Advanced Lipid Panel Access
                </h3>
                <p className="body">
                  Get ApoB, Lp(a), NMR lipoproteins, and inflammatory markers that predict cardiovascular risk better than basic cholesterol tests.
                </p>
              </div>

              <div className="card-hover text-center">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>
                <h3 className="heading-3 mb-3">
                  No Insurance or Doctor Required
                </h3>
                <p className="body">
                  Order advanced cardiac biomarkers directly without physician gatekeeping or insurance pre-authorization delays.
                </p>
              </div>

              <div className="card-hover text-center">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary-light/20 rounded-lg flex items-center justify-center mx-auto">
                    <svg className="w-6 h-6 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="heading-3 mb-3">
                  Personalized Risk Assessment
                </h3>
                <p className="body">
                  Receive cardiology-grade interpretation of your results with family history integration and actionable prevention strategies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="section-padding bg-background-elevated" aria-label="Healthcare system limitations">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-2 mb-8 text-center">
                The Heart Disease Prevention Gap
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-2">Insurance Won't Cover What Matters</h3>
                      <p className="text-text-secondary text-sm">Your plan covers basic cholesterol but denies ApoB and Lp(a) — the tests that actually predict heart attacks.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-2">Doctor Gatekeeping</h3>
                      <p className="text-text-secondary text-sm">Many physicians won't order advanced cardiac biomarkers for "healthy" patients, even for prevention.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-2">Outdated Standard of Care</h3>
                      <p className="text-text-secondary text-sm">Healthcare still relies on basic lipid panels that miss 50% of people who have heart attacks.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-2">Expensive Out-of-Pocket</h3>
                      <p className="text-text-secondary text-sm">Individual advanced tests can cost $200-500 each through traditional labs.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="body-large mb-6">
                  <strong>We bridge the gap between what cardiologists recommend and what you can actually access.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding" aria-label="Frequently asked questions">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="heading-2 mb-12 text-center">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="card">
                  <h3 className="heading-3 mb-3">
                    What are the best markers for cardiovascular health?
                  </h3>
                  <p className="body">
                    The most predictive cardiovascular biomarkers include ApoB (apolipoprotein B), Lp(a) (lipoprotein a), and hs-CRP (high-sensitivity C-reactive protein). These advanced markers provide better risk assessment than traditional cholesterol tests alone.
                  </p>
                </div>
                
                <div className="card">
                  <h3 className="heading-3 mb-3">
                    Does insurance cover Lp(a) testing?
                  </h3>
                  <p className="body">
                    Most insurance plans don't cover Lp(a) testing without specific medical indications, creating barriers to preventive cardiovascular screening. CardioGuard provides direct access to these important tests without insurance pre-authorization.
                  </p>
                </div>
                
                <div className="card">
                  <h3 className="heading-3 mb-3">
                    What is a preferred cardiac biomarker?
                  </h3>
                  <p className="body">
                    ApoB is increasingly recognized as the preferred cardiac biomarker because it measures the actual number of atherogenic particles, providing more accurate cardiovascular risk assessment than LDL cholesterol alone.
                  </p>
                </div>
                
                <div className="card">
                  <h3 className="heading-3 mb-3">
                    Is a basic lipid panel covered by insurance?
                  </h3>
                  <p className="body">
                    Basic lipid panels are typically covered by insurance, but advanced cardiovascular biomarkers like ApoB, Lp(a), and NMR lipoproteins often require prior authorization or aren't covered at all. This creates gaps in preventive heart disease screening.
                  </p>
                </div>
                
                <div className="card">
                  <h3 className="heading-3 mb-3">
                    How accurate is basic cholesterol testing really?
                  </h3>
                  <p className="body">
                    Basic cholesterol tests miss approximately 50% of people who go on to have heart attacks. Advanced biomarkers like ApoB and particle number provide much more accurate risk prediction for cardiovascular events.
                  </p>
                </div>
                
                <div className="card">
                  <h3 className="heading-3 mb-3">
                    What's the difference between functional medicine and traditional cardiology testing?
                  </h3>
                  <p className="body">
                    Functional medicine practitioners often order comprehensive cardiovascular panels including advanced biomarkers, while traditional cardiologists may stick to basic lipid panels unless you already have heart disease. CardioGuard bridges this gap with direct access to advanced testing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-background-elevated">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="heading-2 mb-4">
                Get the Heart Tests You Need
              </h2>
              <p className="body-large mb-8">
                Finally, get the heart tests you need without jumping through insurance hoops. Join our early access program.
              </p>
              <SignupForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background border-t border-border py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-text-primary mb-4">CardioGuard</h3>
              <p className="text-text-muted text-sm">
                Advanced Heart Tests Without Insurance Barriers
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-text-primary mb-4">Learn</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/blog" className="text-text-muted hover:text-accent transition-colors">Cardiovascular Biomarker Guide</Link></li>
                <li><Link href="/compare" className="text-text-muted hover:text-accent transition-colors">Basic vs Advanced Testing</Link></li>
                <li><Link href="/faq" className="text-text-muted hover:text-accent transition-colors">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-text-primary mb-4">Testing</h4>
              <ul className="space-y-2 text-sm">
                <li><span className="text-text-muted">ApoB Testing</span></li>
                <li><span className="text-text-muted">Lp(a) Analysis</span></li>
                <li><span className="text-text-muted">hs-CRP Inflammation</span></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-text-primary mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-text-muted hover:text-accent transition-colors">About</Link></li>
                <li><Link href="/privacy" className="text-text-muted hover:text-accent transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="text-text-muted hover:text-accent transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-text-muted text-sm">
              &copy; 2024 CardioGuard. Advanced cardiovascular risk assessment.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}