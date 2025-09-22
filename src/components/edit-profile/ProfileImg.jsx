
export default function ProfileImg() {

  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      <div className="flex items-center">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
          <img
            src="./assets/users/user-1.png"
            alt="Saad Hasan"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-semibold text-base">Saad Hasan</h2>
          <p className="text-gray-500">@saadh393</p>
        </div>
        <button
          className="ml-auto bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition"
        >
          Change photo
        </button>
      </div>
    </div>
  );
}
