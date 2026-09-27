import type { Metadata } from "next";
import { Geist, Geist_Mono, Changa_One, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PageTransition from "@/components/pageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const changaOne = Changa_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ayobami Aina | Frontend Developer",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${montserrat.variable} antialiased min-h-full`}>
        <main className={` ${montserrat.variable}`}>
          <PageTransition>
            <div className="font-montserrat">{children}</div>
          </PageTransition>
        </main>
      </body>
    </html>
  );
}
