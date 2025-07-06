import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import BackgroundSketch from "@/components/background-sketch";
import ThemeToggle from "@/components/theme-toggle";
import { ThemeProvider } from "@/contexts/theme-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alec D'Alelio - Full-Stack Developer",
  description: "Personal portfolio of Alec D'Alelio, a full-stack developer passionate about creating innovative solutions.",
  keywords: ["Alec D'Alelio", "Full-Stack Developer", "Portfolio", "Web Development"],
  authors: [{ name: "Alec D'Alelio" }],
  openGraph: {
    title: "Alec D'Alelio - Full-Stack Developer",
    description: "Personal portfolio of Alec D'Alelio, a full-stack developer passionate about creating innovative solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-[#0c0c0c] transition-colors duration-300`}
      >
        <ThemeProvider>
          <BackgroundSketch />
          <Navigation />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
