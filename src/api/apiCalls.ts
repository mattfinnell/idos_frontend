import { httpPostRequest } from "./httpMethods";

const endpoints = {
  producers: "/api/producers",
};

export type CreateProducerRequestType = {
  name: string;
  sport_type: Array<string>;
  staff: Array<string>;
};

const createProducer = async (data: CreateProducerRequestType) => {
  return httpPostRequest(endpoints.producers, data);
};

const apiCalls = { createProducer };
export default apiCalls;
