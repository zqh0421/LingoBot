import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function AsideLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
