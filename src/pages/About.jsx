export default function About() {
  return (
    <main className="container py-12">
      <div className="prose dark:prose-invert max-w-none">
        <h1>About</h1>
        <p>
          I'm Idan Sabagi, a Data Scientist with a passion for solving real-world problems using data. I build
          robust data pipelines, train models, and turn insights into action.
        </p>
        <h2>Experience Highlights</h2>
        <ul>
          <li>End-to-end ML lifecycle: data collection, feature engineering, model training, evaluation, and deployment</li>
          <li>Exploratory data analysis and visualization for stakeholders</li>
          <li>Experimentation, A/B testing, and metric design</li>
        </ul>
        <h2>Tech Stack</h2>
        <p>Python, Pandas, NumPy, scikit-learn, SQL, Jupyter, Airflow, FastAPI, Docker, cloud platforms</p>
      </div>
    </main>
  );
}
