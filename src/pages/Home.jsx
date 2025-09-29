import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home({ darkMode }) {
  return (
    <main>
      <section className="container pt-16 pb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Hi, I'm <span className="gradient-text">Idan Sabagi</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Data Scientist focused on building ML solutions, end-to-end data products, and insightful analytics.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/projects" className="px-5 py-2.5 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors">View Projects</Link>
              <Link to="/contact" className="px-5 py-2.5 rounded-lg glass">Contact Me</Link>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-6 glass"
          >
            <h3 className="font-semibold mb-2">Core Skills</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
              <li className="glass p-2 rounded-md text-center">Python</li>
              <li className="glass p-2 rounded-md text-center">Pandas</li>
              <li className="glass p-2 rounded-md text-center">SQL</li>
              <li className="glass p-2 rounded-md text-center">Scikit-learn</li>
              <li className="glass p-2 rounded-md text-center">ML Ops</li>
              <li className="glass p-2 rounded-md text-center">NLP</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="container pb-16">
        <div className="rounded-2xl p-8 bg-gradient-to-r from-primary-700 via-primary-600 to-primary-800 text-white">
          <h2 className="text-2xl font-semibold">Availability</h2>
          <p className="mt-2 text-primary-100">Open to Data Science roles and consulting opportunities.</p>
          <div className="mt-4">
            <a href="/resume" className="inline-block px-5 py-2.5 rounded-lg bg-white text-primary-700 font-medium hover:bg-primary-50">View Resume</a>
          </div>
        </div>
      </section>
    </main>
  );
}
