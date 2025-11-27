import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Target, 
  BarChart, 
  Smartphone, 
  Globe, 
  Zap, 
  Menu, 
  X, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin,
  CheckCircle2,
  Rocket,
  ShoppingBag,
  Building2,
  ChevronRight,
  Star
} from 'lucide-react';

/* --- BRANDING & UI COMPONENTS --- */

// Custom Gold N Logo Component (Fallback if image doesn't load)
const NovaxLogo = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" stroke="url(#gold-gradient)" strokeWidth="5" />
    <path d="M30 75 V 25 L 60 55 L 60 25" stroke="url(#gold-gradient)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M60 55 L 80 25" stroke="url(#gold-gradient)" strokeWidth="6" strokeLinecap="round" />
    <path d="M75 25 L 85 25 L 85 35" stroke="url(#gold-gradient)" strokeWidth="4" strokeLinecap="round" />
    <defs>
      <linearGradient id="gold-gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FBBF24" />
        <stop offset="0.5" stopColor="#D97706" />
        <stop offset="1" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
  </svg>
);

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/972527004686" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-8 left-8 z-50 group flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-amber-500 to-yellow-300 rounded-full shadow-[0_0_20px_rgba(251,191,36,0.4)] hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] hover:scale-110 transition-all duration-300 animate-bounce-slow"
    aria-label="Chat on WhatsApp"
  >
    <div className="absolute inset-0 rounded-full bg-amber-400 opacity-20 animate-ping"></div>
    {/* WhatsApp Icon SVG */}
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-black" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </a>
);

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center px-8 py-3 rounded-lg font-bold text-sm tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black uppercase";
  
  const variants = {
    primary: "bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-black shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] hover:scale-105 border border-yellow-400/20",
    secondary: "bg-transparent border border-amber-500/50 text-amber-400 hover:bg-amber-950/30 hover:border-amber-400 hover:text-amber-300",
    outline: "bg-transparent border border-gray-700 text-gray-300 hover:bg-white/5 hover:border-gray-500"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const SectionHeading = ({ badge, title, subtitle, align = 'center' }) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'} relative z-10`}>
    {badge && (
      <span className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest text-amber-400 uppercase bg-amber-950/40 border border-amber-500/20 rounded-full">
        {badge}
      </span>
    )}
    <h2 className="mb-4 text-3xl md:text-5xl font-bold tracking-tight text-white">
      {title.split(' ').map((word, i) => (
        <span key={i} className={i % 2 !== 0 ? "text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-500" : ""}>
          {word} 
        </span>
      ))}
    </h2>
    <div className={`h-1 w-20 bg-gradient-to-r from-amber-400 to-transparent mb-6 ${align === 'center' ? 'mx-auto' : ''}`}></div>
    <p className={`max-w-2xl text-lg text-gray-400 ${align === 'center' ? 'mx-auto' : ''}`}>
      {subtitle}
    </p>
  </div>
);

/* --- PORTFOLIO & SERVICE COMPONENTS --- */

const PortfolioCard = ({ icon: Icon, title, description, badge }) => (
  <div className="group relative bg-neutral-900/50 border border-gray-800 hover:border-amber-500/50 rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(251,191,36,0.1)]">
    {/* Glow Effect */}
    <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div className="p-8 relative z-10 flex flex-col h-full">
      <div className="mb-6 flex justify-between items-start">
        <div className="p-4 bg-black border border-gray-800 rounded-lg group-hover:border-amber-500/30 transition-colors">
          <Icon className="w-8 h-8 text-amber-400" />
        </div>
        <span className="px-3 py-1 text-xs font-medium text-amber-300 bg-amber-950/30 border border-amber-500/20 rounded-full">
          {badge}
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">{title}</h3>
      <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">{description}</p>
      
      <a href="#" className="inline-flex items-center text-sm font-bold text-amber-500 hover:text-amber-300 uppercase tracking-wide">
        View Case Study <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  </div>
);

