
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <div className="bg-gradient-to-r from-brand-purple via-brand-blue to-brand-teal text-white py-16 sm:py-24">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Career Journey?</h2>
          <p className="text-lg mb-8 text-white/90">
            Join thousands of students who have built successful careers without a traditional degree.
            Get started today and transform your future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" variant="secondary" className="text-brand-purple">
                Create Free Account <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-purple">
                Browse Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
