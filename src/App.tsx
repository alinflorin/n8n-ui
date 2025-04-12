import { Outlet } from "react-router";
import env from "./env";

function App() {
  return (
    <div>
      <div>
        <Outlet />
      </div>
      <div>{env.VERSION}</div>
    </div>
  );
}

export default App;
