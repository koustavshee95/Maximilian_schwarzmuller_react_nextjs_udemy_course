import { Outlet } from "react-router-dom";
import { MainNavigation } from "../component/MainNavigation";

export const Root = () => {
  return (
    <div>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
