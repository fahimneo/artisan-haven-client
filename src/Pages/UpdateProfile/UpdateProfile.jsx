const UpdateProfile = () => {
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center ">
      <div className="max-w-md w-full p-8 bg-red-300 rounded-lg shadow-2xl">
        <h2 className="text-3xl font-bold mb-1">Update Profile</h2>
        <p className="mb-6">Please update your profile</p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="photo" className="block mb-1">
              Photo URL:
            </label>
            <input
              type="text"
              id="photo"
              name="photo"
              placeholder="Enter photo URL"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
