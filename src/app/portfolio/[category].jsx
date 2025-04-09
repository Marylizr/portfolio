import { useRouter } from "next/router";
import LogoGallery from "@/components/LogoGallery"; // Import the gallery component

const portfolioData = {
  logos: {
    title: "Logos Portfolio",
    description: "A collection of stunning logos designed for various brands.",
  },
  "corporate-design": {
    title: "Corporate Design Portfolio",
    description: "Elegant and professional branding solutions.",
  },
  ux: {
    title: "UX/UI Design Portfolio",
    description: "User experience and interface designs for modern applications.",
  },
  websites: {
    title: "Website Portfolio",
    description: "Innovative web designs that engage and convert.",
  },
  "editorial-design": {
    title: "Editorial Design Portfolio",
    description: "Beautifully crafted magazine and book layouts.",
  },
  "graphic-design": {
    title: "Graphic Design Portfolio",
    description: "Posters, illustrations, and custom visuals.",
  },
};

export default function PortfolioPage() {
  const router = useRouter();
  const { category } = router.query;
  const categoryData = portfolioData[category];

  if (!categoryData) return <p className="text-center">Portfolio not found.</p>;

  return (
    <section className="py-16 max-w-6xl mx-auto px-6">
      <h1 className="text-4xl font-bold text-center mb-4">{categoryData.title}</h1>
      <p className="text-lg text-center mb-8">{categoryData.description}</p>
      <LogoGallery category={category} />
    </section>
  );
}
