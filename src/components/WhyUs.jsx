import { useEffect, useRef } from 'react';

const WhyUs = () => {
  const whyItems = [
    { title: 'ROI-First Approach', desc: 'Every strategy we build starts with your revenue goals. We don\'t celebrate vanity metrics — we celebrate growth in your bottom line.' },
    { title: 'Dedicated Account Team', desc: 'You get a senior strategist, media buyer, and content lead assigned specifically to your account — no juniors, no outsourcing.' },
    { title: 'Weekly Reporting, Full Transparency', desc: 'Live dashboards, weekly calls, and monthly deep-dives. You\'ll always know exactly where your budget is going and what it\'s producing.' },
    { title: 'No Long-Term Lock-ins', desc: 'We earn your business month after month with results. Rolling contracts because we\'re confident we\'ll keep delivering.' }
  ];

  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bars = entry.target.querySelectorAll('.bar-fill');
          bars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            bar.style.transition = 'width 1.2s ease';
            setTimeout(() => {
              bar.style.width = width;
            }, 100);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <section className="py-24 px-8 md:px-16 border-b border-white/10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center bg-[#0A0A0F]">
      <div>
        <div className="font-['DM_Mono'] text-[0.7rem] tracking-wider text-[#FF8A5B] uppercase mb-4">Why Trendox</div>
        <h2 className="font-['Bebas_Neue'] text-[clamp(2.5rem,5vw,4rem)] tracking-wide leading-none mb-4 text-white">
          NOT JUST AN<br/>AGENCY.
        </h2>
        <p className="text-[#888880] max-w-[500px] font-light leading-relaxed">
          We embed ourselves in your business, align with your goals, and work as an extension of your internal team.
        </p>
        
        <div className="flex flex-col gap-6 mt-10">
          {whyItems.map((item, i) => (
            <div key={i} className="flex gap-4 items-start p-5 bg-[#111118] border border-white/10 rounded transition-colors hover:border-white/14">
              <div className="w-2 h-2 rounded-full bg-[#E85C2A] shrink-0 mt-1.5"></div>
              <div>
                <div className="text-sm font-medium mb-1 text-white">{item.title}</div>
                <div className="text-sm text-[#888880] leading-relaxed">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="relative" ref={cardRef}>
        <div className="bg-[#18181F] border border-white/14 rounded-lg p-10 relative overflow-hidden">
          <div className="absolute -top-[30%] -right-[20%] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(232,92,42,0.1)_0%,transparent_70%)] pointer-events-none"></div>
          <div className="font-['DM_Mono'] text-[0.65rem] tracking-wider text-[#666660] uppercase mb-6">Client Performance Dashboard — 2025</div>
          <div className="font-['Bebas_Neue'] text-7xl text-white leading-none mb-1">
            3.8<span className="text-[#E85C2A]">×</span>
          </div>
          <div className="font-['DM_Mono'] text-[0.7rem] text-[#888880] tracking-wider mb-2">AVERAGE CLIENT ROI</div>
          <p className="text-sm text-[#888880] leading-relaxed mb-8">
            Across 500+ active campaigns, our clients consistently outperform industry benchmarks in both lead quality and conversion rate.
          </p>
          
          <div className="mt-6">
            <div className="mb-4">
              <div className="flex justify-between font-['DM_Mono'] text-[0.68rem] text-[#888880] mb-1.5">
                <span>Organic Traffic Growth</span>
                <span className="text-[#FF8A5B]">+187%</span>
              </div>
              <div className="h-1 bg-white/14 rounded overflow-hidden">
                <div className="bar-fill h-full rounded bg-gradient-to-r from-[#E85C2A] to-[#FF8A5B]" style={{width: '78%'}}></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between font-['DM_Mono'] text-[0.68rem] text-[#888880] mb-1.5">
                <span>Paid Media ROAS</span>
                <span className="text-[#FF8A5B]">4.6×</span>
              </div>
              <div className="h-1 bg-white/14 rounded overflow-hidden">
                <div className="bar-fill h-full rounded bg-gradient-to-r from-[#E85C2A] to-[#FF8A5B]" style={{width: '92%'}}></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between font-['DM_Mono'] text-[0.68rem] text-[#888880] mb-1.5">
                <span>Lead Quality Score</span>
                <span className="text-[#FF8A5B]">91/100</span>
              </div>
              <div className="h-1 bg-white/14 rounded overflow-hidden">
                <div className="bar-fill h-full rounded bg-gradient-to-r from-[#E85C2A] to-[#FF8A5B]" style={{width: '91%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between font-['DM_Mono'] text-[0.68rem] text-[#888880] mb-1.5">
                <span>Client Retention</span>
                <span className="text-[#FF8A5B]">96%</span>
              </div>
              <div className="h-1 bg-white/14 rounded overflow-hidden">
                <div className="bar-fill h-full rounded bg-gradient-to-r from-[#E85C2A] to-[#FF8A5B]" style={{width: '96%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;