"use client";

import {useRouter} from "next-nprogress-bar";

import Header from "@/components/layout/header";

export default function AsideLayout({children}: {children: React.ReactNode}) {
  const router = useRouter();
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* <input></input> */}
    </>
  );
}
