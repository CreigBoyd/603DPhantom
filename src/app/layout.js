import { Inter } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Recommended for font loading UX
});

export const metadata = {
  title: {
    template: "%s | 603D - Phantom",
    default: "603D - Phantom",
  },
  description:
    "603D - Phantom - Digital architect transforming ideas into immersive experiences with cutting-edge technology.",
  
  // Favicon and icon metadata
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
  
  // Additional metadata for better SEO and mobile experience
  manifest: '/site.webmanifest', // You can create this later for PWA features
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter min-h-screen relative"
        )}
      >
        {children}
        {/* Global/background components */}
        <FireFliesBackground />
        <Sound />
        {/* Modal placeholder - render modals inside this div */}
        <div id="my-modal" />
      </body>
    </html>
  );
}