import Image from "next/image";
export default function CaseGallery({ images=[] }){
if(!images.length) return null;
return (
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
{images.map((src,i)=> (
<div key={i} className="relative aspect-[16/10] card overflow-hidden">
<Image src={src} alt="Project image" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover"/>
</div>
))}
</div>
);
}