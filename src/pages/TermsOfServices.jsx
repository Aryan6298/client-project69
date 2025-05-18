import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from '../components/TopBar';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div style={{ position: 'relative', zIndex: 1030 }}>
        <TopBar />
      </div>

      {/* NavigationBar with higher z-index */}
      <div style={{ position: 'relative', zIndex: 1040 }}>
        <NavigationBar />
      </div>

      <div className="container py-5 bg-white text-dark mt-5" style={{ minHeight: '100vh' }}>
        <h2 className="text-center mb-4" data-aos="fade-down">Website Terms & Conditions, Terms of Service, and Privacy Policy</h2>
        <p className="text-center mb-5 text-muted">Effective Date: May 18, 2025</p>

        <div data-aos="fade-up">
          <h5>1. Use of the Website</h5>
          <ul>
            <li>You must use our website only for lawful purposes.</li>
            <li>You must not harm, hack, or misuse the site in any way.</li>
            <li>We reserve the right to suspend or restrict access if we believe there is a violation of these terms.</li>
          </ul>

          <h5 className="mt-4">2. Intellectual Property</h5>
          <p>
            All content (logos, text, images, design, etc.) is the property of Geocon Services or licensed to us.
            You may not copy, reproduce, or distribute any material without permission.
          </p>

          <h5 className="mt-4">3. User Content</h5>
          <p>
            If you submit content (forms, messages, feedback), you grant us permission to use it for business or service-related purposes.
            You are responsible for the legality and accuracy of anything you submit.
          </p>

          <h5 className="mt-4">4. Privacy Policy</h5>
          <p><strong>What We Collect:</strong></p>
          <ul>
            <li>Personal details (name, email, phone) that you provide via forms</li>
            <li>Anonymous data like IP address and browser type through cookies</li>
          </ul>

          <p><strong>Why We Collect:</strong></p>
          <ul>
            <li>To respond to your inquiries</li>
            <li>To improve our website and services</li>
            <li>To send updates (only if you opt-in)</li>
          </ul>

          <p><strong>We DO NOT:</strong></p>
          <ul>
            <li>Sell or rent your personal data</li>
            <li>Share your information with third parties without consent (except legal reasons)</li>
          </ul>

          <p>
            You can request access to, correction of, or deletion of your personal data by contacting us.
          </p>

          <h5 className="mt-4">5. Cookies</h5>
          <p>
            We use cookies to enhance your browsing experience. You can choose to disable cookies in your browser settings.
          </p>

          <h5 className="mt-4">6. External Links</h5>
          <p>
            We may link to third-party sites. We are not responsible for their content or privacy policies.
          </p>

          <h5 className="mt-4">7. No Warranty</h5>
          <p>
            The site is provided “as is.” We do not guarantee it will be error-free or uninterrupted.
            All information is for general use and should not be considered professional advice.
          </p>

          <h5 className="mt-4">8. Limitation of Liability</h5>
          <p>
            We are not liable for any indirect or direct damages resulting from your use of the site.
          </p>

          <h5 className="mt-4">9. Changes to Terms</h5>
          <p>
            We may update these Terms and Policies anytime. Changes will be posted on this page with a new effective date.
            Continued use means you accept them.
          </p>

          <h5 className="mt-4">10. Contact Us</h5>
          <p>If you have questions about these terms or your privacy, contact us:</p>
          <ul>
            <li>📧 <strong>Email:</strong> servicesgeocon@gmail.com</li>
            <li>📞 <strong>Phone:</strong> +91 96699-54433</li>
            <li>📍 <strong>Address:</strong> 84/3, Near Kankeshwari Infotech Gate, Nanda Nagar, Indore, Madhya Pradesh, 452019</li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TermsOfService;
