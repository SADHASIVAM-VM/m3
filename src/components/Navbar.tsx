
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black backdrop-blur-md border-b ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="flex items-center  rounded-xl">
              <img src='/logo.png' className="w-16  font-extrabold text-gradient"/>
            </Link>
          </div>
          
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white  focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            <Link to="/projects" className="text-base font-medium text-white hover:text-brand-purple transition-colors">
              Projects
            </Link>
            <Link to="/internships" className="text-base font-medium text-white hover:text-brand-purple transition-colors">
              Internships
            </Link>
            <div className="relative group">
              <button className="text-base font-medium text-white group-hover:text-brand-purple transition-colors inline-flex items-center">
                Resources
                <ChevronDown size={16} className="ml-1 mt-0.5" />
              </button>
              <div className="absolute left-0 transform -translate-x-1/4 mt-3 px-2 w-56 sm:px-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out z-50">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-1 bg-white p-2">
                    <Link to="/resources/guides" className="p-2 hover:bg-gray-50 rounded-md">
                      Learning Guides
                    </Link>
                    <Link to="/resources/tools" className="p-2 hover:bg-gray-50 rounded-md">
                      Developer Tools
                    </Link>
                    <Link to="/resources/community" className="p-2 hover:bg-gray-50 rounded-md">
                      Community Forum
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/success-stories" className="text-base font-medium text-white hover:text-brand-purple transition-colors">
              Success Stories
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-4">
            <Link to="/login">
              <Button variant="outline">Log in</Button>
            </Link>
            <Link to="/signup">
              <Button>Sign up</Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="pt-2 pb-4 px-5 space-y-1 bg-white shadow-lg">
          <Link to="/projects" className="block py-2 text-base font-medium text-gray-700 hover:text-brand-purple transition-colors">
            Projects
          </Link>
          <Link to="/internships" className="block py-2 text-base font-medium text-gray-700 hover:text-brand-purple transition-colors">
            Internships
          </Link>
          <Link to="/resources" className="block py-2 text-base font-medium text-gray-700 hover:text-brand-purple transition-colors">
            Resources
          </Link>
          <Link to="/success-stories" className="block py-2 text-base font-medium text-gray-700 hover:text-brand-purple transition-colors">
            Success Stories
          </Link>
          <div className="pt-4 space-y-2">
            <Link to="/login" className="w-full block">
              <Button variant="outline" className="w-full">Log in</Button>
            </Link>
            <Link to="/signup" className="w-full block">
              <Button className="w-full">Sign up</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
