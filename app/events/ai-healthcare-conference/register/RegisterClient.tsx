'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import CountrySelector from '../../../components/CountrySelector';
import { useEscapeToClose } from '../../../lib/useEscapeToClose';

export default function ConferenceRegistration() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    gender: '',
    nationalMedicalAssociation: '',
    specialization: '',
    yearOfGraduation: '',
    medicalCouncilRegistration: '',
    email: '',
    address: '',
    countryCode: '',
    cellPhone: '',
    bankDetails: '',
    registrationType: '',
    fees: '',
    transactionDetails: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copyMessage, setCopyMessage] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEscapeToClose(showSuccessModal, () => handleSuccessClose());

  const generateReferenceNumber = () => {
    const now = new Date();
    const datePart = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
    const randomPart = Math.random().toString(36).slice(2, 6).toUpperCase();
    return `CMA-${datePart}-${randomPart}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => {
      const newData = {
        ...prev,
        [name]: value
      };
      
      // Auto-sync registration type and fees
      if (name === 'registrationType') {
        if (value === 'Single Delegate Registration only') {
          newData.fees = '5000';
        } else if (value === 'Single Delegate Registration + Accommodation') {
          newData.fees = '15000';
        } else if (value === 'FCMA Fellows, Interns, Postgraduates') {
          newData.fees = '4000';
        } else if (value === 'Spot Registration Single Delegate') {
          newData.fees = '10000';
        }
      } else if (name === 'fees') {
        if (value === '4000') {
          newData.registrationType = 'FCMA Fellows, Interns, Postgraduates';
        } else if (value === '5000') {
          newData.registrationType = 'Single Delegate Registration only';
        } else if (value === '10000') {
          newData.registrationType = 'Spot Registration Single Delegate';
        } else if (value === '15000') {
          newData.registrationType = 'Single Delegate Registration + Accommodation';
        }
      }
      
      return newData;
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of Birth is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.nationalMedicalAssociation.trim()) newErrors.nationalMedicalAssociation = 'National Medical Association is required';
    if (!formData.specialization.trim()) newErrors.specialization = 'Specialization is required';
    if (!formData.yearOfGraduation) newErrors.yearOfGraduation = 'Year of Graduation is required';
    if (!formData.medicalCouncilRegistration.trim()) newErrors.medicalCouncilRegistration = 'Medical Council Registration Number is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.countryCode.trim()) newErrors.countryCode = 'Country Code is required';
    if (!formData.cellPhone.trim()) newErrors.cellPhone = 'Cell Phone Number is required';
    if (!formData.bankDetails.trim()) newErrors.bankDetails = 'Bank Details are required';
    if (!formData.registrationType) newErrors.registrationType = 'Registration Type is required';
    if (!formData.fees) newErrors.fees = 'Fees selection is required';
    if (!formData.transactionDetails.trim()) newErrors.transactionDetails = 'Transaction Details are required';

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
      // Prepare payload according to the API specification
      const payload = {
        referenceNumber: reference,
        name: formData.name || '',
        dateOfBirth: formData.dateOfBirth || '',
        gender: formData.gender || '',
        nationalMedicalAssociation: formData.nationalMedicalAssociation || '',
        specialization: formData.specialization || '',
        yearOfGraduation: formData.yearOfGraduation || '',
        medicalCouncilRegNumber: formData.medicalCouncilRegistration || '',
        email: formData.email || '',
        address: formData.address || '',
        countryCode: formData.countryCode || '',
        cellPhone: formData.cellPhone || '',
        bankDetails: formData.bankDetails || '',
        registrationType: formData.registrationType || '',
        fees: formData.fees || '',
        transactionDetails: formData.transactionDetails || ''
      };

      console.log('Submitting registration with payload:', payload);

      await fetch('https://script.google.com/macros/s/AKfycbxesoK_tRthPfjWX87fWX2XL4cFuntlrJArYSeGE_0e4RAPPh5ND8mqH5YHdAMizlbVZw/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      // With no-cors mode, we can't read the response, so we assume success if no error is thrown
      setReferenceNumber(reference);
      setShowSuccessModal(true);
    } catch (error) {
      console.error('Error submitting registration:', error);
      setSubmitError('There was an error submitting your registration. Please check your internet connection and try again, or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
    router.push('/events/ai-healthcare-conference');
  };

  const handleCopy = async (label: string, value: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(value);
        setCopyMessage(`${label} copied to clipboard`);
        setTimeout(() => setCopyMessage(null), 2000);
      } catch (error) {
        console.error(`Failed to copy ${label}:`, error);
        setCopyMessage(null);
        alert(`Unable to copy ${label}. Please copy it manually.`);
      }
    } else {
      alert('Clipboard access is not supported in this browser. Please copy the details manually.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-surface via-brand-surface to-brand-surface py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full mb-4 sm:mb-6">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal bg-clip-text text-transparent mb-4 sm:mb-6">
            Conference Registration
          </h1>
          <div className="w-20 sm:w-24 md:w-32 h-1.5 bg-gradient-to-r from-brand-navy via-brand-teal to-brand-teal mx-auto rounded-full mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-brand-navy leading-relaxed max-w-3xl mx-auto">
            Register for the CMA Global Conference 2025 on AI in Healthcare & Medicine
          </p>
          <p className="text-sm sm:text-base text-brand-navy mt-2">
            <strong>Date:</strong> 22nd & 23rd November, 2025 | <strong>Venue:</strong> Jubilee Hills Convention Centre, Hyderabad
          </p>
        </div>

        {/* Registration Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-brand-navy/50 p-6 sm:p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            {/* Personal Information Section */}
            <div className="bg-gradient-to-r from-brand-surface to-brand-surface rounded-xl p-4 sm:p-6 border border-brand-navy/15">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-4 sm:mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                Personal Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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
                  <label htmlFor="countryCode" className="block text-sm font-semibold text-brand-navy mb-2">
                    Country Code <span className="text-red-500">*</span>
                  </label>
                  <CountrySelector
                    value={formData.countryCode}
                    onChange={(value) => {
                      setFormData(prev => ({ ...prev, countryCode: value }));
                      if (errors.countryCode) {
                        setErrors(prev => ({ ...prev, countryCode: '' }));
                      }
                    }}
                    error={errors.countryCode}
                    placeholder="Select Country Code"
                  />
                </div>

                <div>
                  <label htmlFor="cellPhone" className="block text-sm font-semibold text-brand-navy mb-2">
                    Cell Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="cellPhone"
                    name="cellPhone"
                    value={formData.cellPhone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-navy ${
                      errors.cellPhone ? 'border-red-500 bg-red-50' : 'border-brand-navy/15 focus:border-brand-navy'
                    }`}
                    placeholder="Enter your phone number"
                  />
                  {errors.cellPhone && <p className="text-red-500 text-sm mt-1">{errors.cellPhone}</p>}
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

            {/* Medical Information Section */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 border border-blue-200">
              <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 sm:mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                Medical Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="nationalMedicalAssociation" className="block text-sm font-semibold text-blue-900 mb-2">
                    State your National Medical Association <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="nationalMedicalAssociation"
                    name="nationalMedicalAssociation"
                    value={formData.nationalMedicalAssociation}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.nationalMedicalAssociation ? 'border-red-500 bg-red-50' : 'border-blue-200 focus:border-blue-500'
                    }`}
                    placeholder="e.g., Indian Medical Association"
                  />
                  {errors.nationalMedicalAssociation && <p className="text-red-500 text-sm mt-1">{errors.nationalMedicalAssociation}</p>}
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
                    Year of Graduation as Specialist <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="yearOfGraduation"
                    name="yearOfGraduation"
                    value={formData.yearOfGraduation}
                    onChange={handleInputChange}
                    min="1950"
                    max="2025"
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.yearOfGraduation ? 'border-red-500 bg-red-50' : 'border-blue-200 focus:border-blue-500'
                    }`}
                    placeholder="e.g., 2010"
                  />
                  {errors.yearOfGraduation && <p className="text-red-500 text-sm mt-1">{errors.yearOfGraduation}</p>}
                </div>

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
                  {errors.medicalCouncilRegistration && <p className="text-red-500 text-sm mt-1">{errors.medicalCouncilRegistration}</p>}
                </div>
              </div>
            </div>

            {/* Payment Information Section */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 sm:p-6 border border-purple-200">
              <div className="flex items-center mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-purple-900 flex items-center gap-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Payment Information
                </h2>
              </div>
              
              {copyMessage && (
                <div className="mb-5 flex items-center gap-3 rounded-lg border border-brand-navy/15 bg-brand-surface px-4 py-3 text-sm font-semibold text-brand-navy shadow-sm">
                  <svg className="w-5 h-5 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>{copyMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="registrationType" className="block text-sm font-semibold text-purple-900 mb-2">
                    Registration Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="registrationType"
                    name="registrationType"
                    value={formData.registrationType}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      errors.registrationType ? 'border-red-500 bg-red-50' : 'border-purple-200 focus:border-purple-500'
                    }`}
                  >
                    <option value="">Select Registration Type</option>
                    <option value="Single Delegate Registration only">Single Delegate Registration only</option>
                    <option value="Single Delegate Registration + Accommodation">Single Delegate Registration + Accommodation</option>
                    <option value="FCMA Fellows, Interns, Postgraduates">FCMA Fellows, Interns, Postgraduates</option>
                    <option value="Spot Registration Single Delegate">Spot Registration Single Delegate</option>
                  </select>
                  {errors.registrationType && <p className="text-red-500 text-sm mt-1">{errors.registrationType}</p>}
                </div>

                <div>
                  <label htmlFor="fees" className="block text-sm font-semibold text-purple-900 mb-2">
                    Fees <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="fees"
                    name="fees"
                    value={formData.fees}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      errors.fees ? 'border-red-500 bg-red-50' : 'border-purple-200 focus:border-purple-500'
                    }`}
                  >
                    <option value="">Select Fee Amount</option>
                    <option value="4000">₹4,000</option>
                    <option value="5000">₹5,000</option>
                    <option value="10000">₹10,000</option>
                    <option value="15000">₹15,000</option>
                  </select>
                  {errors.fees && <p className="text-red-500 text-sm mt-1">{errors.fees}</p>}
                </div>
              </div>

              <div id="payment-options-section" className="mt-6 space-y-4 sm:space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-blue-200">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                    <h4 className="text-sm sm:text-lg font-bold text-blue-900">Foreign Delegates</h4>
                  </div>
                  <p className="text-blue-800 font-semibold text-sm sm:text-base">
                    Online Programme: £50 / ₹6,000 INR
                  </p>
                  <p className="text-xs sm:text-sm text-blue-700 mt-1">
                    Foreign delegates must pay via bank details only
                  </p>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-gradient-to-r from-brand-surface to-brand-surface rounded-lg sm:rounded-xl p-4 sm:p-6 border border-brand-navy/15">
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-brand-navy to-brand-teal rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg">
                        1
                      </div>
                      <h3 className="text-base sm:text-xl font-bold text-brand-navy">Choose Payment Method</h3>
                    </div>
                    <p className="text-brand-navy mb-3 sm:mb-4 text-sm sm:text-base">
                      Pick the option that works best for you. Each card below has quick actions to help you complete the payment smoothly.
                    </p>
                    <div className="space-y-4">
                      <div className="rounded-2xl border border-brand-navy/15 bg-white p-4 sm:p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3 sm:mb-4">
                          <div>
                            <h4 className="text-base sm:text-lg font-bold text-brand-navy">Pay via QR Code</h4>
                            <p className="text-xs text-brand-navy sm:text-sm">Fastest way for UPI users</p>
                          </div>
                          <span className="self-start rounded-full bg-brand-surface px-3 py-1 text-xs font-semibold text-brand-navy">Instant</span>
                        </div>
                        <p className="text-sm sm:text-base text-brand-navy mb-3">
                          Open any UPI app, choose &ldquo;Scan &amp; Pay&rdquo;, and point your camera at the QR code below.
                        </p>
                        <div className="relative mx-auto mb-4 max-w-[240px] overflow-hidden rounded-2xl border-[6px] border-brand-navy/10 bg-gradient-to-br from-brand-surface to-brand-surface p-3 shadow-inner">
                          <div className="pointer-events-none absolute inset-0 animate-pulse bg-gradient-to-br from-brand-surface/15 via-transparent to-brand-surface/15" />
                          <Image
                            src="/paymentUPI.jpeg"
                            alt="Conference payment QR code"
                            width={240}
                            height={240}
                            className="relative z-10 w-full rounded-xl shadow-md transition duration-300 hover:scale-105"
                          />
                        </div>
                        <ul className="space-y-2 text-xs sm:text-sm text-brand-navy">
                          <li className="flex items-start gap-2">
                            <span className="mt-0.5 text-brand-navy">✅</span>
                            <span>Confirm the payee name shows <strong>IMA Banjara Hills</strong> before paying.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-0.5 text-brand-navy">📝</span>
                            <span>Save a screenshot or jot down the UTR/transaction ID. You’ll enter it below.</span>
                          </li>
                        </ul>
                      </div>

                      <div className="rounded-2xl border border-blue-200 bg-white p-4 sm:p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3 sm:mb-4">
                          <div>
                            <h4 className="text-base sm:text-lg font-bold text-blue-900">Pay via Bank Transfer</h4>
                            <p className="text-xs text-blue-600 sm:text-sm">NEFT · RTGS · IMPS · Cheque</p>
                          </div>
                          <span className="self-start rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">Secure</span>
                        </div>
                        <p className="text-sm sm:text-base text-blue-700 mb-4">
                          Use these verified bank details. Copy each line instantly and paste into your banking app to avoid typos.
                        </p>

                        <div className="space-y-3 rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-3 sm:p-4">
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
                                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16h8M8 12h8m-3-8H9a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V8l-4-4z" />
                                  </svg>
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
                                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16h8M8 12h8m-3-8H9a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V8l-4-4z" />
                                  </svg>
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
                                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16h8M8 12h8m-3-8H9a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V8l-4-4z" />
                                  </svg>
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
                                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16h8M8 12h8m-3-8H9a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V8l-4-4z" />
                                  </svg>
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
                                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16h8M8 12h8m-3-8H9a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V8l-4-4z" />
                                  </svg>
                                  Copy
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="rounded-lg border border-blue-100 bg-white px-3 py-2 text-xs sm:text-sm text-blue-700">
                            💡 Include your name in the transfer remarks for faster verification.
                          </div>
                        </div>

                        <div className="mt-4 rounded-lg border border-blue-100 bg-white px-3 py-3 text-xs sm:text-sm text-blue-700">
                          <p className="flex items-start gap-2">
                            <span className="mt-0.5 text-blue-500">🏷️</span>
                            <span>Add your full name in the transfer remarks so we can match your payment quickly.</span>
                          </p>
                          <p className="mt-2 flex items-start gap-2">
                            <span className="mt-0.5 text-blue-500">✉️</span>
                            <span><strong>Cheques / Demand Drafts:</strong> Make them payable to <em>IMA, Banjara Hills, Hyderabad</em>.</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-purple-200">
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg">
                        2
                      </div>
                      <h3 className="text-base sm:text-xl font-bold text-purple-900">Complete Transaction</h3>
                    </div>
                    <p className="text-purple-800 mb-3 sm:mb-4 text-sm sm:text-base">
                      After the payment is successful, keep your reference handy and enter it right away in the fields below.
                    </p>
                    <div className="bg-white rounded-lg p-3 sm:p-4 border border-purple-200">
                      <p className="text-xs sm:text-sm text-purple-700 font-medium">
                        📝 Look for a UTR, transaction ID, reference number, or screenshot. Paste those details into the form so we can confirm your registration.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="bankDetails" className="block text-sm font-semibold text-purple-900 mb-2">
                    Bank Details You Used <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="bankDetails"
                    name="bankDetails"
                    value={formData.bankDetails}
                    onChange={handleInputChange}
                    rows={3}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none ${
                      errors.bankDetails ? 'border-red-500 bg-red-50' : 'border-purple-200 focus:border-purple-500'
                    }`}
                    placeholder="Mention the account or payment option you used. Example: SBI, Jubilee Hills branch via NEFT."
                  />
                  {errors.bankDetails && <p className="text-red-500 text-sm mt-1">{errors.bankDetails}</p>}
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
                    placeholder="Enter UTR / transaction ID / payment reference and any additional notes."
                  />
                  {errors.transactionDetails && <p className="text-red-500 text-sm mt-1">{errors.transactionDetails}</p>}
                </div>
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

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex-1 font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-brand-navy to-brand-teal hover:from-brand-navy-dark hover:to-brand-teal-dark hover:shadow-xl transform hover:scale-105'
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Submit Registration
                  </>
                )}
              </button>
              
              <button
                type="button"
                onClick={() => router.back()}
                className="flex-1 bg-brand-surface hover:bg-brand-navy/10 text-brand-navy font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
                Go Back
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-brand-navy/15">
            <h3 className="text-lg font-bold text-brand-navy mb-3">Need Help?</h3>
            <p className="text-brand-navy mb-4">
              For any registration queries or assistance, please contact our organizing committee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span className='text-brand-navy'>presidentimabanjarahills@gmail.com , convenorcma@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span className='text-brand-navy'>+91 99892-20003 , +91 98491-37420</span>
              </div>
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
          aria-labelledby="registration-success-heading"
        >
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
            <div className="p-6 sm:p-8 text-center">
              {/* Success Icon */}
              <div className="mx-auto flex items-center justify-center h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-brand-surface mb-4 sm:mb-6">
                <svg className="h-8 w-8 sm:h-10 sm:w-10 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>

              {/* Success Message */}
              <h3 id="registration-success-heading" className="text-lg sm:text-xl font-bold text-brand-navy mb-2">
                Registration Successful!
              </h3>
              <p className="text-sm sm:text-base text-brand-navy/80 mb-4">
                Thank you for registering for the CMA Global Conference 2025. We will contact you soon with further details.
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
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16h8M8 12h8m-3-8H9a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V8l-4-4z" />
                      </svg>
                      Copy
                    </button>
                  </div>
                  <p className="text-xs text-brand-navy/70 mt-2">
                    Save this for your records and quote it in any follow-up with the organizing committee.
                  </p>
                </div>
              )}

              {/* Action Button */}
              <button
                onClick={handleSuccessClose}
                className="w-full bg-gradient-to-r from-brand-navy to-brand-teal hover:from-brand-navy-dark hover:to-brand-teal-dark text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Continue to Events
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
