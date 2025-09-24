import React from "react";

export default function PostLikes({ post }) {
  const likes = post?.likes?.length;

  return (
    likes > 0 && (
      <div className="px-3">
        <div className="flex items-center">
          <div className="h-6 flex -space-x-2">
            {post.likes.map((item) => (
              <img
                src={`${import.meta.env.VITE_SERVER_BASE_URL_IMG}/${
                  item?.avatar
                }`}
                alt="User avatar"
                className="w-6 h-6 rounded-full"
              />
            ))}
          </div>
          <p className="text-sm ml-2">
            <span className="font-semibold">{likes}</span>
          </p>
        </div>
      </div>
    )
  );
}
