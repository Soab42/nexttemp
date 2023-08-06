"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Tostify() {
  const simulatePromise = (shouldResolve) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve("Promise resolved!");
        } else {
          reject(new Error("Promise rejected!"));
        }
      }, 2000); // Simulating async operation with a timeout
    });
  };

  const handleButtonClick = () => {
    // toast.promise(simulatePromise(true), {
    //   pending: "Promise is pending",
    //   success: "Promise resolved 👌",
    //   error: "Promise rejected 🤯",
    // });
    toast("🦄 Wow so easy!");
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Show Promise Toast</button>

      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
