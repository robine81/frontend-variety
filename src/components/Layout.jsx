import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "/layout.css";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";
import { indigo } from '@mui/material/colors';
import { green } from '@mui/material/colors';


const Layout = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: indigo[500],
      },
      secondary: {
        main: green[200],
      },
    },
    typography: {
      fontFamily: [
        'roboto',
      ].join(','),
    },
  });
  
  return (
    <div className="layout-wrapper">
      <ThemeProvider theme={theme}>
      <NavigationBar />
        <main>{children}</main>
      <Footer />
    </ThemeProvider>
    </div>
  );
};

export default Layout;
