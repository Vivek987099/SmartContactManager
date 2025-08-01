import { jwtDecode } from "jwt-decode";

function Profile() {
  let decodedToken = jwtDecode(localStorage.getItem("token"));

  return (
    <>
      <div className="flex flex-col min-h-full">
        <header className="bg-[#32b4a7] px-5 flex justify-between items-center">
          <div className="flex justify-start gap-x-5  items-center ">
            {decodedToken ? (
              <img
                src={decodedToken.imgUrl}
                width={50}
                className="rounded-full "
              />
            ) : (
              <IoMdContact />
            )}

            <div>
              <h1 className="text-3xl capitalize font-semibold text-white">
                {decodedToken.name}
              </h1>
              <span className="text-white">{decodedToken.email}</span>
            </div>
          </div>
          <div>
            <span className="size-1.5 my-1 rounded-full block bg-white"></span>
            <span className="size-1.5 my-1 rounded-full block bg-white"></span>
            <span className="size-1.5 my-1 rounded-full block bg-white"></span>
          </div>
        </header>
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-sky-100 to-indigo-100">
          <div className="w-full max-w-2xl p-8 bg-white rounded-2xl shadow-2xl">
            <div className="flex flex-col items-center text-center">
              {decodedToken ? (
                <img
                  src={decodedToken.imgUrl}
                 
                  width={50}
                  className="rounded-full "
                />
              ) : (
                <IoMdContact />
              )}
              <h1 className="mt-4 text-2xl font-bold text-gray-800">
                user.nam
              </h1>
              <p className="text-gray-600">user.em</p>
              <p className="mt-4 text-gray-700">user.bio</p>

              <div className="mt-6 flex gap-4">
                <button className="px-5 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
                  Edit Profile
                </button>
                <button className="px-5 py-2 bg-gray-300 text-gray-800 rounded-xl hover:bg-gray-400 transition">
                  Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
