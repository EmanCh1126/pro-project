"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "@/components/ui/Navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }){
    const [active, setActive] = useState<string | null>(null);
    return(
        <div className={cn("fixed to top-10 inset-x-0 max-w-2xl mx-auto z-50")}>
            <Menu setActive = {setActive}>
                <MenuItem  setActive={setActive} active={active} item="Home">
                <Link href="/"onClick={() => setActive("Home")}> Home </Link>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Our Courses">
                <Link href="/"onClick={() => setActive("Our Courses")}> Our Courses </Link>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Contact">
                <Link href="/"onClick={() => setActive("Contact")}> Contact</Link>
                </MenuItem>
            </Menu>
            <div className="hidden md:flex space-x-4 md:space-x-8 text-sm md:text-lg">
          <Link href="/">Home</Link>
          <Link href="/Our Courses">Our Courses</Link>
          <Link href="/Contact">Contact</Link>
          
        </div>
        </div>
    )
}    
 export default Navbar;