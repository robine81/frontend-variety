import  { Breakpoint, BreakpointProvider } from 'react-socks';

const NavigationBar = () => {
    return (
      <div>
      <nav>
      <Breakpoint medium up>
          <div className='nav-bar'>
            <a chref='/'>
              Variety
            </a>
            <div className='nav-bar'>
              <ul className='nav-bar'>
                <li>
                  <a href='/'>
                    HOME
                  </a>
                </li>
                <li>
                  <a href='/all-events'>
                    EVENTS
                  </a>
                </li>
                <li>
                  <a href='/all-artists'>
                    ARTISTS
                  </a>
                </li>
                <li>
                  <a href='/profile'>
                    MY PROFILE
                  </a>
                </li>
                <li>
                  <a href='/contact'>
                    CONTACT
                  </a>
                </li>
                <li>
                  <a href='/sign-up'>
                    SIGN-UP
                  </a>
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