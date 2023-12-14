import React from "react";
import ReactDOM from "react-dom/client";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import "./index.css";
import App from "./App";

import { AuthProvider } from "./AuthContext/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

// react query client
const queryClient = new QueryClient()
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
    <App />
    </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

