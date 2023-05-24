import  { Breakpoint } from 'react-socks';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import lessThan from '../images/favicons/icons8-less-than-50.png'
import logo from '../images/variety_logo.jpeg'
import homeIcon from '../images/favicons/icons8-home-50.png'
import eventIcon from '../images/favicons/icons8-calendar-50.png'
import artistIcon from '../images/favicons/icons8-dj-50.png'
import profileIcon from '../images/favicons/icons8-head-profile-50.png'
import signupIcon from '../images/favicons/icons8-login-rounded-up-50.png'
import contactIcon from '../images/favicons/icons8-info-50.png'


const NavigationBar = () => {
  const location = useLocation()
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  

    return (
      <div>
      <nav>
        <Breakpoint medium up>
            <div className='nav-bar'>
              <Link to='/home'>
                <img className="logo" src={logo} alt="variety" />
              </Link>
              <div className='nav-bar'>
                <ul className='nav-bar'>
                  <li>
                    <Link to='/search'>
                      SEARCH
                    </Link>
                  </li>
                  <li>
                    <Link to='/home'>
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link to='/events'>
                      EVENTS
                    </Link>
                  </li>
                  <li>
                    <Link to='/artists'>
                      ARTISTS
                    </Link>
                  </li>
                  <li>
                    <Link to='/profile'>
                      MY PROFILE
                    </Link>
                  </li>
                  <li>
                    <Link to='/contact'>
                      CONTACT
                    </Link>
                  </li>
                  <li>
                    <Link to='/signup'>
                      SIGN-UP
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            </Breakpoint>
            <Breakpoint small down>
          <div className="nav-bar">
              <ul className="nav-bar-mobile">
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
            {/* <Breakpoint small down>
              <div className='nav-bar-mobile'>
              <img src={lessThan} alt="" onClick={handleGoBack} style= {{height:"30px"}}/>
              <p>
                {location.pathname ? location.pathname.slice(1).toUpperCase() : "HOME"} 
              </p>
              </div>
        </Breakpoint> */}
        </nav>
    </div>
    )
  }
  
  export default NavigationBar