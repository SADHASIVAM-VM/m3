
import { Card, CardContent } from "@/components/ui/card";
import { Users, Briefcase, Award, Star } from "lucide-react";

const stats = [
  {
    id: 1,
    name: "Students Trained",
    value: "15,000+",
    icon: <Users className="h-8 w-8 text-brand-purple" />
  },
  {
    id: 2,
    name: "Hiring Partners",
    value: "200+",
    icon: <Briefcase className="h-8 w-8 text-brand-teal" />
  },
  {
    id: 3,
    name: "Placement Rate",
    value: "92%",
    icon: <Award className="h-8 w-8 text-brand-blue" />
  },
  {
    id: 4,
    name: "Student Satisfaction",
    value: "4.8/5",
    icon: <Star className="h-8 w-8 text-brand-purple" />
  }
];

const StatsSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <Card key={stat.id} className="border-none shadow-sm">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-gray-50 rounded-full">{stat.icon}</div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-gray-500">{stat.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
