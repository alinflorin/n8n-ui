import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HashRouter, Route, Routes } from "react-router";
import NotFound from "./NotFound.tsx";
import Home from "./Home.tsx";
import { Provider } from "@/components/provider.tsx";
import AiOffice from "./routes/AiOffice.tsx";
import { setupAxiosDevRequestInterceptor } from "./interceptors/basic-auth-interceptor.ts";

if (import.meta.env.DEV) {
  setupAxiosDevRequestInterceptor();
}

createRoot(document.getElementById("root")!).render(
  <Provider>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="ai-office" element={<AiOffice />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  </Provider>
);
