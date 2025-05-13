import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashbordSideBar } from "@/modules/dashbord/components/DashbordSideBar";
import NavBar from "@/shared/NavBar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <main className="flex min-h-screen">
      <SidebarProvider>
        <DashbordSideBar />

        <div className="flex-1">
          <nav className="flex items-center ">
            <div className="w-full">
              <NavBar>
                <SidebarTrigger />
              </NavBar>
            </div>
          </nav>
          <div className="p-4">
            <Outlet />
          </div>
        </div>
      </SidebarProvider>
    </main>
  );
};
export default DashboardLayout;