export default function Resume() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold">Resume</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">Download or view my resume. Replace the link below with your PDF.</p>
      <div className="mt-6 flex gap-3">
        <a href="#" className="px-5 py-2.5 rounded-lg bg-primary-600 text-white hover:bg-primary-700">Download PDF</a>
        <a href="/contact" className="px-5 py-2.5 rounded-lg glass">Contact Me</a>
      </div>
    </main>
  );
}
