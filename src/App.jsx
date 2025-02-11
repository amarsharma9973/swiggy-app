import React from "react";
import ReactDOM from "react-dom/client";
import About from "./components/About";
import Body from "./Body";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />
    },
    {
      path: "/about",
      element: <About />,
    }
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);