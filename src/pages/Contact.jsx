import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 md:px-16 border-b border-white/10 bg-[#0A0A0F]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center">
            <div className="font-['DM_Mono'] text-[0.7rem] tracking-wider text-[#FF8A5B] uppercase mb-4">
              Contact Us
            </div>
            <h1 className="font-['Bebas_Neue'] text-[clamp(3rem,8vw,5rem)] tracking-wide leading-[1.1] text-white mb-6">
              Let's Build Something
              <br />
              <span className="text-[#E85C2A]">Remarkable Together</span>
            </h1>
            <p className="text-[#888880] max-w-[600px] mx-auto font-light leading-relaxed">
              Tell us about your project and we'll get back to you within 24
              hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 px-8 md:px-16 border-b border-white/10 bg-[#0A0A0F]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Side - Contact Form */}
            <div>
              <h2 className="font-['Bebas_Neue'] text-4xl text-white mb-4">
                Start a
                <br />
                <span className="text-[#E85C2A]">Conversation</span>
              </h2>
              <p className="text-[#888880] mb-8 leading-relaxed">
                Whether you need a new website, SEO, paid media, or a full
                growth strategy — we're ready to help you scale.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm text-white mb-2 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#111118] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#E85C2A] transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white mb-2 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#111118] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#E85C2A] transition-colors"
                    placeholder="hello@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white mb-2 font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#111118] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#E85C2A] transition-colors"
                    placeholder="+91 800 123 4567"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white mb-2 font-medium">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-[#111118] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#E85C2A] transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E85C2A] text-white font-medium py-3 rounded-lg hover:bg-[#FF8A5B] transition-all hover:-translate-y-0.5"
                >
                  Send Message →
                </button>
              </form>
            </div>

            {/* Right Side - Contact Info */}
            <div>
              <div className="bg-[#111118] border border-white/10 rounded-lg p-8 mb-8">
                <h3 className="font-['Bebas_Neue'] text-2xl text-white mb-6">
                  Get in Touch
                </h3>

                <div className="space-y-6">
                  <div>
                    <div className="text-[#E85C2A] font-mono text-xs tracking-wider mb-2">
                      EMAIL
                    </div>
                    <a
                      href="mailto:hello@trendoxmarketing.com"
                      className="text-white hover:text-[#E85C2A] transition-colors"
                    >
                      hello@trendoxmarketing.com
                    </a>
                  </div>

                  <div>
                    <div className="text-[#E85C2A] font-mono text-xs tracking-wider mb-2">
                      PHONE
                    </div>
                    <a
                      href="tel:+91XXXXXXXXXX"
                      className="text-white hover:text-[#E85C2A] transition-colors"
                    >
                      +91 XXXXX XXXXX
                    </a>
                  </div>

                  <div>
                    <div className="text-[#E85C2A] font-mono text-xs tracking-wider mb-2">
                      OFFICE
                    </div>
                    <p className="text-white">
                      Lucknow, Uttar Pradesh, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="bg-[#111118] border border-white/10 rounded-lg p-8">
                <h3 className="font-['Bebas_Neue'] text-2xl text-white mb-6">
                  Why Choose Us?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[#1BC49A] text-xl">✓</span>
                    <span className="text-white">Free consultation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#1BC49A] text-xl">✓</span>
                    <span className="text-white">Response within 24h</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#1BC49A] text-xl">✓</span>
                    <span className="text-white">No commitment required</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Optional */}
      <section className="py-10 px-8 md:px-16 bg-[#0A0A0F]">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-[#111118] border border-white/10 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.9992063833!2d80.78452315!3d26.84646035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93e75f1b9a6d9b0!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
              className="grayscale hover:grayscale-0 transition-all duration-300"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;