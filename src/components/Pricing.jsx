const Pricing = () => {
  const plans = [
    {
      tier: 'Starter',
      price: '25,000',
      period: '/mo',
      desc: 'Perfect for small businesses and startups looking to establish their digital presence.',
      features: [
        'SEO Audit & On-Page Optimisation',
        '1 Paid Channel (Google or Meta)',
        'Social Media (2 platforms)',
        'Monthly Performance Report',
        'Dedicated Account Manager'
      ],
      featured: false,
      buttonText: 'Get Started',
      buttonStyle: 'outline'
    },
    {
      tier: 'Growth',
      price: '65,000',
      period: '/mo',
      desc: 'For scaling brands ready to dominate their market with a full-funnel approach.',
      features: [
        'Full SEO + Content Strategy',
        'All Paid Channels (Google + Meta)',
        'Social Media Management (4 platforms)',
        'Email Marketing & Automation',
        'Conversion Rate Optimisation',
        'Weekly Calls + Live Dashboard'
      ],
      featured: true,
      buttonText: 'Start Growing',
      buttonStyle: 'solid'
    },
    {
      tier: 'Enterprise',
      price: 'Custom',
      period: '',
      desc: 'Full-service digital marketing for established brands with complex needs and ambitious targets.',
      features: [
        'Everything in Growth',
        'Dedicated Strategy Team',
        'Brand Identity & Creative Production',
        'Custom Reporting & BI Integration',
        'Priority Support & SLA',
        'Quarterly Business Reviews'
      ],
      featured: false,
      buttonText: 'Talk to Sales',
      buttonStyle: 'outline'
    }
  ];

  return (
    <section className="py-24 px-8 md:px-16 border-b border-white/10 bg-[#0A0A0F]" id="pricing">
      <div className="font-['DM_Mono'] text-[0.7rem] tracking-wider text-[#FF8A5B] uppercase mb-4">Investment</div>
      <h2 className="font-['Bebas_Neue'] text-[clamp(2.5rem,5vw,4rem)] tracking-wide leading-none mb-4 text-white">
        TRANSPARENT<br/>PRICING.
      </h2>
      <p className="text-[#888880] max-w-[500px] font-light leading-relaxed">
        Simple, scalable plans with no hidden fees. Pick the right tier for your growth stage.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {plans.map((plan, i) => (
          <div key={i} className={`bg-[#111118] border rounded p-10 relative transition-all hover:-translate-y-1 ${
            plan.featured ? 'border-[#E85C2A] bg-[#18181F]' : 'border-white/15'
          }`}>
            {plan.featured && (
              <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-[#E85C2A] text-white font-['DM_Mono'] text-[0.65rem] tracking-wider px-3 py-1 rounded-b">
                MOST POPULAR
              </div>
            )}
            <div className="font-['DM_Mono'] text-[0.7rem] tracking-wider text-[#666660] uppercase mb-3">{plan.tier}</div>
            <div className="font-['Bebas_Neue'] text-5xl tracking-wide leading-none mb-1 text-white">
              {plan.price !== 'Custom' && <span className="text-2xl align-top inline-block mt-1 text-white">₹</span>}
              <span className="text-white">{plan.price}</span>
              {plan.period && <span className="font-['DM_Sans'] text-sm text-[#888880] font-light">{plan.period}</span>}
            </div>
            <p className="text-sm text-[#888880] mb-7 leading-relaxed">{plan.desc}</p>
            
            <ul className="list-none flex flex-col gap-2.5 mb-8">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="text-sm text-[#888880] flex items-center gap-2">
                  <span className="text-[#1BC49A] text-xs">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            
            <a 
              href="#" 
              className={`w-full block py-3 rounded text-center transition-all ${
                plan.buttonStyle === 'solid' 
                  ? 'bg-[#E85C2A] border border-[#E85C2A] text-white hover:bg-[#FF8A5B]' 
                  : 'bg-transparent border border-white/20 text-white hover:border-[#888880] hover:bg-[#18181F]'
              }`}
            >
              {plan.buttonText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;