import { Box } from "grommet";
import { FC } from "react";

interface NavbarPropsI {}

export const Navbar: FC<NavbarPropsI> = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation='medium'
    style={{ zIndex: 1 }}
    {...props}
  />
);
