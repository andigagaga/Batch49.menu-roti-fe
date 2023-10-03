import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Story from "./Story";
import {
  faHouse,
  faSearch,
  faCompass,
  faComment,
  faBell,
  faEdit,
  faUser,
  faEllipsisH,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons";

export default function Menu() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-screen flex">
        <div className="w-1/4 bg-black p-8 border">
          <div className="w-1/4 bg-black p-8 flex">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-red-500 mr-2 w-6 h-6"
            />
            <h1 className="text-white font-serif font-semibold text-3xl tracking-wide">
              Instagram
            </h1>
          </div>
          <div className="my-8 flex flex-col ">
            <div className="flex text-white  mb-4">
              <FontAwesomeIcon icon={faHouse} className="mr-2 w-4 h-4" />
              <h1>Houme</h1>
            </div>
            <div className="flex text-white mb-4">
              <FontAwesomeIcon icon={faSearch} className="mr-2 w-4 h-4" />
              <h1>Search</h1>
            </div>
            <div className="flex text-white mb-4">
              <FontAwesomeIcon icon={faCompass} className="mr-2 w-4 h-4" />
              <h1>Explore</h1>
            </div>
            <div className="flex text-white mb-4">
              <FontAwesomeIcon icon={faComment} className="mr-2 w-4 h-4" />
              <h1>Message</h1>
            </div>
            <div className="flex text-white mb-4">
              <FontAwesomeIcon icon={faBell} className="mr-2 w-4 h-4" />
              <h1>Notification</h1>
            </div>
            <div className="flex text-white mb-4">
              <FontAwesomeIcon icon={faEdit} className="mr-2 w-4 h-4" />
              <h1>Create</h1>
            </div>
            <div className="flex text-white mb-4">
              <FontAwesomeIcon icon={faUser} className="mr-2 w-4 h-4" />
              <h1>Profile</h1>
            </div>
            <div className="flex text-white mt-12">
              <FontAwesomeIcon icon={faEllipsisH} className="mr-2 w-4 h-4" />
              <h1>More</h1>
            </div>
          </div>
        </div>
        <div className="w-3/4 bg-black border overflow-y-auto relative">
            
          <Story />

          <div className="w-2/4 p-12 flex items-center justify-center h-full relative">
            <div className="absolute top-16 left-12 p-2">
              <div className="flex items-center">
                {" "}
                {/* Container untuk gambar dan teks */}
                <img
                  src="https://images.unsplash.com/photo-1695750733098-2e3617fa43df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
                  alt=""
                  className="w-8 mb-3 border-2 border-red-500 h-8 bg-blue-500 rounded-full flex-shrink-0"
                />
                <h5 className="text-white ml-3">
                  Guswan_di<span className="text-gray-600"> . 26m</span>
                </h5>
              </div>
              <div className="absolute top-0 right-0 p-2 flex items-center">
                <FontAwesomeIcon
                  icon={faEllipsisH}
                  className="w-4 h-4 text-white"
                />
              </div>
              <img
                src="https://images.unsplash.com/photo-1695750733098-2e3617fa43df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
                alt=""
                className="object-contain w-full h-auto"
              />
              <div className="mt-4">
                <div>
                  <div className="flex">
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="text-white w-4 h-4"
                    />
                    <FontAwesomeIcon
                      icon={faComment}
                      className="text-white w-4 h-4 ml-8"
                    />
                    <FontAwesomeIcon
                      icon={faTelegram}
                      className="text-white w-4 h-4 ml-8"
                    />
                  </div>
                  <div className="mt-2">
                    <p className="text-white">
                      Thanks for being a top engager and making it on to my
                      weekly engagement list! 🎉 Meneses Joann, Barbara Claudio
                      Cn, Mark..
                      <span className="text-gray-600"> More</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-white">
                      <span className="text-gray-600"> Add a comment...</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/4 p-12 flex items-center justify-center h-full relative mt-8">
            <div className="absolute top-16 left-12 p-2">
              <div className="flex items-center">
                {" "}
                {/* Container untuk gambar dan teks */}
                <img
                  src="https://images.unsplash.com/photo-1695750733098-2e3617fa43df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
                  alt=""
                  className="w-8 mb-3 border-2 border-red-500 h-8 bg-blue-500 rounded-full flex-shrink-0"
                />
                <h5 className="text-white ml-3">
                  Guswan_di<span className="text-gray-600"> . 26m</span>
                </h5>
              </div>
              <div className="absolute top-0 right-0 p-2 flex items-center">
                <FontAwesomeIcon
                  icon={faEllipsisH}
                  className="w-4 h-4 text-white"
                />
              </div>
              <img
                src="https://images.unsplash.com/photo-1695750733098-2e3617fa43df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
                alt=""
                className="object-contain w-full h-auto"
              />
              <div className="mt-4">
                <div>
                  <div className="flex">
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="text-white w-4 h-4"
                    />
                    <FontAwesomeIcon
                      icon={faComment}
                      className="text-white w-4 h-4 ml-8"
                    />
                    <FontAwesomeIcon
                      icon={faTelegram}
                      className="text-white w-4 h-4 ml-8"
                    />
                  </div>
                  <div className="mt-2">
                    <p className="text-white">
                      Thanks for being a top engager and making it on to my
                      weekly engagement list! 🎉 Meneses Joann, Barbara Claudio
                      Cn, Mark..
                      <span className="text-gray-600"> More</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-white">
                      <span className="text-gray-600"> Add a comment...</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/4 p-12 flex items-center justify-center h-full relative mt-8">
            <div className="absolute top-16 left-12 p-2">
              <div className="flex items-center">
                {" "}
                {/* Container untuk gambar dan teks */}
                <img
                  src="https://images.unsplash.com/photo-1695750733098-2e3617fa43df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
                  alt=""
                  className="w-8 mb-3 border-2 border-red-500 h-8 bg-blue-500 rounded-full flex-shrink-0"
                />
                <h5 className="text-white ml-3">
                  Guswan_di<span className="text-gray-600"> . 26m</span>
                </h5>
              </div>
              <div className="absolute top-0 right-0 p-2 flex items-center">
                <FontAwesomeIcon
                  icon={faEllipsisH}
                  className="w-4 h-4 text-white"
                />
              </div>
              <img
                src="https://images.unsplash.com/photo-1695750733098-2e3617fa43df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
                alt=""
                className="object-contain w-full h-auto"
              />
              <div className="mt-4">
                <div>
                  <div className="flex">
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="text-white w-4 h-4"
                    />
                    <FontAwesomeIcon
                      icon={faComment}
                      className="text-white w-4 h-4 ml-8"
                    />
                    <FontAwesomeIcon
                      icon={faTelegram}
                      className="text-white w-4 h-4 ml-8"
                    />
                  </div>
                  <div className="mt-2">
                    <p className="text-white">
                      Thanks for being a top engager and making it on to my
                      weekly engagement list! 🎉 Meneses Joann, Barbara Claudio
                      Cn, Mark..
                      <span className="text-gray-600"> More</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-white">
                      <span className="text-gray-600"> Add a comment...</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
