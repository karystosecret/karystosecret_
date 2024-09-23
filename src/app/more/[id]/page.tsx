import Header from "@/components/Header2";
import Footer from "@/components/Footer";
import Image from 'next/image';
import { notFound } from 'next/navigation';
import path from 'path';
import fs from 'fs/promises';

interface Item {
  id: number;
  title: string;
  image: string;
  smallDescription: string;
  region: string;
  bigDescription: string;
  link?: string;
}

async function getData(id: string): Promise<Item | null> {
  const categoriesPath = path.join(process.cwd(), 'data', 'categories.json');
  const categories2Path = path.join(process.cwd(), 'data', 'categories2.json');

  const [categoriesFile, categories2File] = await Promise.all([
    fs.readFile(categoriesPath, 'utf8'),
    fs.readFile(categories2Path, 'utf8')
  ]);

  const categories = JSON.parse(categoriesFile);
  const categories2 = JSON.parse(categories2File);

  const allItems = [
    ...categories.beaches,
    ...categories.places,
    ...categories2.products,
    ...categories2.sports
  ];

  return allItems.find((p: Item) => p.id === parseInt(id)) || null;
}

export async function generateStaticParams() {
  const categoriesPath = path.join(process.cwd(), 'data', 'categories.json');
  const categories2Path = path.join(process.cwd(), 'data', 'categories2.json');

  const [categoriesFile, categories2File] = await Promise.all([
    fs.readFile(categoriesPath, 'utf8'),
    fs.readFile(categories2Path, 'utf8')
  ]);

  const categories = JSON.parse(categoriesFile);
  const categories2 = JSON.parse(categories2File);

  const allItems = [
    ...categories.beaches,
    ...categories.places,
    ...categories2.products,
    ...categories2.sports
  ];

  return allItems.map((item: Item) => ({
    id: item.id.toString(),
  }));
}

export default async function MoreInfo({ params }: { params: { id: string } }) {
  const item = await getData(params.id);

  if (!item) {
    notFound();
  }

  return (
    <>
      <Header/>
      <div id='Places' className="animate-fadeInAnimation p-4 md:p-20 bg-gradient-to-r from-[#a0b29d] to-[#7ea9b5] z-10 w-full pt-8 pb-40">
        <p className="text-4xl md:text-5xl text-white font-bold text-center mb-8 drop-shadow-md tracking-tight">{item.title}</p>
        <div className="rounded-md w-full shadow-xl items-center p-2 mb-12">
          <div className='pb-4'>
            <div className="md:m-0 md:m-t-8 m-8 w-full decoration-green-900 border-radius-4 w-4/5 m-auto px-4 md:px-10">
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-8 gap-2">
                <div className="animate-moveDownAnimation w-full relative" style={{ paddingBottom: "65%" }}>
                  <Image
                    className="absolute rounded-sm inset-0 w-full h-full object-cover"
                    src={item.image}
                    alt={item.title}
                    fill
                  />
                </div>
                <div className="animate-moveDownAnimation w-full relative" style={{ paddingBottom: "65%" }}>
                  <Image
                    className="absolute rounded-sm inset-0 w-full h-full object-cover"
                    src={item.image}
                    alt={item.title}
                    fill
                  />
                </div>
              </div>
              <p className="animate-moveDownAnimation text-xl center mt-8 text-gray-200">{item.smallDescription}</p>
              <p className="animate-moveDownAnimation text-lg center mt-4 text-gray-200">{item.region}</p>
              <p style={{ whiteSpace: 'pre-line' }} className="text-sm md:text-md center mt-4 text-gray-200">{item.bigDescription}</p>
              {item.link && (
                <a href={item.link} className="animate-jump cursor-pointer rounded-sm border border-1 border-white relative md:mx-80 my-8 flex items-center justify-center px-5 py-4 overflow-hidden text-white transition duration-300 ease-out shadow-md hover:shadow-xl hover:ring-2 hover:[#7ea9b5]">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#a0b29d] via-[#7ea9b5] to-[#a0b29d]"></span>
                  <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-[#a0b29d] opacity-30 group-hover:rotate-90 ease"></span>
                  <span className="relative text-white text-md">Άνοιγμα στον Χάρτη</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div> 
      <Footer/>
    </>
  );
}