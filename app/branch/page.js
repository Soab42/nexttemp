"use client";
import Scroll from "@components/main/Scroll";
import React from "react";
import LeftBar from "@components/main/leftBar";
import RightBar from "@components/main/rightBar";

export default function page() {
  return (
    <div className="dashboard">
      {/* <Scroll /> */}
      <div className="main flex flex-col xl:flex-row xl:min-w-full min-h-full min-w-full justify-between p-2 gap-1">
        <LeftBar />
        <RightBar />
      </div>
    </div>
  );
}
