import Layout from "../components/Layout"
import LoginSignupSearch from "../components/LoginSignupSearch"

const HomePage = () => {
  return (
    <Layout>
      <LoginSignupSearch></LoginSignupSearch>
      <div className='home'>
        <img className='main-home-image' src='src/assets/images/placeholder.png' alt='placeholder'></img>
        <div className='gallery'>
          <img className='home-image' src='src/assets/images/placeholder.png' alt='placeholder'></img>
          <img className='home-image' src='src/assets/images/placeholder.png' alt='placeholder'></img>
          <img className='home-image' src='src/assets/images/placeholder.png' alt='placeholder'></img>  
        </div>
        </div>
    </Layout>
  )
}

export default HomePage