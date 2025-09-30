import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(''); // Clear error when user starts typing
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    
    if (!validateEmail(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      formData.append('form-name', 'contact');
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('message', form.message);
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      setError('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">I'd love to hear about opportunities or collaborations.</p>
      {isSubmitted ? (
        <div className="mt-6 max-w-xl">
          <div className="glass rounded-xl p-6 text-center">
            <div className="text-green-600 dark:text-green-400 text-4xl mb-4">✓</div>
            <h3 className="text-lg font-semibold mb-2">Thank you for your message!</h3>
            <p className="text-gray-600 dark:text-gray-300">I'll get back to you as soon as possible.</p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="mt-4 px-4 py-2 text-sm rounded-lg glass hover:bg-gray-100 dark:hover:bg-white/10"
            >
              Send another message
            </button>
          </div>
        </div>
      ) : (
        <form 
          onSubmit={handleSubmit} 
          className="mt-6 max-w-xl space-y-4"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          {/* Hidden form name for Netlify */}
          <input type="hidden" name="form-name" value="contact" />
          
          {/* Honeypot field for spam protection */}
          <div style={{ display: 'none' }}>
            <label>Don't fill this out if you're human: <input name="bot-field" /></label>
          </div>
          
          {error && (
            <div className="p-3 rounded-lg bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-sm">
              {error}
            </div>
          )}
          
          <div>
            <label className="block text-sm mb-1" htmlFor="name">Name *</label>
            <input 
              id="name"
              name="name" 
              value={form.name} 
              onChange={handleChange} 
              required 
              disabled={isSubmitting}
              className="w-full rounded-md glass p-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50" 
            />
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="email">Email *</label>
            <input 
              id="email"
              type="email" 
              name="email" 
              value={form.email} 
              onChange={handleChange} 
              required 
              disabled={isSubmitting}
              className="w-full rounded-md glass p-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50" 
            />
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="message">Message *</label>
            <textarea 
              id="message"
              name="message" 
              value={form.message} 
              onChange={handleChange} 
              rows={5} 
              required 
              disabled={isSubmitting}
              className="w-full rounded-md glass p-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50" 
            />
          </div>
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="px-5 py-2.5 rounded-lg bg-primary-600 text-white hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      )}
      
      <div className="mt-8 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-sm">
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Privacy Note:</strong> Your message will be sent securely through Netlify Forms. 
          No email addresses are exposed publicly on this site to prevent spam.
        </p>
      </div>
    </main>
  );
}
