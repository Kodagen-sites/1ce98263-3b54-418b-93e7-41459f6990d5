import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";

const company = siteConfig.company.name;
const email = siteConfig.company.email;
const jurisdiction = siteConfig.company.location;
const effectiveDate = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that govern your use of the ${company} website and services.`,
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 pb-24 pt-32 md:px-8 md:pt-40">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">Legal</p>
      <h1 className="mt-4 font-display text-4xl font-light tracking-tight md:text-5xl">
        Terms of Service
      </h1>
      <p className="mt-3 text-sm text-ink/55">Effective {effectiveDate}</p>

      <div className="mt-12 space-y-8 leading-relaxed [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-medium [&_li]:text-ink/80 [&_p]:text-ink/80 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6">
        <p>
          These Terms govern your access to and use of the {company} website and any services we
          make available through it. By using this site you agree to these Terms. If you do not
          agree, please do not use the site.
        </p>

        <div>
          <h2>Use of the site</h2>
          <ul>
            <li>You may use this site for lawful purposes only.</li>
            <li>You agree not to disrupt, probe, or attempt to gain unauthorised access to the site or its systems.</li>
            <li>You are responsible for the accuracy of any information you submit, including waitlist details.</li>
          </ul>
        </div>

        <div>
          <h2>Waitlist and early access</h2>
          <p>
            Joining the waitlist does not guarantee access to the product. We may invite users in
            any order, change availability, or modify features as the product evolves. Any pricing
            shown is indicative until confirmed in a written agreement.
          </p>
        </div>

        <div>
          <h2>Intellectual property</h2>
          <p>
            All content on this site — text, design, graphics, and logos — is owned by {company} or
            its licensors and is protected by applicable laws. You may not copy, reproduce, or
            distribute it without our prior written permission.
          </p>
        </div>

        <div>
          <h2>Disclaimers</h2>
          <p>
            The site and its content are provided &ldquo;as is&rdquo; without warranties of any
            kind, express or implied. We do not warrant that the site will be uninterrupted,
            error-free, or free of harmful components.
          </p>
        </div>

        <div>
          <h2>Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, {company} will not be liable for any indirect,
            incidental, or consequential damages arising from your use of, or inability to use,
            this site.
          </p>
        </div>

        <div>
          <h2>Changes to these terms</h2>
          <p>
            We may update these Terms from time to time. The effective date above shows when they
            were last revised. Continued use of the site after changes means you accept the
            updated Terms.
          </p>
        </div>

        <div>
          <h2>Contact us</h2>
          <p>
            Questions about these Terms? Email{" "}
            <a className="underline" href={`mailto:${email}`}>{email}</a>. We operate {jurisdiction}.
          </p>
        </div>
      </div>
    </main>
  );
}
