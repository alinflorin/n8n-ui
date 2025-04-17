import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import NotFound from "./NotFound.tsx";
import Home from "./Home.tsx";
import { Provider } from "@/components/ui/provider";
import AiOffice from "./pages/AiOffice.tsx";
import { setupAxiosDevRequestInterceptor } from "./interceptors/basic-auth-interceptor.ts";

if (import.meta.env.DEV) {
  setupAxiosDevRequestInterceptor();
}

const calculateBasePath = () => {
  if (import.meta.env.DEV) {
    return "/";
  }
  const pathname = window.location.pathname;
  
  // You can modify the number of parts here if the base path structure is always known
  const baseSegments = pathname.split('/').slice(0, 5).join('/');  // Adjust '5' depending on your URL structure
  
  return baseSegments;
};

createRoot(document.getElementById("root")!).render(
  <Provider>
    <BrowserRouter basename={calculateBasePath()}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="ai-office" element={<AiOffice />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
