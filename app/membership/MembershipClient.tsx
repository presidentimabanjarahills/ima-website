'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useEscapeToClose } from '../lib/useEscapeToClose';

// TODO: This must be its own Apps Script deployment (copy the conference
// registration script and point it at a separate "Membership Applications"
// sheet) - reusing the conference endpoint would mix membership applicants
// into the conference registration data. Override via
// NEXT_PUBLIC_MEMBERSHIP_FORM_ENDPOINT once deployed.
const MEMBERSHIP_FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_MEMBERSHIP_FORM_ENDPOINT ||
  'https://script.google.com/macros/s/REPLACE_WITH_MEMBERSHIP_APPS_SCRIPT_ID/exec';

const requirements = [
  'Duly filled form',
  'Two passport size photos',
  'Any state Medical council registration',
  'Aadhar or PAN card copy',
  'Registration fee by bank transfer or UPI',
];

export default function MembershipClient() {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    medicalCouncilRegistration: '',
    stateMedicalCouncil: '',
    specialization: '',
    yearOfGraduation: '',
    membershipType: '',
    fees: '',
    paymentMethodUsed: '',
    transactionDetails: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState<string | null>(null);
  const [copyMessage, setCopyMessage] = useState<string | null>(null);
  const [showBankDetails, setShowBankDetails] = useState(false);

  useEscapeToClose(showSuccessModal, () => handleSuccessClose());

  const generateReferenceNumber = () => {
    const now = new Date();
    const datePart = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
    const randomPart = Math.random().toString(36).slice(2, 6).toUpperCase();
    return `IMA-MEM-${datePart}-${randomPart}`;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const newData = { ...prev, [name]: value };
      if (name === 'membershipType') {
        newData.fees = value === 'Couple Registration' ? '30000' : value === 'Single Registration' ? '20000' : '';
      }
      return newData;
    });

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleCopy = async (label: string, value: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(value);
        setCopyMessage(`${label} copied to clipboard`);
        setTimeout(() => setCopyMessage(null), 2000);
      } catch (error) {
        console.error(`Failed to copy ${label}:`, error);
        alert(`Unable to copy ${label}. Please copy it manually.`);
      }
    } else {
      alert('Clipboard access is not supported in this browser. Please copy the details manually.');
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.medicalCouncilRegistration.trim())
      newErrors.medicalCouncilRegistration = 'Medical council registration number is required';
    if (!formData.stateMedicalCouncil.trim())
      newErrors.stateMedicalCouncil = 'State medical council is required';
    if (!formData.specialization.trim()) newErrors.specialization = 'Specialization is required';
    if (!formData.yearOfGraduation) newErrors.yearOfGraduation = 'Year of graduation is required';
    if (!formData.membershipType) newErrors.membershipType = 'Registration type is required';
    if (!formData.paymentMethodUsed.trim()) newErrors.paymentMethodUsed = 'Payment method is required';
    if (!formData.transactionDetails.trim())
      newErrors.transactionDetails = 'Transaction details are required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      setSubmitError('Please fix the highlighted fields below before submitting.');
      return;
    }

    setIsSubmitting(true);
    const reference = generateReferenceNumber();
    try {
      const payload = { referenceNumber: reference, ...formData };
      await fetch(MEMBERSHIP_FORM_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      // With no-cors mode, we can't read the response, so we assume success if no error is thrown
      setReferenceNumber(reference);
      setShowSuccessModal(true);
    } catch (error) {
      console.error('Error submitting membership application:', error);
      setSubmitError(
        'There was an error submitting your application. Please check your internet connection and try again, or contact us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
    setFormData({
      fullName: '',
      dateOfBirth: '',
      gender: '',
      email: '',
      phone: '',
      address: '',
      medicalCouncilRegistration: '',
      stateMedicalCouncil: '',
      specialization: '',
      yearOfGraduation: '',
      membershipType: '',
      fees: '',
      paymentMethodUsed: '',
      transactionDetails: '',
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal bg-clip-text text-transparent mb-6">
          We Need You! Become an IMA Member
        </h1>
        <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-brand-navy to-brand-teal mx-auto rounded-full mb-6 sm:mb-8"></div>
        <p className="text-lg sm:text-xl text-brand-navy max-w-2xl mx-auto leading-relaxed">
          Join a community of over 367,000 medical professionals advancing healthcare across India.
        </p>
      </div>

      {/* Requirements + Fees */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
        <div className="bg-gradient-to-br from-brand-surface to-white rounded-2xl p-6 sm:p-8 border border-brand-navy/15 shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-6 flex items-center">
            <div className="w-10 h-10 bg-brand-navy rounded-xl flex items-center justify-center mr-3 shadow-md">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            Membership Requirements
          </h2>
          <div className="space-y-4">
            {requirements.map((requirement, index) => (
              <div key={requirement} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-brand-navy text-sm sm:text-base font-medium pt-1">{requirement}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 sm:p-8 border border-amber-200/50 shadow-lg">
            <h3 className="text-lg sm:text-xl font-bold text-amber-800 mb-4 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mr-3 shadow-md">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              Membership Fees
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white/70 rounded-xl border border-amber-200">
                <span className="text-amber-800 font-semibold text-sm sm:text-base">Single Registration</span>
                <span className="text-xl font-bold text-amber-900">₹20,000</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/70 rounded-xl border border-amber-200">
                <span className="text-amber-800 font-semibold text-sm sm:text-base">Couple Registration</span>
                <span className="text-xl font-bold text-amber-900">₹30,000</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-brand-surface to-white rounded-2xl p-6 sm:p-8 border border-brand-navy/15 shadow-lg">
            <h4 className="text-lg sm:text-xl font-bold text-brand-navy mb-4 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-navy to-brand-teal rounded-lg flex items-center justify-center mr-3 shadow-md">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              Our Address
            </h4>
            <div className="text-brand-navy/90 space-y-1">
              <p className="font-bold text-sm sm:text-base text-brand-navy">DR PRABHUKUMAR CHALLAGALI</p>
              <p className="font-semibold text-sm sm:text-base">PRESIDENT</p>
              <div className="pt-2 space-y-1 text-sm sm:text-base">
                <p>Dr Prabhu Life Multispeciality Clinics and Hospital</p>
                <p>House No 3-2-10/6, 3rd Floor</p>
                <p>Chaitanyanagar Colony, Manikonda</p>
                <p className="font-semibold">Hyderabad - 500089</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Online Application Form */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-brand-navy/50 p-6 sm:p-8 md:p-12 mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-2">Apply Online</h2>
        <p className="text-brand-navy/80 text-sm sm:text-base mb-6 sm:mb-8">
          Fill out the form below to apply for IMA membership. No need to print or mail anything.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          {/* Personal Information */}
          <div className="bg-gradient-to-r from-brand-surface to-brand-surface rounded-xl p-4 sm:p-6 border border-brand-navy/15">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-navy mb-4 sm:mb-6 flex items-center gap-3">
              <svg className="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-brand-navy mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-navy ${
                    errors.fullName ? 'border-red-500 bg-red-50' : 'border-brand-navy/15 focus:border-brand-navy'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-semibold text-brand-navy mb-2">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-navy ${
                    errors.dateOfBirth ? 'border-red-500 bg-red-50' : 'border-brand-navy/15 focus:border-brand-navy'
                  }`}
                />
                {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
              </div>

              <div>
                <label htmlFor="gender" className="block text-sm font-semibold text-brand-navy mb-2">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-navy ${
                    errors.gender ? 'border-red-500 bg-red-50' : 'border-brand-navy/15 focus:border-brand-navy'
                  }`}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Prefer Not To Say">Prefer Not To Say</option>
                </select>
                {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
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

              <div className="md:col-span-2">
                <label htmlFor="address" className="block text-sm font-semibold text-brand-navy mb-2">
                  Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-navy resize-none ${
                    errors.address ? 'border-red-500 bg-red-50' : 'border-brand-navy/15 focus:border-brand-navy'
                  }`}
                  placeholder="Enter your complete address"
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>
            </div>
          </div>

          {/* Medical Information */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 border border-blue-200">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 sm:mb-6 flex items-center gap-3">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Medical Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="medicalCouncilRegistration" className="block text-sm font-semibold text-blue-900 mb-2">
                  Medical Council Registration Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="medicalCouncilRegistration"
                  name="medicalCouncilRegistration"
                  value={formData.medicalCouncilRegistration}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.medicalCouncilRegistration ? 'border-red-500 bg-red-50' : 'border-blue-200 focus:border-blue-500'
                  }`}
                  placeholder="Enter your registration number"
                />
                {errors.medicalCouncilRegistration && (
                  <p className="text-red-500 text-sm mt-1">{errors.medicalCouncilRegistration}</p>
                )}
              </div>

              <div>
                <label htmlFor="stateMedicalCouncil" className="block text-sm font-semibold text-blue-900 mb-2">
                  State Medical Council <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="stateMedicalCouncil"
                  name="stateMedicalCouncil"
                  value={formData.stateMedicalCouncil}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.stateMedicalCouncil ? 'border-red-500 bg-red-50' : 'border-blue-200 focus:border-blue-500'
                  }`}
                  placeholder="e.g., Telangana State Medical Council"
                />
                {errors.stateMedicalCouncil && (
                  <p className="text-red-500 text-sm mt-1">{errors.stateMedicalCouncil}</p>
                )}
              </div>

              <div>
                <label htmlFor="specialization" className="block text-sm font-semibold text-blue-900 mb-2">
                  Specialization <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="specialization"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.specialization ? 'border-red-500 bg-red-50' : 'border-blue-200 focus:border-blue-500'
                  }`}
                  placeholder="e.g., Internal Medicine, Cardiology"
                />
                {errors.specialization && <p className="text-red-500 text-sm mt-1">{errors.specialization}</p>}
              </div>

              <div>
                <label htmlFor="yearOfGraduation" className="block text-sm font-semibold text-blue-900 mb-2">
                  Year of Graduation <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="yearOfGraduation"
                  name="yearOfGraduation"
                  value={formData.yearOfGraduation}
                  onChange={handleInputChange}
                  min="1950"
                  max="2026"
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.yearOfGraduation ? 'border-red-500 bg-red-50' : 'border-blue-200 focus:border-blue-500'
                  }`}
                  placeholder="e.g., 2010"
                />
                {errors.yearOfGraduation && <p className="text-red-500 text-sm mt-1">{errors.yearOfGraduation}</p>}
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 sm:p-6 border border-purple-200">
            <h3 className="text-xl sm:text-2xl font-bold text-purple-900 mb-4 sm:mb-6 flex items-center gap-3">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Payment Information
            </h3>

            {copyMessage && (
              <div className="mb-5 flex items-center gap-3 rounded-lg border border-brand-navy/15 bg-brand-surface px-4 py-3 text-sm font-semibold text-brand-navy shadow-sm">
                <svg className="w-5 h-5 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{copyMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div>
                <label htmlFor="membershipType" className="block text-sm font-semibold text-purple-900 mb-2">
                  Registration Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="membershipType"
                  name="membershipType"
                  value={formData.membershipType}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    errors.membershipType ? 'border-red-500 bg-red-50' : 'border-purple-200 focus:border-purple-500'
                  }`}
                >
                  <option value="">Select Registration Type</option>
                  <option value="Single Registration">Single Registration - ₹20,000</option>
                  <option value="Couple Registration">Couple Registration - ₹30,000</option>
                </select>
                {errors.membershipType && <p className="text-red-500 text-sm mt-1">{errors.membershipType}</p>}
              </div>

              <div>
                <label htmlFor="paymentMethodUsed" className="block text-sm font-semibold text-purple-900 mb-2">
                  Payment Method Used <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="paymentMethodUsed"
                  name="paymentMethodUsed"
                  value={formData.paymentMethodUsed}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    errors.paymentMethodUsed ? 'border-red-500 bg-red-50' : 'border-purple-200 focus:border-purple-500'
                  }`}
                  placeholder="e.g., UPI, NEFT via SBI"
                />
                {errors.paymentMethodUsed && (
                  <p className="text-red-500 text-sm mt-1">{errors.paymentMethodUsed}</p>
                )}
              </div>
            </div>

            {/* Secured payment section: UPI QR primary, bank transfer collapsed */}
            <div className="rounded-2xl border border-brand-navy/15 bg-white p-4 sm:p-5 shadow-sm mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3 sm:mb-4">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-brand-navy">Pay via QR Code</h4>
                  <p className="text-xs text-brand-navy sm:text-sm">Fastest way for UPI users</p>
                </div>
                <span className="self-start rounded-full bg-brand-surface px-3 py-1 text-xs font-semibold text-brand-navy">
                  Instant
                </span>
              </div>
              <p className="text-sm sm:text-base text-brand-navy mb-3">
                Open any UPI app, choose &ldquo;Scan &amp; Pay&rdquo;, and point your camera at the QR code below.
              </p>
              <div className="relative mx-auto mb-4 max-w-[240px] overflow-hidden rounded-2xl border-[6px] border-brand-navy/10 bg-gradient-to-br from-brand-surface to-brand-surface p-3 shadow-inner">
                <Image
                  src="/paymentUPI.jpeg"
                  alt="IMA Banjara Hills membership payment QR code"
                  width={240}
                  height={240}
                  className="relative z-10 w-full rounded-xl shadow-md transition duration-300 hover:scale-105"
                />
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-brand-navy">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">✅</span>
                  <span>Confirm the payee name shows <strong>IMA Banjara Hills</strong> before paying.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">📝</span>
                  <span>Save a screenshot or note the UTR/transaction ID. You&apos;ll enter it below.</span>
                </li>
              </ul>

              <button
                type="button"
                onClick={() => setShowBankDetails((current) => !current)}
                className="mt-5 flex w-full items-center justify-between rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-left transition hover:bg-blue-100"
              >
                <span>
                  <span className="block text-sm sm:text-base font-bold text-blue-900">Pay via Bank Transfer instead</span>
                  <span className="block text-xs sm:text-sm text-blue-600">NEFT · RTGS · IMPS · Cheque</span>
                </span>
                <svg
                  className={`w-5 h-5 text-blue-600 transition-transform duration-200 ${showBankDetails ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showBankDetails && (
                <div className="mt-4 space-y-3 rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-3 sm:p-4">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="flex flex-col gap-1">
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-blue-900">Account Name</span>
                      <div className="flex items-center justify-between gap-2 rounded-lg bg-white px-3 py-2 shadow-sm">
                        <span className="text-xs sm:text-sm font-medium text-blue-800">IMA Banjara Hills, Hyderabad</span>
                        <button
                          type="button"
                          onClick={() => handleCopy('Account Name', 'IMA Banjara Hills, Hyderabad')}
                          className="inline-flex items-center gap-1 rounded-md border border-blue-200 px-2 py-1 text-[11px] font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
                        >
                          Copy
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-blue-900">Bank</span>
                      <div className="rounded-lg bg-white px-3 py-2 text-xs sm:text-sm text-blue-800 shadow-sm">
                        State Bank of India
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-blue-900">Account Number</span>
                      <div className="flex items-center justify-between gap-2 rounded-lg bg-white px-3 py-2 shadow-sm">
                        <span className="font-mono text-xs sm:text-sm text-blue-800">40590834080</span>
                        <button
                          type="button"
                          onClick={() => handleCopy('Account Number', '40590834080')}
                          className="inline-flex items-center gap-1 rounded-md border border-blue-200 px-2 py-1 text-[11px] font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
                        >
                          Copy
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-blue-900">IFSC Code</span>
                      <div className="flex items-center justify-between gap-2 rounded-lg bg-white px-3 py-2 shadow-sm">
                        <span className="font-mono text-xs sm:text-sm text-blue-800">SBIN0008022</span>
                        <button
                          type="button"
                          onClick={() => handleCopy('IFSC Code', 'SBIN0008022')}
                          className="inline-flex items-center gap-1 rounded-md border border-blue-200 px-2 py-1 text-[11px] font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
                        >
                          Copy
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-blue-900">SWIFT Code</span>
                      <div className="flex items-center justify-between gap-2 rounded-lg bg-white px-3 py-2 shadow-sm">
                        <span className="font-mono text-xs sm:text-sm text-blue-800">SBININBB327</span>
                        <button
                          type="button"
                          onClick={() => handleCopy('SWIFT Code', 'SBININBB327')}
                          className="inline-flex items-center gap-1 rounded-md border border-blue-200 px-2 py-1 text-[11px] font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
                        >
                          Copy
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-blue-900">Payable To</span>
                      <div className="flex items-center justify-between gap-2 rounded-lg bg-white px-3 py-2 shadow-sm">
                        <span className="text-xs sm:text-sm text-blue-800">IMA, Banjara Hills, Hyderabad</span>
                        <button
                          type="button"
                          onClick={() => handleCopy('Payable To', 'IMA, Banjara Hills, Hyderabad')}
                          className="inline-flex items-center gap-1 rounded-md border border-blue-200 px-2 py-1 text-[11px] font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border border-blue-100 bg-white px-3 py-2 text-xs sm:text-sm text-blue-700">
                    💡 Include your name in the transfer remarks, and make cheques/demand drafts payable to
                    &ldquo;IMA, Banjara Hills, Hyderabad&rdquo;.
                  </div>
                </div>
              )}
            </div>

            <div>
              <label htmlFor="transactionDetails" className="block text-sm font-semibold text-purple-900 mb-2">
                Transaction Details <span className="text-red-500">*</span>
              </label>
              <textarea
                id="transactionDetails"
                name="transactionDetails"
                value={formData.transactionDetails}
                onChange={handleInputChange}
                rows={3}
                className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none ${
                  errors.transactionDetails ? 'border-red-500 bg-red-50' : 'border-purple-200 focus:border-purple-500'
                }`}
                placeholder="Enter UTR / transaction ID / payment reference"
              />
              {errors.transactionDetails && (
                <p className="text-red-500 text-sm mt-1">{errors.transactionDetails}</p>
              )}
            </div>
          </div>

          {submitError && (
            <div className="flex items-start gap-3 rounded-xl border border-red-300 bg-red-50 px-4 py-3 sm:px-6 sm:py-4 text-red-700">
              <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-sm sm:text-base font-medium">{submitError}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3 ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-brand-navy to-brand-teal hover:from-brand-navy-dark hover:to-brand-teal-dark hover:shadow-xl transform hover:scale-105 text-white'
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Submit Application
              </>
            )}
          </button>
        </form>
      </div>

      {/* Offline Option */}
      <div className="bg-brand-surface/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-brand-navy/10 text-center">
        <h3 className="text-lg sm:text-xl font-bold text-brand-navy mb-2">Prefer to Apply Offline?</h3>
        <p className="text-sm sm:text-base text-brand-navy/80 mb-6 max-w-2xl mx-auto">
          Download the membership form and submit it along with the required documents at our address above.
        </p>
        <a
          href="/Membership Form.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 rounded-full bg-white border-2 border-brand-navy text-brand-navy font-semibold text-sm sm:text-base shadow-md hover:bg-brand-navy hover:text-white transition-all duration-300"
        >
          Download Membership Form
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </a>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="membership-success-heading"
        >
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
            <div className="p-6 sm:p-8 text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-brand-surface mb-4 sm:mb-6">
                <svg className="h-8 w-8 sm:h-10 sm:w-10 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 id="membership-success-heading" className="text-lg sm:text-xl font-bold text-brand-navy mb-2">Application Submitted!</h3>
              <p className="text-sm sm:text-base text-brand-navy/80 mb-4">
                Thank you for applying for IMA membership. Our team will verify your details and contact you soon.
              </p>

              {referenceNumber && (
                <div className="mb-6 rounded-xl border border-brand-navy/15 bg-brand-surface px-4 py-3 sm:px-5 sm:py-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-navy/70 mb-1">
                    Your Reference Number
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-mono text-base sm:text-lg font-bold text-brand-navy">{referenceNumber}</span>
                    <button
                      type="button"
                      onClick={() => handleCopy('Reference number', referenceNumber)}
                      className="inline-flex items-center gap-1 rounded-md border border-brand-navy/20 px-2 py-1 text-xs font-semibold text-brand-navy transition hover:bg-brand-navy hover:text-white"
                    >
                      Copy
                    </button>
                  </div>
                  <p className="text-xs text-brand-navy/70 mt-2">
                    Save this for your records and quote it in any follow-up with IMA Banjara Hills.
                  </p>
                </div>
              )}

              <button
                onClick={handleSuccessClose}
                className="w-full bg-gradient-to-r from-brand-navy to-brand-teal hover:from-brand-navy-dark hover:to-brand-teal-dark text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
