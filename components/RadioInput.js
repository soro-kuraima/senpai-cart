import React from "react";

export default function RadioInput({input}) {
  return (
    <label htmlFor={`size_${input}`} className="cursor-pointer p-0.5">
      <input type="radio" name="size" id={`size_${input}`} className="sr-only peer" value={input.toUpperCase()} />

      <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full hover:bg-yellow-200 group peer-checked:bg-yellow-500 peer-checked:text-black">
        {input.toUpperCase()}
      </span>
    </label>
  );
}
