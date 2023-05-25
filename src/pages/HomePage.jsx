import LoginSignupSearch from "../components/LoginSignupSearch";
import  { Breakpoint } from 'react-socks';
import homeImg from '../images/CircusVarietyMobile.png'
import placeHolder from '../images/placeholder.png'
import Layout from "../components/Layout";

const HomePage = () => {
  return (
    <>

      <Breakpoint small down>
      </Breakpoint>
      <div className="back-color">
      <div className="home">
      <div className="stage">
      <div className="actor"></div>
      <div className="actor"></div>
      <div className="actor"></div>
     <div className="actor"></div>
    </div>
    </div>
        {/*<img
          className="main-home-image"
          src={homeImg}
          alt="placeholder"
  ></img>*/}
      </div>

    </>
  );
};

export default HomePage;
