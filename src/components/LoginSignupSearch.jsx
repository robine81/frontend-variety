import { Link } from "react-router-dom"
import Button from '@mui/material/Button';

const LoginSignupSearch = () =>{
  return (
    <div className='header-mobile-items'>
      <Link to='/login'>
        <Button variant="outlined">Login</Button>
      </Link>
      <Link to='/signup'>
        <Button variant="outlined">Signup</Button>
      </Link>
      <form role='search'>
          <input type='search' placeholder='Search'/>
          <Button variant="outlined" type='submit'>
          Search
          </Button>
      </form>
    </div>  
  )
}

export default LoginSignupSearch