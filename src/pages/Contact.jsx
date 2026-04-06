import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { MdOutlineEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import { IoTimeOutline } from 'react-icons/io5';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      <Breadcrumb />

      <div className="max-w-340 mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Left: info */}
          <div className="lg:w-2/5 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="self-start px-4 py-1.5 rounded-full border border-gray-300 text-gray-800 text-sm">
                Get In Touch
              </span>
              <h2 className="text-4xl font-bold text-[#11141B] leading-tight">
                We'd Love to Hear From You
              </h2>
              <p className="text-gray-500 leading-relaxed">
                Have questions about our classes or want to book a session? Reach out and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {[
                { icon: <MdLocationOn size={20} className="text-[#62826B]" />, label: 'Location', value: '123 Wellness Street, Dhaka, Bangladesh' },
                { icon: <MdPhone size={20} className="text-[#62826B]" />, label: 'Phone', value: '+880 1234 567890' },
                { icon: <MdOutlineEmail size={20} className="text-[#62826B]" />, label: 'Email', value: 'info@shunnoyoga.com' },
                { icon: <IoTimeOutline size={20} className="text-[#62826B]" />, label: 'Hours', value: 'Mon–Fri: 9AM–6PM, Sat–Sun: 8AM–4PM' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[#F0F7F2] flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>
                    <p className="text-sm font-medium text-[#11141B]">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:w-3/5 bg-[#F0F7F2] rounded-3xl p-8 lg:p-12">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-[#62826B] flex items-center justify-center text-white text-2xl">✓</div>
                <h3 className="text-2xl font-bold text-[#11141B]">Message Sent!</h3>
                <p className="text-gray-500">We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="mt-2 px-6 py-2.5 rounded-full bg-[#62826B] text-[#FFEFC5] text-sm font-medium hover:bg-[#11141B] transition-colors duration-300"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-2xl font-bold text-[#11141B] mb-2">Send a Message</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-[#11141B]">Full Name</label>
                    <input
                      type="text" name="name" value={form.name} onChange={handleChange} required
                      placeholder="Your name"
                      className="px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm outline-none focus:border-[#62826B] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-[#11141B]">Email</label>
                    <input
                      type="email" name="email" value={form.email} onChange={handleChange} required
                      placeholder="your@email.com"
                      className="px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm outline-none focus:border-[#62826B] transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#11141B]">Subject</label>
                  <input
                    type="text" name="subject" value={form.subject} onChange={handleChange} required
                    placeholder="How can we help?"
                    className="px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm outline-none focus:border-[#62826B] transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#11141B]">Message</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} required rows={5}
                    placeholder="Tell us more..."
                    className="px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm outline-none focus:border-[#62826B] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="self-start px-8 py-3 rounded-full bg-[#62826B] text-[#FFEFC5] font-medium hover:bg-[#11141B] hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
