import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./Components/Router/Router";

function App() {
  return (
   <>
     <RouterProvider router={router}>
      
      </RouterProvider>
      <Toaster></Toaster>
   </>
  );
}

export default App;
