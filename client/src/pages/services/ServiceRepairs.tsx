import { Link } from "wouter";
import { Wrench, Phone, Mail, ArrowRight } from "lucide-react";
import { TechButton, SectionTitle } from "@/components/ui/tech-components";

export default function ServiceRepairs() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-black border-2 border-primary/30 mb-6">
              <Wrench className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase mb-6">
              Service & Repairs
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Expert maintenance for all makes and models. From routine servicing to full diagnostics, our experienced team keeps your bike running at its peak.
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
                src="/images/user-image-6.jpg"
                alt="Motorcycle service and repairs in Hampshire"
                className="w-full h-auto border border-gray-800"
              />
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold text-white uppercase mb-6">
                Professional Motorcycle <span className="text-primary">Servicing</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  At B&L Motorcycles, we provide comprehensive servicing and repair solutions for all makes and models of motorcycles. Our experienced technicians are passionate about bikes and dedicated to keeping your machine running at its absolute best.
                </p>
                <p>
                  From routine oil changes and brake inspections to full diagnostics and complex repairs, we handle it all with precision and care. We serve riders across Portsmouth, Fareham, Gosport, Havant, Southampton, Petersfield, Chichester, and the wider Hampshire area.
                </p>
                <h3 className="text-xl font-heading font-bold text-primary uppercase mt-8 mb-4">
                  Our Services Include:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Routine maintenance and servicing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Full diagnostic checks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Engine repairs and rebuilds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Electrical system diagnostics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Brake system servicing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Chain and sprocket replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Suspension setup and maintenance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary border-t border-primary/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-white uppercase mb-6">
            Ready to Book Your Service?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to schedule your motorcycle service or repair. We're here to help keep your bike running smoothly.
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
