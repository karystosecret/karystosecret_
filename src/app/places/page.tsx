import Header from "@/components/Header2";
import Footer from "@/components/Footer";
import Places from "@/components/Places";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between p-0">
      <Header/>
      <Places/>  
      <Footer/>
    </main>
  );
}
