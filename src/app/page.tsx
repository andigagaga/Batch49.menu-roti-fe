// import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faSearch,
  faCompass,
  faComment,
  faBell,
  faEdit,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-screen flex">
        <div className="w-1/4 bg-white p-8 ">
          <div className="flex mb-12 font-extrabold">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-red-500 mr-2 w-6 h-6"
            />
            <h1>Instagram</h1>
          </div>
          <div className="my-8 flex flex-col ">
            <div className="flex  mb-4">
              <FontAwesomeIcon icon={faHouse} className="mr-2 w-4 h-4" />
              <h1>Houme</h1>
            </div>
            <div className="flex mb-4">
              <FontAwesomeIcon icon={faSearch} className="mr-2 w-4 h-4" />
              <h1>Search</h1>
            </div>
            <div className="flex mb-4">
              <FontAwesomeIcon icon={faCompass} className="mr-2 w-4 h-4" />
              <h1>Explore</h1>
            </div>
            <div className="flex mb-4">
              <FontAwesomeIcon icon={faComment} className="mr-2 w-4 h-4" />
              <h1>Message</h1>
            </div>
            <div className="flex mb-4">
              <FontAwesomeIcon icon={faBell} className="mr-2 w-4 h-4" />
              <h1>Notification</h1>
            </div>
            <div className="flex mb-4">
              <FontAwesomeIcon icon={faEdit} className="mr-2 w-4 h-4" />
              <h1>Create</h1>
            </div>
            <div className="flex mb-4">
              <FontAwesomeIcon icon={faUser} className="mr-2 w-4 h-4" />
              <h1>Profile</h1>
            </div>
          </div>
        </div>
        <div className="w-3/4">{/* Isi konten kanan di sini */}</div>
      </div>
    </>
  );
}
