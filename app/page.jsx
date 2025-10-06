import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";


export default function Page(){
return (
<>
<Hero />
<Section title="Selected Work" kicker="Portfolio">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{projects.slice(0,4).map(p=> <ProjectCard key={p.slug} project={p}/>) }
</div>
</Section>
<Section title="Services" kicker="What I do">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="card p-6">
<h3 className="font-semibold text-lg">Brand Starter</h3>
<p className="text-sm text-neutral-600 mt-2">Logo, mini system, and brand sheet.</p>
</div>
<div className="card p-6">
<h3 className="font-semibold text-lg">Web Essentials</h3>
<p className="text-sm text-neutral-600 mt-2">One‑page Next.js site with SEO basics and GA4.</p>
</div>
<div className="card p-6">
<h3 className="font-semibold text-lg">Product Site Pro</h3>
<p className="text-sm text-neutral-600 mt-2">Multi‑page site, components, motion, and performance.</p>
</div>
</div>
</Section>
</>
);
}