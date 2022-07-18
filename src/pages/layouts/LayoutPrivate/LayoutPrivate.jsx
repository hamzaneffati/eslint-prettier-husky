import { Outlet } from "react-router-dom";
import { MenuDashboardComponent } from "../../../components/Menu";

export const LayoutPrivate = () => {
  return (
    <div>
      <MenuDashboardComponent />
      <Outlet />
    </div>
  );
};
