import React from "react";
import { Link } from "react-router-dom";

export default function PostHeader({post}) {
  return (
    <div className="flex items-center p-3">
      <a
        href="./profile.html"
        className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center text-white text-xs"
      >
        <img
          src={`${import.meta.env.VITE_SERVER_BASE_URL_IMG}/${post?.user?.avatar}`}
          className="w-full h-full object-cover"
        />
      </a>
      <div className="ml-2">
        <a href="./profile.html" className="font-semibold text-sm">
          {post?.user?.name}
        </a>
        <span className="text-gray-500 text-xs"> • 6m</span>
      </div>
    </div>
  );
}
