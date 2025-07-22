import React, { useState } from "react";
import Card from "./Card";
import { useRef } from "react";


const Foreground = () => {

  const ref = useRef(null);
  
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, in possimus!",
      size: ".4mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, in possimus!",
      size: ".4mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, in possimus!",
      size: ".4mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
  ];
  useState;
  return (
    <div ref={ref} className="w-full h-full top-0 left-0 fixed z-[3] flex gap-10 flex-wrap p-5">
      {data.map((item, index) => (
        <Card data={item} reference = { ref } />
      ))}
    </div>

  );
};

export default Foreground;
