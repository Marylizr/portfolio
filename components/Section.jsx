export default function Section({ title, kicker, children, className="" }){
   return (
   <section className={`py-12 md:py-16 ${className}`}>
   <div className="container">
   {kicker && <p className="kicker mb-3">{kicker}</p>}
   {title && <h2 className="h2 mb-6">{title}</h2>}
   {children}
   </div>
   </section>
   );
   }