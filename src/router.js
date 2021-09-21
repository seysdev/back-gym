import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { authRouter } from "modules/auth";
export function RouterMain(props) {
  return (
    <Router>
      <Switch>
        {authRouter.map((router, id) => (
          <Route key={id} path={router.path} render={() => router.component} />
        ))}
      </Switch>
    </Router>
  );
}
