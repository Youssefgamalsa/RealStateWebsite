import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./modules/Shared Components/Home/Home"
import { ToastContainer } from 'react-toastify';
import MasterLayout from './modules/Shared Components/MasterLayout/MasterLayout';
import Card from "./modules/Card/Card"
function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: < MasterLayout/>,
      // errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        {path:"card", element:<Card/>}
      ],
    },
  ]);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
