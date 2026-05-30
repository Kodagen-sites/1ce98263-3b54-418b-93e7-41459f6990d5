"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/content/site-config";

const NAV = [
  { label: "Roles", href: "#services" },
  { label: "Why Pallas", href: "#about" },
  { label: "How it works", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-full border px-5 py-2.5 transition-all duration-300 ${
          scrolled
            ? "border-ink/10 bg-bg/80 shadow-[0_8px_30px_rgba(58,61,69,0.08)] backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-ink"
        >
          {siteConfig.company.name}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink/70 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#waitlist"
            className="hidden rounded-full bg-ink px-5 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-85 md:inline-flex"
          >
            {siteConfig.cta.primary}
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="absolute inset-x-4 top-20 rounded-3xl border border-ink/10 bg-bg/95 p-6 shadow-xl backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base text-ink/80"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-ink px-5 py-3 text-center text-sm font-medium text-bg"
            >
              {siteConfig.cta.primary}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
