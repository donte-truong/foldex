import { useState } from 'react'
import { use3DmolViewer, COLOR_SCHEME_META, type ColorScheme } from '../hooks/use3DmolViewer'

interface Mol3DViewerProps {
  pdbId: string
  defaultScheme?: ColorScheme
  label?: string
  className?: string
  schemeBarClassName?: string
}

export function Mol3DViewer({
  pdbId,
  defaultScheme = 'ss',
  label = '3D protein structure viewer',
  className,
  schemeBarClassName,
}: Mol3DViewerProps) {
  const [activeScheme, setActiveScheme] = useState<ColorScheme>(defaultScheme)
  const containerRef = use3DmolViewer(pdbId, activeScheme)

  return (
    <>
      <div ref={containerRef} className={`mol3d-canvas${className ? ` ${className}` : ''}`} aria-label={label} />

      <div className={`color-scheme-bar${schemeBarClassName ? ` ${schemeBarClassName}` : ''}`}>
        {COLOR_SCHEME_META.map((s) => (
          <button
            key={s.id}
            className={`color-scheme-btn${activeScheme === s.id ? ' active' : ''}`}
            onClick={() => setActiveScheme(s.id)}
            title={s.description}
          >
            {s.label}
          </button>
        ))}
      </div>
    </>
  )
}
