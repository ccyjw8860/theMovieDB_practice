import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../Components/Header";
import Home from "./Home";
import Movie from "./Movie";
import TV from "./TV";
import store from "../redux/store";

const Routers = () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Provider store={store}>
            <Route path="/movie" exact component={Movie} />
            <Route path="/tv" exact component={TV} />
          </Provider>
        </Switch>
      </>
    </Router>
  );
};

export default Routers;
