import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      stat: "180%",
      statLabel: "Traffic Growth",
      title: "Nexora Tech",
      description:
        "Technical SEO overhaul and content strategy that tripled search visibility in 4 months.",
      tags: ["SEO", "Content Strategy", "Link Building"],
      metric: "+180% Organic Traffic",
    },
    {
      id: 2,
      stat: "60%",
      statLabel: "More Conversions",
      title: "Veltrix Solutions",
      description:
        "Full website transformation with UX-first design that dramatically improved lead quality.",
      tags: ["Website Design", "Web Development", "CRO"],
      metric: "+60% Conversion Rate",
    },
    {
      id: 3,
      stat: "4.5x",
      statLabel: "Return on Ad Spend",
      title: "Brandify Co.",
      description:
        "Managed $20K/month ad budget across Google and Meta, achieving consistent 4.5x return.",
      tags: ["Google Ads", "Meta Ads", "Analytics"],
      metric: "4.5x ROAS",
    },
    {
      id: 4,
      stat: "220%",
      statLabel: "Engagement Lift",
      title: "Optica Retail",
      description:
        "Rebranded social presence with editorial content strategy that turned followers into buyers.",
      tags: ["SMM", "Content Creation", "Influencer Outreach"],
      metric: "+220% Engagement",
    },
    {
      id: 5,
      stat: "3.2x",
      statLabel: "Lead Growth",
      title: "FinEdge Capital",
      description:
        "Full-funnel digital strategy combining SEO, PPC, and email nurture to scale qualified leads.",
      tags: ["SEO", "PPC", "Email Marketing"],
      metric: "3.2x Lead Volume",
    },
    {
      id: 6,
      stat: "98",
      statLabel: "PageSpeed Score",
      title: "Luminary Studios",
      description:
        "Custom React build with headless CMS delivering sub-second load times and flawless UX.",
      tags: ["Web Development", "Performance", "CMS Integration"],
      metric: "98 PageSpeed Score",
    },
  ];

  const testimonials = [
    {
      quote:
        "Trendox completely transformed our online presence. Our leads doubled within 3 months of working with them.",
      name: "Sarah Mitchell",
      initials: "S",
    },
    {
      quote:
        "Professional, responsive, and results-driven. The SEO work they did pushed us to page one on Google.",
      name: "James Okafor",
      initials: "J",
    },
    {
      quote:
        "Their social media strategy brought us a 40% increase in engagement. Best investment we made.",
      name: "Priya Sharma",
      initials: "P",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 md:px-16 border-b border-white/10 bg-[#0A0A0F]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center">
            <div className="font-['DM_Mono'] text-[0.7rem] tracking-wider text-[#FF8A5B] uppercase mb-4">
              Our Work
            </div>
            <h1 className="font-['Bebas_Neue'] text-[clamp(3rem,8vw,5rem)] tracking-wide leading-[1.1] text-white mb-6">
              Results That Speak
              <br />
              <span className="text-[#E85C2A]">for Themselves</span>
            </h1>
            <p className="text-[#888880] max-w-[600px] mx-auto font-light leading-relaxed">
              A curated selection of campaigns and projects that delivered
              measurable business impact.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-8 md:px-16 border-b border-white/10 bg-[#0A0A0F]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-[#111118] border border-white/10 rounded-lg p-8 hover:border-[#E85C2A]/50 transition-all hover:-translate-y-1"
              >
                {/* Stat */}
                <div className="mb-6">
                  <div className="font-['Bebas_Neue'] text-5xl text-white">
                    {project.stat}
                    <span className="text-[#E85C2A]">
                      {project.stat.includes("x") ? "x" : ""}
                    </span>
                  </div>
                  <div className="text-xs text-[#888880] font-mono tracking-wider mt-1">
                    {project.statLabel}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-['Bebas_Neue'] text-2xl text-white mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#888880] leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-[#1BC49A]/10 text-[#1BC49A] font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metric */}
                <div className="pt-4 border-t border-white/10">
                  <div className="text-sm text-[#FF8A5B] font-mono">
                    {project.metric}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-8 md:px-16 border-b border-white/10 bg-[#111118]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <div className="font-['DM_Mono'] text-[0.7rem] tracking-wider text-[#FF8A5B] uppercase mb-4">
              Client Reviews
            </div>
            <h2 className="font-['Bebas_Neue'] text-[clamp(2.5rem,5vw,3.5rem)] tracking-wide leading-tight text-white">
              What Our Clients
              <br />
              Say About Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-[#0A0A0F] border border-white/10 rounded-lg p-8 hover:border-white/20 transition-all"
              >
                <div className="text-6xl text-[#E85C2A] opacity-50 mb-4">“</div>
                <p className="text-white leading-relaxed mb-6">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E85C2A]/20 flex items-center justify-center text-[#FF8A5B] font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="text-white font-medium">
                      {testimonial.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 md:px-16 bg-[#0A0A0F]">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="font-['Bebas_Neue'] text-[clamp(2.5rem,5vw,4rem)] tracking-wide leading-tight text-white mb-6">
            Ready To Scale
            <br />
            <span className="text-[#E85C2A]">Your Business?</span>
          </h2>
          <p className="text-[#888880] mb-8 leading-relaxed">
            Let's build a strategy that drives real, measurable results. Book a
            free consultation today.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#E85C2A] text-white px-8 py-3 rounded hover:bg-[#FF8A5B] transition-all"
          >
            Get Free Consultation →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Portfolio;