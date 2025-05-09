import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const licenseTypes = [
    'Microsoft Office',
    'Adobe Creative Suite',
    'Windows Server',
    'SQL Server',
    'Other'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      company: '',
      licenseType: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>

        {isSubmitted ? (
          <div className="bg-green-100 text-green-800 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
            <p>We have received your message and will get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Your Company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <select
              name="licenseType"
              value={formData.licenseType}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select a License Type</option>
              {licenseTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
