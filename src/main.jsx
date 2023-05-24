import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "dayjs/locale/en-gb";
import { BrowserRouter } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import SessionContextProvider from "./contexts/SessionContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SessionContextProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
          <App />
        </LocalizationProvider>
      </SessionContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
