"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon, Search, User, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const categoryMenu = [
  { name: "Jens" },
  { name: "Pants" },
  { name: "Hoodies" },
  { name: "Sweater" },
  { name: "T-Shirt" },
  { name: "Jacket" },
  { name: "Couts" },
];

function Header() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <header className="max-padd-container">
      <div className="bg-secondary px-5 py-2 mt-2 w-full z-50 rounded-full">
        <div className="flexBetween gap-4">
          {/* LOGO */}
          <div className="flex-1 flex gap-3">
            <Link href={"/"}>
              <Zap
                strokeWidth={2.5}
                size={30}
                className="inline text-destructive text-3xl font-bold relative bottom-1 tracking-wide"
              />
              <span className="text-3xl font-bold relative bottom-1 tracking-wide">
                Thund<span className="text-destructive">er</span>
              </span>
            </Link>
          </div>

          {/* SEARCH BAR */}
          <div className="flex-2 lg:flex-1 relative hidden md:flex  items-center">
            <div className="flex  bg-white w-full max-w-[566px] pl-6 ring-1 ring-slate-900/5 rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Search Here..."
                className="w-full text-sm outline-none pr-10 placeholder:text-gray-400 "
              />

              <DropdownMenu>
                <DropdownMenuTrigger className="flexCenter gap-1 px-2 border-x-2 border-slate-900/10 cursor-pointer font-semibold text-sm text-gray-500 outline-none">
                  {selectedCategory || "Categories"}
                  <ChevronDownIcon strokeWidth={2.25} size={19} />
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                  <DropdownMenuLabel>Browse Categories</DropdownMenuLabel>
                  <DropdownMenuSeparator />

                  {categoryMenu.map((item, index) => (
                    <DropdownMenuItem
                      key={index}
                      onClick={() => setSelectedCategory(item.name)}
                    >
                      <p>{item.name}</p>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <div className="p-3 cursor-pointer">
                <Search strokeWidth={2.5} size={24} />
              </div>
            </div>
          </div>

          {/* Cart & User */}
          <div className="flex sm:flex-1 items-center sm:justify-end gap-x-4 sm:gap-x-8">
            {/* Cart */}
            <div className="ring-1 ring-slate-900 px-3 text-lg font-bold rounded-full relative">
              Cart
              <span className="bg-primary text-white text-[12px] font-semibold absolute -top-3.5 -right-2 flexCenter w-4 h-4 rounded-full shadow-md">
                0
              </span>
            </div>

            {/* User */}

            <div className="group">
              <Button size={"lg"}>
                <User />
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
