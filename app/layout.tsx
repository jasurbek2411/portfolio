import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio MJ",
  description: "Personal portfolio website Jasurbek Mansuralyev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          montserrat.className,
          "bg-bgdark min-h-screen max-w-screen text-white"
        )}
      >
        {children}
      </body>
    </html>
  );
}
