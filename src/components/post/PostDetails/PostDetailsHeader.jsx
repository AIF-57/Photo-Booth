import { Link } from "react-router-dom";
import { getDateDifferenceFromNow } from "../../../utils/getTime";

export default function PostDetailsHeader({post}) {
  return (
    <div className="flex items-center justify-between p-3 border-b">
      <Link to={`/profile/${post.userId}`}>
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <div className="w-full h-full rounded-full overflow-hidden bg-white">
              <img
                src={`${import.meta.env.VITE_SERVER_BASE_URL_IMG}/${
                  post?.user?.avatar
                }`}
                alt={post?.user?.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          <div className="ml-2">
            <div className="flex items-center">
              <span className="font-semibold text-sm">{post?.user?.name}</span>
            </div>
            <div className="flex items-center">
              <span className="text-[10px] text-gray-600">
                {getDateDifferenceFromNow(post?.createdAt)}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
