import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//import {HeaderFont} from "next/font/google";

//const headerFont = HeaderFont({
//  subsets: [],
//  variable: "",
//  weight: ""
//});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KarystoSecret",
  description: "Δρομολόγια Μαρμάρι-Ραφήνα, Καιρός, Τοποθεσίες, Εκδηλώσεις στην Κάρυστο.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className }>{children}</body>
    </html>
  );
}
