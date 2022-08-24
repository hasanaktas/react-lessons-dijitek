import * as React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useRecoilValue } from "recoil";
import { countriesAtom } from "../store/countries";

const CountryList = () => {
  const countries = useRecoilValue(countriesAtom);
  console.log(countries);
  return (
    <Box sx={{ width: 360, bgcolor: "background.paper" }}>
      <List>
        {countries.map((country, countryIndex) => {
          return (
            <ListItem key={countryIndex} disablePadding divider>
              <ListItemButton>
                {country.flag}
                <ListItemText
                  sx={{ ml: 2 }}
                  primary={country.name.common}
                  secondary={country.region}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default CountryList;
