import  { Breakpoint } from 'react-socks';
import { Link } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import ProfilePage from '../pages/ProfilePage';
import ContactPage from '../pages/ContactPage'

const NavigationBar = () => {
  return (
      <div>
      <nav>
      <Breakpoint medium up>
          <div className='nav-bar'>
            <Link to='/' component={<HomePage />}>
              Variety
            </Link>
            <div className='nav-bar'>
              <ul className='nav-bar'>
                <li>
                  <Link to='/' component={<HomePage />}>
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
                  <Link to='/profile' component={<ProfilePage />}>
                    MY PROFILE
                  </Link>
                </li>
                <li>
                  <Link to='/contact' component={<ContactPage />}>
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
            <div className='nav-bar-mobile'></div>
      </Breakpoint>
        </nav>
    </div>
    )
  }
  
  export default NavigationBar