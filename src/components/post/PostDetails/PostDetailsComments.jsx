import React from "react";
import { getDateDifferenceFromNow } from "../../../utils/getTime";

export default function PostDetailsComments({ comments }) {
  return (
    <div className="comments-section flex-grow p-3 border-b">
      {/* <!-- Post Owner Comment --> */}
      <h3 className="font-bold pb-4">Comments {comments?.length}</h3>

      {comments?.map((comment) => (
        <div key={comment?._id} className="flex mb-4">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-r  mr-2 ">
            <div className="w-full h-full rounded-full overflow-hidden bg-white p-[1px] mr-2">
              <img
                src={`${import.meta.env.VITE_SERVER_BASE_URL_IMG}/${
                  comment?.user?.avatar
                }`}
                alt={comment?.user?.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center">
              <span className="font-semibold text-sm">
                {comment?.user?.name}
              </span>

              <span className="text-xs text-gray-500 ml-2">
                {getDateDifferenceFromNow(comment.createdAt)}
              </span>
            </div>
            <p className="text-sm mt-2 text-gray-800">{comment?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
