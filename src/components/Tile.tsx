import { LucideIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { createElement } from "react";

interface TileProps {
  cardTitle: string;
  sign: string;
  icon: LucideIcon;
  amount: string;
}

const Tile = ({ cardTitle, sign, icon, amount }: TileProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{cardTitle}</CardTitle>
        <div className="card-icon">{createElement(icon)}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {sign}{amount}
        </div>
      </CardContent>
    </Card>
  );
};

export default Tile;
