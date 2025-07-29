import "./globals.css";
import Header from "../components/Header";
import React from "react";
import { Inter } from "next/font/google";

export const metadata = {
  title: "CS391 Movie searcher",
  description: "Find movie details using the OMDb (open movie database) API",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased min-h-screen bg-gradient-to-b from-blue-50 to-blue-100`}
      >
        <Header /> 
        {children}
      </body>
    </html>
  );
}
