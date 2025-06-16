
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Lock } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Build a complete online store with React, Node.js, and MongoDB",
    category: "Web Development",
    level: "Intermediate",
    duration: "6 weeks",
    skills: ["React", "Node.js", "MongoDB", "Express"],
    isPremium: false,
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80"
  },
  {
    id: 2,
    title: "ML Recommendation System",
    description: "Create an AI-powered recommendation engine with Python and TensorFlow",
    category: "Machine Learning",
    level: "Advanced",
    duration: "8 weeks",
    skills: ["Python", "TensorFlow", "Data Science", "API"],
    isPremium: true,
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 3,
    title: "Mobile Social App",
    description: "Develop a cross-platform social media app using React Native",
    category: "Mobile Development",
    level: "Intermediate",
    duration: "7 weeks",
    skills: ["React Native", "Firebase", "Redux", "UI/UX"],
    isPremium: false,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
];

const ProjectShowcase = () => {
  return (
    <div className="section-container">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
        <p className="text-lg text-gray-600">
          Learn by doing with our industry-designed projects. Build your portfolio and gain real-world experience.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden border-none">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="secondary" className="bg-white text-gray-800 font-medium">
                  {project.category}
                </Badge>
              </div>
              {project.isPremium && (
                <div className="absolute top-4 right-4">
                  <Badge variant="default" className="bg-brand-purple font-medium flex items-center gap-1">
                    <Lock size={12} /> Premium
                  </Badge>
                </div>
              )}
            </div>
            
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <span className="mr-1">⏱️</span> {project.duration}
                </div>
                <div className="flex items-center">
                  <span className="mr-1">🔰</span> {project.level}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-2">
                {project.skills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="bg-gray-50">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
            
            <CardFooter className="flex justify-between">
              <Link to={`/projects/${project.id}`}>
                <Button variant={project.isPremium ? "outline" : "default"}>
                  {project.isPremium ? "Preview" : "Start Learning"}
                </Button>
              </Link>
              {project.isPremium && (
                <div className="text-brand-purple font-medium text-sm flex items-center">
                  ₹49 only
                </div>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link to="/projects">
          <Button variant="outline" size="lg">View All Projects</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectShowcase;
