
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Loader2 } from "lucide-react";
import emailjs from 'emailjs-com';

// Initialize EmailJS with your user ID (we'll use public keys, which is safe for client-side code)
// These IDs will need to be created in the EmailJS dashboard
const SERVICE_ID = 'default_service'; // Replace with your service ID after creating account
const TEMPLATE_ID = 'template_contact'; // Replace with your template ID after creating account
const USER_ID = 'YOUR_USER_ID'; // Replace with your user ID after creating account

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "lucianamitchell19@gmail.com",
      };

      // Send email using EmailJS
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        USER_ID
      );

      // Handle success
      toast.success("Message sent successfully! I'll get back to you soon.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden border border-border bg-card/50 backdrop-blur-sm">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-foreground"
            >
              Name
            </label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-background/50"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-foreground"
            >
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-background/50"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="subject"
              className="text-sm font-medium text-foreground"
            >
              Subject
            </label>
            <Input
              id="subject"
              name="subject"
              placeholder="What's this regarding?"
              value={formData.subject}
              onChange={handleChange}
              required
              className="bg-background/50"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-foreground"
            >
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message here..."
              value={formData.message}
              onChange={handleChange}
              required
              className="min-h-[120px] resize-y bg-background/50"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full transition-all duration-300"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
