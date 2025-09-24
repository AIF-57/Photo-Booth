import React from "react";
import { Link } from "react-router-dom";

export default function PostImage({ post }) {
  return (
    <div className="relative">
      <Link to={`/post-details/${post._id}`}>
        <img
          src={`${import.meta.env.VITE_SERVER_BASE_URL_IMG}/${post?.image}`}
          alt="Post image"
          className="w-full object-cover max-h-[1000px]"
        />
      </Link>
    </div>
  );
}
