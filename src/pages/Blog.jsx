import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router";

const Blog = () => {
  const blogPosts = [
    {
      category: "SEO",
      title: "10 Technical SEO Fixes That Will Double Your Organic Traffic",
      description:
        "Most websites are leaving rankings on the table due to fixable technical issues. Here are the ten highest-impact fixes we apply to every new client site.",
      slug: "10-technical-seo-fixes",
    },
    {
      category: "PPC",
      title: "How We Achieved 4.5x ROAS on a ₹15L/Month Google Ads Budget",
      description:
        "A behind-the-scenes breakdown of the campaign structure, bidding strategy, and creative testing that drove exceptional returns for an e-commerce client.",
      slug: "achieved-4.5x-roas-google-ads",
    },
    {
      category: "Web Design",
      title: "The 5 UX Principles Behind Every High-Converting Landing Page",
      description:
        "Conversion rate optimisation isn't magic — it's psychology. We break down the five principles we apply to every landing page we design.",
      slug: "ux-principles-high-converting-landing-page",
    },
    {
      category: "Social Media",
      title: "Why Your Instagram Reach Dropped and How to Fix It in 2025",
      description:
        "The algorithm changed again. Here's what's actually working for our clients right now — and what you should stop doing immediately.",
      slug: "instagram-reach-dropped-how-to-fix",
    },
    {
      category: "Strategy",
      title: "Full-Funnel Marketing: The Framework We Use for Every Client",
      description:
        "Siloed marketing channels waste budget. This is the integrated framework we use to connect awareness, consideration, and conversion into one cohesive engine.",
      slug: "full-funnel-marketing-framework",
    },
    {
      category: "Web Development",
      title: "Why We Moved All Client Sites to Next.js (And You Should Too)",
      description:
        "Performance, SEO, and developer experience — Next.js wins on all three. Here's our migration process and the results we've seen across 20+ projects.",
      slug: "moved-all-client-sites-to-nextjs",
    },
    {
      category: "SEO",
      title: "Local SEO in 2025: The Complete Guide for Service Businesses",
      description:
        "Google Business Profile, local citations, review strategy, and geo-targeted content — everything a local business needs to dominate their area.",
      slug: "local-seo-complete-guide",
    },
    {
      category: "PPC",
      title: "Meta Ads vs Google Ads: Which Should You Prioritise in 2025?",
      description:
        "The answer depends on your funnel stage, audience, and product type. We break down the decision framework we use with every new client.",
      slug: "meta-ads-vs-google-ads",
    },
    {
      category: "Branding",
      title: "Brand Strategy Before Marketing: Why Most Campaigns Fail",
      description:
        "Pouring budget into ads without a clear brand position is like filling a leaky bucket. Here's how to fix the foundation before scaling spend.",
      slug: "brand-strategy-before-marketing",
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
              Blog
            </div>
            <h1 className="font-['Bebas_Neue'] text-[clamp(3rem,8vw,5rem)] tracking-wide leading-[1.1] text-white mb-6">
              Insights, Strategy
              <br />
              <span className="text-[#E85C2A]">& Agency Thinking</span>
            </h1>
            <p className="text-[#888880] max-w-[600px] mx-auto font-light leading-relaxed">
              Practical guides, case study breakdowns, and marketing strategy
              from the Trendox team.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-8 md:px-16 border-b border-white/10 bg-[#0A0A0F]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Link
                key={index}
                to={`/blog/${post.slug}`}
                className="group"
              >
                <div className="bg-[#111118] border border-white/10 rounded-lg p-6 hover:border-[#E85C2A]/50 transition-all hover:-translate-y-1 h-full flex flex-col">
                  <div>
                    <span className="inline-block text-xs font-mono text-[#1BC49A] bg-[#1BC49A]/10 px-3 py-1 rounded-full mb-4">
                      {post.category}
                    </span>
                    <h2 className="font-['Bebas_Neue'] text-xl text-white mb-3 group-hover:text-[#E85C2A] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-[#888880] leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <span className="text-sm text-[#E85C2A] font-mono inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
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

export default Blog;