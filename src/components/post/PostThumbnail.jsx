import React from "react";
import { Link } from "react-router-dom";

export default function PostThumbnail({ post }) {
  return (
    <Link to={`/post-details/${post._id}`}>
      <div className="relative">
        <img
          src={`${import.meta.env.VITE_SERVER_BASE_URL_IMG}/${post.image}`}
          alt="Post Image"
          className="w-full grid-image"
        />
      </div>
    </Link>
  );
}
