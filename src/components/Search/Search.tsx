import { Button, Stack, SimpleGrid, Box, Input } from "@chakra-ui/react";
import { FC, useState } from "react";

type SearchProps = {};

const Search: FC<SearchProps> = () => {
  const [searchString, setSearchString] = useState<string>("DefaultStateText");
  const [results, setResults] = useState<string>(searchString);

  return (
    <>
      <SimpleGrid columns={2} spacing={10}>
        <Box>
          <Stack direction={["column", "row"]} spacing="24px">
            <Input
              variant="outline"
              placeholder="Search for..."
              value={searchString}
              onChange={(event) => setSearchString(event.target.value)}
            />
            <Button
              colorScheme="blue"
              onClick={(_) => setResults(searchString)}
            >
              Search
            </Button>
          </Stack>
        </Box>
        <Box>
          <h1>{results}</h1>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Search;
