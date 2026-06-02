const Logos = () => {
  const logos = ['NOVA TECH', 'KIRANAVANTAGE', 'ZENSPARK', 'URBANHIVE', 'PULSE FIN', 'GREENLANE', 'CRAFTROOT'];
  
  return (
    <div className="py-12 px-8 md:px-16 border-b border-white/10 bg-[#111118]">
      <p className="font-['DM_Mono'] text-[0.68rem] tracking-wider text-[#666660] uppercase text-center mb-8">
        Trusted by brands across India & beyond
      </p>
      <div className="flex items-center justify-center gap-14 flex-wrap">
        {logos.map((logo, i) => (
          <div key={i} className="font-['Bebas_Neue'] text-xl tracking-wider text-[#666660] transition-colors hover:text-[#888880] cursor-default">
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logos;