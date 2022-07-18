import gql from "graphql-tag";

export const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
    }
  }
`;

export const GET_COUNTRY = gql`
  query ($code: ID!) {
    country(code: $code) {
      name
    }
  }
`;
