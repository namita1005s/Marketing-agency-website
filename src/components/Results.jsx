const Results = () => {
  return (
    <section className="py-24 px-8 md:px-16 border-b border-white/10 bg-[#0A0A0F]" id="results">
      <div className="font-['DM_Mono'] text-[0.7rem] tracking-wider text-[#FF8A5B] uppercase mb-4">Client Results</div>
      <h2 className="font-['Bebas_Neue'] text-[clamp(2.5rem,5vw,4rem)] tracking-wide leading-none mb-4 text-white">
        PROOF IN<br/>THE NUMBERS.
      </h2>
      <p className="text-[#888880] max-w-[500px] font-light leading-relaxed">
        Real brands. Real results. Here's what consistent, strategic marketing looks like.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-px bg-white/10 mt-12">
        {/* Featured Result */}
        <div className="bg-[#18181F] p-12 relative overflow-hidden transition-colors hover:bg-[#111118]">
          <span className="inline-block font-['DM_Mono'] text-[0.65rem] tracking-wider px-2 py-0.5 rounded-sm bg-[#1BC49A]/10 text-[#1BC49A] mb-2">E-commerce</span>
          <div className="font-['DM_Mono'] text-[0.68rem] tracking-wider text-[#666660] uppercase mb-5">Fashion & Apparel · Mumbai</div>
          <div className="font-['Bebas_Neue'] text-3xl tracking-wide leading-tight mb-4 text-white">From ₹8L to ₹52L monthly revenue in 9 months</div>
          <p className="text-sm text-[#888880] leading-relaxed mb-6">
            A D2C fashion brand struggling with low ROAS and high cart abandonment. We rebuilt their Meta funnel, launched Google Shopping, and redesigned their landing pages.
          </p>
          <div className="flex gap-8 flex-wrap">
            <div><span className="font-['Bebas_Neue'] text-4xl text-[#FF8A5B] leading-none block">6.5×</span><div className="text-xs text-[#888880] mt-0.5">ROAS</div></div>
            <div><span className="font-['Bebas_Neue'] text-4xl text-[#FF8A5B] leading-none block">+540%</span><div className="text-xs text-[#888880] mt-0.5">Revenue</div></div>
            <div><span className="font-['Bebas_Neue'] text-4xl text-[#FF8A5B] leading-none block">−38%</span><div className="text-xs text-[#888880] mt-0.5">CPA</div></div>
          </div>
        </div>
        
        {/* Right Column Results */}
        <div className="grid grid-rows-2 gap-px bg-white/10">
          <div className="bg-[#0A0A0F] p-8 transition-colors hover:bg-[#111118]">
            <span className="inline-block font-['DM_Mono'] text-[0.65rem] tracking-wider px-2 py-0.5 rounded-sm bg-[#1BC49A]/10 text-[#1BC49A] mb-2">B2B SaaS</span>
            <div className="font-['DM_Mono'] text-[0.68rem] tracking-wider text-[#666660] uppercase mb-5">HR Tech · Bengaluru</div>
            <div className="font-['Bebas_Neue'] text-2xl tracking-wide mb-3 leading-tight text-white">LinkedIn leads up 320% in 60 days</div>
            <div className="flex gap-8 flex-wrap">
              <div><span className="font-['Bebas_Neue'] text-4xl text-[#FF8A5B] leading-none block">320%</span><div className="text-xs text-[#888880] mt-0.5">More Leads</div></div>
              <div><span className="font-['Bebas_Neue'] text-4xl text-[#FF8A5B] leading-none block">₹480</span><div className="text-xs text-[#888880] mt-0.5">Cost per Lead</div></div>
            </div>
          </div>
          <div className="bg-[#0A0A0F] p-8 transition-colors hover:bg-[#111118]">
            <span className="inline-block font-['DM_Mono'] text-[0.65rem] tracking-wider px-2 py-0.5 rounded-sm bg-[#1BC49A]/10 text-[#1BC49A] mb-2">Real Estate</span>
            <div className="font-['DM_Mono'] text-[0.68rem] tracking-wider text-[#666660] uppercase mb-5">Luxury Properties · Delhi NCR</div>
            <div className="font-['Bebas_Neue'] text-2xl tracking-wide mb-3 leading-tight text-white">₹4.2Cr in site visits booked via Google Ads</div>
            <div className="flex gap-8 flex-wrap">
              <div><span className="font-['Bebas_Neue'] text-4xl text-[#FF8A5B] leading-none block">4.2Cr</span><div className="text-xs text-[#888880] mt-0.5">Pipeline Value</div></div>
              <div><span className="font-['Bebas_Neue'] text-4xl text-[#FF8A5B] leading-none block">18×</span><div className="text-xs text-[#888880] mt-0.5">ROAS</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;