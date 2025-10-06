import projects from "@/data/projects";
import CaseGallery from "@/components/CaseGallery";


export async function generateStaticParams(){
return projects.map(p=>({ slug:p.slug }));
}


export default function Page({ params }){
const project = projects.find(p=>p.slug===params.slug);
if(!project) return <div className="py-20">Project not found.</div>;
return (
<div className="space-y-8">
<header className="space-y-2">
<p className="kicker">Case Study</p>
<h1 className="h2">{project.title}</h1>
<p className="p-lg text-neutral-700 max-w-2xl">{project.summary}</p>
<div className="text-sm text-neutral-600">Role: {project.role} · Tools: {project.tools?.join(", ")}</div>
</header>
<section className="grid md:grid-cols-2 gap-6">
<div className="card p-6"><h3 className="font-semibold mb-2">Context</h3><p className="text-sm text-neutral-700">{project.context}</p></div>
<div className="card p-6"><h3 className="font-semibold mb-2">Process</h3><ul className="text-sm text-neutral-700 list-disc ml-5 space-y-1">{project.process?.map((s,i)=>(<li key={i}>{s}</li>))}</ul></div>
</section>
<CaseGallery images={project.gallery} />
<section className="card p-6"><h3 className="font-semibold mb-2">Result</h3><ul className="text-sm text-neutral-700 list-disc ml-5 space-y-1">{project.result?.map((r,i)=>(<li key={i}>{r}</li>))}</ul></section>
</div>
);
}