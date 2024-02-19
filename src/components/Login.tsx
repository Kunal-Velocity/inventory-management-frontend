import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Login() {
  return (
    <div className="login-wrapper h-svh flex justify-center items-center">
      <Card className="w-[320px]">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Inventory Mgt.
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-5">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Name</Label>
                <Input id="username" placeholder="Username" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="username" placeholder="Password" type="password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button className="w-full">Sign In</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
