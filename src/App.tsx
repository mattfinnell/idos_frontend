import { ChakraProvider, Container } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { FC } from "react";
import NavBar from "./components/Navigation/NavBar";
import { routes } from "./components/Navigation/routes";

const queryClient = new QueryClient();

type AppProps = {};

const App: FC<AppProps> = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <BrowserRouter>
          <div className="App">
            <NavBar />
            <Container maxWidth="container.xl" marginTop="12">
              <Routes>
                {routes.map((route) => (
                  <Route path={route.path} Component={route.component} />
                ))}
              </Routes>
            </Container>
          </div>
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
