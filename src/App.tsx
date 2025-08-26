import { BrowserRouter } from "react-router";
import { GlobalLayout } from "./components/layouts/global-layout";
import { ThemeProvider } from "./components/layouts/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <GlobalLayout />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
