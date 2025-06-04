"use client";

import { cn } from "@/lib/utils";
import { div } from "motion/react-client";
import { BackgroundGradientAnimation } from "./GradientBg";
import { Globe } from "./Globe";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import { IoCopyOutline } from "react-icons/io5";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("danielkiyiki00@gmail.com");
    setCopied(true);
  };
  return (
    <div
      className={cn(
        "group/bento relative overflow-hidden shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl transition duration-200 hover:shadow-xl  dark:shadow-none border border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor: "90deg, rgba(4,,29,1) 0%, rgba(12,14,35,1) 100%",
      }}
    >
      <div className={`${id === 6} && flex justify-left h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover, object-center")}
            ></img>
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 {id===5 && 'w-full opacity-80'}`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover, object-center w-full h-full"}
            ></img>
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absulte z-50 flex items-center justify-center font-bold text-white"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans  text-sm md:text-xs lg:text-base z-10 font-extralight text-[#c1c2d3]">
            {description}
          </div>
          <div className="mt-2 mb-2 font-sans font-bold  text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>

          {/* must check for Error */}
          {/* {id === 2 && <GlobeDemo />} */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-36">
              <div className="flex flex-col gap-2 lg:gap-4">
                {["Flutter", "Dart", "Firebase"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"></span>
              </div>
              <div className="flex flex-col gap-2 lg:gap-4">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"></span>
                {["Next.js", "Tailwind", "Git&Github"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>
              <MagicButton
                title={copied ? "Email copied" : "Copy my email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
