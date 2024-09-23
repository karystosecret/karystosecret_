import Video from 'next-video'
import MainVideo from '/videos/droneshot.mp4'
import BackgroundVideo from 'next-video/background-video';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Shops from "@/components/Shops";
import Ships from "@/components/Ships";
import Places from "@/components/Places"
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
      <Shops/>
      <Events/>
      <Footer/>
    </main>
  );
}
