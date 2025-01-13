import React from "react";
import HeroTitle from "./HeroTitle";
import HeroContent from "./HeroContent";
import SuccessMessage from "./SuccessMessage";
import { heroText, subHero } from "../utils/heroData";

const computeBetterAnimationStart = () => {
  const betterStartIndex = heroText
    .slice(
      0,
      heroText.findIndex((word) => word.name === "better")
    )
    .reduce((acc, word) => acc + word.name.length + 1, 0);
  return betterStartIndex * 0.2;
};

const generateAllChars = () => {
  return heroText.reduce((acc, word, wordIndex) => {
    const chars = word.name.split("").map((char) => ({
      char,
      color: word.color
    }));

    if (wordIndex < heroText.length - 1) {
      chars.push({ char: " ", color: "white" });
    }

    return [...acc, ...chars];
  }, []);
};

const betterAnimationStart = computeBetterAnimationStart();
const allChars = generateAllChars();

const Hero = () => {
  return (
    <section
      className="md:h-[36rem] bg-hero-bg bg-no-repeat bg-top"
      aria-label="Hero section with title, content, and success message"
    >
      <div className="div-padding">
        {/* Content Wrapper */}
        <div className="w-full bg-white bg-opacity-10 p-5 py-8 md:p-8 lg:p-10 my-10 rounded-[2rem] sm:rounded-[3rem]">
          <div className="max-w-[56rem]">
            {/* Hero Title */}
            <HeroTitle allChars={allChars} />
            {/* Hero Content */}
            <div className="mb-8 max-w-3xl">
              <HeroContent
                subHero={subHero}
                betterAnimationStart={betterAnimationStart}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Success Message */}
      <SuccessMessage betterAnimationStart={betterAnimationStart} />
    </section>
  );
};

export default Hero;
