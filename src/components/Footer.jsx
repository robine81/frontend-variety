const Footer = () => {
  return (
    <div>
      <footer>
        <div className='footer'>
          <a href='/'> 
          <svg width={30} height={24}> <use xlinkHref='#home' /></svg>
          </a>
          <span>© 2023 Variety</span>
        </div>
        <ul className='footer'>
          <li>
            <a>Soundcloud
              <svg width={24} height={24}>
                <use xlinkHref='#soundcloud' />
              </svg>
            </a>
          </li>
          <li>
            <a href='www.instagram.com/variety'>Instagram
              <svg width={24} height={24}>
                <use xlinkHref='#instagram' />
              </svg>
            </a>
          </li>
          <li>
            <a href='www.facebook.com/variety'>Facebook
              <svg width={24} height={24}>
                <use xlinkHref='#facebook' />
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer