'use client'
import React, { useState } from 'react'
import { useSidebar } from '../context/SidebarContext';
import { BsGeoAlt } from 'react-icons/bs';
import { FiMail, FiPhone } from 'react-icons/fi';
import { FaPaperPlane } from 'react-icons/fa';
import Link from 'next/link';

const Contact = () => {
  const { setIsOpen } = useSidebar();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleNavClick = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Here you would send the email using your preferred service
      // For example: EmailJS, SendGrid, or your own API
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div onClick={handleNavClick} className="relative w-full min-h-screen p-3 md:p-4 lg:p-5 text-white overflow-y-auto">
      {/* Background heading */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold absolute top-6 md:top-8 lg:top-10 left-2 md:left-3 opacity-[0.04] text-white select-none">
        CONTACT ME
      </h1>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto pt-3 md:pt-4 lg:pt-5">
        {/* Header */}
        <div className="md:w-[240px] lg:w-[280px]">
          <h1 className="font-jakarta relative leading-tight text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
            CONTACT ME
          </h1>
          <div className="w-[50%] h-[2px] md:h-[3px] bg-[#2d2d44] rounded-[10px] mt-1.5 md:mt-2 relative">
            <div className="absolute top-0 left-0 w-1/2 h-full rounded-[10px] bg-[#7C3AED]"></div>
          </div>
        </div>

        {/* Contact Content */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 mt-4 md:mt-5 lg:mt-6">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:w-1/2">
            <h4 className="text-xl md:text-2xl font-semibold text-white mb-4 md:mb-6">
              Get In Touch
            </h4>
            
            <div className="space-y-4 md:space-y-5">
              {/* Name Field */}
              <div className="relative w-full">
                <label
                  htmlFor="name"
                  className="absolute -top-2 left-3 px-2 bg-[#0a121f] text-xs md:text-sm text-[#A8B2D1] z-10"
                >
                  Enter your Name*
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=""
                  required
                  className="w-full border border-[#2d2d44] bg-transparent text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#7C3AED] transition-colors duration-300 text-sm md:text-base"
                />
              </div>

              {/* Email Field */}
              <div className="relative w-full">
                <label
                  htmlFor="email"
                  className="absolute -top-2 left-3 px-2 bg-[#0a121f] text-xs md:text-sm text-[#A8B2D1] z-10"
                >
                  Enter your Email*
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=""
                  required
                  className="w-full border border-[#2d2d44] bg-transparent text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#7C3AED] transition-colors duration-300 text-sm md:text-base"
                />
              </div>

              {/* Subject Field */}
              <div className="relative w-full">
                <label
                  htmlFor="subject"
                  className="absolute -top-2 left-3 px-2 bg-[#0a121f] text-xs md:text-sm text-[#A8B2D1] z-10"
                >
                  Enter your Subject*
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder=""
                  required
                  className="w-full border border-[#2d2d44] bg-transparent text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#7C3AED] transition-colors duration-300 text-sm md:text-base"
                />
              </div>

              {/* Message Field */}
              <div className="relative w-full">
                <label
                  htmlFor="message"
                  className="absolute -top-2 left-3 px-2 bg-[#0a121f] text-xs md:text-sm text-[#A8B2D1] z-10"
                >
                  Enter your Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full border border-[#2d2d44] bg-transparent text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#7C3AED] transition-colors duration-300 resize-none text-sm md:text-base"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative bg-[#7C3AED] hover:bg-[#6D28D9] py-2.5 px-6 md:py-3 md:px-8 mt-4 md:mt-6 cursor-pointer overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#7C3AED]/30 disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <span className="relative z-10 text-white font-medium text-sm md:text-base flex items-center gap-2">
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-sm" />
                    SEND EMAIL
                  </>
                )}
              </span>
              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  w-full
                  bg-white
                  origin-right
                  scale-x-0
                  transition-transform
                  duration-500
                  ease-in-out
                  group-hover:origin-left
                  group-hover:scale-x-100
                "
              ></span>
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mt-3 p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm">
                ✅ Message sent successfully! I&apos;ll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mt-3 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                ❌ Failed to send message. Please try again.
              </div>
            )}
          </form>

          {/* Contact Info */}
          <div className="lg:w-1/2 space-y-3 md:space-y-4">
            {/* Phone */}
            <div className="flex items-start gap-3 md:gap-4 bg-[#1a1a2e] border border-[#2d2d44] rounded-xl p-4 md:p-5 lg:p-6 hover:border-[#7C3AED] transition-all duration-300 hover:shadow-lg hover:shadow-[#7C3AED]/10">
              <div className="flex-shrink-0 bg-[#7C3AED]/10 rounded-lg p-3 md:p-4">
                <FiPhone className="text-[#7C3AED] text-xl md:text-2xl" />
              </div>
              <div>
                <p className="text-xs md:text-sm text-[#A8B2D1] font-medium uppercase tracking-wider">Phone</p>
                <Link href="tel:+2347038699659" className="text-[#94A3B8] hover:text-[#7C3AED] transition-colors duration-300 text-sm md:text-base block">
                  +234-703-8699-659
                </Link>
                <Link href="tel:+2348155975040" className="text-[#94A3B8] hover:text-[#7C3AED] transition-colors duration-300 text-sm md:text-base block">
                  +234-815-5975-040
                </Link>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3 md:gap-4 bg-[#1a1a2e] border border-[#2d2d44] rounded-xl p-4 md:p-5 lg:p-6 hover:border-[#7C3AED] transition-all duration-300 hover:shadow-lg hover:shadow-[#7C3AED]/10">
              <div className="flex-shrink-0 bg-[#7C3AED]/10 rounded-lg p-3 md:p-4">
                <FiMail className="text-[#7C3AED] text-xl md:text-2xl" />
              </div>
              <div>
                <p className="text-xs md:text-sm text-[#A8B2D1] font-medium uppercase tracking-wider">Email</p>
                <Link href="mailto:omosanjos77@gmail.com" className="text-[#94A3B8] hover:text-[#7C3AED] transition-colors duration-300 text-sm md:text-base block break-all">
                  omosanjos77@gmail.com
                </Link>
                <Link href="mailto:hackyraji02@gmail.com" className="text-[#94A3B8] hover:text-[#7C3AED] transition-colors duration-300 text-sm md:text-base block break-all">
                  hackyraji02@gmail.com
                </Link>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3 md:gap-4 bg-[#1a1a2e] border border-[#2d2d44] rounded-xl p-4 md:p-5 lg:p-6 hover:border-[#7C3AED] transition-all duration-300 hover:shadow-lg hover:shadow-[#7C3AED]/10">
              <div className="flex-shrink-0 bg-[#7C3AED]/10 rounded-lg p-3 md:p-4">
                <BsGeoAlt className="text-[#7C3AED] text-xl md:text-2xl" />
              </div>
              <div>
                <p className="text-xs md:text-sm text-[#A8B2D1] font-medium uppercase tracking-wider">Address</p>
                <p className="text-[#94A3B8] text-sm md:text-base leading-relaxed">
                  11 Akapoti Street, Olunlade, <br />
                  Ilorin, Kwara State Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact