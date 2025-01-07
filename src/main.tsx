import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "@/components/ui/provider"
import "./index.css"
import App from "./App.tsx"
import { BrowserRouter } from "react-router-dom"
import { ScalesProvider } from "./providers/ScalesContext.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <ScalesProvider>
          <App />
        </ScalesProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
)
