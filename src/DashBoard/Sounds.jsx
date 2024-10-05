import React from "react";

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

const SoundCard = ({ symbol, word }) => (
  <div className=" flex flex-col items-center border-2 border-gray-200 shadow-[0_2px_0_#E5E5E5] cursor-pointer text-[#4B4B4B] active:shadow-none active:translate-y-[5px] rounded-2xl  pb-2 text-center w-[150px] md:w-[155px]">
    <h3 className="text-[18px] font-din-round-light">{symbol}</h3>
    <p className="text-[#AFAFAF] font-din-round-light text-[16px]">{word}</p>
    <div className="border-t-8 border-gray-300 w-10 bg-[#E5E5E5] rounded-3xl opacity-60"></div>
  </div>
);

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
        <div key={index} className="flex flex-col items-center w-full text-center ">
          
          <div className="flex items-center justify-center w-3/4 mt-5">
            <div className="border-t-2 opacity-60 border-gray-300 w-3/4"></div>
            <p className="text-[20px] px-4 font-din-round text-[#4B4B4B] font-bold text-center">
              {section.title}
            </p>
            <div className="border-t-2 opacity-60 border-gray-300 w-3/4"></div>
          </div>
          <div className="grid w-[478px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4 mb-5">
            {section.items.map((item, idx) => (
              <SoundCard key={idx} symbol={item.symbol} word={item.word} />
            ))}
          </div>
        </div>
      ))}
    

    </div>
  );
};

export default LearnSounds;
