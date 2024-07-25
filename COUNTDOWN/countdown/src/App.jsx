//Router
import { Outlet } from "react-router-dom";

// IMG
import NewYear from "./assets/newyear.jpg";

// CSS
import "./App.css";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${NewYear})` }}>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
