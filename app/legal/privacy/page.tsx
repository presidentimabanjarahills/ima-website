import type { Metadata } from "next";
import { SITE_NAME } from "../../lib/site";

const title = "Privacy Policy";
const ogTitle = "Privacy Policy | IMA Banjara Hills";
const description = "Privacy Policy for IMA Banjara Hills, covering how we collect, use, and protect your information.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/legal/privacy" },
  openGraph: {
    title: ogTitle,
    description,
    url: "/legal/privacy",
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
// publishing, especially the sections covering Aadhar/PAN and payment data
// collected through the membership, conference registration, and contact
// forms.
export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal bg-clip-text text-transparent mb-4">
        Privacy Policy
      </h1>
      <p className="text-brand-navy/70 text-sm mb-10 sm:mb-12">Last updated: August 2026</p>

      <div className="prose prose-navy max-w-none space-y-8 text-brand-navy/90 text-sm sm:text-base leading-relaxed">
        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3">1. Introduction</h2>
          <p>
            IMA Banjara Hills (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting the
            privacy of visitors to our website and members and applicants who use our online forms. This
            Privacy Policy explains what information we collect, how we use it, and the choices you have.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3">2. Information We Collect</h2>
          <p className="mb-3">We collect information you provide directly to us through our website forms, including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Contact form:</strong> your name, email address, phone number, and message.</li>
            <li>
              <strong>Membership application:</strong> your name, date of birth, gender, email, phone,
              address, medical council registration number, state medical council, specialization, year of
              graduation, and copies of your Aadhar or PAN card and passport-size photographs submitted as
              part of your application.
            </li>
            <li>
              <strong>Event registration:</strong> your name, contact details, medical council registration
              number, specialization, and related professional details.
            </li>
            <li>
              <strong>Payment information:</strong> for membership fees and event registration fees, we
              collect the payment method used and transaction reference details (such as a UTR or
              transaction ID) that you enter to confirm your payment. We do not collect or store your card,
              UPI PIN, or net-banking credentials; payments are made directly via UPI or bank transfer.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3">3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Process and verify membership applications and event registrations;</li>
            <li>Verify payments and match them to your application or registration;</li>
            <li>Respond to inquiries submitted through our contact form;</li>
            <li>Communicate updates about membership, events, and IMA Banjara Hills activities; and</li>
            <li>Comply with applicable legal and regulatory requirements.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3">4. How We Store and Protect Your Information</h2>
          <p>
            Form submissions are processed through a secured backend and stored in access-restricted
            records maintained by IMA Banjara Hills. Identity documents such as Aadhar or PAN copies are
            used solely to verify membership eligibility and are not shared publicly. We take reasonable
            technical and organizational measures to protect your information, but no method of electronic
            storage or transmission is completely secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3">5. Sharing of Information</h2>
          <p>
            We do not sell your personal information. We may share information with trusted service
            providers who process form submissions on our behalf (such as our form-processing backend), and
            with relevant medical councils or IMA national/state bodies where required to verify or process
            your membership. We may also disclose information where required by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3">6. Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of the personal information you have
            submitted to us by contacting us using the details below. We will respond within a reasonable
            time.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3">7. Cookies</h2>
          <p>
            Our website may use minimal cookies or local storage necessary for basic site functionality. We
            do not currently use third-party advertising or tracking cookies.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3">8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page
            with an updated &quot;Last updated&quot; date.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3">9. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or how your information is handled, please
            contact us at{" "}
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
