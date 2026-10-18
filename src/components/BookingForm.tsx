import React, { useState } from 'react';
import { COMPANY_DETAILS } from '../data/roofingData';

interface BookingFormProps {
  initialZip?: string;
  serviceName?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ initialZip = '', serviceName }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    zipCode: initialZip,
    phone: '',
    serviceInterest: serviceName || 'Roof Inspection & Assessment',
    issueDetails: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [calling, setCalling] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setCalling(true);
    // Immediately trigger phone call to the company hotline
    try {
      window.location.href = `tel:${COMPANY_DETAILS.mainPhoneRaw}`;
    } catch (err) {
      console.log('Call trigger error:', err);
    }
  };

  return (
    <section id="book" className="book-section">
      <div className="container container-narrow text-center">
        <h2>
          Ready for Fast, Reliable <span className="font-serif-accent">Roofing Help in Cary, NC</span>?
        </h2>
        <p className="book-subtitle">
          Request your free on-site roof inspection or consultation today in Cary, NC.
        </p>

        {submitted ? (
          <div className="bg-white/10 border border-[#1D9E75] rounded-2xl p-8 text-center text-white backdrop-blur-sm animate-fadeIn">
            <div className="w-16 h-16 bg-[#1D9E75] text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-4 font-bold shadow-lg animate-pulse">
              📞
            </div>
            <div className="inline-block px-3 py-1 bg-[#F07020] text-white font-bold text-xs uppercase tracking-wider rounded-full mb-3">
              Calling Now • Direct Dispatch Line
            </div>
            <h3 className="text-white text-2xl md:text-3xl font-extrabold mb-2">Connecting Your Call Now!</h3>
            <p className="text-white max-w-lg mx-auto mb-4 text-sm leading-relaxed font-normal">
              Thank you, <strong>{formData.fullName}</strong>. Your request for <strong>{formData.serviceInterest}</strong> ({formData.zipCode || 'Cary, NC'}) has been registered. Your phone is now opening to dial our Cary dispatcher directly at <strong>{COMPANY_DETAILS.mainPhone}</strong>.
            </p>
            <div className="p-3 bg-black/40 rounded-xl max-w-md mx-auto mb-6 text-xs text-white border border-white/20 font-medium">
              ⚡ If the automatic call prompt was blocked by your browser, tap the button below to connect instantly:
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href={`tel:${COMPANY_DETAILS.mainPhoneRaw}`} 
                className="btn btn-primary !text-base !py-3 !px-6 animate-bounce !text-white font-extrabold"
              >
                📞 Dial {COMPANY_DETAILS.mainPhone} Now
              </a>
              <button 
                type="button" 
                onClick={() => setSubmitted(false)}
                className="btn btn-secondary !mt-0 !text-white !bg-white/10 hover:!bg-white/20 !border-white/20 font-bold"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        ) : (
          <form className="book-form" id="auditForm" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName" className="text-white font-bold">Full Name *</label>
                <input 
                  id="fullName"
                  type="text" 
                  required 
                  placeholder="John Smith"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="text-white font-bold">Email Address *</label>
                <input 
                  id="email"
                  type="email" 
                  required 
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="zipCode" className="text-white font-bold">Cary Zip Code / Address</label>
                <input 
                  id="zipCode"
                  type="text" 
                  placeholder="e.g. 27518 / Waverly Place"
                  value={formData.zipCode}
                  onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone" className="text-white font-bold">Phone Number *</label>
                <input 
                  id="phone"
                  type="tel" 
                  required 
                  placeholder="(919) 335-9543"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="serviceNeeded" className="block text-xs text-white mb-1.5 font-bold">Service Needed</label>
              <select
                id="serviceNeeded"
                className="w-full p-3 rounded-lg bg-black/40 border border-white/25 text-white text-sm font-medium"
                value={formData.serviceInterest}
                onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
              >
                <option value="Roof Installation & Replacement">Roof Installation & Replacement</option>
                <option value="Emergency Roof Leak Repair">Emergency Roof Leak Repair</option>
                <option value="Storm & Hail Damage Inspection">Storm & Hail Damage Inspection</option>
                <option value="Metal Roofing System">Metal Roofing System</option>
                <option value="Commercial / Flat Roofing">Commercial / Flat Roofing</option>
                <option value="Gutter Installation & Guards">Gutter Installation & Guards</option>
                <option value="Routine Roof Maintenance">Routine Roof Maintenance</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="issueDetails" className="block text-xs text-white mb-1.5 font-bold">Project Notes / Roof Condition</label>
              <textarea
                id="issueDetails"
                rows={3}
                placeholder="Describe your roof leak, storm damage, or replacement goals..."
                className="w-full p-3 rounded-lg bg-black/40 border border-white/25 text-white text-sm"
                value={formData.issueDetails}
                onChange={(e) => setFormData({ ...formData, issueDetails: e.target.value })}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-lg w-full !text-white font-extrabold">
              Schedule Free Roof Inspection →
            </button>
            <div className="form-notice">
              ⚡ Fast response • Top-rated local Cary roofers • No-obligation written estimate
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
