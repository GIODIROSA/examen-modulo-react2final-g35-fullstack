import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const LayoutPublic = () => {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default LayoutPublic;
