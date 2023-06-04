import React from "react";
import Blog from "./Blog";
import images from "../../provider/ImageProvider";

const Blogs = () => {
  var count = 0;
  const blogdata = [
    {
      img: images.blogs.b1,
      title: "01 Associate Android Developer Certification By Google",
      link: "https://s-threepio.medium.com/associate-android-developer-certification-by-google-114ab755c187",
      label: "[Medium]",
      info: "I explained the process of cracking the Google's android certification exam, interview and the approach for it's preparation. I also created resources for the same purpose",
    },
    {
      img: images.blogs.b2,
      title: "02 Docker Overview with React Application",
      link: "https://s-threepio.medium.com/docker-overview-41a3bbfa19f3",
      label: "[Medium]",
      info: "I touched upon the basics of docker and it's advantages. As an add on, I have also explained the process to dockerize a basic react application.",
    },
    {
      img: images.blogs.b3,
      title: "03 Crypto Currency Block Chain Application",
      link: "https://s-threepio.medium.com/creating-a-cryptocurrency-blockchain-app-46d057d9a712",
      label: "[Medium]",
      info: "I wrote about the workings of the blockchain technology. I also explained how your own cryptocurrency can be created by using a redis publish subscribe model for peers.",
    },
  ];

  return (
    <div className="w-screen flex flex-1 flex-col items-center bg-white z-50 overflow-scroll">
      <img
        src={images.blogs.cover}
        className="w-screen h-[50vh] object-center object-cover"
      />
      <div className="mb-[5%] md:relative md:bottom-[25%]  md:mb-[-7%] flex flex-col w-4/5 lg:w-3/5 bg-white items-center">
        <div className="text-4xl md:text-5xl font-bold p-4 md:mt-6">
          My Blogs
        </div>
        <div className="mx-10 font-semibold md:text-lg md:mx-20 lg:mx-32 mt-10 text-justify">
          My habit of sharing learnings developed in HSBC where I gave a lot of
          knowledge transfer sessions. This very habit nurtured my interest in
          writing technical blogs. Below are the technical blogs that I
          published with the same intention.
        </div>
      </div>
      <div className="flex-col flex md:w-4/5 min-[1600px]:w-[65%] mb-10 items-center">
        <div className=" w-4/5 border-b-[1px] border-gray-800 xl:mb-18" />
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
