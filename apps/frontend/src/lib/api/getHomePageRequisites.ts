import { gql } from "@/__generated__/gql";
import apolloClient from "../apollo-client";

const GET_HOME_PAGE_REQUISITES_NUMBER = gql(/* GraphQL */ `
  query GET_HOME_PAGE_HERO_REQUISITES_NUMBER {
    homePage {
      data {
        attributes {
          requisites_number
        }
      }
    }
  }
`);

export const getHomePageRequisitesNumber = async () => {
  const { data } = await apolloClient.query({
    query: GET_HOME_PAGE_REQUISITES_NUMBER,
    fetchPolicy: "no-cache",
  });

  return data;
};
