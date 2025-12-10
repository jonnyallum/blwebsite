import { useLocation, Link } from "wouter";
import { TechButton, SectionTitle } from "@/components/ui/tech-components";
import { BookingForm } from "@/components/BookingForm";

export default function Placeholder() {
  const [location] = useLocation();
  
  // Define content based on the route
  const getContent = () => {
    switch(location) {
      case '/shop':
        return {
          title: 'Shop Parts',
          subtitle: 'Coming Soon',
          text: 'We are currently building this section of our website. Please check back soon or contact us directly for more information. In the meantime, browse our extensive inventory on eBay.',
          showEbay: true
        };
      case '/services':
        return {
          title: 'Garage Services',
          subtitle: 'Expert Maintenance',
          text: 'From routine maintenance to specialist restoration, our workshop in Fareham is equipped to handle it all. We specialize in carb balancing, ultrasonic cleaning, and brake restoration for all makes and models.',
          showEbay: false
        };
      case '/about':
        return {
          title: 'About Us',
          subtitle: 'Our Story',
          text: 'Founded in 2020, B&L Motorcycles is a family-run business born from a passion for two wheels. We are dedicated to keeping your bike on the road with quality parts, expert advice, and a commitment to the riding community.',
          showEbay: false
        };
      case '/contact':
        return {
          title: 'Contact Us',
          subtitle: 'Get In Touch',
          text: 'Ready to book a service or need a specific part? Visit us at our Fareham workshop, give us a call, or drop us a message. We are here to help with all your motorcycle needs.',
          showEbay: true
        };
      default:
        return {
          title: location.substring(1).charAt(0).toUpperCase() + location.substring(2),
          subtitle: 'Coming Soon',
          text: 'We are currently building this section of our website. Please check back soon or contact us directly for more information.',
          showEbay: true
        };
    }
  };

  const content = getContent();

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-black relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-[url('/images/hero-bg-v2.jpg')] bg-cover bg-center opacity-20" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <SectionTitle subtitle={content.subtitle}>{content.title}</SectionTitle>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg leading-relaxed font-light">
          {content.text}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/">
            <TechButton variant="outline">Return Home</TechButton>
          </Link>
          {content.showEbay && (
            <a href="https://ebay.us/m/zVcLaj" target="_blank" rel="noopener noreferrer">
              <TechButton>Visit eBay Store</TechButton>
            </a>
          )}
          {location === '/services' && (
             <Link href="/contact">
               <TechButton>Book Now</TechButton>
             </Link>
          )}
        </div>

        {location === '/services' && (
          <div className="mt-16 w-full max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-700">
            <BookingForm />
          </div>
        )}
      </div>
    </div>
  );
}
