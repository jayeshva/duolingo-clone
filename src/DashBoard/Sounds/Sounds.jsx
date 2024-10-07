import React from "react";
import { SoundCard } from "./SoundCard";
import Section from "./Section";

const soundsData = {
  title: "Let's learn English sounds!",
  subtitle: "Train your ear and learn to pronounce English sounds",
  button: {
    label: "START +10 XP",
    link: "/start",
  },
  sections: [
    {
      title: "Vowels",
      items: [
        { symbol: "ɑ", word: "hot" },
        { symbol: "æ", word: "cat" },
        { symbol: "ʌ", word: "but" },
        { symbol: "ɛ", word: "bed" },
        { symbol: "eɪ", word: "say" },
        { symbol: "ə", word: "bird" },
        { symbol: "ɪ", word: "ship" },
        { symbol: "i", word: "sheep" },
        { symbol: "ə", word: "about" },
        { symbol: "oʊ", word: "boat" },
        { symbol: "ʊ", word: "foot" },
        { symbol: "u", word: "food" },
        { symbol: "aʊ", word: "cow" },
        { symbol: "aɪ", word: "time" },
        { symbol: "ɔɪ", word: "boy" },
      ],
    },
    {
      title: "Consonants",
      items: [
        { symbol: "b", word: "book" },
        { symbol: "ʧ", word: "chair" },
        { symbol: "d", word: "day" },
        { symbol: "f", word: "fish" },
        { symbol: "g", word: "go" },
        { symbol: "h", word: "home" },
        { symbol: "b", word: "book" },
        { symbol: "ʧ", word: "chair" },
        { symbol: "d", word: "day" },
        { symbol: "f", word: "fish" },
        { symbol: "g", word: "go" },
        { symbol: "h", word: "home" },
        { symbol: "b", word: "book" },
        { symbol: "ʧ", word: "chair" },
        { symbol: "d", word: "day" },
        { symbol: "f", word: "fish" },
        { symbol: "g", word: "go" },
        { symbol: "h", word: "home" },
        { symbol: "b", word: "book" },
        { symbol: "ʧ", word: "chair" },
        { symbol: "d", word: "day" },
        { symbol: "f", word: "fish" },
        { symbol: "g", word: "go" },
        { symbol: "h", word: "home" },
      ],
    },
  ],
};

const LearnSounds = () => {
  const { title, subtitle, button, sections } = soundsData;

  return (
    <div className="flex flex-col items-center mt-12 mr-3">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl md:text-[32px] font-bold mb-4 font-din-round text-[#4B4B4B] text-center">
          {title}
        </h1>
        <p className="text-gray-500 mt-1 font-din-round-light text-[19px]  text-center">
          {subtitle}
        </p>
        <button
          className="bg-[#1CB0F6] mt-5 mb-8 text-white shadow-[0_4px_0_#1999D6] tracking-wide font-din-round
    text-[16px] font-bold px-[115px] py-[10px] rounded-2xl active:shadow-none active:translate-y-[5px] hover:bg-sky-400 transition"
        >
          {button.label}
        </button>
      </div>

      {sections.map((section, index) => (
        <Section section={section} index={index} />
      ))}
    </div>
  );
};

export default LearnSounds;
