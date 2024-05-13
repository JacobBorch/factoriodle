import React from "react";
import SquareBox from "./SquareBox";

function BoxArray() {
  return (
    <div class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
      <SquareBox size={100} />
      <SquareBox size={100} />
      <SquareBox size={100} />
      <SquareBox size={100} />
      <SquareBox size={100} />
    </div>
  );
}

export default BoxArray;
