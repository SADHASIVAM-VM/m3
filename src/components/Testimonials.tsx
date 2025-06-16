
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    content: "SkillForge helped me land a job at a top tech company without a degree. The hands-on projects and mentorship were worth every minute.",
    name: "Priya Sharma",
    title: "Frontend Developer at Microsoft",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    content: "I went from zero programming knowledge to building full-stack applications in 6 months. Now I'm earning 3x what I made at my previous job.",
    name: "Rohit Kumar",
    title: "Full-Stack Developer at Razorpay",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    content: "The practical approach and industry connections made all the difference. I'm now working on real projects that impact millions of users.",
    name: "Ananya Patel",
    title: "Product Engineer at Flipkart",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-b from-violet-300 via-violet-100 to-transparent   py-16 sm:py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-6xl font-bold mb-6">Success Stories</h2>
          <p className="text-xl text-gray-600">
            Join hundreds of students who have transformed their careers through practical skills and real-world experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white border-none shadow-md">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 border-2 border-white">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
