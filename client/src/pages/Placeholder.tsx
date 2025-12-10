import { useLocation } from "wouter";
import { TechButton, SectionTitle } from "@/components/ui/tech-components";

export default function Placeholder() {
  const [location] = useLocation();
  const pageName = location.substring(1).charAt(0).toUpperCase() + location.substring(2);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <SectionTitle subtitle="Coming Soon">{pageName}</SectionTitle>
        <p className="text-gray-400 max-w-xl mx-auto mb-8 text-lg">
          We are currently building this section of our website. Please check back soon or contact us directly for more information.
        </p>
        <div className="flex justify-center gap-4">
          <a href="/">
            <TechButton variant="outline">Return Home</TechButton>
          </a>
          <a href="https://ebay.us/m/zVcLaj" target="_blank" rel="noopener noreferrer">
            <TechButton>Visit eBay Store</TechButton>
          </a>
        </div>
      </div>
    </div>
  );
}
