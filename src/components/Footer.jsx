import { Breakpoint, BreakpointProvider } from "react-socks";

const Footer = () => {
  return (
    <div>
      <nav>
        <Breakpoint medium up>
          <footer>
            <div className="footer">
              <a href="/">
                <svg width={30} height={24}>
                  <use xlinkHref="#home" />
                </svg>
              </a>
              <span>© 2023 Variety</span>
            </div>
            <ul className="footer">
              <li>
                <a>
                  Soundcloud
                  <svg width={24} height={24}>
                    <use xlinkHref="#soundcloud" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="www.instagram.com/variety">
                  Instagram
                  <svg width={24} height={24}>
                    <use xlinkHref="#instagram" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="www.facebook.com/variety">
                  Facebook
                  <svg width={24} height={24}>
                    <use xlinkHref="#facebook" />
                  </svg>
                </a>
              </li>
            </ul>
          </footer>
        </Breakpoint>
        <Breakpoint small down>
          <div className="nav-bar">
            <a chref="/">Variety</a>
            <div className="nav-bar">
              <ul className="nav-bar">
                <li>
                  <a href="/">HOME</a>
                </li>
                <li>
                  <a href="/events">EVENTS</a>
                </li>
                <li>
                  <a href="/artists">ARTISTS</a>
                </li>
                <li>
                  <a href="/profile">MY PROFILE</a>
                </li>
                <li>
                  <a href="/contact">CONTACT</a>
                </li>
                <li>
                  <a href="/sign-up">SIGN-UP</a>
                </li>
              </ul>
            </div>
          </div>
        </Breakpoint>
      </nav>
    </div>
  );
};

export default Footer;
