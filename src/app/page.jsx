"use client";
import LoadingComponent from "@/LoadingComponent/LoadingComponent";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [like, setLike] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <main className="min-h-screen bg-pink-300 flex items-center justify-center text-center flex-col overflow-hidden">

      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <Image
            src="https://ggaabriel.github.io/valentines-day/heh.gif"
            alt="kitty"
            width={400}
            height={400}
            priority={true}
          />
          <h1 className="font-black text-4xl text-white">Привет красоточка)</h1>
          <p className="font-black text-white">
            Давай проверим любишь ли ты меня)
          </p>
          <div
            onClick={() => {
              setLike(!like);
              const interval = setTimeout(() => {
                setIsLoading(!isLoading)
              }, 1000);
            }}
            className={`w-[100px] h-[100px] scale-150 bg-like cursor-pointer ${
              like ? "animate-likeAnim" : ""
            }`}
          ></div>
        </>
      )}
    </main>
  );
}
