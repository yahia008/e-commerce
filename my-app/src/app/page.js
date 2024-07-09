import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-cover bg-center h-screen " style={{ backgroundImage: "url('/Thumbnail.jpg')" }}>
      <div className=" pt-[150px] pl-[150px]">
        
        <h1 className="text-yellow-600 text-5xl font-bold mb-10 ">BIBAT STORE</h1>

      <Link href='/products'> <button className="bg-yellow-400
        hover:bg-black
         text-white p-3 rounded
         text-xl font-bold">Get Started</button></Link> 

      </div>
    </div>
        
  );
}
