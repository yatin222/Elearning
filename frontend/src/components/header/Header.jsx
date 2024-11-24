import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GraduationCap, LogIn, Menu } from 'lucide-react';

const Header = ({ isAuth = false }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="w-full bg-white bg-opacity-90 backdrop-filter backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-6 w-6" />
            <span className="text-xl font-bold">ElevateU</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <NavLinks />
            {isAuth ? (
              <Link to="/account">
                <Button variant="outline" size="sm">
                  Account
                </Button>
              </Link>
            ) : (
              <Link to="/login">
                <Button size="sm">
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Button>
              </Link>
            )}
          </nav>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-2 pt-2 pb-4 space-y-1">
            <NavLinks mobile />
            {isAuth ? (
              <Link to="/account" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Account
              </Link>
            ) : (
              <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Login
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ mobile = false }) => {
  const linkClass = mobile
    ? "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
    : "text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors";

  return (
    <>
      <Link to="/" className={linkClass}>Home</Link>
      <Link to="/courses" className={linkClass}>Courses</Link>
      <Link to="/about" className={linkClass}>About</Link>
    </>
  );
};

export default Header;