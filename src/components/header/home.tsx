'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X, Search, UserCircle } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-background text-foreground w-full transition-colors">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between h-18">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="cursor-pointer">
            <img src="/logo.svg" alt="Logo" className="h-32 mt-1" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-md font-semibold hover:text-lime-400 transition-colors cursor-pointer">Delta8/Hemp</a>
          <a href="#" className="text-md font-semibold hover:text-lime-400 transition-colors cursor-pointer">Nicotine</a>
          <a href="#" className="text-md font-semibold hover:text-lime-400 transition-colors cursor-pointer">Candles/Spray</a>
          <a href="#" className="text-md font-semibold hover:text-lime-400 transition-colors cursor-pointer">Electronics</a>
          <a href="#" className="text-md font-semibold hover:text-lime-400 transition-colors cursor-pointer">Accessories</a>
        </nav>

        {/* Right Toolbar */}
        <div className="flex items-center space-x-4">
          <div className="scale-90 cursor-pointer mt-1">
            <ModeToggle />
          </div>
          <button className="hover:text-lime-400 transition-colors cursor-pointer" aria-label="Search">
            <Search size={24} />
          </button>
          <button className="hover:text-lime-400 transition-colors relative cursor-pointer" aria-label="Shopping Cart">
            <ShoppingCart size={24} />
            <span className="absolute -top-1 -right-1 bg-lime-400 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">0</span>
          </button>

          {/* User Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="hover:text-lime-400 transition-colors cursor-pointer" aria-label="User Menu">
                <UserCircle size={28} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="hover:text-lime-400 cursor-pointer" asChild>
                <Link href="/smoke-up">Create account</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:text-lime-400 cursor-pointer" onClick={() => console.log('Sign in clicked')}>
                Sign in
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden hover:text-lime-400 transition-colors ml-1 cursor-pointer"
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-muted py-2 transition-colors">
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            <a href="#" className="block py-1 text-sm hover:text-lime-400 transition-colors cursor-pointer">Delta8/Hemp</a>
            <a href="#" className="block py-1 text-sm hover:text-lime-400 transition-colors cursor-pointer">Nicotine</a>
            <a href="#" className="block py-1 text-sm hover:text-lime-400 transition-colors cursor-pointer">Candles/Spray</a>
            <a href="#" className="block py-1 text-sm hover:text-lime-400 transition-colors cursor-pointer">Electronics</a>
            <a href="#" className="block py-1 text-sm hover:text-lime-400 transition-colors cursor-pointer">Accessories</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;