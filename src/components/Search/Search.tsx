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
import JsonViewer from "../Utilities/JsonViewer";

const fetchSearchResults = async ({ queryKey }: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, searchParamsState] = queryKey;

  if (searchParamsState === "") {
    return {};
  }

  const data = await fetch(`http://localhost:9000/search/${searchParamsState}`);

  return await data.json();
};

type SearchProps = {};

const Search: FC<SearchProps> = () => {
  const [searchParamsState, setSearchParamsState] = useSearchParamsState();
  const [searchState, setSearchState] = useState<string>(
    atob(searchParamsState),
  );

  const search = (input: string): void => setSearchParamsState(btoa(input));

  const { data, error, status } = useQuery(
    ["search", searchParamsState],
    fetchSearchResults,
    { retry: false },
  );

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
        <Box marginTop="16" textAlign={["left"]}>
          <>
            {status === "error" && (
              <pre>Error: {JSON.stringify(error, null, 2)}</pre>
            )}
            {status === "loading" && <Progress size="xs" isIndeterminate />}
            {status === "success" && <JsonViewer data={data} />}
          </>
        </Box>
      </Stack>
    </>
  );
};

export default Search;
