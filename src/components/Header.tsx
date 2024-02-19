import { Button } from "./ui/button";
import { MobileMenu } from "./MobileMenu";

const Header = () => {
  return (
    <div className="header-wrapper flex justify-between items-center md:justify-end p-3 border-b-[1px]">
      <MobileMenu className="md:hidden"/>
      <Button variant="destructive">Logout</Button>
    </div>
  );
};

export default Header;
