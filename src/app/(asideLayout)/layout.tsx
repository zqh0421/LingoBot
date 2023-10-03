import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Aside from "@/components/layout/aside";

export default function AsideLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Header />
      <main className="flex">
        <Aside />
        {children}
      </main>
      <Footer />
    </>
  );
}
