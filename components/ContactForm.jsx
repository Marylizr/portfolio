"use client";
import { useState } from "react";
export default function ContactForm(){
const [state,setState]=useState({name:"",email:"",message:""});
const [sent,setSent]=useState(false);
function onSubmit(e){
e.preventDefault();
const subject=encodeURIComponent("Project Inquiry — Mary");
const body=encodeURIComponent(`Name: ${state.name}\nEmail: ${state.email}\n\n${state.message}`);
window.location.href=`mailto:hello@marylizr.com?subject=${subject}&body=${body}`;
setSent(true);
}
return (
<form onSubmit={onSubmit} className="space-y-4 max-w-xl">
<input required type="text" placeholder="Name" className="w-full border border-neutral-200 rounded-xl px-4 py-3" value={state.name} onChange={e=>setState({...state,name:e.target.value})}/>
<input required type="email" placeholder="Email" className="w-full border border-neutral-200 rounded-xl px-4 py-3" value={state.email} onChange={e=>setState({...state,email:e.target.value})}/>
<textarea required placeholder="Tell me about your project" className="w-full border border-neutral-200 rounded-xl px-4 py-3 min-h-[140px]" value={state.message} onChange={e=>setState({...state,message:e.target.value})}/>
<button className="btn btn-primary" type="submit">Send</button>
{sent && <p className="text-sm text-green-600">Thanks — your email draft is ready.</p>}
</form>
);
}