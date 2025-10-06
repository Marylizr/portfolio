export function baseMetadata({
   title = "Mary — Brand & Product Designer",
   description = "Clean interfaces, coherent systems, and high‑performance Next.js websites.",
   url = "https://marylizr.com",
   } = {}) {
   return {
   title, description,
   openGraph: { title, description, url, siteName: "Mary", type: "website" },
   twitter: { card: "summary_large_image", title, description },
   };
   }