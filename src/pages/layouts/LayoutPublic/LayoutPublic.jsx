import { Outlet } from "react-router-dom";

export const LayoutPublic = () => {
  return (
    <div>
      <h1>Header Public</h1>
      <Outlet />
    </div>
  );
};
