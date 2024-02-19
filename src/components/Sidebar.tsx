import { useState } from "react";
import { Navigation } from "./Navigation";
import {
  ShoppingCart,
  LayoutDashboard,
  Users,
  PackagePlus,
  BookOpenText,
  ChevronLeftIcon,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";


const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="sidebar-wrapper relative ">
      <Button
        variant="outline"
        className="rounded-full absolute right-0 translate-x-[50%] translate-y-[50%] w-6 h-6"
        size="icon"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <ChevronLeftIcon className="h-4 w-4 " />
      </Button>

      <div className="profile-wrapper flex items-center gap-3 p-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        {!isCollapsed ? <div className="user-name">Admin</div> : null}
      </div>
      {/* <Separator /> */}
      <div className="navigation-wrapper px-4">
        <Navigation
          isCollapsed={isCollapsed}
          links={[
            {
              title: "Dashboard",
              label: "",
              icon: LayoutDashboard,
              variant: "default",
            },
            {
              title: "Orders",
              label: "",
              icon: ShoppingCart,
              variant: "ghost",
            },
            {
              title: "Customers",
              label: "",
              icon: Users,
              variant: "ghost",
            },
            {
              title: "Create Order",
              label: "",
              icon: PackagePlus,
              variant: "ghost",
            },
            {
              title: "Reports",
              label: "",
              icon: BookOpenText,
              variant: "ghost",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Sidebar;
