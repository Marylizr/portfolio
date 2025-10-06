import Image from "next/image";
import Link from "next/link";
export default function ProjectCard({ project }){
return (
<Link href={`/portfolio/${project.slug}`} className="block group card overflow-hidden">
<div className="relative aspect-[16/10]">
<Image src={project.cover} alt={project.title} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover"/>
</div>
<div className="p-4">
<div className="flex items-center gap-2 text-xs text-neutral-500 mb-1">
{project.tags?.map(t => <span key={t} className="px-2 py-0.5 rounded-full ring-1 ring-neutral-200">{t}</span>)}
</div>
<h3 className="text-lg font-semibold group-hover:underline">{project.title}</h3>
{project.summary && <p className="text-sm text-neutral-600 mt-1">{project.summary}</p>}
</div>
</Link>
);
}