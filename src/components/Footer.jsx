export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200/60 dark:border-white/10">
      <div className="container py-8 text-sm text-gray-500 dark:text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} Idan Sabagi. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a className="hover:text-primary-600 dark:hover:text-primary-400" href="https://www.linkedin.com/in/idan-sabagi/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="hover:text-primary-600 dark:hover:text-primary-400" href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
