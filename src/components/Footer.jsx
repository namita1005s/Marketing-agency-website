const Footer = () => {
  return (
    <footer className="bg-[#0A0A0F] border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-12 px-8 md:px-16 py-16">
        <div>
          <div className="font-['Bebas_Neue'] text-[1.8rem] tracking-wider">
            TREND<span className="text-[#E85C2A]">OX</span>
          </div>
          <p className="text-sm text-[#888880] mt-3 leading-relaxed max-w-[280px]">
            India's performance-first digital marketing agency. We help businesses generate more leads, improve visibility, and increase revenue.
          </p>
        </div>
        
        <div>
          <h4 className="font-['DM_Mono'] text-[0.7rem] tracking-wider text-[#666660] uppercase mb-5">Services</h4>
          <ul className="list-none flex flex-col gap-2.5">
            <li><a href="#" className="text-sm text-[#888880] hover:text-white transition-colors">SEO & Content</a></li>
            <li><a href="#" className="text-sm text-[#888880] hover:text-white transition-colors">Paid Media</a></li>
            <li><a href="#" className="text-sm text-[#888880] hover:text-white transition-colors">Social Media</a></li>
            <li><a href="#" className="text-sm text-[#888880] hover:text-white transition-colors">Brand Design</a></li>
            <li><a href="#" className="text-sm text-[#888880] hover:text-white transition-colors">Web Development</a></li>
            <li><a href="#" className="text-sm text-[#888880] hover:text-white transition-colors">Email Marketing</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-['DM_Mono'] text-[0.7rem] tracking-wider text-[#666660] uppercase mb-5">Company</h4>
          <ul className="list-none flex flex-col gap-2.5">
            <li><a href="#" className="text-sm text-[#888880] hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="text-sm text-[#888880] hover:text-white transition-colors">Our Work</a></li>
            <li><a href="#" className="text-sm text-[#888880] hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="text-sm text-[#888880] hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="text-sm text-[#888880] hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-['DM_Mono'] text-[0.7rem] tracking-wider text-[#666660] uppercase mb-5">Connect</h4>
          <ul className="list-none flex flex-col gap-2.5">
            <li><a href="#" className="text-sm text-[#888880] hover:text-white transition-colors">LinkedIn</a></li>
            <li><a href="#" className="text-sm text-[#888880] hover:text-white transition-colors">Instagram</a></li>
            <li><a href="#" className="text-sm text-[#888880] hover:text-white transition-colors">Twitter / X</a></li>
            <li><a href="#" className="text-sm text-[#888880] hover:text-white transition-colors">YouTube</a></li>
            <li><a href="#" className="text-sm text-[#888880] hover:text-white transition-colors">hello@trendox.io</a></li>
          </ul>
        </div>
      </div>
      
      <div className="flex items-center justify-between px-8 md:px-16 py-6 border-t border-white/10 text-xs text-[#666660] flex-wrap gap-3">
        <span>© 2026 Trendox Marketing Solutions Pvt. Ltd. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="text-[#666660] hover:text-[#888880] transition-colors">Privacy Policy</a>
          <a href="#" className="text-[#666660] hover:text-[#888880] transition-colors">Terms of Service</a>
          <a href="#" className="text-[#666660] hover:text-[#888880] transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;