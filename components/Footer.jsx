import Link from "next/link";
export default function Footer(){
return (
<footer className="border-t border-neutral-100">
<div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-neutral-600">© {new Date().getFullYear()} Marylizr</p>
<div className="flex gap-4 text-sm">
<Link href="/portfolio">Portfolio</Link>
<Link href="/services">Services</Link>
<Link href="/about">About</Link>
<Link href="/contact">Contact</Link>
</div>
</div>
</footer>
);
}