import "./globals.css";
import { baseMetadata } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata = baseMetadata();


export default function RootLayout({ children }) {
return (
<html lang="en">
<body>
<Navbar />
<main className="container pt-24 pb-20">{children}</main>
<Footer />
</body>
</html>
);
}