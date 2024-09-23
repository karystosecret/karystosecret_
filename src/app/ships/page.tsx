
import Header from "@/components/Header2";
import Footer from "@/components/Footer";
import Ships from "@/components/Ships";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between p-0">
      <Header/>
      <Ships/> 
      <Footer/>
    </main>
  );
}
