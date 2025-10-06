"use client";
import { useState } from "react";
export default function FilterBar({ categories, onChange }){
const [active,setActive]=useState("All");
const cats=["All",...categories];
return (
<div className="flex gap-2 flex-wrap mb-6">
{cats.map(c=> (
<button key={c} onClick={()=>{setActive(c); onChange(c);}} className={`btn ${active===c?"btn-primary":""}`}>{c}</button>
))}
</div>
);
}