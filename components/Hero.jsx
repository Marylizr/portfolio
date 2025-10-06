import Link from "next/link";


export default function Hero(){
return (
<section className="pt-6 pb-14">
<div className="container">
<h1 className="h1 max-w-4xl">Brand & Product Designer — UX/UI, Web, Identity</h1>
<p className="p-lg mt-4 max-w-2xl">I design clean interfaces, coherent design systems, and high‑performance Next.js websites with a focus on clarity and conversion.</p>
<div className="mt-6 flex gap-3">
<Link href="/portfolio" className="btn btn-primary">See Work</Link>
<Link href="/contact" className="btn">Request Proposal</Link>
</div>
</div>
</section>
);
}