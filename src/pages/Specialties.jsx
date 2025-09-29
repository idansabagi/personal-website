import { FiCpu, FiBarChart2, FiGitBranch, FiDatabase } from 'react-icons/fi';

const items = [
  { icon: FiCpu, title: 'Machine Learning', desc: 'Supervised/unsupervised modeling, evaluation, and deployment.' },
  { icon: FiBarChart2, title: 'Analytics & Experimentation', desc: 'EDA, dashboards, and A/B testing methodology.' },
  { icon: FiDatabase, title: 'Data Engineering', desc: 'Pipelines, feature stores, and data quality practices.' },
  { icon: FiGitBranch, title: 'MLOps', desc: 'Versioning, CI/CD for models, monitoring, and retraining.' },
];

export default function Specialties() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold">Specialties</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">Core strengths I bring to projects and teams.</p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="glass rounded-xl p-5">
            <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            <h3 className="mt-3 font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
