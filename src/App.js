import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Screens/Header";
import Login from "./Screens/Login";
import Profile from "./Screens/Profile";
import Signup from "./Screens/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <div className="main">
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/" exact component={Profile} />
      </div>
    </BrowserRouter>
  );
};

export default App;
