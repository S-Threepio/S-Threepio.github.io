import React from "react";
import piano from "../../imgs/hobby/piano.webp";
import book from "../../imgs/hobby/book.webp";
import Hobby from "./Hobby";

const Hobbies = () => {
  var count = 0;
  const hobbydata = [
    {
      hobbyname: "Book Reading",
      img: book,
      description:
        "I am an avid reader of fantasy fiction and any book which has an amazing story to tell. In my opinion stories hold a lot power. Layered characters in a wonderful imagination and the decisions they make in a particular situation can tell us a lot about the way of life.: My personal opinion :Every book is a self help book because reading is therapy.",
    },
    {
      hobbyname: "Piano",
      img: piano,
      description:
        "Apart from listening to music, I also love to create my own with the beautiful 88 key beast.I compose when I am lucky and I play when I am not busy. I try to incorporate what Beethoven said about : music :To play a wrong note is insignificant, but to play without passion is inexcusable.",
    },
  ];

  return (
    <div className="flex flex-1 flex-col items-center overflow-scroll">
      <div className="text-4xl md:text-5xl font-bold p-4 md:mt-6">Hobbies</div>
      <div className="flex flex-col m-4 gap-10">
        {hobbydata.map((hobby, index) => (
          <Hobby key={index} hobby={hobby} isEven={count++ % 2 == 0} />
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
