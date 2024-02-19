import { DollarSign } from "lucide-react";
import Tile from "./Tile";

const DashboardTiles = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 px-4 py-8">
      <Tile cardTitle="Today Revenue" amount="1100" sign="+" icon={DollarSign}/>
      <Tile cardTitle="Monthly Revenue" amount="51000" sign="₹" icon={DollarSign}/>
      <Tile cardTitle="Yearly Revenue" amount="611000" sign="₹" icon={DollarSign}/>
    </div>
  );
};

export default DashboardTiles;
