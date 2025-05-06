import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom"; // If you use RouterProvider
import { router } from "./routes/Router"; // Your routes definition
import Provider from "./lib/Provider"; // Your context provider
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router} /> {/* Pass the router */}
    </Provider>
  </StrictMode>
);
