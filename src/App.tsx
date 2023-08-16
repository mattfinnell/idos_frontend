import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { ChakraProvider } from '@chakra-ui/react';
import NavBarWithSubnavigation from './components/NavBar/NavBar';

const fetchTodo = () => fetch("http://localhost:9000/todo").then(response => response.json());

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <div className="App">
          <NavBarWithSubnavigation/>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <HealthCheck />
          </header>
        </div>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

const HealthCheck = () => {
  const {isLoading, error, data} = useQuery(['todoData'], fetchTodo);

  return (
    <>
      {isLoading && (<h1>Loading...</h1>)}
      {error && (<h1>error</h1>)}
      {data && (
        <ul>
          {data.map(
            (item: {id: Number, description: string, isItDone: boolean}, index: Number) => 
              <li key={`key-${index}`}>{item.description}</li>)}
        </ul>
      )}
    </>
  );
};

export default App;
