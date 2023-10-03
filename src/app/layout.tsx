import type {Metadata} from "next";
import {Lato} from "next/font/google";
import React from "react";

import "./globals.css";
import Providers from "@/components/providers";

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Lingo Buddy",
  description: "Your lingo buddy.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="min-h-screen w-full bg-background">
      <body
        className={`${lato.className} min-h-full w-full bg-background text-black overflow-y-auto`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
