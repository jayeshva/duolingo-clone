import React from 'react'
import { SoundCard } from './SoundCard'

function Section({section,index}) {
  return (
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
  )
}

export default Section