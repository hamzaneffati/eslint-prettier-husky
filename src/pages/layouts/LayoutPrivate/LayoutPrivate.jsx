import { Outlet } from "react-router-dom";

export const LayoutPrivate = () => {
  return (
    <div>
      <h1>Header Private</h1>
      <Outlet />
    </div>
  );
};
