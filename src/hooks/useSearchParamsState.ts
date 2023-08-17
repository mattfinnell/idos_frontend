import { useSearchParams } from "react-router-dom";

const useSearchParamsState = (
  searchParamName: string = "q",
  defaultValue: string = "",
): readonly [
  searchParamsState: string,
  setSearchParamsState: (newState: string) => void,
] => {
  const [searchParams, setSearchParams] = useSearchParams();

  const acquiredSearchParam = searchParams.get(searchParamName);
  const searchParamsState = acquiredSearchParam ?? defaultValue;

  const setSearchParamsState = (newState: string) => {
    const next = Object.assign(
      {},
      [...searchParams.entries()].reduce(
        (o, [key, value]) => ({ ...o, [key]: value }),
        {},
      ),
      { [searchParamName]: newState },
    );
    setSearchParams(next);
  };
  return [searchParamsState, setSearchParamsState];
};

export default useSearchParamsState;
