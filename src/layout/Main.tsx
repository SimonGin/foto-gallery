import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="p-5 w-1/3 text-5xl bg-white text-center rounded-b-md shadow">
        FOTO GALLERY
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
