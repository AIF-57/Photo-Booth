import { useState } from "react";
import truncateString from "../../utils/truncateString";

export default function PostCaption({ post }) {
  const [truncateCaption, setTruncateCaption] = useState(true);
  return (
    <div className="px-3 mt-2">
      {/* <p className="text-sm">
        {truncateCaption ? (
          <>
            <span className="font-semibold">
              {truncateString(post?.caption)}
            </span>
            <span className="text-gray-500">... </span>
            <button onClick={setTruncateCaption(false)} className="text-gray-500 text-sm cursor-pointer">
              more
            </button>
          </>
        ) : (
          <span className="font-semibold">{post?.caption}</span>
        )}
      </p> */}

      <p className="text-sm">
        {truncateCaption ? (
          <>
            <span className="font-semibold">
              {truncateString(post?.caption)}
            </span>
            <span className="text-gray-500"> ... </span>
            <button
              onClick={() => setTruncateCaption(false)}
              className="text-gray-500 text-sm cursor-pointer"
            >
              more
            </button>
          </>
        ) : (
          <span className="font-semibold">{post?.caption}</span>
        )}
      </p>
    </div>
  );
}
