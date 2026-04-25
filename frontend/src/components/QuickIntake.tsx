import { Button } from './Button'
import { MaterialIcon } from './MaterialIcon'

export function QuickIntake() {
  return (
    <div className="glass-panel intake-panel">
      <div className="scan-line" />
      <h3>
        <MaterialIcon name="upload_file" />
        Quick Intake
      </h3>
      <Button className="drop-zone">
        <MaterialIcon name="genetics" />
        <strong>Drop FASTQ / VCF files</strong>
        <small>Max payload 2.4GB</small>
      </Button>
      <label className="sequence-entry">
        <span className="sr-only">Enter sequence string</span>
        <input placeholder="Enter sequence string..." type="text" />
        <Button aria-label="Submit sequence">
          <MaterialIcon name="send" />
        </Button>
      </label>
    </div>
  )
}
