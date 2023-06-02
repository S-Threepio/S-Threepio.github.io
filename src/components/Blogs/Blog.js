import React, { useEffect } from "react";
import b1 from "../../imgs/blog/android.png";

const Blog = (props) => {
  const { blog, isLast } = props;

  useEffect(() => {
    console.log(blog, isLast);
  }, []);

  return (
    <div>
      <div className="flex flex-col xl:flex-row p-5 items-center">
        <img
          src={blog.img}
          className="object-contain w-[250px] h-[300px] mx-10"
        />
        <div className="flex flex-col gap-10 items-center">
          <div className="text-xl lg:text-3xl font-semibold w-4/5 text-justify">
            {blog.title} <a href={blog.link}>{blog.label}</a>
          </div>
          <div className="w-4/5 font-semibold text-justify">{blog.info}</div>
        </div>
      </div>
      {!isLast && (
        <div className="self-center border-b-[1px] border-gray-400" />
      )}
    </div>
  );
};

export default Blog;
