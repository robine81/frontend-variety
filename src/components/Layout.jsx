import Navigation from "./NavigationBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
