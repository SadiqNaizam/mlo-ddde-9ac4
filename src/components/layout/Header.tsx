import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BookOpen, Search, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const Header: React.FC = () => {
  console.log('Header loaded');

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors hover:text-amber-300 ${
      isActive ? 'text-amber-300' : 'text-gray-300'
    }`;

  const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
  `block py-2 px-4 text-lg rounded-md transition-colors hover:bg-slate-700 ${
    isActive ? 'bg-slate-700 text-amber-300' : 'text-gray-200'
  }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-700 bg-slate-900/80 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 text-white">
      <div className="container flex h-20 items-center">
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-slate-800 border-r-slate-700 text-white w-3/4">
               <div className="flex flex-col gap-6 pt-10">
                <SheetClose asChild>
                  <NavLink to="/search-and-browse" className={mobileNavLinkClasses}>
                    Store
                  </NavLink>
                </SheetClose>
                <SheetClose asChild>
                  <NavLink to="/user-library" className={mobileNavLinkClasses}>
                    My Library
                  </NavLink>
                </SheetClose>
               </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <Link to="/" className="items-center gap-2 mr-6 hidden sm:flex">
          <BookOpen className="h-7 w-7 text-amber-400" />
          <span className="font-serif text-xl font-bold tracking-tight">The Reading Room</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/search-and-browse" className={navLinkClasses}>
            Store
          </NavLink>
          <NavLink to="/user-library" className={navLinkClasses}>
            My Library
          </NavLink>
        </nav>

        {/* Search and User Icon */}
        <div className="flex flex-1 items-center justify-end gap-4">
          <div className="relative w-full max-w-sm ml-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search for books, authors..."
              className="w-full pl-10 bg-slate-800 border-slate-700 focus:ring-amber-400 text-white"
            />
          </div>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">User Account</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;