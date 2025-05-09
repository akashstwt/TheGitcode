import { Heart } from "lucide-react";
import Splinebot from "./Splinebot";
import Link from "next/link";
export default function Home() { 
  return (
    <main className="min-h-screen text-[#B5F004] flex flex-col items-center m-16 gap-12 relative">
      {/* Background Spline Model */}
      {/* <div className="absolute inset-0 z-0 flex justify-center align-middle mt-[70px] mr-[50px]">
      <Splinebot />
      </div> */}

      {/* Content on top of the background */}
      <div className="flex flex-col w-full max-w-[1239px] h-[314px] z-10 relative">
        <h1 className="self-end lg:w-[400px] lg:text-[18px] text-end text-[12px] w-[200px] font-light">
          Grow your impact, and be part of a thriving network where every contribution counts.
        </h1>
        <p className="self-start lg:w-[195px] lg:text-[36px] font-trap text-[28px] w-[30px] font-light">Welcome to</p>
        <div className="flex flex-row mt-10">
        <p className="self-center font-trap text-center w-full lg:text-[150px] lg:-mt-[120px] pl-8 text-[40px] -mt-[40px] px-4 font-bold">
          {`{Gitc `}
        </p>
        <div className="absolute inset-0 z-0 flex justify-center align-middle mt-16">
      <Splinebot />
      </div>
      <p className="self-center font-trap text-center w-full lg:text-[150px] lg:-mt-[120px] pl-8 text-[40px] -mt-[40px] px-4 font-bold">
          {` dĕ-v3}`}
        </p>

        </div>
        {/* <pre className="self-center font-trap text-center w-full lg:text-[175px] lg:-mt-[120px] pl-8 text-[40px] -mt-[40px] px-4">
          {`{Gitc    dĕ-V3}`}
        </pre> */}
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-6 mt-10 z-10 relative">
        <p className="text-[#B5F001] text-center">Coming Soon...</p>
        <div className="flex flex-row gap-8">
          <Link href="/Projects/Sponsers">
          <button className="w-[124px] h-[50px] bg-[#B5F001] text-black font-medium flex items-center justify-center gap-2 shadow-lg hover:translate-x-[2px] hover:translate-y-[-2px] active:translate-x-[0px] active:translate-y-[0px] hover:shadow-[-8px_8px_0px_#000000] active:shadow-[0px_0px_0px_#000000] transition-transform duration-150 ease-in-out">
            <Heart size={24} /> Sponsor
          </button>
          </Link>
          <Link href="/Projects/Contribute">
          <button className="w-[124px] h-[50px] border-2 border-[#B5F001] hover:bg-[#384414] hover:border-3 shadow-lg hover:translate-x-[2px] hover:translate-y-[-2px] active:translate-x-[0px] active:translate-y-[0px] hover:shadow-[-8px_8px_0px_#000000] active:shadow-[0px_0px_0px_#000000] transition-transform duration-150 ease-in-out">
            Contribute
          </button></Link>
        </div>
      </div>
    </main>
  );
}