const ServiceCard = ({ icon: Icon, title, description, features }) => (
  <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-gray-800 p-8 rounded-2xl hover:border-amber-500/30 transition-all duration-300 group">
    <div className="w-14 h-14 bg-black border border-gray-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-amber-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
      <Icon className="w-7 h-7 text-amber-400" />
    </div>
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <p className="text-gray-400 mb-6">{description}</p>
    <ul className="space-y-3">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start text-sm text-gray-300">
          <CheckCircle2 className="w-5 h-5 mr-2 text-amber-500 shrink-0" />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

/* --- MAIN SECTIONS --- */

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center space-x-3 group">
            {/* Logo Image with Fallback (51732.png must be in the public directory) */}
            <div className="relative w-12 h-12">
               <img 
                  src="51732.png" 
                  alt="Novax Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='block'}}
               />
               <NovaxLogo className="hidden w-full h-full" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white uppercase font-display">
              Novax
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {['Services', 'Portfolio', 'Process', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-300 hover:text-amber-400 transition-colors uppercase tracking-wide">
                {item}
              </a>
            ))}
            <Button variant="primary" className="px-6 py-2 text-xs">
              Start Project
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-gray-800 p-4 flex flex-col space-y-4">
          {['Services', 'Portfolio', 'Process', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-amber-400 py-2 block text-center uppercase tracking-wide font-medium">
              {item}
            </a>
          ))}
          <Button variant="primary" className="w-full">Start Project</Button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
    {/* Abstract Gold Background Effects */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[128px] animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-[128px] animate-pulse delay-1000"></div>
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-900/10 backdrop-blur-sm mb-8 animate-[fadeIn_1s_ease-out]">
        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
        <span className="text-sm text-amber-200 font-medium tracking-wide uppercase">Premium Digital Solutions</span>
      </div>
      
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-8 leading-tight animate-[fadeIn_1s_ease-out_0.2s_both]">
        We Build Digital <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 drop-shadow-[0_0_30px_rgba(245,158,11,0.3)]">
          Growth Engines
        </span>
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-[fadeIn_1s_ease-out_0.4s_both]">
        Novax Digital Marketing transforms businesses with high-end websites and strategic lead generation systems.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center animate-[fadeIn_1s_ease-out_0.6s_both]">
        <Button variant="primary" className="text-lg px-10 py-4">
          Start Your Project
        </Button>
        <Button variant="secondary" className="text-lg px-10 py-4">
          View Our Work
        </Button>
      </div>

      {/* Hero Stats/Social Proof */}
      <div className="mt-20 pt-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-[fadeIn_1s_ease-out_0.8s_both]">
        {[
          { label: "Revenue Generated", value: "$50M+" },
          { label: "Active Clients", value: "150+" },
          { label: "Lead Increase", value: "300%" },
          { label: "Design Awards", value: "12" }
        ].map((stat, i) => (
          <div key={i}>
            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Portfolio = () => (
  <section id="portfolio" className="py-24 bg-neutral-950 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading 
        badge="Our Work"
        title="Featured Projects"
        subtitle="Explore how we've helped ambitious brands scale through design and data."
      />
      
      <div className="grid md:grid-cols-3 gap-8">
        <PortfolioCard 
          icon={ShoppingBag}
          title="E-commerce Redesign"
          badge="Design & Dev"
          description="A complete overhaul for a luxury fashion brand, resulting in a 145% increase in mobile conversion rates."
        />
        <PortfolioCard 
          icon={Rocket}
          title="SaaS Lead Gen"
          badge="Marketing"
          description="Automated funnel implementation that reduced CPA by 40% while doubling qualified demo bookings."
        />
        <PortfolioCard 
          icon={Building2}
          title="Corporate Branding"
          badge="Strategy"
          description="Identity and web presence for a fintech unicorn, establishing trust and authority in a crowded market."
        />
      </div>

      <div className="mt-16 text-center">
        <Button variant="secondary" className="px-10">View Full Portfolio</Button>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-24 bg-black border-y border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading 
        badge="Expertise"
        title="Elite Digital Services"
        subtitle="Precision-engineered solutions for modern business challenges."
      />

      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        <ServiceCard 
          icon={Globe}
          title="Website Development"
          description="We build digital assets that perform. Fast, secure, and stunningly designed to capture attention and convert visitors."
          features={[
            "Next-Gen React & Framer Motion",
            "High-Performance SEO Architecture",
            "Responsive Mobile-First Design",
            "CMS & E-commerce Integration"
          ]}
        />
        <ServiceCard 
          icon={Target}
          title="Lead Generation"
          description="Data-driven campaigns that put your brand in front of the right people at the right time."
          features={[
            "PPC & Social Advertising Management",
            "Conversion Rate Optimization (CRO)",
            "Marketing Automation & Email Flows",
            "Deep Analytics & ROI Tracking"
          ]}
        />
      </div>
    </div>
  </section>
);

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-neutral-900 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-500/5 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-black/50 backdrop-blur-lg border border-gray-800 p-8 md:p-12 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <SectionHeading 
            title="Start Your Transformation"
            subtitle="Ready to dominate your market? Fill out the form below."
          />

          <form className="space-y-6 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-amber-500 uppercase tracking-wide">First Name</label>
                <input type="text" className="w-full bg-neutral-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all placeholder-gray-600" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-amber-500 uppercase tracking-wide">Last Name</label>
                <input type="text" className="w-full bg-neutral-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all placeholder-gray-600" placeholder="Doe" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-amber-500 uppercase tracking-wide">Email Address</label>
              <input type="email" className="w-full bg-neutral-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all placeholder-gray-600" placeholder="john@company.com" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-amber-500 uppercase tracking-wide">Project Details</label>
              <textarea rows="4" className="w-full bg-neutral-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all placeholder-gray-600" placeholder="Tell us about your goals..."></textarea>
            </div>

            <Button className="w-full py-4 text-base shadow-amber-500/20">Send Message</Button>
          </form>

          <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8 text-gray-400 border-t border-gray-800 pt-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-500/10 rounded-full text-amber-500"><Mail size={18} /></div>
              <span>hello@novax.com</span>
            </div>
            <div className="flex items-center gap-3">
               <div className="p-2 bg-amber-500/10 rounded-full text-amber-500"><Phone size={18} /></div>
              <span>+1 (555) 000-0000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <NovaxLogo className="w-8 h-8" />
          <span className="text-xl font-bold tracking-tight uppercase">Novax</span>
        </div>
        <div className="flex space-x-6 text-sm text-gray-400">
           <a href="#" className="hover:text-amber-400 transition-colors">Instagram</a>
           <a href="#" className="hover:text-amber-400 transition-colors">LinkedIn</a>
           <a href="#" className="hover:text-amber-400 transition-colors">Twitter</a>
        </div>
      </div>
      <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
        <p>&copy; {new Date().getFullYear()} Novax Digital Marketing. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen bg-black font-sans selection:bg-amber-500/30 selection:text-amber-200">
      <style>{`
        /* Keyframe for Hero fade-in animation */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        /* Keyframe for WhatsApp button bounce */
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-8px) scale(1.02); }
        }
      `}</style>
      <Navbar />
      <WhatsAppButton />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;