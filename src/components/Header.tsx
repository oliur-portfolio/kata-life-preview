const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="#" className="organisation__name">
          <img src="/images/organisation.jpg" alt="organisation" />
          <p className="font--16">Organisation Name</p>
        </a>

        <div className="navbar__right">
          <button className="nav__notification">
            <img src="/images/notification.svg" alt="" />
          </button>

          <button className="nav__user">
            <img src="/images/user.png" alt="" />

            <div className="nav__user-info">
              <p className="font--16">Mike Sting</p>

              <img src="/images/down-arrow.svg" alt="" />
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
