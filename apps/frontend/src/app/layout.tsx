import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { raleway } from "@/lib/fonts";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "Kris QA",
  description: "Manual QA Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body
        className={cn(
          raleway.className,
          "bg-primary-bg text-primary-dark flex flex-col min-h-screen",
        )}
      >
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <div id="modal"></div>
      </body>
    </html>
  );
}
