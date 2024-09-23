import Header from "@/components/Header2";
import Footer from "@/components/Footer";
import Culture from "@/components/Culture"
export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between p-0">
      <Header/> 
      <Culture/>
      <Footer/>
    </main>
  );
}
