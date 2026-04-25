import { MaterialIcon } from './MaterialIcon'
import { analysisSteps } from '../utils/dashboardData'

export function LiveAnalysis() {
  return (
    <div className="glass-panel analysis-panel">
      <h3>
        <span>
          <MaterialIcon name="settings_heart" />
          Live Analysis
        </span>
        <em>84% COMPLETED</em>
      </h3>
      <div className="progress-stack">
        {analysisSteps.map((step) => (
          <div className="progress-row" key={step.label}>
            <div>
              <span>{step.label}</span>
              <span>{step.value}</span>
            </div>
            <div className="progress-track">
              <span className={`progress-fill ${step.tone}`} style={{ width: `${step.progress}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
