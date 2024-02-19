import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  ShoppingCart,
  LayoutDashboard,
  Users,
  PackagePlus,
  BookOpenText,
} from "lucide-react";
import { Menu } from "lucide-react";
import { Navigation } from "./Navigation";

interface MobileMenuProps {
  className?: string
}

export function MobileMenu({className} : MobileMenuProps) {
  return (
    <div className={`mobile-menu-wrapper ${className}`}>
      <Sheet>
        <SheetTrigger asChild>
          <Menu size={30}/>
        </SheetTrigger>
        <SheetContent side={"left"} className="pt-12 w-auto">
          <Navigation
            isCollapsed={false}
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
        </SheetContent>
      </Sheet>
    </div>
  );
}
