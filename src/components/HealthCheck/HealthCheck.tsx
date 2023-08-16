import { useQuery } from "@tanstack/react-query";

const fetchTodo = () =>
  fetch("http://localhost:9000/todo").then((response) => response.json());

const HealthCheck = () => {
  const { isLoading, error, data } = useQuery(["todoData"], fetchTodo);

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>error</h1>}
      {data && (
        <ul>
          {data.map(
            (
              item: { id: Number; description: string; isItDone: boolean },
              index: Number,
            ) => (
              <li key={`key-${index}`}>{item.description}</li>
            ),
          )}
        </ul>
      )}
    </>
  );
};

export default HealthCheck;
