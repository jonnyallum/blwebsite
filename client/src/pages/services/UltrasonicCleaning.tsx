import { Link } from "wouter";
import { Zap, Phone, Mail, ArrowRight } from "lucide-react";
import { TechButton } from "@/components/ui/tech-components";

export default function UltrasonicCleaning() {
  return (
    <div className="flex flex-col">
      <section className="relative py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-black border-2 border-primary/30 mb-6">
              <Zap className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase mb-6">
              Ultrasonic Cleaning
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Deep cleaning for intricate parts using advanced ultrasonic technology.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img
                src="/images/ultrasonic-clean.jpg"
                alt="Ultrasonic cleaning services for motorcycle parts"
                className="w-full h-auto border border-gray-800"
              />
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold text-white uppercase mb-6">
                Advanced <span className="text-primary">Ultrasonic Cleaning</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  B&L Motorcycles uses state-of-the-art ultrasonic cleaning technology to deep clean intricate motorcycle components. This advanced cleaning method reaches areas that traditional cleaning simply cannot, removing years of built-up grime, carbon deposits, and contaminants.
                </p>
                <p>
                  Ultrasonic cleaning is perfect for carburetors, fuel injectors, brake components, and other precision parts where cleanliness is critical for proper function. The process is gentle yet incredibly effective, restoring components to like-new condition without damage.
                </p>
                <h3 className="text-xl font-heading font-bold text-primary uppercase mt-8 mb-4">
                  Ideal For:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Carburetors and fuel system components</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Fuel injectors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Brake calipers and master cylinders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Engine components</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Throttle bodies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Small precision parts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary border-t border-primary/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-white uppercase mb-6">
            Need Ultrasonic Cleaning?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your ultrasonic cleaning needs. We'll restore your components to pristine condition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:07881274193">
              <TechButton size="lg" className="gap-2">
                <Phone className="w-5 h-5" />
                Call Us: 07881 274193
              </TechButton>
            </a>
            <a href="mailto:blmotorcyclesltd@gmail.com">
              <TechButton variant="outline" size="lg" className="gap-2">
                <Mail className="w-5 h-5" />
                Email Us
              </TechButton>
            </a>
          </div>
          <div className="mt-8">
            <Link href="/">
              <a className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2">
                <ArrowRight className="w-4 h-4 rotate-180" />
                Back to Home
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
