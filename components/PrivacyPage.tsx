import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <div className="relative z-10 w-full max-w-4xl mx-auto px-8 md:px-16 pt-32 pb-20">

        {/* White rounded container */}
        <div className="bg-white rounded-xl p-8 md:p-12 text-black border border-slate-300" style={{ borderWidth: '0.5px' }}>

          <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-12">Privacy Policy</h1>

          <p className="text-sm text-black/50 mb-12">Last updated: January 2026</p>

          <div className="space-y-10 text-sm font-light text-black/70 leading-relaxed">

            <section>
              <h2 className="text-lg font-normal text-black mb-4">Introduction</h2>
              <p>
                C3 (Cloud Computing Community) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and participate in our community activities.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-normal text-black mb-4">Information We Collect</h2>
              <p className="mb-4">We may collect information about you in various ways, including:</p>
              <ul className="list-disc list-inside space-y-2 text-black/60">
                <li>Personal information you voluntarily provide (name, email address)</li>
                <li>Information collected automatically (browser type, device information, IP address)</li>
                <li>Usage data and analytics to improve our services</li>
                <li>Communication data when you contact us or participate in community events</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-normal text-black mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 text-black/60">
                <li>Provide, maintain, and improve our community services</li>
                <li>Send you updates about events, hackathons, and learning opportunities</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Protect against unauthorized access and ensure security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-normal text-black mb-4">Data Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or to protect our rights. We may share anonymized, aggregated data for analytical purposes.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-normal text-black mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-normal text-black mb-4">Cookies</h2>
              <p>
                We may use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-normal text-black mb-4">Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-black/60">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-normal text-black mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@cloudcommunity.com" className="text-blue-600 hover:text-blue-700 transition-colors underline">hello@cloudcommunity.com</a>
              </p>
            </section>

          </div>

          {/* Back to Home */}
          <div className="mt-16 pt-8 border-t border-black/10">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/');
                window.dispatchEvent(new Event('pushstate'));
              }}
              className="text-sm text-black/50 hover:text-black transition-colors"
            >
              Back to Home
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default PrivacyPage;
