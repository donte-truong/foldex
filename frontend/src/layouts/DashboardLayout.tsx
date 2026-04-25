import type { ReactNode } from 'react'

import { DashboardHeader } from './DashboardHeader'
import { FloatingActionButton } from './FloatingActionButton'
import { SideNav } from './SideNav'

type DashboardLayoutProps = {
  children: ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="dashboard-shell">
      <SideNav />

      <main className="dashboard-main">
        <DashboardHeader />
        {children}
      </main>

      <FloatingActionButton />
    </div>
  )
}
