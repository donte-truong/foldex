import { MaterialIcon } from "../components/MaterialIcon";
import { navItems } from "../utils/dashboardData";

export function SideNav() {
  return (
    <aside className="side-nav">
      <div className="brand">
        <h1>FOLDEX</h1>
        <p>Genomic Intelligence</p>
      </div>

      <nav className="primary-nav" aria-label="Primary">
        {navItems.map((item) => (
          <a
            className={item.active ? "nav-link active" : "nav-link"}
            href="#"
            key={item.label}
          >
            <MaterialIcon name={item.icon} />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="side-footer">
        <a className="nav-link help-link" href="#">
          <span> </span>
          <MaterialIcon name="help" />
          <span>Help</span>
        </a>
        <div className="system-card">
          <div className="system-icon">
            <MaterialIcon name="science" />
          </div>
          <div>
            <p className="system-name">SYS_NODE_04</p>
            <p className="system-version">LAB_SYSTEM_V2</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
