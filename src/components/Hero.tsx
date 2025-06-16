
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-brand-teal/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-brand-purple/20 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
              Forget College. <br />
              <span className="text-gradient">Master Real Skills.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
              Join top companies through hands-on projects, expert mentorship, and real-world internships — all without the college debt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/signup">
                <Button size="lg" className="text-base font-medium px-8">
                  Get Started <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" size="lg" className="text-base font-medium px-8">
                  Explore Projects
                </Button>
              </Link>
            </div>
            
            <div className="mt-10 text-sm text-gray-500">
              <p>Trusted by 1000+ students and 200+ hiring partners</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-4 opacity-70">
                {["Microsoft", "Airbnb", "Shopify", "Uber", "Razorpay"].map((company) => (
                  <span key={company} className="font-bold text-lg text-gray-500">
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end animate-float">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-purple/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-brand-teal/20 rounded-full blur-xl"></div>
              
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-brand-purple to-brand-blue p-1">
                  <div className="bg-white p-5 rounded-t-lg">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="mx-auto text-sm text-gray-500">Web Development Project</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-200 rounded"></div>
                    <div className="h-2 bg-gray-200 rounded"></div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-20 bg-brand-purple/10 rounded-lg flex items-center justify-center text-brand-purple">React.Js</div>
                      <div className="h-20 bg-brand-blue/10 rounded-lg flex items-center justify-center text-brand-blue">Next.Js</div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-2 bg-gray-200 rounded"></div>
                  </div>
                  
                  <div className="mt-6 bg-brand-purple text-white py-2 px-4 rounded-lg text-center font-medium">
                    Complete Project &rarr;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
