
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const PricingSection = () => {
  return (
    <div className="section-container">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple, Transparent Pricing</h2>
        <p className="text-lg text-gray-600">
          Affordable learning paths with no hidden fees. Pay only for what you need.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Free Plan */}
        <Card className="border border-gray-200 shadow-sm card-hover">
          <CardHeader>
            <CardTitle className="text-2xl">Free Access</CardTitle>
            <CardDescription>Perfect for beginners</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <span className="text-4xl font-bold">₹0</span>
              <span className="text-gray-500 ml-2">forever</span>
            </div>
            <ul className="space-y-3">
              {[
                "10+ basic projects",
                "Community forum access",
                "Learning resources library",
                "Basic profile"
              ].map((feature) => (
                <li key={feature} className="flex">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Link to="/signup" className="w-full">
              <Button variant="outline" className="w-full">Sign Up Free</Button>
            </Link>
          </CardFooter>
        </Card>
        
        {/* Premium Plan */}
        <Card className="border-2 border-brand-purple relative overflow-hidden shadow-md card-hover">
          <div className="absolute top-0 right-0 bg-brand-purple text-white text-xs font-bold py-1 px-3 rounded-bl">
            POPULAR
          </div>
          <CardHeader>
            <CardTitle className="text-2xl">Premium Projects</CardTitle>
            <CardDescription>Access premium content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <span className="text-4xl font-bold">₹49</span>
              <span className="text-gray-500 ml-2">per project</span>
            </div>
            <ul className="space-y-3">
              {[
                "Everything in Free",
                "Premium industry projects",
                "Project certificates",
                "Code reviews",
                "Portfolio showcase"
              ].map((feature) => (
                <li key={feature} className="flex">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Link to="/projects/premium" className="w-full">
              <Button className="w-full">View Premium Projects</Button>
            </Link>
          </CardFooter>
        </Card>
        
        {/* Internship Plan */}
        <Card className="border border-gray-200 shadow-sm card-hover">
          <CardHeader>
            <CardTitle className="text-2xl">Internship Track</CardTitle>
            <CardDescription>Full career support</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <span className="text-4xl font-bold">₹999</span>
              <span className="text-gray-500 ml-2">one-time</span>
            </div>
            <ul className="space-y-3">
              {[
                "Everything in Premium",
                "Guaranteed internship placement",
                "1-on-1 mentorship",
                "Resume building",
                "Interview preparation",
                "Job placement assistance"
              ].map((feature) => (
                <li key={feature} className="flex">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Link to="/internship-track" className="w-full">
              <Button variant="outline" className="w-full">Learn More</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      
      <div className="mt-16 text-center bg-gray-50 rounded-xl p-8">
        <h3 className="text-xl font-bold mb-2">Looking for custom solutions?</h3>
        <p className="text-gray-600 mb-6">We offer special packages for businesses and educational institutions</p>
        <Link to="/contact">
          <Button variant="outline">Contact Us</Button>
        </Link>
      </div>
    </div>
  );
};

export default PricingSection;
