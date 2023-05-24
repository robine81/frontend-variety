import { Breakpoint, BreakpointProvider } from "react-socks";
import { Link } from "react-router-dom";
import homeIcon from '../images/favicons/icons8-home-50.png'
import eventIcon from '../images/favicons/icons8-calendar-50.png'
import artistIcon from '../images/favicons/icons8-dj-50.png'
import profileIcon from '../images/favicons/icons8-head-profile-up-50.png'
import signupIcon from '../images/favicons/icons8-rounded-up-50.png'
import contactIcon from '../images/favicons/icons8-info-50.png'

const Footer = () => {
  return (
    <div>
      <nav>
        <Breakpoint medium up>
          <footer>
            <div className="footer">
              <Link to="/home">
                <svg width={30} height={24}>
                  <use xlinkHref="#home" />
                </svg>
              </Link>
              <span>© 2023 Variety</span>
            </div>
            <ul className="footer">
              <li>
                <Link>
                  Soundcloud
                  <svg width={24} height={24}>
                    <use xlinkHref="#soundcloud" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="www.instagram.com/variety">
                  Instagram
                  <svg width={24} height={24}>
                    <use xlinkHref="#instagram" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="www.facebook.com/variety">
                  Facebook
                  <svg width={24} height={24}>
                    <use xlinkHref="#facebook" />
                  </svg>
                </Link>
              </li>
            </ul>
          </footer>
        </Breakpoint>
        <Breakpoint small down>
          <div className="nav-bar">
              <ul className="nav-bar-mobile-footer">
                <li>
                  <Link to="/home"><img src={homeIcon} alt="home"/></Link>
                  <p>Home</p>
                </li>
                <li>
                  <Link to="/events"><img src={eventIcon} alt="events"/></Link>
                  <p>Events</p>
                </li>
                <li>
                  <Link to="/artists"><img src={artistIcon} alt="artists"/></Link>
                  <p>Artists</p>
                </li>
                <li>
                  <Link to="/profile"><img src={profileIcon} alt="my_profile"/></Link>
                  <p>Profile</p>
                </li>
                <li>
                  <Link to="/signup"><img src={signupIcon} alt="signup"/></Link>
                  <p>Signup</p>
                </li>
                <li>
                  <Link to="/contact"><img src={contactIcon} alt="contact"/></Link>
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
