const CTA = () => {
  return (
    <section className="py-28 px-8 md:px-16 bg-[#111118] border-b border-white/10 relative overflow-hidden text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(232,92,42,0.12)_0%,transparent_70%)] pointer-events-none"></div>
      <div className="relative z-10">
        <h2 className="font-['Bebas_Neue'] text-[clamp(3rem,7vw,6rem)] tracking-wide leading-[0.95] mb-6">
          <span className="text-white">READY TO</span><br/>
          <span className="text-[#E85C2A]">GROW?</span>
        </h2>
        <p className="text-[#888880] max-w-[480px] mx-auto mb-10 font-light leading-relaxed">
          Book a free 30-minute strategy call. We'll audit your current digital presence and show you exactly where the growth is hiding.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#" className="bg-[#E85C2A] text-white font-['DM_Sans'] text-sm font-medium px-8 py-3.5 rounded-sm transition-all hover:bg-[#FF8A5B] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(232,92,42,0.25)] inline-block">
            Book Free Strategy Call →
          </a>
          <a href="mailto:hello@trendox.io" className="bg-transparent text-white border border-white/20 font-['DM_Sans'] text-sm font-normal px-8 py-3.5 rounded-sm transition-all hover:border-[#888880] hover:-translate-y-0.5 inline-block">
            Email Us Directly
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;