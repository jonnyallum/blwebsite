import { Link } from "wouter";
import { Wrench, Package, Droplet, ArrowRight, Star, ShieldCheck, Truck } from "lucide-react";
import { TechButton, TechCard, SectionTitle } from "@/components/ui/tech-components";

export default function Home() {
  const services = [
    { 
      icon: Wrench, 
      title: 'Service & Repairs', 
      desc: 'Expert maintenance for all makes and models. From routine servicing to complex engine rebuilds, our experienced team keeps your bike running at its peak.' 
    },
    { 
      icon: Package, 
      title: 'New & Used Parts', 
      desc: 'Quality parts at competitive prices. We stock a wide range of second-hand motorcycle spares, fully inspected and ready for your ride.' 
    },
    { 
      icon: Droplet, 
      title: 'Engine Oil', 
      desc: 'Premium oils and fluids for optimal performance. We supply top-grade lubricants to ensure your engine stays protected and powerful.' 
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Motorcycle Workshop" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="mb-8 animate-in fade-in zoom-in duration-1000">
            <img 
              src="/images/logo-transparent.png" 
              alt="B&L Motorcycles Logo" 
              className="w-32 h-auto mx-auto mb-6 drop-shadow-[0_0_15px_rgba(211,192,101,0.3)]" 
            />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white uppercase tracking-tight mb-2">
              Welcome to <span className="text-primary">BL Motorcycles</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-mono tracking-widest uppercase mb-8">
              Quality Used Motorcycle Parts & Repairs
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-12 animate-in slide-in-from-bottom-10 duration-1000 delay-300">
            <p className="text-gray-300 leading-relaxed text-lg mb-8">
              At B&L Motorcycles, we specialise in supplying high-quality used motorcycle parts at affordable prices. Based in Hampshire, we’re a family-run business passionate about bikes, offering expert service, fast UK delivery, and reliable repairs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop">
                <TechButton size="lg" className="w-full sm:w-auto">
                  Shop Parts
                </TechButton>
              </Link>
              <Link href="/services">
                <TechButton variant="outline" size="lg" className="w-full sm:w-auto">
                  Garage Services
                </TechButton>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* Intro / Mission Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-lg transform -rotate-2" />
              <img 
                src="/images/user-image-4.jpg" 
                alt="Our Workshop" 
                className="relative rounded-lg shadow-2xl border border-gray-800 grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-card p-6 border border-primary/20 shadow-xl hidden md:block">
                <p className="font-heading font-bold text-4xl text-primary mb-1">2020</p>
                <p className="text-xs font-mono uppercase tracking-widest text-gray-400">Established</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase mb-6">
                Our <span className="text-primary">Story</span>
              </h2>
              <div className="space-y-6 text-gray-400 leading-relaxed">
                <p>
                  At B&L Motorcycles, we live and breathe motorcycles and the lifestyle that comes with them. Our founders have been passionate riders for over 20 years, gaining hands-on experience and a deep understanding of the biking world.
                </p>
                <p>
                  B&L Motorcycles Ltd was created to share that passion, offering fellow riders access to quality used motorcycle parts, expert repairs, and unbeatable service. Whether you're restoring a classic bike or keeping your pride and joy on the road, we’re here to support every rider's journey with affordable parts, trusted advice, and a love for two wheels.
                </p>
                <p>
                  Founded in 2020 during the Covid-19 pandemic, B&L Motorcycles has grown into a trusted name in the motorcycle community. Whether you’re a home mechanic or a trade buyer, we’re here to keep your bike on the road with parts you can trust and service you can rely on.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center p-4 border border-gray-800 bg-card/50">
                  <ShieldCheck className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-xs font-mono uppercase tracking-wider">Trusted Quality</p>
                </div>
                <div className="text-center p-4 border border-gray-800 bg-card/50">
                  <Truck className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-xs font-mono uppercase tracking-wider">Fast UK Delivery</p>
                </div>
                <div className="text-center p-4 border border-gray-800 bg-card/50">
                  <Star className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-xs font-mono uppercase tracking-wider">Expert Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary relative">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/services-bg.jpg')] bg-cover bg-center bg-fixed mix-blend-overlay" />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle subtitle="What We Do">Our Services</SectionTitle>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <TechCard key={i} className="h-full flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-black border border-primary/30 flex items-center justify-center mb-6 group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white uppercase mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </TechCard>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              From carburettors and brake systems to a wide range of second-hand motorcycle spares, our online store is fully stocked and easy to use. You can also visit our garage to view parts, collect orders, or get professional servicing from our experienced team.
            </p>
            <Link href="/services">
              <TechButton variant="outline">View Full Services</TechButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Shop With Confidence">Our Products</SectionTitle>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-heading font-bold text-white uppercase mb-4">
                High-Quality Parts & Accessories
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                We stock a wide range of high-quality motorcycle parts and accessories, including exhaust systems, helmets, and premium riding gear. Every product we offer is carefully selected to meet our high standards for performance, durability, and value — so you can ride with confidence knowing you're getting the best.
              </p>
              <a 
                href="https://ebay.us/m/zVcLaj" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <TechButton className="gap-2">
                  Visit eBay Store <ArrowRight className="w-4 h-4" />
                </TechButton>
              </a>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="absolute inset-0 bg-primary/10 transform translate-x-4 translate-y-4 border border-primary/20" />
              <img 
                src="/images/user-image-5.jpg" 
                alt="Motorcycle Parts" 
                className="relative w-full h-auto border border-gray-800 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section (New) */}
      <section className="py-20 bg-secondary relative">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Our Work">Gallery</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative group overflow-hidden h-64 md:h-80">
              <img 
                src="/images/user-image-1.png" 
                alt="Gallery Image 1" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center border border-primary/20">
                <p className="text-primary font-heading font-bold uppercase tracking-wider">View Project</p>
              </div>
            </div>
            <div className="relative group overflow-hidden h-64 md:h-80">
              <img 
                src="/images/user-image-2.jpg" 
                alt="Gallery Image 2" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center border border-primary/20">
                <p className="text-primary font-heading font-bold uppercase tracking-wider">View Project</p>
              </div>
            </div>
            <div className="relative group overflow-hidden h-64 md:h-80">
              <img 
                src="/images/user-image-3.png" 
                alt="Gallery Image 3" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center border border-primary/20">
                <p className="text-primary font-heading font-bold uppercase tracking-wider">View Project</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase mb-8">
            Our <span className="text-primary">Mission</span>
          </h2>
          <div className="relative">
            <div className="absolute -top-8 -left-8 text-6xl text-primary/20 font-serif">"</div>
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed italic">
              At B&L Motorcycles Ltd, our mission is to deliver the best experience for every rider shopping for quality used motorcycle parts and accessories. We’re committed to providing outstanding customer service, fast UK shipping, and reliable support from start to finish. Whether you're maintaining your daily ride or restoring a classic motorbike, we aim to make the process simple, affordable, and stress-free — so you can get back on the road with confidence.
            </p>
            <div className="absolute -bottom-8 -right-8 text-6xl text-primary/20 font-serif">"</div>
          </div>
        </div>
      </section>
    </div>
  );
}
