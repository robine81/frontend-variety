import Navigation from "./NavigationBar";
import Footer from "./Footer";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


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
