"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


const items = [
{ href: "/portfolio", label: "Portfolio" },
{ href: "/services", label: "Services" },
{ href: "/about", label: "About" },
{ href: "/contact", label: "Contact" },
];


export default function Navbar() {
const pathname = usePathname();
return (
<header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-100 bg-white/70 backdrop-blur">
<div className="container h-16 flex items-center justify-between">
<Link href="/" className="font-semibold tracking-tight">Marylizr</Link>
<nav className="hidden md:flex items-center gap-6">
{items.map((it) => (
<Link key={it.href} href={it.href} className={`text-sm ${pathname===it.href?"font-semibold":"text-neutral-700 hover:text-black"}`}>{it.label}</Link>
))}
</nav>
<Link href="/contact" className="btn btn-primary">Request Proposal</Link>
</div>
</header>
);
}