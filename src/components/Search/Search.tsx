import {
  Box,
  Button,
  Container,
  Input,
  Progress,
  Stack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { FC, useState } from "react";
import useSearchParamsState from "../../hooks/useSearchParamsState";

const fetchSearchResults = () =>
  fetch("http://localhost:9000/search").then((response) => response.json());

type SearchProps = {};

const Search: FC<SearchProps> = () => {
  const [searchParamsState, setSearchParamsState] = useSearchParamsState();
  const [searchState, setSearchState] = useState<string>(
    atob(searchParamsState),
  );

  const { isLoading, error, data } = useQuery(
    ["search", searchParamsState],
    fetchSearchResults,
  );

  const search = (input: string): void => {
    setSearchParamsState(btoa(input));
  };

  return (
    <>
      <Stack>
        <Container maxWidth="container.md">
          <Stack direction={["column", "row"]} spacing="24px">
            <Input
              variant="outline"
              placeholder="Search for something!"
              value={searchState}
              onChange={(event) => setSearchState(event.target.value)}
              onKeyDown={(event) =>
                event.key === "Enter" ? search(searchState) : null
              }
            />
            <Button colorScheme="blue" onClick={(_) => search(searchState)}>
              Search
            </Button>
          </Stack>
        </Container>
        <Box marginTop="16">
          {isLoading && <Progress size="xs" isIndeterminate />}
          {error && <h1>error</h1>}
          {data && <h1>Data Has Been Found!!</h1>}
        </Box>
      </Stack>
    </>
  );
};

export default Search;
