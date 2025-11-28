import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
  <section
  id="contact"
  className="py-24 px-4 relative bg-secondary/30 flex items-center justify-center min-h-screen"
>
  <div className="container mx-auto max-w-3xl flex flex-col items-center justify-center text-center">

    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Get In <span className="text-primary"> Touch</span>
    </h2>

    <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
      Want to collaborate? Feel free to reach out.
      I'm always open to discussing new opportunities.
    </p>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center">
          <div className="space-y-8 mx-auto items-center text-center">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:rebaonengwako@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    rebaonengwako@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+27797389123"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +27 (79) 738-9123
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Johannesburg, Gauteng</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/rebaone-ngwako-434630146/" target="_blank">
                  <Linkedin />
                </a>
                <a href="#" target="_blank">
                  <Github />
                </a>
            
             
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
