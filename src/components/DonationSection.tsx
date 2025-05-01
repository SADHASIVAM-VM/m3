
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";
import { Heart } from "lucide-react";

const DonationSection = () => {
  const [amount, setAmount] = useState("500");
  const [customAmount, setCustomAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleDonate = () => {
    setIsLoading(true);
    const donationAmount = amount === "custom" ? customAmount : amount;
    
    // Simulate donation process
    setTimeout(() => {
      setIsLoading(false);
      toast.success(`Thank you for your ₹${donationAmount} donation!`);
    }, 1500);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Support Our Mission</h2>
          <p className="text-lg text-gray-600">
            Your contribution helps us provide affordable education and opportunities to more students.
          </p>
        </div>
        
        <Card className="max-w-md mx-auto border-none shadow-md">
          <CardHeader>
            <CardTitle className="text-center flex items-center justify-center">
              <Heart className="text-brand-purple mr-2" /> Make a Donation
            </CardTitle>
            <CardDescription className="text-center">
              Every contribution helps create opportunities for students without traditional degrees.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup value={amount} onValueChange={setAmount} className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <RadioGroupItem value="100" id="amount-100" className="sr-only" />
                <Label
                  htmlFor="amount-100"
                  className={`flex h-14 items-center justify-center rounded-md border border-gray-200 ${
                    amount === "100" ? "bg-brand-purple text-white" : "bg-white"
                  } hover:border-brand-purple cursor-pointer`}
                >
                  ₹100
                </Label>
              </div>
              <div>
                <RadioGroupItem value="500" id="amount-500" className="sr-only" />
                <Label
                  htmlFor="amount-500"
                  className={`flex h-14 items-center justify-center rounded-md border border-gray-200 ${
                    amount === "500" ? "bg-brand-purple text-white" : "bg-white"
                  } hover:border-brand-purple cursor-pointer`}
                >
                  ₹500
                </Label>
              </div>
              <div>
                <RadioGroupItem value="1000" id="amount-1000" className="sr-only" />
                <Label
                  htmlFor="amount-1000"
                  className={`flex h-14 items-center justify-center rounded-md border border-gray-200 ${
                    amount === "1000" ? "bg-brand-purple text-white" : "bg-white"
                  } hover:border-brand-purple cursor-pointer`}
                >
                  ₹1000
                </Label>
              </div>
              <div className="col-span-3">
                <RadioGroupItem value="custom" id="amount-custom" className="sr-only" />
                <Label
                  htmlFor="amount-custom"
                  className={`flex h-14 items-center justify-center rounded-md border border-gray-200 ${
                    amount === "custom" ? "border-brand-purple" : ""
                  } hover:border-brand-purple cursor-pointer`}
                >
                  <span className={amount === "custom" ? "text-brand-purple" : ""}>Custom amount</span>
                </Label>
              </div>
            </RadioGroup>
            
            {amount === "custom" && (
              <div className="mb-6">
                <Label htmlFor="custom-amount">Enter amount (₹)</Label>
                <Input
                  id="custom-amount"
                  type="number"
                  min="1"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="mt-1"
                />
              </div>
            )}
            
            <Button 
              onClick={handleDonate} 
              disabled={isLoading || (amount === "custom" && !customAmount)} 
              className="w-full"
            >
              {isLoading ? "Processing..." : "Donate Now"}
            </Button>
          </CardContent>
          <CardFooter className="justify-center text-center text-sm text-gray-500">
            <p>All donations are tax-deductible. You will receive a receipt via email.</p>
          </CardFooter>
        </Card>
        
        <div className="mt-12 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            {
              title: "Education Fund",
              description: "Supports scholarships for underprivileged students"
            },
            {
              title: "Tech Resources",
              description: "Provides tools and equipment for hands-on learning"
            },
            {
              title: "Mentorship Program",
              description: "Connects students with industry professionals"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonationSection;
