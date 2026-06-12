import SEOHead from '../components/SEOHead'

function PrivacyPolicy() {
  const lastUpdated = 'June 12, 2026'

  return (
    <section className="py-10 max-w-4xl mx-auto space-y-10">
      <SEOHead
        title="Privacy Policy | WisdomCore Solutions"
        description="Read WisdomCore Solutions' Privacy Policy to understand how we collect, use, and protect your personal information when you use our website or services."
        canonical="/privacy-policy"
        noIndex={false}
      />

      {/* Header */}
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-bold">Legal</p>
        <h1 className="text-4xl font-extrabold text-zinc-950 tracking-tight">Privacy Policy</h1>
        <p className="text-sm text-zinc-500">Last updated: {lastUpdated}</p>
      </div>

      <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 md:p-12 shadow-sm space-y-10 text-zinc-700 text-sm leading-7">

        <div className="space-y-3">
          <p>
            WisdomCore Solutions ("Company", "we", "our", or "us"), headquartered in <strong>Sirsa, Haryana, India</strong>, operates the website <strong>wisdomcoresolutions.store</strong>. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
          </p>
          <p>
            By using our website, you consent to the data practices described in this policy. If you do not agree, please discontinue use of our website.
          </p>
        </div>

        <Section title="1. Information We Collect">
          <p>We may collect the following categories of personal information:</p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li><strong>Contact Information:</strong> Name, company name, email address, industry, and project brief — submitted through our contact or inquiry form.</li>
            <li><strong>Usage Data:</strong> Browser type, pages visited, time spent on pages, referring URLs, and device information — collected automatically via standard web analytics.</li>
            <li><strong>Communication Data:</strong> Any messages, feedback, or correspondence you send to us via email or through our website forms.</li>
          </ul>
          <p className="mt-3">We do <strong>not</strong> collect payment card information, government-issued identification, or any sensitive personal data through this website.</p>
        </Section>

        <Section title="2. How We Use Your Information">
          <p>The information we collect is used to:</p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>Respond to your project inquiries and consultation requests.</li>
            <li>Understand your business needs to provide accurate project scoping and proposals.</li>
            <li>Improve our website content, services, and user experience.</li>
            <li>Communicate project updates, technical information, and service announcements.</li>
            <li>Comply with legal obligations where applicable.</li>
          </ul>
          <p className="mt-3">We do <strong>not</strong> sell, rent, or share your personal information with third-party marketers.</p>
        </Section>

        <Section title="3. Data Storage & Security">
          <p>
            Contact form submissions are securely stored in our backend database managed by <strong>Supabase</strong> (a GDPR-compliant cloud database provider). We implement industry-standard security measures including Row-Level Security (RLS) policies, encrypted connections (HTTPS/TLS), and access controls to protect your data against unauthorised access.
          </p>
          <p className="mt-3">
            While we take reasonable precautions to protect your information, no method of data transmission over the internet is 100% secure. We encourage you to avoid sharing highly sensitive information via web forms.
          </p>
        </Section>

        <Section title="4. Cookies & Tracking">
          <p>
            Our website may use minimal cookies or browser local storage to maintain session state, remember user preferences, and gather anonymous usage analytics. We do not deploy invasive advertising tracking cookies or sell browsing data to third parties.
          </p>
          <p className="mt-3">
            You may configure your browser to decline cookies. Note that some site features may not function correctly if cookies are disabled.
          </p>
        </Section>

        <Section title="5. Third-Party Services">
          <p>We use the following third-party services that may process data on our behalf:</p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li><strong>Supabase:</strong> Backend database and authentication services.</li>
            <li><strong>Vercel:</strong> Website hosting and deployment infrastructure.</li>
            <li><strong>Google Analytics / Search Console:</strong> Website traffic and search performance analytics.</li>
            <li><strong>Google Fonts:</strong> Web typography assets (loaded from Google servers).</li>
          </ul>
          <p className="mt-3">Each third-party service operates under its own privacy policy. We encourage you to review their respective policies.</p>
        </Section>

        <Section title="6. Data Retention">
          <p>
            We retain inquiry and lead data submitted through our contact form for a period of up to <strong>24 months</strong> to maintain business communication continuity. After this period, data is either anonymised or deleted. You may request deletion of your data at any time by contacting us.
          </p>
        </Section>

        <Section title="7. Your Rights">
          <p>You have the right to:</p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>Request access to the personal data we hold about you.</li>
            <li>Request correction of inaccurate personal data.</li>
            <li>Request deletion of your personal data.</li>
            <li>Withdraw consent to data processing at any time.</li>
            <li>Lodge a complaint with a relevant data protection authority.</li>
          </ul>
          <p className="mt-3">To exercise any of these rights, please contact us at <strong>wisdomcoresolutions@gmail.com</strong>.</p>
        </Section>

        <Section title="8. Children's Privacy">
          <p>
            Our website and services are not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has submitted personal data through our website, please contact us immediately.
          </p>
        </Section>

        <Section title="9. Changes to This Policy">
          <p>
            We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. When we make material changes, we will update the "Last updated" date at the top of this page. Continued use of our website after updates constitutes acceptance of the revised policy.
          </p>
        </Section>

        <Section title="10. Contact Us">
          <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:</p>
          <div className="mt-4 p-5 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-1.5">
            <p><strong>WisdomCore Solutions</strong></p>
            <p>Sirsa, Haryana, India</p>
            <p>Email: <a href="mailto:wisdomcoresolutions@gmail.com" className="text-zinc-900 font-semibold hover:underline">wisdomcoresolutions@gmail.com</a></p>
            <p>Phone: <a href="tel:+919050524678" className="text-zinc-900 font-semibold hover:underline">+91 9050524678</a></p>
            <p>Website: <a href="https://wisdomcoresolutions.store" className="text-zinc-900 font-semibold hover:underline">wisdomcoresolutions.store</a></p>
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

export default PrivacyPolicy
