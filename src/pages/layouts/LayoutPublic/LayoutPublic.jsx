import { Outlet } from "react-router-dom";
import { MenuComponent } from "../../../components/Menu";

export const LayoutPublic = () => {
  return (
    <div>
      <MenuComponent />
      <Outlet />
    </div>
  );
};
