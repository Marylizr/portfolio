import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Contact | Marylizr Portfolio",
  description: "Get in touch with Mary for collaborations, design and web projects.",
};

export default function Page() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-white dark:bg-gray-950 pt-28 px-6">
        <section className="max-w-3xl mx-auto text-center">
          <div className="mx-auto mb-8 h-20 w-20 flex items-center justify-center rounded-full bg-gray-900 dark:bg-white">
            {/* Manufacturing Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="currentColor"
              className="h-12 w-12 text-white dark:text-gray-900"
            >
              <path d="https://fonts.google.com/icons?icon.size=60&icon.color=%23fff&selected=Material+Symbols+Outlined:manufacturing:FILL@0;wght@400;GRAD@0;opsz@48&icon.query=engin"/>
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            This page is in progress
          </h1>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            I’m polishing a simple, delightful contact experience. Meanwhile, you can reach me directly.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:mypayments.developer@gmail.com"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-white bg-gray-900 dark:bg-white dark:text-gray-900 hover:opacity-90 transition"
            >
              Email Mary
            </a>
            <a
              href="https://www.linkedin.com/in/marylizr"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Marylizr"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900 transition"
            >
              GitHub
            </a>
          </div>

          <div className="mt-10 text-sm text-gray-500 dark:text-gray-400">
            Prefer WhatsApp or a short call? I can add those here too.
          </div>
        </section>
      </main>
    </>
  );
}
