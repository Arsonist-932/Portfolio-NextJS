import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alexandre Fortuné | Portfolio de dev front",
  description:
    "Découvrez le portfolio d'Alexandre Fortuné, développeur web passionné spécialisé en HTML, CSS, JavaScript, React et Next.js. Explorez ses projets innovants et son expertise technique pour des solutions web dynamiques et percutantes",
  icons: {
    icon: "images/favicon/favicon.ico",
    shortcut: "images/favicon/favicon-16x16.png",
    apple: [
      { url: "images/favicon/apple-touch-icon.png" },
      {
        url: "images/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        {children}

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
