import { Button } from './Button'
import { MaterialIcon } from './MaterialIcon'
import { recentVariants } from '../utils/dashboardData'

export function RecentVariants() {
  return (
    <div className="glass-panel recent-panel">
      <header>
        <h3>
          <MaterialIcon name="history" />
          Recent Variants
        </h3>
      </header>
      <div className="variant-list">
        {recentVariants.map((item) => (
          <Button className="variant-row" key={item.variant}>
            <span>
              <strong>{item.variant}</strong>
              <small>{item.detail}</small>
            </span>
            <em className={item.tone}>{item.status}</em>
          </Button>
        ))}
      </div>
    </div>
  )
}
