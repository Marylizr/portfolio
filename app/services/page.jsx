import Section from "@/components/Section";
export default function Page(){
return (
<Section title="Services" kicker="Offerings">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="card p-6"><h3 className="font-semibold text-lg">Brand Starter</h3><p className="text-sm text-neutral-600 mt-2">Logo, mini system, and brand sheet.</p></div>
<div className="card p-6"><h3 className="font-semibold text-lg">Web Essentials</h3><p className="text-sm text-neutral-600 mt-2">One‑page Next.js site + SEO basics + GA4.</p></div>
<div className="card p-6"><h3 className="font-semibold text-lg">Product Site Pro</h3><p className="text-sm text-neutral-600 mt-2">Multi‑page, components, motion, performance 95+.</p></div>
</div>
</Section>
);
}