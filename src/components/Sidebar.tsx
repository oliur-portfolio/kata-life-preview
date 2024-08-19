import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="dashboard__sidebar">
      <a href="/" className="dashboard__logo">
        <img src="/images/logo-white.svg" alt="logo" />
      </a>

      <ul className="dashboard__links">
        {/* Single Link */}
        <li>
          <Link to="/" className="dashboard__link dashboard__link--active">
            <img src="/images/dashboard.svg" alt="" /> Dashboard
          </Link>
        </li>
        {/* Single Link */}

        {/* Single Link */}
        <li>
          <Link to="/activities" className="dashboard__link">
            <img src="/images/activities.svg" alt="" />
            Activities
          </Link>
        </li>
        {/* Single Link */}

        {/* Single Link */}
        <li>
          <Link to="/admin-question" className="dashboard__link">
            <img src="/images/admin.svg" alt="" />
            Admin
          </Link>

          {/* Submenu */}
          <ul className="dashboard__submenu-links">
            <li>
              <Link to="/admin-question" className="dashboard__submenu-link">
                Questions
              </Link>
            </li>

            <li>
              <Link to="/admin-activity" className="dashboard__submenu-link">
                Activity types
              </Link>
            </li>

            <li>
              <Link to="/admin-users" className="dashboard__submenu-link">
                Users
              </Link>
            </li>

            <li>
              <Link
                to="/admin-organization"
                className="dashboard__submenu-link"
              >
                Organization
              </Link>
            </li>

            <li>
              <Link to="/teams" className="dashboard__submenu-link">
                Teams
              </Link>
            </li>
          </ul>
          {/* Submenu */}
        </li>
        {/* Single Link */}
      </ul>
    </aside>
  );
};

export default Sidebar;
