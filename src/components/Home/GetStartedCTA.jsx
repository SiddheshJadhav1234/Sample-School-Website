import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const GetStartedCTA = () => {
  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take the first step towards your child's bright future. Join our school community today!
          </p>
        </div>

        {/* Main CTA Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Admission Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Start Admission Process</h3>
              <p className="text-gray-600 leading-relaxed">
                Begin your child's educational journey with us. Simple application process with guidance at every step.
              </p>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Online application form</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Document verification</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>School tour & interaction</span>
              </div>
            </div>

            <Link 
              to="/admissions"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              Apply Now
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Visit Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏫</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Schedule a Visit</h3>
              <p className="text-gray-600 leading-relaxed">
                Experience our campus firsthand. Meet our teachers and see our facilities in action.
              </p>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Campus tour with guide</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Meet with principal</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Classroom observation</span>
              </div>
            </div>

            <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2">
              <FaCalendarAlt className="w-4 h-4" />
              Book a Visit
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Get in Touch</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPhone className="w-5 h-5 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h4>
              <p className="text-gray-600">+91 98765 43210</p>
              <p className="text-gray-600">+91 87654 32109</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="w-5 h-5 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h4>
              <p className="text-gray-600">info@mmvidyamandir.edu.in</p>
              <p className="text-gray-600">admissions@mmvidyamandir.edu.in</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="w-5 h-5 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h4>
              <p className="text-gray-600">123 Education Street</p>
              <p className="text-gray-600">Pune, Maharashtra 411001</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
          </Link>
          <Link 
            to="/about"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200"
          >
            Learn More
          </Link>
          <Link 
            to="/gallery"
            className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors duration-200"
          >
            View Gallery
          </Link>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            🌟 Join over 500 families who have chosen excellence for their children's education 🌟
          </p>
        </div>
      </div>
    </section>
  );
};

export default GetStartedCTA;