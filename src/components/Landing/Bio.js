import React, { useContext } from "react";
import Desc from "./Desc";
import BasicButtons from "./BasicButtons";
import { GlobalDataContext } from "../../provider/GlobalDataProvider";

const Bio = () => {
  const bio = useContext(GlobalDataContext).about.bio;
  return (
    <div className="hidden md:flex md:flex-col  md:w-[450px] lg:w-[500px] p-4 px-12">
      <div className="py-4 font-bold text-7xl ">{bio.bigGreet}</div>
      <div className="text-2xl">{bio.intro}</div>
      <BasicButtons />
      <Desc description={bio.description} />
    </div>
  );
};

export default Bio;
