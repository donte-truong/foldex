import { Mol3DViewer } from './Mol3DViewer'

export function ProteinViewer() {
  return (
    <div className="protein-viewer">
      <Mol3DViewer pdbId="4HHB" defaultScheme="ss" />

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
