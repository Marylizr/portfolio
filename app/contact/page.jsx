export const metadata = {
   title: "Contact | Marylizr Portfolio",
   description: "Get in touch with Mary for collaborations, design and web projects.",
 };
 
 export default function Page() {
   return (
     <main className="max-w-4xl mx-auto px-6 py-16">
       <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
         Let’s work together
       </h1>
       <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
         I’d love to hear about your project ideas or collaborations. 
         Feel free to reach out by email or connect with me on social media.
       </p>
 
       <div className="grid md:grid-cols-2 gap-8">
         {/* Card Email */}
         <div className="rounded-2xl shadow-md p-8 bg-white dark:bg-gray-800">
           <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
             Email
           </h2>
           <p className="text-gray-600 dark:text-gray-300 mb-4">
             The fastest way to reach me.
           </p>
           <a
             href="mailto:hello@marylizr.com"
             className="inline-block bg-primary-light hover:bg-primary-dark text-white px-6 py-3 rounded-xl transition"
           >
             Say Hello
           </a>
         </div>
 
         {/* Card Socials */}
         <div className="rounded-2xl shadow-md p-8 bg-white dark:bg-gray-800">
           <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
             Social Media
           </h2>
           <p className="text-gray-600 dark:text-gray-300 mb-4">
             Let’s connect online and share ideas.
           </p>
           <div className="flex space-x-4">
             <a
               href="https://www.linkedin.com/in/marylizr"
               target="_blank"
               className="text-primary-light hover:text-primary-dark transition"
             >
               LinkedIn
             </a>
             <a
               href="https://instagram.com/pixeltrendstudio"
               target="_blank"
               className="text-primary-light hover:text-primary-dark transition"
             >
               Instagram
             </a>
             <a
               href="https://github.com/Marylizr"
               target="_blank"
               className="text-primary-light hover:text-primary-dark transition"
             >
               GitHub
             </a>
           </div>
         </div>
       </div>
     </main>
   );
 }
 