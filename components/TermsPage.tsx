import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <div className="relative z-10 w-full max-w-4xl mx-auto px-8 md:px-16 pt-32 pb-20">
        
        {/* White rounded container */}
        <div className="bg-white rounded-xl p-8 md:p-12 text-black">
          
          <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-12">Terms of Use</h1>
          
          <p className="text-sm text-black/50 mb-12">Last updated: January 2026</p>
          
          <div className="space-y-10 text-sm font-light text-black/70 leading-relaxed">
            
            <section>
              <h2 className="text-lg font-normal text-black mb-4">Acceptance of Terms</h2>
              <p>
                By accessing and using the C3 (Cloud Computing Community) website and services, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.
              </p>
            </section>
            
            <section>
              <h2 className="text-lg font-normal text-black mb-4">Community Guidelines</h2>
              <p className="mb-4">As a member of our community, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 text-black/60">
                <li>Treat all members with respect and professionalism</li>
                <li>Not engage in harassment, discrimination, or bullying</li>
                <li>Share knowledge openly and constructively</li>
                <li>Respect intellectual property rights</li>
                <li>Not share confidential or proprietary information without authorization</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-lg font-normal text-black mb-4">Use of Services</h2>
              <p className="mb-4">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 text-black/60">
                <li>Use our services for any illegal or unauthorized purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the integrity of our services</li>
                <li>Upload malicious code or content</li>
                <li>Impersonate another person or entity</li>
                <li>Use automated systems to access our services without permission</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-lg font-normal text-black mb-4">Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and software, is the property of C3 or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>
            
            <section>
              <h2 className="text-lg font-normal text-black mb-4">User Content</h2>
              <p>
                By submitting content to our community (including but not limited to forum posts, project contributions, and event materials), you grant C3 a non-exclusive, royalty-free license to use, display, and distribute such content for community purposes.
              </p>
            </section>
            
            <section>
              <h2 className="text-lg font-normal text-black mb-4">Events and Hackathons</h2>
              <p>
                Participation in C3 events and hackathons is subject to additional terms and guidelines provided at the time of registration. We reserve the right to remove participants who violate community guidelines or event rules.
              </p>
            </section>
            
            <section>
              <h2 className="text-lg font-normal text-black mb-4">Disclaimer</h2>
              <p>
                Our services are provided "as is" without warranties of any kind. We do not guarantee the accuracy, completeness, or usefulness of any information on our website. Your use of our services is at your own risk.
              </p>
            </section>
            
            <section>
              <h2 className="text-lg font-normal text-black mb-4">Limitation of Liability</h2>
              <p>
                C3 and its contributors shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services or any content provided through our community.
              </p>
            </section>
            
            <section>
              <h2 className="text-lg font-normal text-black mb-4">Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting. Your continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
            </section>
            
            <section>
              <h2 className="text-lg font-normal text-black mb-4">Contact Us</h2>
              <p>
                If you have any questions about these Terms of Use, please contact us at hello@cloudcommunity.com
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

export default TermsPage;
