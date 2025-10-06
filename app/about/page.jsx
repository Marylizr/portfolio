import Section from "@/components/Section";
export default function Page(){
return (
<Section title="About" kicker="Profile">
<div className="prose max-w-none">
<p>I’m Mary, a brand and product designer who bridges design and code. I deliver Figma files and production‑ready Next.js builds.</p>
<p>Process: research, wireframes, a compact design system, clean UI, development, and QA. The goal is clarity, speed, and brand consistency.</p>
<ul>
<li>Design + Code: Figma and Next.js</li>
<li>Process: research → wireframes → UI → dev → QA</li>
<li>Results: fast pages, clear messaging, strong identity</li>
</ul>
</div>
</Section>
);
}