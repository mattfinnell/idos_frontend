import { rest } from "msw";
import { API_URL } from "../api/httpMethods";

const data = {
  errors: {
    foo: ["Error One", "Error Two"],
    bar: ["Thing", "Stuff", "Items"],
    baz: ["I just have one Error"],
  },
};

export const mockedProducersPostErrors = rest.post(
  API_URL + "/api/producers",
  (_, response, context) => {
    return response(context.json(data));
  },
);

const mockedProducersCalls = [mockedProducersPostErrors];

export default mockedProducersCalls;
