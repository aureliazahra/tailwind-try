"use client";

import React from "react";

/* Wireframe heart sederhana (SVG) untuk elemen dekoratif) */
function WireHeart({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 180"
      className={`glow ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
    >
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#a7f3d0" />
        </linearGradient>
      </defs>
      <g stroke="url(#g)" opacity="0.9">
        {[...Array(15)].map((_, i) => {
          const t = i / 14;
          const a = 16 + t * 40;
          const path = Array.from({ length: 60 }, (_, j) => {
            const p = (j / 59) * Math.PI * 2;
            const x = 100 + a * Math.sin(p) ** 3;
            const y =
              85 -
              (13 * Math.cos(p) - 5 * Math.cos(2 * p) - 2 * Math.cos(3 * p) - Math.cos(4 * p)) *
                (a / 25);
            return `${j === 0 ? "M" : "L"} ${x} ${y}`;
          }).join(" ");
          return <path key={i} d={path} />;
        })}
      </g>
    </svg>
  );
}

export default function Page() {
  return (
    <>
      {/* Navbar (Flexbox) */}
      <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/60 backdrop-blur-md dark:border-slate-800/60 dark:bg-slate-900/50">
        <div className="container-padded flex h-14 items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="chip">2025 Design</span>
            <span className="hidden text-xs text-slate-400 sm:inline">24w</span>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a className="nav-link" href="#features">Features</a>
            <a className="nav-link" href="#services">Services</a>
            <a className="nav-link" href="#gallery">Gallery</a>
            <a className="nav-link" href="#blog">Blog</a>
            <a className="nav-link" href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="btn-ghost hidden sm:inline-flex">Sign In</button>
            <button className="btn-primary group">
              Start Your Project
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                »
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section (Colors & Background: gradasi + tombol) */}
      <section className="section relative overflow-hidden">
        {/* Dekorasi dash line */}
        <div className="container-padded">
          <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-slate-600/60 to-transparent" />
        </div>

        <div className="container-padded grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="badge mb-3">
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
              mikeysmusic • After Dark
              <kbd className="kbd">New</kbd>
            </div>
            <h1 className="headline">
              Creative Vision,
              <br className="hidden sm:block" />
              Digital Precision.
            </h1>
            <p className="subhead">
              We build brands that stand out. Transforming ideas into distinctive
              design, motion, and digital experiences.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button className="btn-primary group">
                Start Your Project
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  ❯
                </span>
              </button>
              <button className="btn-ghost">Our Work</button>
            </div>

            {/* Tombol interaktif (Transitions & Animations) */}
            <div className="mt-5 flex items-center gap-4 text-xs text-slate-400">
              <span className="uppercase tracking-wide">Interaktif:</span>
              <button className="btn-ghost group px-3 py-1.5 text-xs">
                Hover me
                <span className="ml-1 inline-block origin-bottom transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110">
                  ✨
                </span>
              </button>
              <span className="inline-flex items-center gap-1">
                <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-400"></span>
                animate-bounce
              </span>
            </div>
          </div>

          <div className="relative">
            {/* Card kaca kecil (Effects: blur + shadow) */}
            <div className="absolute -top-6 left-3 w-56 rounded-xl p-4 glass shadow-lg">
              <div className="mb-2 text-xs uppercase tracking-wider text-slate-300">
                Status
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-200">Active brief</span>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs text-emerald-300">
                  3
                </span>
              </div>
            </div>

            {/* Wireframe heart (dekorasi) */}
            <div className="relative mx-auto flex w-full max-w-md items-center justify-center md:max-w-lg">
              <div className="absolute -inset-10 rounded-full bg-gradient-to-br from-emerald-500/10 via-teal-400/10 to-transparent blur-2xl" />
              <WireHeart className="h-64 w-64 text-emerald-400/70 animate-float md:h-80 md:w-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features (Grid + Cards) */}
      <section id="features" className="section">
        <div className="container-padded">
          <h2 className="mb-8 text-center text-2xl font-extrabold tracking-tight md:text-3xl">
            Key Features
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Card tipis */}
            <div className="card">
              <div className="mb-3 text-3xl">💡</div>
              <h3 className="text-lg font-semibold">Innovative Concepts</h3>
              <p className="mt-1 text-sm text-slate-300">
                Transforming ideas into standout brand designs.
              </p>
            </div>
            {/* Card kuat (Borders & Radius) */}
            <div className="card-strong">
              <div className="mb-3 text-3xl">🧭</div>
              <h3 className="text-lg font-semibold">Strategic Thinking</h3>
              <p className="mt-1 text-sm text-slate-300">
                Every project backed by data-driven insights.
              </p>
            </div>
            <div className="card">
              <div className="mb-3 text-3xl">🎯</div>
              <h3 className="text-lg font-semibold">Creative Execution</h3>
              <p className="mt-1 text-sm text-slate-300">
                Delivering high-impact visuals with minimal chaos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services (2 kolom responsif + number list + dekorasi) */}
      <section id="services" className="section relative overflow-hidden">
        <div className="container-padded grid gap-10 md:grid-cols-2">
          <div className="relative">
            <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-2xl" />
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-slate-300">
              Our
            </div>
            <h2 className="mb-4 text-3xl font-extrabold">
              <span className="mr-2">Services</span>
              <span className="rounded bg-white/10 px-2 py-1 text-base">Showcase</span>
            </h2>
            <div className="relative">
              {/* Decorative wire heart kecil */}
              <WireHeart className="absolute -left-12 top-10 h-48 w-48 text-emerald-400/40 opacity-70" />
              <div className="card relative z-10 max-w-md">
                <p className="text-sm text-slate-300">
                  From branding to motion, we deliver consistent, scalable, and
                  accessible design systems.
                </p>
                {/* Layouting & Spacing demo: margin/padding/width/height */}
                <div className="mt-4 h-2 w-40 rounded-full bg-emerald-500/30"></div>
                <div className="mt-2 h-2 w-28 rounded-full bg-emerald-500/20"></div>
              </div>
            </div>
          </div>

          <div>
            <ol className="grid gap-3">
              {[
                "Brand Identity Design",
                "UI/UX Design",
                "Web Development",
                "Social Media Graphics",
                "Motion Graphics",
              ].map((label, i) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="text-3xl font-extrabold text-emerald-400">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <div>
                    <div className="font-semibold">{label}</div>
                    <p className="text-sm text-slate-400">
                      <span className="italic">crafted</span> for{" "}
                      <span className="underline underline-offset-2">impact</span>{" "}
                      and <span className="uppercase">clarity</span>.
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Gallery (Grid + bg-[url(...)] + aspect ratio + overflow-hidden) */}
      <section id="gallery" className="section">
        <div className="container-padded">
          <h2 className="mb-6 text-2xl font-extrabold">Galeri Foto</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            <div
              className="gallery-card bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60')] bg-cover bg-center"
              title="Branding"
            />
            <div
              className="gallery-card bg-[url('https://images.unsplash.com/photo-1604147706284-4dc0ae0f8c61?auto=format&fit=crop&w=900&q=60')] bg-cover bg-center"
              title="UI/UX"
            />
            <div
              className="gallery-card bg-[url('https://images.unsplash.com/photo-1522199670076-2852f80289c7?auto=format&fit=crop&w=900&q=60')] bg-cover bg-center"
              title="Dev"
            />
            <div
              className="gallery-card bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=900&q=60')] bg-cover bg-center"
              title="Motion"
            />
            <div
              className="gallery-card bg-[url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=60')] bg-cover bg-center"
              title="Graphics"
            />
            <div
              className="gallery-card bg-[url('https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=60')] bg-cover bg-center"
              title="Product"
            />
          </div>
        </div>
      </section>

      {/* Public Relations (timeline) */}
      <section className="section">
        <div className="container-padded">
          <h2 className="mb-10 text-center text-2xl font-extrabold">Public Relations</h2>
          <div className="timeline">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  month: "Jan 2025",
                  title: "New Collection",
                  desc: "Launched 2025 Geometry",
                  icon: "💎",
                },
                {
                  month: "Feb 2025",
                  title: "Feature",
                  desc: "Our Work featured in Design Weekly",
                  icon: "📰",
                },
                {
                  month: "Mar 2025",
                  title: "Award",
                  desc: "Awarded Best Emerge Studio",
                  icon: "🏆",
                },
              ].map((item, idx) => (
                <div key={idx} className="relative mx-6">
                  <div className="mx-auto flex max-w-xs flex-col items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-emerald-400 shadow ring-4 ring-emerald-400/20 md:mb-2" />
                    <div className="text-sm text-slate-400">{item.month}</div>
                    <div className="card w-full text-center">
                      <div className="mb-1 text-2xl">{item.icon}</div>
                      <div className="font-semibold">{item.title}</div>
                      <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Post (Typography lengkap + multi column) */}
      <section id="blog" className="section">
        <div className="container-padded">
          <div className="mb-6 flex items-center gap-3">
            <span className="chip">Blog</span>
            <span className="text-xs text-slate-400">Typography Showcase</span>
          </div>

          <article className="post card">
            <h2>
              Building Brands that <span className="text-emerald-400">Stand Out</span>
            </h2>
            <p className="mt-2 text-sm md:text-base">
              We combine <span className="font-bold">strategy</span>,{" "}
              <span className="italic">creativity</span>, and{" "}
              <span className="underline">precision</span> to craft unique digital
              products. Our tone is clear, accessible, and inclusive.
            </p>
            <blockquote className="mt-4">
              “Design is the silent ambassador of your brand.”
            </blockquote>

            {/* Multi column text (Advanced: columns-2) */}
            <div className="mt-6 columns-1 gap-6 md:columns-2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                porta, nibh sed convallis tempus, risus sem convallis augue.
              </p>
              <p>
                Nunc pellentesque, leo in bibendum ultrices, dolor lacus laoreet
                mi, non vehicula risus mi sit amet lorem.
              </p>
            </div>

            {/* Arbitrary value color (Advanced) */}
            <div className="mt-6 rounded-lg bg-[#1e293b] p-4 text-slate-200">
              Box using arbitrary color bg-[#1e293b].
            </div>
          </article>
        </div>
      </section>

      {/* Video Container (Advanced: aspect-video) */}
      <section className="section">
        <div className="container-padded">
          <h2 className="mb-4 text-2xl font-extrabold">Showreel</h2>
          <div className="overflow-hidden rounded-xl border border-slate-800 shadow-lg">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form (State variants: focus/hover/disabled/dark) */}
      <section id="contact" className="section">
        <div className="container-padded">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-3 text-2xl font-extrabold">Ready to level up your brand?</h2>
              <p className="text-slate-300">
                Let&apos;s work together. Fill the form and we&apos;ll get back to you.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-emerald-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
                Open for new projects
              </div>
            </div>
            <form className="card space-y-4">
              <div>
                <label className="mb-1 block text-sm text-slate-300">Name</label>
                <input
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-emerald-500/70 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700/80 dark:bg-slate-900/60 dark:text-slate-100"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-slate-300">Email</label>
                <input
                  type="email"
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-emerald-500/70 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700/80 dark:bg-slate-900/60 dark:text-slate-100"
                  placeholder="jane@email.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-slate-300">Message</label>
                <textarea
                  rows={4}
                  className="w-full resize-none rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-emerald-500/70 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700/80 dark:bg-slate-900/60 dark:text-slate-100"
                  placeholder="Tell us about your project..."
                />
              </div>
              <div className="flex items-center gap-3">
                <button className="btn-primary group">
                  Send Message
                  <span className="transition-transform duration-200 group-hover:translate-x-1">➜</span>
                </button>
                <button className="btn-ghost" disabled>
                  Disabled
                </button>
              </div>
              <p className="text-xs text-slate-400">
                By sending, you agree to our{" "}
                <a className="text-emerald-400 underline" href="#">
                  Terms & Privacy
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Footer mirip gambar */}
      <section className="section pt-0">
        <div className="container-padded">
          <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white/60 p-6 text-center shadow-lg backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60 md:flex-row md:text-left">
            <div>
              <div className="text-xl font-bold">Ready to level up your brand?</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Let&apos;s Work Together</div>
            </div>
            <button className="btn-primary group">
              Let&apos;s Work Together
              <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">
                »
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer kecil */}
      <footer className="pb-10 pt-6">
        <div className="container-padded flex flex-col items-center justify-between gap-3 md:flex-row">
          <p className="text-xs text-slate-500">
            © 2025 Studio. Built with Next.js + Tailwind.
          </p>
          <div className="flex items-center gap-3">
            <span className="kbd">m</span>
            <span className="text-xs text-slate-500">Menu</span>
          </div>
        </div>
      </footer>
    </>
  );
}