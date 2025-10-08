"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../../components/NavBar";


const portfolioItems = [
  {
    
    image: "https://res.cloudinary.com/da6il8qmv/image/upload/v1741109671/logos-box_xbu2yz.png",
    link: "/portfolio/logos",
  },
  {
   
    image: "https://res.cloudinary.com/da6il8qmv/image/upload/v1741109671/corporate_toqwaa.png",
    link: "/portfolio/corporate-design",
  },
  {
    
    image: "https://res.cloudinary.com/da6il8qmv/image/upload/v1741109671/ux-ui-1_hbalum.png",
    link: "/portfolio/ux-ui",
  },
  {
   
    image: "https://res.cloudinary.com/da6il8qmv/image/upload/v1741109671/web-sites_t72hok.png",
    link: "/portfolio/web-design",
  },
  {
    
    image: "https://res.cloudinary.com/da6il8qmv/image/upload/v1741109671/editorial-design-1_rxvmgz.png",
    link: "/portfolio/editorial-design",
  },
  {
    
    image: "https://res.cloudinary.com/da6il8qmv/image/upload/v1741109671/graphic-design_opv0j7.png",
    link: "/portfolio/graphic-design",
  },
];

export default function Portfolio() {
  return (
    <section className="py-16 bg-gray-900 dark:bg-gray-800 text-textPrimary-light dark:text-textPrimary-dark text-center">
      {/* Mantiene tu Navbar */}
      <div>
        <Navbar />
      </div>

      <motion.h2
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-5xl font-display font-bold mb-12 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-700 dark:from-gray-500 dark:via-gray-400 dark:to-gray-300 bg-clip-text text-transparent animate-gradient"
      >
        Portfolio
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
        {portfolioItems.map((item, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="portfolio-card relative group rounded-lg overflow-hidden ring-1 ring-black/5 dark:ring-white/10 bg-gray-100 dark:bg-gray-700"
            >
            <Link href={item.link} className="block">
              {/* Imagen con boost de legibilidad en dark */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto rounded-none transition
                          dark:contrast-125 dark:brightness-110"
              />
          
              {/* Overlay sutil (oscurece un poco en dark para que el lettering claro resalte) */}
              <div
                className="absolute inset-0 pointer-events-none
                          bg-gradient-to-t from-black/25 via-black/10 to-transparent
                          opacity-60 dark:opacity-80
                          group-hover:opacity-90 transition"
              />
          
              {/* Etiqueta legible (opcional visible siempre en dark, en light queda discreta) */}
              <span
                className="absolute bottom-3 left-3 text-white/90 text-sm md:text-base font-medium tracking-wide text-glow"
              >
                {item.title}
              </span>
            </Link>
          </motion.div>
          
        
        ))}
      </div>
    </section>
  );
}

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