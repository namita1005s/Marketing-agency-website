const Testimonials = () => {
  const testimonials = [
    { stars: '★★★★★', quote: '"Trendox didn\'t just run ads — they rebuilt our entire growth engine. Revenue tripled in a year and we\'ve never looked back."', name: 'Rohan Sharma', role: 'Founder, NovaTech Retail', initials: 'RS', bgColor: 'bg-[#E85C2A]/15', textColor: 'text-[#FF8A5B]' },
    { stars: '★★★★★', quote: '"Their SEO strategy got us to page 1 for 60+ keywords in under 5 months. Organic traffic is now our #1 lead source."', name: 'Priya Kapoor', role: 'CMO, Zenspark HR', initials: 'PK', bgColor: 'bg-[#1BC49A]/12', textColor: 'text-[#1BC49A]' },
    { stars: '★★★★★', quote: '"Professional, transparent, and results-driven. Every rupee we spent with Trendox came back multiplied. Highly recommend."', name: 'Arjun Malhotra', role: 'CEO, Urbanhive Properties', initials: 'AM', bgColor: 'bg-white/10', textColor: 'text-[#888880]' }
  ];

  return (
    <section className="py-24 px-8 md:px-16 border-b border-white/10 bg-[#111118]">
      <div className="font-['DM_Mono'] text-[0.7rem] tracking-wider text-[#FF8A5B] uppercase mb-4">Client Love</div>
      <h2 className="font-['Bebas_Neue'] text-[clamp(2.5rem,5vw,4rem)] tracking-wide leading-none mb-4 text-white">
        WHAT OUR<br/>CLIENTS SAY.
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {testimonials.map((testimonial, i) => (
          <div key={i} className="bg-[#18181F] border border-white/15 p-8 rounded transition-all hover:border-white/20 hover:-translate-y-1">
            <div className="text-[#E85C2A] text-sm mb-4 tracking-wide">{testimonial.stars}</div>
            <p className="text-sm text-white leading-relaxed font-light italic mb-6">{testimonial.quote}</p>
            <div className="flex items-center gap-3">
              <div className={`w-9.5 h-9.5 rounded-full flex items-center justify-center font-medium text-sm shrink-0 ${testimonial.bgColor} ${testimonial.textColor}`}>
                {testimonial.initials}
              </div>
              <div>
                <div className="text-sm font-medium text-white">{testimonial.name}</div>
                <div className="text-xs text-[#888880]">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;