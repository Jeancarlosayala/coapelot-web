// src/components/layout/navbar.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image'; 
import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'; 
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
import { LanguageSwitcher } from '@/components/layout/language-switcher';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handles mobile navigation rendering
  const renderNavItem = (link: NavLinkGroup, isMobile: boolean = false) => {
    const commonLinkClasses = cn(
      "text-sm font-medium transition-colors",
      pathname === link.href ? "text-primary" : "text-neutral-700 md:hover:text-primary",
      isMobile && "py-2 block w-full text-left"
    );
    
    if (isMobile && link.isDropdown && link.subLinks) {
      return (
        <Accordion type="single" collapsible className="w-full" key={link.label}>
          <AccordionItem value={link.label} className="border-none">
            <AccordionTrigger className={cn(
              "flex items-center justify-between w-full py-2 px-0 text-left text-sm font-medium text-neutral-700 transition-colors hover:bg-transparent",
              "hover:no-underline md:hover:text-primary focus-visible:ring-0 focus-visible:ring-offset-0" 
              // ChevronDown icon is part of AccordionTrigger and styled by it.
            )}>
              {link.label}
            </AccordionTrigger>
            <AccordionContent className="pt-1 pb-0 pl-4"> 
              <nav className="flex flex-col space-y-0.5">
                {link.subLinks.map((subLink) => (
                  <Link
                    key={subLink.href}
                    href={subLink.href}
                    className={cn(
                      "block py-2 text-sm transition-colors text-neutral-600 rounded-md px-3", 
                      pathname === subLink.href ? "text-primary font-semibold bg-neutral-50" : "hover:text-primary hover:bg-neutral-50"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {subLink.label}
                  </Link>
                ))}
              </nav>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      );
    }


    // Original Dropdown for desktop (within NavListItem) or simple links for mobile
    if (link.isDropdown && link.subLinks && !isMobile) {
      // Desktop dropdown logic is handled by NavListItem
      return null; 
    }

    return (
      <Link
        key={link.href || link.label} // Use label as key if href is not present
        href={link.href!}
        className={commonLinkClasses}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {link.label}
      </Link>
    );
  };
  
  // Handles desktop navigation rendering
  const NavListItem = ({ link }: { link: NavLinkGroup}) => {
    const commonLinkClasses = cn(
      "text-sm font-medium transition-colors",
      pathname === link.href ? "text-primary" : "text-neutral-700 hover:text-primary"
    );
    const dropdownTriggerClasses = cn(
      "flex items-center",
      commonLinkClasses,
      // Remove focus ring for dropdown trigger
      "focus-visible:ring-0 focus-visible:ring-offset-0 outline-none focus:outline-none"
    );

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
      hoverTimeoutRef.current = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 150); 
    };
    
    const handleContentMouseEnter = () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };

    const handleContentMouseLeave = () => {
       hoverTimeoutRef.current = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 150);
    };


    if (link.isDropdown && link.subLinks) {
      return (
        <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
          <DropdownMenuTrigger asChild>
             <Button 
                variant="ghost" 
                className={cn(
                  dropdownTriggerClasses, 
                  "p-0 hover:bg-transparent" // Ensure ghost variant styles apply
                )}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                aria-expanded={isDropdownOpen}
              >
              {link.label}
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            className="bg-white w-56 border-neutral-200 shadow-lg"
            onMouseEnter={handleContentMouseEnter}
            onMouseLeave={handleContentMouseLeave}
          >
            {link.subLinks.map((subLink) => (
              <DropdownMenuItem key={subLink.href} asChild className="focus:bg-neutral-100 cursor-pointer">
                <Link
                  href={subLink.href}
                  className={cn(
                    "block px-4 py-2 text-sm w-full",
                     pathname === subLink.href ? "text-primary font-semibold bg-neutral-50" : "text-neutral-700 hover:text-primary hover:bg-neutral-50"
                  )}
                  onClick={() => {
                    setIsDropdownOpen(false);
                  }}
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
      >
        {link.label}
      </Link>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Logo />
        
        <div className="hidden md:flex items-center space-x-4">
          <nav className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavListItem key={link.label} link={link} />
            ))}
          </nav>
          <LanguageSwitcher />
          <Button asChild size="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/ai-agent">
              CHAT AIJOLOT AI 
              <Image 
                src="/chat_emoji.png" 
                alt="Chat Emoji" 
                width={20} 
                height={20} 
                className="ml-2" 
              />
            </Link>
          </Button>
        </div>

        <div className="md:hidden flex items-center">
          <Button asChild size="sm" variant="outline" className="mr-2 border-primary text-primary hover:bg-primary/10 px-2">
            <Link href="/ai-agent" className="flex items-center">
              CHAT AI 
              <Image 
                src="/chat_emoji.png" 
                alt="Chat Emoji" 
                width={16} 
                height={16} 
                className="ml-1" 
              />
            </Link>
          </Button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-neutral-700 md:hover:text-primary">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-white p-0 border-l border-neutral-200">
              <SheetHeader className="px-6 pt-2 pb-5 flex flex-row items-center justify-between border-b border-neutral-200">
                <Logo />
                <SheetTitle className="sr-only">Main Menu</SheetTitle>
                {/* The explicit X button was removed here as SheetContent provides one by default */}
              </SheetHeader>
              <div className="flex flex-col h-[calc(100%-theme(spacing.28))]"> {}
                <nav className="flex-grow p-6 pt-2 space-y-0 overflow-y-auto">
                  {navLinks.map((link) => (
                    <div key={link.label} className="border-b border-neutral-100 last:border-b-0">
                      {renderNavItem(link, true)}
                    </div>
                  ))}
                </nav>
                <div className="p-6 space-y-4 mt-auto border-t border-neutral-200">
                  <Button asChild size="default" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/ai-agent" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center">
                      CHAT AIJOLOT AI
                       <Image 
                        src="/chat_emoji.png" 
                        alt="Chat Emoji" 
                        width={20} 
                        height={20} 
                        className="ml-2" 
                      />
                    </Link>
                  </Button>
                  <div>
                    <p className="mb-2 text-xs text-neutral-600 font-medium">Idioma</p>
                    <LanguageSwitcher />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
