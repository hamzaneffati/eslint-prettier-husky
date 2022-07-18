import { useQuery } from "react-query";
import { GraphQLClient } from "graphql-request";

export const useGQLQuery = (
  key: string,
  query: any,
  variables?: any,
  config = {}
) => {
  const endpoint = "https://countries.trevorblades.com/";
  const headers = {
    headers: {
      authorization: "Bearer token goes here",
    },
  };

  const graphQLClient = new GraphQLClient(endpoint, headers);

  const fetchData = () => graphQLClient.request(query, variables);

  return useQuery(key, fetchData, config);
};
