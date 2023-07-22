"use client";
import React, { useState } from "react";
// import LeftBar from "./leftBar";
import Catagories from "./Catagories";
import SingleFile from "./SingleFile";
import Search from "@components/utils/Search";

import { useSelector } from "react-redux";
import { useGetDatabaseAllQuery } from "@features/database/dbApi";
import SingleLoader from "@components/utils/SingleLoader";

export default function LeftComponent() {
  const search = useSelector((state) => state.filter.search);

  const { data, isError, isLoading, isSuccess } = useGetDatabaseAllQuery();

  // Function to check if a value is an array
  function isArray(value) {
    return Array.isArray(value);
  }

  // Combine all arrays from the original object into a new array
  const combinedArray =
    data &&
    Object?.values(data).reduce((result, value) => {
      return result?.concat(isArray(value) ? value : []);
    }, []);

  // console.log(combinedArray);

  // console.log(data);
  const filteredData = combinedArray?.filter(
    (item) => item?.tag?.includes(search) || item?.createdAt?.includes(search)
  );
  let content;
  if (isLoading) {
    content = (
      <div className="flex justify-between w-full">
        <div className="w-[20%] xl:flex md:flex hidden">
          <Catagories />
        </div>
        <div className="flex flex-col  p-2 gap-1 w-full">
          <Search />
          <div className="overflow-hidden grid h-[78vh] w-full ">
            <div className="flex flex-col gap-2 p-2 w-full overflow-scroll">
              <SingleLoader />
              <SingleLoader />
              <SingleLoader />
              <SingleLoader />
              <SingleLoader />
              <SingleLoader />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (!isError && !isLoading) {
    content = (
      <div className="flex flex-col xl:flex-row justify-between w-full">
        <div className="w-[20%] xl:flex md:flex hidden">
          <Catagories />
        </div>
        <div className="flex flex-col w-full  p-2 gap-1 ">
          <Search />
          <div className="overflow-hidden grid h-[78vh] w-full ">
            <div className="flex flex-col gap-2 p-2 w-full overflow-scroll">
              {filteredData &&
                filteredData?.map((sdata, i) => {
                  // console.log(sdata);
                  return <SingleFile data={sdata} key={i} />;
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return content;
}
