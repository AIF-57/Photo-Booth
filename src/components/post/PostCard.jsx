import useProfile from "../../hooks/useProfile";
import AddComment from "./AddComment";
import PostActions from "./PostActions";
import PostCaption from "./PostCaption";
import PostComments from "./PostComments";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostLikes from "./PostLikes";

export default function PostCard({ post }) {
  //   const { state } = useProfile();

  return (
    <article className="border-b pb-4 mb-4 max-w-[560px] mx-auto border border-[#e5e7eb] rounded-md">
      {/* <!-- Post Header --> */}
      <PostHeader post={post}/>

      {/* <!-- Post Image --> */}
      <PostImage post={post}/>

      {/* <!-- Post Actions --> */}
      <PostActions post={post}/>

      {/* <!-- Likes --> */}
      <PostLikes post={post}/>

      {/* <!-- Caption --> */}
      <PostCaption post={post}/>

      {/* <!-- Comments --> */}
      <PostComments post={post}/>

      {/* <!-- Add Comment --> */}
      <AddComment post={post}/>
    </article>
  );
}
