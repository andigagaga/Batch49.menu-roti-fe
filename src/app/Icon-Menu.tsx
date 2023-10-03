import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faSearch,
  faCompass,
  faComment,
  faBell,
  faEdit,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Icon() {
  return (
    <>
      <div className="w-1/4 bg-black p-8 flex">
        <FontAwesomeIcon
          icon={faInstagram}
          className="text-red-500  mr-2 w-6 h-6"
        />
        <h1 className="text-white font-serif font-semibold text-3xl tracking-wide">
          Instagram
        </h1>
      </div>
      <div className="my-8 flex flex-col ">
        <div className="flex text-white mb-4 hover:bg-white hover:text-black">
          <FontAwesomeIcon icon={faHouse} className="mr-2 w-4 h-4" />
          <h1>Houme</h1>
        </div>
        <div className="flex text-white mb-4 hover:bg-white hover:text-black">
          <FontAwesomeIcon icon={faSearch} className="mr-2 w-4 h-4" />
          <h1>Search</h1>
        </div>
        <div className="flex text-white mb-4 hover:bg-white hover:text-black">
          <FontAwesomeIcon icon={faCompass} className="mr-2 w-4 h-4" />
          <h1>Explore</h1>
        </div>
        <div className="flex text-white mb-4 hover:bg-white hover:text-black">
          <FontAwesomeIcon icon={faComment} className="mr-2 w-4 h-4" />
          <h1>Message</h1>
        </div>
        <div className="flex text-white mb-4 hover:bg-white hover:text-black">
          <FontAwesomeIcon icon={faBell} className="mr-2 w-4 h-4" />
          <h1>Notification</h1>
        </div>
        <div className="flex text-white mb-4 hover:bg-white hover:text-black">
          <FontAwesomeIcon icon={faEdit} className="mr-2 w-4 h-4" />
          <h1>Create</h1>
        </div>
        <div className="flex text-white mb-4 hover:bg-white hover:text-black">
          <FontAwesomeIcon icon={faUser} className="mr-2 w-4 h-4" />
          <h1>Profile</h1>
        </div>
        <div className="flex text-white mt-12 hover:bg-white hover:text-black">
          <FontAwesomeIcon icon={faBars} className="mr-2 w-4 h-4" size="2xl" />
          <h1>More</h1>
        </div>
      </div>
    </>
  );
}
