import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
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
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/myorders">
            <MyOrder></MyOrder>
          </PrivateRoute>
          <Route path="/addservices">
            <AddServices></AddServices>
          </Route>
          <Route path="/allorders">
            <AllOrder></AllOrder>
          </Route>
          <Route path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
