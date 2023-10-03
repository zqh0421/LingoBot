import type {Metadata} from "next";
import {Inter} from "next/font/google";
import React from "react";

import "./globals.css";
import Providers from "@/components/providers";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Lingo Buddy",
  description: "Your lingo buddy.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="min-h-screen w-full">
      <body className={`${inter.className} min-h-full w-full bg-globalBg overflow-y-auto`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
