import { Breakpoint, BreakpointProvider } from "react-socks";
import { Link } from "react-router-dom";
import { faSoundcloud, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
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
                <Link to="https://www.soundcloud.com">
                  <FontAwesomeIcon color="teal" icon={faSoundcloud} className="social-icon" />
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/variety.berlin">
                <FontAwesomeIcon color="teal" icon={faInstagram} className="social-icon" />
                </Link>
              </li>
              <li>
                <Link to="https://www.facebook.com/variety.berlin">
                <FontAwesomeIcon color="teal" icon={faFacebook} className="social-icon" />
                </Link>
              </li>
            </ul>
          </footer>
        </Breakpoint>
      </nav>
  );
};

export default Footer;
