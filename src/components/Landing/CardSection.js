import React, { useContext } from "react";
import Desc from "./Desc";
import BasicButtons from "./BasicButtons";
import { GlobalDataContext } from "../../provider/GlobalDataProvider";

const CardSection = () => {
  const about = useContext(GlobalDataContext).about;
  const description = about.bio.description;
  const cardsection = about.cardsection;

  return (
    <div className="flex flex-col justify-center w-full border-gray-300 md:inline-block md:w-auto md:border md:shadow-lg h-max md:min-w-max">
      <div className="order-1 items-center flex flex-col md:py-4 px-10 md:bg-secondary">
        <img
          className="object-cover w-56 h-56 rounded-full lg:overflow-hidden"
          src={cardsection.pfp}
          alt="pfp"
        />
        <div className="flex flex-col items-center pt-6 font-sans text-2xl font-bold">
          <span>{cardsection.firstName}</span>
          <span>{cardsection.lastName}</span>
          <div className=" w-16 border-b-2 border-[#0050FF] pt-5" />
          <div className="flex flex-col items-center pt-5 text-lg font-semibold w-max">
            <span>{cardsection.degreeShort}</span>
            <span>{cardsection.date}</span>
          </div>
          <span className="block md:hidden">
            <BasicButtons />
          </span>
        </div>
      </div>
      <div className="flex flex-col order-3 py-4 md:hidden">
        <Desc description={description} />
      </div>
      <div className="flex order-2 w-full gap-2 py-2 bg-primary justify-evenly">
        {cardsection.socialMediaURLs.map((platform, index) => (
          <a href={platform.url}>
            <img
              className="w-8 hover:scale-125"
              src={platform.icon}
              alt="Icon"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default CardSection;