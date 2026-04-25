import { LiveAnalysis } from '../components/LiveAnalysis'
import { QuickIntake } from '../components/QuickIntake'
import { RecentVariants } from '../components/RecentVariants'
import { VariantReportPanel } from '../components/VariantReportPanel'
import { DashboardLayout } from '../layouts/DashboardLayout'
import './DashboardPage.css'

export function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="dashboard-grid">
        <section className="left-stack">
          <QuickIntake />
          <LiveAnalysis />
          <RecentVariants />
        </section>

        <VariantReportPanel />
      </div>
    </DashboardLayout>
  )
}
