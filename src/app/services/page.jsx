import { API_URL } from "@/utils/constant";
import { getPublicData } from "@/utils/query";
import Link from "next/link";
import React from "react";

const page = async () => {
  const data = await getPublicData("/data/service");
  console.log(data);

  return (
    <div className="w-full px-[120px] py-11 flex flex-wrap gap-5 text-white bg-gradient-to-b from-gray-800 to-gray-700 ">
      {data?.map((item) => {
        return (
          <div
            key={item._id}
            className="w-[280px] h-[400px] bg-white bg-opacity-5 py-5 rounded-2xl px-2"
          >
            <div className="w-full h-[180px]  flex justify-center items-start">
              <img
                src="#"
                alt="#"
                className="w-[110px] h-[110px] rounded-full bg-black"
              />
            </div>
            <div className="w-full  pt-3 text-lg flex flex-col justify-start">
              <span>{item.service}</span>
              <span>{item.description}</span>
              <span>{item.price}</span>
              <Link
                href={`/services/${item._id}`}
                className="font-medium font-serif p-1 bg-red-600 bg-opacity-25"
              >
                {item.provider}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default page;
