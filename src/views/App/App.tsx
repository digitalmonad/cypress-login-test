import { AppContent, AppWrapper } from "../../components/templates/Grid";
import { Route, Switch } from "react-router-dom";

import { HomeView } from "../Home.view";
import { Navbar } from "../../components/organisms/Navbar/Navbar";

export const App = () => {
  return (
    <AppWrapper>
      <Navbar title='Awasome App' />
      <AppContent>
        <Switch>
          <Route path='/' component={HomeView} />
        </Switch>
      </AppContent>
    </AppWrapper>
  );
};
