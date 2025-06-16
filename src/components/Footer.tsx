
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
          <div className="col-span-2">
            <Link to="/" className="inline-flex rounded-2xl p-1 items-center mb-4 bg-black ">
              <img src="/logo.png" className="w-20 " alt="" />
            </Link>
            <p className="text-gray-600 mb-4 max-w-xs">
              Building the next generation of tech talent through practical skills and real-world experience.
            </p>
            <div className="flex space-x-4">
              
            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                    <Twitter/>
                  </div>
            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                    <Facebook/>
                  </div>
            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                    <Linkedin/>
                  </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              {["Projects", "Internships", "Premium Content", "For Businesses", "Success Stories"].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(/\s+/g, "-")}`} className="text-gray-600 hover:text-brand-purple transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {["Learning Paths", "Community", "Blog", "Events", "Partnerships"].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(/\s+/g, "-")}`} className="text-gray-600 hover:text-brand-purple transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {["About", "Careers", "Contact", "Privacy Policy", "Terms of Service"].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(/\s+/g, "-")}`} className="text-gray-600 hover:text-brand-purple transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} M3 software company. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 hover:text-brand-purple text-sm">
              Privacy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-brand-purple text-sm">
              Terms
            </Link>
            <Link to="/sitemap" className="text-gray-500 hover:text-brand-purple text-sm">
              Sitemap
            </Link>
            <Link to="/cookies" className="text-gray-500 hover:text-brand-purple text-sm">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
