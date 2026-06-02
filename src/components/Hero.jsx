const Hero = () => {
  return (
    <section className="min-h-[92vh] flex flex-col justify-center px-8 md:px-16 pt-20 pb-16 relative overflow-hidden border-b border-white/10 bg-[#0A0A0F]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40 pointer-events-none"></div>
      
      {/* Glow Effects */}
      <div className="absolute -top-[10%] -right-[5%] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(232,92,42,0.13)_0%,transparent_65%)] pointer-events-none"></div>
      <div className="absolute -bottom-[20%] left-[30%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(27,196,154,0.08)_0%,transparent_65%)] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-[1100px]">
        <div className="inline-flex items-center gap-2.5 font-['DM_Mono'] text-xs text-[#1BC49A] tracking-wider border border-[#1BC49A]/25 py-1.5 px-3.5 rounded-sm mb-8 animate-fade-up">
          India's Performance Marketing Agency
        </div>
        
        <h1 className="font-['Bebas_Neue'] text-[clamp(4.5rem,11vw,9.5rem)] leading-[0.88] tracking-wide mb-10 animate-fade-up [animation-delay:0.25s] text-white">
  GROW<br/>
          <span className="text-[#E85C2A] block">FASTER.</span>
          <span className="text-[#666660] block text-[clamp(3rem,7vw,6.5rem)]">CONVERT MORE.</span>
        </h1>
        
        <div className="flex items-end justify-between flex-wrap gap-8 animate-fade-up [animation-delay:0.5s]">
          <p className="text-[#888880] max-w-[440px] font-light leading-relaxed text-base">
            We help ambitious brands generate more leads, dominate search, and turn ad spend into measurable revenue — with zero guesswork.
          </p>
          <div>
            <div className="flex gap-4 flex-wrap">
              <a href="#" className="bg-[#E85C2A] text-white font-['DM_Sans'] text-sm font-medium px-8 py-3.5 rounded-sm transition-all hover:bg-[#FF8A5B] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(232,92,42,0.25)] inline-block">
                Start Your Project →
              </a>
              <a href="#results" className="bg-transparent text-white border border-white/20 font-['DM_Sans'] text-sm font-normal px-8 py-3.5 rounded-sm transition-all hover:border-[#888880] hover:-translate-y-0.5 inline-block">
                See Our Work
              </a>
            </div>
            <div className="flex items-center gap-2.5 mt-4 font-['DM_Mono'] text-[0.68rem] text-[#666660] tracking-wide uppercase">
              <span className="w-10 h-px bg-white/20"></span>
              Scroll to explore
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;