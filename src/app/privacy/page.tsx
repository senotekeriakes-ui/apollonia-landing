import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Apollonia",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream px-6 py-16 lg:px-12">
      <article className="mx-auto max-w-3xl border border-ink/10 bg-cream p-8 font-body text-ink sm:p-12">
        <h1 className="font-heading text-3xl tracking-tight text-ink sm:text-4xl">
          PRIVACY POLICY
        </h1>
        <p className="mt-1 text-sm text-ink/50">Last updated March 2026</p>

        <Section title="WHO WE ARE">
          <p>
            Apollonia Medical Technology (&quot;Apollonia&quot;, &quot;we&quot;,
            &quot;us&quot;, &quot;our&quot;) is an Australian company developing
            camera and software products for dental professionals. This policy
            explains how we collect, use, and protect your personal information
            when you interact with this website and apply for our beta
            programme.
          </p>
        </Section>

        <Section title="INFORMATION WE COLLECT">
          <p>When you submit a beta application, we collect:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Name, email address, and phone number (if provided)</li>
            <li>
              City of practice, professional role, and specialty (if applicable)
            </li>
            <li>Information about your current loupes (if provided)</li>
            <li>Free-text responses you choose to provide</li>
          </ul>
          <p className="mt-3">
            We also automatically collect basic analytics data such as page
            views, referral source, and device type through standard web
            technologies. We do not use third-party advertising trackers.
          </p>
        </Section>

        <Section title="HOW WE USE YOUR INFORMATION">
          <p>We use your information to:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Process and evaluate your beta application</li>
            <li>
              Contact you regarding beta programme participation and scheduling
            </li>
            <li>
              Send you product updates related to Apollonia (you may unsubscribe
              at any time)
            </li>
            <li>
              Improve our products and services based on aggregated, anonymised
              feedback
            </li>
          </ul>
          <p className="mt-3">
            We will never sell your personal information to third parties.
          </p>
        </Section>

        <Section title="DATA STORAGE & SECURITY">
          <p>
            Your data is stored securely using industry-standard encryption. We
            use trusted third-party service providers for form handling and email
            communications, each bound by their own privacy obligations. Data is
            stored in Australia or in jurisdictions with comparable data
            protection standards.
          </p>
        </Section>

        <Section title="YOUR RIGHTS">
          <p>
            Under Australian Privacy Principles (APPs), you have the right to:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your data</li>
            <li>
              Withdraw consent for marketing communications at any time
            </li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, contact us at the email address
            below.
          </p>
        </Section>

        <Section title="COOKIES & TRACKING">
          <p>
            This website uses essential cookies for functionality and basic
            analytics cookies to understand how visitors use the site. No
            third-party advertising or remarketing cookies are used. You can
            disable cookies in your browser settings at any time.
          </p>
        </Section>

        <Section title="CHANGES TO THIS POLICY">
          <p>
            We may update this policy from time to time. Any changes will be
            posted on this page with an updated effective date. Continued use of
            this website after changes constitutes acceptance of the revised
            policy.
          </p>
        </Section>

        <Section title="CONTACT">
          <p>
            For questions about this privacy policy or your personal data,
            contact Apollonia Medical Technology at{" "}
            <a
              href="mailto:senote@apollonia.com.au"
              className="underline hover:text-orange"
            >
              senote@apollonia.com.au
            </a>
            .
          </p>
        </Section>

        <div className="mt-12">
          <Link
            href="/"
            className="font-heading text-sm tracking-widest text-ink/60 hover:text-ink"
          >
            &larr; BACK TO HOME
          </Link>
        </div>
      </article>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8">
      <h2 className="font-heading text-sm tracking-widest text-ink">{title}</h2>
      <div className="mt-3 space-y-2 text-sm leading-relaxed text-ink/80">
        {children}
      </div>
    </section>
  );
}
