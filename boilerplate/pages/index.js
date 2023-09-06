import Image from "next/image";
import Link from "next/link";
import HeroImage from "../public/hero.jpg";
import { Logo } from '../Components/Logo/Logo';

export default function Home() {
  return(<div className="w-screen h-screen overflow-hidden flex justify-center items-center relative">
    <Image src={HeroImage} alt="hero" fill className="absolute" />
    <div>
      <div className="relative z-10 text-white px-10 py-5 text-center max-w-screen-sm bg-slate-900/50 rounded-lg backdrop-blur-sm">
      <Logo />
      <p>Placeholder text Placeholder text Placeholder text</p>
      <Link href="/post/new" className="btn">Let's Go!</Link>
      </div>
      </div>
  </div>
    );
}

