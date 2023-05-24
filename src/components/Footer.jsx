import { Breakpoint, BreakpointProvider } from "react-socks";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <nav>
        <Breakpoint medium up>
          <footer>
            <div className="footer">
              <a href="/home">
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
              <ul className="nav-bar-mobile-footer">
                <li>
                  <Link to="/home"><img src="/assets/images/favicons/icons8-home-50.png" alt="home"/></Link>
                  <p>Home</p>
                </li>
                <li>
                  <Link to="/events"><img src="../src/assets/images/favicons/icons8-calendar-50.png" alt="events"/></Link>
                  <p>Events</p>
                </li>
                <li>
                  <Link to="/artists"><img src="src/assets/images/favicons/icons8-dj-50.png" alt="artists"/></Link>
                  <p>Artists</p>
                </li>
                <li>
                  <Link to="/profile"><img src="src/assets/images/favicons/icons8-head-profile-50.png" alt="my_profile"/></Link>
                  <p>Profile</p>
                </li>
                <li>
                  <Link to="/signup"><img src="src/assets/images/favicons/icons8-login-rounded-up-50.png" alt="signup"/></Link>
                  <p>Signup</p>
                </li>
                <li>
                  <Link to="/contact"><img src="src/assets/images/favicons/icons8-info-50.png" alt="contact"/></Link>
                  <p>Contact</p>
                </li>
              </ul>
            </div>
        </Breakpoint>
      </nav>
    </div>
  );
};

export default Footer;
