import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <section className="auth-layout">
      {/* Top Strips */}
      <div className="top__strips">
        <div className="top__strip top__strip--1"></div>
        <div className="top__strip top__strip--2"></div>
        <div className="top__strip top__strip--3"></div>
        <div className="top__strip top__strip--4"></div>
        <div className="top__strip top__strip--5"></div>
      </div>
      {/* Top Strips */}

      {/* Top Strips */}
      <div className="top__strips top__strips-bg">
        <div className="top__strip top__strip--1"></div>
        <div className="top__strip top__strip--2"></div>
        <div className="top__strip top__strip--3"></div>
        <div className="top__strip top__strip--4"></div>
        <div className="top__strip top__strip--5"></div>
      </div>
      {/* Top Strips */}

      {/* Auth Area */}
      <div className="auth-area">
        <div className="auth-form-area">
          <div className="auth-form">
            <img className="auth__logo" src="/images/logo.svg" alt="logo" />

            <h1 className="font--18">Sign up with social</h1>

            <div className="auth__social-btns">
              <a
                href="#"
                className="custom__btn custom__btn--social custom__btn--full"
              >
                <img src="/images/google.svg" alt="" />
                Sign up with Google
              </a>

              <a
                href="#"
                className="custom__btn custom__btn--social custom__btn--full"
              >
                <img src="/images/facebook.svg" alt="" />
                Sign up with Facebook
              </a>
            </div>

            <p className="auth__or font--16">OR</p>

            <h2 className="font--18">Sign up with your email address</h2>

            <form action="" className="auth-form__main">
              <div className="input__fields">
                {/* Single Input */}
                <div className="input__field">
                  <input
                    className="input__style"
                    type="text"
                    placeholder="First name"
                  />
                </div>
                {/* Single Input */}

                {/* Single Input */}
                <div className="input__field">
                  <input
                    className="input__style"
                    type="text"
                    placeholder="Last name"
                  />
                </div>
                {/* Single Input */}

                {/* Single Input */}
                <div className="input__field">
                  <input
                    className="input__style"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                {/* Single Input */}

                {/* Single Input */}
                <label className="custom-checkbox auth-checkbox">
                  <input type="checkbox" />
                  <span className="checkbox-icon">
                    <img src="/images/check.svg" alt="" />
                  </span>
                  <span className="checkbox-label">
                    Agree to <a href="#">Terms of service</a>
                  </span>
                </label>
                {/* Single Input */}
              </div>

              <button className="custom__btn custom__btn--secondary custom__btn--center custom__btn-auth">
                SIgn up
              </button>
            </form>
          </div>

          <p className="auth-footer font--16">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
      {/* Auth Area */}
    </section>
  );
};

export default SignUpPage;
