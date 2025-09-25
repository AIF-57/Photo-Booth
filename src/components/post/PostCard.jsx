import Actions from "./Actions";
import PostCaption from "./PostCaption";
import PostComment from "./PostComment";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";

export default function PostCard({ post }) {
  //   const { state } = useProfile();

  return (
    <article className="border-b pb-4 mb-4 max-w-[560px] mx-auto border border-[#e5e7eb] rounded-md">
      {/* <!-- Post Header --> */}
      <PostHeader post={post} />

      {/* <!-- Post Image --> */}
      <PostImage post={post} />

      <Actions post={post} />

      {/* <!-- Caption --> */}
      <PostCaption post={post} />

      <PostComment post={post} />
    </article>
  );
}
