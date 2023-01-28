import "../styles/globals.css";
import { StoreProvider } from "../lib/StoreContext";

export default function App({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />{" "}
    </StoreProvider>
  );
}
