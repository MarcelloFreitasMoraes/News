import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./ui/theme/theme.ts";
import { AppRoutes } from "./config/routes/app-routes.tsx";
import { LanguageProvider } from "./context/LanguageContext.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./context/react-query.ts";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <LanguageProvider>     
          <AppRoutes />
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
