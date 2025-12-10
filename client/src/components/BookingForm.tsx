import { useState } from "react";
import { TechButton, TechCard } from "@/components/ui/tech-components";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export function BookingForm() {
  const [date, setDate] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      bike: formData.get("bike"),
      message: formData.get("message"),
      date: date ? format(date, "PPP") : "Not specified",
    };

    // Simulate network delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Construct mailto link
    const subject = `Booking Request: ${data.service} - ${data.name}`;
    const body = `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Bike: ${data.bike}
Service Required: ${data.service}
Preferred Date: ${data.date}

Message:
${data.message}
    `.trim();

    window.location.href = `mailto:blmotorcyclesltd@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    toast.success("Opening your email client to send the booking request!");
    setIsSubmitting(false);
  };

  return (
    <TechCard className="max-w-2xl mx-auto w-full bg-black/50 backdrop-blur-sm border-primary/20">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wide mb-2">
          Request a Booking
        </h3>
        <p className="text-gray-400 text-sm">
          Fill out the form below and we'll get back to you to confirm your appointment.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-primary font-mono uppercase text-xs tracking-wider">Name</Label>
            <Input id="name" name="name" required placeholder="John Doe" className="bg-black/50 border-primary/20 focus:border-primary text-white" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-primary font-mono uppercase text-xs tracking-wider">Email</Label>
            <Input id="email" name="email" type="email" required placeholder="john@example.com" className="bg-black/50 border-primary/20 focus:border-primary text-white" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-primary font-mono uppercase text-xs tracking-wider">Phone</Label>
            <Input id="phone" name="phone" type="tel" required placeholder="07700 900000" className="bg-black/50 border-primary/20 focus:border-primary text-white" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bike" className="text-primary font-mono uppercase text-xs tracking-wider">Bike Make & Model</Label>
            <Input id="bike" name="bike" required placeholder="e.g. Honda CBR600RR" className="bg-black/50 border-primary/20 focus:border-primary text-white" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="service" className="text-primary font-mono uppercase text-xs tracking-wider">Service Type</Label>
            <Select name="service" required>
              <SelectTrigger className="bg-black/50 border-primary/20 focus:border-primary text-white">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent className="bg-black border-primary/20 text-white">
                <SelectItem value="General Service">General Service</SelectItem>
                <SelectItem value="MOT Prep">MOT Preparation</SelectItem>
                <SelectItem value="Carb Cleaning">Ultrasonic Carb Cleaning</SelectItem>
                <SelectItem value="Carb Balancing">Carb/Throttle Body Balancing</SelectItem>
                <SelectItem value="Brake Restoration">Brake Restoration</SelectItem>
                <SelectItem value="Repairs">General Repairs</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-primary font-mono uppercase text-xs tracking-wider">Preferred Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    "flex h-10 w-full items-center justify-between rounded-md border border-primary/20 bg-black/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-left font-normal text-white hover:bg-primary/10 transition-colors",
                    !date && "text-muted-foreground"
                  )}
                >
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                  <CalendarIcon className="mr-2 h-4 w-4 opacity-50" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-black border-primary/20 text-white" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                  initialFocus
                  className="bg-black text-white rounded-md border border-primary/20"
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-primary font-mono uppercase text-xs tracking-wider">Additional Details</Label>
          <Textarea 
            id="message" 
            name="message" 
            placeholder="Please describe the issue or specific requirements..." 
            className="bg-black/50 border-primary/20 focus:border-primary text-white min-h-[100px]" 
          />
        </div>

        <TechButton 
          type="submit" 
          className="w-full" 
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Preparing Email...
            </>
          ) : (
            "Send Booking Request"
          )}
        </TechButton>
        <p className="text-xs text-center text-gray-500 mt-4">
          Note: This will open your default email client with the booking details pre-filled.
        </p>
      </form>
    </TechCard>
  );
}
