import LoginSignupSearch from "../components/LoginSignupSearch";
import  { Breakpoint } from 'react-socks';
import homeImg from '../images/CircusVariety.jpeg'
import placeHolder from '../images/placeholder.png'

const HomePage = () => {
  return (
    <>
      <Breakpoint small down>
      <LoginSignupSearch></LoginSignupSearch>
      </Breakpoint>
      <div className="home">
        <img
          className="main-home-image"
          src={homeImg}
          alt="placeholder"
        ></img>
        <div className="gallery">
          <img
            className="home-image"
            src={placeHolder}
            alt="placeholder"
          ></img>
          <img
            className="home-image"
            src={placeHolder}
            alt="placeholder"
          ></img>
          <img
            className="home-image"
            src={placeHolder}
            alt="placeholder"
          ></img>
        </div>
      </div>

    </>
  );
};

export default HomePage;
