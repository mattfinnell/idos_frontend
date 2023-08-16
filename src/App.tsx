import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChakraProvider } from '@chakra-ui/react';
import NavBarWithSubnavigation from './components/Navigation/NavBar';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './components/Navigation/routes';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <BrowserRouter>
          <div className="App">
            <NavBarWithSubnavigation/>
              <Routes>
                {routes.map((route) => <Route path={route.path} Component={route.component}/>)}
              </Routes>
          </div>
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
