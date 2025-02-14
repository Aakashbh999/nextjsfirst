import axios from "axios";
import React from "react";
import Image from "next/image";

const page = async ({ params }) => {
  const id = (await params).singleservice;
  console.log(id);
  const fetchData = async () => {
    const URL = `https://api.durlavparajuli.com.np/api/data/service/${id}`;
    try {
      const res = await axios.get(URL);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const data = await fetchData();
  console.log(data);
  return (
    <div className="text-center w-full px-28 py-4">
      <h1 className="text-xl ">{data?.provider}</h1>
      <div className="w-full flex bg-gray-500 py-6">
        <div className="p-7 w-[720px] ">
          <Image
            src="/images/service.jpg"
            alt="service image"
            width={500}
            height={500}
          />
        </div>
        <div className="w-full flex flex-col justify-between">
          <div className="flex flex-col items-start">
            <span>{data?.service}</span>
            <span>{data?.description}</span>
          </div>

          <button className="self-center bg-red-700 text-white rounded-lg px-10 py-4 font-semibold font-sans">
            {data?.price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
