import { useLocation, useNavigate } from "react-router-dom";
import usePosts from "../../hooks/usePosts";

export default function PostComments({ ...props }) {
  const { postId, comments } = props;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/post-details/${postId}`);
    // console.log(postId)
  };

  // Home page: just show "View all X comments"
  if (comments.length > 0) {
    return (
      <div className="px-3 mt-1">
        <button
          onClick={handleClick}
          className="text-gray-500 text-sm cursor-pointer"
        >
          View all {comments.length} comments
        </button>
      </div>
    );
  }
}
