
import { CheckCircle, Code, BookOpen, Award, Star, Clock } from "lucide-react";

const features = [
  {
    icon: <Code className="w-10 h-10 text-brand-purple" />,
    title: "Real-World Projects",
    description: "Build production-ready applications that solve actual problems, not theoretical assignments."
  },
  {
    icon: <BookOpen className="w-10 h-10 text-brand-teal" />,
    title: "Industry-Led Learning",
    description: "Learn directly from tech professionals who know what skills companies actually need."
  },
  {
    icon: <Award className="w-10 h-10 text-brand-blue" />,
    title: "Guaranteed Internships",
    description: "Get placed in quality internships with our hiring partners after completing the core curriculum."
  },
  {
    icon: <Star className="w-10 h-10 text-brand-purple" />,
    title: "Skills Over Degrees",
    description: "We focus on what matters: your ability to build, create, and solve real problems."
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-brand-teal" />,
    title: "Job-Ready Portfolio",
    description: "Graduate with a portfolio of projects that demonstrates your abilities to employers."
  },
  {
    icon: <Clock className="w-10 h-10 text-brand-blue" />,
    title: "Learn at Your Pace",
    description: "Flexible learning paths that fit your schedule while maintaining accountability."
  }
];

const Features = () => {
  return (
    <div className="bg-gradient-radial from-transparent via-green-100 to-transparent  py-16 sm:py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Skills Over College?</h2>
          <p className="text-lg text-gray-600">
            We focus on what truly matters for your career success: practical skills, real experience, and industry connections.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm card-hover border border-gray-100">
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
