import Header from "@/components/layout/header";

export default function AsideLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
