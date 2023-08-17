import {
  Button,
  Stack,
  SimpleGrid,
  Box,
  Input,
  Container,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import useSearchParamsState from "../../hooks/useSearchParamsState";

type SearchProps = {};

const Search: FC<SearchProps> = () => {
  const [searchParamsState, setSearchParamsState] = useSearchParamsState();
  const [searchState, setSearchState] = useState<string>(
    atob(searchParamsState),
  );

  const search = (input: string): void => setSearchParamsState(btoa(input));

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
        <Box>
          <h1>{searchParamsState}</h1>
        </Box>
      </Stack>
    </>
  );
};

export default Search;
