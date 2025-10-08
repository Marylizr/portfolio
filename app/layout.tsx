import "./globals.css";
import { baseMetadata } from "../lib/seo";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata = baseMetadata({
  title: "Maryliz R. — Brand & Product Designer",
  description:
    "Clean interfaces, strong identities, and cohesive digital experiences.",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {/* separador de la altura del nav (64px) */}
        <div className="h-16" />

        {/* padding-bottom global y min-height para empujar el footer abajo */}
        <main className="min-h-[calc(100vh-64px-100px)]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
