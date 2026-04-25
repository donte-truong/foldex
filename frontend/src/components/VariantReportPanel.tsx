import { Button } from './Button'
import { MaterialIcon } from './MaterialIcon'
import { dataStream, variantMetrics } from '../utils/dashboardData'
import { ProteinViewer } from './ProteinViewer'

export function VariantReportPanel() {
  return (
    <section className="glass-panel report-panel">
      <svg
        className="dna-wave"
        preserveAspectRatio="none"
        viewBox="0 0 800 600"
        aria-hidden="true"
      >
        <path
          d="M0,300 C150,100 250,500 400,300 C550,100 650,500 800,300"
          fill="none"
          stroke="#00daf3"
          strokeWidth="2"
        />
        <path
          d="M0,320 C150,120 250,520 400,320 C550,120 650,520 800,320"
          fill="none"
          stroke="#08f1a9"
          strokeWidth="2"
        />
      </svg>

      <div className="report-content">
        <div className="report-summary">
          <div>
            <div className="critical-pill">
              <span />
              Critical Variant Detected
            </div>
            <h1>TP53:c.743G&gt;A</h1>
            <p>
              Missense mutation in DNA-binding domain. Likely compromise of protein structural
              integrity confirmed by multi-model synthesis.
            </p>
          </div>

          <div className="metric-grid">
            {variantMetrics.map((metric) => (
              <article className="metric-card" key={metric.label}>
                <p>{metric.label}</p>
                <strong className={metric.tone}>{metric.value}</strong>
                <small>{metric.note}</small>
              </article>
            ))}
          </div>

          <div className="report-actions">
            <Button className="report-button">
              <MaterialIcon name="description" />
              Full Clinical Report
            </Button>
            <Button className="icon-button" aria-label="Share report">
              <MaterialIcon name="share" />
            </Button>
          </div>
        </div>

        <ProteinViewer />
      </div>

      <footer className="data-stream">
        {dataStream.map(([label, value]) => (
          <div key={label}>
            <p>{label}</p>
            <strong>{value}</strong>
          </div>
        ))}
      </footer>
    </section>
  )
}
