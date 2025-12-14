import { Link } from "wouter";
import { Wrench, Package, Droplet, ArrowRight, Star, ShieldCheck, Truck, Settings, Gauge, Zap, ShoppingBag } from "lucide-react";
import { TechButton, TechCard, SectionTitle } from "@/components/ui/tech-components";

export default function Home() {
  const services = [
    { 
      icon: Wrench, 
      title: 'Service & Repairs', 
      desc: 'Expert maintenance for all makes and models. From routine servicing to full diagnostics, our experienced team keeps your bike running at its peak. Serving riders across Portsmouth, Fareham, and the wider Hampshire area.',
      image: '/images/user-image-6.jpg',
      link: '/services/service-repairs'
    },
    { 
      icon: Settings, 
      title: 'Specialist Restoration', 
      desc: 'Dedicated restoration services including specialist brake restoration and carburetor restoration. We are the go-to carb specialists in Portsmouth and Southampton for bringing classic components back to life.',
      image: '/images/mechanic-work.jpg',
      link: '/services/specialist-restoration'
    },
    { 
      icon: Gauge, 
      title: 'Carb Specialist', 
      desc: 'Expert carburetor and throttle body specialists. Carbs are stripped, ultrasonic cleaned, serviced, and precision balanced for optimal performance. We are the go-to carb specialists in Portsmouth and Southampton.',
      image: '/images/balancing-gauges.jpg',
      link: '/services/carb-specialist'
    },
    { 
      icon: Zap, 
      title: 'Ultrasonic Cleaning', 
      desc: 'Deep cleaning for intricate parts using advanced ultrasonic technology, perfect for carburetors, injectors, and brake components.',
      image: '/images/ultrasonic-clean.jpg',
      link: '/services/ultrasonic-cleaning'
    },
    { 
      icon: Package, 
      title: 'New & Used Parts', 
      desc: 'Quality parts at competitive prices. We stock a wide range of second-hand motorcycle spares, fully inspected and ready for your ride.',
      image: '/images/user-image-11.jpg',
      link: 'https://ebay.us/m/zVcLaj'
    },
    { 
      icon: Droplet, 
      title: 'Brake Restoration', 
      desc: 'Complete brake system restoration and rebuilding. We strip, clean, and rebuild calipers and master cylinders to factory standards for safety and performance.',
      image: '/images/user-image-10.jpg',
      link: '/services/brake-restoration'
    },
      {
        icon: Settings,
        title: 'Recommissioning',
        desc: 'Getting your bike back on the road after years of storage. We handle everything from fuel system cleaning to safety checks to get your machine running reliably again.',
        image: '/images/commissioning-new.jpg',
        link: '/services/recommissioning'
      }
    ];

  const galleryImages = [
    '/images/user-image-1.png',
    '/images/user-image-2.jpg',
    '/images/user-image-3.png',
    '/images/user-image-12.jpg',
    '/images/user-image-13.jpg',
    '/images/user-image-4.jpg'
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg-v2.jpg" 
            alt="Motorcycle workshop offering expert repairs and servicing in Hampshire and Portsmouth" 
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
              alt="B&L Motorcycles - Trusted Motorcycle Parts and Repairs in Fareham" 
              className="w-64 h-auto mx-auto mb-8 drop-shadow-[0_0_25px_rgba(211,192,101,0.4)]" 
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
              At B&L Motorcycles, we specialise in supplying high-quality used motorcycle parts at affordable prices. Based in Hampshire, we’re a family-run business passionate about bikes, offering expert service to riders in Portsmouth, Fareham, Gosport, Havant, Southampton, Petersfield, and Chichester.
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
                alt="Inside our motorcycle repair workshop in Fareham, serving Gosport and Havant" 
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
              <a 
                key={i}
                href={service.link} 
                target={service.link?.startsWith('http') ? '_blank' : '_self'}
                rel={service.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block h-full"
              >
                <TechCard className="h-full flex flex-col overflow-hidden group p-0 cursor-pointer hover:border-primary/50 transition-all">
                <div className="h-48 w-full overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={`${service.title} - Specialist motorcycle service in Hampshire`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-black border border-primary/30 flex items-center justify-center group-hover:border-primary transition-all duration-300 z-10">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-heading font-bold text-white uppercase mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {service.desc}
                  </p>
                </div>
              </TechCard>
              </a>
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

      {/* Shop Section */}
      <section className="py-20 bg-black border-y border-primary/10">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle subtitle="Browse Our Inventory">Shop Parts</SectionTitle>
          
          <div className="max-w-4xl mx-auto bg-card border border-primary/20 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -ml-16 -mb-16" />
            
            <ShoppingBag className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-heading font-bold text-white uppercase mb-4">
              Online Store Coming Soon
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              In the meantime, contact us for any requests or check our eBay store. <br/>
              <span className="text-primary font-bold">We have 10s of thousands of products available.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <TechButton size="lg">Contact Us</TechButton>
              </Link>
              <a href="https://ebay.us/m/zVcLaj" target="_blank" rel="noopener noreferrer">
                <TechButton variant="outline" size="lg" className="gap-2">
                  Visit eBay Store <ArrowRight className="w-4 h-4" />
                </TechButton>
              </a>
            </div>
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
                src="/images/products-new.jpg"
                alt="Quality used motorcycle parts and spares available for delivery across the UK"
                className="relative w-full h-auto border border-gray-800 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-secondary relative">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Our Work">Gallery</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative group overflow-hidden h-64 md:h-80">
                <img 
                  src={img} 
                  alt={`Custom motorcycle build and restoration project by BL Motorcycles - Image ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center border border-primary/20">
                  <p className="text-primary font-heading font-bold uppercase tracking-wider">View Project</p>
                </div>
              </div>
            ))}
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
