import { Header, Text } from "grommet";

import { FC } from "react";

interface NavbarPropsI {
  title: string;
}

export const Navbar: FC<NavbarPropsI> = ({ title }) => (
  <Header
    gridArea='header'
    background='brand'
    as='header'
    pad='small'
    height='60px'
    flex={false}
  >
    <Text>{title}</Text>
  </Header>
);
