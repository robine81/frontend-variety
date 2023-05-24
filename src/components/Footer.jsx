import { Breakpoint, BreakpointProvider } from "react-socks";
import { Link } from "react-router-dom";

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
      </nav>
  );
};

export default Footer;
