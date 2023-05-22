import Navigation from './NavigationBar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
       <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
