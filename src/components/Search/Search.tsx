import { Button, Stack, SimpleGrid, Box, Input } from "@chakra-ui/react";
import { FC, useState } from "react";
import useSearchParamsState from "../../hooks/useSearchParamsState";

type SearchProps = {};

const Search: FC<SearchProps> = () => {
  const [searchParamsState, setSearchParamsState] = useSearchParamsState();
  const [searchState, setSearchState] = useState<string>(
    atob(searchParamsState),
  );

  return (
    <>
      <SimpleGrid columns={2} spacing={10}>
        <Box>
          <Stack direction={["column", "row"]} spacing="24px">
            <Input
              variant="outline"
              placeholder="Search for..."
              value={searchState}
              onChange={(event) => setSearchState(event.target.value)}
            />
            <Button
              colorScheme="blue"
              onClick={(_) => setSearchParamsState(btoa(searchState))}
            >
              Search
            </Button>
          </Stack>
        </Box>
        <Box>
          <h1>{searchParamsState}</h1>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Search;
