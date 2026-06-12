import SEOHead from '../components/SEOHead'

function TermsOfService() {
  const lastUpdated = 'June 12, 2026'

  return (
    <section className="py-10 max-w-4xl mx-auto space-y-10">
      <SEOHead
        title="Terms of Service | WisdomCore Solutions"
        description="Read WisdomCore Solutions' Terms of Service to understand the conditions governing use of our website and software development services."
        canonical="/terms-of-service"
        noIndex={false}
      />

      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-bold">Legal</p>
        <h1 className="text-4xl font-extrabold text-zinc-950 tracking-tight">Terms of Service</h1>
        <p className="text-sm text-zinc-500">Last updated: {lastUpdated}</p>
      </div>

      <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 md:p-12 shadow-sm space-y-10 text-zinc-700 text-sm leading-7">

        <div className="space-y-3">
          <p>
            These Terms of Service ("Terms") govern your access to and use of the website <strong>wisdomcoresolutions.store</strong> and any services offered by <strong>WisdomCore Solutions</strong>, headquartered in Sirsa, Haryana, India ("Company", "we", "our", or "us").
          </p>
          <p>
            By accessing or using our website, you agree to be bound by these Terms. If you do not agree, please do not use our website or services.
          </p>
        </div>

        <Section title="1. Use of Website">
          <p>You agree to use our website only for lawful purposes and in a manner that does not infringe upon the rights of others. You must not:</p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>Use the website to transmit spam, malware, or any form of harmful content.</li>
            <li>Attempt to gain unauthorised access to any part of the website or its backend systems.</li>
            <li>Reproduce, redistribute, or commercially exploit our website content without written permission.</li>
            <li>Use automated scraping tools, bots, or crawlers to extract data from the website without consent.</li>
          </ul>
        </Section>

        <Section title="2. Intellectual Property">
          <p>
            All content on this website — including text, design, graphics, code, logos, and blog articles — is the intellectual property of WisdomCore Solutions or its respective authors, and is protected under applicable Indian and international copyright law.
          </p>
          <p className="mt-3">
            You may share links to our content and reference our published blog articles with proper attribution. You may not republish, resell, or pass off our content as your own without express written permission.
          </p>
        </Section>

        <Section title="3. Services & Project Engagements">
          <p>
            Engaging WisdomCore Solutions for software development, consulting, or any other service is governed by a separate Project Agreement or Statement of Work (SOW) signed between the client and the Company. These Terms do not constitute a service contract.
          </p>
          <p className="mt-3">Key conditions for all service engagements:</p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>Project scope, timelines, and payment terms are defined in the individual project agreement.</li>
            <li>WisdomCore Solutions retains the right to decline any project engagement at its discretion.</li>
            <li>Ownership of custom-developed software is transferred to the client upon full payment as per the agreed terms.</li>
            <li>We reserve the right to feature completed projects in our portfolio unless explicitly restricted by the client in writing.</li>
          </ul>
        </Section>

        <Section title="4. Limitation of Liability">
          <p>
            To the fullest extent permitted by law, WisdomCore Solutions shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services, including but not limited to loss of data, revenue, or business opportunities.
          </p>
          <p className="mt-3">
            Our website and its content are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement.
          </p>
        </Section>

        <Section title="5. Third-Party Links">
          <p>
            Our website may contain links to third-party websites for reference purposes. WisdomCore Solutions does not endorse, control, or take responsibility for the content, privacy practices, or terms of any linked third-party websites. Visiting external links is at your own risk.
          </p>
        </Section>

        <Section title="6. Contact Form & Submissions">
          <p>
            By submitting an inquiry through our contact form, you consent to our team contacting you via email or phone regarding your project. Submitted information is handled in accordance with our <a href="/privacy-policy" className="text-zinc-900 font-semibold hover:underline">Privacy Policy</a>. We do not share your inquiry details with third parties without your consent.
          </p>
        </Section>

        <Section title="7. Governing Law & Jurisdiction">
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the <strong>Republic of India</strong>. Any disputes arising from these Terms or your use of our services shall be subject to the exclusive jurisdiction of the courts in <strong>Sirsa, Haryana, India</strong>.
          </p>
        </Section>

        <Section title="8. Changes to These Terms">
          <p>
            We reserve the right to update or modify these Terms at any time. Changes will take effect upon posting to this page with a revised "Last updated" date. Your continued use of the website after any changes constitutes acceptance of the updated Terms.
          </p>
        </Section>

        <Section title="9. Contact Us">
          <p>For any questions about these Terms of Service, please reach out:</p>
          <div className="mt-4 p-5 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-1.5">
            <p><strong>WisdomCore Solutions</strong></p>
            <p>Sirsa, Haryana, India</p>
            <p>Email: <a href="mailto:wisdomcoresolutions@gmail.com" className="text-zinc-900 font-semibold hover:underline">wisdomcoresolutions@gmail.com</a></p>
            <p>Phone: <a href="tel:+919050524678" className="text-zinc-900 font-semibold hover:underline">+91 9050524678</a></p>
          </div>
        </Section>

      </div>
    </section>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="text-base font-bold text-zinc-950">{title}</h2>
      {children}
    </div>
  )
}

export default TermsOfService
