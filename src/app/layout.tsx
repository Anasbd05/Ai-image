import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {Toaster} from "@/components/ui/sonner";

const inter = Inter({
  weight : ['100' , "300" , "400" , "500" , '700' , '900'],
  subsets : ['latin']
});


export const metadata: Metadata = {
  title: "Image Generation",
  description: "Generated images using ai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-white bg-gray-900 antialiased`}
      >
        <Navbar/>
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
