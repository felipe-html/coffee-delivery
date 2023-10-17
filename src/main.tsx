import { BrowserRouter } from "react-router-dom";
import { Root } from "./routes";
import { ShoppingCartProvider } from "./hooks/useShoppingCart";
import { ToastContainer, toast } from "react-toastify";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <ShoppingCartProvider>
      <ToastContainer position="bottom-right" />
      <Root />
    </ShoppingCartProvider>
  </BrowserRouter>
);
