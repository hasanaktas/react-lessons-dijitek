import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Box, CssBaseline } from "@mui/material";
import { RecoilRoot } from "recoil";
ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <Box sx={{ bgcolor: "rgb(240,240,240)" }}>
      <CssBaseline />
      <App />
    </Box>
  </RecoilRoot>
);
