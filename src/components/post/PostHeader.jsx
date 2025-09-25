import React from "react";
import { Link } from "react-router-dom";
import { getDateDifferenceFromNow } from "../../utils/getTime";

export default function PostHeader({ post }) {
  return (
    <div className="flex items-center p-3">
      <Link
        to={`/profile/${post.userId}`}
        className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center text-white text-xs"
      >
        <img
          src={`${import.meta.env.VITE_SERVER_BASE_URL_IMG}/${
            post?.user?.avatar
          }`}
          className="w-full h-full object-cover"
        />
      </Link>
      <div className="ml-2">
        <Link to={`/profile/${post.userId}`} className="font-semibold text-sm">
          {post?.user?.name}
        </Link>
        <span className="text-gray-500 text-xs"> • {getDateDifferenceFromNow(post?.createdAt)}</span>
      </div>
    </div>
  );
}
