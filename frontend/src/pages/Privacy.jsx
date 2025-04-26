import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <Link 
            to="/signup" 
            className="inline-flex items-center text-white hover:text-gray-300 transition duration-300"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to signup
          </Link>
        </div>
        
        <div className="space-y-12">
          <div className="flex items-center space-x-4">
            <Shield className="h-10 w-10 text-white" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">Privacy Policy</h1>
          </div>
          <p className="text-gray-300">Last Updated: March 18, 2025</p>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">1. Introduction</h2>
            <p className="text-gray-300">
              At DigitalKitty, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, 
              and safeguard your information when you use our website, services, and applications (collectively, the "Services").
            </p>
            <p className="text-gray-300">
              Please read this Privacy Policy carefully. By accessing or using our Services, you acknowledge that you have 
              read, understood, and agree to be bound by this Privacy Policy.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white/90">Personal Information</h3>
              <p className="text-gray-300">
                We may collect personal information that you voluntarily provide when using our Services, including but not 
                limited to your name, email address, and account credentials.
              </p>
              
              <h3 className="text-xl font-medium text-white/90">Usage Data</h3>
              <p className="text-gray-300">
                We automatically collect certain information about how you interact with our Services, including your IP address, 
                browser type, operating system, referring URLs, access times, and pages viewed.
              </p>
              
              <h3 className="text-xl font-medium text-white/90">User Content</h3>
              <p className="text-gray-300">
                We collect and store the content you upload to our Services, including code projects, music files, and associated metadata.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">3. How We Use Your Information</h2>
            <p className="text-gray-300">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-8 text-gray-300 space-y-2">
              <li>Providing, maintaining, and improving our Services</li>
              <li>Processing transactions and managing your account</li>
              <li>Responding to your inquiries and support requests</li>
              <li>Sending you technical notices, updates, and security alerts</li>
              <li>Monitoring usage patterns and analyzing trends</li>
              <li>Detecting, preventing, and addressing technical issues and security breaches</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">4. Data Storage and Security</h2>
            <p className="text-gray-300">
              We implement appropriate technical and organizational measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p className="text-gray-300">
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to 
              use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">5. Data Retention</h2>
            <p className="text-gray-300">
              We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this 
              Privacy Policy, comply with our legal obligations, resolve disputes, and enforce our agreements.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">6. Your Privacy Rights</h2>
            <p className="text-gray-300">
              Depending on your location, you may have certain rights regarding your personal information, such as:
            </p>
            <ul className="list-disc pl-8 text-gray-300 space-y-2">
              <li>Accessing and updating your personal information</li>
              <li>Requesting deletion of your personal information</li>
              <li>Objecting to or restricting certain processing activities</li>
              <li>Data portability rights</li>
            </ul>
            <p className="text-gray-300">
              To exercise these rights, please contact us using the information provided at the end of this Privacy Policy.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">7. Changes to This Privacy Policy</h2>
            <p className="text-gray-300">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            <p className="text-gray-300">
              We encourage you to review this Privacy Policy periodically for any changes. Your continued use of our 
              Services after any modifications indicates your acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">8. Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
              <p className="text-white">privacy@digitalkitty.com</p>
              <p className="text-white">DigitalKitty, Inc.</p>
              <p className="text-white">123 Digital Avenue</p>
              <p className="text-white">San Francisco, CA 94105</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
