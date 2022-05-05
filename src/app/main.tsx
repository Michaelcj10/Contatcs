/** @jsx createElement */
import { createElement, Fragment, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../components/navigation/header";
import "../init";

const Home = lazy(() => import("../pages/home"));
const About = lazy(() => import("../pages/about"));

function App() {
  return (
    <Fragment>
      <Suspense fallback={null}>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/about" component={About} />
        </Switch>
      </Suspense>
    </Fragment>
  );
}

export default App;
