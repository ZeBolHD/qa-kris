import { gql } from "@/__generated__/gql";
import apolloClient from "../apollo-client";

const GET_HOME_PAGE_SERVICES = gql(/* GraphQL */ `
  query GET_HOME_PAGE_SERVICES {
    homePage {
      data {
        attributes {
          services {
            data {
              attributes {
                name
                price
                time

                description
              }
            }
          }
        }
      }
    }
  }
`);

export const getHomePageServices = async () => {
  const { data } = await apolloClient.query({
    query: GET_HOME_PAGE_SERVICES,
    fetchPolicy: "no-cache",
  });

  return data;
};
