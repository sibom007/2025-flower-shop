import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashbordSideBar } from "@/modules/dashbord/components/DashbordSideBar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <main>
      <SidebarProvider>
        <div className="flex">
          <DashbordSideBar />
          <div className="flex-1">
            <SidebarTrigger />
            <Outlet />
          </div>
        </div>
      </SidebarProvider>
    </main>
  );
};

export default DashboardLayout;
