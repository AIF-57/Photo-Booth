export default function MyPosts() {
  return (
    <section>
      <h3 className="font-semibold text-lg mb-4">Posts</h3>
      {/* <!-- Photo Grid --> */}
      <div className="grid grid-cols-3 gap-1">
        {/* <!-- Grid Item 1 --> */}
        <a href="./post-details.html">
          <div className="relative">
            <img
              src="./assets/articles/post-1.jpg"
              alt="Post"
              className="w-full grid-image"
            />
          </div>
        </a>

        {/* <!-- Grid Item 2 --> */}
        <a href="./post-details.html">
          <div className="relative">
            <img
              src="./assets/articles/post-2.jpg"
              alt="Post"
              className="w-full grid-image"
            />
          </div>
        </a>

        {/* <!-- Grid Item 3 --> */}
        <a href="./post-details.html">
          <div className="relative">
            <img
              src="./assets/articles/post-3.jpg"
              alt="Post"
              className="w-full grid-image"
            />
          </div>
        </a>

        {/* <!-- Grid Item 4 --> */}
        <a href="./post-details.html">
          <div className="relative">
            <img
              src="./assets/articles/post-4.jpg"
              alt="Post"
              className="w-full grid-image"
            />
          </div>
        </a>

        {/* <!-- Grid Item 5 --> */}
        <a href="./post-details.html">
          <div className="relative">
            <img
              src="./assets/articles/post-5.jpg"
              alt="Post"
              className="w-full grid-image"
            />
          </div>
        </a>

        {/* <!-- Grid Item 6 --> */}
        <a href="./post-details.html">
          <div className="relative">
            <img
              src="./assets/articles/post-6.jpg"
              alt="Post"
              className="w-full grid-image"
            />
          </div>
        </a>
      </div>
    </section>
  );
}
