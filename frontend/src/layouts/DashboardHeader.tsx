import { Button } from '../components/Button'

export function DashboardHeader() {
  return (
    <header className="top-bar">
      <div>
        <h2>Gene Variant Dashboard</h2>
        <p>
          Session ID: <span>GS-8829-ALPHA</span>
        </p>
      </div>
      <div className="top-actions">
        <div className="online-pill">
          <span />
          System Online
        </div>
        <Button className="primary-button">Sequence Run</Button>
      </div>
    </header>
  )
}
