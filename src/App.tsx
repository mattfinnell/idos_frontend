import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Box, ChakraProvider, SimpleGrid } from '@chakra-ui/react';
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
            {/* <header className="App-header"> */}
              <SimpleGrid columns={2} spacing={10}>
                <Box>
                  <img src={logo} className="App-logo" alt="logo" />
                </Box>
                <Box>
                  <Routes>
                    {routes.map((route, index) => <Route path={route.path} Component={route.component}/>)}
                  </Routes>
                </Box>
              </SimpleGrid>
            {/* </header> */}
          </div>
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
