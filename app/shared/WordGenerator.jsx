// It will not work unless...
"use client";

import { useState } from "react";

const words = ["hello", "pumpkin", "cat", "car", "house", "audio", "video"];

export default function WordGenerator() {
  const [word, setWord] = useState("nothing yet :(");

  const generate = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord);
  }

  return (
    <div>
      <button onClick={generate}>Generate Word</button>
      {/* <br></br> */}
      <div>Generated: { word }</div>
    </div>
  );
}
