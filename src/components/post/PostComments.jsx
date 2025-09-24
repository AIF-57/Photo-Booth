import React from "react";
import { useNavigate } from "react-router-dom";

export default function PostComments({ post }) {
  const comments = post?.comments?.length;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/post-details/${post._id}`);
  };
  return (
    comments > 0 && (
      <div className="px-3 mt-1">
        <button
          onClick={handleClick}
          className="text-gray-500 text-sm cursor-pointer"
        >
          View all {comments} comments
        </button>
      </div>
    )
  );
}
