import { useEffect, useRef, useState } from 'react';

const Metrics = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (hasAnimated) {
      const targets = [500, 3.8, 120, 96];
      const duration = 1800;
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const newCounts = targets.map((target, i) => {
          if (i === 2) return Math.floor(progress * target);
          return i === 1 ? +(progress * target).toFixed(1) : Math.floor(progress * target);
        });
        
        setCounts(newCounts);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [hasAnimated]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-white/10 bg-[#0A0A0F]" ref={sectionRef}>
      <div className="px-8 md:px-10 py-8 border-r border-white/10 last:border-r-0 hover:bg-[#111118] transition-colors">
        <span className="font-['Bebas_Neue'] text-5xl leading-none block text-white">
          {counts[0]}<span className="text-[#E85C2A]">+</span>
        </span>
        <div className="text-sm text-[#888880] mt-1.5">Brands Accelerated</div>
        <div className="font-['DM_Mono'] text-[0.65rem] text-[#666660] tracking-wider mt-1">Across 20+ industries</div>
      </div>
      <div className="px-8 md:px-10 py-8 border-r border-white/10 last:border-r-0 hover:bg-[#111118] transition-colors">
        <span className="font-['Bebas_Neue'] text-5xl leading-none block text-white">
          {counts[1]}<span className="text-[#E85C2A]">×</span>
        </span>
        <div className="text-sm text-[#888880] mt-1.5">Average ROI Delivered</div>
        <div className="font-['DM_Mono'] text-[0.65rem] text-[#666660] tracking-wider mt-1">Verified client results</div>
      </div>
      <div className="px-8 md:px-10 py-8 border-r border-white/10 last:border-r-0 hover:bg-[#111118] transition-colors">
        <span className="font-['Bebas_Neue'] text-5xl leading-none block text-white">
          ₹{counts[2]}<span className="text-[#E85C2A]">Cr+</span>
        </span>
        <div className="text-sm text-[#888880] mt-1.5">Revenue Generated</div>
        <div className="font-['DM_Mono'] text-[0.65rem] text-[#666660] tracking-wider mt-1">For our clients in 2025</div>
      </div>
      <div className="px-8 md:px-10 py-8 border-r border-white/10 last:border-r-0 hover:bg-[#111118] transition-colors">
        <span className="font-['Bebas_Neue'] text-5xl leading-none block text-white">
          {counts[3]}<span className="text-[#E85C2A]">%</span>
        </span>
        <div className="text-sm text-[#888880] mt-1.5">Client Retention Rate</div>
        <div className="font-['DM_Mono'] text-[0.65rem] text-[#666660] tracking-wider mt-1">They stay because it works</div>
      </div>
    </div>
  );
};

export default Metrics;