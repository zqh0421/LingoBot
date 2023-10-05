"use client";

import Header from "@/components/layout/header";

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
