import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const AuthorStats = ({ title, badgeType }) => {
  return (
    <>
      {title}
      {badgeType === "VERIFIED_CHANNEL" && (
        <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
      )}
    </>
  );
};

export default AuthorStats;
