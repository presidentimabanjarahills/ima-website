import type { Metadata } from "next";
import { SITE_NAME } from "../../lib/site";

const title = "Terms of Use";
const ogTitle = "Terms of Use | IMA Banjara Hills";
const description = "Terms of Use governing your access to and use of the IMA Banjara Hills website.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/legal/terms" },
  openGraph: {
    title: ogTitle,
    description,
    url: "/legal/terms",
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description,
  },
};

// TODO: This is a reasonable standard-form draft, not legal advice. It must
// be reviewed and approved by the association's legal advisor before
// publishing, especially the sections on membership fees/refunds and
// liability.
export default function TermsOfUsePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal bg-clip-text text-transparent mb-4">
        Terms of Use
      </h1>
      <p className="text-brand-navy/70 text-sm mb-10 sm:mb-12">Last updated: August 2026</p>

      <div className="prose prose-navy max-w-none space-y-8 text-brand-navy/90 text-sm sm:text-base leading-relaxed">
        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the IMA Banjara Hills website (&quot;the Site&quot;), you agree to be bound
            by these Terms of Use. If you do not agree, please do not use the Site.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3">2. Use of the Site</h2>
          <p>
            The Site provides information about IMA Banjara Hills, its leadership, events, and initiatives,
            and offers online forms for membership applications, event registration, and general inquiries.
            You agree to use the Site only for lawful purposes and to provide accurate information when
            submitting any form.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3">3. Membership &amp; Event Registration</h2>
          <p>
            Submitting a membership application or event registration through the Site does not guarantee
            acceptance. Membership is subject to review and approval in accordance with IMA Banjara Hills
            and IMA national eligibility criteria. Fees paid for membership or event registration are
            processed as described at the time of payment; refund and cancellation requests should be
            directed to us using the contact details below and will be considered on a case-by-case basis.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3">4. Accuracy of Information</h2>
          <p>
            You are responsible for the accuracy of the information you submit, including medical council
            registration numbers, professional details, and identity documents. Providing false or
            misleading information may result in rejection or revocation of membership or registration.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3">5. Intellectual Property</h2>
          <p>
            All content on the Site, including text, images, and logos, is the property of IMA Banjara
            Hills or its licensors and is protected by applicable intellectual property laws. You may not
            reproduce or distribute Site content without prior written permission, other than the
            downloadable forms and resources expressly provided for that purpose.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3">6. Disclaimers</h2>
          <p>
            Information on the Site, including health advisories and event details, is provided for general
            informational purposes and does not constitute medical advice. The Site is provided &quot;as
            is&quot; without warranties of any kind.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3">7. Limitation of Liability</h2>
          <p>
            To the extent permitted by law, IMA Banjara Hills shall not be liable for any indirect,
            incidental, or consequential damages arising from your use of the Site or reliance on
            information provided on it.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3">8. Governing Law</h2>
          <p>
            These Terms are governed by the laws of India, and any disputes shall be subject to the
            jurisdiction of the courts in Hyderabad, Telangana.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3">9. Changes to These Terms</h2>
          <p>
            We may update these Terms of Use from time to time. Continued use of the Site after changes are
            posted constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3">10. Contact Us</h2>
          <p>
            If you have questions about these Terms, please contact us at{" "}
            <a href="mailto:presidentimabanjarahills@gmail.com" className="text-brand-teal font-semibold hover:underline">
              presidentimabanjarahills@gmail.com
            </a>{" "}
            or +91 99892-20003.
          </p>
        </section>
      </div>
    </div>
  );
}
