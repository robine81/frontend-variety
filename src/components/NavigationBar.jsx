import  { Breakpoint, BreakpointProvider } from 'react-socks';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
      <div>
      <nav>
      <Breakpoint medium up>
          <div className='nav-bar'>
            <Link to='/'>
              Variety
            </Link>
            <div className='nav-bar'>
              <ul className='nav-bar'>
                <li>
                  <Link to='/'>
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
            <div className='nav-bar-mobile'></div>
      </Breakpoint>
        </nav>
    </div>
    )
  }
  
  export default NavigationBar