import PostDetailsActions from "./PostDetailsActions";
import PostDetailsCaption from "./PostDetailsCaption";
import PostDetailsHeader from "./PostDetailsHeader";

export default function PostDetailsRightSide({ post }) {
  return (
    <div className="w-full md:w-1/2 flex flex-col">
      {/* <!-- Post Header --> */}
      <PostDetailsHeader post={post}/>

      <PostDetailsCaption post={post} />

      {/* <!-- Comments Section --> */}
      <PostDetailsActions post={post} />
    </div>
  );
}
