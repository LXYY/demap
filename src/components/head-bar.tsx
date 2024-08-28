"use client";

import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGlobalContext } from "@/components/global-context-provider";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export const HeadBar = () => {
  const { isLoggedIn, setIsLoggedIn } = useGlobalContext();
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md w-full">
      <div className="text-2xl font-semibold">de[map] 2.0</div>
      <div className="flex-grow mx-4">{/* Invisible separation */}</div>
      <div className="flex items-center">
        {isLoggedIn && (
          <Button variant="outline" className="mr-4">
            <MapPin className="mr-2" size={18} />
            Check-in
          </Button>
        )}
        {!isLoggedIn && (
          <Button
            variant="outline"
            onClick={() => setIsLoggedIn(true)}
            className="mr-4"
          >
            Sign in
          </Button>
        )}
        {isLoggedIn && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                U
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
};
