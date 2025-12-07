export const dynamic = "force-dynamic";
export const revalidate = 0;

import Header from "@/app/components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}
