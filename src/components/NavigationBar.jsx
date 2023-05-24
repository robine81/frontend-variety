import  { Breakpoint } from 'react-socks';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

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
                <img className="logo" src="/src/assets/images/variety_logo.jpeg" alt="variety" />
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
              <div className='nav-bar-mobile'>
              <img src="/src/assets/images/favicons/icons8-less-than-50_1.png" alt="" onClick={handleGoBack} style= {{height:"30px"}}/>
              <p>{location.pathname.slice(1).toUpperCase()} </p>
              </div>
        </Breakpoint>
        </nav>
    </div>
    )
  }
  
  export default NavigationBar