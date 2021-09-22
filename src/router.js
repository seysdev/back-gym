import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { authRouter } from "modules/auth";
import { userRouter } from "modules/users";
export function RouterMain(props) {
  const routesMain = [...authRouter, ...userRouter];
  return (
    <Router>
      <Switch>
        {routesMain.map((router, id) => (
          <Route key={id} path={router.path} render={() => router.component} />
        ))}
        <Redirect from="*" to="/login" />
      </Switch>
    </Router>
  );
}
