// import SwitchFollow from "./Swtch-Follow";
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

export default function Story() {
  return (
    <>
      <div className="py-2 px-4 bg-gray-100 border-none focus:outline-none m-12 w-1/4">
        <div className="flex items-center border rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Cari..."
            className="bg-gray-100 border-none focus:outline-none"
          />
          <div className="flex items-center hover:bg-gray-200 cursor-pointer">
            <FontAwesomeIcon
              icon={faSearch}
              className="w-4 h-8 text-gray-600"
            />
          </div>
        </div>
      </div>

      <div className="flex">
        <div>
          <img
            src="https://images.unsplash.com/photo-1695750733098-2e3617fa43df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
            alt=""
            className="w-12 mb-3 ml-8 mt-8 border-2 border-red-500 h-12 bg-blue-500 rounded-full flex-shrink-0"
          />
          <h5 className="text-white pl-5">Guswan_di</h5>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1695750733098-2e3617fa43df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
            alt=""
            className="w-12 mb-3 ml-8 mt-8 border-2 border-red-500 h-12 bg-blue-500 rounded-full flex-shrink-0"
          />
          <h5 className="text-white pl-5">Guswan_di</h5>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1695750733098-2e3617fa43df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
            alt=""
            className="w-12 mb-3 ml-8 mt-8 border-2 border-red-500 h-12 bg-blue-500 rounded-full flex-shrink-0"
          />
          <h5 className="text-white pl-5">Guswan_di</h5>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1695750733098-2e3617fa43df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
            alt=""
            className="w-12 mb-3 ml-8 mt-8 border-2 border-red-500 h-12 bg-blue-500 rounded-full flex-shrink-0"
          />
          <h5 className="text-white pl-5">Guswan_di</h5>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1695750733098-2e3617fa43df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
            alt=""
            className="w-12 mb-3 ml-8 mt-8 border-2 border-red-500 h-12 bg-blue-500 rounded-full flex-shrink-0"
          />
          <h5 className="text-white pl-5">Guswan_di</h5>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1695750733098-2e3617fa43df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
            alt=""
            className="w-12 mb-3 ml-8 mt-8 border-2 border-red-500 h-12 bg-blue-500 rounded-full flex-shrink-0"
          />
          <h5 className="text-white pl-5">Guswan_di</h5>
        </div>
      </div>
      {/* <div className="flex flex-col mt-14 ml-8">
        <SwitchFollow />
      </div> */}
    </>
  );
}
