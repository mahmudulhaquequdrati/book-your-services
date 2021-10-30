import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import AddServices from "./components/AddServices/AddServices";
import AllOrder from "./components/AllOrder/AllOrder";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MyOrder from "./components/MyOrder/MyOrder";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/placeorder/:id">
            <PlaceOrder></PlaceOrder>
          </Route>
          <PrivateRoute path="/myorders">
            <MyOrder></MyOrder>
          </PrivateRoute>
          <PrivateRoute path="/addservices">
            <AddServices></AddServices>
          </PrivateRoute>
          <PrivateRoute path="/allorders">
            <AllOrder></AllOrder>
          </PrivateRoute>

          <PrivateRoute path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
