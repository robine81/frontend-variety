import LoginSignupSearch from "../components/LoginSignupSearch";
import  { Breakpoint } from 'react-socks';

const HomePage = () => {
  return (
    <>
      <Breakpoint small down>
      <LoginSignupSearch></LoginSignupSearch>
      </Breakpoint>
      <div className="home">
        <img
          className="main-home-image"
          src="/src/assets/images/CircusVariety2618_web.jpeg"
          alt="placeholder"
        ></img>
        <div className="gallery">
          <img
            className="home-image"
            src="/src/assets/images/placeholder.png"
            alt="placeholder"
          ></img>
          <img
            className="home-image"
            src="/src/assets/images/placeholder.png"
            alt="placeholder"
          ></img>
          <img
            className="home-image"
            src="/src/assets/images/placeholder.png"
            alt="placeholder"
          ></img>
        </div>
      </div>

    </>
  );
};

export default HomePage;
