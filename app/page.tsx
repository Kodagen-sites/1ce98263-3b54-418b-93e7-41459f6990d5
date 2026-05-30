"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ScrollCanvas from "@/components/ScrollCanvas";
import {
  HeroScrollText,
  ScrollHint,
  FadeUp,
  StaggerChildren,
  TextReveal,
  MagneticButton,
  CardTiltLayer,
  NumberCounter,
} from "@/components/motion";
import { siteConfig } from "@/content/site-config";
import framesManifest from "@/content/frames-manifest.json";

const BENTO_SIZES = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
];

export default function HomePage() {
  const [progress, setProgress] = useState(0);

  const frameCount = framesManifest.frameCount ?? 0;
  const pattern = framesManifest.frameUrlTemplate ?? "/frames/frame-{NNNN}.jpg";

  return (
    <>
      {/* ── Scrub-cinematic hero ─────────────────────────────── */}
      <ScrollCanvas
        frameCount={frameCount}
        pattern={pattern}
        padLength={4}
        scrollDistance={siteConfig.scrollHero.scrollDistance}
        loadingLabel="Assembling the workforce"
        loadingVariant="L2"
        onProgress={setProgress}
      >
        <HeroScrollText
          progress={progress}
          position="bottom-left"
          textColor="#FBFBFA"
          accentColor="#9CA0A8"
          accentTextColor="#1B1D22"
          chapters={[
            {
              at: 0,
              eyebrow: "Pallas — AI workforce",
              headlineLines: ["Meet the team", "that never sleeps"],
              subline:
                "AI employees that handle the work, onboarded in minutes.",
            },
            {
              at: 0.4,
              eyebrow: "One platform, every role",
              headlineLines: ["Support, sales,", "ops, and research"],
              subline:
                "Hire a department's worth of capability without the headcount.",
            },
            {
              at: 0.75,
              eyebrow: "Always on",
              headlineLines: ["Your business,", "running on autopilot"],
              subline: "Join the waitlist and build your AI workforce.",
              cta: { label: "Join the waitlist", href: "#waitlist" },
            },
          ]}
        />
        <ScrollHint label="Scroll" accentColor="#3A3D45" />
      </ScrollCanvas>

      {/* ── Trust bar ────────────────────────────────────────── */}
      <section className="border-y border-ink/10 bg-surface/30">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink/40">
            Roles ready to hire
          </span>
          {siteConfig.trustBar.map((item) => (
            <span
              key={item}
              className="font-display text-base font-medium text-ink/70"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ── #about — value proposition ───────────────────────── */}
      <section id="about" className="section-pad">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
            Why Pallas
          </p>
          <TextReveal
            as="h2"
            className="mt-5 max-w-4xl font-display text-4xl font-light leading-[1.05] tracking-tight text-ink md:text-6xl"
          >
            {siteConfig.whyUs.heading}
          </TextReveal>

          <StaggerChildren className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 md:grid-cols-3">
            {siteConfig.whyUs.items.map((item) => (
              <div key={item.title} className="bg-bg p-8 md:p-10">
                <h3 className="font-display text-xl font-medium text-ink">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink/65">
                  {item.description}
                </p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── #services — bento of AI roles ────────────────────── */}
      <section id="services" className="section-pad bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <FadeUp>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
              The roster
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-light leading-tight tracking-tight text-ink md:text-5xl">
              {siteConfig.servicesHeading}
            </h2>
          </FadeUp>

          <div className="mt-14 grid auto-rows-[200px] grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-3">
            {siteConfig.services.map((svc, i) => (
              <CardTiltLayer
                key={svc.slug}
                intensity={0.18}
                className={`${BENTO_SIZES[i] ?? ""}`}
              >
                <div className="group flex h-full flex-col justify-between rounded-2xl border border-ink/10 bg-bg p-7 transition-colors hover:border-ink/25">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                    AI Employee
                  </div>
                  <div>
                    <h3
                      className={`font-display font-medium leading-tight text-ink ${
                        i === 0 ? "text-3xl md:text-4xl" : "text-xl"
                      }`}
                    >
                      {svc.name}
                    </h3>
                    {(i === 0 || i === 1 || i === 5) && (
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/60">
                        {svc.description}
                      </p>
                    )}
                    <div className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-ink/50 transition-colors group-hover:text-ink">
                      Hire <ArrowRight size={13} />
                    </div>
                  </div>
                </div>
              </CardTiltLayer>
            ))}
          </div>
        </div>
      </section>

      {/* ── Oversized type statement ─────────────────────────── */}
      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <TextReveal
            as="h2"
            className="font-display text-[clamp(2.25rem,7vw,5.5rem)] font-light leading-[1.02] tracking-tight text-ink"
          >
            Stop staffing for tasks. Start directing a workforce that scales the
            moment you do.
          </TextReveal>
        </div>
      </section>

      {/* ── #process — how it works ──────────────────────────── */}
      <section id="process" className="section-pad bg-ink text-bg">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-bg/50">
            How it works
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-light leading-tight tracking-tight md:text-5xl">
            From idea to first shift in an afternoon
          </h2>

          <StaggerChildren className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-4">
            {siteConfig.process.map((step) => (
              <div key={step.step} className="border-t border-bg/20 pt-6">
                <div className="font-mono text-sm text-accent">
                  {String(step.step).padStart(2, "0")}
                </div>
                <h3 className="mt-4 font-display text-xl font-medium">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-bg/60">
                  {step.description}
                </p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {siteConfig.stats.map((stat) => (
              <FadeUp key={stat.label}>
                <div className="border-t border-ink/15 pt-5">
                  <div className="font-display text-5xl font-light tracking-tight text-ink md:text-6xl">
                    <NumberCounter to={Number(stat.value)} />
                  </div>
                  <div className="mt-3 text-sm text-ink/55">{stat.label}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── #waitlist — primary CTA ──────────────────────────── */}
      <section id="waitlist" className="section-pad bg-surface/40">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
          <FadeUp>
            <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight text-ink md:text-6xl">
              {siteConfig.ctaBlock.heading}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-ink/60">
              {siteConfig.ctaBlock.description}
            </p>
          </FadeUp>
          <div className="mt-10">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* ── #contact ─────────────────────────────────────────── */}
      <section id="contact" className="section-pad">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-end md:px-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
              Get in touch
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-light leading-tight tracking-tight text-ink md:text-5xl">
              Questions before you hire? Talk to us.
            </h2>
            <a
              href={`mailto:${siteConfig.company.email}`}
              className="mt-6 inline-block font-display text-xl text-ink/70 underline-offset-4 hover:text-ink hover:underline"
            >
              {siteConfig.company.email}
            </a>
          </div>
          <MagneticButton
            href="#waitlist"
            as="a"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-medium text-bg"
          >
            {siteConfig.cta.primary} <ArrowRight size={16} />
          </MagneticButton>
        </div>
      </section>
    </>
  );
}

function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className="font-display text-xl text-ink">
        You&apos;re on the list. We&apos;ll be in touch at{" "}
        <span className="text-accent">{email}</span>.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim()) setSubmitted(true);
      }}
      className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className="flex-1 rounded-full border border-ink/15 bg-bg px-5 py-3.5 text-sm text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-ink/40"
      />
      <button
        type="submit"
        className="rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
      >
        {siteConfig.cta.primary}
      </button>
    </form>
  );
}
