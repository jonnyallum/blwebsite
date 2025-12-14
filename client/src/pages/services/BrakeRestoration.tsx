import { Link } from "wouter";
import { Droplet, Phone, Mail, ArrowRight } from "lucide-react";
import { TechButton } from "@/components/ui/tech-components";

export default function BrakeRestoration() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-black border-2 border-primary/30 mb-6">
              <Droplet className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase mb-6">
              Brake Restoration
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Complete brake system restoration and rebuilding to factory standards for safety and performance.
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
                src="/images/user-image-10.jpg"
                alt="Brake restoration and rebuilding services"
                className="w-full h-auto border border-gray-800"
              />
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold text-white uppercase mb-6">
                Specialist <span className="text-primary">Brake Restoration</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  At B&L Motorcycles, we specialize in complete brake system restoration and rebuilding. Your brakes are critical for safety, and we take that responsibility seriously. We strip, clean, and rebuild calipers and master cylinders to factory standards.
                </p>
                <p>
                  Whether you're restoring a classic motorcycle or need to refresh the braking system on your daily rider, our brake restoration service brings your components back to life with like-new performance.
                </p>
                <h3 className="text-xl font-heading font-bold text-primary uppercase mt-8 mb-4">
                  Our Brake Restoration Services:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Complete caliper stripping and cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Master cylinder rebuilding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Piston and seal replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Ultrasonic cleaning of brake components</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Brake line inspection and replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Full system testing and bleeding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Performance upgrades available</span>
                  </li>
                </ul>
                <p className="pt-4">
                  We're recognized as brake restoration specialists in Portsmouth and Southampton, serving riders across Hampshire.
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
            Ready to Restore Your Brakes?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your brake restoration needs. Safety is our priority, and we're here to help.
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
