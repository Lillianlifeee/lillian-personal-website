import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  // EmailJS配置 - 从环境变量获取
  const recipientEmail = import.meta.env.VITE_RECIPIENT_EMAIL || 'lillianlifeee@gmail.com';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Import EmailJS dynamically
      const emailjs = await import('@emailjs/browser');
      
      // EmailJS configuration
      const serviceId = 'service_lillianhe';
      const templateId = 'template_lillianhe';
      const publicKey = 'oIM17-YK_-W9bPKT8';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Lillian He'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setIsSubmitted(true);
      
      // Reset form after success
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitError('Failed to send message. Please try again or contact directly via LinkedIn.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+852 8480-8223 / +86 151-8910-6250",
      href: "tel:+85284808223",
      color: "text-green-600 bg-green-50 hover:bg-green-100"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "www.linkedin.com/in/ye-lillian-he",
      href: "https://www.linkedin.com/in/ye-lillian-he",
      color: "text-blue-600 bg-blue-50 hover:bg-blue-100"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hong Kong",
      href: null,
      color: "text-purple-600 bg-purple-50"
    }
  ];

  return (
    <div id="contact" className="py-12 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <p className="text-blue-100 mb-8 leading-relaxed">
                  I'm currently pursuing my Bachelor's degree in Accounting & Finance at the University of Hong Kong 
                  and actively seeking opportunities in the financial services industry. Whether you're interested in 
                  discussing potential internships, full-time positions, research collaborations, or simply want to 
                  connect professionally, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center group">
                    {contact.href ? (
                      <a 
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={`flex items-center w-full p-4 rounded-xl transition-all duration-300 ${contact.color}`}
                      >
                        <div className="flex-shrink-0">
                          <contact.icon size={24} className="mr-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-600">{contact.label}</div>
                          <div className="text-gray-800 font-semibold">{contact.value}</div>
                        </div>
                      </a>
                    ) : (
                      <div className={`flex items-center w-full p-4 rounded-xl ${contact.color}`}>
                        <div className="flex-shrink-0">
                          <contact.icon size={24} className="mr-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-600">{contact.label}</div>
                          <div className="text-gray-800 font-semibold">{contact.value}</div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Availability */}
              <div className="bg-blue-800/50 rounded-xl p-6 border border-blue-700">
                <h4 className="text-lg font-semibold mb-3 flex items-center">
                  <CheckCircle className="mr-2 text-green-400" size={20} />
                  Current Status
                </h4>
                <ul className="space-y-2 text-blue-100">
                  <li>• Open to remote collaboration opportunities</li>
                  <li>• Seeking full-time opportunities post-graduation (2026)</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="mx-auto mb-4 text-green-400" size={48} />
                  <h4 className="text-xl font-semibold mb-2">Message Sent Successfully!</h4>
                  <p className="text-blue-100">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitError && (
                    <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 flex items-center">
                      <AlertCircle className="mr-2 text-red-400" size={20} />
                      <span className="text-red-200">{submitError}</span>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all text-white placeholder-white/50"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all text-white placeholder-white/50"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all text-white placeholder-white/50"
                      placeholder="Internship Opportunity / Collaboration / etc."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all text-white placeholder-white/50 resize-none"
                      placeholder="I'd love to discuss..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 disabled:from-gray-400 disabled:to-gray-500 text-blue-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:hover:scale-100 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-900 mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                  
                  <div className="text-center">
                    <p className="text-blue-200 text-sm">
                      Your message will be sent to: <span className="font-semibold">{recipientEmail}</span>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;