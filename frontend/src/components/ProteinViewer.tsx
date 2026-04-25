import { Button } from './Button'
import { MaterialIcon } from './MaterialIcon'
import { viewerTools } from '../utils/dashboardData'

export function ProteinViewer() {
  return (
    <div className="protein-viewer">
      <div className="protein-art" aria-hidden="true">
        <span className="helix one" />
        <span className="helix two" />
        <span className="helix three" />
        <span className="mutation-node" />
        <span className="grid-plane" />
      </div>
      <div className="viewer-tools">
        {viewerTools.map((icon) => (
          <Button aria-label={icon.replaceAll('_', ' ')} key={icon}>
            <MaterialIcon name={icon} />
          </Button>
        ))}
      </div>
      <div className="viewer-status">
        <p>ALPHAFOLD PREDICTION V2.0</p>
        <div>
          <span>Confidence pLDDT: 92.4</span>
          <div className="confidence-dots" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span className="inactive" />
          </div>
        </div>
      </div>
    </div>
  )
}
