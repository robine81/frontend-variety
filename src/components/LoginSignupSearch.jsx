
const LoginSignupSearch = () =>{
  return (
    <div className='header-items'>
        <ul>
            <li>
                <a href='/login'>
                  Login
                </a>
            </li>
            <li>
                <a href='/signup'>
                  Sign-Up
                </a>
            </li>
            </ul>
        <form role='search'>
            <input type='search' placeholder='Search'/>
            <button type='submit'>
            Search
            </button>
        </form>
    </div>  
  )
}

export default LoginSignupSearch