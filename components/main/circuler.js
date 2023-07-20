import React from "react";
import SingleLink from "./Singlelink";
import { useGetDatabaseAllQuery } from "@features/database/dbApi";

export default function Circular() {
  const { data, isError, isLoading, isSuccess } = useGetDatabaseAllQuery();
  const circular = data?.circuler.circuler;
  const recentCircular = circular?.slice(0, 8);
  //   console.log(recentCircular);
  return (
    <div className=" w-full h-full shadow-lg  bg-[rgba(250,250,250,.05)] p-2  flex flex-col gap-1 rounded-md">
      <p className=" text-center pl-4 text-xl border-b-2 border-[#23af84]  backdrop-blur-sm text-[#23af84] rounded-md p-1">
        Recently Added On Office Circular
      </p>
      <div className="flex flex-wrap w-full">
        {recentCircular?.map((circular, sl) => (
          <div className="xl:w-1/2 w-full" key={sl}>
            <SingleLink data={circular} folder={"circuler"} />
          </div>
        ))}
      </div>
    </div>
  );
}