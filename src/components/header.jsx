import * as React from "react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex items-center p-6 justify-end">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Button variant="ghost" size="lg">
              <Link to="/register">Sign Up</Link>
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button variant="outline" size="lg">
              <Link to="/login">Login</Link>
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
