
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast({
        title: "Request Submitted",
        description: "Thank you! A team member will contact you shortly.",
      });
    }, 1000);
  };

  return (
    <section className="section-spacing">
      <div className="container-custom">
        <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-border">
          <div className="grid md:grid-cols-2">
            <div className="gradient-bg-blue p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Pharmacy Inventory?
              </h2>
              <p className="text-white/90 mb-8">
                Request a personalized demo and see how our system can revolutionize your pharmacy's operations.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-white font-medium">Personalized Demonstration</h3>
                    <p className="text-white/80 text-sm">See how the platform works with your specific workflows</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-white font-medium">Custom ROI Analysis</h3>
                    <p className="text-white/80 text-sm">Get a detailed breakdown of potential savings and benefits</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-white font-medium">Implementation Roadmap</h3>
                    <p className="text-white/80 text-sm">Clear timeline and process for getting your system up and running</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 md:p-12">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-pharma-green/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-8 w-8 text-pharma-green" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-muted-foreground mb-6">
                    Your request has been submitted successfully. One of our specialists will contact you shortly.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setSubmitted(false)}
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-6">Request a Demo</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-1">
                          Company/Organization
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        How can we help?
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Request Demo"}
                      {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
                    <p className="text-xs text-center text-muted-foreground mt-4">
                      By submitting this form, you agree to our{" "}
                      <a href="#" className="underline hover:text-pharma-blue">
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a href="#" className="underline hover:text-pharma-blue">
                        Terms of Service
                      </a>.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
