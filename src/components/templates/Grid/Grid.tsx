import { Box, BoxProps, Grid, GridProps, Main } from "grommet";

import { FC } from "react";
import styled from "styled-components";

interface AppWrapperPropsI extends GridProps {}

export const AppWrapper: FC<AppWrapperPropsI> = ({ children, ...props }) => (
  <Grid
    fill
    rows={["auto", "flex"]}
    columns={["auto", "flex"]}
    areas={[
      { name: "header", start: [0, 0], end: [1, 0] },
      { name: "sidebar", start: [0, 1], end: [0, 1] },
      { name: "main", start: [1, 1], end: [1, 1] },
    ]}
    {...props}
  >
    {children}
  </Grid>
);

interface AppContentPropsI extends BoxProps {}

export const AppContent: FC<AppContentPropsI> = ({ children, ...props }) => (
  <Main gridArea='main' overflow='auto' {...props}>
    {children}
  </Main>
);

export const Container = styled(Box)`
  min-height: auto;
`;
