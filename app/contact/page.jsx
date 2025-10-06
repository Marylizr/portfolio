import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
export default function Page(){
return (
<Section title="Contact" kicker="Let’s talk">
<p className="p-lg mb-6 max-w-2xl">Tell me about your project. I’ll reply with a short plan, a fair Barcelona‑market range, and a clear timeline.</p>
<ContactForm />
</Section>
);
}