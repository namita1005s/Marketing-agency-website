import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col justify-center px-8 md:px-16 pt-32 pb-16 relative overflow-hidden border-b border-white/10 bg-[#0A0A0F]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40 pointer-events-none"></div>
        <div className="absolute -top-[10%] -right-[5%] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(232,92,42,0.13)_0%,transparent_65%)] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-[1100px] mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 font-['DM_Mono'] text-xs text-[#1BC49A] tracking-wider border border-[#1BC49A]/25 py-1.5 px-3.5 rounded-sm mb-8">
            About Trendox
          </div>
          <h1 className="font-['Bebas_Neue'] text-[clamp(3rem,8vw,6rem)] leading-[1.1] tracking-wide mb-6 text-white">
            WE DON'T JUST<br/>
            <span className="text-[#E85C2A]">RUN ADS.</span>
            <span className="text-[#666660]"> WE BUILD GROWTH.</span>
          </h1>
          <p className="text-[#888880] max-w-[700px] mx-auto font-light leading-relaxed text-lg">
            Trendox is a performance-first digital marketing agency founded in 2018. 
            We help businesses across India scale their revenue through data-driven strategies.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-8 md:px-16 border-b border-white/10 bg-[#111118]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="font-['DM_Mono'] text-[0.7rem] tracking-wider text-[#FF8A5B] uppercase mb-4">Our Story</div>
            <h2 className="font-['Bebas_Neue'] text-[clamp(2rem,4vw,3rem)] tracking-wide leading-none mb-6 text-white">
              FROM A DREAM TO<br/>INDIA'S TRUSTED AGENCY
            </h2>
            <p className="text-[#888880] leading-relaxed mb-4">
              Founded in 2018, Trendox started with a simple belief: digital marketing should be measurable, transparent, and focused on ROI. 
              What began as a two-person team has now grown into a full-service agency with over 50+ marketing experts.
            </p>
            <p className="text-[#888880] leading-relaxed mb-6">
              Today, we've helped 500+ brands across 20+ industries generate over ₹120Cr+ in revenue. 
              Our approach combines creative excellence with data-driven precision to deliver results that matter.
            </p>
            <div className="flex gap-6">
              <div>
                <div className="font-['Bebas_Neue'] text-4xl text-white">500<span className="text-[#E85C2A]">+</span></div>
                <div className="text-xs text-[#888880]">Brands Served</div>
              </div>
              <div>
                <div className="font-['Bebas_Neue'] text-4xl text-white">50<span className="text-[#E85C2A]">+</span></div>
                <div className="text-xs text-[#888880]">Team Members</div>
              </div>
              <div>
                <div className="font-['Bebas_Neue'] text-4xl text-white">6<span className="text-[#E85C2A]">+</span></div>
                <div className="text-xs text-[#888880]">Years of Excellence</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-[#18181F] border border-white/15 rounded-lg p-8 relative overflow-hidden">
              <div className="absolute -top-[30%] -right-[20%] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(232,92,42,0.1)_0%,transparent_70%)] pointer-events-none"></div>
              <div className="font-['Bebas_Neue'] text-6xl text-white mb-4">"Growth<br/>First"</div>
              <p className="text-[#888880] leading-relaxed italic">
                We don't measure success by likes or followers. We measure it by the revenue we help you generate.
              </p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-white font-medium">— Namita Singh</div>
                <div className="text-xs text-[#888880]">Founder & CEO, Trendox</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-8 md:px-16 border-b border-white/10 bg-[#0A0A0F]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-[#111118] border border-white/10 rounded-lg p-10 text-center hover:border-white/20 transition-all">
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="font-['Bebas_Neue'] text-3xl text-white mb-4">OUR MISSION</h3>
            <p className="text-[#888880] leading-relaxed">
              To empower businesses with transparent, data-driven marketing solutions that deliver measurable growth and exceptional ROI.
            </p>
          </div>
          <div className="bg-[#111118] border border-white/10 rounded-lg p-10 text-center hover:border-white/20 transition-all">
            <div className="text-6xl mb-4">👁️</div>
            <h3 className="font-['Bebas_Neue'] text-3xl text-white mb-4">OUR VISION</h3>
            <p className="text-[#888880] leading-relaxed">
              To become India's most trusted performance marketing agency, known for transparency, innovation, and exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-8 md:px-16 border-b border-white/10 bg-[#111118]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <div className="font-['DM_Mono'] text-[0.7rem] tracking-wider text-[#FF8A5B] uppercase mb-4">What We Believe</div>
            <h2 className="font-['Bebas_Neue'] text-[clamp(2rem,4vw,3.5rem)] tracking-wide leading-none text-white">
              OUR CORE VALUES
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '📊', title: 'Data-Driven', desc: 'Every decision is backed by data, not gut feelings. We test, learn, and optimize.' },
              { icon: '🔓', title: 'Radical Transparency', desc: 'You get full access to everything. No hidden reports, no black boxes.' },
              { icon: '🎯', title: 'ROI First', desc: 'We align our success with yours. If you don\'t grow, we don\'t grow.' },
              { icon: '⚡', title: 'Speed & Agility', desc: 'Markets change fast, and so do we. We adapt and execute at lightning speed.' },
              { icon: '🤝', title: 'Partnership', desc: 'We\'re not just vendors. We\'re your growth partners invested in your success.' },
              { icon: '💡', title: 'Innovation', desc: 'Always learning, always testing new strategies to stay ahead of the curve.' }
            ].map((value, i) => (
              <div key={i} className="bg-[#0A0A0F] border border-white/10 rounded-lg p-8 hover:border-[#E85C2A] transition-all group">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-['Bebas_Neue'] text-xl text-white mb-3 group-hover:text-[#E85C2A] transition-colors">{value.title}</h3>
                <p className="text-sm text-[#888880] leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-8 md:px-16 border-b border-white/10 bg-[#0A0A0F]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <div className="font-['DM_Mono'] text-[0.7rem] tracking-wider text-[#FF8A5B] uppercase mb-4">The People Behind</div>
            <h2 className="font-['Bebas_Neue'] text-[clamp(2rem,4vw,3.5rem)] tracking-wide leading-none text-white">
              MEET THE LEADERSHIP
            </h2>
            <p className="text-[#888880] max-w-[600px] mx-auto mt-4">
              A team of passionate marketers, creatives, and strategists dedicated to your growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Shivam Pandey', role: 'Personal Assistant', bio: '10+ years in digital marketing. Previously led growth at multiple unicorns.', initials: 'AS', color: 'bg-[#E85C2A]/20 text-[#E85C2A]' },
              { name: 'Priya Pandey', role: 'Receptionist', bio: 'Ex-McKinsey strategist helping brands scale profitably.', initials: 'PP', color: 'bg-[#1BC49A]/20 text-[#1BC49A]' },
              { name: 'Rahul Verma', role: 'Creative Director', bio: 'Award-winning creative professional with 8+ years of experience.', initials: 'RV', color: 'bg-[#FF8A5B]/20 text-[#FF8A5B]' }
            ].map((member, i) => (
              <div key={i} className="bg-[#111118] border border-white/10 rounded-lg p-8 text-center hover:-translate-y-2 transition-all">
                <div className={`w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 ${member.color}`}>
                  {member.initials}
                </div>
                <h3 className="font-['Bebas_Neue'] text-2xl text-white mb-1">{member.name}</h3>
                <div className="text-sm text-[#E85C2A] mb-3">{member.role}</div>
                <p className="text-sm text-[#888880]">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 md:px-16 bg-[#111118] border-b border-white/10">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="font-['Bebas_Neue'] text-[clamp(2.5rem,5vw,4rem)] tracking-wide leading-tight text-white mb-6">
            READY TO GROW<br/><span className="text-[#E85C2A]">WITH US?</span>
          </h2>
          <p className="text-[#888880] mb-8 leading-relaxed">
            Join 500+ businesses that trust Trendox for their digital growth. 
            Let's build something remarkable together.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/contact" className="bg-[#E85C2A] text-white px-8 py-3 rounded hover:bg-[#FF8A5B] transition-all">
              Start Your Journey →
            </a>
            <a href="/portfolio" className="border border-white/20 text-white px-8 py-3 rounded hover:border-[#888880] transition-all">
              View Our Work
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;