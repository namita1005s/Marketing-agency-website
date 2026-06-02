const Process = () => {
  const steps = [
    { num: '01', name: 'DISCOVERY & AUDIT', desc: 'We deep-dive into your brand, market, competitors, and current digital footprint to identify quick wins and long-term opportunities.' },
    { num: '02', name: 'STRATEGY & BLUEPRINT', desc: 'A custom growth roadmap built around your goals, budget, and timeline — with clear KPIs before we spend a single rupee.' },
    { num: '03', name: 'LAUNCH & EXECUTE', desc: 'Our team moves fast. Campaigns go live, content goes out, and your digital presence starts growing — typically within 2 weeks.' },
    { num: '04', name: 'OPTIMISE & SCALE', desc: 'We track, test, and iterate every week. What\'s working gets more budget. What isn\'t gets fixed. You get detailed monthly reports.' }
  ];

  return (
    <section className="py-24 px-8 md:px-16 border-b border-white/10 bg-[#111118]">
      <div className="font-['DM_Mono'] text-[0.7rem] tracking-wider text-[#FF8A5B] uppercase mb-4">How We Work</div>
      <h2 className="font-['Bebas_Neue'] text-[clamp(2.5rem,5vw,4rem)] tracking-wide leading-none mb-4 text-white">
        OUR PROVEN<br/>PROCESS.
      </h2>
      <p className="text-[#888880] max-w-[500px] font-light leading-relaxed">
        A structured system designed to deliver results from day one — not day ninety.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 mt-16 border border-white/10">
        {steps.map((step, i) => (
          <div key={i} className="px-8 py-10 border-r border-white/10 last:border-r-0 relative">
            <div className="font-['Bebas_Neue'] text-6xl text-white/10 leading-none mb-5">{step.num}</div>
            {/* This line has text-white to make the step names white */}
            <div className="font-['Bebas_Neue'] text-xl tracking-wide mb-2.5 text-white">{step.name}</div>
            <p className="text-sm text-[#888880] leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;