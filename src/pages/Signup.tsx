
import SignupForm from "@/components/SignupForm";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="w-full max-w-md space-y-4">
          <div className="text-center">
            <Link to="/" className="flex justify-center">
              <span className="text-2xl font-extrabold text-gradient">Grow</span>
            </Link>
            <h2 className="mt-6 text-3xl font-bold">Create an account</h2>
            <p className="mt-2 text-gray-600">
              Start your journey to a successful tech career
            </p>
          </div>
          <SignupForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
