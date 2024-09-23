import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Ships from "@/components/Ships";
import Places from "@/components/Places"
import Culture from "@/components/Culture"
import Carousel from '@/components/Carousel';
import Info from '@/components/Info';
import Events from '@/components/Events';

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between p-0">
      <Header/>
      <Carousel/> 
      <Ships/>  
      <Info/> 
      <Places/>  
      <Culture/>
      <Events/>
      <Footer/>
    </main>
  );
}
