"use client";
import { useMemo, useState } from "react";
import Section from "@/components/Section";
import FilterBar from "@/components/FilterBar";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";


export default function Page(){
const categories=useMemo(()=>Array.from(new Set(projects.map(p=>p.category))).sort(),[]);
const [filter,setFilter]=useState("All");
const list=useMemo(()=> filter==="All"?projects:projects.filter(p=>p.category===filter),[filter]);
return (
<Section title="Portfolio" kicker="Selected work">
<FilterBar categories={categories} onChange={setFilter}/>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{list.map(p=> <ProjectCard key={p.slug} project={p}/>) }
</div>
</Section>
);
}