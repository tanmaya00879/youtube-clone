import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";

const VideoStats = ({ views, pubTime }) => {
  return (
    <>
      <span>{`${abbreviateNumber(views, 2)} views`}</span>
      <span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">
        .
      </span>
      <span className="truncate">{pubTime}</span>
    </>
  );
};

export default VideoStats;
