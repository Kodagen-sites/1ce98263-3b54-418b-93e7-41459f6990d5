import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { SocialLinks } from "@/components/social-icons";

export default function Footer() {
  return (
    <footer className="relative z-20 border-t border-ink/10 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          <div className="space-y-4 md:col-span-2">
            <Link
              href="/"
              className="font-display text-xl font-semibold tracking-tight text-ink"
            >
              {siteConfig.company.name}
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-ink/60">
              {siteConfig.company.description}
            </p>
            <SocialLinks
              socials={siteConfig.socials}
              className="flex gap-4 pt-2 text-ink/60"
            />
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/45">
              Roles
            </h4>
            <ul className="space-y-2 text-sm text-ink/70">
              {siteConfig.services.slice(0, 5).map((svc) => (
                <li key={svc.slug}>
                  <a href="#services" className="transition-colors hover:text-ink">
                    {svc.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/45">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-ink/70">
              <li><a href="#about" className="hover:text-ink">Why Pallas</a></li>
              <li><a href="#process" className="hover:text-ink">How it works</a></li>
              <li><a href="#waitlist" className="hover:text-ink">Join waitlist</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/45">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-ink/70">
              <li className="flex items-start gap-2">
                <Mail size={14} className="mt-0.5 flex-shrink-0 text-accent" />
                <a href={`mailto:${siteConfig.company.email}`} className="hover:text-ink">
                  {siteConfig.company.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-accent" />
                <span>{siteConfig.company.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-ink/10 pt-8 font-mono text-xs text-ink/40 md:flex-row">
          <div>© {new Date().getFullYear()} {siteConfig.company.name}. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-ink/70">Privacy</Link>
            <Link href="/terms" className="hover:text-ink/70">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
