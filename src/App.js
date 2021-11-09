import Home from "./components/Home";
import { theme } from "./components/styles";
import { ThemeProvider } from '@material-ui/core';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
