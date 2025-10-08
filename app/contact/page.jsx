export const dynamic = "force-static"; // render estático

export default function ContactPage() {
  return (
    <section className="pt-16 md:pt-20 pb-24 md:pb-32 bg-[#a6a6c4]" >
      <div className="container">
        {/* Encabezado */}
        <div className="text-center mb-12 md:mb-16">
          <p className="eyebrow mb-3">Let’s talk</p>
          <h1 className="title-hero mb-4">Get in touch</h1>
          <p className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-300">
            Tell me about your brand, your product, or that idea you want to launch.
            I’ll reply within 1–2 business days.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tarjeta de información */}
          <div className="rounded-2xl ring-1 ring-neutral-200/60 dark:ring-neutral-800/60 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-md p-6 md:p-8">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              Contact details
            </h2>

            <ul className="space-y-3 text-neutral-700 dark:text-neutral-300">
              <li>
                <span className="block text-sm text-neutral-500 dark:text-neutral-400">
                  Email
                </span>
                <a href="mailto:mypayments.developer@gmail.com" className="hover:opacity-80">
                  mypayments.developer@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-sm text-neutral-500 dark:text-neutral-400">
                  Based in
                </span>
                Barcelona - Oporto - USA 
              </li>
            </ul>

            <div className="h-px bg-neutral-200 dark:bg-neutral-800 my-6" />

            <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-3">
              Follow
            </h3>
            <div className="flex items-center gap-4 text-neutral-700 dark:text-neutral-300">
              <a
                href="https://www.behance.net/"
                target="_blank"
                className="hover:opacity-80"
              >
                Behance
              </a>
              <span className="opacity-30">•</span>
              <a
                href="https://dribbble.com/"
                target="_blank"
                className="hover:opacity-80"
              >
                Dribbble
              </a>
              <span className="opacity-30">•</span>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="hover:opacity-80"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Formulario (Netlify) */}
          <ContactFormCard />
        </div>
      </div>
    </section>
  );
}

/** --- Tarjeta con formulario integrada (lista para Netlify) --- */
function ContactFormCard() {
  return (
    <div className="rounded-2xl ring-1 ring-neutral-200/60 dark:ring-neutral-800/60 bg-white/80 dark:bg-neutral-900/60 backdrop-blur-md p-6 md:p-8">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
        Tell me about your project
      </h2>

      {/* Netlify form básico */}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/contact/thanks"
        className="space-y-5"
      >
        {/* Requisitos Netlify */}
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-neutral-600 dark:text-neutral-300 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full rounded-xl bg-white dark:bg-neutral-900 ring-1 ring-neutral-200 dark:ring-neutral-800 px-4 py-3 outline-none focus:ring-primary"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm text-neutral-600 dark:text-neutral-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-xl bg-white dark:bg-neutral-900 ring-1 ring-neutral-200 dark:ring-neutral-800 px-4 py-3 outline-none focus:ring-primary"
              placeholder="you@company.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-neutral-600 dark:text-neutral-300 mb-1">
            What do you need?
          </label>
          <select
            name="service"
            className="w-full rounded-xl bg-white dark:bg-neutral-900 ring-1 ring-neutral-200 dark:ring-neutral-800 px-4 py-3 outline-none focus:ring-primary"
            defaultValue="Brand Identity"
          >
            <option>Brand Identity</option>
            <option>UX/UI Design</option>
            <option>Website (Next.js)</option>
            <option>Editorial / Graphic</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-neutral-600 dark:text-neutral-300 mb-1">
            Message
          </label>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full rounded-xl bg-white dark:bg-neutral-900 ring-1 ring-neutral-200 dark:ring-neutral-800 px-4 py-3 outline-none focus:ring-primary resize-y"
            placeholder="A few lines about your project, goals, deadlines…"
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          <label className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <input type="checkbox" name="newsletter" className="scale-110" />
            Keep me posted about new work
          </label>


          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-primary text-white font-medium hover:opacity-90 transition"
          >
            Send message
          </button>
        </div>
      </form>


      {/* Nota de respuesta */}
      <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">
        This form uses Netlify Forms. You’ll see submissions in your Netlify dashboard.
      </p>
    </div>
  );
}
