// eslint-disable-next-line import/no-extraneous-dependencies
import "./App.css";
import { MDBBtn } from "mdb-react-ui-kit";
import { Outlet } from "react-router-dom";
import UserContextProvider from "./context/UserContext";
import ProContextProvider from "./context/ProContext";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <ProContextProvider>
          <Outlet />
        </ProContextProvider>
      </UserContextProvider>
      <MDBBtn>Button</MDBBtn>
      <p>test</p>
    </div>
  );
}

export default App;
