import React, { useState } from "react";
import HeroTitle from "./HeroTitle";
import HeroContent from "./HeroContent";
import SuccessMessage from "./SuccessMessage";
import { heroText, subHero } from "../utils/heroData";

const Hero = () => {
  const betterStartIndex = heroText
    .slice(
      0,
      heroText.findIndex((word) => word.name === "better")
    )
    .reduce((acc, word) => acc + word.name.length + 1, 0);

  const betterAnimationStart = betterStartIndex * 0.2;

  const allChars = heroText.reduce((acc, word, wordIndex) => {
    const chars = word.name.split("").map((char) => ({
      char,
      color: word.color
    }));

    if (wordIndex < heroText.length - 1) {
      chars.push({
        char: " ",
        color: "white"
      });
    }
    return [...acc, ...chars];
  }, []);

  return (
    <div className="md:h-[36rem] bg-hero-bg bg-no-repeat bg-top">
      <div className="div-padding">
        <div className="w-full bg-white bg-opacity-10 p-5 py-8 md:p-8 lg:p-10 my-10 rounded-[2rem] sm:rounded-[3rem]">
          <div className="max-w-[56rem]">
            <HeroTitle allChars={allChars} />
            <div className="mb-8 max-w-3xl">
              <HeroContent
                subHero={subHero}
                betterAnimationStart={betterAnimationStart}
              />
            </div>
          </div>
        </div>
      </div>
      <SuccessMessage
        betterAnimationStart={betterAnimationStart}
        subHeroLength={subHero.length}
      />
    </div>
  );
};

export default Hero;
