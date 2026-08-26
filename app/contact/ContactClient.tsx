'use client';

import { useState } from 'react';
import { useEscapeToClose } from '../lib/useEscapeToClose';

/**
 * Google Apps Script Web App endpoint for the contact form.
 *
 * This is a SEPARATE deployment from the conference registration form
 * (see GOOGLE_APPS_SCRIPT_README.md) - it must point to its own Google
 * Sheet + Apps Script project, not the registration one, so the two
 * submissions never collide in the same sheet.
 *
 * Setup:
 * 1. Create a new Google Sheet with header row (exact order):
 *      Name | Email | Phone | Subject | Message | Timestamp
 * 2. Extensions > Apps Script, paste this doPost handler, then
 *    Deploy > New deployment > Web app (execute as "Me", access "Anyone"):
 *
 *      function doPost(e) {
 *        try {
 *          const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *          const data = JSON.parse(e.postData.contents);
 *
 *          sheet.appendRow([
 *            data.name || '',
 *            data.email || '',
 *            data.phone || '',
 *            data.subject || '',
 *            data.message || '',
 *            new Date(),
 *          ]);
 *
 *          return ContentService
 *            .createTextOutput(JSON.stringify({ result: 'success' }))
 *            .setMimeType(ContentService.MimeType.JSON);
 *        } catch (error) {
 *          return ContentService
 *            .createTextOutput(JSON.stringify({ result: 'error', message: error.toString() }))
 *            .setMimeType(ContentService.MimeType.JSON);
 *        }
 *      }
 *
 * 3. Copy the deployed /exec URL into NEXT_PUBLIC_CONTACT_SCRIPT_URL.
 */
const CONTACT_FORM_SCRIPT_URL = process.env.NEXT_PUBLIC_CONTACT_SCRIPT_URL || '';

const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?origin=mfe&pb=!1m3!3m2!1m1!4s12999034193304877690';

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEscapeToClose(showSuccessModal, () => setShowSuccessModal(false));

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) return;

    if (!CONTACT_FORM_SCRIPT_URL) {
      setSubmitError(
        'The contact form is not yet connected. Please email us directly at presidentimabanjarahills@gmail.com.'
      );
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      };

      await fetch(CONTACT_FORM_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // With no-cors mode, we can't read the response, so we assume success if no error is thrown
      setShowSuccessModal(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitError('There was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-surface">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal bg-clip-text text-transparent mb-6 sm:mb-8">
            Contact Us
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-brand-navy to-brand-teal mx-auto rounded-full mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl md:text-2xl text-brand-navy max-w-4xl mx-auto leading-relaxed">
            Have a question or want to get in touch with IMA Banjara Hills? Send us a message or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl border border-brand-navy/10 p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-6">Send a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-brand-navy mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-navy ${
                      errors.name ? 'border-red-500 bg-red-50' : 'border-brand-navy/15 focus:border-brand-navy'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-brand-navy mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-navy ${
                      errors.email ? 'border-red-500 bg-red-50' : 'border-brand-navy/15 focus:border-brand-navy'
                    }`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-brand-navy mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-navy ${
                      errors.phone ? 'border-red-500 bg-red-50' : 'border-brand-navy/15 focus:border-brand-navy'
                    }`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-brand-navy mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-navy ${
                      errors.subject ? 'border-red-500 bg-red-50' : 'border-brand-navy/15 focus:border-brand-navy'
                    }`}
                    placeholder="What is this regarding?"
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-brand-navy mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-navy resize-none ${
                    errors.message ? 'border-red-500 bg-red-50' : 'border-brand-navy/15 focus:border-brand-navy'
                  }`}
                  placeholder="Write your message here..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              {submitError && (
                <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-brand-navy to-brand-teal hover:from-brand-navy-dark hover:to-brand-teal-dark hover:shadow-xl transform hover:scale-105'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-1 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-brand-navy/10 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-6">Get in Touch</h2>

              <div className="space-y-5">
                <a
                  href="tel:+919989220003"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-brand-navy/70 text-xs sm:text-sm">Call Us</p>
                    <p className="text-brand-navy font-semibold text-sm sm:text-base group-hover:text-brand-teal transition-colors">
                      +91 99892-20003
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:presidentimabanjarahills@gmail.com"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-brand-navy/70 text-xs sm:text-sm">Email Us</p>
                    <p className="text-brand-navy font-semibold text-sm sm:text-base group-hover:text-brand-teal transition-colors break-all">
                      presidentimabanjarahills@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-brand-navy/70 text-xs sm:text-sm mb-1">Visit Us</p>
                    <p className="text-brand-navy font-semibold text-sm sm:text-base">
                      Dr Prabhu Life Multispeciality Clinics and Hospital
                    </p>
                    <p className="text-brand-navy text-sm sm:text-base">House No 3-2-10/6, 3rd Floor</p>
                    <p className="text-brand-navy text-sm sm:text-base">Chaitanyanagar Colony, Manikonda</p>
                    <p className="text-brand-navy text-sm sm:text-base">Hyderabad 500089</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-brand-navy/10">
              <iframe
                src={MAP_EMBED_URL}
                title="Dr Prabhu Life Multispeciality Clinics and Hospital - Location Map"
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-success-heading"
        >
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
            <div className="p-6 sm:p-8 text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-brand-surface mb-4 sm:mb-6">
                <svg className="h-8 w-8 sm:h-10 sm:w-10 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 id="contact-success-heading" className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6">
                Thank you for reaching out. We will get back to you as soon as possible.
              </p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full bg-gradient-to-r from-brand-navy to-brand-teal hover:from-brand-navy-dark hover:to-brand-teal-dark text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
