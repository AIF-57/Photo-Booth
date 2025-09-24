import useProfile from "../../hooks/useProfile";
import PostList from "../post/PostList";

export default function MyPosts() {
  const { state } = useProfile();
  return (
    <section>
      <h3 className="font-semibold text-lg mb-4">Posts</h3>
      {/* <!-- Photo Grid --> */}
      <div className="grid grid-cols-3 gap-1">
        <PostList posts={state.posts} />
      </div>
    </section>
  );
}
