import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { raleway } from "@/lib/fonts";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Kris QA",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(raleway.className, "h-full w-full", "bg-primary-bg text-primary-dark")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
