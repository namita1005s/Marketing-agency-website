const Ticker = () => {
  const tickerItems = [
    'SEO & Content', 'Google Ads', 'Meta Campaigns', 'Social Media', 
    'Brand Identity', 'Lead Generation', 'Email Automation', 'Web Design', 
    'Analytics', 'SEO & Content', 'Google Ads', 'Meta Campaigns', 
    'Social Media', 'Brand Identity', 'Lead Generation', 'Email Automation', 
    'Web Design', 'Analytics'
  ];

  return (
    <div className="bg-[#18181F] border-b border-white/10 overflow-hidden whitespace-nowrap mt-16 py-2.5">
      <div className="inline-flex gap-14 animate-[ticker_25s_linear_infinite]">
        {tickerItems.map((item, index) => (
          <span 
            key={index} 
            className="font-['DM_Mono'] text-[0.7rem] tracking-wide text-[#888880] uppercase inline-flex items-center gap-2.5 before:content-['◆'] before:text-[0.45rem] before:text-[#E85C2A]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;