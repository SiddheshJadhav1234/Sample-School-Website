import React, { useState } from 'react';
import { FaCheckCircle, FaFileAlt, FaUserCheck, FaCalendarAlt, FaGraduationCap, FaDownload, FaPhone, FaEnvelope, FaClock, FaClipboard } from 'react-icons/fa';

const AdmissionsPage = () => {
  const [activeStep, setActiveStep] = useState(1);

  const admissionSteps = [
    {
      step: 1,
      title: "Application Form",
      description: "Fill out the online application form with student and parent details.",
      icon: FaFileAlt,
      details: [
        "Complete online application form",
        "Upload recent photograph",
        "Provide parent/guardian information",
        "Submit application fee"
      ]
    },
    {
      step: 2,
      title: "Document Submission",
      description: "Submit required documents for verification and processing.",
      icon: FaUserCheck,
      details: [
        "Birth certificate",
        "Previous school records (if applicable)",
        "Address proof",
        "Medical certificate"
      ]
    },
    {
      step: 3,
      title: "School Visit",
      description: "Visit our campus for interaction and assessment.",
      icon: FaCalendarAlt,
      details: [
        "Campus tour with parents",
        "Meet with teachers and principal",
        "Student interaction session",
        "Q&A with admission team"
      ]
    },
    {
      step: 4,
      title: "Admission Confirmation",
      description: "Complete the admission process and join our school family.",
      icon: FaGraduationCap,
      details: [
        "Admission decision notification",
        "Fee payment and confirmation",
        "Orientation program details",
        "Welcome to MM Vidya Mandir!"
      ]
    }
  ];

  const eligibilityCriteria = [
    {
      grade: "Nursery",
      ageRange: "3-4 years",
      requirements: ["Age as on 31st March", "Basic toilet training", "Social interaction readiness"]
    },
    {
      grade: "LKG",
      ageRange: "4-5 years",
      requirements: ["Age as on 31st March", "Basic communication skills", "Previous school experience preferred"]
    },
    {
      grade: "UKG",
      ageRange: "5-6 years",
      requirements: ["Age as on 31st March", "LKG completion certificate", "Basic reading/writing skills"]
    },
    {
      grade: "Grade 1",
      ageRange: "6-7 years",
      requirements: ["Age as on 31st March", "UKG completion certificate", "School readiness assessment"]
    },
    {
      grade: "Grade 2-5",
      ageRange: "7-11 years",
      requirements: ["Age appropriate", "Previous grade completion", "Transfer certificate", "Academic assessment"]
    }
  ];

  const requiredDocuments = [
    "Birth Certificate (Original + 2 copies)",
    "Previous School Transfer Certificate (if applicable)",
    "Previous School Report Card/Progress Report",
    "Address Proof (Utility bill/Rent agreement)",
    "Parent's ID Proof (Aadhar/Passport/Driving License)",
    "Medical Certificate from registered doctor",
    "Recent passport size photographs (4 copies)",
    "Caste Certificate (if applicable for reservation)"
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-linear-to-br from-amber-400 via-amber-500 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Admissions Open
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Join our school family and give your child the best foundation for their educational journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 cursor-pointer">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-amber-600 transform hover:scale-105 transition-all duration-300 cursor-pointer">
              Download Prospectus
            </button>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Admission <span className="inline-block bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple and transparent admission process designed to make joining our school family easy and stress-free.
            </p>
          </div>

          {/* Step Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4 bg-white p-2 rounded-full shadow-lg">
              {admissionSteps.map((step) => (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(step.step)}
                  className={`flex items-center gap-2 cursor-pointer px-4 py-2 rounded-full transition-all duration-300 ${
                    activeStep === step.step
                      ? 'bg-linear-to-r from-amber-400 to-amber-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <step.icon className="w-4 h-4" />
                  <span className="hidden md:inline">Step {step.step}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Step Content */}
          <div className="max-w-4xl mx-auto">
            {admissionSteps.map((step) => (
              <div
                key={step.step}
                className={`transition-all duration-500 ${
                  activeStep === step.step ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'
                }`}
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-amber-400 to-amber-600 rounded-full mb-6">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">{step.title}</h3>
                    <p className="text-xl text-gray-600">{step.description}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-4">What's Included:</h4>
                      <ul className="space-y-3">
                        {step.details.map((detail, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <FaCheckCircle className="text-green-500 shrink-0" />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-linear-to-br from-amber-50 to-amber-100 p-6 rounded-xl">
                      <h4 className="text-xl font-semibold text-gray-800 mb-4">Need Help?</h4>
                      <p className="text-gray-600 mb-4">
                        Our admission team is here to guide you through every step of the process.
                      </p>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p><FaPhone className="inline w-4 h-4 mr-2" />Call: +91 98765 43210</p>
                        <p><FaEnvelope className="inline w-4 h-4 mr-2" />Email: admissions@mmvidyamandir.edu.in</p>
                        <p><FaClock className="inline w-4 h-4 mr-2" />Office Hours: 9 AM - 4 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-20 bg-linear-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Eligibility <span className="inline-block bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Criteria
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Age-appropriate admission criteria for different grades to ensure optimal learning environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eligibilityCriteria.map((criteria, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-blue-400 to-blue-600 rounded-full mb-4">
                    <span className="text-white font-bold text-lg">{criteria.grade.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{criteria.grade}</h3>
                  <p className="text-amber-600 font-semibold">{criteria.ageRange}</p>
                </div>
                
                <div className="space-y-3">
                  {criteria.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 shrink-0"></div>
                      <span className="text-gray-700 text-sm">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Required <span className="inline-block bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Documents
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Please ensure you have all the necessary documents ready for a smooth admission process.
              </p>
              
              <div className="space-y-4">
                {requiredDocuments.map((doc, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button className="bg-linear-to-r from-amber-400 to-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2 cursor-pointer">
                  <FaDownload className="w-4 h-4" />
                  Download Document Checklist
                </button>
              </div>
            </div>

            <div className="bg-linear-to-br from-amber-100 to-amber-200 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4"><FaClipboard className="w-12 h-12 mx-auto" /></div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Document Verification</h3>
                <p className="text-gray-600">Quick and easy process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-amber-400 to-amber-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Child's Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Take the first step towards your child's bright future. Our admission team is ready to help you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 cursor-pointer">
              Start Application
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-amber-600 transform hover:scale-105 transition-all duration-300 cursor-pointer">
              Schedule Visit
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-amber-600 transform hover:scale-105 transition-all duration-300 cursor-pointer">
              Call Us Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionsPage;