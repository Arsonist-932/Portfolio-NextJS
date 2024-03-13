import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
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
  metadataBase: new URL("https://portfolio.alexandre-fortune.dev"),
  openGraph: {
    title: "Alexandre Fortuné | Portfolio de dev front",
    description:
      "Découvrez le portfolio d'Alexandre Fortuné, développeur web passionné spécialisé en HTML, CSS, JavaScript, React et Next.js. Explorez ses projets innovants et son expertise technique pour des solutions web dynamiques et percutantes",
    url: "https://portfolio.alexandre-fortune.dev",
    siteName: "Alexandre Fortuné | Portfolio de dev front",
    images: [
      {
        url: "/images/about-image2.webp",
        width: 800,
        height: 600,
      },
      {
        url: "/images/about-image2.webp",
        width: 1800,
        height: 1600,
        alt: "Alexandre Fortuné | Portfolio",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
