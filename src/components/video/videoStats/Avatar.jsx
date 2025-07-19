import React from "react";

const Avatar = ({ url }) => {
  return (
    <div className="flex h-11 w-11 rounded-full overflow-hidden">
      <img
        alt="author"
        src={url}
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default Avatar;
