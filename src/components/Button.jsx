import React from "react";

export default function Button({ text = "", primary = false, onclick }) {
  return (
    <button
      onClick={onclick}
      className={`text-md rounded-full py-[10px] w-full ${
        primary
          ? "border border-white/50 text-white/50 hover:bg-white/50 hover:text-white"
          : "border border-[#FACD66] bg-[#FACD66] hover:bg-[#FACD66]/75 hover:border-[#FACD66]/75"
      }`}
    >
      {text}
    </button>
  );
}
