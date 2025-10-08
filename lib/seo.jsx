export function baseMetadata({
   title = "Maryliz R. — Brand & Product Designer",
   description = "Clean interfaces, strong identities, and cohesive digital experiences.",
   url = "https://marylizr.com",
 } = {}) {
   return {
     title,
     description,
     openGraph: {
       title,
       description,
       url,
       siteName: "Maryliz R.",
       type: "website",
     },
     twitter: {
       card: "summary_large_image",
       title,
       description,
     },
   };
 }
 