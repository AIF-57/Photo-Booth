import React from "react";

export default function PostDetailsLeftSide({ postImg }) {
  return (
    <div className="w-full md:w-1/2 bg-black flex items-center">
      <img
        src={`${import.meta.env.VITE_SERVER_BASE_URL_IMG}/${postImg}`}
        alt="Post image"
        className="w-full post-image"
      />
    </div>
  );
}
