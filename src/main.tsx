import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes/Router";
import Provider from "./lib/Provider";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
     
        <RouterProvider router={router} />
      
    </Provider>
  </StrictMode>
);
