import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Customer Churn Prediction',
    desc: 'Built a churn model using gradient boosting, improving retention targeting by 18%.',
    tags: ['Python', 'scikit-learn', 'Pandas'],
  },
  {
    title: 'NLP Topic Modeling',
    desc: 'Extracted insights from support tickets with topic modeling and keyword analysis.',
    tags: ['NLP', 'Gensim', 'spaCy'],
  },
  {
    title: 'Time Series Forecasting',
    desc: 'Forecasted demand using Prophet and feature-engineered external signals.',
    tags: ['Forecasting', 'Prophet', 'Pandas'],
  },
];

export default function Projects() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">Selected work showcasing ML and analytics impact.</p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: i * 0.05 }}
            className="glass rounded-xl p-5"
          >
            <h3 className="font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {p.tags.map(t => (
                <span key={t} className="px-2 py-1 rounded bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-200">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
