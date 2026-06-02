import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router";

const Career = () => {
  const perks = [
    {
      icon: "◎",
      title: "Remote-Friendly",
      description:
        "Most roles offer hybrid or fully remote options. Work from wherever you do your best thinking.",
    },
    {
      icon: "✦",
      title: "Growth Budget",
      description:
        "₹25,000/year learning budget for courses, conferences, and certifications.",
    },
    {
      icon: "◈",
      title: "Performance Bonus",
      description:
        "Quarterly bonuses tied to client results — when clients win, you win.",
    },
    {
      icon: "◆",
      title: "Health Coverage",
      description:
        "Comprehensive health insurance for you and your immediate family.",
    },
  ];

  const openPositions = [
    {
      title: "Senior SEO Strategist",
      description:
        "Lead SEO strategy for 10+ client accounts. Own technical audits, content planning, and link acquisition. 3+ years experience required.",
    },
    {
      title: "React / Next.js Developer",
      description:
        "Build high-performance websites and web apps for our clients. Strong proficiency in React, Next.js, and modern CSS required.",
    },
    {
      title: "Performance Marketing Manager",
      description:
        "Manage Google Ads and Meta Ads campaigns across multiple client accounts. Experience with ₹5L+ monthly budgets preferred.",
    },
    {
      title: "UI/UX Designer",
      description:
        "Design conversion-focused websites and landing pages. Proficiency in Figma and a strong portfolio of web design work required.",
    },
    {
      title: "Social Media Manager",
      description:
        "Manage social media presence for 8–12 client brands. Content planning, community management, and paid social experience needed.",
    },
    {
      title: "Content Strategist",
      description:
        "Create SEO-optimised blog content, case studies, and landing page copy for B2B and B2C clients across various industries.",
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
              Careers
            </div>
            <h1 className="font-['Bebas_Neue'] text-[clamp(3rem,8vw,5rem)] tracking-wide leading-[1.1] text-white mb-6">
              Build the Future of
              <br />
              <span className="text-[#E85C2A]">Digital Marketing</span>
            </h1>
            <p className="text-[#888880] max-w-[600px] mx-auto font-light leading-relaxed">
              Join a team of specialists obsessed with results. We're growing
              fast and looking for exceptional people to grow with us.
            </p>
          </div>
        </div>
      </section>

      {/* Why Trendox Section */}
      <section className="py-20 px-8 md:px-16 border-b border-white/10 bg-[#111118]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <div className="font-['DM_Mono'] text-[0.7rem] tracking-wider text-[#FF8A5B] uppercase mb-4">
              Why Trendox
            </div>
            <h2 className="font-['Bebas_Neue'] text-[clamp(2.5rem,5vw,3.5rem)] tracking-wide leading-tight text-white">
              Perks That Actually
              <br />
              <span className="text-[#E85C2A]">Matter</span>
            </h2>
            <p className="text-[#888880] max-w-[500px] mx-auto mt-4">
              We invest in our team the same way we invest in our clients — seriously.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {perks.map((perk, index) => (
              <div
                key={index}
                className="bg-[#0A0A0F] border border-white/10 rounded-lg p-6 hover:border-[#E85C2A]/50 transition-all"
              >
                <div className="text-4xl text-[#E85C2A] mb-4">{perk.icon}</div>
                <h3 className="font-['Bebas_Neue'] text-xl text-white mb-2">
                  {perk.title}
                </h3>
                <p className="text-sm text-[#888880] leading-relaxed">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 px-8 md:px-16 border-b border-white/10 bg-[#0A0A0F]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <div className="font-['DM_Mono'] text-[0.7rem] tracking-wider text-[#FF8A5B] uppercase mb-4">
              Open Positions
            </div>
            <h2 className="font-['Bebas_Neue'] text-[clamp(2.5rem,5vw,3.5rem)] tracking-wide leading-tight text-white">
              We're Hiring
              <br />
              <span className="text-[#E85C2A]">Across All Teams</span>
            </h2>
            <p className="text-[#888880] max-w-[500px] mx-auto mt-4">
              6 open roles — find yours below.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-[#111118] border border-white/10 rounded-lg p-8 hover:border-[#E85C2A]/50 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="font-['Bebas_Neue'] text-2xl text-white mb-3">
                      {position.title}
                    </h3>
                    <p className="text-sm text-[#888880] leading-relaxed">
                      {position.description}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <Link
                      to="/contact"
                      className="inline-block bg-[#E85C2A] text-white px-6 py-2 rounded hover:bg-[#FF8A5B] transition-all text-sm font-medium whitespace-nowrap"
                    >
                      Apply Now →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Open Application Section */}
          <div className="mt-12 text-center">
            <div className="bg-[#111118] border border-white/10 rounded-lg p-8">
              <p className="text-[#888880] mb-4">
                Don't see a role that fits? We're always open to exceptional talent.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-transparent border border-[#E85C2A] text-[#E85C2A] px-6 py-2 rounded hover:bg-[#E85C2A] hover:text-white transition-all text-sm font-medium"
              >
                Send an Open Application →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 md:px-16 bg-[#111118]">
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

export default Career;