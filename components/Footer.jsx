"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          © {year} Maryliz R. All rights reserved.
        </p>

        <nav className="flex items-center gap-5 text-sm text-neutral-700 dark:text-neutral-300">
          <Link href="/#about" className="hover:opacity-80">About</Link>
          <Link href="/#services" className="hover:opacity-80">Services</Link>
          <Link href="/portfolio" className="hover:opacity-80">Portfolio</Link>
          <a href="mailto:hello@marylizr.com" className="hover:opacity-80">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
