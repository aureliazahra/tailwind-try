// app/page.tsx

// Server Action untuk form (mengganti onSubmit client-side)
async function contactAction(_formData: FormData) {
  "use server";
  // Di sini kamu bisa memproses data form jika diperlukan:
  // const name = _formData.get("name");
  // const email = _formData.get("email");
  // Contoh: simpan ke DB / kirim email / revalidatePath(...)
  // Saat ini dibiarkan no-op agar halaman tidak error.
}

export default function Page() {
  return (
    <main className="min-h-screen w-full">
      {/* Top bar / Navbar (Flexbox) */}
      <header className="sticky top-3 z-50 mx-auto w-[min(1100px,95vw)]">
        <nav className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/40 px-4 py-2 shadow-lg backdrop-blur-md">
          {/* Left */}
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-full bg-gradient-to-tr from-emerald-500 to-yellow-300 shadow-md ring-2 ring-emerald-500/40" />
            <div className="leading-tight">
              <p className="text-xs text-gray-300">2025 Design • 24w</p>
              <p className="text-[11px] text-gray-400">
                mikeevsmusic — <span className="italic">After Dark</span>
              </p>
            </div>
          </div>
          {/* Right */}
          <div className="flex items-center gap-2">
            <button
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-200 transition hover:scale-[1.02] hover:bg-white/10"
              aria-label="Play"
            >
              <span className="relative inline-flex size-2">
                <span className="absolute inline-flex size-2 animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
              </span>
              Play
            </button>
          </div>
        </nav>
      </header>

      {/* HERO (Colors & Background + Button with transitions) */}
      <section className="relative mx-auto mt-6 w-[min(1100px,95vw)] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-emerald-900/20 via-emerald-700/10 to-transparent p-6 sm:p-10">
        <div className="pointer-events-none absolute inset-0 opacity-10 mix-blend-screen bg-[url('/images/pattern.svg')]"></div>

        <div className="pointer-events-none absolute -right-6 top-6 hidden h-56 w-56 animate-floaty heart-wire sm:block"></div>

        <div className="max-w-2xl">
          <h1 className="mb-3 bg-gradient-to-r from-emerald-300 via-yellow-200 to-emerald-100 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl">
            Creative Vision, Digital Precision.
          </h1>
          <p className="mb-6 text-sm text-gray-300 sm:text-base">
            We build brands that stand out. Desain berani, strategi matang, dan eksekusi yang presisi.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-yellow-400 px-4 py-2 text-sm font-semibold text-black shadow-lg transition duration-300 ease-out hover:scale-105 hover:shadow-emerald-500/25 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              Start Your Project
              <span className="transition-transform group-hover:translate-x-0.5">»</span>
            </a>
            <button
              className="rounded-lg border border-emerald-500/30 bg-black/20 px-4 py-2 text-sm text-gray-200 shadow-sm transition hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              See Case Studies
            </button>
          </div>
        </div>

        {/* Key stats overlay card demonstrating blur/opacity */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="card-sheen rounded-xl border border-white/10 bg-white/5 p-5 shadow-md backdrop-blur-md">
            <div className="mb-3 text-2xl">💡</div>
            <h3 className="mb-1 text-lg font-semibold">Innovative Concepts</h3>
            <p className="text-sm text-gray-300">Ide-ide baru yang relevan bagi brand Anda.</p>
          </div>
          <div className="card-sheen rounded-xl border-2 border-white/20 bg-white/5 p-5 shadow-lg">
            <div className="mb-3 text-2xl">🧠</div>
            <h3 className="mb-1 text-lg font-semibold">Strategic Thinking</h3>
            <p className="text-sm text-gray-300">Pendekatan berbasis data & insight.</p>
          </div>
          <div className="card-sheen rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm">
            <div className="mb-3 text-2xl">🎨</div>
            <h3 className="mb-1 text-lg font-semibold">Creative Execution</h3>
            <p className="text-sm text-gray-300">Eksekusi visual yang memukau.</p>
          </div>
        </div>
      </section>

      {/* SERVICES (2 columns responsive + mesh graphic) */}
      <section id="services" className="mx-auto mt-10 w-[min(1100px,95vw)]">
        <div className="mb-4 flex items-center gap-3">
          <span className="rounded bg-white px-2 py-1 text-xs font-bold uppercase text-black">Our</span>
          <h2 className="text-xl font-extrabold tracking-wide">Services</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Left: decorative mesh box */}
          <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-[#1e293b]/40 p-6">
            <div className="absolute inset-0 mesh-grid opacity-25"></div>
            <div className="absolute -bottom-8 -left-8 h-48 w-48 heart-wire animate-floaty opacity-80"></div>
            <div className="relative z-10">
              <p className="mb-2 text-sm text-gray-300">
                Kami memadukan strategi dan kreativitas untuk hasil maksimal.
              </p>
              <div className="divider-dashed my-4"></div>
              <div className="flex items-center gap-2 text-emerald-300">
                <span className="size-2 rounded-full bg-emerald-400"></span>
                <span className="size-2 rounded-full bg-emerald-400"></span>
                <span className="size-2 rounded-full bg-emerald-400"></span>
                <span className="size-2 rounded-full bg-emerald-400"></span>
              </div>
            </div>
          </div>

          {/* Right: ordered list of services */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <ol className="space-y-3">
              {[
                "Brand Identity Design",
                "UI/UX Design",
                "Web Development",
                "Motion Graphics",
                "Social Media Management",
                "Content Production",
                "Creative Consulting",
              ].map((item, i) => (
                <li key={i} className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-black/20 px-4 py-3">
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-extrabold text-emerald-300">0{i + 1}.</span>
                    <span className="text-sm font-medium text-gray-200">{item}</span>
                  </div>
                  <span className="hidden text-xs text-gray-400 sm:block">Detail »</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* PUBLIC RELATIONS (timeline-like) */}
      <section className="mx-auto mt-10 w-[min(1100px,95vw)]">
        <h3 className="mb-4 text-center text-lg font-extrabold">Public Relations</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { month: "Jan 2025", title: "New Collaborations", desc: "Kickoff with global brand" },
            { month: "Feb 2025", title: "PR Event", desc: "Brand Elevation Weekly" },
            { month: "Mar 2025", title: "Awards", desc: "Best Emerging Design Studio" },
          ].map((m, i) => (
            <div key={i} className="relative rounded-xl border border-white/10 bg-gradient-to-b from-emerald-900/10 to-transparent p-5 shadow-md">
              <div className="absolute -top-2 left-1/2 size-3 -translate-x-1/2 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20"></div>
              <p className="mb-1 text-xs uppercase tracking-wide text-gray-400">{m.month}</p>
              <h4 className="mb-1 text-sm font-bold">{m.title}</h4>
              <p className="text-sm text-gray-300">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY (Grid) */}
      <section className="mx-auto mt-10 w-[min(1100px,95vw)]">
        <div className="mb-3 flex items-end justify-between">
          <h3 className="text-lg font-extrabold">Photo Gallery</h3>
          <span className="text-xs text-gray-400">Grid layout demo</span>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          <div className="aspect-square overflow-hidden rounded-xl border border-white/10 bg-[url('https://images.unsplash.com/photo-1520975922284-7b50b77e0b36?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center shadow-sm"></div>
          <div className="aspect-square overflow-hidden rounded-xl border border-white/10 bg-[url('/images/pattern.svg')] bg-cover bg-center opacity-90"></div>
          <div className="aspect-square overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-emerald-500/30 to-gray-800"></div>
          <div className="aspect-square overflow-hidden rounded-xl border border-white/10 bg-[url('https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center"></div>
          <div className="aspect-square overflow-hidden rounded-xl border border-white/10 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center"></div>
          <div className="aspect-square overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-gray-700 to-gray-900"></div>
          <div className="aspect-square overflow-hidden rounded-xl border border-white/10 bg-[url('https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center"></div>
          <div className="aspect-square overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-emerald-600/20 to-transparent"></div>
        </div>
      </section>

      {/* BLOG + SIDEBAR (Typography + Responsive 2 columns) */}
      <section className="mx-auto mt-10 w-[min(1100px,95vw)]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Blog */}
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-wider text-emerald-300">Blog Post</p>
            <h2 className="mb-2 text-2xl font-extrabold">Design that drives business impact</h2>
            <p className="mb-3 text-sm text-gray-300">
              <span className="font-semibold text-gray-200 underline">Insight:</span> Visual yang kuat
              harus diiringi strategi. Tipografi, warna, dan hierarki informasi
              menyatu untuk mendorong konversi.
            </p>
            <h3 className="mb-2 text-lg font-bold text-gray-100">Key Takeaways</h3>
            <ul className="mb-3 list-disc space-y-1 pl-5 text-sm text-gray-300">
              <li>
                Pakai ukuran teks variatif <span className="italic">(text-xs → text-2xl)</span> untuk hierarki.
              </li>
              <li className="uppercase">kontras warna yang tepat meningkatkan fokus.</li>
              <li>
                Gunakan <span className="font-extrabold">font weight</span> berbeda untuk penekanan.
              </li>
            </ul>
            <div className="columns-2 gap-6 [column-fill:balance] sm:columns-2">
              <p className="mb-3 text-[13px] text-gray-300">
                Paragraph panjang contoh untuk utilitas multi kolom (columns-2). Ketika layar menyempit,
                kolom akan menumpuk menjadi satu agar mudah dibaca.
              </p>
              <p className="mb-3 text-[13px] text-gray-300">
                Ini menunjukkan advanced utilities untuk multi column tanpa plugin tambahan.
              </p>
            </div>
          </article>

          {/* Sidebar: Video + Form (aspect-video, state variants) */}
          <aside className="space-y-6">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30 shadow-md">
              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            <form
              id="contact"
              className="rounded-xl border border-white/10 bg-white/5 p-5 shadow-sm"
              action={contactAction}
            >
              <h4 className="mb-3 text-sm font-bold">Get in touch</h4>
              <div className="mb-3">
                <label htmlFor="name" className="mb-1 block text-xs text-gray-400">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-gray-100 placeholder:text-gray-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="mb-1 block text-xs text-gray-400">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-gray-100 placeholder:text-gray-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  placeholder="jane@company.com"
                />
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-500/20 px-4 py-2 text-sm font-semibold text-emerald-200 transition duration-200 hover:bg-emerald-500/30 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  Send Message
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </button>
                <button
                  disabled
                  className="cursor-not-allowed rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400 opacity-60 hover:bg-white/10 disabled:opacity-50"
                  title="Disabled state example"
                >
                  Disabled
                </button>
              </div>
              <p className="mt-2 text-[11px] text-gray-500 dark:text-gray-400">
                Kami membalas dalam 1–2 hari kerja.
              </p>
            </form>
          </aside>
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto my-10 w-[min(1100px,95vw)] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-transparent to-emerald-900/30 p-6 text-center">
        <h3 className="mb-2 text-xl font-extrabold">Ready to level up your brand?</h3>
        <p className="mx-auto mb-4 max-w-xl text-sm text-gray-300">
          Kolaborasi untuk membawa identitas visual dan digital Anda ke level yang lebih tinggi.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-5 py-2 text-sm font-semibold text-black shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          Let’s Work Together
          <span className="animate-bounce">»</span>
        </a>
      </section>

      <footer className="mx-auto mb-10 w-[min(1100px,95vw)] text-center">
        <div className="mx-auto max-w-sm rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs text-gray-400">
            Built with Next.js + Tailwind. Utilities practiced: spacing, flex/grid, typography, colors, borders,
            effects, transitions, responsive, variants, and advanced utilities.
          </p>
        </div>
      </footer>
    </main>
  );
}