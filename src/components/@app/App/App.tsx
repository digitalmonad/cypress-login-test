import { Route, Switch } from "react-router-dom";

import { HomeView } from "../../views/HomeView";
import { Navbar } from "../../organisms/Navbar/Navbar";

export const App = () => {
  return (
    <div>
      <Switch>
        <Navbar></Navbar>
        <Route path='/' component={HomeView} />
      </Switch>
    </div>
  );
};
