import { RouterProvider } from "react-router-dom";
import router from "./Router/index.jsx";

const App = () => {
  return (
    <RouterProvider router={router}/>
  );
};

export default App;