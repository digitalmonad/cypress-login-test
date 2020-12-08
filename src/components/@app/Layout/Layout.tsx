import { FC } from "react";
import { Root } from "./Layout.styled";

interface LayoutPropsI {
  children: React.ReactNode;
}

export const Layout: FC<LayoutPropsI> = ({ children }) => (
  <Root>{children}</Root>
);
