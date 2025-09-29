import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:idansabagi5@gmail.com?subject=Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(`${form.message}\n\nFrom: ${form.name} <${form.email}>`)}`;
    window.location.href = mailto;
  };

  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">I'd love to hear about opportunities or collaborations.</p>
      <form onSubmit={handleSubmit} className="mt-6 max-w-xl space-y-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input name="name" value={form.name} onChange={handleChange} required className="w-full rounded-md glass p-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500" />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full rounded-md glass p-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500" />
        </div>
        <div>
          <label className="block text-sm mb-1">Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} rows={5} required className="w-full rounded-md glass p-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500" />
        </div>
        <button type="submit" className="px-5 py-2.5 rounded-lg bg-primary-600 text-white hover:bg-primary-700">Send</button>
      </form>
      <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">Prefer direct? Email me at <a className="text-primary-600 dark:text-primary-400" href="mailto:idansabagi5@gmail.com">idansabagi5@gmail.com</a></p>
    </main>
  );
}
