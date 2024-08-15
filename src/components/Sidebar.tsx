const Sidebar = () => {
  return (
    <aside className="dashboard__sidebar">
      <a href="/" className="dashboard__logo">
        <img src="/images/logo-white.svg" alt="logo" />
      </a>

      <ul className="dashboard__links">
        {/* Single Link */}
        <li>
          <a href="#" className="dashboard__link dashboard__link--active">
            <img src="/images/dashboard.svg" alt="" />
            Dashboard
          </a>
        </li>
        {/* Single Link */}

        {/* Single Link */}
        <li>
          <a href="#" className="dashboard__link">
            <img src="/images/activities.svg" alt="" />
            Activities
          </a>
        </li>
        {/* Single Link */}

        {/* Single Link */}
        <li>
          <a href="#" className="dashboard__link">
            <img src="/images/admin.svg" alt="" />
            Admin
          </a>

          {/* Submenu */}
          <ul className="dashboard__submenu-links">
            <li>
              <a href="#" className="dashboard__submenu-link">
                Questions
              </a>
            </li>

            <li>
              <a href="#" className="dashboard__submenu-link">
                Activity types
              </a>
            </li>

            <li>
              <a href="#" className="dashboard__submenu-link">
                Users
              </a>
            </li>

            <li>
              <a href="#" className="dashboard__submenu-link">
                Organization
              </a>
            </li>

            <li>
              <a href="#" className="dashboard__submenu-link">
                Teams
              </a>
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
