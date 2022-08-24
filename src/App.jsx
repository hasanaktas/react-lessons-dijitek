import * as React from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import axios from "axios";
import { restCountriesApi } from "./utils";
import { useRecoilState, useSetRecoilState } from "recoil";
import { countriesAtom } from "./store/countries";
import CountryList from "./components/CountryList";

const App = () => {
  const setCountries = useSetRecoilState(countriesAtom);

  React.useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    const { data } = await restCountriesApi.get("/v3.1/all");

    setCountries(data);
  };

  return (
    <Container sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
      <CountryList />
    </Container>
  );
};

export default App;
