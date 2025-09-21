import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

export default function ProfilePage() {
  const [userProfile, setUserProfile] = useState(null);

  const { auth } = useAuth();
  const { api } = useAxios();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts/user/${auth?.user?._id}`
        );

        if (response.status === 200) {
          setUserProfile(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
  }, []);

  console.log(userProfile);

  return (
    <div className="main-container">
      <div className="profile-container">
        {/* <!-- Profile Header --> */}
        <div className="flex flex-col md:flex-row mb-10">
          {/* <!-- Profile Picture --> */}
          <div className="flex justify-items-end md:justify-start md:w-1/3 mb-6 md:mb-0 relative">
            <div className="w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden border border-gray-300 mx-auto">
              <img
                src="./assets/users/user-1.png"
                alt="Profile picture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* <!-- Profile Info --> */}
          <div className="md:w-2/3">
            {/* <!-- Username and Buttons --> */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4">
              <h2 className="text-xl font-normal mb-4 sm:mb-0 sm:mr-4">
                {userProfile?.name}
              </h2>
            </div>
            <div className="flex space-x-2">
              <a
                href="./edit-profile.html"
                className="bg-gray-100 px-4 py-1.5 rounded-md text-sm font-medium"
              >
                Edit profile
              </a>
            </div>

            {/* <!-- Stats --> */}
            <div className="flex justify-center sm:justify-start space-x-8 mb-4 mt-2">
              <div>
                <span className="font-semibold">53</span> posts
              </div>
            </div>

            {/* <!-- Bio --> */}
            <div className="text-sm">
              <p>Pain Demands to be Felt</p>
              <p className="text-blue-900">
                <a
                  href="https://saadh393.github.io"
                  target="_blank"
                  className="flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                  saadh393.github.io
                </a>
              </p>
            </div>
          </div>
        </div>

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
      </div>
    </div>
  );
}
