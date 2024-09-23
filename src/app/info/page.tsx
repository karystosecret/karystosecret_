import Header from "@/components/Header2";
import Footer from "@/components/Footer";
import Info from '@/components/Info';

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between p-0">
      <Header/>
      <Info/>
      <Footer/>
    </main>
  );
}
