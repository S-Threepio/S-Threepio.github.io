import React from "react";
import cover from "../../imgs/blog/cover.jfif";
import Blog from "./Blog";
import b1 from "../../imgs/blog/android.png";
import b2 from "../../imgs/blog/docker.png";
import b3 from "../../imgs/blog/crypto.jpg";

const Blogs = () => {
  var count = 0;
  const blogdata = [
    {
      img: b1,
      title: "01 Associate Android Developer Certification By Google",
      link: "https://s-threepio.medium.com/associate-android-developer-certification-by-google-114ab755c187",
      label: "[Medium]",
      info: "I explained the process of cracking the Google's android certification exam, interview and the approach for it's preparation. I also created resources for the same purpose",
    },
    {
      img: b2,
      title: "02 Docker Overview with React Application",
      link: "https://s-threepio.medium.com/docker-overview-41a3bbfa19f3",
      label: "[Medium]",
      info: "I touched upon the basics of docker and it's advantages. As an add on, I have also explained the process to dockerize a basic react application.",
    },
    {
      img: b3,
      title: "03 Crypto Currency Block chain application",
      link: "https://s-threepio.medium.com/creating-a-cryptocurrency-blockchain-app-46d057d9a712",
      label: "[Medium]",
      info: "I wrote about the workings of the blockchain technology. I also explained how your own cryptocurrency can be created by using a redis publish subscribe model for peers.",
    },
  ];

  return (
    <div className="w-screen flex flex-1 flex-col items-center bg-white z-50 overflow-scroll">
      <img
        src={cover}
        className="w-screen h-[50vh] object-center object-cover"
      />
      <div className="flex-col flex md:w-4/5 min-[1600px]:w-3/5 mb-10 items-center">
        <div className="text-5xl font-bold p-4 mb-10">My Blogs</div>
        <div className=" lg:mx-32 m-10 font-serif text-lg text-justify">
          My habit of sharing learnings developed in HSBC where I gave a lot of
          knowledge transfer sessions. This very habit nurtured my interest in
          writing technical blogs. Below are the technical blogs that I
          published with the same intention.
        </div>
        <div className=" w-4/5 border-b-[1px] border-gray-800 xl:mb-20" />
        <div className="flex flex-col items-center w-4/5">
          {blogdata.map((blog, index) => (
            <Blog
              key={index}
              blog={blog}
              isEven={count % 2 == 0}
              isLast={count++ == blogdata.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
