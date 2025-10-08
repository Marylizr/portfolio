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
              <path d="M480-80q-83 0-156-31.5T196-196q-53-53-84.5-126T80-480q0-83 31.5-156T196-764q53-53 126-84.5T480-880q83 0 156 31.5T764-764q53 53 84.5 126T880-480q0 83-31.5 156T764-196q-53 53-126 84.5T480-80Zm0-80q125 0 212.5-87.5T780-480q0-125-87.5-212.5T480-780q-125 0-212.5 87.5T180-480q0 125 87.5 212.5T480-160Zm0-160q-83 0-141.5-58.5T280-520q0-83 58.5-141.5T480-720q83 0 141.5 58.5T680-520q0 83-58.5 141.5T480-320Zm0-80q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/>
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
