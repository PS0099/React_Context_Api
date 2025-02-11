import "./App.css";
import Navbar from "./Compo/NavBar";
import OrderSuccess from "./Compo/Os";
import { ShoppingProvider } from "./Store/Context";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <ShoppingProvider>
      <div>
        <Navbar/>
        {/* <OrderSuccess/> */}
        <Outlet />
      </div>
    </ShoppingProvider>
  );
}

export default App;
