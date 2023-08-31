import { UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { Factory } from "fishery";

type AxiosReactQueryMutationType = UseMutationResult<
  AxiosResponse<any, any>,
  unknown,
  any,
  unknown
>;
type MutationErrorTransientParams = {
  errors: object;
};
export const axiosReactQueryMutationFactory = Factory.define<
  AxiosReactQueryMutationType,
  MutationErrorTransientParams
>(({ transientParams }) => {
  return {
    data: {
      data: {
        errors: transientParams.errors,
      },
    },
  } as AxiosReactQueryMutationType;
});
