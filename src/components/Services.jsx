const Services = () => {
  const services = [
    { num: '01', icon: '🔍', name: 'SEO & CONTENT STRATEGY', desc: 'Rank higher, attract more qualified traffic, and own your niche with data-backed content that converts. Technical SEO, on-page, and link building.' },
    { num: '02', icon: '📣', name: 'PAID MEDIA & PPC', desc: 'Google, Meta, LinkedIn, YouTube — we manage campaigns that consistently deliver leads at the lowest possible cost per acquisition.' },
    { num: '03', icon: '📱', name: 'SOCIAL MEDIA MANAGEMENT', desc: 'Build a loyal audience and generate demand through strategic, platform-native content that actually drives business outcomes.' },
    { num: '04', icon: '🎨', name: 'BRAND IDENTITY & DESIGN', desc: 'From logo to full brand guidelines — we craft visual identities that make you unforgettable and build trust on first impression.' },
    { num: '05', icon: '🌐', name: 'WEB DESIGN & DEVELOPMENT', desc: 'High-performance, conversion-optimised websites built to load fast, rank well, and turn visitors into paying customers.' },
    { num: '06', icon: '📧', name: 'EMAIL MARKETING & CRM', desc: 'Automated sequences, drip campaigns, and CRM workflows that nurture leads and drive repeat revenue on autopilot.' }
  ];

  return (
    <section className="py-24 px-8 md:px-16 border-b border-white/10 bg-[#0A0A0F]" id="services">
      <div className="font-['DM_Mono'] text-[0.7rem] tracking-wider text-[#FF8A5B] uppercase mb-4">What We Do</div>
      <h2 className="font-['Bebas_Neue'] text-[clamp(2.5rem,5vw,4rem)] tracking-wide leading-none mb-4 text-white">
        FULL-STACK<br/>DIGITAL MARKETING.
      </h2>
      <p className="text-[#888880] max-w-[500px] font-light leading-relaxed">
        Every service is tied to a measurable outcome. No vanity metrics, no fluff — just results.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 mt-12">
        {services.map((service, i) => (
          <div key={i} className="bg-[#0A0A0F] p-10 transition-all hover:bg-[#111118] relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E85C2A] transition-all duration-300 group-hover:w-full"></div>
            <div className="font-['DM_Mono'] text-[0.65rem] text-[#666660] tracking-wider mb-5">{service.num}</div>
            <span className="text-3xl mb-4 block">{service.icon}</span>
            <div className="font-['Bebas_Neue'] text-2xl tracking-wide mb-3 leading-tight text-white">{service.name}</div>
            <p className="text-sm text-[#888880] leading-relaxed">{service.desc}</p>
            <a href="#" className="inline-flex items-center gap-1.5 mt-5 font-['DM_Mono'] text-[0.72rem] tracking-wider text-[#FF8A5B] transition-all hover:gap-2.5">
              Learn more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;