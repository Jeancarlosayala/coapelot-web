'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navLinks, type NavLinkGroup, type NavLinkItem } from './nav-links';
import { Logo } from '@/components/ui/logo';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const renderNavItem = (link: NavLinkGroup, isMobile: boolean = false) => {
    const commonLinkClasses = cn(
      "text-sm font-medium transition-colors",
      pathname === link.href ? "text-primary" : "text-neutral-700 hover:text-primary",
      isMobile && "py-2 block w-full text-left"
    );
    const dropdownTriggerClasses = cn(
      "flex items-center",
      commonLinkClasses,
      isMobile ? "" : "px-0 py-0" // Remove button padding for desktop dropdown trigger
    );


    if (link.isDropdown && link.subLinks) {
      return (
        <DropdownMenu key={link.label}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className={dropdownTriggerClasses}>
              {link.label}
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white w-56">
            {link.subLinks.map((subLink) => (
              <DropdownMenuItem key={subLink.href} asChild className="focus:bg-neutral-100">
                <Link
                  href={subLink.href}
                  className={cn(
                    "block px-4 py-2 text-sm",
                     pathname === subLink.href ? "text-primary font-semibold" : "text-neutral-700 hover:text-primary",
                     "hover:bg-neutral-50" // Consistent hover for dropdown items
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {subLink.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <Link
        key={link.href}
        href={link.href!}
        className={commonLinkClasses}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {link.label}
      </Link>
    );
  };
  
  const NavListItem = ({ link }: { link: NavLinkGroup}) => {
    const commonLinkClasses = cn(
      "text-sm font-medium transition-colors",
      pathname === link.href ? "text-primary" : "text-neutral-700 hover:text-primary"
    );
     const dropdownTriggerClasses = cn(
      "flex items-center",
      commonLinkClasses,
    );

    if (link.isDropdown && link.subLinks) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
             <Button variant="ghost" className={cn(dropdownTriggerClasses, "p-0 hover:bg-transparent")}> {/* Adjusted for desktop */}
              {link.label}
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white w-56 border-neutral-200 shadow-lg">
            {link.subLinks.map((subLink) => (
              <DropdownMenuItem key={subLink.href} asChild className="focus:bg-neutral-100 cursor-pointer">
                <Link
                  href={subLink.href}
                  className={cn(
                    "block px-4 py-2 text-sm w-full",
                     pathname === subLink.href ? "text-primary font-semibold bg-neutral-50" : "text-neutral-700 hover:text-primary hover:bg-neutral-50"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {subLink.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
    return (
       <Link
        href={link.href!}
        className={commonLinkClasses}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {link.label}
      </Link>
    );
  }


  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Logo />
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavListItem key={link.label} link={link} />
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-neutral-700 hover:text-primary">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-white p-6 border-l border-neutral-200">
              <div className="mb-6 flex items-center justify-between">
                <Logo />
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} className="text-neutral-700 hover:text-primary">
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <div key={link.label} className="py-1">
                    {renderNavItem(link, true)}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
