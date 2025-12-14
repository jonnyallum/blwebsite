import { Link } from "wouter";
import { Gauge, Phone, Mail, ArrowRight } from "lucide-react";
import { TechButton } from "@/components/ui/tech-components";

export default function CarbSpecialist() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-black border-2 border-primary/30 mb-6">
              <Gauge className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase mb-6">
              Carb Specialist
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Expert carburetor and throttle body specialists. We are the go-to carb specialists in Portsmouth and Southampton.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img
                src="/images/balancing-gauges.jpg"
                alt="Carburetor balancing and specialist services"
                className="w-full h-auto border border-gray-800"
              />
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold text-white uppercase mb-6">
                Professional <span className="text-primary">Carburetor Services</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  B&L Motorcycles specializes in carburetor and throttle body servicing. Our comprehensive carb service ensures your motorcycle runs smoothly with optimal fuel delivery and engine performance.
                </p>
                <p>
                  We are recognized as the go-to carburetor specialists in Portsmouth, Southampton, and across Hampshire. Whether you have a classic bike with multiple carbs or a modern machine with throttle bodies, we have the expertise and equipment to get it running perfectly.
                </p>
                <h3 className="text-xl font-heading font-bold text-primary uppercase mt-8 mb-4">
                  Our Carb Service Process:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Stripping:</strong> Complete disassembly of carburetors or throttle bodies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Ultrasonic Cleaning:</strong> Deep cleaning using advanced ultrasonic technology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Servicing:</strong> Replacement of jets, gaskets, and worn components</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Precision Balancing:</strong> Professional balancing for smooth power delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Testing:</strong> Full testing and adjustment for optimal performance</span>
                  </li>
                </ul>
                <p className="pt-4">
                  From single carbs to complex multi-carb setups, we handle all carburetor and throttle body work with precision and care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary border-t border-primary/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-white uppercase mb-6">
            Need Carb Specialist Services?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your carburetor or throttle body servicing needs. We're here to help optimize your bike's performance.
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
